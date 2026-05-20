import { AlertTriangle } from "lucide-react";
import { cn } from "../../../lib/utils";

interface StockItem {
  name: string;
  currentStock: number;
  minimumStock: number;
  status: "Low Stock" | "Out of Stock";
}

const stockAlerts: StockItem[] = [
  { name: "Tata Salt 1kg", currentStock: 8, minimumStock: 25, status: "Low Stock" },
  { name: "Surf Excel 1kg", currentStock: 0, minimumStock: 15, status: "Out of Stock" },
  { name: "Maggi Noodles (Pack)", currentStock: 5, minimumStock: 30, status: "Low Stock" },
  { name: "Vim Dishwash Bar", currentStock: 0, minimumStock: 20, status: "Out of Stock" },
  { name: "Colgate Toothpaste 200g", currentStock: 3, minimumStock: 10, status: "Low Stock" },
];

const statusStyles = {
  "Low Stock": "bg-amber-50 text-amber-700 border-amber-200",
  "Out of Stock": "bg-red-50 text-red-700 border-red-200",
};

function StockAlerts() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-50">
          <AlertTriangle className="h-4 w-4 text-rose-600" />
        </div>
        <div>
          <h2 className="text-sm font-semibold text-slate-800">Stock Alerts</h2>
          <p className="text-xs text-slate-500">{stockAlerts.length} items need attention</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-120">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="pb-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-400">Item</th>
              <th className="pb-3 text-center text-[11px] font-semibold uppercase tracking-wider text-slate-400">Current</th>
              <th className="pb-3 text-center text-[11px] font-semibold uppercase tracking-wider text-slate-400">Minimum</th>
              <th className="pb-3 text-right text-[11px] font-semibold uppercase tracking-wider text-slate-400">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {stockAlerts.map((item) => (
              <tr key={item.name} className="transition hover:bg-slate-50/50">
                <td className="py-3 text-sm font-medium text-slate-700">{item.name}</td>
                <td className="py-3 text-center">
                  <span className={cn("text-sm font-bold", item.currentStock === 0 ? "text-red-600" : "text-amber-600")}>
                    {item.currentStock}
                  </span>
                </td>
                <td className="py-3 text-center text-sm text-slate-500">{item.minimumStock}</td>
                <td className="py-3 text-right">
                  <span className={cn("inline-block rounded-full border px-2.5 py-0.5 text-[11px] font-semibold", statusStyles[item.status])}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default StockAlerts;
