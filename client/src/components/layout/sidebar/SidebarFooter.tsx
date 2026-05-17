import { ChevronLeft, ChevronRight } from "lucide-react";

interface SidebarFooterProps {
  collapsed: boolean;
  hideCollapseAction?: boolean;
  onToggleCollapse?: () => void;
}

function SidebarFooter({
  collapsed,
  hideCollapseAction = false,
  onToggleCollapse,
}: SidebarFooterProps) {
  if (hideCollapseAction) {
    return <div className="shrink-0 border-t border-white/10 px-2.5 py-2.5" />;
  }

  return (
    <div className="shrink-0 border-t border-white/10 px-2 py-2.5">
      <button
        type="button"
        onClick={onToggleCollapse}
        className={[
          "flex w-full items-center rounded-lg px-2.5 py-1.5 text-blue-50/90 transition-all duration-300",
          "hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
          collapsed ? "justify-center" : "justify-between",
        ].join(" ")}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        title={collapsed ? "Expand menu" : undefined}
      >
        <span
          className={[
            "truncate whitespace-nowrap text-[12px] font-medium transition-all duration-300",
            collapsed ? "w-0 opacity-0" : "w-auto opacity-100",
          ].join(" ")}
        >
          Collapse Menu
        </span>
        {collapsed ? (
          <ChevronRight className="h-3 w-3 shrink-0" />
        ) : (
          <ChevronLeft className="h-3 w-3 shrink-0" />
        )}
      </button>
    </div>
  );
}

export default SidebarFooter;
