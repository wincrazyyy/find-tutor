import type { Review } from "../page";

export function Reviews({ reviews }: { reviews: Review[] }) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-[#050B1E]">Reviews</h2>
          <p className="mt-1 text-sm text-neutral-600">
            Past students share their experience.
          </p>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            className="inline-flex h-10 items-center justify-center rounded-xl border border-neutral-200 bg-white px-4 text-sm font-medium text-[#050B1E] hover:bg-neutral-50"
          >
            View all
          </button>
          <button
            type="button"
            className="inline-flex h-10 items-center justify-center rounded-xl bg-[#050B1E] px-4 text-sm font-medium text-white hover:bg-[#07102D]"
          >
            Leave a review
          </button>
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {reviews.map((r) => (
          <div
            key={r.name}
            className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6"
          >
            <div className="text-sm font-semibold text-[#050B1E]">{r.name}</div>
            <p className="mt-2 text-sm leading-6 text-neutral-600">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
