import { ChevronDown } from "lucide-react";
import type { UserProfileSummary } from "./topbar.types";

interface UserProfileProps {
  user: UserProfileSummary;
}

function UserProfile({ user }: UserProfileProps) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-1.5 py-1 text-left shadow-sm transition-colors hover:bg-slate-50"
      aria-label="Open user menu"
    >
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-linear-to-br from-blue-600 to-cyan-500 text-[10px] font-semibold text-white">
        {user.initials}
      </span>

      <span className="hidden min-w-0 sm:block">
        <span className="block truncate text-[11px] font-semibold text-slate-800">
          {user.name}
        </span>
        <span className="block truncate text-[9px] text-slate-500">
          {user.role}
        </span>
      </span>

      <ChevronDown className="hidden h-3 w-3 text-slate-500 sm:block" />
    </button>
  );
}

export default UserProfile;
