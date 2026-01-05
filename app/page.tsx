// app/page.tsx
export default function Page() {
  return (
    <main className="min-h-screen p-6 flex items-center justify-center bg-gradient-to-b from-emerald-50 via-white to-white">
      <div className="w-full max-w-sm rounded-3xl border border-emerald-200 bg-white p-7 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-emerald-200" />
          <h1 className="text-2xl font-semibold text-neutral-900">
            Teacher Portal
          </h1>
        </div>

        <div className="mt-6 grid gap-3">
          <a
            href="/login"
            className="inline-flex h-12 items-center justify-center rounded-2xl bg-emerald-600 text-sm font-medium text-white hover:bg-emerald-500"
          >
            Log in
          </a>
          <a
            href="/signup"
            className="inline-flex h-12 items-center justify-center rounded-2xl border border-emerald-200 text-sm font-medium text-emerald-900 hover:bg-emerald-50"
          >
            Sign up
          </a>
        </div>
      </div>
    </main>
  );
}
