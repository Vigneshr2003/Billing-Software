import QuickActions from "../components/dashboard/quick-actions/QuickActions";
import StatsCards from "../components/dashboard/stats-cards/StatsCards";
import SalesOverview from "../components/dashboard/sections/SalesOverview";
import TopSellingProducts from "../components/dashboard/sections/TopSellingProducts";
import RecentBills from "../components/dashboard/sections/RecentBills";
import PendingCollections from "../components/dashboard/sections/PendingCollections";
import StockAlerts from "../components/dashboard/sections/StockAlerts";
import Notifications from "../components/dashboard/sections/Notifications";

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
}

function DashboardPage() {
  return (
    <div className="space-y-5">
      <header >
        <h1 className="text-xl font-bold text-slate-900">
          {getGreeting()}, Srinath
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Here's what's happening with your business today.
        </p>
      </header>

      {/* ── Quick Actions ── */}
      <QuickActions />

      {/* ── Stats Cards ── */}
      <StatsCards />

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <SalesOverview />
        <TopSellingProducts />
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        <RecentBills />
        <PendingCollections />
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        <StockAlerts />
        <Notifications />
      </div>

    </div>
  );
}

export default DashboardPage;
