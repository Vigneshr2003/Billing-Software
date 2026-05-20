import { Maximize2, PauseCircle, Settings } from "lucide-react";

function SalesreturnShortcutButton() {
    return (
        <div className="flex flex-wrap items-center justify-end gap-2">

            {/* Hold Return */}
            <button className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50">
                <PauseCircle className="h-3.5 w-3.5 text-slate-500" />
                Hold Return
            </button>

            {/* Settings */}
            <button className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50">
                <Settings className="h-3.5 w-3.5 text-slate-500" />
                Settings
            </button>

            {/* Fullscreen */}
            <button className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50">
                <Maximize2 className="h-3.5 w-3.5 text-slate-500" />
                Fullscreen
            </button>

        </div>
    );
}

export default SalesreturnShortcutButton;
