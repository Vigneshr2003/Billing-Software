import SalesInvoiceFilter from "../../components/sales/SalesInvoiceFilter";
import SalesKpiCards from "../../components/sales/SalesKpiCards";
import SalesInvoiceTable from "../../components/sales/SalesInvoiceTable";
import SalesQuickActions from "../../components/sales/SalesQuickActions";
import SalesShortcuts from "../../components/sales/SalesShortcuts";
import SalesDailyStats from "../../components/sales/SalesDailyStats";
import SalesShortcutButton from "../../components/sales/SalesShortcutButton";

function SalesInvoicePage() {
  return (
    <div className="flex min-h-full flex-col gap-2 p-2 sm:p-4">
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

        {/* Right sidebar — row on sm/md, stacked on xl */}
        <div className="flex flex-col gap-3 sm:flex-row xl:flex-col">
          <div className="flex-1 xl:flex-none">
            <SalesQuickActions />
          </div>
          <div className="flex-1 xl:flex-none">
            <SalesShortcuts />
          </div>
        </div>

      </div>

      {/* Bottom stats row — full width */}
      <SalesDailyStats />

    </div>
  );
}

export default SalesInvoicePage;