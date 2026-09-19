import type { BuyerOffer } from "../types";

/**
 * Core formula: Net Realization = Offered Price - Transport Cost - Handling Cost
 * Accepts raw numbers or a BuyerOffer object. Guards against NaN/invalid inputs.
 */
export function calculateNetRealization(
  offeredPrice: number,
  transportCost: number,
  handlingCost: number,
): number;

export function calculateNetRealization(offer: BuyerOffer): number;

export function calculateNetRealization(
  arg1: number | BuyerOffer,
  arg2?: number,
  arg3?: number,
): number {
  const price =
    typeof arg1 === "object" ? arg1.offeredPrice : (arg1 as number);
  const transport =
    typeof arg1 === "object" ? arg1.transportCost : (arg2 as number);
  const handling =
    typeof arg1 === "object" ? arg1.handlingCost : (arg3 as number);

  const p = safeNumber(price);
  const t = safeNumber(transport);
  const h = safeNumber(handling);

  return p - t - h;
}

/**
 * Total Estimated Realization = Net Realization per kg × Quantity
 */
export function calculateTotalRealization(
  netRealizationPerKg: number,
  quantity: number,
): number {
  return safeNumber(netRealizationPerKg) * safeNumber(quantity);
}

/**
 * Returns the buyer offer with the highest calculated Net Realization.
 * Determined purely from calculated values — not by index or name.
 */
export function getRecommendedOffer(offers: BuyerOffer[]): BuyerOffer | null {
  if (!offers || offers.length === 0) return null;

  let best = offers[0];
  let bestNet = calculateNetRealization(best);

  for (let i = 1; i < offers.length; i++) {
    const net = calculateNetRealization(offers[i]);
    if (net > bestNet) {
      best = offers[i];
      bestNet = net;
    }
  }
  return best;
}

/**
 * Formats a number as Indian Rupee currency with no decimals.
 * e.g. 26000 -> "₹26,000"
 */
export function formatCurrency(value: number): string {
  return `₹${safeNumber(value).toLocaleString("en-IN")}`;
}

/**
 * Formats a per-kg price. e.g. 26 -> "₹26/kg"
 */
export function formatPerKg(value: number): string {
  return `₹${safeNumber(value)}/kg`;
}

function safeNumber(value: number | undefined | null): number {
  if (value === null || value === undefined || isNaN(value)) return 0;
  return value;
}
