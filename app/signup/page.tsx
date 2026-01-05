// app/signup/page.tsx
export default function SignupPage() {
  return (
    <main className="min-h-screen p-6 flex items-center justify-center bg-linear-to-b from-emerald-50 via-white to-white">
      <div className="w-full max-w-sm rounded-3xl border border-emerald-200 bg-white p-7 shadow-sm">
        <h1 className="text-2xl font-semibold text-neutral-900">Sign up</h1>
        <p className="mt-2 text-sm text-neutral-600">Teacher Portal</p>

        <form className="mt-6 grid gap-4">
          <div className="grid gap-1">
            <label htmlFor="name" className="text-sm font-medium text-neutral-900">
              Full name
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              placeholder="e.g. Winson Siu"
              className="h-12 w-full rounded-2xl border border-emerald-200 px-4 outline-none focus:border-emerald-400"
            />
          </div>

          <div className="grid gap-1">
            <label htmlFor="email" className="text-sm font-medium text-neutral-900">
              Work email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@email.com"
              className="h-12 w-full rounded-2xl border border-emerald-200 px-4 outline-none focus:border-emerald-400"
            />
          </div>

          <div className="grid gap-1">
            <label
              htmlFor="password"
              className="text-sm font-medium text-neutral-900"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="new-password"
              placeholder="••••••••"
              className="h-12 w-full rounded-2xl border border-emerald-200 px-4 outline-none focus:border-emerald-400"
            />
          </div>

          <button
            type="button"
            className="h-12 w-full rounded-2xl bg-emerald-600 text-sm font-medium text-white hover:bg-emerald-500"
          >
            Create account
          </button>

          <div className="flex items-center justify-between text-sm">
            <a href="/" className="text-emerald-800 hover:underline">
              Back home
            </a>
            <a href="/login" className="text-emerald-800 hover:underline">
              Already have an account?
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}
