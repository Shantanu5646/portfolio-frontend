// EducationCard.tsx
import Image from "next/image";

export default function EducationCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-gray-900/40 px-5 py-4 flex flex-col gap-3">
      <p className="card-heading-neon card-heading-neon-orange font-semibold text-xs sm:text-sm mb-1">
        Current education
      </p>

      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 rounded-xl overflow-hidden bg-white/5 border border-white/10">
          <Image
            src="/saint-leo.webp"
            alt="Saint Leo University"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="text-sm font-semibold">Saint Leo University</h3>
          <p className="text-xs text-gray-300">MS in Computer Science</p>
        </div>
      </div>

      <p className="text-xs text-gray-400 leading-relaxed">
        Focusing on advanced software engineering, AI-driven systems, and
        building production-ready applications that connect real-world problems
        with robust technical solutions.
      </p>
    </div>
  );
}
