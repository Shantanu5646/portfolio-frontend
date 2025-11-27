"use client";
import { useState } from "react";
import Hero from "../src/components/Hero";
import DocumentCard from "../src/components/DocumentCard";
import ProjectCard from "../src/components/ProjectCard";

import AboutSummaryCard from "../src/components/AboutSummaryCard";
import TechStackCard from "../src/components/TechStackCard";
import CertificationsCard from "../src/components/CertificationsCard";
import EducationCard from "../src/components/EducationCard";
import FlexibleTimezoneCard from "../src/components/FlexibleTimezoneCard";
import CurrentProjectCard from "../src/components/CurrentProjectCard";
import LetsWorkTogetherCard from "../src/components/LetsWorkTogetherCard";
import Footer from "../src/components/Footer";

export default function Home() {
  const techStacks = [
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "React",
    "Spring MVC",
    "SQL",
    "MongoDB",
    "AWS",
    "Machine Learning",
    "Gen AI",
  ];

  const tools = [
    "VS Code",
    "Git",
    "Jupyter",
    "Jenkins",
    "MySQL",
    "Tomcat",
    "Maven",
    "Jira",
  ];

    const projects = [
    {
      name: "Sentiment Aware Customer Support Chatbot AWS",
      description:
        "Customer support chatbot with sentiment analysis using AWS services to automate responses, track sentiment, and store feedback.",
      image: "/projects/chatbot.jpg",
      tech: ["AWS", "Python"],
      link: "https://github.com/Shantanu5646/Sentiment-Aware-Customer-Support-Chatbot-AWS-",
    },
    {
      name: "Stock-Prediction",
      description:
        "Stock price prediction web app using a generalized LSTM model with visualizations and metrics for individual stocks.",
      image: "/projects/stock.jpg",
      tech: ["Python", "JavaScript", "React"],
      link: "https://github.com/Shantanu5646/Stock-Prediction",
    },
    {
      name: "Invoice Processing System",
      description:
        "Full-stack invoice system with React, Spring Boot, and MySQL to add, track, and complete invoices without deleting records.",
      image: "/projects/invoice-processing.jpg",
      tech: ["Java", "Spring Boot", "React", "Material-UI", "MySQL", "Axios"],
      link: "https://github.com/Shantanu5646/Invoice-Processing-System",
    },
    {
      name: "San Juan Sailboat Charters Case Project",
      description:
        "Case project comparing Excel vs Access to show how relational databases reduce redundancy and errors for SJSBC’s data.",
      image: "/projects/sjsbc-case.jpg",
      tech: ["Microsoft Access", "Microsoft Excel"],
      link: "#",
    },
    {
      name: "Document Scanner",
      description:
        "Python-based document scanner using OpenCV and Tesseract for cleaned scans, batch processing, and searchable PDFs.",
      image: "/projects/document-scanner.jpg",
      tech: ["Python", "OpenCV", "Tesseract OCR"],
      link: "https://github.com/Shantanu5646/Document-Scanner",
    },
    {
      name: "Portfolio Website",
      description:
        "Personal portfolio site built with Next.js, Tailwind CSS, and Framer Motion.",
      image: "/projects/portfolio.jpg",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      link: "#", // we’ll update this later
    },
  ];

  const documents = [
    {
      filename: "certificate_pcap.pdf",
      title: "PCAP (Certified Associate Python Programmer",
    },
    { filename: "fsd_java.pdf", title: "SEED Certified Technology Specialist-Java" },
    {
      filename: "GenAI in Action (Credly)", // just an identifier
      title: "GenAI in Action: Impact and Possibilities (USF Office of Microcredentials)",
      external: true,
      link: "https://www.credly.com/badges/1281886b-0c8f-48c1-aa3a-3c1f7952e16b",
    },
    { filename: "score_report.pdf", title: "Python Institute" },
    { filename: "diploma_mechanical.pdf", title: "Diploma in Mechanical Engineering" },
    { filename: "pune_university_degree.pdf", title: "Bachelors in Mechanical Engineering" },
    { filename: "gre_certificate.pdf", title: "Graduate Record Examinations" },
    { filename: "toefl_certificate.pdf", title: "Test of English as a Foreign Language" },
    { filename: "wes_transcripts.pdf", title: "World Education Services Transcripts" },
    { filename: "resume_shantanu.pdf", title: "My Resume" },
    { filename: "cover_letter.pdf", title: "Cover Letter" },
  ];


  // const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setStatusMessage("Thanks! Your message has been sent.");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatusMessage("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <>
      {/* HERO SECTION */}
      <Hero />

     
      {/* ABOUT + CARD GRID (second page) */}
      <section
        id="about"
        className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-xl font-bold uppercase tracking-[0.25em] text-purple-300">
                About
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2">
                Beyond just writing code.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-xl">
                I&apos;m a software engineer who cares about reliable systems, clear
                boundaries, and collaborating closely with teams to ship real products.
              </p>
            </div>
          </div>

          {/* Card grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* top row */}
            <AboutSummaryCard />
            <TechStackCard techStacks={techStacks} tools={tools} />
            <FlexibleTimezoneCard />

            {/* middle row – the 3 compact cards */}
            <EducationCard />
            <CurrentProjectCard />
            <LetsWorkTogetherCard />

            {/* bottom row – full-width certifications card */}
            <CertificationsCard />
          </div>
        </div>
      </section>


      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="relative min-h-screen pt-16 flex flex-col justify-center items-center px-6 py-20 text-white overflow-hidden"
      >
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/projects-bg.mp4" // keep your file name / path here
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Foreground content */}
        <div className="relative z-10 max-w-6xl w-full flex flex-col items-center">
          {/* Heading */}
          <div className="mb-12 text-center max-w-2xl">
            <p className="text-xl font-bold uppercase tracking-[0.3em] text-lime-300">
              Projects
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-lime-400 via-sky-400 to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
              Turning ideas into working systems.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-200">
              I enjoy building real-world solutions—from AI-powered assistants to
              full-stack web apps. These projects show how I approach
              problem-solving, clean structure, and user-focused design.
            </p>
          </div>

          {/* Project cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-center">
            {projects.map((project, index) => (
              <ProjectCard key={project.name} index={index} {...project} />
            ))}
          </div>
        </div>
      </section>



     
      {/* WORK SECTION */}
      <section
        id="work"
        className="relative min-h-screen pt-16 flex flex-col justify-center items-center px-6 py-20 text-white overflow-hidden"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/work-bg.jpg" // put your image in /public as work-bg.jpg (or change this path)
            alt="Work background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Foreground content */}
        <div className="relative z-10 max-w-5xl w-full flex flex-col items-center">
          {/* Heading */}
          <div className="mb-12 text-center max-w-2xl">
            <p className="text-xl font-bold uppercase tracking-[0.35em] text-lime-300">
              Work
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-lime-400 via-sky-400 to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
              Experience that ships real products.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-200">
              I’ve worked on real-world applications in e-commerce and healthcare,
              focusing on reliable backends, smooth deployments, and close
              collaboration with cross-functional teams.
            </p>
          </div>

          {/* Centered work card */}
          <div className="w-full flex justify-center">
            <article className="w-full max-w-xl p-6 sm:p-8 bg-white/5 border border-white/15 rounded-2xl shadow-xl backdrop-blur-md hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl transition transform cursor-pointer">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Jr Software Engineer – DooGraphics
                </h3>
                <span className="text-xs sm:text-sm px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
                  Full-time
                </span>
              </div>

              <p className="text-gray-200 text-sm sm:text-base">
                Worked on e-commerce and healthcare products, building Java/Spring
                MVC features, automating deployments with Jenkins, and
                collaborating closely with QA and product teams.
              </p>

              <div className="mt-4 flex flex-wrap gap-2 text-xs sm:text-sm">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/20">
                  Java
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/20">
                  Spring MVC
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/20">
                  Jira
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/20">
                  Spring Boot
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/20">
                  MySQL
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>


      {/* DOCUMENTS SECTION (kept as-is for PDFs) */}
      {/* DOCUMENTS SECTION (Certificates & Documents) */}
      <section
        id="documents"
        className="relative min-h-screen pt-16 flex flex-col justify-center items-center px-6 py-20 bg-black text-white overflow-hidden"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/documents-bg.jpg" // keep this in /public or change the path
            alt="Certificates background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Foreground content */}
        <div className="relative z-10 max-w-6xl w-full flex flex-col items-center">
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-6 text-center
                      bg-gradient-to-r from-lime-400 via-sky-400 to-orange-400
                      bg-clip-text text-transparent drop-shadow-lg"
          >
            Certificates &amp; Documents
          </h2>

          <p className="text-gray-200 mb-10 text-center max-w-2xl">
            Official documents and course certifications — click to view, download,
            or open the credential source.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-center">
            {documents.map((doc) => (
              <DocumentCard
                key={doc.title}
                title={doc.title}
                filename={doc.filename}
                href={
                  doc.external
                    ? doc.link
                    : `/docs/${encodeURIComponent(doc.filename)}`
                }
              />
            ))}
          </div>
        </div>
      </section>



      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="min-h-screen pt-16 flex flex-col justify-center items-center px-6 py-20 bg-black text-white"
      >
        <div className="w-full max-w-5xl flex flex-col items-center">
          {/* Heading */}
          <div className="mb-10 text-center max-w-2xl">
            <p className="text-sm sm:text-base md:text-lg font-semibold uppercase tracking-[0.35em] text-lime-300">
              Contact
            </p>
            <h2
              className="mt-3 text-3xl sm:text-4xl font-extrabold 
                         bg-gradient-to-r from-lime-400 via-sky-400 to-orange-400
                         bg-clip-text text-transparent drop-shadow-lg"
            >
              Let&apos;s build something together.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-300">
              I’m open to opportunities, collaborations, and interesting ideas.
              Share a bit about what you’re working on, and I’ll get back to you
              as soon as I can.
            </p>
          </div>

          {/* Form card */}
          <form
          className="w-full max-w-xl bg-white/5 border border-white/15 rounded-2xl
                     shadow-xl backdrop-blur-md p-6 sm:p-8 space-y-5"
          onSubmit={handleContactSubmit}
        >
          <div>
            <label
              className="block text-sm font-medium mb-2 text-gray-200"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-4 py-2.5 rounded-lg border border-white/15 
                         bg-black/40 text-white placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-2 text-gray-200"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-4 py-2.5 rounded-lg border border-white/15 
                         bg-black/40 text-white placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-2 text-gray-200"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-4 py-2.5 rounded-lg border border-white/15 
                         bg-black/40 text-white placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              id="message"
              name="message"
              rows={5}
              placeholder="Tell me a bit about your project or idea..."
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 px-6 py-3 rounded-lg font-semibold
                       bg-gradient-to-r from-lime-400 via-sky-400 to-orange-400
                       text-black shadow-md hover:shadow-xl hover:brightness-110
                       disabled:opacity-60 disabled:cursor-not-allowed
                       transition"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {statusMessage && (
            <p className="text-xs sm:text-sm text-center text-gray-300 mt-2">
              {statusMessage}
            </p>
          )}
        </form>
        </div>
      </section>
            <Footer />
    </>
  );
}
