import {
    Copy,
    MessageCircle,
    Printer,
    FileSpreadsheet,
    BookOpen,
} from "lucide-react";

function SalesShortcuts() {
    const shortcuts = [
        {
            title: "Duplicate Invoice (F7)",
            icon: Copy,
            color: "text-slate-600",
            bg: "bg-slate-100",
        },
        {
            title: "WhatsApp Share",
            icon: MessageCircle,
            color: "text-green-600",
            bg: "bg-green-100",
        },
        {
            title: "Print Multiple",
            icon: Printer,
            color: "text-blue-600",
            bg: "bg-blue-100",
        },
        {
            title: "Export to Excel",
            icon: FileSpreadsheet,
            color: "text-cyan-600",
            bg: "bg-cyan-100",
        },
        {
            title: "Day Book (Sales)",
            icon: BookOpen,
            color: "text-indigo-600",
            bg: "bg-indigo-100",
        },
    ];

    return (
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">

            {/* Header */}
            <div className="mb-4">
                <h2 className="text-sm font-semibold text-slate-800">
                    Shortcuts
                </h2>
            </div>

            {/* Shortcut List */}
            <div className="space-y-3">

                {shortcuts.map((shortcut, index) => {
                    const Icon = shortcut.icon;

                    return (
                        <button
                            key={index}
                            className="flex w-full items-center gap-3 text-left transition hover:text-blue-600"
                        >

                            {/* Icon */}
                            <div
                                className={`flex h-6 w-6 items-center justify-center rounded-md ${shortcut.bg}`}
                            >
                                <Icon className={`h-3.5 w-3.5 ${shortcut.color}`} />
                            </div>

                            {/* Title */}
                            <p className="text-xs font-medium text-slate-700">
                                {shortcut.title}
                            </p>

                        </button>
                    );
                })}

            </div>
        </div>
    );
}

export default SalesShortcuts;