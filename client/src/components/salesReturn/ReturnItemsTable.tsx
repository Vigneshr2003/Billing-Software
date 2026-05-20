import {
  Search,
  Barcode,
  RotateCcw,
  Trash2,
} from "lucide-react";

function ReturnItemsTable() {
  const items = [
    {
      sno: 1,
      name: "India Gate Basmati Rice 25kg",
      batch: "B2505",
      originalQty: "1 Bag",
      returnedQty: 1,
      unit: "Bag",
      rate: "2,050.00",
      discount: 0,
      tax: 5,
      amount: "2,050.00",
    },
    {
      sno: 2,
      name: "Fortune Sunlite Oil 1L",
      batch: "F2505",
      originalQty: "2 Tin",
      returnedQty: 1,
      unit: "Tin",
      rate: "160.00",
      discount: 2,
      tax: 2,
      amount: "156.80",
    },
    {
      sno: 3,
      name: "Aashirvaad Atta 10kg",
      batch: "A2505",
      originalQty: "1 Packet",
      returnedQty: 1,
      unit: "Packet",
      rate: "390.00",
      discount: 0,
      tax: 5,
      amount: "390.00",
    },
    {
      sno: 4,
      name: "Tata Tea Premium 1kg",
      batch: "T2505",
      originalQty: "2 Packet",
      returnedQty: 0,
      unit: "Packet",
      rate: "240.00",
      discount: 0,
      tax: 5,
      amount: "0.00",
    },
    {
      sno: 5,
      name: "India Gate Basmati Rice 25kg",
      batch: "B2505",
      originalQty: "1 Bag",
      returnedQty: 1,
      unit: "Bag",
      rate: "2,050.00",
      discount: 0,
      tax: 5,
      amount: "2,050.00",
    },
    {
      sno: 6,
      name: "India Gate Basmati Rice 25kg",
      batch: "B2505",
      originalQty: "1 Bag",
      returnedQty: 1,
      unit: "Bag",
      rate: "2,050.00",
      discount: 0,
      tax: 5,
      amount: "2,050.00",
    },
    {
      sno: 7,
      name: "India Gate Basmati Rice 25kg",
      batch: "B2505",
      originalQty: "1 Bag",
      returnedQty: 1,
      unit: "Bag",
      rate: "2,050.00",
      discount: 0,
      tax: 5,
      amount: "2,050.00",
    },
    {
      sno: 8,
      name: "India Gate Basmati Rice 25kg",
      batch: "B2505",
      originalQty: "1 Bag",
      returnedQty: 1,
      unit: "Bag",
      rate: "2,050.00",
      discount: 0,
      tax: 5,
      amount: "2,050.00",
    },

  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">

      {/* Top Actions */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 px-3 py-2">

        {/* Search */}
        <div className="relative w-full max-w-md">
          <Search className="absolute left-2.5 top-2 h-3.5 w-3.5 text-slate-400" />

          <input
            type="text"
            placeholder="Scan barcode or search item by name / code..."
            className="h-8 w-full rounded-lg border border-slate-200 pl-9 pr-4 text-xs outline-none focus:border-blue-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">

          <button className="flex h-8 items-center gap-1.5 rounded-lg border border-blue-200 bg-blue-50 px-3 text-xs font-medium text-blue-600 hover:bg-blue-100">
            <Barcode className="h-4 w-4" />
            Scan Barcode
          </button>

          <button className="flex h-8 items-center gap-1.5 rounded-lg border border-slate-200 px-3 text-xs font-medium text-slate-700 hover:bg-slate-50">
            <RotateCcw className="h-4 w-4" />
            Recent Items
          </button>

          <button className="flex h-8 items-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-3 text-xs font-medium text-red-600 hover:bg-red-100">
            <Trash2 className="h-4 w-4" />
            Clear All
          </button>

        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">

        <table className="w-full min-w-[1100px]">

          {/* Head */}
          <thead className="bg-slate-50">
            <tr className="border-b border-slate-200">

              {[
                "S.No",
                "Item Name",
                "Batch / Lot",
                "Original Qty",
                "Returned Qty",
                "Unit",
                "Rate",
                "Disc %",
                "Tax %",
                "Amount",
                "Action",
              ].map((head, index) => (
                <th
                  key={index}
                  className="px-3 py-1.5 text-left text-[11px] font-semibold text-slate-500"
                >
                  {head}
                </th>
              ))}

            </tr>
          </thead>

          {/* Body */}
          <tbody>

            {items.map((item, index) => (
              <tr
                key={index}
                className="border-b border-slate-100 hover:bg-slate-50"
              >

                {/* S.No */}
                <td className="px-3 py-1.5 text-xs font-medium text-slate-700">
                  {item.sno}
                </td>

                {/* Item Name */}
                <td className="px-3 py-1.5 text-xs font-medium text-slate-800">
                  {item.name}
                </td>

                {/* Batch */}
                <td className="px-3 py-1.5 text-xs text-slate-700">
                  {item.batch}
                </td>

                {/* Original Qty */}
                <td className="px-3 py-1.5 text-xs text-slate-700">
                  {item.originalQty}
                </td>

                {/* Returned Qty */}
                <td className="px-3 py-1.5">
                  <input
                    type="number"
                    value={item.returnedQty}
                    className="h-7 w-14 rounded-lg border border-slate-200 text-center text-xs outline-none focus:border-blue-500"
                  />
                </td>

                {/* Unit */}
                <td className="px-3 py-1.5">
                  <select className="h-7 rounded-lg border border-slate-200 px-2 text-xs outline-none focus:border-blue-500">
                    <option>{item.unit}</option>
                  </select>
                </td>

                {/* Rate */}
                <td className="px-3 py-1.5 text-xs font-medium text-slate-700">
                  {item.rate}
                </td>

                {/* Discount */}
                <td className="px-3 py-1.5">
                  <input
                    type="number"
                    value={item.discount}
                    className="h-7 w-12 rounded-lg border border-slate-200 text-center text-xs outline-none focus:border-blue-500"
                  />
                </td>

                {/* Tax */}
                <td className="px-3 py-1.5">
                  <input
                    type="number"
                    value={item.tax}
                    className="h-7 w-12 rounded-lg border border-slate-200 text-center text-xs outline-none focus:border-blue-500"
                  />
                </td>

                {/* Amount */}
                <td className="px-3 py-1.5 text-xs font-semibold text-slate-800">
                  {item.amount}
                </td>

                {/* Action */}
                <td className="px-3 py-1.5">
                  <button className="flex h-7 w-7 items-center justify-center rounded-lg border border-red-200 bg-red-50 hover:bg-red-100">
                    <Trash2 className="h-3.5 w-3.5 text-red-500" />
                  </button>
                </td>

              </tr>
            ))}

          </tbody>
        </table>
      </div>

    </div>
  );
}

export default ReturnItemsTable;