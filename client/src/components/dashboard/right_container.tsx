import {
  Phone,
  ChevronRight,
} from "lucide-react";

const topSelling = [
  { id: 1, name: "Sample 1", qty: 10, revenue: "₹ 10000" },
  { id: 2, name: "Sample 2", qty: 20, revenue: "₹ 20000" },
  { id: 3, name: "Sample 3", qty: 30, revenue: "₹ 30000" },
  { id: 4, name: "Sample 4", qty: 40, revenue: "₹ 40000" },
  { id: 5, name: "Sample 6", qty: 50, revenue: "₹ 50000" },
];

const pendingCollections = [
  { customer: "Customer 1", mobile: "8667488669", amount: "₹ 85,254", dueDays: 10 },
  { customer: "Customer 1", mobile: "8667488669", amount: "₹ 85,101", dueDays: 20 },
  { customer: "Customer 2", mobile: "8667488669", amount: "₹ 5,750", dueDays: 30 },
  { customer: "Customer 3", mobile: "8667488669", amount: "₹ 5,352", dueDays: 40 },
  { customer: "Customer 4", mobile: "8667488669", amount: "₹ 2,645", dueDays: 50 },
];

const notifications = [
  {
    title: "Backup completed ",
    time: "21 May 2025, 02:00 AM",
  },
  {
    title: "GST Return for April 2025 is due in 10 days",
    time: "20 May 2025, 11:30 AM",
  },
  {
    title: "Payment received from Kumar Traders",
    time: "20 May 2025, 10:15 AM",
  },
  {
    title: "New low stock alert: 18 items are low in stock",
    time: "20 May 2025, 09:45 AM",
  },
];

export default function RightContainer() {
  return (
    <div className="space-y-4">
      {/* Top Selling Products */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">
            Top Selling Products <span className="text-sm font-normal text-slate-500">(This Month)</span>
          </h2>
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-slate-500">
              <tr>
                <th className="pb-3 font-medium">#</th>
                <th className="pb-3 font-medium">Item Name</th>
                <th className="pb-3 font-medium">Qty Sold</th>
                <th className="pb-3 font-medium">Revenue</th>
              </tr>
            </thead>
            <tbody>
              {topSelling.map((product) => (
                <tr key={product.id} className="border-t border-slate-100 text-slate-700">
                  <td className="py-3 font-medium">{product.id}</td>
                  <td>
                    <div className="flex items-center gap-3">

                      <span className="font-medium text-slate-800">{product.name}</span>
                    </div>
                  </td>
                  <td>{product.qty}</td>
                  <td className="font-medium">{product.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pending Collections */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">Pending Collections</h2>
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-slate-500">
              <tr>
                <th className="pb-3 font-medium">Customer Name</th>
                <th className="pb-3 font-medium">Mobile</th>
                <th className="pb-3 font-medium">Pending Amount</th>
                <th className="pb-3 font-medium">Due Days</th>
                <th className="pb-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingCollections.map((collection, index) => (
                <tr key={index} className="border-t border-slate-100 text-slate-700">
                  <td className="py-3 font-medium text-slate-800">{collection.customer}</td>
                  <td>{collection.mobile}</td>
                  <td className="font-medium">{collection.amount}</td>
                  <td>{collection.dueDays}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <button className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-white text-green-500 hover:bg-green-50 transition-colors">
                        {/* WhatsApp SVG */}
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                        </svg>
                      </button>
                      <button className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-white text-blue-500 hover:bg-blue-50 transition-colors">
                        <Phone className="h-4 w-4" fill="currentColor" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Notifications */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">Notifications</h2>
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700">View All</button>
        </div>
        <div className="space-y-0">
          {notifications.map((notification, index) => (
            <div key={index} className="group flex cursor-pointer items-center justify-between border-b border-slate-100 py-3 last:border-0 hover:bg-slate-50 -mx-4 px-4 transition-colors">
              <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">{notification.title}</span>
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-xs whitespace-nowrap">{notification.time}</span>
                <ChevronRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
