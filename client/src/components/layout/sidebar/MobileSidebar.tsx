import Sidebar from "./Sidebar";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  return (
    <div
      className={[
        "fixed inset-0 z-50 bg-slate-950/40 transition-all duration-300 md:hidden",
        isOpen ? "visible opacity-100" : "invisible opacity-0",
      ].join(" ")}
      aria-hidden={!isOpen}
      onClick={onClose}
    >
      <div
        className={[
          "h-full transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
        onClick={(event) => event.stopPropagation()}
      >
        <Sidebar collapsed={false} mobile onClose={onClose} />
      </div>
    </div>
  );
}

export default MobileSidebar;
