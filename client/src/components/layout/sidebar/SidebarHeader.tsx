import { PanelLeftClose, Receipt } from "lucide-react";

interface SidebarHeaderProps {
  collapsed: boolean;
  mobile?: boolean;
  onClose?: () => void;
}

function SidebarHeader({
  collapsed,
  mobile = false,
  onClose,
}: SidebarHeaderProps) {
  return (
    <div className="shrink-0 border-b border-white/10 px-2.5 py-2.5">
      <div className="flex items-center gap-2.5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/12 ring-1 ring-white/10">
          <Receipt className="h-3.5 w-3.5 text-white" />
        </div>

        <div
          className={[
            "min-w-0 overflow-hidden transition-all duration-300",
            collapsed ? "w-0 opacity-0" : "w-auto opacity-100",
          ].join(" ")}
        >
          <p className="truncate text-[14px] font-semibold text-white">
            Venticinqe Mart
          </p>
          <p className="truncate text-[12px] text-blue-100/75">
            Wholesale Distribution
          </p>
        </div>

        {mobile && onClose ? (
          <button
            type="button"
            aria-label="Close sidebar"
            onClick={onClose}
            className="ml-auto inline-flex h-7 w-7 items-center justify-center rounded-lg text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            <PanelLeftClose className="h-3.5 w-3.5" />
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default SidebarHeader;
