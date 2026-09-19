import { useState } from "react";
import { ArrowRight, ClipboardList } from "lucide-react";
import { useApp } from "../context/useApp";
import { Button } from "../components/Button";
import type { Requirement } from "../types";

export function PostRequirementPage() {
  const { navigate, addRequirement } = useApp();
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [quality, setQuality] = useState("Grade A");
  const [location, setLocation] = useState("");
  const [requiredDate, setRequiredDate] = useState("");
  const [offeredPrice, setOfferedPrice] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const req: Requirement = {
      id: `r-${Date.now()}`,
      product: product || "Onion",
      quantity: parseInt(quantity) || 1000,
      quality,
      location: location || "Nashik",
      requiredDate: requiredDate || "2026-09-13",
      offeredPrice: parseInt(offeredPrice) || 27,
    };
    addRequirement(req);
    navigate("buyer-dashboard");
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-2 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white">
          <ClipboardList className="h-5 w-5" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Post Requirement
        </h1>
      </div>
      <p className="mb-8 text-gray-500">
        Tell farmers what you need. They'll compare and reach out.
      </p>

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-gray-700">
              Product
            </label>
            <input
              type="text"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              placeholder="e.g. Onion"
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-gray-700">
              Quantity (kg)
            </label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="e.g. 1000"
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-gray-700">
              Quality
            </label>
            <select
              value={quality}
              onChange={(e) => setQuality(e.target.value)}
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            >
              <option>Grade A</option>
              <option>Grade B</option>
              <option>Grade C</option>
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-gray-700">
              Required Location
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Nashik"
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-gray-700">
              Required Date
            </label>
            <input
              type="date"
              value={requiredDate}
              onChange={(e) => setRequiredDate(e.target.value)}
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-gray-700">
              Offered Price (₹/kg)
            </label>
            <input
              type="number"
              value={offeredPrice}
              onChange={(e) => setOfferedPrice(e.target.value)}
              placeholder="e.g. 27"
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <Button
            type="button"
            variant="ghost"
            onClick={() => navigate("buyer-dashboard")}
          >
            Cancel
          </Button>
          <Button type="submit" size="lg">
            Post Requirement <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </form>
    </div>
  );
}
