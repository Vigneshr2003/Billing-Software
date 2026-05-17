import type {
  BillingItemRow,
  CustomerFormState,
  CustomerSnapshot,
  FooterStatusItem,
  RecentItem,
  StockSnapshot,
} from "../types/pos";

export const initialCustomerForm: CustomerFormState = {
  customerName: "Raj Stores",
  mobileNumber: "9876543210",
  gstin: "33AABCR1023L1Z7",
  outstandingAmount: "Rs. 18,450",
  customerType: "Wholesale",
};

export const initialBillingRows: BillingItemRow[] = [
  {
    id: "row-1",
    serialNo: 1,
    barcode: "8901030893134",
    itemName: "India Gate Basmati Rice 25kg",
    batch: "BG-25M",
    qty: 2,
    unit: "Bag",
    mrp: 2450,
    rate: 2280,
    discountPercent: 2,
    taxPercent: 5,
  },
  {
    id: "row-2",
    serialNo: 2,
    barcode: "8906009458721",
    itemName: "Fortune Sunlite Oil 15L",
    batch: "FS-15L",
    qty: 1,
    unit: "Tin",
    mrp: 2125,
    rate: 1980,
    discountPercent: 1.5,
    taxPercent: 5,
  },
  {
    id: "row-3",
    serialNo: 3,
    barcode: "8901491102744",
    itemName: "Aashirvaad Atta 10kg",
    batch: "AA-10K",
    qty: 3,
    unit: "Pack",
    mrp: 620,
    rate: 585,
    discountPercent: 0,
    taxPercent: 5,
  },
];

export const recentItems: RecentItem[] = [
  { id: "recent-1", name: "Parle-G Biscuit 800g", code: "PG-800", price: 123.5 },
  { id: "recent-2", name: "Tata Tea Premium 1kg", code: "TT-1KG", price: 275.0 },
  { id: "recent-3", name: "Surf Excel 3kg", code: "SE-3KG", price: 412.0 },
  { id: "recent-4", name: "Colgate Strong 200g", code: "CG-200", price: 98.0 },
];

export const customerSnapshot: CustomerSnapshot = {
  name: "Raj Stores",
  mobileNumber: "9876543210",
  customerType: "Wholesale",
  outstandingAmount: "Rs. 18,450",
};

export const stockSnapshot: StockSnapshot = {
  currentStock: "148 Bags",
  minimumStock: "40 Bags",
  lastPurchaseRate: "Rs. 2,210",
  lastPurchaseDate: "12 May 2026",
};

export const footerStatuses: FooterStatusItem[] = [
  { id: "printer", label: "Printer", value: "Connected", tone: "success" },
  { id: "backup", label: "Backup", value: "Synced 5 min ago", tone: "success" },
  { id: "user", label: "Current User", value: "Srinath" },
  { id: "internet", label: "Internet", value: "Stable", tone: "success" },
];
