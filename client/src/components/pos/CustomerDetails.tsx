import { Phone, UserSquare2, Wallet, Tag } from "lucide-react";
import type { CustomerSnapshot } from "../../types/customer.types";

interface CustomerDetailsProps {
  customer: CustomerSnapshot;
}

function CustomerDetails({ customer }: CustomerDetailsProps) {
  const details = [
    { label: "Mobile", value: customer.mobileNumber, icon: Phone },
    { label: "Type", value: customer.customerType, icon: Tag },
    { label: "Outstanding", value: customer.outstandingAmount, icon: Wallet },
  ];

  return (
    <section className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm">
      <div className="mb-3 flex items-center gap-2.5">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-50">
          <UserSquare2 className="h-3.5 w-3.5 text-violet-600" />
        </div>
        <h2 className="text-[12px] font-semibold text-slate-800">Customer Details</h2>
      </div>

      <div className="mb-3 flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50/50 px-3 py-2.5">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <span className="text-[13px] font-bold">{customer.name.charAt(0)}</span>
        </div>
        <p className="text-[12px] font-semibold text-slate-800">{customer.name}</p>
      </div>

      <div className="flex-1 space-y-0.5">
        {details.map(({ label, value, icon: Icon }) => (
          <div key={label} className="flex items-center justify-between rounded-md px-1.5 py-2 transition hover:bg-slate-50">
            <div className="flex items-center gap-2.5">
              <Icon className="h-3.5 w-3.5 text-slate-400" />
              <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-slate-400">
                {label}
              </span>
            </div>
            <span className="text-[11px] font-semibold text-slate-700">{value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomerDetails;
