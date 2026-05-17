import type { LucideIcon } from "lucide-react";

export interface SidebarMenuEntry {
  id: string;
  label: string;
  icon: LucideIcon;
  path?: string;
  children?: SidebarMenuEntry[];
}

export interface SidebarSharedProps {
  collapsed: boolean;
}
