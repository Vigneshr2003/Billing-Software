import {
    CalendarDays,
    Search,
    Settings,
    Maximize2,
    PauseCircle,
} from "lucide-react";

function ReturnHeaderForm() {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">

            <div className="grid gap-3 xl:grid-cols-[120px_150px_170px_170px_1fr_auto]">

                {/* Return No */}
                <div>
                    <label className="mb-1 block text-[11px] font-medium text-slate-500">
                        Return No.
                    </label>

                    <div className="flex items-center gap-2">
                        <div className="flex h-10 w-full items-center rounded-lg border border-slate-200 px-3">
                            <p className="text-sm font-semibold text-blue-600">
                                SR-000124
                            </p>
                        </div>

                        <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 hover:bg-slate-50">
                            <Settings className="h-4 w-4 text-slate-500" />
                        </button>
                    </div>
                </div>

                {/* Return Date */}
                <div>
                    <label className="mb-1 block text-[11px] font-medium text-slate-500">
                        Return Date
                    </label>

                    <div className="relative">
                        <input
                            type="text"
                            value="21 May 2025"
                            className="h-10 w-full rounded-lg border border-slate-200 px-3 pr-10 text-xs outline-none focus:border-blue-500"
                        />

                        <CalendarDays className="absolute right-3 top-3 h-4 w-4 text-slate-400" />
                    </div>
                </div>

                {/* Return Type */}
                <div>
                    <label className="mb-1 block text-[11px] font-medium text-slate-500">
                        Return Type
                    </label>

                    <select className="h-10 w-full rounded-lg border border-slate-200 px-3 text-xs outline-none focus:border-blue-500">
                        <option>Sales Return</option>
                        <option>Damage Return</option>
                    </select>
                </div>

                {/* Return Reason */}
                <div>
                    <label className="mb-1 block text-[11px] font-medium text-slate-500">
                        Return Reason
                    </label>

                    <select className="h-10 w-full rounded-lg border border-slate-200 px-3 text-xs outline-none focus:border-blue-500">
                        <option>Customer Return</option>
                        <option>Wrong Product</option>
                        <option>Damaged Product</option>
                    </select>
                </div>

                {/* Reference Invoice */}
                <div>
                    <label className="mb-1 block text-[11px] font-medium text-slate-500">
                        Reference Invoice
                    </label>

                    <div className="flex items-center gap-2">

                        <div className="relative flex-1">
                            <input
                                type="text"
                                value="INV-000124"
                                className="h-10 w-full rounded-lg border border-slate-200 px-3 pr-10 text-xs outline-none focus:border-blue-500"
                            />

                            <Search className="absolute right-3 top-3 h-4 w-4 text-slate-400" />
                        </div>

                        <button className="h-10 rounded-lg border border-blue-200 bg-blue-50 px-4 text-xs font-medium text-blue-600 hover:bg-blue-100">
                            Fetch Items
                        </button>

                    </div>
                </div>

                {/* Right Buttons */}
                <div className="flex items-end gap-2">

                    <button className="flex h-10 items-center gap-2 rounded-lg border border-slate-200 px-4 text-xs font-medium text-slate-700 hover:bg-slate-50">
                        <PauseCircle className="h-4 w-4" />
                        Hold Return
                    </button>

                    <button className="flex h-10 items-center gap-2 rounded-lg border border-slate-200 px-4 text-xs font-medium text-slate-700 hover:bg-slate-50">
                        <Settings className="h-4 w-4" />
                        Settings
                    </button>

                    <button className="flex h-10 items-center gap-2 rounded-lg border border-slate-200 px-4 text-xs font-medium text-slate-700 hover:bg-slate-50">
                        <Maximize2 className="h-4 w-4" />
                        Fullscreen
                    </button>

                </div>
            </div>
        </div>
    );
}

export default ReturnHeaderForm;