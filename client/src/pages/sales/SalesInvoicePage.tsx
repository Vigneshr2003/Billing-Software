import SalesInvoiceFilter from "../../components/sales/SalesInvoiceFilter";
import SalesKpiCards from "../../components/sales/SalesKpiCards";
import SalesInvoiceTable from "../../components/sales/SalesInvoiceTable";
import SalesQuickActions from "../../components/sales/SalesQuickActions";
import SalesShortcuts from "../../components/sales/SalesShortcuts";
import SalesDailyStats from "../../components/sales/SalesDailyStats";

function SalesInvoicePage() {
  return (
    <div className="flex min-h-full flex-col gap-4 p-4">

      {/* Filters */}
      <SalesInvoiceFilter />

      {/* KPI Summary Cards */}
      <SalesKpiCards />

      {/* Invoice Table (left)  +  Quick Actions / Shortcuts sidebar (right) */}
      <div className="grid gap-4" style={{ gridTemplateColumns: "minmax(0,1fr) 220px" }}>

        {/* Left — scrollable invoice table */}
        <div className="min-w-0 overflow-hidden">
          <SalesInvoiceTable />
        </div>

        {/* Right sidebar */}
        <div className="flex flex-col gap-3">
          <SalesQuickActions />
          <SalesShortcuts />
        </div>

      </div>

      {/* Bottom stats row — full width */}
      <SalesDailyStats />

    </div>
  );
}

export default SalesInvoicePage;