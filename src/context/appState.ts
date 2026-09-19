import { createContext } from "react";
import type { Page, Produce, BuyerOffer, Requirement } from "../types";

export type AppState = {
  page: Page;
  navigate: (page: Page) => void;
  produces: Produce[];
  addProduce: (p: Produce) => void;
  activeProduce: Produce;
  setActiveProduce: (p: Produce) => void;
  offers: BuyerOffer[];
  selectedOffer: BuyerOffer | null;
  selectOffer: (o: BuyerOffer) => void;
  requirements: Requirement[];
  addRequirement: (r: Requirement) => void;
};

export const AppCtx = createContext<AppState | null>(null);
