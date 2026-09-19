import { Sprout, Home, ArrowLeft } from "lucide-react";
import { useApp } from "../context/useApp";

const FARMER_PAGES = [
  "farmer-entry",
  "farmer-dashboard",
  "add-produce",
  "buyer-comparison",
  "logistics",
];

const BUYER_PAGES = ["buyer-entry", "buyer-dashboard", "post-requirement"];

const PAGE_LABELS: Record<string, string> = {
  "farmer-entry": "Farmer Access",
  "farmer-dashboard": "Dashboard",
  "add-produce": "Add Produce",
  "buyer-comparison": "Compare Buyers",
  logistics: "Logistics",
  "buyer-entry": "Buyer Access",
  "buyer-dashboard": "Dashboard",
  "post-requirement": "Post Requirement",
};

export function Navbar() {
  const { page, navigate } = useApp();

  if (page === "landing") return null;

  const isFarmer = FARMER_PAGES.includes(page);
  const isBuyer = BUYER_PAGES.includes(page);
  const roleLabel = isFarmer ? "Farmer" : isBuyer ? "Buyer" : null;
  const roleColor = isFarmer
    ? "bg-emerald-100 text-emerald-700"
    : "bg-gray-800 text-white";

  const backTarget = isFarmer
    ? page === "farmer-entry"
      ? "landing"
      : page === "buyer-comparison" || page === "add-produce"
        ? "farmer-dashboard"
        : page === "logistics"
          ? "buyer-comparison"
          : "landing"
    : isBuyer
      ? page === "buyer-entry"
        ? "landing"
        : page === "post-requirement"
          ? "buyer-dashboard"
          : "landing"
      : "landing";

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("landing")}
            className="flex items-center gap-2 text-left"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white">
              <Sprout className="h-5 w-5" />
            </span>
            <span className="text-lg font-bold text-gray-900">
              FarmDirect
            </span>
          </button>
          {roleLabel && (
            <span
              className={`hidden rounded-full px-2.5 py-0.5 text-xs font-semibold sm:inline-block ${roleColor}`}
            >
              {roleLabel}
            </span>
          )}
          {page !== "farmer-entry" && page !== "buyer-entry" && (
            <span className="hidden text-sm text-gray-300 sm:inline">/</span>
          )}
          {page !== "farmer-entry" && page !== "buyer-entry" && (
            <span className="hidden text-sm font-medium text-gray-500 sm:inline">
              {PAGE_LABELS[page]}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {page !== "farmer-entry" && page !== "buyer-entry" && (
            <button
              onClick={() => navigate(backTarget)}
              className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-500 transition hover:bg-gray-100 hover:text-emerald-600"
            >
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
          )}
          <button
            onClick={() => navigate("landing")}
            className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-500 transition hover:bg-gray-100 hover:text-emerald-600"
          >
            <Home className="h-4 w-4" /> <span className="hidden sm:inline">Home</span>
          </button>
        </div>
      </div>
    </header>
  );
}
