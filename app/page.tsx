// app/page.tsx
import { Hero } from "./_components/hero";
import { Search } from "./_components/search";
import { FeaturedTutors } from "./_components/featured-tutors";
import { TeacherCTA } from "./_components/teacher-cta";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto w-full max-w-5xl px-6 py-10">
        <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
          <Hero />
          <Search />
          <FeaturedTutors />
          <TeacherCTA />
        </div>
      </section>
    </main>
  );
}
