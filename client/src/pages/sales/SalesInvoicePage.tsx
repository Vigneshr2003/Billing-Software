import SalesInvoiceFilter from "../../components/sales/SalesInvoiceFilter";
import SalesKpiCards from "../../components/sales/SalesKpiCards";
import SalesInvoiceTable from "../../components/sales/SalesInvoiceTable";
import SalesQuickActions from "../../components/sales/SalesQuickActions";
import SalesShortcuts from "../../components/sales/SalesShortcuts";
import SalesDailyStats from "../../components/sales/SalesDailyStats";
import SalesShortcutButton from "../../components/sales/SalesShortcutButton";
import { UserCircle2 } from "lucide-react";

function SalesInvoicePage() {
  return (
    <div className="flex min-h-full flex-col gap-2 p-2 pb-0 sm:p-4 sm:pb-0">
      <SalesShortcutButton />

      {/* Filters */}
      <SalesInvoiceFilter />

      {/* KPI Summary Cards */}
      <SalesKpiCards />

      {/* Invoice Table (left) + Quick Actions / Shortcuts sidebar (right) */}
      <div className="flex flex-col gap-4 xl:grid xl:gap-4" style={{ gridTemplateColumns: "minmax(0,1fr) 220px" }}>

        {/* Left — scrollable invoice table */}
        <div className="min-w-0 overflow-hidden">
          <SalesInvoiceTable />
        </div>

        {/* Right sidebar — stacked, full height to match table */}
        <div className="flex h-full flex-col gap-3">
          <div className="flex-1">
            <SalesQuickActions />
          </div>
          <div className="flex-1">
            <SalesShortcuts />
          </div>
        </div>

      </div>

      {/* Bottom stats row — full width */}
      <SalesDailyStats />

      <footer className="sticky bottom-0 z-10 mt-auto border-t border-slate-200 bg-white px-4 py-2 text-[11px] text-slate-500">
        <div className="flex flex-wrap items-center justify-between gap-3">

          {/* Copyright */}
          <span className="font-medium text-slate-600">
            © 2025 <span className="font-semibold text-slate-700">Venticinque Mart.</span> All rights reserved.
          </span>

          <div className="flex flex-wrap items-center gap-4">

            {/* Backup */}
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span><span className="font-medium text-slate-600">Backup:</span> 21 May 2025, 02:00 AM</span>
            </div>

            {/* Printer */}
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span><span className="font-medium text-slate-600">Printer:</span> Connected</span>
            </div>

            {/* User */}
            <div className="flex items-center gap-1.5">
              <UserCircle2 className="h-3.5 w-3.5 text-slate-400" />
              <span><span className="font-medium text-slate-600">User:</span> Srinath (Admin)</span>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}

export default SalesInvoicePage;