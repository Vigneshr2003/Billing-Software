import BillSummary from "../components/pos/BillSummary";
import BillingTable from "../components/pos/BillingTable";
import CustomerDetails from "../components/pos/CustomerDetails";
import CustomerSection from "../components/pos/CustomerSection";
import FooterStatus from "../components/pos/FooterStatus";
import PaymentSection from "../components/pos/PaymentSection";
import PosActions from "../components/pos/PosActions";
import PosHeader from "../components/pos/PosHeader";
import RecentItems from "../components/pos/RecentItems";
import StockInfo from "../components/pos/StockInfo";
import useBillingPOS from "../hooks/useBillingPOS";

function BillingPOSPage() {
  const {
    invoiceNumber,
    rows,
    customerForm,
    paymentMode,
    amountReceived,
    balanceReturn,
    summary,
    recentItems,
    customerSnapshot,
    stockSnapshot,
    footerStatuses,
    formatCurrency,
    calculateRowAmount,
    setPaymentMode,
    setAmountReceived,
    updateCustomerField,
    updateRowField,
    removeRow,
    addBlankRow,
    clearAllRows,
    addRecentItem,
  } = useBillingPOS();

  return (
    <div className="flex min-h-full flex-col rounded-xl border border-slate-200 bg-slate-50/50 shadow-sm">
      <PosHeader invoiceNumber={invoiceNumber} />

      <div className="flex-1 p-2.5 sm:p-3">
        <div className="space-y-3">
          <CustomerSection
            customerForm={customerForm}
            onFieldChange={updateCustomerField}
          />

          {/* Main billing area: Table + Sidebar (Summary & Payment) */}
          <div className="grid items-stretch gap-3 2xl:grid-cols-[minmax(0,1.98fr)_340px]">
            <div className="min-w-0 [&>section]:h-full">
              <BillingTable
                rows={rows}
                formatCurrency={formatCurrency}
                calculateRowAmount={calculateRowAmount}
                onUpdateRow={updateRowField}
                onRemoveRow={removeRow}
                onAddItem={addBlankRow}
                onClearAll={clearAllRows}
              />
            </div>

            <aside className="grid gap-3 content-start">
              <BillSummary summary={summary} formatCurrency={formatCurrency} />

              <PaymentSection
                paymentMode={paymentMode}
                amountReceived={amountReceived}
                balanceReturn={balanceReturn}
                formatCurrency={formatCurrency}
                onPaymentModeChange={setPaymentMode}
                onAmountReceivedChange={setAmountReceived}
              />
            </aside>
          </div>

          {/* Bottom row: Recent Items + Customer Details + Stock Info + Actions — all same height */}
          <div className="grid gap-3 xl:grid-cols-4">
            <RecentItems
              items={recentItems}
              formatCurrency={formatCurrency}
              onReAdd={addRecentItem}
            />
            <CustomerDetails customer={customerSnapshot} />
            <StockInfo stock={stockSnapshot} />
            <PosActions />
          </div>
        </div>
      </div>

      <FooterStatus
        totalItems={summary.itemsCount}
        totalQuantity={summary.totalQuantity}
        statuses={footerStatuses}
      />
    </div>
  );
}

export default BillingPOSPage;
