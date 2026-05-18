import { CheckCircle2, CircleAlert, Wifi } from "lucide-react";
import type { FooterStatusItem } from "../../types/billing.types";

interface FooterStatusProps {
  totalItems: number;
  totalQuantity: number;
  statuses: FooterStatusItem[];
}

function FooterStatus({
  totalItems,
  totalQuantity,
  statuses,
}: FooterStatusProps) {
  return (
    <footer className="sticky bottom-0 z-10 mt-auto border-t border-slate-200 bg-white px-3 py-2 text-slate-700 sm:px-4">
      <div className="flex flex-col gap-1.5 text-[10px] lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-medium">Total Items: {totalItems}</span>
          <span className="font-medium">Total Qty: {totalQuantity}</span>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-slate-600">
          {statuses.map((status) => {
            const Icon =
              status.tone === "warning"
                ? CircleAlert
                : status.label === "Internet"
                  ? Wifi
                  : CheckCircle2;

            return (
              <span key={status.id} className="inline-flex items-center gap-1.5">
                <Icon
                  className={[
                    "h-3.5 w-3.5",
                    status.tone === "success"
                      ? "text-emerald-500"
                      : status.tone === "warning"
                        ? "text-amber-400"
                        : "text-slate-500",
                  ].join(" ")}
                />
                <span>
                  {status.label}: {status.value}
                </span>
              </span>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default FooterStatus;
