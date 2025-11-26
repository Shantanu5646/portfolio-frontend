"use client";

import Image from "next/image";

export default function CurrentProjectCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-gray-900/40 p-6 flex flex-col gap-3">
      {/* Custom heading with your orange style */}
      <p className="card-heading-neon font-semibold text-sm sm:text-base mb-2">
        Current project
      </p>

      <div className="flex items-center gap-4">
        {/* Logo box – square with curved edges */}
        <div className="relative h-20 w-20 rounded-2xl overflow-hidden border border-white/20">
          <Image
            src="/current-project-logo.jpg"
            alt="Current project logo"
            fill
            className="object-cover"
          />
        </div>

        <div className="text-left">
          <p className="text-sm text-gray-200 font-semibold">
            AI-driven web apps with Python &amp; Next.js
          </p>
          <p className="text-xs text-gray-300">
            Currently building an LSTM-powered stock prediction platform using
            Python, FastAPI, and a clean, responsive front-end UI.
          </p>
        </div>
      </div>
    </div>
  );
}
