import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 border-t border-white/10 px-6 py-12">
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
              <span className="text-sm tracking-wide text-gray-200">
                Shantanu Deshmukh
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              I&apos;m Shantanu – a full-stack developer, AI/ML engineer and
              problem solver. Thanks for checking out my site!
            </p>
          </div>

          {/* Right: link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm md:flex-1 md:ml-auto md:text-right">
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                General
              </h4>
              <div className="space-y-2">
                <Link href="#top" className="block hover:text-white">
                  Home
                </Link>
                <Link href="#about" className="block hover:text-white">
                  About
                </Link>
                <Link href="#projects" className="block hover:text-white">
                  Projects
                </Link>
                <Link href="#work" className="block hover:text-white">
                  Work
                </Link>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                Highlights
              </h4>
              <div className="space-y-2">
                <Link href="#documents" className="block hover:text-white">
                  Certificates
                </Link>
                <Link href="#projects" className="block hover:text-white">
                  ML &amp; AI Projects
                </Link>
                <Link href="#contact" className="block hover:text-white">
                  Hire me
                </Link>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                Connect
              </h4>
              <div className="space-y-2">
                <a
                  href="https://www.linkedin.com/in/shantanu-deshmukh-sd5646"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-white"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Shantanu5646?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-white"
                >
                  GitHub
                </a>
                <a
                  href="mailto:shantanudeshmukh3@gmail.com"
                  className="block hover:text-white"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 border-t border-white/5 pt-4 text-xs text-gray-500">
          <span>© {year} Shantanu Deshmukh. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              className="px-3 py-1 rounded-full border border-white/15 bg-white/5 text-[0.7rem]"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              className="px-3 py-1 rounded-full border border-white/15 bg-white/5 text-[0.7rem]"
            >
              Terms &amp; Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
