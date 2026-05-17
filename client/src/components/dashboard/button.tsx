import { FilePlus, ShoppingCart, UserPlus, Receipt } from "lucide-react";

const buttons = [
  {
    title: "New Bill",
    subtitle: "Create new invoice",
    icon: FilePlus,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-50",
  },
  {
    title: "Add Purchase",
    subtitle: "Add new purchase",
    icon: ShoppingCart,
    iconColor: "text-green-500",
    iconBg: "bg-green-50",
  },
  {
    title: "Add Customer",
    subtitle: "Create customer",
    icon: UserPlus,
    iconColor: "text-purple-500",
    iconBg: "bg-purple-50",
  },
  {
    title: "Add Expense",
    subtitle: "Record expense",
    icon: Receipt,
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50",
  },
];

function Button() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {buttons.map((item, index) => {
        const Icon = item.icon;
        return (
          <button
            key={index}
            className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white px-5 py-3 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.iconBg}`}>
              <Icon className={`h-5 w-5 ${item.iconColor}`} strokeWidth={1.8} />
            </div>

            <div className="text-left">
              <h3 className="text-sm font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500">
                {item.subtitle}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default Button;