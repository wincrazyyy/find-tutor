import type { Tutor } from "../page";

export function Highlights({ tutor }: { tutor: Tutor }) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
      <h2 className="text-lg font-semibold text-[#050B1E]">Highlights</h2>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {tutor.highlights.map((h) => (
          <div
            key={h.k}
            className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6"
          >
            <div className="text-xs text-neutral-500">{h.k}</div>
            <div className="mt-1 text-sm font-semibold text-[#050B1E]">
              {h.v}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
