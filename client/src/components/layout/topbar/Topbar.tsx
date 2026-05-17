import { CalendarDays, Clock3, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import BranchSelector from "./BranchSelector";
import NotificationButton from "./NotificationButton";
import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile";

interface TopbarProps {
  onOpenMobileMenu: () => void;
}

function formatCurrentDate(date: Date) {
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function formatCurrentTime(date: Date) {
  return date.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function Topbar({ onOpenMobileMenu }: TopbarProps) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date());
    }, 60000);

    return () => window.clearInterval(timer);
  }, []);

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
          <div className="hidden items-center gap-1.5 lg:flex">
            <div className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 text-[10px] text-slate-600 shadow-sm">
              <CalendarDays className="h-3 w-3 text-blue-600" />
              <span>{formatCurrentDate(now)}</span>
            </div>
            <div className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 text-[10px] text-slate-600 shadow-sm">
              <Clock3 className="h-3 w-3 text-blue-600" />
              <span>{formatCurrentTime(now)}</span>
            </div>
          </div>
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
