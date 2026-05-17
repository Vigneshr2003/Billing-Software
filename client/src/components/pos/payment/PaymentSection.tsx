import {
  BadgeIndianRupee,
  CreditCard,
  Landmark,
  QrCode,
  SplitSquareVertical,
} from "lucide-react";
import type { PaymentMode } from "../../../types/pos";

interface PaymentSectionProps {
  paymentMode: PaymentMode;
  amountReceived: string;
  balanceReturn: number;
  formatCurrency: (value: number) => string;
  onPaymentModeChange: (mode: PaymentMode) => void;
  onAmountReceivedChange: (value: string) => void;
}

const paymentModes: {
  value: PaymentMode;
  label: string;
  icon: typeof BadgeIndianRupee;
}[] = [
  { value: "cash", label: "Cash", icon: BadgeIndianRupee },
  { value: "upi", label: "UPI", icon: QrCode },
  { value: "card", label: "Card", icon: CreditCard },
  { value: "credit", label: "Credit", icon: Landmark },
  { value: "split", label: "Split", icon: SplitSquareVertical },
];

function PaymentSection({
  paymentMode,
  amountReceived,
  balanceReturn,
  formatCurrency,
  onPaymentModeChange,
  onAmountReceivedChange,
}: PaymentSectionProps) {
  return (
    <section className="h-full rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm">
      <div className="mb-2.5">
        <h2 className="text-[13px] font-semibold text-slate-900">Payment</h2>
      </div>

      <div className="grid grid-cols-5 gap-1.5">
        {paymentModes.map(({ value, label, icon: Icon }) => {
          const active = paymentMode === value;

          return (
            <button
              key={value}
              type="button"
              onClick={() => onPaymentModeChange(value)}
              className={[
                "inline-flex h-7 items-center justify-center gap-1 rounded-md border text-[8px] font-medium transition",
                active
                  ? "border-blue-600 bg-blue-600 text-white shadow-sm"
                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
              ].join(" ")}
            >
              <Icon className="h-3 w-3" />
              <span className="text-[12px]">{label}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-2.5 space-y-2">
        <label className="block">
          <span className="mb-1 block text-[10px] font-medium uppercase tracking-[0.14em] text-slate-500">
            Amount Received
          </span>
          <input
            value={amountReceived}
            onChange={(event) => onAmountReceivedChange(event.target.value)}
            className="h-8 w-full rounded-lg border border-slate-200 bg-white px-2 text-[10px] text-slate-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </label>

        <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-2.5 py-1.5">
          <span className="block text-[10px] font-medium uppercase tracking-[0.14em] text-emerald-700">
            Balance Return
          </span>
          <p className="mt-0.5 text-[14px] font-semibold text-emerald-800">
            {formatCurrency(balanceReturn)}
          </p>
        </div>
      </div>
    </section>
  );
}

export default PaymentSection;
