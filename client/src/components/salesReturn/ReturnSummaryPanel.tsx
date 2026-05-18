function ReturnSummaryPanel() {
    return (
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm">

            {/* Header */}
            <div className="border-b border-slate-200 p-4">
                <h2 className="text-sm font-semibold text-slate-800">
                    Return Summary
                </h2>
            </div>

            {/* Summary */}
            <div className="space-y-3 p-4">

                {/* Items Count */}
                <div className="flex items-center justify-between">
                    <p className="text-xs text-slate-500">
                        Items Count
                    </p>

                    <p className="text-xs font-semibold text-slate-800">
                        3
                    </p>
                </div>

                {/* Total Qty */}
                <div className="flex items-center justify-between">
                    <p className="text-xs text-slate-500">
                        Total Quantity
                    </p>

                    <p className="text-xs font-semibold text-slate-800">
                        3
                    </p>
                </div>

                {/* Subtotal */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                    <p className="text-xs text-slate-500">
                        Sub Total
                    </p>

                    <p className="text-xs font-semibold text-slate-800">
                        ₹ 2,691.80
                    </p>
                </div>

                {/* Discount */}
                <div className="flex items-center justify-between">

                    <p className="text-xs text-slate-500">
                        Discount
                    </p>

                    <div className="flex items-center gap-2">

                        <select className="h-9 rounded-lg border border-slate-200 px-2 text-xs outline-none">
                            <option>₹</option>
                            <option>%</option>
                        </select>

                        <input
                            type="text"
                            value="0.00"
                            className="h-9 w-24 rounded-lg border border-slate-200 px-3 text-right text-xs outline-none"
                        />

                    </div>
                </div>

                {/* Taxable */}
                <div className="flex items-center justify-between">
                    <p className="text-xs text-slate-500">
                        Taxable Amount
                    </p>

                    <p className="text-xs font-semibold text-slate-800">
                        ₹ 2,691.80
                    </p>
                </div>

                {/* CGST */}
                <div className="flex items-center justify-between">
                    <p className="text-xs text-slate-500">
                        CGST (2.5%)
                    </p>

                    <p className="text-xs font-semibold text-slate-800">
                        ₹ 67.30
                    </p>
                </div>

                {/* SGST */}
                <div className="flex items-center justify-between">
                    <p className="text-xs text-slate-500">
                        SGST (2.5%)
                    </p>

                    <p className="text-xs font-semibold text-slate-800">
                        ₹ 67.30
                    </p>
                </div>

                {/* Round Off */}
                <div className="flex items-center justify-between">
                    <p className="text-xs text-slate-500">
                        Round Off
                    </p>

                    <p className="text-xs font-semibold text-slate-800">
                        0.00
                    </p>
                </div>

            </div>

            {/* Net Refund */}
            <div className="border-y border-slate-200 bg-slate-50 px-4 py-5">

                <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-700">
                        Net Refund Amount
                    </p>

                    <h2 className="text-3xl font-bold text-blue-600">
                        ₹ 2,826.40
                    </h2>
                </div>

            </div>

            {/* Refund Section */}
            <div className="space-y-4 p-4">

                {/* Tabs */}
                <div>
                    <p className="mb-2 text-xs font-medium text-slate-500">
                        Refund / Adjustment
                    </p>

                    <div className="grid grid-cols-3 gap-2">

                        <button className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-medium text-white">
                            Cash Refund
                        </button>

                        <button className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50">
                            Adjust in Account
                        </button>

                        <button className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50">
                            Credit Note
                        </button>

                    </div>
                </div>

                {/* Refund Mode */}
                <div>
                    <label className="mb-1 block text-[11px] font-medium text-slate-500">
                        Refund Mode
                    </label>

                    <select className="h-10 w-full rounded-lg border border-slate-200 px-3 text-xs outline-none focus:border-blue-500">
                        <option>Cash</option>
                        <option>UPI</option>
                        <option>Bank Transfer</option>
                    </select>
                </div>

                {/* Amount Refund */}
                <div>
                    <label className="mb-1 block text-[11px] font-medium text-slate-500">
                        Amount Refund
                    </label>

                    <input
                        type="text"
                        value="₹ 2,826.40"
                        className="h-10 w-full rounded-lg border border-slate-200 px-3 text-xs outline-none focus:border-blue-500"
                    />
                </div>

                {/* Reference No */}
                <div>
                    <label className="mb-1 block text-[11px] font-medium text-slate-500">
                        Reference No. (Optional)
                    </label>

                    <input
                        type="text"
                        placeholder="Enter reference no."
                        className="h-10 w-full rounded-lg border border-slate-200 px-3 text-xs outline-none focus:border-blue-500"
                    />
                </div>

                {/* Refund Note */}
                <div>
                    <label className="mb-1 block text-[11px] font-medium text-slate-500">
                        Refund Note (Optional)
                    </label>

                    <textarea
                        rows={3}
                        placeholder="Enter refund note..."
                        className="w-full rounded-lg border border-slate-200 p-3 text-xs outline-none focus:border-blue-500"
                    />
                </div>

            </div>
        </div>
    );
}

export default ReturnSummaryPanel;