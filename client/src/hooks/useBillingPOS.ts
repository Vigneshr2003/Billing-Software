import { useMemo, useState } from "react";
import { currentInvoiceNumber, footerStatuses, initialBillingRows } from "../data/bills";
import { customerSnapshot, initialCustomerForm } from "../data/customers";
import { recentItems, stockSnapshot } from "../data/products";
import { formatCurrency } from "../lib/formatCurrency";
import type {
  BillingItemRow,
  PaymentMode,
  PosSummary,
} from "../types/billing.types";
import type { CustomerFormState } from "../types/customer.types";
import type { RecentItem } from "../types/product.types";

function calculateRowAmount(row: BillingItemRow) {
  const baseAmount = row.qty * row.rate;
  const discountAmount = (baseAmount * row.discountPercent) / 100;
  const taxableAmount = baseAmount - discountAmount;
  const taxAmount = (taxableAmount * row.taxPercent) / 100;

  return taxableAmount + taxAmount;
}

function useBillingPOS() {
  const [rows, setRows] = useState<BillingItemRow[]>(() =>
    initialBillingRows.map((row) => ({ ...row })),
  );
  const [customerForm, setCustomerForm] = useState<CustomerFormState>(() => ({
    ...initialCustomerForm,
  }));
  const [paymentMode, setPaymentMode] = useState<PaymentMode>("cash");
  const [amountReceived, setAmountReceived] = useState("8000");

  const summary = useMemo<PosSummary>(() => {
    const itemsCount = rows.length;
    const totalQuantity = rows.reduce((sum, row) => sum + row.qty, 0);
    const subtotal = rows.reduce((sum, row) => sum + row.qty * row.rate, 0);
    const discount = rows.reduce(
      (sum, row) => sum + (row.qty * row.rate * row.discountPercent) / 100,
      0,
    );
    const taxableAmount = subtotal - discount;
    const totalTax = rows.reduce((sum, row) => {
      const rowTaxable = row.qty * row.rate * (1 - row.discountPercent / 100);
      return sum + (rowTaxable * row.taxPercent) / 100;
    }, 0);
    const cgst = totalTax / 2;
    const sgst = totalTax / 2;
    const preciseTotal = taxableAmount + totalTax;
    const roundedGrandTotal = Math.round(preciseTotal);
    const roundOff = roundedGrandTotal - preciseTotal;

    return {
      itemsCount,
      totalQuantity,
      subtotal,
      discount,
      taxableAmount,
      cgst,
      sgst,
      roundOff,
      grandTotal: roundedGrandTotal,
    };
  }, [rows]);

  const balanceReturn = useMemo(() => {
    const received = Number(amountReceived) || 0;
    return Math.max(received - summary.grandTotal, 0);
  }, [amountReceived, summary.grandTotal]);

  const updateCustomerField = (
    field: keyof CustomerFormState,
    value: string,
  ) => {
    setCustomerForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const updateRowField = (
    id: string,
    field: keyof Pick<
      BillingItemRow,
      "qty" | "rate" | "discountPercent" | "taxPercent"
    >,
    value: number,
  ) => {
    setRows((previous) =>
      previous.map((row) =>
        row.id === id
          ? {
              ...row,
              [field]: value,
            }
          : row,
      ),
    );
  };

  const removeRow = (id: string) => {
    setRows((previous) =>
      previous
        .filter((row) => row.id !== id)
        .map((row, index) => ({
          ...row,
          serialNo: index + 1,
        })),
    );
  };

  const addBlankRow = () => {
    setRows((previous) => [
      ...previous,
      {
        id: `row-${Date.now()}`,
        serialNo: previous.length + 1,
        barcode: "0000000000000",
        itemName: "New POS Item",
        batch: "NEW",
        qty: 1,
        unit: "Pcs",
        mrp: 0,
        rate: 0,
        discountPercent: 0,
        taxPercent: 0,
      },
    ]);
  };

  const clearAllRows = () => {
    setRows([]);
  };

  const addRecentItem = (item: RecentItem) => {
    setRows((previous) => [
      ...previous,
      {
        id: `${item.id}-${Date.now()}`,
        serialNo: previous.length + 1,
        barcode: item.code,
        itemName: item.name,
        batch: "FAST",
        qty: 1,
        unit: "Pcs",
        mrp: item.price,
        rate: item.price,
        discountPercent: 0,
        taxPercent: 5,
      },
    ]);
  };

  return {
    invoiceNumber: currentInvoiceNumber,
    rows,
    customerForm,
    paymentMode,
    amountReceived,
    balanceReturn,
    summary,
    recentItems,
    customerSnapshot,
    stockSnapshot,
    footerStatuses,
    formatCurrency,
    calculateRowAmount,
    setPaymentMode,
    setAmountReceived,
    updateCustomerField,
    updateRowField,
    removeRow,
    addBlankRow,
    clearAllRows,
    addRecentItem,
  };
}

export default useBillingPOS;
