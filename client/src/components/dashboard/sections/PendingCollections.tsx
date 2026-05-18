import { Clock, Phone, MessageCircle } from "lucide-react";
import { cn } from "../../../lib/utils";

interface Collection {
  customer: string;
  mobile: string;
  pendingAmount: string;
  dueDays: number;
}

const pendingCollections: Collection[] = [
  { customer: "Kumar Traders", mobile: "9876543210", pendingAmount: "₹45,200", dueDays: 15 },
  { customer: "Priya Mart", mobile: "9123456789", pendingAmount: "₹24,680", dueDays: 7 },
  { customer: "Ganesh Agencies", mobile: "9988776655", pendingAmount: "₹1,12,500", dueDays: 30 },
  { customer: "Lakshmi Stores", mobile: "9456781234", pendingAmount: "₹8,900", dueDays: 3 },
  { customer: "Balaji Textiles", mobile: "9321654987", pendingAmount: "₹67,300", dueDays: 22 },
];

function getDueBadge(days: number) {
  if (days >= 30) return { text: `${days} days`, className: "bg-red-50 text-red-700 border-red-200" };
  if (days >= 15) return { text: `${days} days`, className: "bg-amber-50 text-amber-700 border-amber-200" };
  return { text: `${days} days`, className: "bg-emerald-50 text-emerald-700 border-emerald-200" };
}

function PendingCollections() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50">
          <Clock className="h-4 w-4 text-amber-600" />
        </div>
        <div>
          <h2 className="text-sm font-semibold text-slate-800">Pending Collections</h2>
          <p className="text-xs text-slate-500">5 customers with outstanding</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[500px]">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="pb-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Customer
              </th>
              <th className="pb-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Mobile
              </th>
              <th className="pb-3 text-right text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Pending
              </th>
              <th className="pb-3 text-center text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Due
              </th>
              <th className="pb-3 text-right text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {pendingCollections.map((item) => {
              const badge = getDueBadge(item.dueDays);
              return (
                <tr key={item.customer} className="transition hover:bg-slate-50/50">
                  <td className="py-3 text-sm font-medium text-slate-700">
                    {item.customer}
                  </td>
                  <td className="py-3 text-sm text-slate-500">{item.mobile}</td>
                  <td className="py-3 text-right text-sm font-semibold text-slate-800">
                    {item.pendingAmount}
                  </td>
                  <td className="py-3 text-center">
                    <span
                      className={cn(
                        "inline-block rounded-full border px-2.5 py-0.5 text-[11px] font-semibold",
                        badge.className
                      )}
                    >
                      {badge.text}
                    </span>
                  </td>
                  <td className="py-3">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        type="button"
                        title="WhatsApp"
                        className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition hover:bg-green-50 hover:text-green-600"
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                      </button>
                      <button
                        type="button"
                        title="Call"
                        className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition hover:bg-blue-50 hover:text-blue-600"
                      >
                        <Phone className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default PendingCollections;
