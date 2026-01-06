// app/signup/page.tsx
export default function SignupPage() {
  return (
    <main className="min-h-[calc(100vh-73px)] p-6 flex items-center justify-center bg-white">
      <div className="w-full max-w-sm rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm">
        <h1 className="text-2xl font-semibold text-[#050B1E]">Sign up</h1>
        <p className="mt-1 text-sm text-neutral-600">Teacher Portal</p>

        <div className="mt-5 h-1 w-full rounded-full bg-[#050B1E] opacity-10" />

        <form className="mt-6 grid gap-4">
          <div className="grid gap-1">
            <label
              htmlFor="name"
              className="text-sm font-medium text-[#050B1E]"
            >
              Full name
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              placeholder="e.g. Winson Siu"
              className="h-12 w-full rounded-2xl border border-neutral-200 px-4 outline-none focus:border-violet-300"
            />
          </div>

          <div className="grid gap-1">
            <label
              htmlFor="email"
              className="text-sm font-medium text-[#050B1E]"
            >
              Work email
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
              autoComplete="new-password"
              placeholder="••••••••"
              className="h-12 w-full rounded-2xl border border-neutral-200 px-4 outline-none focus:border-violet-300"
            />
          </div>

          <button
            type="button"
            className="h-12 w-full rounded-2xl bg-[#050B1E] text-sm font-medium text-white hover:bg-[#07102D]"
          >
            Create account
          </button>

          <div className="flex items-center justify-between text-sm">
            <a href="/login" className="text-[#050B1E] hover:underline">
              Already have an account?
            </a>
            <a href="/" className="text-[#050B1E] hover:underline">
              Back home
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}
