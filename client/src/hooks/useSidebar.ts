import { useState } from "react";

function useSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleSidebarCollapse = () => {
    setIsCollapsed((previous) => !previous);
  };

  const openMobileSidebar = () => {
    setIsMobileSidebarOpen(true);
  };

  const closeMobileSidebar = () => {
    setIsMobileSidebarOpen(false);
  };

  return {
    isCollapsed,
    isMobileSidebarOpen,
    toggleSidebarCollapse,
    openMobileSidebar,
    closeMobileSidebar,
  };
}

export default useSidebar;
