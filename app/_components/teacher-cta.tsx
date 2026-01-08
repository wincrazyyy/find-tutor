// app/_components/teacher-cta.tsx
export function TeacherCTA() {
  return (
    <div className="mt-10 rounded-3xl border border-violet-200 bg-violet-50 p-6">
      <div className="text-xs font-medium text-[#050B1E]">For teachers</div>
      <div className="mt-1 text-lg font-semibold text-[#050B1E]">
        Teach on a premium marketplace
      </div>
      <p className="mt-2 text-sm text-neutral-600">
        Create a profile, list subjects, and connect with students who value
        high-quality tutoring.
      </p>

      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <a
          href="/signup"
          className="inline-flex h-10 items-center justify-center rounded-xl bg-[#050B1E] px-4 text-sm font-medium text-white hover:bg-[#07102D]"
        >
          Teacher sign up
        </a>
        <a
          href="/login"
          className="inline-flex h-10 items-center justify-center rounded-xl border border-violet-200 bg-white px-4 text-sm font-medium text-[#050B1E] hover:bg-violet-100"
        >
          Teacher log in
        </a>
      </div>
    </div>
  );
}
