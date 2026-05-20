import {
    FileText,
    IndianRupee,
    ShoppingCart,
    CreditCard,
    TrendingUp,
} from "lucide-react";

function SalesKpiCards() {
    const cards = [
        {
            title: "Total Invoices",
            value: "562",
            growth: "+ 18.6%",
            description: "vs Last Month",
            icon: FileText,
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600",
            growthColor: "text-green-600",
        },
        {
            title: "Total Sales",
            value: "₹ 18,75,430",
            growth: "+ 22.4%",
            description: "vs Last Month",
            icon: IndianRupee,
            iconBg: "bg-green-100",
            iconColor: "text-green-600",
            growthColor: "text-green-600",
        },
        {
            title: "Total Qty",
            value: "8,936",
            growth: "+ 16.8%",
            description: "vs Last Month",
            icon: ShoppingCart,
            iconBg: "bg-amber-100",
            iconColor: "text-amber-600",
            growthColor: "text-green-600",
        },
        {
            title: "Total Receivable",
            value: "₹ 6,45,230",
            growth: "- 4.2%",
            description: "vs Last Month",
            icon: CreditCard,
            iconBg: "bg-red-100",
            iconColor: "text-red-500",
            growthColor: "text-red-500",
        },
        {
            title: "Average Order Value",
            value: "₹ 3,336",
            growth: "+ 11.3%",
            description: "vs Last Month",
            icon: TrendingUp,
            iconBg: "bg-purple-100",
            iconColor: "text-purple-600",
            growthColor: "text-green-600",
        },
    ];

    return (
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {cards.map((card, index) => {
                const Icon = card.icon;

                return (
                    <div
                        key={index}
                        className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                    >
                        <div className="flex items-start gap-3">

                            {/* Icon */}
                            <div
                                className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg ${card.iconBg}`}
                            >
                                <Icon className={`h-5 w-5 ${card.iconColor}`} />
                            </div>

                            {/* Right Content */}
                            <div className="min-w-0">
                                <p className="text-xs font-medium text-slate-500">
                                    {card.title}
                                </p>

                                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                                    {card.value}
                                </h2>

                                <div className="mt-1.5 flex items-center gap-1">
                                    <span
                                        className={`text-xs font-semibold ${card.growthColor}`}
                                    >
                                        {card.growth}
                                    </span>

                                    <span className="text-xs text-slate-400">
                                        {card.description}
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default SalesKpiCards;