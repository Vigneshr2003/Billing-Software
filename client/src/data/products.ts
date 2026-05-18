import type { RecentItem, StockSnapshot } from "../types/product.types";

export const recentItems: RecentItem[] = [
  { id: "recent-1", name: "Parle-G Biscuit 800g", code: "PG-800", price: 123.5 },
  { id: "recent-2", name: "Tata Tea Premium 1kg", code: "TT-1KG", price: 275 },
  { id: "recent-3", name: "Surf Excel 3kg", code: "SE-3KG", price: 412 },
  { id: "recent-4", name: "Colgate Strong 200g", code: "CG-200", price: 98 },
];

export const stockSnapshot: StockSnapshot = {
  currentStock: "148 Bags",
  minimumStock: "40 Bags",
  lastPurchaseRate: "Rs. 2,210",
  lastPurchaseDate: "12 May 2026",
};
