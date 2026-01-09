// app/_components/search.tsx
"use client";

import { useEffect, useRef } from "react";
import { SearchBar } from "./search-bar";

const NAV_SEARCH_EVENT = "findtutor:nav-search";

export function Search() {
  const ref = useRef<HTMLDivElement | null>(null);

  const subjects = [
    "Math",
    "English",
    "Science",
    "Languages",
    "Coding",
    "Exam Prep",
    "Music",
    "Economics",
  ];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const emit = (show: boolean) => {
      window.dispatchEvent(
        new CustomEvent(NAV_SEARCH_EVENT, { detail: { show } })
      );
    };

    // initial
    emit(false);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;

        // If the search bar is visible -> hide nav search
        if (entry.isIntersecting) {
          emit(false);
          return;
        }

        // Only show nav search if we've scrolled PAST it (it moved above viewport)
        const scrolledPast = entry.boundingClientRect.top < 0;
        emit(scrolledPast);
      },
      {
        threshold: 0,
        // account for fixed nav height so it doesn't flicker when sitting under the nav
        rootMargin: "-90px 0px 0px 0px",
      }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="mt-7">
      {/* Observe this block (the “main” search bar) */}
      <div ref={ref}>
        <SearchBar variant="full" />
      </div>

      {/* Popular subjects */}
      <div className="mt-4 flex flex-wrap gap-2">
        {subjects.map((s) => (
          <button
            key={s}
            type="button"
            className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-[#050B1E] hover:bg-violet-100"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
