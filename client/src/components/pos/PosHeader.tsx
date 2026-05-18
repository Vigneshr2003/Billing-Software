import { Hash } from "lucide-react";

interface PosHeaderProps {
  invoiceNumber: string;
}

function PosHeader({ invoiceNumber }: PosHeaderProps) {
  return (
    <header className="border-b border-slate-200 bg-white px-3 py-2.5 sm:px-4">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2 rounded-lg border border-blue-100 bg-blue-50 px-3 py-1.5">
          <Hash className="h-3.5 w-3.5 text-blue-600" />
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-wider text-blue-500">
              Invoice
            </p>
            <p className="text-[13px] font-bold tabular-nums text-blue-700">
              {invoiceNumber}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default PosHeader;
