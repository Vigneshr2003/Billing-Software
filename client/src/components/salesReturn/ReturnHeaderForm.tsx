import {
    CalendarDays,
    Search,
    Settings,
    Maximize2,
    PauseCircle,
} from "lucide-react";

function ReturnHeaderForm() {
    return (
        <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-[140px_140px_150px_150px_1fr_auto]">

                {/* Return No */}
                <div>
                    <label className="mb-1 block text-[9px] font-medium text-slate-500">
                        Return No.
                    </label>

                    <div className="flex items-center gap-1.5">
                        <div className="flex h-8 w-full items-center rounded-md border border-slate-200 px-2.5">
                            <p className="whitespace-nowrap text-xs font-semibold text-blue-600">
                                SR-000124
                            </p>
                        </div>

                        <button className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md border border-slate-200 hover:bg-slate-50">
                            <Settings className="h-3.5 w-3.5 text-slate-500" />
                        </button>
                    </div>
                </div>

                {/* Return Date */}
                <div>
                    <label className="mb-1 block text-[9px] font-medium text-slate-500">
                        Return Date
                    </label>

                    <div className="relative">
                        <input
                            type="text"
                            defaultValue="21 May 2025"
                            className="h-8 w-full rounded-md border border-slate-200 px-2.5 pr-8 text-xs outline-none focus:border-blue-500"
                        />
                        <CalendarDays className="absolute right-2.5 top-2 h-3.5 w-3.5 text-slate-400" />
                    </div>
                </div>

                {/* Return Type */}
                <div>
                    <label className="mb-1 block text-[9px] font-medium text-slate-500">
                        Return Type
                    </label>

                    <select className="h-8 w-full rounded-md border border-slate-200 px-2.5 text-xs outline-none focus:border-blue-500">
                        <option>Sales Return</option>
                        <option>Damage Return</option>
                    </select>
                </div>

                {/* Return Reason */}
                <div>
                    <label className="mb-1 block text-[9px] font-medium text-slate-500">
                        Return Reason
                    </label>

                    <select className="h-8 w-full rounded-md border border-slate-200 px-2.5 text-xs outline-none focus:border-blue-500">
                        <option>Customer Return</option>
                        <option>Wrong Product</option>
                        <option>Damaged Product</option>
                    </select>
                </div>

                {/* Reference Invoice */}
                <div>
                    <label className="mb-1 block text-[9px] font-medium text-slate-500">
                        Reference Invoice
                    </label>

                    <div className="flex items-center gap-1.5">

                        <div className="relative flex-1">
                            <input
                                type="text"
                                defaultValue="INV-000124"
                                className="h-8 w-full rounded-md border border-slate-200 px-2.5 pr-8 text-xs outline-none focus:border-blue-500"
                            />
                            <Search className="absolute right-2.5 top-2 h-3.5 w-3.5 text-slate-400" />
                        </div>

                        <button className="h-8 rounded-md border border-blue-200 bg-blue-50 px-3 text-xs font-medium text-blue-600 hover:bg-blue-100">
                            Fetch Items
                        </button>

                    </div>
                </div>

                {/* Right Buttons */}
                <div className="flex flex-wrap items-end gap-1.5 sm:col-span-2 xl:col-span-1">

                    <button className="flex h-8 items-center gap-1.5 rounded-md border border-slate-200 px-3 text-xs font-medium text-slate-700 hover:bg-slate-50">
                        <PauseCircle className="h-3.5 w-3.5" />
                        Hold Return
                    </button>

                    <button className="flex h-8 items-center gap-1.5 rounded-md border border-slate-200 px-3 text-xs font-medium text-slate-700 hover:bg-slate-50">
                        <Settings className="h-3.5 w-3.5" />
                        Settings
                    </button>

                    <button className="flex h-8 items-center gap-1.5 rounded-md border border-slate-200 px-3 text-xs font-medium text-slate-700 hover:bg-slate-50">
                        <Maximize2 className="h-3.5 w-3.5" />
                        Fullscreen
                    </button>

                </div>
            </div>
        </div>
    );
}

export default ReturnHeaderForm;