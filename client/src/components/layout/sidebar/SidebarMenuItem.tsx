import { ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";
import type { SidebarMenuEntry } from "./sidebar.types";

interface SidebarMenuItemProps {
  item: SidebarMenuEntry;
  collapsed: boolean;
  level?: number;
}

function SidebarMenuItem({
  item,
  collapsed,
  level = 0,
}: SidebarMenuItemProps) {
  const hasChildren = Boolean(item.children?.length);
  const hasActiveChild = useMemo(
    () => item.children?.some((child) => child.active) ?? false,
    [item.children],
  );
  const [isExpanded, setIsExpanded] = useState(hasActiveChild);

  const Icon = item.icon;
  const isActive = item.active ?? false;

  const handleToggle = () => {
    if (hasChildren) {
      setIsExpanded((previous) => !previous);
    }
  };

  return (
    <li className="group relative">
      <button
        type="button"
        aria-expanded={hasChildren ? isExpanded : undefined}
        aria-current={isActive ? "page" : undefined}
        onClick={handleToggle}
        title={collapsed ? item.label : undefined}
        className={[
          "flex w-full items-center rounded-lg px-2.5 py-1.5 text-left transition-all duration-300",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
          collapsed ? "justify-center" : "justify-between",
          isActive
            ? "bg-[#2563EB] text-white shadow-lg shadow-blue-950/25"
            : "text-blue-50/90 hover:bg-white/10 hover:text-white",
          level > 0 && !collapsed ? "pl-9 text-[11px] text-blue-100/80" : "text-[12px]",
        ].join(" ")}
      >
        <span
          className={[
            "flex min-w-0 items-center",
            collapsed ? "justify-center" : "gap-3",
          ].join(" ")}
        >
          <Icon className="h-4 w-4 shrink-0" />
          <span
            className={[
              "truncate whitespace-nowrap font-normal text-[12px] leading-none transition-all duration-300",
              collapsed ? "w-0 opacity-0" : "w-auto opacity-100",
            ].join(" ")}
          >
            {item.label}
          </span>
        </span>

        {hasChildren && !collapsed ? (
          <ChevronDown
            className={[
              "h-3 w-3 shrink-0 text-blue-100/80 transition-transform duration-300",
              isExpanded ? "rotate-180" : "",
            ].join(" ")}
          />
        ) : null}
      </button>

      {collapsed ? (
        <div className="pointer-events-none absolute left-full top-1/2 z-30 ml-3 hidden -translate-y-1/2 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[10px] font-medium text-slate-700 shadow-xl group-hover:block">
          {item.label}
        </div>
      ) : null}

      {hasChildren && !collapsed ? (
        <div
          className={[
            "overflow-hidden transition-all duration-300",
            isExpanded ? "max-h-80 pt-1 opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <ul className="space-y-1">
            {item.children?.map((child) => (
              <SidebarMenuItem
                key={child.id}
                item={child}
                collapsed={collapsed}
                level={level + 1}
              />
            ))}
          </ul>
        </div>
      ) : null}
    </li>
  );
}

export default SidebarMenuItem;
