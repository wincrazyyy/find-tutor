// app/_components/hero.tsx
export function Hero() {
  return (
    <div>
      <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-[#050B1E]">
        For students
      </div>

      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#050B1E]">
        Find a tutor. Learn with confidence.
      </h1>

      <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600">
        Browse tutors by subject, level, and availability. Premium, curated
        teaching — for students who want high-quality support.
      </p>
    </div>
  );
}
