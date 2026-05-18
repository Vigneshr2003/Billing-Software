import {
  ClipboardList,
  Expand,
  History,
  Maximize2,
  Plus,
  UserRound,
  Wallet,
} from "lucide-react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import type { CustomerFormState } from "../../types/customer.types";

interface CustomerSectionProps {
  customerForm: CustomerFormState;
  onFieldChange: (field: keyof CustomerFormState, value: string) => void;
}

function CustomerSection({
  customerForm,
  onFieldChange,
}: CustomerSectionProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
      <div className="mb-2.5 flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50">
          <UserRound className="h-3.5 w-3.5 text-blue-600" />
        </div>
        <h2 className="text-[12px] font-semibold text-slate-800">Customer Information</h2>
      </div>

      <div className="grid gap-2.5 xl:grid-cols-[minmax(0,1.45fr)_minmax(130px,1fr)_minmax(130px,1fr)_120px_140px_auto]">
        <label className="block">
          <span className="mb-1 block text-[10px] font-medium uppercase tracking-[0.14em] text-slate-400">
            Customer
          </span>
          <select
            className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-2.5 text-[11px] font-medium text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            onChange={(event) => onFieldChange("customerName", event.target.value)}
            value={customerForm.customerName}
          >
            <option>Walk-in Customer</option>
            <option>Raj Stores</option>
            <option>Kumar Traders</option>
            <option>Sri Balaji Market</option>
          </select>
        </label>

        <label className="block">
          <span className="mb-1 block text-[10px] font-medium uppercase tracking-[0.14em] text-slate-400">
            Mobile Number
          </span>
          <Input
            className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-2.5 text-[11px] text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            onChange={(event) => onFieldChange("mobileNumber", event.target.value)}
            value={customerForm.mobileNumber}
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-[10px] font-medium uppercase tracking-[0.14em] text-slate-400">
            GSTIN (Optional)
          </span>
          <Input
            className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-2.5 text-[11px] text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            onChange={(event) => onFieldChange("gstin", event.target.value)}
            placeholder="Enter GSTIN"
            value={customerForm.gstin}
          />
        </label>

        <div className="rounded-lg border border-emerald-100 bg-linear-to-br from-emerald-50 to-emerald-50/50 px-2.5 py-2">
          <span className="block text-[10px] font-medium uppercase tracking-[0.14em] text-slate-400">
            Outstanding
          </span>
          <div className="mt-1 flex items-center gap-2">
            <Wallet className="h-3.5 w-3.5 text-emerald-600" />
            <span className="text-[13px] font-bold text-emerald-700">
              {customerForm.outstandingAmount}
            </span>
          </div>
        </div>

        <label className="block">
          <span className="mb-1 block text-[10px] font-medium uppercase tracking-[0.14em] text-slate-400">
            Customer Type
          </span>
          <select
            className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-2.5 text-[11px] font-medium text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            onChange={(event) => onFieldChange("customerType", event.target.value)}
            value={customerForm.customerType}
          >
            <option>Retail</option>
            <option>Wholesale</option>
            <option>Credit Party</option>
          </select>
        </label>

        <div className="flex flex-wrap items-end justify-end gap-1.5">
          <Button className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-blue-200 bg-blue-50 px-2.5 text-[10px] font-semibold text-blue-700 transition hover:bg-blue-100 hover:shadow-sm">
            <span>Hold Bills</span>
            <span className="inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-blue-600 px-1 text-[9px] font-bold text-white">
              3
            </span>
          </Button>
          <Button className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-blue-600 px-3 text-[10px] font-semibold text-white shadow-sm transition hover:bg-blue-700">
            <Plus className="h-3.5 w-3.5" />
            <span>Add Customer</span>
          </Button>
          {[
            { label: "History", icon: History },
            { label: "Ledger", icon: ClipboardList },
          ].map(({ label, icon: Icon }) => (
            <Button
              key={label}
              className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 text-[10px] font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-800"
            >
              <Icon className="h-3.5 w-3.5 text-blue-500" />
              <span>{label}</span>
            </Button>
          ))}
          <Button
            aria-label="Expand section"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-50 hover:text-slate-700"
          >
            <Expand className="hidden h-3.5 w-3.5" />
            <Maximize2 className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CustomerSection;
