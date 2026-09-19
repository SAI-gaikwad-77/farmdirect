import { useContext } from "react";
import { AppCtx, type AppState } from "./appState";

export function useApp(): AppState {
  const ctx = useContext(AppCtx);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
