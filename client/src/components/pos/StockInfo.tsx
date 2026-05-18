import { Boxes, CalendarRange, Package, ShoppingBag, Warehouse } from "lucide-react";
import type { StockSnapshot } from "../../types/product.types";

interface StockInfoProps {
  stock: StockSnapshot;
}

function StockInfo({ stock }: StockInfoProps) {
  const items = [
    { label: "Current Stock", value: stock.currentStock, icon: Warehouse },
    { label: "Min. Stock", value: stock.minimumStock, icon: Boxes },
    { label: "Last Purchase Rate", value: stock.lastPurchaseRate, icon: ShoppingBag },
    { label: "Last Purchase Date", value: stock.lastPurchaseDate, icon: CalendarRange },
  ];

  return (
    <section className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm">
      <div className="mb-3 flex items-center gap-2.5">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50">
          <Package className="h-3.5 w-3.5 text-emerald-600" />
        </div>
        <h2 className="text-[12px] font-semibold text-slate-800">Stock Info</h2>
      </div>

      <div className="mb-3 flex items-center gap-2.5 rounded-lg border border-slate-100 bg-slate-50/50 px-3 py-2.5">
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-blue-600 shadow-sm">
          <Warehouse className="h-3.5 w-3.5" />
        </div>
        <p className="text-[11px] font-semibold text-slate-800">
          India Gate Basmati Rice 25kg
        </p>
      </div>

      <div className="flex-1 space-y-0.5">
        {items.map(({ label, value, icon: Icon }) => (
          <div key={label} className="flex items-center justify-between rounded-md px-1.5 py-2 transition hover:bg-slate-50">
            <div className="flex items-center gap-2.5">
              <Icon className="h-3.5 w-3.5 text-slate-400" />
              <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-slate-400">{label}</span>
            </div>
            <span className="text-[11px] font-semibold text-slate-700">{value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StockInfo;
