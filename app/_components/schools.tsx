// app/_components/schools.tsx
export function Schools() {
  const schools = [
    "School Name A",
    "School Name B",
    "School Name C",
    "School Name D",
    "School Name E",
    "School Name F",
    "School Name G",
    "School Name H",
    "School Name I",
    "School Name J",
    "School Name K",
  ];

  return (
    <div className="mt-10 border-t border-neutral-200 pt-10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-[#050B1E]">
            Tutors from top schools
          </h2>
          <p className="mt-1 text-sm text-neutral-600">
            A quick look at where our tutors teach or graduated from.
          </p>
        </div>
        <a href="#" className="text-sm text-[#050B1E] hover:underline">
          View all
        </a>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {schools.map((name) => (
          <div
            key={name}
            className="flex h-14 items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4"
          >
            {/* Placeholder rectangular logo image (logo+name would be 1 image later) */}
            <div className="h-8 w-24 rounded-xl bg-violet-200 ring-1 ring-[#050B1E]/10" />
            <div className="text-sm font-medium text-[#050B1E]">{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
