"use client";

import { motion } from "framer-motion";

type CertItem = {
  short: string;
  full: string;
};

const CERTIFICATIONS: CertItem[] = [
  {
    short: "PCAP",
    full: "Certified Associate in Python Programming",
  },
  {
    short: "SEED – Java",
    full: "SEED Certified Technology Specialist – Java",
  },
  {
    short: "GenAI in Action",
    full: "Impact and Possibilities",
  },
  {
    short: "GRE",
    full: "Graduate Record Examinations",
  },
  {
    short: "TOEFL iBT",
    full: "Test of English as a Foreign Language",
  },
  {
    short: "Diploma (Mech)",
    full: "Diploma in Mechanical Engineering",
  },
  {
    short: "B.E. Mechanical",
    full: "Bachelor of Engineering in Mechanical Engineering",
  },
];

type MarqueeRowProps = {
  items: CertItem[];
  reverse?: boolean;
};

function CertMarqueeRow({ items, reverse }: MarqueeRowProps) {
  // duplicate for seamless infinite loop
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
          <div
            key={`${item.short}-${idx}`}
            className="group inline-flex flex-col justify-center mr-3 px-3 py-2
                       rounded-xl bg-white/5 border border-white/10
                       whitespace-nowrap cursor-grab active:cursor-grabbing"
          >
            <span className="text-xs font-semibold text-white">
              {item.short}
            </span>
            <span className="text-[11px] text-gray-300">
              {item.full}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CertificationsCard() {
  return (
    <motion.div
      className="md:col-span-3 rounded-3xl bg-white/5 border border-white/10
                 p-6 sm:p-7 lg:p-8 shadow-lg shadow-pink-500/10
                 flex flex-col gap-4 min-h-[230px] relative"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink-300 mb-2">
          Certifications &amp; exams
        </p>
        <h3 className="card-heading-gold font-semibold text-lg sm:text-xl mb-2">
          Credentials that back my skills
        </h3>
      </div>

      {/* sliding certification boxes */}
      <div className="space-y-3 mt-1">
        <CertMarqueeRow items={CERTIFICATIONS} />
        <CertMarqueeRow items={CERTIFICATIONS} reverse />
      </div>

      <p className="mt-3 text-[11px] text-gray-400">
        Continuously building depth across Python, Java, AI and core engineering foundations.
      </p>
    </motion.div>
  );
}
