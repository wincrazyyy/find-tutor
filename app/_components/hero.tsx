// app/_components/hero.tsx
export function Hero() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm sm:p-8">
      {/* subtle background accents (same theme colors) */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-violet-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-violet-100/60 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(124,58,237,0.06),transparent_40%)]" />

      <div className="relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-[#050B1E]">
          Curated tutors for students who expect premium outcomes
        </div>

        {/* Brand name (keep size) */}
        <div className="mt-4 text-2xl font-semibold tracking-tight text-[#050B1E]">
          Find Tutor: Quality tutoring made easy
        </div>

        {/* Value proposition */}
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#050B1E]">
          Premium private tutoring,{" "}
          <span className="relative inline-block">
            <span className="relative z-10">tailored for you</span>
            <span className="absolute -inset-x-1 bottom-1 z-0 h-3 rounded-full bg-violet-200/60" />
          </span>
          .
        </h1>

        {/* Hook / description */}
        <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600">
          Curated tutors. Clear lesson plans. Consistent progress — for students
          who want high-quality support and real results.
        </p>

        {/* Optional quick proof line (still minimal) */}
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700">
            Curated profiles
          </span>
          <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700">
            Premium standards
          </span>
          <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700">
            Online & in-person
          </span>
        </div>
      </div>
    </div>
  );
}
