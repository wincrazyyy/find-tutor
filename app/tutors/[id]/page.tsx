// app/tutors/[id]/page.tsx
export default function TutorProfilePage() {
  // UI-only placeholder data
  const tutor = {
    name: "Alex Chen",
    title: "Math • Physics Tutor",
    rating: "4.9 ★",
    lessons: "320+ lessons",
    location: "Online • GMT",
    headline: "Calm, structured teaching with clear feedback.",
    about:
      "I help students build strong fundamentals, then move into exam-style questions with a clear method. Lessons are paced, focused, and practical.",
    subjects: ["Math", "Physics", "Exam Prep"],
    levels: ["Middle School", "IGCSE", "A-Level"],
    availability: ["Weekdays (Evening)", "Sat (Morning)"],
    highlights: [
      { k: "Teaching style", v: "Step-by-step, concept-first" },
      { k: "Lesson format", v: "Online (Zoom/Meet)" },
      { k: "Homework", v: "Optional practice set" },
      { k: "Languages", v: "English, 中文" },
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
            <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-3xl bg-violet-200 ring-1 ring-[#050B1E]/10" />
                  <div>
                    <div className="text-xs text-neutral-500">Tutor profile</div>
                    <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#050B1E]">
                      {tutor.name}
                    </h1>
                    <div className="mt-2 text-sm text-neutral-600">
                      {tutor.title}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full border border-violet-200 bg-violet-50 px-2.5 py-1 text-xs font-medium text-[#050B1E]">
                        {tutor.rating}
                      </span>
                      <span className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-700">
                        {tutor.lessons}
                      </span>
                      <span className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-700">
                        {tutor.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    className="inline-flex h-10 items-center justify-center rounded-xl border border-neutral-200 bg-white px-4 text-sm font-medium text-[#050B1E] hover:bg-neutral-50"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="inline-flex h-10 items-center justify-center rounded-xl bg-[#050B1E] px-4 text-sm font-medium text-white hover:bg-[#07102D]"
                  >
                    Find tutor
                  </button>
                </div>
              </div>

              <p className="mt-6 text-sm leading-6 text-neutral-600">
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

            {/* Reviews */}
            <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
              <div className="flex items-end justify-between gap-4">
                <h2 className="text-lg font-semibold text-[#050B1E]">Reviews</h2>
                <button
                  type="button"
                  className="text-sm text-[#050B1E] hover:underline"
                >
                  View all
                </button>
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
