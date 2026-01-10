import type { Tutor } from "../page";

export function About({ tutor }: { tutor: Tutor }) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
      <h2 className="text-lg font-semibold text-[#050B1E]">About</h2>
      <p className="mt-3 text-sm leading-6 text-neutral-600">{tutor.about}</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
          <div className="text-xs text-neutral-500">Subjects</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {tutor.subjects.map((s) => (
              <span
                key={s}
                className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-[#050B1E]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
          <div className="text-xs text-neutral-500">Levels</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {tutor.levels.map((l) => (
              <span
                key={l}
                className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
