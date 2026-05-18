import { ReceiptText, Eye, Printer, ArrowRight } from "lucide-react";
import { cn } from "../../../lib/utils";

interface Bill {
  billNo: string;
  customer: string;
  time: string;
  amount: string;
  paymentMethod: string;
  status: "Paid" | "Pending" | "Partial";
}

const recentBills: Bill[] = [
  {
    billNo: "INV-2026-0518-001",
    customer: "Raj Stores",
    time: "10:45 AM",
    amount: "₹12,450",
    paymentMethod: "UPI",
    status: "Paid",
  },
  {
    billNo: "INV-2026-0518-002",
    customer: "Kumar Traders",
    time: "11:12 AM",
    amount: "₹8,320",
    paymentMethod: "Cash",
    status: "Paid",
  },
  {
    billNo: "INV-2026-0518-003",
    customer: "Priya Mart",
    time: "11:38 AM",
    amount: "₹24,680",
    paymentMethod: "Credit",
    status: "Pending",
  },
  {
    billNo: "INV-2026-0518-004",
    customer: "Ganesh Agencies",
    time: "12:05 PM",
    amount: "₹5,990",
    paymentMethod: "Card",
    status: "Paid",
  },
  {
    billNo: "INV-2026-0518-005",
    customer: "Lakshmi Stores",
    time: "12:30 PM",
    amount: "₹15,200",
    paymentMethod: "Cash",
    status: "Partial",
  },
];

const statusStyles: Record<Bill["status"], string> = {
  Paid: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Pending: "bg-amber-50 text-amber-700 border-amber-200",
  Partial: "bg-blue-50 text-blue-700 border-blue-200",
};

function RecentBills() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
            <ReceiptText className="h-4 w-4 text-blue-600" />
          </div>
          <h2 className="text-sm font-semibold text-slate-800">Recent Bills</h2>
        </div>
        <button
          type="button"
          className="flex items-center gap-1 text-xs font-medium text-blue-600 transition hover:text-blue-700"
        >
          View All
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px]">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="pb-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Bill No
              </th>
              <th className="pb-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Customer
              </th>
              <th className="pb-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Time
              </th>
              <th className="pb-3 text-right text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Amount
              </th>
              <th className="pb-3 text-center text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Payment
              </th>
              <th className="pb-3 text-center text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Status
              </th>
              <th className="pb-3 text-right text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {recentBills.map((bill) => (
              <tr key={bill.billNo} className="transition hover:bg-slate-50/50">
                <td className="py-3 text-sm font-medium text-blue-600">
                  {bill.billNo}
                </td>
                <td className="py-3 text-sm text-slate-700">{bill.customer}</td>
                <td className="py-3 text-sm text-slate-500">{bill.time}</td>
                <td className="py-3 text-right text-sm font-semibold text-slate-800">
                  {bill.amount}
                </td>
                <td className="py-3 text-center">
                  <span className="inline-block rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                    {bill.paymentMethod}
                  </span>
                </td>
                <td className="py-3 text-center">
                  <span
                    className={cn(
                      "inline-block rounded-full border px-2.5 py-0.5 text-[11px] font-semibold",
                      statusStyles[bill.status]
                    )}
                  >
                    {bill.status}
                  </span>
                </td>
                <td className="py-3">
                  <div className="flex items-center justify-end gap-1.5">
                    <button
                      type="button"
                      title="View"
                      className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition hover:bg-blue-50 hover:text-blue-600"
                    >
                      <Eye className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      title="Print"
                      className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition hover:bg-blue-50 hover:text-blue-600"
                    >
                      <Printer className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default RecentBills;
