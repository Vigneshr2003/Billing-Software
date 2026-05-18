import {
  User,
  Phone,
  CalendarDays,
  Wallet,
  BadgeCheck,
} from "lucide-react";

function ReturnCustomerInfo() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">

        {/* Customer */}
        <div>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-slate-400" />

            <p className="text-[11px] font-medium text-slate-500">
              Customer
            </p>
          </div>

          <h3 className="mt-2 text-sm font-semibold text-slate-800">
            Raj Stores
          </h3>
        </div>

        {/* Mobile */}
        <div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-slate-400" />

            <p className="text-[11px] font-medium text-slate-500">
              Mobile Number
            </p>
          </div>

          <h3 className="mt-2 text-sm font-semibold text-slate-800">
            9876543210
          </h3>
        </div>

        {/* Invoice Date */}
        <div>
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-slate-400" />

            <p className="text-[11px] font-medium text-slate-500">
              Invoice Date
            </p>
          </div>

          <h3 className="mt-2 text-sm font-semibold text-slate-800">
            21 May 2025
          </h3>
        </div>

        {/* Invoice Amount */}
        <div>
          <div className="flex items-center gap-2">
            <Wallet className="h-4 w-4 text-slate-400" />

            <p className="text-[11px] font-medium text-slate-500">
              Invoice Amount
            </p>
          </div>

          <h3 className="mt-2 text-sm font-semibold text-slate-800">
            ₹ 5,760.00
          </h3>
        </div>

        {/* Paid Amount */}
        <div>
          <div className="flex items-center gap-2">
            <Wallet className="h-4 w-4 text-slate-400" />

            <p className="text-[11px] font-medium text-slate-500">
              Paid Amount
            </p>
          </div>

          <div className="mt-2 flex items-center gap-2">
            <h3 className="text-sm font-semibold text-slate-800">
              ₹ 5,760.00
            </h3>

            <span className="rounded-md bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-700">
              Paid
            </span>
          </div>
        </div>

        {/* Outstanding */}
        <div>
          <div className="flex items-center gap-2">
            <BadgeCheck className="h-4 w-4 text-slate-400" />

            <p className="text-[11px] font-medium text-slate-500">
              Outstanding
            </p>
          </div>

          <div className="mt-2 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-green-600">
              ₹ 0.00
            </h3>

            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100">
              <BadgeCheck className="h-4 w-4 text-green-600" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ReturnCustomerInfo;