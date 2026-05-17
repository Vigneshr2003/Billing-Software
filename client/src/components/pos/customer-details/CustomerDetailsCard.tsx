import { Phone, UserSquare2 } from "lucide-react";
import type { CustomerSnapshot } from "../../../types/pos";

interface CustomerDetailsCardProps {
  customer: CustomerSnapshot;
}

function CustomerDetailsCard({ customer }: CustomerDetailsCardProps) {
  const details = [
    { label: "Mobile", value: customer.mobileNumber, icon: Phone },
    { label: "Type", value: customer.customerType, icon: UserSquare2 },
    { label: "Outstanding", value: customer.outstandingAmount, icon: UserSquare2 },
  ];

  return (
    <section className="h-full min-h-[220px] rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
      <h2 className="mb-3 text-[13px] font-semibold text-slate-900">
        Customer Details
      </h2>

      <div className="mb-3 flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600">
          <UserSquare2 className="h-4 w-4" />
        </div>
        <p className="text-[12px] font-medium text-slate-900">{customer.name}</p>
      </div>

      <div className="space-y-1">
        {details.map(({ label, value, icon: Icon }) => (
          <div key={label} className="flex items-start gap-3 py-1.5">
            <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-md bg-slate-50 text-slate-600">
              <Icon className="h-3.5 w-3.5" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.12em] text-slate-500">
                {label}
              </p>
              <p className="mt-0.5 text-[11px] font-medium text-slate-800">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomerDetailsCard;
