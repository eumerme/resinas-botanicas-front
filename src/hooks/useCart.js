import { useContext } from "react";
import { StoreContext } from "../contexts/StoreContext";

export function useCart() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("Cart context not found");
  }
  return context;
}
