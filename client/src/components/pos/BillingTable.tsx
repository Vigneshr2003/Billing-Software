import { Plus, ScanLine, Search, Tags, Trash2 } from "lucide-react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import type { BillingItemRow } from "../../types/billing.types";

interface BillingTableProps {
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

function BillingTable({
  rows,
  formatCurrency,
  calculateRowAmount,
  onUpdateRow,
  onRemoveRow,
  onAddItem,
  onClearAll,
}: BillingTableProps) {
  return (
    <section className="flex flex-col rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Search Bar */}
      <div className="border-b border-slate-100 p-3">
        <div className="grid gap-2 lg:grid-cols-[minmax(0,1fr)_auto_auto]">
          <label className="relative block">
            <span className="sr-only">Scan barcode or search product</span>
            <div className="pointer-events-none absolute left-3 top-1/2 flex -translate-y-1/2 items-center gap-1.5">
              <ScanLine className="h-3.5 w-3.5 text-blue-500" />
            </div>
            <Input
              className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50/50 pl-9 pr-3 text-[12px] text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              placeholder="Scan barcode or search item name / code..."
            />
          </label>

          {[
            { label: "Recent Items", icon: Tags },
            { label: "Price Check", icon: Search },
          ].map(({ label, icon: Icon }) => (
            <Button
              key={label}
              className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 text-[11px] font-medium text-slate-600 transition hover:bg-slate-50 hover:text-blue-600 hover:border-blue-200"
            >
              <Icon className="h-3.5 w-3.5" />
              <span>{label}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-x-auto overflow-y-auto">
        <table className="min-w-255 w-full text-left text-[11px] text-slate-700">
          <thead className="sticky top-0 z-10 bg-slate-50/80 backdrop-blur-sm">
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
                  className="border-b border-slate-200 px-2.5 py-2.5 text-[9px] font-semibold uppercase tracking-widest text-slate-400"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={row.id}
                className={[
                  "border-b border-slate-50 transition hover:bg-blue-50/30",
                  idx % 2 === 1 ? "bg-slate-50/30" : "",
                ].join(" ")}
              >
                <td className="px-2.5 py-2.5 text-slate-400 font-medium">{row.serialNo}</td>
                <td className="px-2.5 py-2.5 font-mono text-[10px] font-medium text-slate-600">{row.barcode}</td>
                <td className="min-w-50 px-2.5 py-2.5">
                  <div className="font-semibold text-slate-900">{row.itemName}</div>
                </td>
                <td className="px-2.5 py-2.5">
                  <span className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-500">
                    {row.batch}
                  </span>
                </td>
                <td className="px-2.5 py-2.5">
                  <Input
                    className="h-7 w-12 rounded-md border border-slate-200 bg-white px-1.5 text-center text-[11px] font-medium outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    onChange={(event) =>
                      onUpdateRow(row.id, "qty", Number(event.target.value) || 0)
                    }
                    type="number"
                    value={row.qty}
                  />
                </td>
                <td className="px-2.5 py-2.5 text-slate-500">{row.unit}</td>
                <td className="px-2.5 py-2.5 text-slate-500">{formatCurrency(row.mrp)}</td>
                <td className="px-2.5 py-2.5">
                  <Input
                    className="h-7 w-16 rounded-md border border-slate-200 bg-white px-1.5 text-[11px] font-medium outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    onChange={(event) =>
                      onUpdateRow(row.id, "rate", Number(event.target.value) || 0)
                    }
                    type="number"
                    value={row.rate}
                  />
                </td>
                <td className="px-2.5 py-2.5">
                  <Input
                    className="h-7 w-12 rounded-md border border-slate-200 bg-white px-1.5 text-center text-[11px] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    onChange={(event) =>
                      onUpdateRow(
                        row.id,
                        "discountPercent",
                        Number(event.target.value) || 0,
                      )
                    }
                    type="number"
                    value={row.discountPercent}
                  />
                </td>
                <td className="px-2.5 py-2.5">
                  <Input
                    className="h-7 w-12 rounded-md border border-slate-200 bg-white px-1.5 text-center text-[11px] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    onChange={(event) =>
                      onUpdateRow(
                        row.id,
                        "taxPercent",
                        Number(event.target.value) || 0,
                      )
                    }
                    type="number"
                    value={row.taxPercent}
                  />
                </td>
                <td className="px-2.5 py-2.5 text-[13px] font-bold text-slate-900">
                  {formatCurrency(calculateRowAmount(row))}
                </td>
                <td className="px-2.5 py-2.5">
                  <Button
                    aria-label={`Delete ${row.itemName}`}
                    className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-red-100 bg-red-50 text-red-500 transition hover:bg-red-100 hover:text-red-600"
                    onClick={() => onRemoveRow(row.id)}
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </td>
              </tr>
            ))}

            {rows.length === 0 ? (
              <tr>
                <td
                  className="px-3 py-20 text-center text-sm text-slate-400"
                  colSpan={12}
                >
                  <ScanLine className="mx-auto mb-2 h-8 w-8 text-slate-300" />
                  No billing items. Scan a barcode or search to add items.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-2 border-t border-slate-100 bg-slate-50/50 px-3 py-2.5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-3 text-[9px] text-slate-400">
          <span className="font-semibold text-slate-500">Shortcuts:</span>
          {["F2 - Customer", "F3 - Hold", "F4 - Payment", "F5 - Save", "F6 - Print", "ESC - Cancel"].map((s) => (
            <span key={s} className="rounded bg-slate-100 px-1.5 py-0.5 font-medium text-slate-500">{s}</span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button
            className="inline-flex h-8 items-center justify-center gap-1.5 rounded-lg border border-blue-200 bg-blue-50 px-3 text-[10px] font-semibold text-blue-700 transition hover:bg-blue-100"
            onClick={onAddItem}
          >
            <Plus className="h-3.5 w-3.5" />
            <span>Add Item</span>
          </Button>

          <Button
            className="inline-flex h-8 items-center justify-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-3 text-[10px] font-semibold text-red-600 transition hover:bg-red-100"
            onClick={onClearAll}
          >
            <Trash2 className="h-3.5 w-3.5" />
            <span>Clear All</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default BillingTable;
