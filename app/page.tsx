// app/page.tsx
export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold">Home</h1>
        <p className="mt-1 text-sm text-neutral-600">
          Minimal homepage with links.
        </p>

        <div className="mt-6 flex gap-3">
          <a
            href="/login"
            className="inline-flex h-11 flex-1 items-center justify-center rounded-xl bg-neutral-900 text-sm font-medium text-white hover:bg-neutral-800"
          >
            Go to Login
          </a>
          <a
            href="/signup"
            className="inline-flex h-11 flex-1 items-center justify-center rounded-xl border border-neutral-200 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
          >
            Go to Sign Up
          </a>
        </div>
      </div>
    </main>
  );
}
