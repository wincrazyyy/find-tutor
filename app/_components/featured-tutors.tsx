// app/_components/featured-tutors.tsx
import Link from "next/link";

export function FeaturedTutors() {
  return (
    <div className="mt-4">
      <div className="flex items-end justify-between gap-4">
        <h1 className="text-2xl font-semibold text-[#050B1E]">Featured tutors</h1>
        <a href="#" className="text-sm text-[#050B1E] hover:underline">
          View all
        </a>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded-3xl border border-neutral-200 bg-white p-6"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-violet-200 ring-1 ring-[#050B1E]/10" />
              <div>
                <div className="text-sm font-semibold text-[#050B1E]">
                  Tutor Name {i}
                </div>
                <div className="text-xs text-neutral-500">Subject • Level</div>
              </div>
            </div>

            <p className="mt-3 text-sm text-neutral-600">
              Short bio goes here. Calm, structured teaching with clear feedback.
            </p>

            <div className="mt-4 flex items-center gap-2">
              <span className="rounded-full border border-violet-200 bg-violet-50 px-2.5 py-1 text-xs font-medium text-[#050B1E]">
                Online
              </span>
              <span className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-700">
                4.9 ★
              </span>
            </div>

            <Link
              href={`/tutors/${i}`}
              className="mt-5 inline-flex h-10 w-full items-center justify-center rounded-2xl bg-[#050B1E] text-sm font-medium text-white hover:bg-[#07102D]"
            >
              View profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
