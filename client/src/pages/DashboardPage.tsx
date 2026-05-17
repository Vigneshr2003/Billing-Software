import {
  ArrowUpRight,
  Bell,
  Boxes,
  CreditCard,
  IndianRupee,
  PackageSearch,
  ReceiptText,
  ShoppingCart,
  Users,
} from "lucide-react";

function DashboardPage() {
  const statCards = [
    {
      label: "Today Sales",
      value: "Rs. 1,25,430",
      note: "+12.5% vs yesterday",
      icon: IndianRupee,
      accent: "text-emerald-600 bg-emerald-50",
    },
    {
      label: "Bills Created",
      value: "86",
      note: "18 pending print",
      icon: ReceiptText,
      accent: "text-blue-600 bg-blue-50",
    },
    {
      label: "Stock Alerts",
      value: "12 Items",
      note: "Needs refill today",
      icon: Boxes,
      accent: "text-amber-600 bg-amber-50",
    },
    {
      label: "Active Customers",
      value: "248",
      note: "32 visited this week",
      icon: Users,
      accent: "text-violet-600 bg-violet-50",
    },
  ];

  const quickActions = [
    { label: "Create Bill", icon: CreditCard },
    { label: "Add Purchase", icon: ShoppingCart },
    { label: "Check Stock", icon: PackageSearch },
    { label: "View Reports", icon: ArrowUpRight },
  ];

  const recentActivity = [
    "Invoice INV-2026-0517-018 created for Raj Stores",
    "Backup synced successfully 5 minutes ago",
    "Low stock alert generated for Tata Tea Premium 1kg",
    "Payment collected from Kumar Traders",
  ];

  return (
    <section className="flex min-h-full flex-col rounded-xl border border-slate-200 bg-white shadow-sm">
      <header className="border-b border-slate-200 px-4 py-3 sm:px-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
          Dashboard
        </p>
        <h1 className="mt-1 text-lg font-semibold text-slate-900">
          Business Overview
        </h1>
      </header>

      <div className="flex-1 space-y-4 p-4 sm:p-5">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {statCards.map(({ label, value, note, icon: Icon, accent }) => (
            <article
              key={label}
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                    {label}
                  </p>
                  <p className="mt-2 text-xl font-semibold text-slate-900">
                    {value}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{note}</p>
                </div>

                <div
                  className={[
                    "flex h-10 w-10 items-center justify-center rounded-lg",
                    accent,
                  ].join(" ")}
                >
                  <Icon className="h-4 w-4" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="grid gap-4 xl:grid-cols-[minmax(0,1.2fr)_360px]">
          <section className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="mb-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                Quick Actions
              </p>
              <h2 className="mt-1 text-sm font-semibold text-slate-900">
                Daily Operations
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {quickActions.map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  type="button"
                  className="inline-flex h-12 items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                >
                  <span>{label}</span>
                  <Icon className="h-4 w-4 text-blue-600" />
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="mb-4 flex items-center gap-2">
              <Bell className="h-4 w-4 text-blue-600" />
              <h2 className="text-sm font-semibold text-slate-900">
                Recent Activity
              </h2>
            </div>

            <div className="space-y-2">
              {recentActivity.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default DashboardPage;
