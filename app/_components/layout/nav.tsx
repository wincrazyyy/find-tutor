// app/_components/layout/nav.tsx
import Image from "next/image";

export function Nav() {
  return (
    <header className="border-b border-neutral-200">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-3">
          <Image
            src="/logo-square.png"
            alt="Find Tutor"
            width={36}
            height={36}
            className="rounded-2xl ring-1 ring-[#050B1E]/10"
            priority
          />
          <div className="text-sm font-semibold text-[#050B1E]">Find Tutor</div>
        </a>

        <nav className="flex items-center gap-2">
          <a
            href="/login"
            className="inline-flex h-10 items-center justify-center rounded-xl bg-[#050B1E] px-4 text-sm font-medium text-white hover:bg-[#07102D]"
          >
            Teacher log in
          </a>
          <a
            href="/signup"
            className="inline-flex h-10 items-center justify-center rounded-xl border border-violet-200 bg-violet-50 px-4 text-sm font-medium text-[#050B1E] hover:bg-violet-100"
          >
            Teacher sign up
          </a>
        </nav>
      </div>
    </header>
  );
}
