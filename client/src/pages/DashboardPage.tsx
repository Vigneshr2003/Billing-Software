function DashboardPage() {
  return (
    <section className="flex min-h-full flex-col rounded-xl border border-slate-200 bg-white shadow-sm">
      <header className="border-b border-slate-200 px-4 py-3 sm:px-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
          Dashboard
        </p>
        <h1 className="mt-1 text-lg font-semibold text-slate-900">
          Overview
        </h1>
      </header>

      <div className="flex flex-1 items-center justify-center px-4 py-8">
        <div className="w-full max-w-3xl rounded-xl border border-dashed border-slate-300 bg-slate-50 px-5 py-10 text-center">
          <p className="text-xs text-slate-500">
            Dashboard content stays here. Billing / POS is available only on its own route.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DashboardPage;
