import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";

interface SidebarProps {
  collapsed: boolean;
  onToggleCollapse?: () => void;
  onClose?: () => void;
  mobile?: boolean;
}

function Sidebar({
  collapsed,
  mobile = false,
  onClose,
  onToggleCollapse,
}: SidebarProps) {
  return (
    <div
      className={[
        "flex h-screen flex-col overflow-hidden bg-[#0F2B5B] text-white transition-all duration-300",
        collapsed ? "w-[70px]" : "w-[260px]",
        mobile ? "shadow-2xl" : "shadow-none",
      ].join(" ")}
    >
      <SidebarHeader collapsed={collapsed} mobile={mobile} onClose={onClose} />
      <SidebarMenu collapsed={collapsed} />
      <SidebarFooter
        collapsed={collapsed}
        hideCollapseAction={mobile}
        onToggleCollapse={onToggleCollapse}
      />
    </div>
  );
}

export default Sidebar;
