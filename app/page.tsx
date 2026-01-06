// app/page.tsx
import { Nav } from "./_components/layout/nav";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />

      {/* Student-facing content */}
      <section className="mx-auto w-full max-w-5xl px-6 py-10">
        <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-[#050B1E]">
            For students
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#050B1E]">
            Find a tutor. Learn with confidence.
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600">
            Browse tutors by subject, level, and availability. Book sessions and
            track progress — all in one place.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
              <div className="text-xs text-neutral-500">Search</div>
              <div className="mt-1 text-sm font-semibold text-[#050B1E]">
                Find the right tutor
              </div>
              <p className="mt-2 text-sm text-neutral-600">
                Filter by subject, year group, and style.
              </p>
            </div>
            <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
              <div className="text-xs text-neutral-500">Book</div>
              <div className="mt-1 text-sm font-semibold text-[#050B1E]">
                Schedule lessons easily
              </div>
              <p className="mt-2 text-sm text-neutral-600">
                Choose a time that fits your week.
              </p>
            </div>
            <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
              <div className="text-xs text-neutral-500">Improve</div>
              <div className="mt-1 text-sm font-semibold text-[#050B1E]">
                Track your progress
              </div>
              <p className="mt-2 text-sm text-neutral-600">
                Stay consistent with clear goals.
              </p>
            </div>
          </div>

          {/* Placeholder tutor list (student-facing) */}
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

                  <button
                    type="button"
                    className="mt-5 inline-flex h-10 w-full items-center justify-center rounded-2xl bg-[#050B1E] text-sm font-medium text-white hover:bg-[#07102D]"
                  >
                    View profile
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200">
        <div className="mx-auto w-full max-w-5xl px-6 py-6 text-xs text-neutral-500">
          © {new Date().getFullYear()} Tutor Marketplace
        </div>
      </footer>
    </main>
  );
}
