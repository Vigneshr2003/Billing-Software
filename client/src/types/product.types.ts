export interface RecentItem {
  id: string;
  name: string;
  code: string;
  price: number;
}

export interface StockSnapshot {
  currentStock: string;
  minimumStock: string;
  lastPurchaseRate: string;
  lastPurchaseDate: string;
}
