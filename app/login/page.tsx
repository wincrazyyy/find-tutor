// app/login/page.tsx
export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-sm rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold">Log in</h1>
        <p className="mt-1 text-sm text-neutral-600">
          Enter your details to continue.
        </p>

        <form className="mt-6 space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className="h-11 w-full rounded-xl border border-neutral-200 px-3 outline-none focus:border-neutral-400"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              className="h-11 w-full rounded-xl border border-neutral-200 px-3 outline-none focus:border-neutral-400"
            />
          </div>

          <button
            type="button"
            className="h-11 w-full rounded-xl bg-neutral-900 text-sm font-medium text-white hover:bg-neutral-800"
          >
            Continue
          </button>

          <div className="flex items-center justify-between text-sm">
            <a href="#" className="text-neutral-700 hover:underline">
              Forgot password?
            </a>
            <a href="#" className="text-neutral-700 hover:underline">
              Create account
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}
