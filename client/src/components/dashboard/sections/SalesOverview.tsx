import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { TrendingUp, ChevronDown } from "lucide-react";

const weeklyData = [
  { day: "Mon", sales: 42500, orders: 38 },
  { day: "Tue", sales: 58200, orders: 45 },
  { day: "Wed", sales: 35800, orders: 28 },
  { day: "Thu", sales: 72400, orders: 62 },
  { day: "Fri", sales: 65100, orders: 55 },
  { day: "Sat", sales: 89600, orders: 78 },
  { day: "Sun", sales: 125430, orders: 86 },
];

const monthlyData = [
  { day: "Week 1", sales: 285000, orders: 220 },
  { day: "Week 2", sales: 342000, orders: 265 },
  { day: "Week 3", sales: 298000, orders: 240 },
  { day: "Week 4", sales: 425000, orders: 340 },
];

const filterOptions = ["This Week", "This Month"] as const;

function SalesOverview() {
  const [filter, setFilter] = useState<(typeof filterOptions)[number]>("This Week");
  const [showDropdown, setShowDropdown] = useState(false);

  const data = filter === "This Week" ? weeklyData : monthlyData;
  const totalSales = data.reduce((sum, d) => sum + d.sales, 0);

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
            <TrendingUp className="h-4 w-4 text-blue-600" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-slate-800">Sales Overview</h2>
            <p className="text-xs text-slate-500">
              Total: ₹{(totalSales / 1000).toFixed(0)}K
            </p>
          </div>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-100"
          >
            {filter}
            <ChevronDown className="h-3.5 w-3.5" />
          </button>

          {showDropdown && (
            <div className="absolute right-0 top-full z-10 mt-1 rounded-lg border border-slate-200 bg-white py-1 shadow-lg">
              {filterOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    setFilter(opt);
                    setShowDropdown(false);
                  }}
                  className={`block w-full px-4 py-1.5 text-left text-xs transition hover:bg-slate-50 ${
                    filter === opt
                      ? "font-semibold text-blue-600"
                      : "text-slate-600"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.15} />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.01} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#94a3b8" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#94a3b8" }}
              tickFormatter={(val) => `₹${(val / 1000).toFixed(0)}K`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e2e8f0",
                borderRadius: "10px",
                fontSize: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              }}
              formatter={(value: number) => [
                `₹${value.toLocaleString("en-IN")}`,
                "Sales",
              ]}
            />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#3b82f6"
              strokeWidth={2.5}
              fill="url(#salesGradient)"
              dot={{ r: 4, fill: "#3b82f6", stroke: "#fff", strokeWidth: 2 }}
              activeDot={{ r: 6, fill: "#3b82f6", stroke: "#fff", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default SalesOverview;
