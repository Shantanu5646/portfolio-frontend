"use client";

import { motion } from "framer-motion";

export default function LetsWorkTogetherCard() {
  const email = "shantanudeshmukh3@gmail.com";

  return (
    <motion.div
      className="rounded-3xl bg-white/5 border border-white/10 px-5 py-4 flex flex-col items-center justify-center text-center gap-3"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileHover={{ y: -4 }}
    >
      {/* Blinking / pulsing heading */}
      <motion.h3
        className="text-2xl sm:text-3xl font-semibold leading-snug"
        style={{
          textShadow: "0 0 18px rgba(255,255,255,0.6)",
        }}
        animate={{
          opacity: [1, 0.6, 1],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        Let&apos;s work together
        <br />
        on your next project
      </motion.h3>

      {/* Email pill */}
      <a
        href={`mailto:${email}`}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-black/80 border border-white/15 px-6 py-2.5 text-sm text-gray-100 shadow-[0_0_25px_rgba(0,0,0,0.9)] hover:bg-white hover:text-black transition-colors"
      >
        <span className="text-lg">📩</span>
        <span className="font-medium">{email}</span>
      </a>
    </motion.div>
  );
}
