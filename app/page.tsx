// app/page.tsx
import { Hero } from "./_components/hero";
import { Search } from "./_components/search";
import { FeaturedTutors } from "./_components/featured-tutors";
import { TeacherCTA } from "./_components/teacher-cta";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto w-full max-w-5xl px-6 py-10">
        <Hero />
        <Search />

        <div className="mt-10 border-t border-neutral-200 pt-10">
          <FeaturedTutors />
        </div>

        <div className="mt-10">
          <TeacherCTA />
        </div>
      </section>
    </main>
  );
}
