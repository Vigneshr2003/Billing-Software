function SalesInvoiceFilter() {
    return (
        <div className="rounded-lg border border-slate-200 bg-white p-2 shadow-sm">

            {/* Top Filters */}
            <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-7">

                {/* Date Range */}
                <div>
                    <label className="mb-1 block text-[8px] font-medium text-slate-500">
                        Date Range
                    </label>

                    <input
                        type="text"
                        defaultValue="01 May 2025 - 21 May 2025"
                        className="w-full rounded-md border border-slate-200 px-2 py-1.5 text-xs outline-none focus:border-blue-500"
                    />
                </div>

                {/* Customer */}
                <div>
                    <label className="mb-1 block text-[11px] font-medium text-slate-500">
                        Customer
                    </label>

                    <select className="w-full rounded-md border border-slate-200 px-2 py-1.5 text-xs outline-none focus:border-blue-500">
                        <option>All Customers</option>
                    </select>
                </div>

                {/* Payment Type */}
                <div>
                    <label className="mb-1 block text-[11px] font-medium text-slate-500">
                        Payment Type
                    </label>

                    <select className="w-full rounded-md border border-slate-200 px-2 py-1.5 text-xs outline-none focus:border-blue-500">
                        <option>All</option>
                        <option>Cash</option>
                        <option>UPI</option>
                        <option>Card</option>
                    </select>
                </div>

                {/* Bill Status */}
                <div>
                    <label className="mb-1 block text-[11px] font-medium text-slate-500">
                        Bill Status
                    </label>

                    <select className="w-full rounded-md border border-slate-200 px-2 py-1.5 text-xs outline-none focus:border-blue-500">
                        <option>All</option>
                        <option>Paid</option>
                        <option>Pending</option>
                    </select>
                </div>

                {/* Salesman */}
                <div>
                    <label className="mb-1 block text-[11px] font-medium text-slate-500">
                        Salesman
                    </label>

                    <select className="w-full rounded-md border border-slate-200 px-2 py-1.5 text-xs outline-none focus:border-blue-500">
                        <option>All Salesman</option>
                    </select>
                </div>

                {/* Branch */}
                <div>
                    <label className="mb-1 block text-[11px] font-medium text-slate-500">
                        Branch
                    </label>

                    <select className="w-full rounded-md border border-slate-200 px-2 py-1.5 text-xs outline-none focus:border-blue-500">
                        <option>All Branches</option>
                    </select>
                </div>

                {/* Buttons */}
                <div className="flex items-end gap-1.5">

                    <button className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700">
                        Filter
                    </button>

                    <button className="rounded-md border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100">
                        Reset
                    </button>

                </div>
            </div>

            {/* Quick Filters */}
            <div className="mt-2 flex flex-wrap items-center gap-1.5">

                <p className="text-xs font-medium text-slate-500">
                    Quick Filters:
                </p>

                <button className="rounded-md border border-slate-200 px-2.5 py-1 text-[11px] hover:bg-slate-100">
                    Today
                </button>

                <button className="rounded-md border border-slate-200 px-2.5 py-1 text-[11px] hover:bg-slate-100">
                    Yesterday
                </button>

                <button className="rounded-md border border-slate-200 px-2.5 py-1 text-[11px] hover:bg-slate-100">
                    This Week
                </button>

                <button className="rounded-md bg-blue-100 px-2.5 py-1 text-[11px] font-medium text-blue-700">
                    This Month
                </button>

                <button className="rounded-md border border-slate-200 px-2.5 py-1 text-[11px] hover:bg-slate-100">
                    Last Month
                </button>

                <button className="rounded-md border border-slate-200 px-2.5 py-1 text-[11px] hover:bg-slate-100">
                    This Financial Year
                </button>

            </div>
        </div>
    );
}

export default SalesInvoiceFilter;