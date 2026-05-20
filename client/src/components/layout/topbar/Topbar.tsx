import { Bell, Building2, CalendarDays, ChevronDown, Clock3, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../../ui/Button";
import SearchBar from "./SearchBar";

interface TopbarProps {
  onOpenMobileMenu: () => void;
}

interface PageMeta {
  title: string;
}

const PAGE_META: Record<string, PageMeta> = {
  "/sales/invoice": {
    title: "Sales Invoice List",
  },
  "/sales/return": {
    title: "Sales Return List",
  },
};

const DEFAULT_META: PageMeta = {
  title: "",
};

const branches = [
  { id: "main", label: "Main Branch" },
  { id: "warehouse", label: "Warehouse Branch" },
  { id: "retail", label: "Retail Counter" },
];

const currentUser = {
  initials: "SR",
  name: "Srinath",
  role: "Admin",
};

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
  const location = useLocation();

  const pageMeta = PAGE_META[location.pathname] ?? DEFAULT_META;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date());
    }, 60000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="flex h-14 items-center gap-2 px-2.5 sm:px-3">
        <Button
          aria-label="Open sidebar menu"
          className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-700 shadow-sm transition-colors hover:bg-slate-50 md:hidden"
          onClick={onOpenMobileMenu}
        >
          <Menu className="h-3.5 w-3.5" />
        </Button>



        {/* Search Bar */}
        <div className="min-w-0 flex-1">
          <SearchBar />
        </div>

        <div className="ml-auto flex flex-shrink-0 items-center gap-1.5">
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

          <div className="relative hidden lg:block">
            <Building2 className="pointer-events-none absolute left-2.5 top-1/2 h-3 w-3 -translate-y-1/2 text-blue-600" />
            <select
              aria-label="Select branch"
              className="h-8 appearance-none rounded-lg border border-slate-200 bg-white pl-8 pr-8 text-[11px] font-medium text-slate-700 shadow-sm outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              defaultValue={branches[0].id}
            >
              {branches.map((branch) => (
                <option key={branch.id} value={branch.id}>
                  {branch.label}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3 w-3 -translate-y-1/2 text-slate-500" />
          </div>

          <Button
            aria-label="Notifications (5)"
            className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
          >
            <Bell className="h-3.5 w-3.5" />
            <span className="absolute right-1 top-1 inline-flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-rose-500 px-1 text-[8px] font-semibold text-white">
              5
            </span>
          </Button>

          <Button
            aria-label="Open user menu"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-1.5 py-1 text-left shadow-sm transition-colors hover:bg-slate-50"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-linear-to-br from-blue-600 to-cyan-500 text-[10px] font-semibold text-white">
              {currentUser.initials}
            </span>

            <span className="hidden min-w-0 sm:block">
              <span className="block truncate text-[11px] font-semibold text-slate-800">
                {currentUser.name}
              </span>
              <span className="block truncate text-[9px] text-slate-500">
                {currentUser.role}
              </span>
            </span>

            <ChevronDown className="hidden h-3 w-3 text-slate-500 sm:block" />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
