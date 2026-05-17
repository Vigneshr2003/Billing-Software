import {
  ClipboardList,
  Expand,
  History,
  Maximize2,
  Plus,
  UserRound,
  Wallet,
} from "lucide-react";
import type { CustomerFormState } from "../../../types/pos";

interface CustomerInfoSectionProps {
  customerForm: CustomerFormState;
  onFieldChange: (field: keyof CustomerFormState, value: string) => void;
}

function CustomerInfoSection({
  customerForm,
  onFieldChange,
}: CustomerInfoSectionProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm">
      <div className="grid gap-2.5 xl:grid-cols-[minmax(0,1.45fr)_minmax(130px,1fr)_minmax(130px,1fr)_120px_140px_auto]">
        <label className="block">
          <span className="mb-1 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.14em] text-slate-500">
            <UserRound className="h-3.5 w-3.5 text-blue-600" />
            Customer
          </span>
          <select
            value={customerForm.customerName}
            onChange={(event) =>
              onFieldChange("customerName", event.target.value)
            }
            className="h-9 w-full rounded-lg border border-slate-200 bg-white px-2.5 text-[11px] text-slate-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option>Walk-in Customer</option>
            <option>Raj Stores</option>
            <option>Kumar Traders</option>
            <option>Sri Balaji Market</option>
          </select>
        </label>

        <label className="block">
          <span className="mb-1 block text-[10px] font-medium uppercase tracking-[0.14em] text-slate-500">
            Mobile Number
          </span>
          <input
            value={customerForm.mobileNumber}
            onChange={(event) =>
              onFieldChange("mobileNumber", event.target.value)
            }
            className="h-9 w-full rounded-lg border border-slate-200 bg-white px-2.5 text-[11px] text-slate-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-[10px] font-medium uppercase tracking-[0.14em] text-slate-500">
            GSTIN (Optional)
          </span>
          <input
            value={customerForm.gstin}
            onChange={(event) => onFieldChange("gstin", event.target.value)}
            placeholder="Enter GSTIN"
            className="h-9 w-full rounded-lg border border-slate-200 bg-white px-2.5 text-[11px] text-slate-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </label>

        <div className="rounded-lg border border-emerald-100 bg-emerald-50 px-2.5 py-2">
          <span className="block text-[10px] font-medium uppercase tracking-[0.14em] text-slate-500">
            Outstanding
          </span>
          <div className="mt-1 flex items-center gap-2">
            <Wallet className="h-3.5 w-3.5 text-emerald-600" />
            <span className="text-[13px] font-semibold text-emerald-700">
              {customerForm.outstandingAmount}
            </span>
          </div>
        </div>

        <label className="block">
          <span className="mb-1 block text-[10px] font-medium uppercase tracking-[0.14em] text-slate-500">
            Customer Type
          </span>
          <select
            value={customerForm.customerType}
            onChange={(event) =>
              onFieldChange("customerType", event.target.value)
            }
            className="h-9 w-full rounded-lg border border-slate-200 bg-white px-2.5 text-[11px] text-slate-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option>Retail</option>
            <option>Wholesale</option>
            <option>Credit Party</option>
          </select>
        </label>

        <div className="flex flex-wrap items-end justify-end gap-1.5">
          <button
            type="button"
            className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-blue-200 bg-white px-2.5 text-[10px] font-medium text-blue-700 transition hover:bg-blue-50"
          >
            <span>Hold Bills</span>
            <span className="inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-blue-600 px-1 text-[9px] font-semibold text-white">
              3
            </span>
          </button>
          <button
            type="button"
            className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-blue-200 bg-blue-50 px-2.5 text-[10px] font-medium text-blue-700 transition hover:bg-blue-100"
          >
            <Plus className="h-3.5 w-3.5" />
            <span>Add Customer</span>
          </button>
          {[
            { label: "History", icon: History },
            { label: "Ledger", icon: ClipboardList },
          ].map(({ label, icon: Icon }) => (
            <button
              key={label}
              type="button"
              className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 text-[10px] font-medium text-slate-700 transition hover:bg-slate-50"
            >
              <Icon className="h-3.5 w-3.5 text-blue-600" />
              <span>{label}</span>
            </button>
          ))}
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50"
            aria-label="Expand section"
          >
            <Expand className="hidden h-3.5 w-3.5" />
            <Maximize2 className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default CustomerInfoSection;
