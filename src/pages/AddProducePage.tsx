import { useState } from "react";
import { ArrowRight, Package } from "lucide-react";
import { useApp } from "../context/useApp";
import { Button } from "../components/Button";
import type { Produce } from "../types";

export function AddProducePage() {
  const { navigate, addProduce } = useApp();
  const [crop, setCrop] = useState("");
  const [quantity, setQuantity] = useState("");
  const [quality, setQuality] = useState("Grade A");
  const [location, setLocation] = useState("");
  const [availableDate, setAvailableDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const produce: Produce = {
      id: `p-${Date.now()}`,
      crop: crop || "Onion",
      quantity: parseInt(quantity) || 1000,
      quality,
      location: location || "Niphad, Nashik",
      availableDate: availableDate || "2026-09-08",
    };
    addProduce(produce);
    navigate("buyer-comparison");
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-2 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
          <Package className="h-5 w-5" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Add Produce
        </h1>
      </div>
      <p className="mb-8 text-gray-500">
        Enter your crop details to find the best buyers.
      </p>

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="mb-1.5 block text-sm font-semibold text-gray-700">
              Crop / Product
            </label>
            <input
              type="text"
              value={crop}
              onChange={(e) => setCrop(e.target.value)}
              placeholder="e.g. Onion, Tomato, Wheat"
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
              Quality / Grade
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
              Location
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Niphad, Nashik"
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-semibold text-gray-700">
              Available Date
            </label>
            <input
              type="date"
              value={availableDate}
              onChange={(e) => setAvailableDate(e.target.value)}
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <Button
            type="button"
            variant="ghost"
            onClick={() => navigate("farmer-dashboard")}
          >
            Cancel
          </Button>
          <Button type="submit" size="lg">
            Save & Compare Buyers <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </form>
    </div>
  );
}
