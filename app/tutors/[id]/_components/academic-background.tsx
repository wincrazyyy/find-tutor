import type { Tutor } from "../page";

export function AcademicBackground({ tutor }: { tutor: Tutor }) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
      <h2 className="text-lg font-semibold text-[#050B1E]">
        Academic background
      </h2>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
          <div className="text-xs text-neutral-500">Education</div>
          <div className="mt-1 text-sm font-semibold text-[#050B1E]">
            {tutor.academic.school}
          </div>
          <div className="mt-2 text-sm text-neutral-600">
            {tutor.academic.degree} • {tutor.academic.graduation}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tutor.academic.credentials.map((c) => (
              <span
                key={c}
                className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-[#050B1E]"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
          <div className="text-xs text-neutral-500">Awards</div>
          <ul className="mt-3 space-y-2 text-sm text-neutral-600">
            {tutor.academic.awards.map((a) => (
              <li key={a}>• {a}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
