// app/tutors/[id]/page.tsx
export default function TutorProfilePage() {
  // UI-only placeholder data
  const tutor = {
    verified: true, // <-- admin-controlled flag later
    name: "Alex Chen",
    title: "Math • Physics Tutor",
    rating: "4.9 ★",
    hours: "320+ hours taught",
    location: "Online • GMT",
    headline: "Calm, structured teaching with clear feedback.",
    about:
      "I help students build strong fundamentals, then move into exam-style questions with a clear method. Lessons are paced, focused, and practical.",
    subjects: ["Math", "Physics", "Exam Prep"],
    levels: ["Middle School", "IGCSE", "A-Level"],
    availability: ["Weekdays (Evening)", "Sat (Morning)"],
    academic: {
      school: "University of Example",
      degree: "BSc in Mathematics",
      graduation: "2019",
      credentials: ["PGCE (Secondary)", "DBS checked (UK)", "Verified profile"],
      awards: ["Dean’s List (2017–2019)", "National Math Olympiad (Finalist)"],
    },
    highlights: [
      { k: "Teaching style", v: "Step-by-step, concept-first" },
      { k: "Lesson format", v: "Online (Zoom/Meet)" },
      { k: "Homework", v: "Optional practice set" },
      { k: "Languages", v: "English, 中文" },
    ],
    stats: [
      { k: "Students taught", v: "180+" },
      { k: "Total hours", v: "320+" },
      { k: "Repeat bookings", v: "68%" },
      { k: "Response time", v: "< 2 hours" },
    ],
  };

  const reviews = [
    {
      name: "Student A",
      text: "Explains concepts clearly and gives great practice questions.",
    },
    {
      name: "Student B",
      text: "Very patient and organised. Helped me improve my confidence.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto w-full max-w-5xl px-6 py-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          {/* Main */}
          <div className="space-y-6">
            {/* Header card */}
            <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
              {/* subtle background accent (premium feel, still on-theme) */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl" />
                <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-violet-100/50 blur-3xl" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(124,58,237,0.06),transparent_55%)]" />
              </div>

              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  {/* avatar */}
                  <div className="relative">
                    <div className="h-14 w-14 rounded-3xl bg-violet-200 ring-1 ring-[#050B1E]/10" />
                    {/* tiny status dot (optional) */}
                    <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-2 border-white bg-violet-200" />
                  </div>

                  <div className="min-w-0">
                    <div className="text-xs text-neutral-500">Tutor profile</div>

                    {/* Name row (fixed height so layout doesn't jump) */}
                    <div className="mt-1 flex min-h-9 flex-wrap items-center gap-2">
                      <h1 className="truncate text-3xl font-semibold tracking-tight text-[#050B1E]">
                        {tutor.name}
                      </h1>

                      {/* Always render badge; invisible when not verified to keep spacing */}
                      <span
                        className={[
                          "inline-flex h-7 items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50 px-2.5 text-xs font-medium text-[#050B1E]",
                          tutor.verified ? "" : "invisible",
                        ].join(" ")}
                      >
                        <span
                          aria-hidden="true"
                          className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#050B1E] text-white"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            className="h-3 w-3"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.667 5.833 8.333 14.167 3.333 9.167"
                              stroke="currentColor"
                              strokeWidth="2.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        Verified
                      </span>
                    </div>

                    <div className="mt-1 text-sm text-neutral-600">{tutor.title}</div>

                    {/* chips */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full border border-violet-200 bg-violet-50 px-2.5 py-1 text-xs font-medium text-[#050B1E]">
                        <span aria-hidden="true">★</span> {tutor.rating}
                      </span>
                      <span className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-700">
                        {tutor.hours}
                      </span>
                      <span className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-700">
                        {tutor.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* actions */}
                <div className="flex shrink-0 gap-2">
                  <button
                    type="button"
                    className="inline-flex h-10 items-center justify-center rounded-xl border border-neutral-200 bg-white px-4 text-sm font-medium text-[#050B1E] hover:bg-neutral-50"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="inline-flex h-10 items-center justify-center rounded-xl bg-[#050B1E] px-4 text-sm font-medium text-white shadow-sm hover:bg-[#07102D]"
                  >
                    Find tutor
                  </button>
                </div>
              </div>

              <p className="relative mt-6 text-sm leading-6 text-neutral-600">
                {tutor.headline}
              </p>
            </div>


            {/* About */}
            <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
              <h2 className="text-lg font-semibold text-[#050B1E]">About</h2>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                {tutor.about}
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
                  <div className="text-xs text-neutral-500">Subjects</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {tutor.subjects.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-[#050B1E]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
                  <div className="text-xs text-neutral-500">Levels</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {tutor.levels.map((l) => (
                      <span
                        key={l}
                        className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700"
                      >
                        {l}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Background */}
            <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
              <h2 className="text-lg font-semibold text-[#050B1E]">
                Academic background
              </h2>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
                  <div className="text-xs text-neutral-500">Education</div>
                  <div className="mt-1 text-sm font-semibold text-[#050B1E]">
                    {tutor.academic.school}
                  </div>
                  <div className="mt-2 text-sm text-neutral-600">
                    {tutor.academic.degree} • {tutor.academic.graduation}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {tutor.academic.credentials.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-[#050B1E]"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
                  <div className="text-xs text-neutral-500">Awards</div>
                  <ul className="mt-3 space-y-2 text-sm text-neutral-600">
                    {tutor.academic.awards.map((a) => (
                      <li key={a}>• {a}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
              <h2 className="text-lg font-semibold text-[#050B1E]">
                Highlights
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {tutor.highlights.map((h) => (
                  <div
                    key={h.k}
                    className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6"
                  >
                    <div className="text-xs text-neutral-500">{h.k}</div>
                    <div className="mt-1 text-sm font-semibold text-[#050B1E]">
                      {h.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-[#050B1E]">Stats</h2>
                  <p className="mt-1 text-sm text-neutral-600">
                    Quick signals of experience and reliability.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {tutor.stats.map((s) => (
                  <div
                    key={s.k}
                    className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6"
                  >
                    <div className="text-xs text-neutral-500">{s.k}</div>
                    <div className="mt-2 text-2xl font-semibold tracking-tight text-[#050B1E]">
                      {s.v}
                    </div>
                    <div className="mt-3 h-1 w-14 rounded-full bg-violet-200" />
                  </div>
                ))}
              </div>

              <div className="mt-4 text-xs text-neutral-500">
                Stats shown are placeholders — replace with real metrics when
                you connect your database.
              </div>
            </div>

            {/* Reviews */}
            <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-[#050B1E]">
                    Reviews
                  </h2>
                  <p className="mt-1 text-sm text-neutral-600">
                    Past students share their experience.
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    className="inline-flex h-10 items-center justify-center rounded-xl border border-neutral-200 bg-white px-4 text-sm font-medium text-[#050B1E] hover:bg-neutral-50"
                  >
                    View all
                  </button>
                  <button
                    type="button"
                    className="inline-flex h-10 items-center justify-center rounded-xl bg-[#050B1E] px-4 text-sm font-medium text-white hover:bg-[#07102D]"
                  >
                    Leave a review
                  </button>
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {reviews.map((r) => (
                  <div
                    key={r.name}
                    className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6"
                  >
                    <div className="text-sm font-semibold text-[#050B1E]">
                      {r.name}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-neutral-600">
                      {r.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Booking card */}
            <div className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm">
              <div className="text-xs text-neutral-500">From</div>
              <div className="mt-1 text-2xl font-semibold text-[#050B1E]">
                HKD $500 <span className="text-sm font-medium">/ hour</span>
              </div>

              <div className="mt-5 grid gap-3">
                <button
                  type="button"
                  className="h-12 rounded-2xl bg-[#050B1E] text-sm font-medium text-white hover:bg-[#07102D]"
                >
                  Request a lesson
                </button>
                <button
                  type="button"
                  className="h-12 rounded-2xl border border-violet-200 bg-violet-50 text-sm font-medium text-[#050B1E] hover:bg-violet-100"
                >
                  Send a message
                </button>
              </div>

              <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                <div className="text-xs text-neutral-500">Availability</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {tutor.availability.map((a) => (
                    <span
                      key={a}
                      className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Safety / trust note */}
            <div className="rounded-3xl border border-violet-200 bg-violet-50 p-7">
              <div className="text-xs font-medium text-[#050B1E]">
                Tips for students
              </div>
              <ul className="mt-3 space-y-2 text-sm text-neutral-600">
                <li>• Share your goal (exam, topic, grade target).</li>
                <li>• Ask for a short plan for the next 2–4 weeks.</li>
                <li>• Bring 1–2 examples of questions you struggled with.</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
