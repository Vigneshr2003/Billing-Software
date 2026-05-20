import ReturnHeaderForm from "../../components/salesReturn/ReturnHeaderForm";
import ReturnCustomerInfo from "../../components/salesReturn/ReturnCustomerInfo";
import ReturnItemsTable from "../../components/salesReturn/ReturnItemsTable";
import ReturnSummaryPanel from "../../components/salesReturn/ReturnSummaryPanel";
import ReturnNoteInput from "../../components/salesReturn/ReturnNoteInput";
import SalesreturnShortcutButton from "../../components/salesReturn/SalesreturnShortcutButton.tsx";
import { DatabaseBackup, Printer, UserCircle2 } from "lucide-react";

function SalesReturn() {
    return (
        <div className="flex min-h-full flex-col gap-3 p-2 pb-0 sm:p-4 sm:pb-0">

            {/* Action Buttons */}
            <SalesreturnShortcutButton />

            {/* Top header — Return No, Date, Type, Reason, Reference Invoice */}
            <ReturnHeaderForm />

            {/* Customer info strip */}
            <ReturnCustomerInfo />

            {/* Main content — item table (left) + summary panel (right) */}
            <div className="flex flex-col gap-4 xl:grid xl:gap-4" style={{ gridTemplateColumns: "minmax(0,1fr) 320px" }}>

                {/* Left — return items table + return note */}
                <div className="flex min-w-0 flex-col gap-3 overflow-hidden">
                    <ReturnItemsTable />
                    <ReturnNoteInput />
                </div>

                {/* Right — return summary + refund */}
                <div>
                    <ReturnSummaryPanel />
                </div>

            </div>

            {/* Sticky bottom status footer — full width */}
            <footer className="sticky bottom-0 z-10 mt-auto border-t border-slate-200 bg-white px-4 py-2 text-[11px] text-slate-500 mx-[-8px] sm:mx-[-16px]">
                <div className="flex flex-wrap items-center justify-between gap-3">

                    {/* Left stats: Total Items and Total Qty */}
                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-600">
                        <span>
                            Total Items: <span className="font-bold text-slate-800">3</span>
                        </span>
                        <span>
                            Total Qty: <span className="font-bold text-slate-800">3</span>
                        </span>
                    </div>

                    {/* Right stats: Backup, Printer, User */}
                    <div className="flex flex-wrap items-center gap-4">

                        {/* Backup */}
                        <div className="flex items-center gap-1.5">
                            <DatabaseBackup className="h-3.5 w-3.5 text-slate-400" />
                            <span>
                                <span className="font-medium text-slate-600">Last Backup:</span> 21 May 2025, 02:00 AM
                            </span>
                        </div>

                        {/* Printer */}
                        <div className="flex items-center gap-1.5">
                            <Printer className="h-3.5 w-3.5 text-slate-400" />
                            <span>
                                <span className="font-medium text-slate-600">Printer:</span>{" "}
                                <span className="font-semibold text-emerald-600">Connected</span>
                            </span>
                        </div>

                        {/* User */}
                        <div className="flex items-center gap-1.5">
                            <UserCircle2 className="h-3.5 w-3.5 text-slate-400" />
                            <span>
                                <span className="font-medium text-slate-600">User:</span> Srinath (Admin)
                            </span>
                        </div>

                    </div>
                </div>
            </footer>

        </div>
    );
}

export default SalesReturn;