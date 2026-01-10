import type { Tutor } from "../page";

export function Stats({ tutor }: { tutor: Tutor }) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
      <div>
        <h2 className="text-lg font-semibold text-[#050B1E]">Stats</h2>
        <p className="mt-1 text-sm text-neutral-600">
          Quick signals of experience and reliability.
        </p>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tutor.stats.map((s) => (
          <div
            key={s.k}
            className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6"
          >
            <div className="text-xs text-neutral-500">{s.k}</div>
            <div className="mt-2 text-2xl font-semibold tracking-tight text-[#050B1E]">
              {s.v}
            </div>
            <div className="mt-3 h-1 w-14 rounded-full bg-violet-200" />
          </div>
        ))}
      </div>

      <div className="mt-4 text-xs text-neutral-500">
        Stats shown are placeholders — replace with real metrics when you connect
        your database.
      </div>
    </div>
  );
}
