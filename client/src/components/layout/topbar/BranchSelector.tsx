import { Building2, ChevronDown } from "lucide-react";
import type { BranchOption } from "./topbar.types";

const branches: BranchOption[] = [
  { id: "main", label: "Main Branch" },
  { id: "warehouse", label: "Warehouse Branch" },
  { id: "retail", label: "Retail Counter" },
];

function BranchSelector() {
  return (
    <div className="relative hidden lg:block">
      <Building2 className="pointer-events-none absolute left-2.5 top-1/2 h-3 w-3 -translate-y-1/2 text-blue-600" />
      <select
        defaultValue={branches[0].id}
        aria-label="Select branch"
        className="h-8 appearance-none rounded-lg border border-slate-200 bg-white pl-8 pr-8 text-[11px] font-medium text-slate-700 shadow-sm outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      >
        {branches.map((branch) => (
          <option key={branch.id} value={branch.id}>
            {branch.label}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3 w-3 -translate-y-1/2 text-slate-500" />
    </div>
  );
}

export default BranchSelector;
