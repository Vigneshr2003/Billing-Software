import type { LucideIcon } from "lucide-react";
import { cn } from "../../../lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  note: string;
  icon: LucideIcon;
  accent: string;
  trend?: "up" | "down" | "neutral";
}

function StatCard({ label, value, note, icon: Icon, accent, trend = "neutral" }: StatCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white px-5 py-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
      <div className="flex items-start justify-between">
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
            {label}
          </p>
          <p className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
            {value}
          </p>
          <p
            className={cn(
              "mt-1.5 text-xs font-medium",
              trend === "up" && "text-emerald-600",
              trend === "down" && "text-red-500",
              trend === "neutral" && "text-slate-500"
            )}
          >
            {trend === "up" && "↑ "}
            {trend === "down" && "↓ "}
            {note}
          </p>
        </div>

        <div
          className={cn(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110",
            accent
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>

      {/* Decorative gradient bar at top */}
      <div
        className={cn(
          "absolute inset-x-0 top-0 h-[3px] opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          accent.includes("emerald") && "bg-linear-to-r from-emerald-400 to-emerald-600",
          accent.includes("blue") && "bg-linear-to-r from-blue-400 to-blue-600",
          accent.includes("amber") && "bg-linear-to-r from-amber-400 to-amber-600",
          accent.includes("violet") && "bg-linear-to-r from-violet-400 to-violet-600",
          accent.includes("rose") && "bg-linear-to-r from-rose-400 to-rose-600"
        )}
      />
    </article>
  );
}

export default StatCard;
