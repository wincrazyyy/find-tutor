// app/page.tsx
import { Hero } from "./_components/hero";
import { Search } from "./_components/search";
import { FeaturedTutors } from "./_components/featured-tutors";
import { TeacherCTA } from "./_components/teacher-cta";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Full-width hero + search background band */}
      <section className="relative overflow-hidden bg-white">
        {/* background accents */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-violet-100/60 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(124,58,237,0.06),transparent_45%)]" />

        {/* bottom fade into white (replaces border) */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(to_bottom,transparent,white)]" />

        {/* aligned content */}
        <div className="relative mx-auto w-full max-w-5xl px-6 py-10 sm:py-12">
          <Hero />
          <div className="mt-7">
            <Search />
          </div>
        </div>
      </section>

      {/* Rest of the page */}
      <section className="mx-auto w-full max-w-5xl px-6 py-10">
        <div className="border-t border-neutral-200 pt-10">
          <FeaturedTutors />
        </div>

        <div className="mt-10">
          for testing
          <TeacherCTA />
        </div>

        <div className="mt-10">
          <TeacherCTA />
        </div>

        <div className="mt-10">
          <TeacherCTA />
        </div>

        <div className="mt-10">
          <TeacherCTA />
        </div>
      </section>
    </main>
  );
}
