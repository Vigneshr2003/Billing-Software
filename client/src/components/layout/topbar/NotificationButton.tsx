import { Bell } from "lucide-react";

interface NotificationButtonProps {
  notificationCount: number;
}

function NotificationButton({
  notificationCount,
}: NotificationButtonProps) {
  return (
    <button
      type="button"
      aria-label={`Notifications (${notificationCount})`}
      className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
    >
      <Bell className="h-3.5 w-3.5" />
      <span className="absolute right-1 top-1 inline-flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-rose-500 px-1 text-[8px] font-semibold text-white">
        {notificationCount}
      </span>
    </button>
  );
}

export default NotificationButton;
