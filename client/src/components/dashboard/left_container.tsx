import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const salesData = [
  { day: "Day 1", sales: 32000 },
  { day: "Day 2", sales: 45000 },
  { day: "Day 3", sales: 58000 },
  { day: "Day 4", sales: 39000 },
  { day: "Day 5", sales: 53000 },
  { day: "Day 6", sales: 41000 },
  { day: "Day 7", sales: 50000 },
];

const recentBills = [
  {
    bill: "INV-000001",
    customer: "Customer 1",
    time: "09:00 AM",
    amount: "₹ 1,000",
    payment: "UPI",
  },
  {
    bill: "INV-000002",
    customer: "Customer 2",
    time: "09:15 AM",
    amount: "₹ 2,000",
    payment: "Cash",
  },
  {
    bill: "INV-000003",
    customer: "Customer 3",
    time: "09:30 AM",
    amount: "₹ 3,000",
    payment: "Card",
  },
  {
    bill: "INV-000004",
    customer: "Customer 4",
    time: "09:45 AM",
    amount: "₹ 4,000",
    payment: "UPI",
  },
  {
    bill: "INV-000005",
    customer: "Customer 5",
    time: "10:00 AM",
    amount: "₹ 5,000",
    payment: "Cash",
  },
];

const stockAlerts = [
  {
    item: "Sample Item 1",
    stock: "8 Units",
    min: "15 Units",
    status: "Low Stock",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    item: "Sample Item 2",
    stock: "3 Units",
    min: "10 Units",
    status: "Low Stock",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    item: "Sample Item 3",
    stock: "0 Units",
    min: "20 Units",
    status: "Out of Stock",
    color: "bg-red-100 text-red-600",
  },
];

function LeftContainer() {
  return (
    <div className="space-y-4">

      {/* Sales Overview */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">

        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">
            Sales Overview
          </h2>

          <button className="rounded-md border border-slate-200 px-3 py-1 text-sm text-slate-500">
            This Week
          </button>
        </div>

        <div className="overflow-x-auto rounded-lg bg-slate-50 p-2">

          <LineChart
            width={700}
            height={250}
            data={salesData}
          >

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="sales"
              stroke="#2563eb"
              strokeWidth={3}
            />

          </LineChart>

        </div>

      </div>

      {/* Recent Bills */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">

        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">
            Recent Bills
          </h2>

          <button className="text-sm font-medium text-blue-600">
            View All
          </button>
        </div>

        <table className="w-full text-sm">

          <thead className="text-left text-slate-500">
            <tr>
              <th className="pb-3">Bill No</th>
              <th className="pb-3">Customer</th>
              <th className="pb-3">Time</th>
              <th className="pb-3">Amount</th>
              <th className="pb-3">Payment</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>

          <tbody>

            {recentBills.map((bill, index) => (
              <tr
                key={index}
                className="border-t border-slate-100 text-slate-700"
              >
                <td className="py-3">{bill.bill}</td>
                <td>{bill.customer}</td>
                <td>{bill.time}</td>
                <td>{bill.amount}</td>
                <td>{bill.payment}</td>

                <td>
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-600">
                    Paid
                  </span>
                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

      {/* Stock Alerts */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">

        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">
            Stock Alerts
          </h2>

          <button className="text-sm font-medium text-blue-600">
            View All
          </button>
        </div>

        <table className="w-full text-sm">

          <thead className="text-left text-slate-500">
            <tr>
              <th className="pb-3">Item Name</th>
              <th className="pb-3">Current Stock</th>
              <th className="pb-3">Min. Stock</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>

          <tbody>

            {stockAlerts.map((item, index) => (
              <tr
                key={index}
                className="border-t border-slate-100 text-slate-700"
              >
                <td className="py-3">{item.item}</td>

                <td>{item.stock}</td>

                <td>{item.min}</td>

                <td>
                  <span
                    className={`rounded-full px-2 py-1 text-xs ${item.color}`}
                  >
                    {item.status}
                  </span>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default LeftContainer;