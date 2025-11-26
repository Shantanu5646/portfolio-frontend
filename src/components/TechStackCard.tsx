"use client";

import { motion } from "framer-motion";
import Image from "next/image";
type TechStackCardProps = {
  techStacks: string[];
  tools: string[];
};

function getIcon(name: string): string {
  const map: Record<string, string> = {
    Python: "🐍",
    Java: "☕",
    JavaScript: "🟨",
    TypeScript: "🟦",
    "Next.js": "⏭️",
    React: "⚛️",
    "Spring MVC": "🌱",
    SQL: "🗄️",
    MongoDB: "🍃",
    AWS: "☁️",
    "Machine Learning": "🤖",
    "Gen AI": "🧠",
    "VS Code": "🧩",
    Git: "🔧",
    Jupyter: "📓",
    Jenkins: "📦",
    MySQL: "🐬",
    Tomcat: "🐱",
    Maven: "📐",
    Jira: "📊",
  };

  return map[name] ?? "💻";
}

type MarqueeRowProps = {
  items: string[];
  reverse?: boolean;
};

function MarqueeRow({ items, reverse }: MarqueeRowProps) {
  // duplicate items so the row can loop seamlessly
  const looped = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <div
        className={
          "tech-marquee-row " +
          (reverse ? "tech-marquee-row--reverse" : "")
        }
      >
        {looped.map((item, idx) => (
          <span
            key={`${item}-${idx}`}
            className="inline-flex items-center text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 whitespace-nowrap mr-3"
          >
            <span className="mr-1 text-sm leading-none">{getIcon(item)}</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechStackCard({ techStacks, tools }: TechStackCardProps) {
  const row1 = techStacks;
  const row2 = tools;
  const row3 = [...techStacks, ...tools];

  return (
    <motion.div
      className="rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-7 shadow-lg shadow-blue-500/10 flex flex-col gap-4"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <h3 className="card-heading-neon card-heading-neon-yellow font-semibold">
        Passionate about cutting-edge technologies
      </h3>
      <p className="text-sm text-gray-300">
        A blend of web, backend, cloud, and AI tools that I use to build
        intelligent, high-impact experiences.
      </p>

      {/* three scrolling rows */}
      <div className="space-y-5 mt-2">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
        <MarqueeRow items={row3} />
      </div>
      {/* Mini “website that impact” preview with real website fill */}
      <div className="mt-6 rounded-2xl bg-black/40 border border-white/15 p-4 shadow-inner">
        {/* Fake browser top bar */}
        <div className="flex items-center gap-2 text-[10px] text-gray-300">
          <span className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-red-400" />
            <span className="h-2 w-2 rounded-full bg-yellow-400" />
            <span className="h-2 w-2 rounded-full bg-green-400" />
          </span>
          <span className="ml-2 px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
            shantanudeshmukh.dev
          </span>
          <span className="ml-auto px-2 py-0.5 rounded-full bg-white/10 text-[9px] uppercase tracking-widest">
            Websites that impact
          </span>
        </div>
        {/* Website “fill” */}
        <div className="relative mt-3 h-28 w-full overflow-hidden rounded-xl bg-black/70">
          {/* Put your own screenshot here */}
          <Image
            src="/projects/portfolio-website.jpg"
            alt="Portfolio website preview"
            fill
            className="object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute bottom-2 left-3 flex items-center gap-2 text-[11px]">
            <button className="px-3 py-1 rounded-full bg-white text-black font-medium">
              Start
            </button>
            <button className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white">
              Details
            </button>
          </div>
        </div>
     </div>
    </motion.div>
  );
}
