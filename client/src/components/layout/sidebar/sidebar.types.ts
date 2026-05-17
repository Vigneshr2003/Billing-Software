import type { LucideIcon } from "lucide-react";

export interface SidebarMenuEntry {
  id: string;
  label: string;
  icon: LucideIcon;
  active?: boolean;
  children?: SidebarMenuEntry[];
}

export interface SidebarSharedProps {
  collapsed: boolean;
}
