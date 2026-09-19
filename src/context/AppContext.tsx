import { useState, type ReactNode } from "react";
import type { Page, Produce, BuyerOffer, Requirement } from "../types";
import { DEMO_PRODUCE, BUYER_OFFERS } from "../data/mockData";
import { AppCtx, type AppState } from "./appState";

export function AppProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState<Page>("landing");
  const [produces, setProduces] = useState<Produce[]>([DEMO_PRODUCE]);
  const [activeProduce, setActiveProduce] = useState<Produce>(DEMO_PRODUCE);
  const [offers] = useState<BuyerOffer[]>(BUYER_OFFERS);
  const [selectedOffer, setSelectedOffer] = useState<BuyerOffer | null>(null);
  const [requirements, setRequirements] = useState<Requirement[]>([]);

  const navigate = (p: Page) => {
    setPage(p);
    window.scrollTo(0, 0);
  };

  const addProduce = (p: Produce) => {
    setProduces((prev) => [...prev, p]);
    setActiveProduce(p);
  };

  const selectOffer = (o: BuyerOffer) => setSelectedOffer(o);

  const addRequirement = (r: Requirement) => {
    setRequirements((prev) => [...prev, r]);
  };

  const value: AppState = {
    page,
    navigate,
    produces,
    addProduce,
    activeProduce,
    setActiveProduce,
    offers,
    selectedOffer,
    selectOffer,
    requirements,
    addRequirement,
  };

  return <AppCtx.Provider value={value}>{children}</AppCtx.Provider>;
}
