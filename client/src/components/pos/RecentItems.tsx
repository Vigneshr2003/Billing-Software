import { Clock, PlusCircle } from "lucide-react";
import Button from "../ui/Button";
import type { RecentItem } from "../../types/product.types";

interface RecentItemsProps {
  items: RecentItem[];
  formatCurrency: (value: number) => string;
  onReAdd: (item: RecentItem) => void;
}

function RecentItems({ items, formatCurrency, onReAdd }: RecentItemsProps) {
  return (
    <section className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm">
      <div className="mb-3 flex items-center gap-2.5">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-50">
          <Clock className="h-3.5 w-3.5 text-amber-600" />
        </div>
        <h2 className="text-[12px] font-semibold text-slate-800">Recent Items</h2>
      </div>

      <div className="flex-1 space-y-1 overflow-y-auto scrollbar-hidden">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-lg border border-transparent px-2 py-2 transition hover:border-slate-100 hover:bg-slate-50/50"
          >
            <div className="min-w-0">
              <p className="truncate text-[11px] font-semibold text-slate-800">
                {item.name}
              </p>
              <p className="mt-0.5 text-[10px] text-slate-400">
                <span className="font-mono">{item.code}</span>
                <span className="mx-1.5">•</span>
                <span className="font-medium text-slate-500">{formatCurrency(item.price)}</span>
              </p>
            </div>

            <Button
              className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-600 transition hover:bg-blue-100 hover:scale-110"
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
