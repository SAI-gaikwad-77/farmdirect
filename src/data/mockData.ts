import type { BuyerOffer, Produce } from "../types";

export const DEMO_FARMER = {
  name: "Ramesh Patil",
  location: "Niphad, Nashik",
  crop: "Onion",
  quantity: 1000,
  quality: "Grade A",
  availability: "Available Now",
};

export const DEMO_PRODUCE: Produce = {
  id: "demo-1",
  crop: "Onion",
  quantity: 1000,
  quality: "Grade A",
  location: "Niphad, Nashik",
  availableDate: "2026-09-08",
};

export const BUYER_OFFERS: BuyerOffer[] = [
  {
    id: "buyer-1",
    buyerName: "Nashik Fresh Retail",
    location: "Nashik",
    offeredPrice: 27,
    transportCost: 1,
    handlingCost: 0,
    distance: 55,
  },
  {
    id: "buyer-2",
    buyerName: "Mumbai Wholesale Hub",
    location: "Mumbai",
    offeredPrice: 28,
    transportCost: 4,
    handlingCost: 0,
    distance: 180,
  },
  {
    id: "buyer-3",
    buyerName: "Pune Agro Buyer",
    location: "Pune",
    offeredPrice: 29,
    transportCost: 5,
    handlingCost: 0,
    distance: 210,
  },
];

export const DEMO_BUYER = {
  name: "Nashik Fresh Retail",
  location: "Nashik",
  requirement: {
    product: "Onion",
    quantity: 1000,
    quality: "Grade A",
    location: "Nashik",
    requiredDate: "2026-09-13",
  },
};
