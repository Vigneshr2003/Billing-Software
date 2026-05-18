import { Eye, MessageCircle, MoreVertical, Printer } from "lucide-react";

const invoices = [
    { invoiceNo: "INV-000125", date: "21 May 2025", time: "09:30 AM", customer: "Raj Stores", mobile: "9876543210", items: 11, qty: 32, amount: "₹ 4,040.00", payment: "UPI", status: "Paid", salesman: "Srinath" },
    { invoiceNo: "INV-000124", date: "21 May 2025", time: "09:15 AM", customer: "Kumar Traders", mobile: "9876543208", items: 8, qty: 21, amount: "₹ 5,760.00", payment: "Cash", status: "Paid", salesman: "Ramesh" },
    { invoiceNo: "INV-000123", date: "20 May 2025", time: "06:45 PM", customer: "Siva Provisions", mobile: "9876543209", items: 6, qty: 18, amount: "₹ 3,120.00", payment: "Credit", status: "Pending", salesman: "Srinath" },
    { invoiceNo: "INV-000122", date: "20 May 2025", time: "05:30 PM", customer: "New Sri Store", mobile: "9876543221", items: 9, qty: 27, amount: "₹ 2,890.00", payment: "UPI", status: "Paid", salesman: "Ramesh" },
    { invoiceNo: "INV-000121", date: "20 May 2025", time: "04:20 PM", customer: "Lakshmi Stores", mobile: "9876543215", items: 7, qty: 19, amount: "₹ 4,380.00", payment: "Cash", status: "Paid", salesman: "Srinath" },
    { invoiceNo: "INV-000120", date: "19 May 2025", time: "03:10 PM", customer: "Ganesh Store", mobile: "9876543217", items: 10, qty: 31, amount: "₹ 6,450.00", payment: "Credit", status: "Pending", salesman: "Ramesh" },
    { invoiceNo: "INV-000119", date: "19 May 2025", time: "11:20 AM", customer: "Balaji Agency", mobile: "9876543202", items: 5, qty: 14, amount: "₹ 2,120.00", payment: "UPI", status: "Paid", salesman: "Srinath" },
    { invoiceNo: "INV-000118", date: "18 May 2025", time: "07:45 PM", customer: "Venkatesh Traders", mobile: "9876543222", items: 13, qty: 41, amount: "₹ 8,760.00", payment: "Credit", status: "Pending", salesman: "Ramesh" },
    { invoiceNo: "INV-000117", date: "18 May 2025", time: "06:05 PM", customer: "Friends Store", mobile: "9876543211", items: 6, qty: 16, amount: "₹ 1,980.00", payment: "Cash", status: "Paid", salesman: "Srinath" },
    { invoiceNo: "INV-000116", date: "18 May 2025", time: "05:00 PM", customer: "Modern Mart", mobile: "9876543233", items: 12, qty: 36, amount: "₹ 7,240.00", payment: "UPI", status: "Paid", salesman: "Ramesh" },

];

const COLUMNS = [
    { label: "Invoice No", align: "left" },
    { label: "Date", align: "left" },
    { label: "Customer", align: "left" },
    { label: "Mobile", align: "left" },
    { label: "Items", align: "center" },
    { label: "Qty", align: "center" },
    { label: "Amount", align: "left" },
    { label: "Payment Type", align: "left" },
    { label: "Status", align: "left" },
    { label: "Salesman", align: "left" },
    { label: "Actions", align: "center" },
];

const PAYMENT_COLORS: Record<string, string> = {
    Cash: "bg-emerald-50 text-emerald-700",
    UPI: "bg-blue-50 text-blue-700",
    Credit: "bg-orange-50 text-orange-700",
    Card: "bg-purple-50 text-purple-700",
};

function SalesInvoiceTable() {
    return (
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm">

            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
                <h2 className="text-sm font-semibold text-slate-800">Sales Invoices</h2>
                <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-semibold text-blue-600">
                    562 Total
                </span>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full min-w-[1050px]">

                    {/* Head */}
                    <thead className="bg-slate-50">
                        <tr className="border-b border-slate-200">
                            {COLUMNS.map((col) => (
                                <th
                                    key={col.label}
                                    className={`px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-slate-400 text-${col.align}`}
                                >
                                    {col.label}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody>
                        {invoices.map((inv, idx) => (
                            <tr
                                key={inv.invoiceNo}
                                className={`border-b border-slate-100 transition hover:bg-blue-50/30 ${idx % 2 === 1 ? "bg-slate-50/40" : ""}`}
                            >
                                {/* Invoice No */}
                                <td className="px-4 py-2.5">
                                    <p className="text-xs font-semibold text-blue-600">{inv.invoiceNo}</p>
                                </td>

                                {/* Date */}
                                <td className="px-4 py-2.5">
                                    <p className="text-xs text-slate-700">{inv.date}</p>
                                    <p className="text-[11px] text-slate-400">{inv.time}</p>
                                </td>

                                {/* Customer */}
                                <td className="px-4 py-2.5 text-xs font-medium text-slate-800">{inv.customer}</td>

                                {/* Mobile */}
                                <td className="px-4 py-2.5 text-xs text-slate-500">{inv.mobile}</td>

                                {/* Items */}
                                <td className="px-4 py-2.5 text-center text-xs text-slate-700">{inv.items}</td>

                                {/* Qty */}
                                <td className="px-4 py-2.5 text-center text-xs text-slate-700">{inv.qty}</td>

                                {/* Amount */}
                                <td className="px-4 py-2.5 text-xs font-semibold text-slate-800">{inv.amount}</td>

                                {/* Payment */}
                                <td className="px-4 py-2.5">
                                    <span className={`rounded-md px-2 py-0.5 text-[10px] font-semibold ${PAYMENT_COLORS[inv.payment] ?? "bg-slate-100 text-slate-600"}`}>
                                        {inv.payment}
                                    </span>
                                </td>

                                {/* Status */}
                                <td className="px-4 py-2.5">
                                    <span className={`rounded-md px-2 py-0.5 text-[10px] font-semibold ${inv.status === "Paid" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`}>
                                        {inv.status}
                                    </span>
                                </td>

                                {/* Salesman */}
                                <td className="px-4 py-2.5 text-xs text-slate-600">{inv.salesman}</td>

                                {/* Actions */}
                                <td className="px-4 py-2.5">
                                    <div className="flex items-center justify-center gap-1">
                                        <button className="rounded-md border border-slate-200 p-1.5 transition hover:bg-slate-100" title="View">
                                            <Eye className="h-3.5 w-3.5 text-blue-600" />
                                        </button>
                                        <button className="rounded-md border border-slate-200 p-1.5 transition hover:bg-slate-100" title="Print">
                                            <Printer className="h-3.5 w-3.5 text-slate-600" />
                                        </button>
                                        <button className="rounded-md border border-slate-200 p-1.5 transition hover:bg-slate-100" title="WhatsApp">
                                            <MessageCircle className="h-3.5 w-3.5 text-green-600" />
                                        </button>
                                        <button className="rounded-md border border-slate-200 p-1.5 transition hover:bg-slate-100" title="More">
                                            <MoreVertical className="h-3.5 w-3.5 text-slate-500" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Footer / Pagination */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 px-4 py-3">
                <p className="text-xs text-slate-500">Showing 1 to 12 of 562 entries</p>

                <div className="flex items-center gap-1">
                    <button className="rounded-md border border-slate-200 px-2.5 py-1 text-xs hover:bg-slate-100">«</button>
                    {[1, 2, 3, "...", 57].map((page, i) => (
                        <button
                            key={i}
                            className={`rounded-md px-2.5 py-1 text-xs transition ${page === 1
                                    ? "bg-blue-600 text-white"
                                    : "border border-slate-200 hover:bg-slate-100"
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                    <button className="rounded-md border border-slate-200 px-2.5 py-1 text-xs hover:bg-slate-100">»</button>
                </div>
            </div>

        </div>
    );
}

export default SalesInvoiceTable;