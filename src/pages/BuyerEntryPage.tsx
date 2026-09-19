import { ShoppingBasket, ArrowRight, Info } from "lucide-react";
import { useApp } from "../context/useApp";
import { Button } from "../components/Button";
import { DemoBadge } from "../components/DemoBadge";
import { DEMO_BUYER } from "../data/mockData";

export function BuyerEntryPage() {
  const { navigate } = useApp();

  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-4 py-16 sm:py-24">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-900 text-white shadow-lg shadow-gray-900/20">
        <ShoppingBasket className="h-8 w-8" />
      </div>
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
        Buyer Access
      </h1>
      <p className="mt-3 text-center text-gray-500">
        Continue with a demo buyer account to explore the platform. No
        registration needed.
      </p>

      <div className="mt-8 w-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-semibold text-gray-700">Demo Account</p>
          <DemoBadge />
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-2 rounded-lg bg-gray-50 px-4 py-3">
            <Info className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">
              Buyer: <strong className="text-gray-900">{DEMO_BUYER.name}</strong>
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-gray-50 px-4 py-3">
            <Info className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">
              Location:{" "}
              <strong className="text-gray-900">{DEMO_BUYER.location}</strong>
            </span>
          </div>
        </div>
        <Button
          className="mt-6 w-full"
          size="lg"
          onClick={() => navigate("buyer-dashboard")}
        >
          Continue as Demo Buyer <ArrowRight className="h-5 w-5" />
        </Button>
      </div>

      <button
        onClick={() => navigate("landing")}
        className="mt-6 text-sm font-medium text-gray-400 hover:text-gray-600"
      >
        Back to Home
      </button>
    </div>
  );
}
