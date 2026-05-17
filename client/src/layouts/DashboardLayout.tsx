import Sidebar from "../components/layout/sidebar/Sidebar";
import MobileSidebar from "../components/layout/sidebar/MobileSidebar";
import Topbar from "../components/layout/topbar/Topbar";
import useSidebar from "../hooks/useSidebar";
import Toptext from "../components/dashboard/text";
import Button from "../components/dashboard/button";
import MasterContainer from "../components/dashboard/master_container";
import LeftContainer from "../components/dashboard/left_container";
import RightContainer from "../components/dashboard/right_container";
function DashboardLayout() {
  const {
    isCollapsed,
    isMobileSidebarOpen,
    closeMobileSidebar,
    openMobileSidebar,
    toggleSidebarCollapse,
  } = useSidebar();

  return (
    <div className="h-screen overflow-hidden bg-slate-75 text-slate-950">
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
            isCollapsed ? "md:pl-17.5" : "md:pl-65",
          ].join(" ")}
        >
          <Topbar onOpenMobileMenu={openMobileSidebar} />

          <main className="flex-1 overflow-y-auto p-3 sm:p-4">
            <section
              aria-label="Workspace"
              className="flex min-h-full flex-col rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <header className="border-b border-slate-200 px-4 py-0.5 sm:px-3">
                <Toptext />
              </header>
              <div className="border-b border-slate-200 px-4 py-0.5 sm:px-3">
                <Button />
              </div>
              <div className="border-b border-slate-200 px-4 py-3 sm:px-4">
                <MasterContainer />
              </div>
              <div className="flex flex-col lg:flex-row gap-4 p-4">
                <div className="lg:w-[60%]">
                  <LeftContainer />
                </div>
                <div className="lg:w-[40%]">
                  <RightContainer />
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
