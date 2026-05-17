import QuickActionsSection from "../components/pos/actions/QuickActionsSection";
import BillingTableSection from "../components/pos/billing-table/BillingTableSection";
import CustomerInfoSection from "../components/pos/customer/CustomerInfoSection";
import CustomerDetailsCard from "../components/pos/customer-details/CustomerDetailsCard";
import FooterStatusBar from "../components/pos/footer-status/FooterStatusBar";
import InvoiceHeader from "../components/pos/header/InvoiceHeader";
import PaymentSection from "../components/pos/payment/PaymentSection";
import RecentItemsSection from "../components/pos/recent-items/RecentItemsSection";
import StockInfoCard from "../components/pos/stock-info/StockInfoCard";
import BillSummaryPanel from "../components/pos/summary/BillSummaryPanel";
import useBillingPOS from "../hooks/useBillingPOS";

function BillingPOSPage() {
  const {
    invoiceMeta,
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
      <InvoiceHeader invoiceNumber={invoiceMeta.invoiceNumber} />

      <div className="flex-1 p-2 sm:p-2.5">
        <div className="space-y-2.5">
          <CustomerInfoSection
            customerForm={customerForm}
            onFieldChange={updateCustomerField}
          />

          <div className="grid items-start gap-2.5 2xl:grid-cols-[minmax(0,1.98fr)_320px]">
            <div className="min-w-0 space-y-2.5">
              <BillingTableSection
                rows={rows}
                formatCurrency={formatCurrency}
                calculateRowAmount={calculateRowAmount}
                onUpdateRow={updateRowField}
                onRemoveRow={removeRow}
                onAddItem={addBlankRow}
                onClearAll={clearAllRows}
              />

              <div className="grid gap-2.5 xl:grid-cols-3">
                <RecentItemsSection
                  items={recentItems}
                  formatCurrency={formatCurrency}
                  onReAdd={addRecentItem}
                />
                <CustomerDetailsCard customer={customerSnapshot} />
                <StockInfoCard stock={stockSnapshot} />
              </div>
            </div>

            <aside className="grid gap-2 content-start">
              <BillSummaryPanel
                summary={summary}
                formatCurrency={formatCurrency}
              />

              <PaymentSection
                paymentMode={paymentMode}
                amountReceived={amountReceived}
                balanceReturn={balanceReturn}
                formatCurrency={formatCurrency}
                onPaymentModeChange={setPaymentMode}
                onAmountReceivedChange={setAmountReceived}
              />

              <QuickActionsSection />
            </aside>
          </div>
        </div>
      </div>

      <FooterStatusBar
        totalItems={summary.itemsCount}
        totalQuantity={summary.totalQuantity}
        statuses={footerStatuses}
      />
    </div>
  );
}

export default BillingPOSPage;
