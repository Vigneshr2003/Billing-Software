import { CreditCard, ShoppingCart, UserPlus, Receipt } from "lucide-react";
import QuickActionCard from "./QuickActionCard";

const actions = [
  {
    title: "New Bill",
    description: "Create new invoice",
    icon: CreditCard,
    color: "text-blue-600 bg-blue-50",
  },
  {
    title: "Add Purchase",
    description: "Record new purchase",
    icon: ShoppingCart,
    color: "text-emerald-600 bg-emerald-50",
  },
  {
    title: "Add Customer",
    description: "Register new customer",
    icon: UserPlus,
    color: "text-violet-600 bg-violet-50",
  },
  {
    title: "Add Expense",
    description: "Log business expense",
    icon: Receipt,
    color: "text-amber-600 bg-amber-50",
  },
];

function QuickActions() {
  return (
    <section>
      <h2 className="mb-3 text-sm font-semibold text-slate-700">
        Quick Actions
      </h2>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {actions.map((action) => (
          <QuickActionCard key={action.title} {...action} />
        ))}
      </div>
    </section>
  );
}

export default QuickActions;
