"use client";

import Link from "next/link";
import Image from "next/image";
import { useThemeMode } from "./ThemeProvider";

export default function Hero() {
  const { theme } = useThemeMode();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center text-center px-6 text-white"
      style={{ paddingTop: "1.6in" }} // keeps nice gap from navbar
    >
      {/* 🔹 Video background (changes with theme) */}
      <video
        className="absolute inset-0 w-full h-full object-cover -z-20"
        src={theme === "dark" ? "/hero-bg.mp4" : "/hero-light.mp4"}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay: dark only in dark mode */}
      <div
        className={`absolute inset-0 -z-10 transition-colors duration-300 ${
          theme === "dark" ? "bg-black/40" : "bg-black/0"
        }`}
      />

      <div className="relative z-10 max-w-3xl">
        {/* Tagline */}
        <p className="text-base sm:text-lg md:text-xl mb-4 leading-relaxed">
          <span
            style={{
              fontFamily: "'Dreaming Outloude Pro', 'Cavolini', cursive",
              display: "block",
            }}
          >
            I build intelligent web experiences
          </span>
          <span
            style={{
              fontFamily:
                "'Cascadia Code', 'Consolas', 'Courier New', monospace",
              display: "block",
            }}
          >
            powered by AI & modern full-stack engineering.
          </span>
        </p>

        {/* Main heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4">
          Hello, I’m{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Shantanu Deshmukh
          </span>
        </h1>

        {/* Profile logo under the heading */}
        <div className="mt-0 flex justify-center">
          <div className="group relative inline-flex items-center cursor-pointer">
            <div
              className="relative h-14 w-24 overflow-hidden rounded-2xl bg-black/40
                         transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-1"
            >
              <Image
                src="/shantanu-avatar.jpg"
                alt="Shantanu logo"
                fill
                className="object-cover"
              />
            </div>

            <span
              className="absolute -top-3 -right-3 text-2xl
                         opacity-0 translate-y-1
                         transition-all duration-300
                         group-hover:opacity-100 group-hover:translate-y-0"
            >
              👋
            </span>
          </div>
        </div>

        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          A full-stack developer & AI/ML enthusiast crafting innovative
          solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#projects"
            className="px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-black transition"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-black transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
