import {
  Archive,
  Ban,
  FileClock,
  FilePlus2,
  Printer,
  Receipt,
  RotateCcw,
  Save,
} from "lucide-react";
import Button from "../ui/Button";

function PosActions() {
  const primaryActions = [
    {
      label: "Save & Print",
      icon: Printer,
      className: "bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm shadow-emerald-200",
    },
    {
      label: "Save Bill",
      icon: Save,
      className: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm shadow-blue-200",
    },
  ];

  const secondaryActions = [
    {
      label: "Print",
      icon: Receipt,
      className: "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300",
    },
    {
      label: "Hold Bill",
      icon: Archive,
      className: "border border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100",
    },
    {
      label: "Recall",
      icon: FileClock,
      className: "border border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100",
    },
    {
      label: "Return",
      icon: RotateCcw,
      className: "border border-violet-200 bg-violet-50 text-violet-700 hover:bg-violet-100",
    },
    {
      label: "New Bill",
      icon: FilePlus2,
      className: "border border-cyan-200 bg-cyan-50 text-cyan-700 hover:bg-cyan-100",
    },
    {
      label: "Cancel",
      icon: Ban,
      className: "border border-red-200 bg-red-50 text-red-600 hover:bg-red-100",
    },
  ];

  return (
    <section className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
      <h3 className="mb-2.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
        Actions
      </h3>

      {/* Primary row */}
      <div className="grid grid-cols-2 gap-2 mb-2">
        {primaryActions.map(({ label, icon: Icon, className }) => (
          <Button
            key={label}
            className={[
              "inline-flex h-10 items-center justify-center gap-1.5 rounded-lg px-2 text-[11px] font-bold transition-all duration-200",
              className,
            ].join(" ")}
          >
            <Icon className="h-4 w-4" />
            <span>{label}</span>
          </Button>
        ))}
      </div>

      {/* Secondary grid */}
      <div className="grid flex-1 auto-rows-fr grid-cols-3 gap-1.5 content-start">
        {secondaryActions.map(({ label, icon: Icon, className }) => (
          <Button
            key={label}
            className={[
              "inline-flex flex-col items-center justify-center gap-1 rounded-lg px-1.5 text-[10px] font-semibold transition-all duration-200",
              className,
            ].join(" ")}
          >
            <Icon className="h-3.5 w-3.5" />
            <span>{label}</span>
          </Button>
        ))}
      </div>
    </section>
  );
}

export default PosActions;
