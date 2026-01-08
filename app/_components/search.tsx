// app/_components/search.tsx
export function Search() {
  const subjects = [
    "Math",
    "English",
    "Science",
    "Languages",
    "Coding",
    "Exam Prep",
    "Music",
    "Economics",
  ];

  return (
    <div className="mt-7">
      {/* Search bar */}
      <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
        <div className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3">
          <div className="h-9 w-9 rounded-xl bg-violet-200 ring-1 ring-[#050B1E]/10" />
          <div className="w-full">
            <div className="text-xs text-neutral-500">Search tutors</div>
            <input
              placeholder="Try: Math, IELTS, Chemistry..."
              className="mt-1 w-full bg-transparent text-sm text-[#050B1E] outline-none placeholder:text-neutral-400"
            />
          </div>
        </div>

        <button
          type="button"
          className="h-14 rounded-2xl bg-[#050B1E] px-6 text-sm font-medium text-white hover:bg-[#07102D]"
        >
          Search
        </button>
      </div>

      {/* Popular subjects */}
      <div className="mt-4 flex flex-wrap gap-2">
        {subjects.map((s) => (
          <button
            key={s}
            type="button"
            className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-[#050B1E] hover:bg-violet-100"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
