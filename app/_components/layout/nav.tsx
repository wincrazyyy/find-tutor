// app/_components/layout/nav.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SearchBar } from "../search-bar";

const NAV_SEARCH_EVENT = "findtutor:nav-search";

export function Nav() {
  const [showNavSearch, setShowNavSearch] = useState(false);

  useEffect(() => {
    const onToggle = (e: Event) => {
      const ce = e as CustomEvent<{ show: boolean }>;
      setShowNavSearch(Boolean(ce.detail?.show));
    };

    window.addEventListener(NAV_SEARCH_EVENT, onToggle);
    return () => window.removeEventListener(NAV_SEARCH_EVENT, onToggle);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center gap-4 px-6 py-4">
        {/* Brand (logo always, text hides when search is shown) */}
        <a href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo-square.png"
            alt="Vault of Excellence"
            width={36}
            height={36}
            className="rounded-2xl ring-1 ring-[#050B1E]/10"
            priority
          />
          <div
            className={[
              "text-sm font-semibold text-[#050B1E] transition-all duration-200",
              showNavSearch
                ? "w-0 overflow-hidden opacity-0"
                : "w-auto opacity-100",
            ].join(" ")}
          >
            Vault of Excellence
          </div>
        </a>

        {/* Nav search (takes the middle space, effectively covering the title) */}
        <div
          className={[
            "flex-1 transition-all duration-200",
            showNavSearch
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-1 pointer-events-none",
          ].join(" ")}
        >
          <SearchBar variant="nav" />
        </div>

        {/* Actions */}
        <nav className="flex items-center gap-2 shrink-0">
          <a
            href="/login"
            className="inline-flex h-10 items-center justify-center rounded-xl bg-[#050B1E] px-4 text-sm font-medium text-white hover:bg-[#07102D]"
          >
            Teacher log in
          </a>
          <a
            href="/signup"
            className="inline-flex h-10 items-center justify-center rounded-xl border border-violet-200 bg-violet-50 px-4 text-sm font-medium text-[#050B1E] hover:bg-violet-100"
          >
            Teacher sign up
          </a>
        </nav>
      </div>
    </header>
  );
}
