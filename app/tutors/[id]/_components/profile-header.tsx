import Image from "next/image";
import type { Tutor } from "../page";

function VerifiedBadge({ verified }: { verified: boolean }) {
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
        <svg viewBox="0 0 20 20" fill="none" className="h-3 w-3">
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

function DefaultAvatarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-9 w-9 text-[#050B1E]/70"
      aria-hidden="true"
    >
      <path
        d="M12 12.25c2.5 0 4.5-2.06 4.5-4.6S14.5 3.05 12 3.05 7.5 5.1 7.5 7.65s2 4.6 4.5 4.6Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 20.95c1.5-3.5 4.2-5.2 7.5-5.2s6 1.7 7.5 5.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Avatar({ src, name }: { src?: string; name: string }) {
  return (
    // outer wrapper: allows the corner dot to overflow without clipping
    <div className="relative h-32 w-32 shrink-0 overflow-visible">
      {/* inner square: clips the image */}
      <div className="relative h-full w-full overflow-hidden rounded-3xl bg-violet-200 ring-1 ring-[#050B1E]/10">
        {/* default icon always visible underneath */}
        <div className="absolute inset-0 flex items-center justify-center">
          <DefaultAvatarIcon />
        </div>

        {/* image overlays the icon when present */}
        {src ? (
          <Image
            src={src}
            alt={name}
            fill
            sizes="112px"
            className="object-cover"
            priority={false}
          />
        ) : null}
      </div>

      {/* corner dot: now not clipped */}
      <div className="absolute -bottom-2 -right-2 h-7 w-7 rounded-full border-2 border-white bg-violet-200" />
    </div>
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

      <div className="relative flex items-start gap-6">
        <Avatar src={tutor.imageSrc} name={tutor.name} />

        {/* This ensures the left text block is the SAME height as the avatar */}
        <div className="min-w-0 min-h-32 flex flex-col justify-center">
          <div className="text-xs text-neutral-500">Tutor profile</div>

          <div className="mt-1 flex min-h-10 flex-wrap items-center gap-2">
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
          </div>
        </div>
      </div>
    </div>
  );
}
