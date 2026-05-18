import { PlusCircle } from "lucide-react";
import Button from "../ui/Button";
import type { RecentItem } from "../../types/product.types";

interface RecentItemsProps {
  items: RecentItem[];
  formatCurrency: (value: number) => string;
  onReAdd: (item: RecentItem) => void;
}

function RecentItems({ items, formatCurrency, onReAdd }: RecentItemsProps) {
  return (
    <section className="h-full min-h-[220px] rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
      <h2 className="mb-3 text-[13px] font-semibold text-slate-900">Recent Items</h2>

      <div className="space-y-1">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b border-slate-100 py-1.5 last:border-b-0"
          >
            <div className="min-w-0">
              <p className="truncate text-[11px] font-medium text-slate-800">
                {item.name}
              </p>
              <p className="mt-0.5 text-[9px] text-slate-500">
                {item.code} - {formatCurrency(item.price)}
              </p>
            </div>

            <Button
              className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-700 transition hover:bg-blue-100"
              onClick={() => onReAdd(item)}
            >
              <PlusCircle className="h-3.5 w-3.5" />
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentItems;
