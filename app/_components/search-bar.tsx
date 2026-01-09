// app/_components/search-bar.tsx
type SearchBarProps = {
  variant?: "full" | "nav";
};

export function SearchBar({ variant = "full" }: SearchBarProps) {
  const isNav = variant === "nav";

  return (
    <div
      className={[
        "grid gap-2",
        isNav ? "grid-cols-1" : "sm:grid-cols-[1fr_auto]",
      ].join(" ")}
    >
      <div
        className={[
          "flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4",
          isNav ? "py-2" : "py-3",
        ].join(" ")}
      >
        <div className="h-9 w-9 rounded-xl bg-violet-200 ring-1 ring-[#050B1E]/10" />
        <div className="w-full">
          <div className="text-xs text-neutral-500">Search tutors</div>
          <input
            placeholder="Try: Math, IELTS, Chemistry..."
            className="mt-1 w-full bg-transparent text-sm text-[#050B1E] outline-none placeholder:text-neutral-400"
          />
        </div>
      </div>

      {!isNav && (
        <button
          type="button"
          className="h-14 rounded-2xl bg-[#050B1E] px-6 text-sm font-medium text-white hover:bg-[#07102D]"
        >
          Search
        </button>
      )}
    </div>
  );
}
