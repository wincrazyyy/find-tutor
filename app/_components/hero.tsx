// app/_components/hero.tsx
export function Hero() {
  return (
    <div>
      <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-[#050B1E]">
        Curated tutors for students who expect premium outcomes
      </div>

      <div className="mt-4 text-2xl font-semibold tracking-tight text-[#050B1E]">
        Find Tutor: Quality tutoring made easy
      </div>

      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#050B1E] sm:text-5xl">
        Premium private tutoring,{" "}
        <span className="underline decoration-violet-200 decoration-4 underline-offset-4">
          tailored for you
        </span>
        .
      </h1>

      <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-600">
        Curated tutors. Clear lesson plans. Consistent progress — for students
        who want high-quality support and real results.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        <span className="rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs font-medium text-neutral-700 backdrop-blur">
          Curated profiles
        </span>
        <span className="rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs font-medium text-neutral-700 backdrop-blur">
          Premium standards
        </span>
        <span className="rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs font-medium text-neutral-700 backdrop-blur">
          Online & in-person
        </span>
      </div>
    </div>
  );
}
