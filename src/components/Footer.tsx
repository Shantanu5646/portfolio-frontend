"use client";

import Link from "next/link";
import { useThemeMode } from "./ThemeProvider";

export default function Footer() {
  const year = new Date().getFullYear();
  const { theme } = useThemeMode();
  const isDark = theme === "dark";

  return (
    <footer
      className={`border-t px-6 py-12 transition-colors duration-300 ${
        isDark
          ? "bg-black text-gray-300 border-white/10"
          : "bg-white text-slate-800 border-slate-200"
      }`}
    >
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-24 w-full">
          {/* Left: logo + short text */}
          <div className="max-w-sm space-y-4 md:flex-1">
            <div className="flex items-center gap-3">
              <span
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl 
                               bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold"
              >
                SD
              </span>
              <span className="text-sm tracking-wide">
                Shantanu Deshmukh
              </span>
            </div>
            <p
              className={`text-sm leading-relaxed ${
                isDark ? "text-gray-400" : "text-slate-600"
              }`}
            >
              I&apos;m Shantanu – a full-stack developer, AI/ML engineer and
              problem solver. Thanks for checking out my site!
            </p>
          </div>

          {/* Right: link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm md:flex-1 md:ml-auto md:text-right">
            <div className="space-y-3">
              <h4
                className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                  isDark ? "text-gray-400" : "text-slate-500"
                }`}
              >
                General
              </h4>
              <div className="space-y-2">
                <Link
                  href="#top"
                  className={`block transition-colors ${
                    isDark ? "hover:text-white" : "hover:text-slate-900"
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  className={`block transition-colors ${
                    isDark ? "hover:text-white" : "hover:text-slate-900"
                  }`}
                >
                  About
                </Link>
                <Link
                  href="#projects"
                  className={`block transition-colors ${
                    isDark ? "hover:text-white" : "hover:text-slate-900"
                  }`}
                >
                  Projects
                </Link>
                <Link
                  href="#work"
                  className={`block transition-colors ${
                    isDark ? "hover:text-white" : "hover:text-slate-900"
                  }`}
                >
                  Work
                </Link>
              </div>
            </div>

            <div className="space-y-3">
              <h4
                className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                  isDark ? "text-gray-400" : "text-slate-500"
                }`}
              >
                Highlights
              </h4>
              <div className="space-y-2">
                <Link
                  href="#documents"
                  className={`block transition-colors ${
                    isDark ? "hover:text-white" : "hover:text-slate-900"
                  }`}
                >
                  Certificates
                </Link>
                <Link
                  href="#projects"
                  className={`block transition-colors ${
                    isDark ? "hover:text-white" : "hover:text-slate-900"
                  }`}
                >
                  ML &amp; AI Projects
                </Link>
                <Link
                  href="#contact"
                  className={`block transition-colors ${
                    isDark ? "hover:text-white" : "hover:text-slate-900"
                  }`}
                >
                  Hire me
                </Link>
              </div>
            </div>

            <div className="space-y-3">
              <h4
                className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                  isDark ? "text-gray-400" : "text-slate-500"
                }`}
              >
                Connect
              </h4>
              <div className="space-y-2">
                <a
                  href="https://www.linkedin.com/in/shantanu-deshmukh-sd5646"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block transition-colors ${
                    isDark ? "hover:text-white" : "hover:text-slate-900"
                  }`}
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Shantanu5646?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block transition-colors ${
                    isDark ? "hover:text-white" : "hover:text-slate-900"
                  }`}
                >
                  GitHub
                </a>
                <a
                  href="mailto:shantanudeshmukh3@gmail.com"
                  className={`block transition-colors ${
                    isDark ? "hover:text-white" : "hover:text-slate-900"
                  }`}
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          className={`flex flex-col md:flex-row items-center justify-between gap-3 border-t pt-4 text-xs mt-4 ${
            isDark
              ? "border-white/5 text-gray-500"
              : "border-slate-200 text-slate-500"
          }`}
        >
          <span>© {year} Shantanu Deshmukh. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              className={`px-3 py-1 rounded-full text-[0.7rem] border transition-colors ${
                isDark
                  ? "border-white/15 bg-white/5"
                  : "border-slate-300 bg-slate-100 hover:bg-slate-200"
              }`}
            >
              Privacy Policy
            </button>
            <button
              type="button"
              className={`px-3 py-1 rounded-full text-[0.7rem] border transition-colors ${
                isDark
                  ? "border-white/15 bg-white/5"
                  : "border-slate-300 bg-slate-100 hover:bg-slate-200"
              }`}
            >
              Terms &amp; Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
