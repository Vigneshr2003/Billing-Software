import { Search } from "lucide-react";

function SearchBar() {
  return (
    <label className="relative block">
      <span className="sr-only">Search anything in billing software</span>
      <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3 w-3 -translate-y-1/2 text-slate-400" />
      <input
        type="search"
        placeholder="Search anything... (Bill, Customer, Item, Supplier)"
        className="h-8 w-full rounded-lg border border-slate-200 bg-slate-50 pl-8 pr-14 text-[11px] text-slate-900 shadow-sm outline-none transition-all duration-300 placeholder:text-[10px] placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 sm:pr-20"
      />
      <span className="pointer-events-none absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-md border border-slate-200 bg-white px-1.5 py-0.5 text-[9px] font-medium text-slate-500 shadow-sm sm:inline-flex">
        Ctrl + K
      </span>
    </label>
  );
}

export default SearchBar;
