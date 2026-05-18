import { ReceiptText } from "lucide-react";
import Input from "../ui/Input";
import type { PosSummary } from "../../types/billing.types";

interface BillSummaryProps {
  summary: PosSummary;
  formatCurrency: (value: number) => string;
}

function BillSummary({ summary, formatCurrency }: BillSummaryProps) {
  const lines = [
    { label: "Items Count", value: String(summary.itemsCount) },
    { label: "Total Quantity", value: String(summary.totalQuantity) },
    { label: "Sub Total", value: formatCurrency(summary.subtotal) },
    { label: "Taxable Amount", value: formatCurrency(summary.taxableAmount) },
    { label: "CGST (2.5%)", value: formatCurrency(summary.cgst) },
    { label: "SGST (2.5%)", value: formatCurrency(summary.sgst) },
    { label: "Round Off", value: formatCurrency(summary.roundOff) },
  ];

  return (
    <section className="h-full rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
      <div className="mb-3 flex items-center gap-2">
        <ReceiptText className="h-4 w-4 text-blue-600" />
        <h2 className="text-[13px] font-semibold text-slate-900">Bill Summary</h2>
      </div>

      <div className="space-y-1">
        {lines.map((line) => (
          <div
            key={line.label}
            className="flex items-center justify-between px-0 py-0.5 text-[11px]"
          >
            <span className="text-slate-500">{line.label}</span>
            <span className="font-semibold text-slate-800">{line.value}</span>
          </div>
        ))}

        <div className="flex items-center justify-between gap-2 px-0 py-0.5 text-[11px]">
          <span className="text-slate-500">Discount</span>
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400">%</span>
            <Input
              aria-label="Discount amount"
              className="h-7 w-20 rounded-md border border-slate-200 bg-white px-2 text-right text-[10px] text-slate-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              defaultValue="0.00"
            />
          </div>
        </div>
      </div>

      <div className="mt-3 border-t border-slate-200 pt-3">
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
          Grand Total
        </span>
        <p className="mt-1.5 text-[28px] font-semibold text-blue-700">
          {formatCurrency(summary.grandTotal)}
        </p>
      </div>
    </section>
  );
}

export default BillSummary;
