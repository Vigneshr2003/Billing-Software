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
  const actions = [
    {
      label: "Save & Print",
      icon: Printer,
      className: "bg-emerald-600 text-white hover:bg-emerald-700",
    },
    {
      label: "Save Bill",
      icon: Save,
      className: "bg-blue-600 text-white hover:bg-blue-700",
    },
    {
      label: "Print",
      icon: Receipt,
      className: "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
    },
    {
      label: "Hold Bill",
      icon: Archive,
      className: "border border-slate-200 bg-white text-amber-600 hover:bg-slate-50",
    },
    {
      label: "Recall Bill",
      icon: FileClock,
      className: "border border-slate-200 bg-white text-blue-600 hover:bg-slate-50",
    },
    {
      label: "Return Bill",
      icon: RotateCcw,
      className: "border border-slate-200 bg-white text-violet-600 hover:bg-slate-50",
    },
    {
      label: "New Bill",
      icon: FilePlus2,
      className: "border border-slate-200 bg-white text-cyan-600 hover:bg-slate-50",
    },
    {
      label: "Cancel Bill",
      icon: Ban,
      className: "border border-slate-200 bg-white text-rose-600 hover:bg-slate-50",
    },
  ];

  return (
    <section className="h-full min-h-[220px] rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
      <div className="grid h-full auto-rows-fr grid-cols-2 gap-2">
        {actions.map(({ label, icon: Icon, className }) => (
          <Button
            key={label}
            className={[
              "inline-flex h-full min-h-0 items-center justify-center gap-1 rounded-lg px-2 text-[9px] font-semibold transition shadow-sm",
              className,
            ].join(" ")}
          >
            <Icon className="h-3 w-3" />
            <span>{label}</span>
          </Button>
        ))}
      </div>
    </section>
  );
}

export default PosActions;
