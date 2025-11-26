"use client";

type DocumentCardProps = {
  title: string;
  filename: string;
  href: string;
};

export default function DocumentCard({ title, filename, href }: DocumentCardProps) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-2xl
                 bg-white/5 border border-white/15 backdrop-blur-md
                 shadow-lg hover:bg-white/10 hover:-translate-y-1 
                 hover:shadow-2xl transition-transform transition-colors cursor-pointer"
    >
      {/* subtle hover glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-lime-400/0 via-sky-400/0 to-orange-500/0 opacity-0 group-hover:opacity-25 transition-opacity" />

      <div className="relative p-5 sm:p-6 flex flex-col gap-3">
      

        {/* title (cert name) */}
        <h3
          className="text-sm sm:text-base md:text-lg font-semibold leading-snug 
                     text-slate-50 group-hover:text-transparent 
                     group-hover:bg-clip-text group-hover:bg-gradient-to-r 
                     group-hover:from-lime-300 group-hover:via-sky-300 group-hover:to-orange-300
                     transition-colors"
        >
          {title}
        </h3>

        {/* filename or hint */}
        <p className="text-[0.7rem] sm:text-xs text-slate-300/85">
          {isExternal ? "Opens official credential in a new tab." : filename}
        </p>

        {/* footer row */}
        <div className="mt-2 flex items-center justify-between text-[0.7rem] sm:text-xs">
          <span className="inline-flex items-center gap-1 text-slate-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="uppercase tracking-[0.18em]">
              {isExternal ? "View badge" : "View / download"}
            </span>
          </span>

          <span className="inline-flex items-center gap-1 text-sky-300 group-hover:translate-x-1 transition-transform">
            <span>Open</span>
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 14L14 6M9 6H14V11"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </a>
  );
}
