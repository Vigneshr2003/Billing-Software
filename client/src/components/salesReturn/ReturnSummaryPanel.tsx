function ReturnSummaryPanel() {
    return (
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm">

            {/* Header */}
            <div className="border-b border-slate-200 px-4 py-3">
                <h2 className="text-sm font-semibold text-slate-800">
                    Return Summary
                </h2>
            </div>

            {/* Summary rows */}
            <div className="space-y-2.5 px-4 py-3">

                {/* Items Count */}
                <div className="flex items-center justify-between">
                    <p className="text-xs text-slate-500">Items Count</p>
                    <p className="text-xs font-semibold text-slate-800">3</p>
                </div>

                {/* Total Qty */}
                <div className="flex items-center justify-between">
                    <p className="text-xs text-slate-500">Total Quantity</p>
                    <p className="text-xs font-semibold text-slate-800">3</p>
                </div>

                <div className="border-t border-slate-100 pt-2.5" />

                {/* Sub Total */}
                <div className="flex items-center justify-between">
                    <p className="text-xs text-slate-500">Sub Total</p>
                    <p className="text-xs font-semibold text-slate-800">₹ 2,691.80</p>
                </div>

                {/* Discount */}
                <div className="flex items-center justify-between">
                    <p className="text-xs text-slate-500">Discount</p>

                    <div className="flex items-center gap-1.5">
                        <select className="h-7 rounded-md border border-slate-200 px-1.5 text-xs outline-none">
                            <option>₹</option>
                            <option>%</option>
                        </select>

                        <input
                            type="text"
                            defaultValue="0.00"
                            className="h-7 w-20 rounded-md border border-slate-200 px-2 text-right text-xs outline-none"
                        />

                        <p className="w-14 text-right text-xs font-semibold text-slate-800">0.00</p>
                    </div>
                </div>

                {/* Taxable Amount */}
                <div className="flex items-center justify-between">
                    <p className="text-xs text-slate-500">Taxable Amount</p>
                    <p className="text-xs font-semibold text-slate-800">₹ 2,691.80</p>
                </div>

                {/* CGST */}
                <div className="flex items-center justify-between">
                    <p className="text-xs text-slate-500">CGST (2.5%)</p>
                    <p className="text-xs font-semibold text-slate-800">₹ 67.30</p>
                </div>

                {/* SGST */}
                <div className="flex items-center justify-between">
                    <p className="text-xs text-slate-500">SGST (2.5%)</p>
                    <p className="text-xs font-semibold text-slate-800">₹ 67.30</p>
                </div>

                {/* Round Off */}
                <div className="flex items-center justify-between">
                    <p className="text-xs text-slate-500">Round Off</p>
                    <p className="text-xs font-semibold text-slate-800">0.00</p>
                </div>

            </div>

            {/* Net Refund Amount */}
            <div className="border-y border-slate-200 bg-slate-50 px-4 py-3">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-700">Net Refund Amount</p>
                    <h2 className="text-xl font-bold text-blue-600">₹ 2,826.40</h2>
                </div>
            </div>

            {/* Refund / Adjustment */}
            <div className="space-y-3 px-4 py-3">

                {/* Section Title */}
                <p className="text-xs font-semibold text-slate-700">Refund / Adjustment</p>

                {/* Tabs */}
                <div className="flex overflow-hidden rounded-lg border border-slate-200">
                    <button className="flex-1 bg-blue-600 py-1.5 text-xs font-medium text-white">
                        Cash Refund
                    </button>
                    <button className="flex-1 border-l border-slate-200 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50">
                        Adjust in Account
                    </button>
                    <button className="flex-1 border-l border-slate-200 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50">
                        Credit Note
                    </button>
                </div>

                {/* Refund Mode */}
                <div>
                    <label className="mb-1 block text-[10px] font-medium text-slate-500">
                        Refund Mode
                    </label>
                    <select className="h-8 w-full rounded-md border border-slate-200 px-2.5 text-xs outline-none focus:border-blue-500">
                        <option>Cash</option>
                        <option>UPI</option>
                        <option>Bank Transfer</option>
                    </select>
                </div>

                {/* Amount Refund */}
                <div>
                    <label className="mb-1 block text-[10px] font-medium text-slate-500">
                        Amount Refund
                    </label>
                    <input
                        type="text"
                        defaultValue="₹ 2,826.40"
                        className="h-8 w-full rounded-md border border-slate-200 px-2.5 text-xs outline-none focus:border-blue-500"
                    />
                </div>

                {/* Reference No */}
                <div>
                    <label className="mb-1 block text-[10px] font-medium text-slate-500">
                        Reference No. (Optional)
                    </label>
                    <input
                        type="text"
                        placeholder="Enter reference no."
                        className="h-8 w-full rounded-md border border-slate-200 px-2.5 text-xs outline-none focus:border-blue-500 placeholder:text-slate-400"
                    />
                </div>

                {/* Refund Note */}
                <div>
                    <label className="mb-1 block text-[10px] font-medium text-slate-500">
                        Refund Note (Optional)
                    </label>
                    <textarea
                        rows={3}
                        placeholder="Enter refund note..."
                        className="w-full rounded-md border border-slate-200 p-2.5 text-xs outline-none focus:border-blue-500 placeholder:text-slate-400"
                    />
                </div>

            </div>
        </div>
    );
}

export default ReturnSummaryPanel;