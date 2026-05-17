import { Plus, ScanLine, Search, Tags, Trash2 } from "lucide-react";
import type { BillingItemRow } from "../../../types/pos";

interface BillingTableSectionProps {
  rows: BillingItemRow[];
  formatCurrency: (value: number) => string;
  calculateRowAmount: (row: BillingItemRow) => number;
  onUpdateRow: (
    id: string,
    field: "qty" | "rate" | "discountPercent" | "taxPercent",
    value: number,
  ) => void;
  onRemoveRow: (id: string) => void;
  onAddItem: () => void;
  onClearAll: () => void;
}

function BillingTableSection({
  rows,
  formatCurrency,
  calculateRowAmount,
  onUpdateRow,
  onRemoveRow,
  onAddItem,
  onClearAll,
}: BillingTableSectionProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="space-y-2.5 border-b border-slate-200 p-3">
        <div className="grid gap-2 lg:grid-cols-[minmax(0,1fr)_auto_auto]">
          <label className="relative block">
            <span className="sr-only">Scan barcode or search product</span>
            <ScanLine className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Scan barcode or search item name / code..."
              className="h-9 w-full rounded-lg border border-slate-200 bg-white pl-8 pr-3 text-[11px] text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </label>

          {[
            { label: "Recent Items", icon: Tags },
            { label: "Price Check", icon: Search },
          ].map(({ label, icon: Icon }) => (
            <button
              key={label}
              type="button"
              className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2.5 text-[10px] font-medium text-blue-700 transition hover:bg-slate-100"
            >
              <Icon className="h-3.5 w-3.5" />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto xl:min-h-105">
        <table className="min-w-255 text-left text-[11px] text-slate-700">
          <thead className="sticky top-0 z-10 bg-slate-50 text-[9px] uppercase tracking-widest text-slate-500">
            <tr>
              {[
                "S.No",
                "Barcode",
                "Item Name",
                "Batch",
                "Qty",
                "Unit",
                "MRP",
                "Rate",
                "Disc %",
                "Tax %",
                "Amount",
                "Action",
              ].map((column) => (
                <th
                  key={column}
                  className="border-b border-slate-200 px-2.5 py-2.5 font-medium"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.id}
                className="border-b border-slate-100 transition hover:bg-slate-50/70"
              >
                <td className="px-2.5 py-2.5">{row.serialNo}</td>
                <td className="px-2.5 py-2.5 font-medium text-slate-800">{row.barcode}</td>
                <td className="min-w-50 px-2.5 py-2.5">
                  <div className="font-medium text-slate-900">{row.itemName}</div>
                </td>
                <td className="px-2.5 py-2.5">{row.batch}</td>
                <td className="px-2.5 py-2.5">
                  <input
                    type="number"
                    value={row.qty}
                    onChange={(event) =>
                      onUpdateRow(row.id, "qty", Number(event.target.value) || 0)
                    }
                    className="h-7 w-11 rounded-md border border-slate-200 bg-white px-1.5 text-[10px] outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </td>
                <td className="px-2.5 py-2.5">{row.unit}</td>
                <td className="px-2.5 py-2.5">{formatCurrency(row.mrp)}</td>
                <td className="px-2.5 py-2.5">
                  <input
                    type="number"
                    value={row.rate}
                    onChange={(event) =>
                      onUpdateRow(row.id, "rate", Number(event.target.value) || 0)
                    }
                    className="h-7 w-16 rounded-md border border-slate-200 bg-white px-1.5 text-[10px] outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </td>
                <td className="px-2.5 py-2.5">
                  <input
                    type="number"
                    value={row.discountPercent}
                    onChange={(event) =>
                      onUpdateRow(
                        row.id,
                        "discountPercent",
                        Number(event.target.value) || 0,
                      )
                    }
                    className="h-7 w-11 rounded-md border border-slate-200 bg-white px-1.5 text-[10px] outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </td>
                <td className="px-2.5 py-2.5">
                  <input
                    type="number"
                    value={row.taxPercent}
                    onChange={(event) =>
                      onUpdateRow(
                        row.id,
                        "taxPercent",
                        Number(event.target.value) || 0,
                      )
                    }
                    className="h-7 w-11 rounded-md border border-slate-200 bg-white px-1.5 text-[10px] outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </td>
                <td className="px-2.5 py-2.5 text-[13px] font-semibold text-slate-900">
                  {formatCurrency(calculateRowAmount(row))}
                </td>
                <td className="px-2.5 py-2.5">
                  <button
                    type="button"
                    onClick={() => onRemoveRow(row.id)}
                    className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-rose-200 bg-rose-50 text-rose-600 transition hover:bg-rose-100"
                    aria-label={`Delete ${row.itemName}`}
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </td>
              </tr>
            ))}

            {rows.length === 0 ? (
              <tr>
                <td
                  colSpan={12}
                  className="px-3 py-16 text-center text-xs text-slate-500"
                >
                  No billing items. Add items to start the invoice.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-2 border-t border-slate-200 bg-slate-50/70 px-3 py-2.5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-2.5 text-[9px] text-slate-500">
          <span className="font-semibold text-slate-700">Shortcuts:</span>
          <span>F2 - Customer</span>
          <span>F3 - Hold Bill</span>
          <span>F4 - Payment</span>
          <span>F5 - Save Bill</span>
          <span>F6 - Print</span>
          <span>ESC - Cancel</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={onAddItem}
            className="inline-flex h-8 items-center justify-center gap-1.5 rounded-lg border border-blue-200 bg-white px-2.5 text-[10px] font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            <Plus className="h-3.5 w-3.5" />
            <span>Add Item</span>
          </button>

          <button
            type="button"
            onClick={onClearAll}
            className="inline-flex h-8 items-center justify-center gap-1.5 rounded-lg border border-rose-200 bg-white px-2.5 text-[10px] font-semibold text-rose-700 transition hover:bg-rose-50"
          >
            <Trash2 className="h-3.5 w-3.5" />
            <span>Clear All</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default BillingTableSection;
