import { TrendingUp, ShoppingBag, FileText, Wallet, Bell } from "lucide-react";

const stats = [
  {
    title: "Today Sales",
    value: "₹ 0",
    sub: "No data yet",
    subColor: "text-emerald-500",
    icon: ShoppingBag,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    borderColor: "border-blue-100",
  },
  {
    title: "Today Profit",
    value: "₹ 0",
    sub: "No data yet",
    subColor: "text-emerald-500",
    icon: TrendingUp,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
    borderColor: "border-emerald-100",
  },
  {
    title: "Outstanding",
    value: "₹ 0",
    sub: "0 Customers",
    subColor: "text-orange-500",
    icon: FileText,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-500",
    borderColor: "border-purple-100",
  },
  {
    title: "Cash In Hand",
    value: "₹ 0",
    sub: "Updated just now",
    subColor: "text-blue-500",
    icon: Wallet,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    borderColor: "border-amber-100",
  },
  {
    title: "Low Stock Alerts",
    value: "0 Items",
    sub: "View Details",
    subColor: "text-blue-500 underline cursor-pointer",
    icon: Bell,
    iconBg: "bg-rose-50",
    iconColor: "text-rose-500",
    borderColor: "border-rose-100",
  },
];

export default function MasterContainer() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className={`flex items-center gap-3 rounded-xl border ${stat.borderColor} bg-white px-4 py-3 shadow-sm transition-shadow hover:shadow-md`}
          >
            {/* Icon */}
            <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ${stat.iconBg}`}>
              <Icon className={`h-5 w-5 ${stat.iconColor}`} strokeWidth={1.8} />
            </div>

            {/* Content */}
            <div className="min-w-0">
              <p className="text-xs font-medium text-slate-500">{stat.title}</p>
              <p className="mt-0.5 text-base font-bold text-slate-900 leading-tight">{stat.value}</p>
              <p className={`mt-0.5 text-xs font-medium ${stat.subColor}`}>{stat.sub}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
