import {
  ShoppingBasket,
  MapPin,
  Package,
  Scale,
  Calendar,
  Plus,
  IndianRupee,
} from "lucide-react";
import { useApp } from "../context/useApp";
import { Button } from "../components/Button";
import { DemoBadge } from "../components/DemoBadge";
import { DEMO_BUYER } from "../data/mockData";

export function BuyerDashboardPage() {
  const { navigate, requirements } = useApp();
  const req = DEMO_BUYER.requirement;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-3">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Buyer Dashboard
            </h1>
            <DemoBadge />
          </div>
          <p className="text-gray-500">
            Welcome, <strong className="text-gray-700">{DEMO_BUYER.name}</strong>
          </p>
        </div>
        <Button onClick={() => navigate("post-requirement")}>
          <Plus className="h-4 w-4" /> Post Requirement
        </Button>
      </div>

      {/* Profile card */}
      <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-900 text-white">
            <ShoppingBasket className="h-7 w-7" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              {DEMO_BUYER.name}
            </h2>
            <p className="flex items-center gap-1 text-sm text-gray-500">
              <MapPin className="h-3.5 w-3.5" /> {DEMO_BUYER.location}
            </p>
          </div>
        </div>
      </div>

      {/* Current requirement */}
      <h2 className="mt-10 text-lg font-bold text-gray-900">
        Current Requirement
      </h2>
      <div className="mt-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <Package className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                {req.product}
              </h3>
              <p className="text-sm text-gray-500">Grade {req.quality}</p>
            </div>
          </div>
          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
            Required within 5 days
          </span>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-gray-50 px-4 py-3.5">
            <p className="flex items-center gap-1.5 text-xs text-gray-500">
              <Scale className="h-3.5 w-3.5" /> Quantity
            </p>
            <p className="mt-1 font-bold text-gray-900">
              {req.quantity.toLocaleString()} kg
            </p>
          </div>
          <div className="rounded-xl bg-gray-50 px-4 py-3.5">
            <p className="flex items-center gap-1.5 text-xs text-gray-500">
              <MapPin className="h-3.5 w-3.5" /> Location
            </p>
            <p className="mt-1 font-bold text-gray-900">{req.location}</p>
          </div>
          <div className="rounded-xl bg-gray-50 px-4 py-3.5">
            <p className="flex items-center gap-1.5 text-xs text-gray-500">
              <Calendar className="h-3.5 w-3.5" /> Required By
            </p>
            <p className="mt-1 font-bold text-gray-900">{req.requiredDate}</p>
          </div>
        </div>
      </div>

      {/* Posted requirements */}
      {requirements.length > 0 && (
        <>
          <h2 className="mt-10 text-lg font-bold text-gray-900">
            Posted Requirements
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {requirements.map((r) => (
              <div
                key={r.id}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-3 flex items-center gap-2">
                  <Package className="h-5 w-5 text-emerald-600" />
                  <h3 className="font-bold text-gray-900">{r.product}</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Quantity</span>
                    <span className="font-semibold text-gray-900">
                      {r.quantity.toLocaleString()} kg
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Quality</span>
                    <span className="font-semibold text-gray-900">
                      {r.quality}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Location</span>
                    <span className="font-semibold text-gray-900">
                      {r.location}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Required Date</span>
                    <span className="font-semibold text-gray-900">
                      {r.requiredDate}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-100 pt-2">
                    <span className="text-gray-500">Offered Price</span>
                    <span className="flex items-center font-bold text-emerald-600">
                      <IndianRupee className="h-3.5 w-3.5" />
                      {r.offeredPrice}/kg
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
