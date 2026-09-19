export type Produce = {
  id: string;
  crop: string;
  quantity: number;
  quality: string;
  location: string;
  availableDate: string;
};

export type BuyerOffer = {
  id: string;
  buyerName: string;
  location: string;
  offeredPrice: number;
  transportCost: number;
  handlingCost: number;
  distance: number;
};

export type Requirement = {
  id: string;
  product: string;
  quantity: number;
  quality: string;
  location: string;
  requiredDate: string;
  offeredPrice: number;
};

export type Page =
  | "landing"
  | "farmer-entry"
  | "farmer-dashboard"
  | "add-produce"
  | "buyer-comparison"
  | "logistics"
  | "buyer-entry"
  | "buyer-dashboard"
  | "post-requirement";

export type Role = "farmer" | "buyer" | null;
