import { Boxes, CalendarRange, ShoppingBag, Warehouse } from "lucide-react";
import Card from "../ui/Card";
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
    <section className="h-full min-h-[220px] rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
      <h2 className="mb-3 text-[13px] font-semibold text-slate-900">
        Stock Info (Selected Item)
      </h2>

      <Card className="mb-3 flex items-center gap-2.5 rounded-lg border border-slate-100 bg-slate-50 px-2.5 py-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-blue-600">
          <Warehouse className="h-4 w-4" />
        </div>
        <p className="text-[11px] font-medium text-slate-900">
          India Gate Basmati Rice 25kg
        </p>
      </Card>

      <div className="space-y-1">
        {items.map(({ label, value, icon: Icon }) => (
          <div key={label} className="flex items-center justify-between py-1.5">
            <div className="flex items-center gap-2">
              <Icon className="h-3.5 w-3.5 text-blue-600" />
              <span className="text-[11px] text-slate-500">{label}</span>
            </div>
            <p className="text-[11px] font-semibold text-slate-800">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StockInfo;
