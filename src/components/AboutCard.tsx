"use client";

import type { ReactNode } from "react";

type AboutCardProps = {
  title: string;
  eyebrow?: string;      // optional small label above title
  className?: string;    // optional extra tailwind classes
  children: ReactNode;
};

export default function AboutCard({
  title,
  eyebrow,
  className = "",
  children,
}: AboutCardProps) {
  return (
    <div
      className={
        "rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-7 shadow-lg shadow-purple-500/5 " +
        className
      }
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-purple-300 mb-2">
          {eyebrow}
        </p>
      )}

      <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>

      <div className="text-sm text-gray-200 space-y-2">{children}</div>
    </div>
  );
}
