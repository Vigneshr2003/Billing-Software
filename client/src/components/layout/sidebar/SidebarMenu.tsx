import { sidebarMenuItems } from "../../../config/sidebar.config";
import SidebarMenuItem from "./SidebarMenuItem";

interface SidebarMenuProps {
  collapsed: boolean;
}

function SidebarMenu({ collapsed }: SidebarMenuProps) {
  return (
    <nav
      aria-label="Primary sidebar navigation"
      className="min-h-0 flex-1 overflow-y-auto px-2 py-2.5"
    >
      <ul className="space-y-1">
        {sidebarMenuItems.map((item) => (
          <SidebarMenuItem key={item.id} item={item} collapsed={collapsed} />
        ))}
      </ul>
    </nav>
  );
}

export default SidebarMenu;
