import { ChevronLeft, ChevronRight, PanelLeftClose, Receipt } from "lucide-react";
import Button from "../../ui/Button";
import { cn } from "../../../lib/utils";
import SidebarItem from "./SidebarItem";
import { sidebarData } from "./sidebarData";

interface SidebarProps {
  collapsed: boolean;
  isOpen?: boolean;
  mobile?: boolean;
  onClose?: () => void;
  onToggleCollapse?: () => void;
}

interface SidebarContentProps {
  collapsed: boolean;
  mobile?: boolean;
  onClose?: () => void;
  onToggleCollapse?: () => void;
}

function SidebarContent({
  collapsed,
  mobile = false,
  onClose,
  onToggleCollapse,
}: SidebarContentProps) {
  return (
    <div
      className={cn(
        "flex h-screen flex-col overflow-hidden bg-[#0F2B5B] text-white transition-all duration-300",
        collapsed ? "w-17.5" : "w-65",
        mobile ? "shadow-2xl" : "shadow-none",
      )}
    >
      <div className="shrink-0 border-b border-white/10 px-2.5 py-2.5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/12 ring-1 ring-white/10">
            <Receipt className="h-3.5 w-3.5 text-white" />
          </div>

          <div
            className={cn(
              "min-w-0 overflow-hidden transition-all duration-300",
              collapsed ? "w-0 opacity-0" : "w-auto opacity-100",
            )}
          >
            <p className="truncate text-[14px] font-semibold text-white">
              Venticinqe Mart
            </p>
            <p className="truncate text-[12px] text-blue-100/75">
              Wholesale Distribution
            </p>
          </div>

          {mobile && onClose ? (
            <Button
              aria-label="Close sidebar"
              className="ml-auto inline-flex h-7 w-7 items-center justify-center rounded-lg text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              onClick={onClose}
            >
              <PanelLeftClose className="h-3.5 w-3.5" />
            </Button>
          ) : null}
        </div>
      </div>

      <nav
        aria-label="Primary sidebar navigation"
        className="scrollbar-hidden min-h-0 flex-1 overflow-y-auto px-2 py-2.5"
      >
        <ul className="space-y-1">
          {sidebarData.map((item) => (
            <SidebarItem key={item.id} collapsed={collapsed} item={item} />
          ))}
        </ul>
      </nav>

      {mobile ? (
        <div className="shrink-0 border-t border-white/10 px-2.5 py-2.5" />
      ) : (
        <div className="shrink-0 border-t border-white/10 px-2 py-2.5">
          <Button
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            className={cn(
              "flex w-full items-center rounded-lg px-2.5 py-1.5 text-blue-50/90 transition-all duration-300",
              "hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
              collapsed ? "justify-center" : "justify-between",
            )}
            onClick={onToggleCollapse}
            title={collapsed ? "Expand menu" : undefined}
          >
            <span
              className={cn(
                "truncate whitespace-nowrap text-[12px] font-medium transition-all duration-300",
                collapsed ? "w-0 opacity-0" : "w-auto opacity-100",
              )}
            >
              Collapse Menu
            </span>
            {collapsed ? (
              <ChevronRight className="h-3 w-3 shrink-0" />
            ) : (
              <ChevronLeft className="h-3 w-3 shrink-0" />
            )}
          </Button>
        </div>
      )}
    </div>
  );
}

function Sidebar({
  collapsed,
  isOpen = false,
  mobile = false,
  onClose,
  onToggleCollapse,
}: SidebarProps) {
  if (mobile) {
    return (
      <div
        aria-hidden={!isOpen}
        className={cn(
          "fixed inset-0 z-50 bg-slate-950/40 transition-all duration-300 md:hidden",
          isOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
        onClick={onClose}
      >
        <div
          className={cn(
            "h-full transition-transform duration-300",
            isOpen ? "translate-x-0" : "-translate-x-full",
          )}
          onClick={(event) => event.stopPropagation()}
        >
          <SidebarContent collapsed={false} mobile onClose={onClose} />
        </div>
      </div>
    );
  }

  return (
    <SidebarContent
      collapsed={collapsed}
      onClose={onClose}
      onToggleCollapse={onToggleCollapse}
    />
  );
}

export default Sidebar;
