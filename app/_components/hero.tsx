// app/_components/hero.tsx
export function Hero() {
  return (
    <div className="relative -mx-6 overflow-hidden border-b border-neutral-200 bg-white px-6 py-10 sm:py-12">
      {/* full-width background accents */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-violet-100/60 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(124,58,237,0.06),transparent_45%)]" />

      {/* content stays aligned to page container */}
      <div className="relative mx-auto w-full max-w-5xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-[#050B1E]">
          Curated tutors for students who expect premium outcomes
        </div>

        {/* Brand name (keep size) */}
        <div className="mt-4 text-2xl font-semibold tracking-tight text-[#050B1E]">
          Find Tutor: Quality tutoring made easy
        </div>

        {/* Value proposition */}
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#050B1E] sm:text-5xl">
          Premium private tutoring,{" "}
          <span className="relative inline-block">
            <span className="relative z-10">tailored for you</span>
            <span className="absolute -inset-x-1 bottom-2 z-0 h-3 rounded-full bg-violet-200/60" />
          </span>
          .
        </h1>

        {/* Hook / description */}
        <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-600">
          Curated tutors. Clear lesson plans. Consistent progress — for students
          who want high-quality support and real results.
        </p>

        {/* Quick proof line */}
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
    </div>
  );
}
