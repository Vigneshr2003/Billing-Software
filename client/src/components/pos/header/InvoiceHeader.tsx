interface InvoiceHeaderProps {
  invoiceNumber: string;
}

function InvoiceHeader({ invoiceNumber }: InvoiceHeaderProps) {
  return (
    <section className="border-b border-slate-200 px-3 py-2 sm:px-4">
      <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
            Invoice No
          </p>
          <p className="mt-0.5 text-[13px] font-semibold text-slate-900">
            {invoiceNumber}
          </p>
        </div>
      </div>
    </section>
  );
}

export default InvoiceHeader;
