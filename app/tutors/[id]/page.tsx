// app/tutors/[id]/page.tsx
import { ProfileHeader } from "./_components/profile-header";
import { About } from "./_components/about";
import { AcademicBackground } from "./_components/academic-background";
import { Highlights } from "./_components/highlights";
import { Stats } from "./_components/stats";
import { Reviews } from "./_components/reviews";
import { BookingCard } from "./_components/booking-card";
import { Tips } from "./_components/tips";

export type Tutor = {
  verified: boolean;
  imageSrc?: string;
  name: string;
  title: string;
  rating: string;
  hours: string;
  about: string;
  subjects: string[];
  levels: string[];
  availability: string[];
  academic: {
    school: string;
    degree: string;
    graduation: string;
    credentials: string[];
    awards: string[];
  };
  highlights: { k: string; v: string }[];
  stats: { k: string; v: string }[];
};


export type Review = { name: string; text: string };

export default function TutorProfilePage() {
  const tutor: Tutor = {
    verified: true,
    name: "Alex Chen",
    title: "Math • Physics Tutor",
    rating: "4.9 ★",
    hours: "320+ hours taught",
    about:
      "I help students build strong fundamentals, then move into exam-style questions with a clear method. Lessons are paced, focused, and practical.",
    subjects: ["Math", "Physics", "Exam Prep"],
    levels: ["Middle School", "IGCSE", "A-Level"],
    availability: ["Weekdays (Evening)", "Sat (Morning)"],
    academic: {
      school: "University of Example",
      degree: "BSc in Mathematics",
      graduation: "2019",
      credentials: ["PGCE (Secondary)", "DBS checked (UK)", "Verified profile"],
      awards: ["Dean’s List (2017–2019)", "National Math Olympiad (Finalist)"],
    },
    highlights: [
      { k: "Teaching style", v: "Step-by-step, concept-first" },
      { k: "Lesson format", v: "Online (Zoom/Meet)" },
      { k: "Homework", v: "Optional practice set" },
      { k: "Languages", v: "English, 中文" },
    ],
    stats: [
      { k: "Students taught", v: "180+" },
      { k: "Total hours", v: "320+" },
      { k: "Repeat bookings", v: "68%" },
      { k: "Response time", v: "< 2 hours" },
    ],
  };

  const reviews: Review[] = [
    {
      name: "Student A",
      text: "Explains concepts clearly and gives great practice questions.",
    },
    {
      name: "Student B",
      text: "Very patient and organised. Helped me improve my confidence.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto w-full max-w-5xl px-6 py-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          {/* Main */}
          <div className="space-y-6">
            <ProfileHeader tutor={tutor} />
            <About tutor={tutor} />
            <AcademicBackground tutor={tutor} />
            <Highlights tutor={tutor} />
            <Stats tutor={tutor} />
            <Reviews reviews={reviews} />
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <BookingCard availability={tutor.availability} />
            <Tips />
          </aside>
        </div>
      </section>
    </main>
  );
}
