import {
  BadgeIndianRupee,
  CreditCard,
  Landmark,
  QrCode,
  SplitSquareVertical,
  Wallet,
} from "lucide-react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import type { PaymentMode } from "../../types/billing.types";

interface PaymentSectionProps {
  paymentMode: PaymentMode;
  amountReceived: string;
  balanceReturn: number;
  formatCurrency: (value: number) => string;
  onPaymentModeChange: (mode: PaymentMode) => void;
  onAmountReceivedChange: (value: string) => void;
}

const paymentModes: Array<{
  value: PaymentMode;
  label: string;
  icon: typeof BadgeIndianRupee;
  activeColor: string;
}> = [
  { value: "cash", label: "Cash", icon: BadgeIndianRupee, activeColor: "border-emerald-600 bg-emerald-600 text-white shadow-sm shadow-emerald-200" },
  { value: "upi", label: "UPI", icon: QrCode, activeColor: "border-violet-600 bg-violet-600 text-white shadow-sm shadow-violet-200" },
  { value: "card", label: "Card", icon: CreditCard, activeColor: "border-blue-600 bg-blue-600 text-white shadow-sm shadow-blue-200" },
  { value: "credit", label: "Credit", icon: Landmark, activeColor: "border-amber-600 bg-amber-600 text-white shadow-sm shadow-amber-200" },
  { value: "split", label: "Split", icon: SplitSquareVertical, activeColor: "border-rose-600 bg-rose-600 text-white shadow-sm shadow-rose-200" },
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
    <section className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm">
      <div className="mb-3 flex items-center gap-2.5">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-50">
          <Wallet className="h-3.5 w-3.5 text-violet-600" />
        </div>
        <h2 className="text-[13px] font-semibold text-slate-800">Payment</h2>
      </div>

      <div className="grid grid-cols-5 gap-1.5">
        {paymentModes.map(({ value, label, icon: Icon, activeColor }) => {
          const active = paymentMode === value;
          return (
            <Button
              key={value}
              className={[
                "inline-flex h-8 flex-col items-center justify-center gap-0.5 rounded-lg border text-[9px] font-medium transition-all duration-200",
                active
                  ? activeColor
                  : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:border-slate-300",
              ].join(" ")}
              onClick={() => onPaymentModeChange(value)}
            >
              <Icon className="h-3.5 w-3.5" />
              <span className="text-[10px] font-semibold">{label}</span>
            </Button>
          );
        })}
      </div>

      <div className="mt-3 space-y-2.5">
        <label className="block">
          <span className="mb-1 block text-[10px] font-medium uppercase tracking-[0.14em] text-slate-400">
            Amount Received
          </span>
          <Input
            className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-2.5 text-[12px] font-medium text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            onChange={(event) => onAmountReceivedChange(event.target.value)}
            value={amountReceived}
          />
        </label>

        <div className="rounded-xl border border-emerald-200 bg-linear-to-br from-emerald-50 to-emerald-50/30 px-3 py-2.5">
          <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-500">
            Balance Return
          </span>
          <p className="mt-0.5 text-[18px] font-bold tabular-nums text-emerald-700">
            {formatCurrency(balanceReturn)}
          </p>
        </div>
      </div>
    </section>
  );
}

export default PaymentSection;
