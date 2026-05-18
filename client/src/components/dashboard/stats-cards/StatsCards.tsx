import {
  AlertTriangle,
  Banknote,
  IndianRupee,
  TrendingUp,
  Wallet,
} from "lucide-react";
import StatCard from "./StatCard";

const statsData = [
  {
    label: "Today Sales",
    value: "₹1,25,430",
    note: "+12.5% vs Yesterday",
    icon: IndianRupee,
    accent: "text-emerald-600 bg-emerald-50",
    trend: "up" as const,
  },
  {
    label: "Today Profit",
    value: "₹18,620",
    note: "+8.3% vs Yesterday",
    icon: TrendingUp,
    accent: "text-blue-600 bg-blue-50",
    trend: "up" as const,
  },
  {
    label: "Outstanding",
    value: "₹3,42,800",
    note: "24 invoices pending",
    icon: Banknote,
    accent: "text-amber-600 bg-amber-50",
    trend: "neutral" as const,
  },
  {
    label: "Cash In Hand",
    value: "₹78,540",
    note: "-5.2% vs Yesterday",
    icon: Wallet,
    accent: "text-violet-600 bg-violet-50",
    trend: "down" as const,
  },
  {
    label: "Low Stock Alerts",
    value: "12 Items",
    note: "Needs refill today",
    icon: AlertTriangle,
    accent: "text-rose-600 bg-rose-50",
    trend: "neutral" as const,
  },
];

function StatsCards() {
  return (
    <section>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {statsData.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}

export default StatsCards;
