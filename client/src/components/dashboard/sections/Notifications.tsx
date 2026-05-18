import { Bell, CheckCircle, AlertCircle, Info, Clock } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "../../../lib/utils";

interface Notification {
  id: number;
  message: string;
  time: string;
  type: "success" | "warning" | "info";
  icon: LucideIcon;
}

const notifications: Notification[] = [
  { id: 1, message: "Backup completed successfully", time: "2 min ago", type: "success", icon: CheckCircle },
  { id: 2, message: "GST return due in 10 days", time: "1 hr ago", type: "warning", icon: AlertCircle },
  { id: 3, message: "Payment received from Kumar Traders — ₹45,200", time: "2 hrs ago", type: "success", icon: CheckCircle },
  { id: 4, message: "New software update available v2.4.1", time: "3 hrs ago", type: "info", icon: Info },
  { id: 5, message: "Low stock alert: 5 items below minimum", time: "4 hrs ago", type: "warning", icon: AlertCircle },
  { id: 6, message: "Daily report generated for 17-May-2026", time: "5 hrs ago", type: "info", icon: Info },
];

const typeStyles = {
  success: "text-emerald-600 bg-emerald-50",
  warning: "text-amber-600 bg-amber-50",
  info: "text-blue-600 bg-blue-50",
};

function Notifications() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50">
          <Bell className="h-4 w-4 text-violet-600" />
        </div>
        <div>
          <h2 className="text-sm font-semibold text-slate-800">Notifications</h2>
          <p className="text-xs text-slate-500">{notifications.length} recent updates</p>
        </div>
      </div>

      <div className="max-h-[340px] space-y-2 overflow-y-auto scrollbar-hidden">
        {notifications.map((n) => {
          const IconComp = n.icon;
          return (
            <div
              key={n.id}
              className="flex items-start gap-3 rounded-lg border border-slate-100 bg-slate-50/50 px-4 py-3 transition hover:bg-slate-50"
            >
              <div className={cn("mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg", typeStyles[n.type])}>
                <IconComp className="h-3.5 w-3.5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-slate-700">{n.message}</p>
                <p className="mt-1 flex items-center gap-1 text-[11px] text-slate-400">
                  <Clock className="h-3 w-3" />
                  {n.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Notifications;
