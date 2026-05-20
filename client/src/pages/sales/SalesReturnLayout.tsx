import ReturnHeaderForm from "../../components/salesReturn/ReturnHeaderForm";
import ReturnCustomerInfo from "../../components/salesReturn/ReturnCustomerInfo";
import ReturnItemsTable from "../../components/salesReturn/ReturnItemsTable";
import ReturnSummaryPanel from "../../components/salesReturn/ReturnSummaryPanel";
import ReturnNoteInput from "../../components/salesReturn/ReturnNoteInput";
import ReturnActionBar from "../../components/salesReturn/ReturnActionBar";
import SalesreturnShortcutButton from "../../components/salesReturn/SalesreturnShortcutButton.tsx";

function SalesReturn() {
    return (
        <div className="flex min-h-full flex-col gap-3 p-2 sm:p-4">

            {/* Action Buttons */}
            <SalesreturnShortcutButton />

            {/* Top header — Return No, Date, Type, Reason, Reference Invoice */}
            <ReturnHeaderForm />

            {/* Customer info strip */}
            <ReturnCustomerInfo />

            {/* Main content — item table (left) + summary panel (right) */}
            <div className="flex flex-col gap-4 xl:grid xl:gap-4" style={{ gridTemplateColumns: "minmax(0,1fr) 320px" }}>

                {/* Left — return items table + return note */}
                <div className="flex min-w-0 flex-col gap-3 overflow-hidden">
                    <ReturnItemsTable />
                    <ReturnNoteInput />
                </div>

                {/* Right — return summary + refund */}
                <div>
                    <ReturnSummaryPanel />
                </div>

            </div>

            {/* Action buttons + shortcuts bar — full width */}
            <ReturnActionBar />

        </div>
    );
}

export default SalesReturn;