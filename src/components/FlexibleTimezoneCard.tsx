"use client";

import { motion } from "framer-motion";
import TimeZoneGlobe from "./TimeZoneGlobe";

export default function FlexibleTimezoneCard() {
  return (
    <motion.div
      className="rounded-3xl bg-white/5 border border-white/10 px-6 pt-6 pb-3 sm:px-7 sm:pt-7 sm:pb-4 shadow-lg shadow-cyan-500/10 flex flex-col gap-3"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 }}
    >
      <div className="text-center">
        <h3 className="card-heading-cyan font-semibold text-lg sm:text-xl mb-2">
          I&apos;m very flexible with time-zone communications
        </h3>

        <div className="flex justify-center gap-2 mb-3 text-xs">
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15">
            🇬🇧 UK
          </span>
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/60">
            🇺🇸 USA
          </span>
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15">
            🇮🇳 India
          </span>
        </div>
      </div>

      {/* Globe section */}
      <TimeZoneGlobe />

      <div className="mt-2 text-xs text-gray-300">
        <p className="font-semibold tracking-wide text-gray-200">
          Current · USA
        </p>
        <p>Comfortable collaborating with teams in the US, India, and beyond.</p>
      </div>
    </motion.div>
  );
}
