import type { Tutor } from "../page";

function VerifiedBadge({ verified }: { verified: boolean }) {
  // Always render; invisible when not verified to keep spacing identical
  return (
    <span
      className={[
        "inline-flex h-7 items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50 px-2.5 text-xs font-medium text-[#050B1E]",
        verified ? "" : "invisible",
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
  );
}

export function ProfileHeader({ tutor }: { tutor: Tutor }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
      {/* subtle background accent */}
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
            <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-2 border-white bg-violet-200" />
          </div>

          <div className="min-w-0">
            <div className="text-xs text-neutral-500">Tutor profile</div>

            {/* fixed height row so layout doesn't jump */}
            <div className="mt-1 flex min-h-9 flex-wrap items-center gap-2">
              <h1 className="truncate text-3xl font-semibold tracking-tight text-[#050B1E]">
                {tutor.name}
              </h1>
              <VerifiedBadge verified={tutor.verified} />
            </div>

            <div className="mt-1 text-sm text-neutral-600">{tutor.title}</div>

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
  );
}
