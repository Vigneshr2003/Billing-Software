import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/sidebar/Sidebar";
import MobileSidebar from "../components/layout/sidebar/MobileSidebar";
import Topbar from "../components/layout/topbar/Topbar";
import useSidebar from "../hooks/useSidebar";

function DashboardLayout() {
  const {
    isCollapsed,
    isMobileSidebarOpen,
    closeMobileSidebar,
    openMobileSidebar,
    toggleSidebarCollapse,
  } = useSidebar();

  return (
    <div className="h-screen overflow-hidden bg-slate-100 text-slate-950">
      <div className="flex h-screen">
        <aside className="fixed inset-y-0 left-0 z-20 hidden border-r border-slate-200/60 bg-[#0F2B5B] md:block">
          <Sidebar
            collapsed={isCollapsed}
            onToggleCollapse={toggleSidebarCollapse}
          />
        </aside>

        <MobileSidebar
          isOpen={isMobileSidebarOpen}
          onClose={closeMobileSidebar}
        />

        <div
          className={[
            "flex min-w-0 flex-1 flex-col overflow-hidden transition-[padding] duration-300",
            isCollapsed ? "md:pl-[70px]" : "md:pl-[260px]",
          ].join(" ")}
        >
          <Topbar onOpenMobileMenu={openMobileSidebar} />

          <main className="flex-1 overflow-y-auto p-3 sm:p-4">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
