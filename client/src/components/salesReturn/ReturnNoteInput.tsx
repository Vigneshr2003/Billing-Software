function ReturnNoteInput() {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <label className="mb-2 block text-xs font-medium text-slate-500">
                Return Note (Optional)
            </label>

            <textarea
                rows={3}
                placeholder="Enter return note..."
                className="w-full rounded-lg border border-slate-200 p-3 text-xs outline-none focus:border-blue-500 resize-none"
            />
        </div>
    );
}

export default ReturnNoteInput;
