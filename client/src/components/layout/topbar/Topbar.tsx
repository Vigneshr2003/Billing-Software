import { Menu } from "lucide-react";
import BranchSelector from "./BranchSelector";
import NotificationButton from "./NotificationButton";
import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile";

interface TopbarProps {
  onOpenMobileMenu: () => void;
}

function Topbar({ onOpenMobileMenu }: TopbarProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="flex h-13 items-center gap-1.5 px-2.5 sm:px-3">
        <button
          type="button"
          onClick={onOpenMobileMenu}
          className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-700 shadow-sm transition-colors hover:bg-slate-50 md:hidden"
          aria-label="Open sidebar menu"
        >
          <Menu className="h-3.5 w-3.5" />
        </button>

        <div className="min-w-0 flex-1">
          <SearchBar />
        </div>

        <div className="ml-auto flex items-center gap-1.5">
          <BranchSelector />
          <NotificationButton notificationCount={5} />
          <UserProfile
            user={{
              name: "Srinath",
              role: "Admin",
              initials: "SR",
            }}
          />
        </div>
      </div>
    </header>
  );
}

export default Topbar;
