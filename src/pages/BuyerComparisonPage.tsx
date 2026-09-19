import { useState } from "react";
import {
  MapPin,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  Trophy,
  ArrowRight,
  Package,
  Scale,
} from "lucide-react";
import { useApp } from "../context/useApp";
import { Button } from "../components/Button";
import { DemoBadge } from "../components/DemoBadge";
import {
  calculateNetRealization,
  calculateTotalRealization,
  getRecommendedOffer,
} from "../utils/calculation";
import type { BuyerOffer } from "../types";

export function BuyerComparisonPage() {
  const { activeProduce, offers, selectOffer, navigate } = useApp();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const enriched = offers.map((o) => ({
    ...o,
    netRealization: calculateNetRealization(o),
  }));

  const recommended = getRecommendedOffer(offers);

  const sorted = [...enriched].sort(
    (a, b) => b.netRealization - a.netRealization
  );

  const handleSelect = (offer: BuyerOffer) => {
    setSelectedId(offer.id);
    selectOffer(offer);
  };

  const handleProceed = () => {
    if (selectedId) navigate("logistics");
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Header */}
      <div className="mb-2 flex flex-wrap items-center gap-3">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Best Buyers for Your Produce
        </h1>
        <DemoBadge />
      </div>
      <p className="text-gray-500">
        Compare offers based on your estimated net realization.
      </p>

      {/* Produce summary */}
      <div className="mt-6 flex flex-wrap items-center gap-4 rounded-2xl border border-gray-100 bg-white px-6 py-5 shadow-sm">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
          <Package className="h-5 w-5" />
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <span className="text-xl font-bold text-gray-900">
            {activeProduce.crop}
          </span>
          <span className="flex items-center gap-1.5 text-gray-600">
            <Scale className="h-4 w-4 text-gray-400" />
            {activeProduce.quantity.toLocaleString()} kg
          </span>
          <span className="flex items-center gap-1.5 text-gray-600">
            <TrendingUp className="h-4 w-4 text-gray-400" />
            {activeProduce.quality}
          </span>
          <span className="flex items-center gap-1.5 text-gray-600">
            <MapPin className="h-4 w-4 text-gray-400" />
            {activeProduce.location}
          </span>
        </div>
      </div>

      {/* Insight banner */}
      <div className="mt-6 flex items-center gap-3 rounded-xl bg-amber-50 px-5 py-4 ring-1 ring-amber-100">
        <AlertTriangle className="h-5 w-5 flex-shrink-0 text-amber-600" />
        <p className="text-sm font-semibold text-amber-800">
          The highest quoted price is not always the highest earning.
        </p>
      </div>

      {/* Offer cards */}
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {sorted.map((offer) => {
          const isRecommended = !!recommended && offer.id === recommended.id;
          const isSelected = offer.id === selectedId;
          const totalEarning = calculateTotalRealization(
            offer.netRealization,
            activeProduce.quantity,
          );

          return (
            <div
              key={offer.id}
              className={`relative flex flex-col rounded-2xl border-2 bg-white p-6 shadow-sm transition-all duration-200 ${
                isRecommended
                  ? "border-emerald-500 shadow-lg shadow-emerald-500/10 ring-4 ring-emerald-50"
                  : isSelected
                    ? "border-emerald-400 ring-4 ring-emerald-50"
                    : "border-gray-100 hover:border-gray-200 hover:shadow-md"
              }`}
            >
              {isRecommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-emerald-600/30">
                    <Trophy className="h-3.5 w-3.5" /> Recommended
                  </span>
                </div>
              )}

              {/* Buyer name + location */}
              <div className="mt-2">
                <h3 className="text-lg font-bold text-gray-900">
                  {offer.buyerName}
                </h3>
                <p className="flex items-center gap-1 text-sm text-gray-500">
                  <MapPin className="h-3.5 w-3.5" /> {offer.location}
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  ~{offer.distance} km away
                </p>
              </div>

              {/* Cost breakdown */}
              <div className="mt-6 space-y-2.5 rounded-xl bg-gray-50 p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Offered Price</span>
                  <span className="font-semibold text-gray-900">
                    ₹{offer.offeredPrice}/kg
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">− Transport Cost</span>
                  <span className="font-semibold text-orange-600">
                    ₹{offer.transportCost}/kg
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">− Handling Cost</span>
                  <span className="font-semibold text-amber-600">
                    ₹{offer.handlingCost}/kg
                  </span>
                </div>
                <div className="my-1 border-t border-gray-200" />
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-700">
                    = Net Realization
                  </span>
                  <span
                    className={`text-xl font-bold ${
                      isRecommended ? "text-emerald-600" : "text-gray-900"
                    }`}
                  >
                    ₹{offer.netRealization}/kg
                  </span>
                </div>
              </div>

              {isRecommended && (
                <p className="mt-3 flex items-center gap-1.5 text-sm font-medium text-emerald-600">
                  <CheckCircle2 className="h-4 w-4" /> Highest Estimated Net
                  Realization
                </p>
              )}

              {/* Total earning estimate */}
              <div className="mt-4 rounded-lg bg-emerald-50 px-4 py-2.5 text-center">
                <p className="text-xs text-gray-500">Estimated total earning</p>
                <p className="text-lg font-bold text-emerald-700">
                  ₹{totalEarning.toLocaleString("en-IN")}
                </p>
              </div>

              {/* Select button */}
              <Button
                variant={isSelected ? "primary" : "outline"}
                className="mt-5 w-full"
                onClick={() => handleSelect(offer)}
              >
                {isSelected ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Buyer Selected
                  </>
                ) : (
                  "Select Buyer"
                )}
              </Button>
            </div>
          );
        })}
      </div>

      {/* Proceed button */}
      <div className="mt-8 flex justify-end">
        <Button
          size="lg"
          disabled={!selectedId}
          onClick={handleProceed}
        >
          View Logistics Summary <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
