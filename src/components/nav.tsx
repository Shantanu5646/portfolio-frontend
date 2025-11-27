"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useThemeMode } from "./ThemeProvider";

const LINKS = [
  { id: "hero", label: "Home", href: "/" },
  { id: "about", label: "About", href: "/#about" },
  { id: "skills", label: "Skills", href: "/#skills" },
  { id: "projects", label: "Projects", href: "/#projects" },
  { id: "work", label: "Work", href: "/#work" },
  { id: "documents", label: "Documents", href: "/#documents" },
  { id: "contact", label: "Contact", href: "/#contact" },
] as const;

type SectionId = (typeof LINKS)[number]["id"];

export default function Nav() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useThemeMode(); // 👈 use context theme

  const [activeSection, setActiveSection] = useState<SectionId>("hero");

  // Route-based default active section
  useEffect(() => {
    if (pathname === "/") {
      setActiveSection("hero");
    }
  }, [pathname]);

  // Scroll-based highlighting (only on home page "/")
  useEffect(() => {
    if (pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let currentId: SectionId | null = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            currentId = entry.target.id as SectionId;
          }
        });

        if (currentId) {
          setActiveSection(currentId);
        } else if (window.scrollY < 80) {
          // very top of page → Home
          setActiveSection("hero");
        }
      },
      { threshold: 0.4 }
    );

    LINKS.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      {/* Top blurred strip behind logo + navbar */}
      <div className="fixed inset-x-0 top-0 h-10 bg-black/10 backdrop-blur-xl z-30 pointer-events-none" />

      {/* SD Logo - fixed at top-left */}
      <Link
        href="/"
        className="fixed z-50 text-white text-2xl font-extrabold tracking-wider"
        style={{
          top: "0.35in",
          left: "0.5in",
          position: "fixed",
          fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive",
          fontSize: "28px",
        }}
      >
        SD
      </Link>

      {/* Centered glassmorphism nav bar */}
      <nav className="fixed z-40 top-[0.2in] left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-2 py-2 shadow-lg">
          {LINKS.map((link) => {
            const active = activeSection === link.id;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2 py-2 text-xs rounded-lg transition-colors ${
                  active
                    ? "bg-white text-black shadow"
                    : "text-white/80 hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Theme toggle button */}
          <button
            type="button"
            onClick={toggleTheme}
            className="px-3 py-1.5 rounded-full border border-white/20 text-xs sm:text-sm
                       bg-white/5 hover:bg-white/10 transition flex items-center gap-2"
          >
            <span
              className="inline-block h-2 w-2 rounded-full
                         bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
            />
            <span>{theme === "dark" ? "Dark mode" : "Light mode"}</span>
          </button>
        </div>
      </nav>
    </>
  );
}
