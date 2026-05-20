import {
    Save,
    Printer,
    Eye,
    FileText,
    XCircle,
    FilePlus,
} from "lucide-react";

function ReturnNoteInput() {
    return (
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm">

            {/* Note textarea */}
            <div className="p-4">
                <label className="mb-2 block text-xs font-medium text-slate-500">
                    Return Note (Optional)
                </label>
                <textarea
                    rows={3}
                    placeholder="Enter return note..."
                    className="w-full rounded-lg border border-slate-200 p-3 text-xs outline-none focus:border-blue-500 resize-none"
                />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-1.5 border-t border-slate-100 px-4 py-2 overflow-x-auto">

                {/* Save Return */}
                <button className="flex h-8 shrink-0 items-center gap-1.5 rounded-lg bg-green-600 px-3 text-xs font-semibold text-white hover:bg-green-700">
                    <Save className="h-3.5 w-3.5" />
                    Save Return
                    <span className="ml-0.5 rounded bg-green-700 px-1 py-0.5 text-[10px] font-bold">F5</span>
                </button>

                {/* Save & Print */}
                <button className="flex h-8 shrink-0 items-center gap-1.5 rounded-lg bg-blue-600 px-3 text-xs font-semibold text-white hover:bg-blue-700">
                    <Printer className="h-3.5 w-3.5" />
                    Save &amp; Print
                    <span className="ml-0.5 rounded bg-blue-700 px-1 py-0.5 text-[10px] font-bold">F6</span>
                </button>

                {/* Print Preview */}
                <button className="flex h-8 shrink-0 items-center gap-1.5 rounded-lg border border-slate-200 px-3 text-xs font-medium text-slate-700 hover:bg-slate-50">
                    <Eye className="h-3.5 w-3.5" />
                    Print Preview
                    <span className="ml-0.5 rounded border border-slate-200 px-1 py-0.5 text-[10px] font-bold text-slate-500">F7</span>
                </button>

                {/* Credit Note */}
                <button className="flex h-8 shrink-0 items-center gap-1.5 rounded-lg bg-amber-500 px-3 text-xs font-semibold text-white hover:bg-amber-600">
                    <FileText className="h-3.5 w-3.5" />
                    Credit Note
                    <span className="ml-0.5 rounded bg-amber-600 px-1 py-0.5 text-[10px] font-bold">F8</span>
                </button>

                {/* Cancel Return */}
                <button className="flex h-8 shrink-0 items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-100 px-3 text-xs font-medium text-slate-600 hover:bg-slate-200">
                    <XCircle className="h-3.5 w-3.5" />
                    Cancel Return
                    <span className="ml-0.5 rounded border border-slate-300 px-1 py-0.5 text-[10px] font-bold text-slate-500">F9</span>
                </button>

                {/* New Return */}
                <button className="flex h-8 shrink-0 items-center gap-1.5 rounded-lg border border-slate-200 px-3 text-xs font-medium text-slate-700 hover:bg-slate-50">
                    <FilePlus className="h-3.5 w-3.5" />
                    New Return
                    <span className="ml-0.5 rounded border border-slate-200 px-1 py-0.5 text-[10px] font-bold text-slate-500">F10</span>
                </button>

            </div>

            {/* Shortcuts Bar */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-slate-100 bg-slate-50 px-4 py-2 text-[10px] text-slate-500 rounded-b-xl">
                <span><span className="font-semibold text-slate-600">F2</span> - Customer Search</span>
                <span><span className="font-semibold text-slate-600">F3</span> - Invoice Search</span>
                <span><span className="font-semibold text-slate-600">F5</span> - Save</span>
                <span><span className="font-semibold text-slate-600">F6</span> - Save &amp; Print</span>
                <span><span className="font-semibold text-slate-600">F7</span> - Print</span>
                <span><span className="font-semibold text-slate-600">F9</span> - Cancel</span>
            </div>

        </div>
    );
}

export default ReturnNoteInput;
