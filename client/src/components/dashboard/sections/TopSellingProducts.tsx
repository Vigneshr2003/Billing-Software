import { Package, ArrowRight } from "lucide-react";

const topProducts = [
  { name: "Tata Tea Gold 1kg", qtySold: 142, revenue: "₹48,820" },
  { name: "Aashirvaad Atta 5kg", qtySold: 98, revenue: "₹32,340" },
  { name: "Fortune Sunflower Oil 1L", qtySold: 87, revenue: "₹15,660" },
  { name: "Parle-G Biscuits (Pack)", qtySold: 256, revenue: "₹12,800" },
  { name: "Amul Butter 500g", qtySold: 64, revenue: "₹16,960" },
];

function TopSellingProducts() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50">
            <Package className="h-4 w-4 text-emerald-600" />
          </div>
          <h2 className="text-sm font-semibold text-slate-800">Top Selling Products</h2>
        </div>
        <button
          type="button"
          className="flex items-center gap-1 text-xs font-medium text-blue-600 transition hover:text-blue-700"
        >
          View All
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="pb-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Product
              </th>
              <th className="pb-3 text-center text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Qty Sold
              </th>
              <th className="pb-3 text-right text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Revenue
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {topProducts.map((product, idx) => (
              <tr
                key={product.name}
                className="transition hover:bg-slate-50/50"
              >
                <td className="py-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-[11px] font-bold text-slate-500">
                      {idx + 1}
                    </span>
                    <span className="text-sm font-medium text-slate-700">
                      {product.name}
                    </span>
                  </div>
                </td>
                <td className="py-3 text-center text-sm font-medium text-slate-600">
                  {product.qtySold}
                </td>
                <td className="py-3 text-right text-sm font-semibold text-slate-800">
                  {product.revenue}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default TopSellingProducts;
