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
            <section
              aria-label="Workspace"
              className="flex min-h-full flex-col rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <header className="border-b border-slate-200 px-4 py-3 sm:px-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  ERP Billing Workspace
                </p>
                <h1 className="mt-1 text-xl font-semibold text-slate-900">
                  Billing / POS
                </h1>
              </header>

              <div className="flex flex-1 items-center justify-center px-4 py-8">
                <div className="w-full max-w-5xl rounded-xl border border-dashed border-slate-300 bg-slate-50/80 px-5 py-10 text-center">
                  <p className="text-xs font-medium text-slate-500">
                    Layout shell ready for module content
                  </p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
