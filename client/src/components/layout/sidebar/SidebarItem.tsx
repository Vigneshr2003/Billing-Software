import { ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "../../../lib/utils";
import type { SidebarEntry } from "./sidebarData";

interface SidebarItemProps {
  item: SidebarEntry;
  collapsed: boolean;
  level?: number;
}

function SidebarItem({ item, collapsed, level = 0 }: SidebarItemProps) {
  const location = useLocation();
  const hasChildren = Boolean(item.children?.length);
  const hasActiveChild = useMemo(
    () =>
      item.children?.some(
        (child) => child.path && location.pathname.startsWith(child.path),
      ) ?? false,
    [item.children, location.pathname],
  );
  const [isExpanded, setIsExpanded] = useState(hasActiveChild);

  const Icon = item.icon;
  const isActive = item.path ? location.pathname === item.path : hasActiveChild;

  const baseClasses = cn(
    "flex w-full items-center rounded-lg px-2.5 py-1.5 text-left transition-all duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
    collapsed ? "justify-center" : "justify-between",
    isActive
      ? "bg-[#2563EB] text-white shadow-lg shadow-blue-950/25"
      : "text-blue-50/90 hover:bg-white/10 hover:text-white",
    level > 0 && !collapsed ? "pl-9 text-[11px] text-blue-100/80" : "text-[12px]",
  );

  const itemContent = (
    <span
      className={cn("flex min-w-0 items-center", collapsed ? "justify-center" : "gap-3")}
    >
      <Icon className="h-4 w-4 shrink-0" />
      <span
        className={cn(
          "truncate whitespace-nowrap font-normal text-[12px] leading-none transition-all duration-300",
          collapsed ? "w-0 opacity-0" : "w-auto opacity-100",
        )}
      >
        {item.label}
      </span>
    </span>
  );

  return (
    <li className="group relative">
      {hasChildren ? (
        <button
          aria-current={isActive ? "page" : undefined}
          aria-expanded={isExpanded}
          className={baseClasses}
          onClick={() => setIsExpanded((previous) => !previous)}
          title={collapsed ? item.label : undefined}
        >
          {itemContent}
          {!collapsed ? (
            <ChevronDown
              className={cn(
                "h-3 w-3 shrink-0 text-blue-100/80 transition-transform duration-300",
                isExpanded && "rotate-180",
              )}
            />
          ) : null}
        </button>
      ) : (
        <NavLink className={baseClasses} title={collapsed ? item.label : undefined} to={item.path ?? "#"}>
          {itemContent}
        </NavLink>
      )}

      {collapsed ? (
        <div className="pointer-events-none absolute left-full top-1/2 z-30 ml-3 hidden -translate-y-1/2 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[10px] font-medium text-slate-700 shadow-xl group-hover:block">
          {item.label}
        </div>
      ) : null}

      {hasChildren && !collapsed ? (
        <div
          className={cn(
            "overflow-hidden transition-all duration-300",
            isExpanded ? "max-h-80 pt-1 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <ul className="space-y-1">
            {item.children?.map((child) => (
              <SidebarItem
                key={child.id}
                collapsed={collapsed}
                item={child}
                level={level + 1}
              />
            ))}
          </ul>
        </div>
      ) : null}
    </li>
  );
}

export default SidebarItem;
