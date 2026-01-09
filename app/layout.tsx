// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Nav } from "./_components/layout/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Find Tutor",
  description: "A portal for teachers to find tutoring opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white pt-22`}
      >
        <Nav />
        {children}

        <footer className="border-t border-neutral-200">
          <div className="mx-auto w-full max-w-5xl px-6 py-6 text-xs text-neutral-500">
            © {new Date().getFullYear()} Find Tutor
          </div>
        </footer>
      </body>
    </html>
  );
}
