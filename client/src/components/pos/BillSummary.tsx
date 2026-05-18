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
    <section className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm">
      <div className="mb-3 flex items-center gap-2.5">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50">
          <ReceiptText className="h-3.5 w-3.5 text-blue-600" />
        </div>
        <h2 className="text-[13px] font-semibold text-slate-800">Bill Summary</h2>
      </div>

      <div className="space-y-0.5">
        {lines.map((line) => (
          <div
            key={line.label}
            className="flex items-center justify-between rounded-md px-1 py-1.5 transition hover:bg-slate-50"
          >
            <span className="text-[11px] text-slate-500">{line.label}</span>
            <span className="text-[11px] font-semibold tabular-nums text-slate-800">{line.value}</span>
          </div>
        ))}

        <div className="flex items-center justify-between rounded-md px-1 py-1.5">
          <span className="text-[11px] text-slate-500">Discount</span>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-slate-400">%</span>
            <Input
              aria-label="Discount amount"
              className="h-7 w-20 rounded-md border border-slate-200 bg-slate-50/50 px-2 text-right text-[11px] font-medium text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              defaultValue="0.00"
            />
          </div>
        </div>
      </div>

      <div className="mt-3 rounded-xl border border-blue-100 bg-linear-to-br from-blue-50 to-blue-50/30 px-3.5 py-3">
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-400">
          Grand Total
        </span>
        <p className="mt-1 text-[28px] font-bold tabular-nums text-blue-700">
          {formatCurrency(summary.grandTotal)}
        </p>
      </div>
    </section>
  );
}

export default BillSummary;
