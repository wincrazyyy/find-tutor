// app/page.tsx
import Link from "next/link";

export default function Page() {
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
    <main className="min-h-screen bg-white">
      <section className="mx-auto w-full max-w-5xl px-6 py-10">
        <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
          {/* Top: title + search */}
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

          {/* Search bar */}
          <div className="mt-7 grid gap-3 sm:grid-cols-[1fr_auto]">
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

          {/* Featured tutors */}
          <div className="mt-10">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-lg font-semibold text-[#050B1E]">
                Featured tutors
              </h2>
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
                      <div className="text-xs text-neutral-500">
                        Subject • Level
                      </div>
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-neutral-600">
                    Short bio goes here. Calm, structured teaching with clear
                    feedback.
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

          {/* CTA (teachers) */}
          <div className="mt-10 rounded-3xl border border-violet-200 bg-violet-50 p-6">
            <div className="text-xs font-medium text-[#050B1E]">For teachers</div>
            <div className="mt-1 text-lg font-semibold text-[#050B1E]">
              Teach on a premium marketplace
            </div>
            <p className="mt-2 text-sm text-neutral-600">
              Create a profile, list subjects, and connect with students who
              value high-quality tutoring.
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
        </div>
      </section>
    </main>
  );
}
