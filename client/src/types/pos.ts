export type PaymentMode = "cash" | "upi" | "card" | "credit" | "split";

export interface BillingItemRow {
  id: string;
  serialNo: number;
  barcode: string;
  itemName: string;
  batch: string;
  qty: number;
  unit: string;
  mrp: number;
  rate: number;
  discountPercent: number;
  taxPercent: number;
}

export interface CustomerFormState {
  customerName: string;
  mobileNumber: string;
  gstin: string;
  outstandingAmount: string;
  customerType: string;
}

export interface RecentItem {
  id: string;
  name: string;
  code: string;
  price: number;
}

export interface CustomerSnapshot {
  name: string;
  mobileNumber: string;
  customerType: string;
  outstandingAmount: string;
}

export interface StockSnapshot {
  currentStock: string;
  minimumStock: string;
  lastPurchaseRate: string;
  lastPurchaseDate: string;
}

export interface FooterStatusItem {
  id: string;
  label: string;
  value: string;
  tone?: "default" | "success" | "warning";
}

export interface PosSummary {
  itemsCount: number;
  totalQuantity: number;
  subtotal: number;
  discount: number;
  taxableAmount: number;
  cgst: number;
  sgst: number;
  roundOff: number;
  grandTotal: number;
}
