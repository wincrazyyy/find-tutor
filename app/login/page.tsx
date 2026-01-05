// app/login/page.tsx
export default function LoginPage() {
  return (
    <main className="min-h-screen p-6 flex items-center justify-center bg-white">
      <div className="w-full max-w-sm rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-violet-200 ring-1 ring-[#050B1E]/10" />
            <div>
              <h1 className="text-2xl font-semibold text-[#050B1E]">Log in</h1>
              <p className="mt-1 text-sm text-neutral-600">Teacher Portal</p>
            </div>
          </div>
          <a href="/" className="text-sm text-[#050B1E] hover:underline">
            Home
          </a>
        </div>

        <div className="mt-5 h-1 w-full rounded-full bg-[#050B1E] opacity-10" />

        <form className="mt-6 grid gap-4">
          <div className="grid gap-1">
            <label htmlFor="email" className="text-sm font-medium text-[#050B1E]">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@email.com"
              className="h-12 w-full rounded-2xl border border-neutral-200 px-4 outline-none focus:border-violet-300"
            />
          </div>

          <div className="grid gap-1">
            <label
              htmlFor="password"
              className="text-sm font-medium text-[#050B1E]"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              className="h-12 w-full rounded-2xl border border-neutral-200 px-4 outline-none focus:border-violet-300"
            />
          </div>

          <button
            type="button"
            className="h-12 w-full rounded-2xl bg-[#050B1E] text-sm font-medium text-white hover:bg-[#07102D]"
          >
            Continue
          </button>

          <div className="flex items-center justify-between text-sm">
            <a href="/signup" className="text-[#050B1E] hover:underline">
              Create account
            </a>
            <a href="#" className="text-[#050B1E] hover:underline">
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}
