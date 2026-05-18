import {
    Save,
    Printer,
    Eye,
    FileText,
    XCircle,
    FilePlus,
} from "lucide-react";

function ReturnActionBar() {
    return (
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm">

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2 p-3">

                {/* Save Return */}
                <button className="flex h-10 items-center gap-2 rounded-lg bg-green-600 px-5 text-xs font-semibold text-white hover:bg-green-700">
                    <Save className="h-4 w-4" />
                    Save Return
                    <span className="ml-1 rounded bg-green-700 px-1.5 py-0.5 text-[10px] font-bold">F5</span>
                </button>

                {/* Save & Print */}
                <button className="flex h-10 items-center gap-2 rounded-lg bg-blue-600 px-5 text-xs font-semibold text-white hover:bg-blue-700">
                    <Printer className="h-4 w-4" />
                    Save &amp; Print
                    <span className="ml-1 rounded bg-blue-700 px-1.5 py-0.5 text-[10px] font-bold">F6</span>
                </button>

                {/* Print Preview */}
                <button className="flex h-10 items-center gap-2 rounded-lg border border-slate-200 px-5 text-xs font-medium text-slate-700 hover:bg-slate-50">
                    <Eye className="h-4 w-4" />
                    Print Preview
                    <span className="ml-1 rounded border border-slate-200 px-1.5 py-0.5 text-[10px] font-bold text-slate-500">F7</span>
                </button>

                {/* Credit Note */}
                <button className="flex h-10 items-center gap-2 rounded-lg bg-amber-500 px-5 text-xs font-semibold text-white hover:bg-amber-600">
                    <FileText className="h-4 w-4" />
                    Credit Note
                    <span className="ml-1 rounded bg-amber-600 px-1.5 py-0.5 text-[10px] font-bold">F8</span>
                </button>

                {/* Cancel Return */}
                <button className="flex h-10 items-center gap-2 rounded-lg border border-slate-200 bg-slate-100 px-5 text-xs font-medium text-slate-600 hover:bg-slate-200">
                    <XCircle className="h-4 w-4" />
                    Cancel Return
                    <span className="ml-1 rounded border border-slate-300 px-1.5 py-0.5 text-[10px] font-bold text-slate-500">F9</span>
                </button>

                {/* New Return */}
                <button className="flex h-10 items-center gap-2 rounded-lg border border-slate-200 px-5 text-xs font-medium text-slate-700 hover:bg-slate-50">
                    <FilePlus className="h-4 w-4" />
                    New Return
                    <span className="ml-1 rounded border border-slate-200 px-1.5 py-0.5 text-[10px] font-bold text-slate-500">F10</span>
                </button>

            </div>

            {/* Shortcuts Bar */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-slate-100 bg-slate-50 px-4 py-2 text-[10px] text-slate-500">
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

export default ReturnActionBar;
