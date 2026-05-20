import { ChevronDown, FileText, Plus } from "lucide-react";

function SalesShortcutButton() {
    return (
        <div className="flex flex-wrap items-center justify-end gap-2">

            {/* Export Button */}
            <button className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50">
                <FileText className="h-3.5 w-3.5 text-slate-500" />
                Export
                <ChevronDown className="h-3 w-3 text-slate-400" />
            </button>

            {/* New Invoice Button */}
            <button className="inline-flex items-center gap-1.5 rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-blue-700">
                <Plus className="h-3.5 w-3.5" />
                New Invoice
                <span className="ml-0.5 rounded bg-blue-500 px-1 py-0.5 text-[9px] font-bold tracking-wide">
                    F2
                </span>
            </button>

        </div>
    );
}

export default SalesShortcutButton;
