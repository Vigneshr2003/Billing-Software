import {
  BarChart3,
  Clock3,
  FileSpreadsheet,
  FileText,
  RotateCcw,
  ShoppingCart,
  Truck,
  Wallet,
} from "lucide-react";

const actions = [
  { title: "Sales Return",       icon: RotateCcw,      bg: "bg-pink-100",   color: "text-pink-600"   },
  { title: "Quotations",         icon: FileText,        bg: "bg-purple-100", color: "text-purple-600" },
  { title: "Sales Orders",       icon: ShoppingCart,    bg: "bg-orange-100", color: "text-orange-600" },
  { title: "Delivery Challan",   icon: Truck,           bg: "bg-cyan-100",   color: "text-cyan-600"   },
  { title: "Pending Invoices",   icon: Clock3,          bg: "bg-yellow-100", color: "text-yellow-600" },
  { title: "Payment Collection", icon: Wallet,          bg: "bg-green-100",  color: "text-green-600"  },
  { title: "Customer Statement", icon: FileSpreadsheet, bg: "bg-blue-100",   color: "text-blue-600"   },
  { title: "Sales Analytics",    icon: BarChart3,       bg: "bg-indigo-100", color: "text-indigo-600" },
];

function SalesQuickActions() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
      <h3 className="mb-2.5 text-[11px] font-bold uppercase tracking-wider text-slate-500">
        Quick Actions
      </h3>
      <ul className="space-y-0.5">
        {actions.map(({ title, icon: Icon, bg, color }) => (
          <li key={title}>
            <button className="flex w-full items-center gap-2.5 rounded-lg px-2 py-1.5 text-left transition hover:bg-slate-50">
              <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${bg}`}>
                <Icon className={`h-3.5 w-3.5 ${color}`} />
              </span>
              <span className="text-[12px] font-medium text-slate-700">{title}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SalesQuickActions;