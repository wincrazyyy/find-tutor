// app/page.tsx
export default function Page() {
  return (
    <main className="min-h-screen p-6 flex items-center justify-center bg-white">
      <div className="w-full max-w-sm rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm">
        <div className="flex items-center gap-3">
          {/* Accent block */}
          <div className="h-10 w-10 rounded-2xl bg-violet-200 ring-1 ring-[#050B1E]/10" />
          <h1 className="text-2xl font-semibold text-[#050B1E]">
            Teacher Portal
          </h1>
        </div>

        {/* Subtle dark-blue accent line */}
        <div className="mt-5 h-1 w-full rounded-full bg-[#050B1E] opacity-10" />

        <div className="mt-6 grid gap-3">
          <a
            href="/login"
            className="inline-flex h-12 items-center justify-center rounded-2xl bg-[#050B1E] text-sm font-medium text-white hover:bg-[#07102D]"
          >
            Log in
          </a>
          <a
            href="/signup"
            className="inline-flex h-12 items-center justify-center rounded-2xl border border-violet-200 bg-violet-50 text-sm font-medium text-[#050B1E] hover:bg-violet-100"
          >
            Sign up
          </a>
        </div>
      </div>
    </main>
  );
}
