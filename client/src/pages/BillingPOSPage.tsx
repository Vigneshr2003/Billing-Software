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
    <div className="flex min-h-full flex-col rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
      <PosHeader invoiceNumber={invoiceNumber} />

      <div className="flex-1 p-2 sm:p-2.5">
        <div className="space-y-2.5">
          <CustomerSection
            customerForm={customerForm}
            onFieldChange={updateCustomerField}
          />

          <div className="grid items-start gap-2.5 2xl:grid-cols-[minmax(0,1.98fr)_320px]">
            <div className="min-w-0 space-y-2.5">
              <BillingTable
                rows={rows}
                formatCurrency={formatCurrency}
                calculateRowAmount={calculateRowAmount}
                onUpdateRow={updateRowField}
                onRemoveRow={removeRow}
                onAddItem={addBlankRow}
                onClearAll={clearAllRows}
              />

              <div className="grid gap-2.5 xl:grid-cols-3">
                <RecentItems
                  items={recentItems}
                  formatCurrency={formatCurrency}
                  onReAdd={addRecentItem}
                />
                <CustomerDetails customer={customerSnapshot} />
                <StockInfo stock={stockSnapshot} />
              </div>
            </div>

            <aside className="grid gap-2 content-start">
              <BillSummary summary={summary} formatCurrency={formatCurrency} />

              <PaymentSection
                paymentMode={paymentMode}
                amountReceived={amountReceived}
                balanceReturn={balanceReturn}
                formatCurrency={formatCurrency}
                onPaymentModeChange={setPaymentMode}
                onAmountReceivedChange={setAmountReceived}
              />

              <PosActions />
            </aside>
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
