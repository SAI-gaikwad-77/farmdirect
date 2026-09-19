import {
  MapPin,
  Truck,
  TrendingUp,
  Package,
  Route,
  CheckCircle2,
  ArrowLeft,
  Home,
} from "lucide-react";
import { useApp } from "../context/useApp";
import { Button } from "../components/Button";
import { DemoBadge } from "../components/DemoBadge";
import {
  calculateNetRealization,
  calculateTotalRealization,
} from "../utils/calculation";

export function LogisticsPage() {
  const { selectedOffer, activeProduce, navigate } = useApp();

  if (!selectedOffer) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <p className="text-gray-500">
          No buyer selected. Please choose a buyer first.
        </p>
        <Button
          className="mt-6"
          onClick={() => navigate("buyer-comparison")}
        >
          <ArrowLeft className="h-4 w-4" /> Back to Buyer Comparison
        </Button>
      </div>
    );
  }

  const netRealization = calculateNetRealization(selectedOffer);
  const totalEarning = calculateTotalRealization(
    netRealization,
    activeProduce.quantity,
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-2 flex flex-wrap items-center gap-3">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Logistics Summary
        </h1>
        <DemoBadge label="ESTIMATED · DEMO DATA" />
      </div>
      <p className="text-gray-500">
        Here's the estimated summary for your selected buyer.
      </p>

      {/* Selected buyer card */}
      <div className="mt-6 rounded-2xl border-2 border-emerald-500 bg-white p-6 shadow-lg shadow-emerald-500/10 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            <CheckCircle2 className="h-3.5 w-3.5" /> Selected Buyer
          </span>
        </div>
        <h2 className="mt-4 text-2xl font-bold text-gray-900">
          {selectedOffer.buyerName}
        </h2>
        <p className="flex items-center gap-1.5 text-gray-500">
          <MapPin className="h-4 w-4" /> {selectedOffer.location}
        </p>

        {/* Details grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3.5">
            <Route className="h-5 w-5 flex-shrink-0 text-gray-400" />
            <div>
              <p className="text-xs text-gray-500">Estimated Distance</p>
              <p className="font-bold text-gray-900">
                {selectedOffer.distance} km
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3.5">
            <Package className="h-5 w-5 flex-shrink-0 text-gray-400" />
            <div>
              <p className="text-xs text-gray-500">Produce</p>
              <p className="font-bold text-gray-900">
                {activeProduce.crop} · {activeProduce.quantity.toLocaleString()}{" "}
                kg
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3.5">
            <TrendingUp className="h-5 w-5 flex-shrink-0 text-gray-400" />
            <div>
              <p className="text-xs text-gray-500">Offered Price</p>
              <p className="font-bold text-gray-900">
                ₹{selectedOffer.offeredPrice}/kg
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3.5">
            <Truck className="h-5 w-5 flex-shrink-0 text-gray-400" />
            <div>
              <p className="text-xs text-gray-500">Transport Cost</p>
              <p className="font-bold text-orange-600">
                ₹{selectedOffer.transportCost}/kg
              </p>
            </div>
          </div>
        </div>

        {/* Net realization breakdown */}
        <div className="mt-6 rounded-xl border border-gray-100 bg-gray-50 p-6">
          <p className="mb-4 text-sm font-semibold text-gray-700">
            Net Realization Breakdown
          </p>
          <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-center sm:gap-4">
            <span className="text-lg font-bold text-gray-900">
              ₹{selectedOffer.offeredPrice}
            </span>
            <span className="text-lg font-bold text-gray-300">−</span>
            <span className="text-lg font-bold text-orange-600">
              ₹{selectedOffer.transportCost}
            </span>
            <span className="text-lg font-bold text-gray-300">−</span>
            <span className="text-lg font-bold text-amber-600">
              ₹{selectedOffer.handlingCost}
            </span>
            <span className="text-lg font-bold text-gray-300">=</span>
            <span className="text-2xl font-bold text-emerald-600">
              ₹{netRealization}/kg
            </span>
          </div>
        </div>

        {/* Total earning */}
        <div className="mt-6 rounded-xl bg-emerald-600 p-6 text-center text-white">
          <p className="text-sm font-medium text-emerald-100">
            For {activeProduce.quantity.toLocaleString()} kg:
          </p>
          <p className="mt-1 text-sm text-emerald-100">
            Estimated Realization
          </p>
          <p className="mt-1 text-3xl font-extrabold">
            ₹{totalEarning.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Route visual */}
      <div className="mt-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-sm font-semibold text-gray-700">
          Route Overview
        </h3>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <Package className="h-5 w-5" />
            </div>
            <p className="mt-2 max-w-[100px] text-center text-xs font-medium text-gray-600">
              {activeProduce.location}
            </p>
          </div>
          <div className="relative flex-1">
            <div className="h-1 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-600 shadow-sm ring-1 ring-gray-100">
              {selectedOffer.distance} km
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white">
              <MapPin className="h-5 w-5" />
            </div>
            <p className="mt-2 max-w-[100px] text-center text-xs font-medium text-gray-600">
              {selectedOffer.location}
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
        <Button
          variant="ghost"
          onClick={() => navigate("buyer-comparison")}
        >
          <ArrowLeft className="h-4 w-4" /> Back to Offers
        </Button>
        <Button variant="outline" onClick={() => navigate("farmer-dashboard")}>
          <Home className="h-4 w-4" /> Back to Dashboard
        </Button>
      </div>
    </div>
  );
}
