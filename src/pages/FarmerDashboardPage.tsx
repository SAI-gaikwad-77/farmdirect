import {
  MapPin,
  Package,
  Scale,
  Calendar,
  Search,
  Plus,
  Sprout,
} from "lucide-react";
import { useApp } from "../context/useApp";
import { Button } from "../components/Button";
import { DemoBadge } from "../components/DemoBadge";
import { DEMO_FARMER } from "../data/mockData";

export function FarmerDashboardPage() {
  const { navigate, produces, setActiveProduce } = useApp();

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-3">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Farmer Dashboard
            </h1>
            <DemoBadge />
          </div>
          <p className="text-gray-500">
            Welcome back, <strong className="text-gray-700">{DEMO_FARMER.name}</strong>
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button
            onClick={() => {
              if (produces.length > 0) setActiveProduce(produces[0]);
              navigate("buyer-comparison");
            }}
          >
            <Search className="h-4 w-4" /> Find Best Buyers
          </Button>
          <Button variant="outline" onClick={() => navigate("add-produce")}>
            <Plus className="h-4 w-4" /> Add Produce
          </Button>
        </div>
      </div>

      {/* Profile card */}
      <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
            <Sprout className="h-7 w-7" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              {DEMO_FARMER.name}
            </h2>
            <p className="flex items-center gap-1 text-sm text-gray-500">
              <MapPin className="h-3.5 w-3.5" /> {DEMO_FARMER.location}
            </p>
          </div>
        </div>
      </div>

      {/* Current produce listing */}
      <h2 className="mt-10 text-lg font-bold text-gray-900">My Produce</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {produces.map((p) => (
          <div
            key={p.id}
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Package className="h-5 w-5" />
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                {DEMO_FARMER.availability}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">{p.crop}</h3>
            <div className="mt-4 space-y-2.5 text-sm">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-gray-500">
                  <Scale className="h-4 w-4" /> Quantity
                </span>
                <span className="font-semibold text-gray-900">
                  {p.quantity.toLocaleString()} kg
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-gray-500">
                  <Scale className="h-4 w-4" /> Quality
                </span>
                <span className="font-semibold text-gray-900">
                  {p.quality}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-gray-500">
                  <MapPin className="h-4 w-4" /> Location
                </span>
                <span className="font-semibold text-gray-900">
                  {p.location}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-gray-500">
                  <Calendar className="h-4 w-4" /> Available
                </span>
                <span className="font-semibold text-gray-900">
                  {p.availableDate}
                </span>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="mt-5 w-full"
              onClick={() => {
                setActiveProduce(p);
                navigate("buyer-comparison");
              }}
            >
              <Search className="h-4 w-4" /> Find Buyers
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
