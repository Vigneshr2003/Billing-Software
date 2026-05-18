import type { BillingItemRow, FooterStatusItem } from "../types/billing.types";

export const currentInvoiceNumber = "INV-2026-0517-018";

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

export const footerStatuses: FooterStatusItem[] = [
  { id: "printer", label: "Printer", value: "Connected", tone: "success" },
  { id: "backup", label: "Backup", value: "Synced 5 min ago", tone: "success" },
  { id: "user", label: "Current User", value: "Srinath" },
  { id: "internet", label: "Internet", value: "Stable", tone: "success" },
];
