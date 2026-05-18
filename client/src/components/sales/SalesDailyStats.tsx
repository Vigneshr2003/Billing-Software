import {
    BarChart3,
    Receipt,
    Boxes,
    Wallet,
    AlertCircle,
    FileText,
} from "lucide-react";

function SalesDailyStats() {
    const stats = [
        {
            title: "Today's Sales",
            value: "₹ 1,25,430",
            icon: BarChart3,
            iconColor: "text-blue-600",
            iconBg: "bg-blue-100",
            valueColor: "text-slate-900",
        },
        {
            title: "Today's Invoices",
            value: "28",
            icon: Receipt,
            iconColor: "text-sky-600",
            iconBg: "bg-sky-100",
            valueColor: "text-slate-900",
        },
        {
            title: "Today's Qty",
            value: "452",
            icon: Boxes,
            iconColor: "text-slate-500",
            iconBg: "bg-slate-100",
            valueColor: "text-slate-900",
        },
        {
            title: "Receivable",
            value: "₹ 6,45,230",
            icon: Wallet,
            iconColor: "text-red-600",
            iconBg: "bg-red-100",
            valueColor: "text-red-600",
        },
        {
            title: "Overdue Invoices",
            value: "23",
            icon: AlertCircle,
            iconColor: "text-orange-600",
            iconBg: "bg-orange-100",
            valueColor: "text-orange-600",
        },
        {
            title: "Last Invoice",
            value: "INV-000125",
            icon: FileText,
            iconColor: "text-green-600",
            iconBg: "bg-green-100",
            valueColor: "text-slate-900",
        },
    ];

    return (
        <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-6">

            {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                    <div
                        key={index}
                        className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm"
                    >

                        {/* Left */}
                        <div>
                            <p className="text-[11px] font-medium text-slate-500">
                                {stat.title}
                            </p>

                            <h3
                                className={`mt-1 text-xl font-bold ${stat.valueColor}`}
                            >
                                {stat.value}
                            </h3>
                        </div>

                        {/* Icon */}
                        <div
                            className={`flex h-10 w-10 items-center justify-center rounded-lg ${stat.iconBg}`}
                        >
                            <Icon className={`h-5 w-5 ${stat.iconColor}`} />
                        </div>

                    </div>
                );
            })}

        </div>
    );
}

export default SalesDailyStats;