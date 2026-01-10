export function BookingCard({ availability }: { availability: string[] }) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm">
      <div className="text-xs text-neutral-500">From</div>
      <div className="mt-1 text-2xl font-semibold text-[#050B1E]">
        HKD $500 <span className="text-sm font-medium">/ hour</span>
      </div>

      <div className="mt-5 grid gap-3">
        <button
          type="button"
          className="h-12 rounded-2xl bg-[#050B1E] text-sm font-medium text-white hover:bg-[#07102D]"
        >
          Request a lesson
        </button>
        <button
          type="button"
          className="h-12 rounded-2xl border border-violet-200 bg-violet-50 text-sm font-medium text-[#050B1E] hover:bg-violet-100"
        >
          Send a message
        </button>
      </div>

      <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
        <div className="text-xs text-neutral-500">Availability</div>
        <div className="mt-2 flex flex-wrap gap-2">
          {availability.map((a) => (
            <span
              key={a}
              className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700"
            >
              {a}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
