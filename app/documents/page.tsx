"use client";
import { useEffect, useState } from "react";
import DocumentCard from "../../src/components/DocumentCard";

type Doc = { filename: string; title: string };

// Use your exact sorted list here (you gave it). This ensures stable order.
const DOCUMENTS: Doc[] = [
  { filename: "certificate_FJts.9C6E.fotg.pdf", title: "PCAP (Certified Associate Python Programmer)" },
  { filename: "FSD_JAVA.pdf", title: "SEED Certified Technology Specialist-Java" },
  { filename: "Score Report.pdf", title: "Python Institute" },
  { filename: "Diploma Certificate.pdf", title: "Diploma in Mechanical Engineering" },
  { filename: "Pune university Certificate.pdf", title: "Bachelors in Mechanical Engineering" },
  { filename: "GRE Certificate.pdf", title: "Graduate Record Examinations" },
  { filename: "TOEFL iBT.pdf", title: "Test of English as a Foreign Language" },
  { filename: "WES document.pdf", title: "World Education Services Transcripts" },
  { filename: "Cover Letter.pdf", title: "Cover Letter" },
  { filename: "Shantanu Deshmukh Resume.pdf", title: "My Resume" },
];

export default function DocumentsPage() {
  const [loading, setLoading] = useState(false);
  const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

  // We already have filenames (you uploaded them). If you later want dynamic listing,
  // you can fetch /list-pdfs. For now we use your custom list and assume files exist.
  useEffect(() => {
    // optional: could validate files exist on backend by calling /list-pdfs
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <main className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-3">Certificates & Documents</h1>
        <p className="text-gray-600 mb-8">Official documents and course certifications — click to view or download.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOCUMENTS.map((d) => (
            <DocumentCard
              key={d.filename}
              title={d.title}
              filename={d.filename}
              href={`${apiBase}/get-pdf/${encodeURIComponent(d.filename)}`}            />
          ))}
        </div>

        {loading && (
          <div className="mt-8 text-center text-sm text-gray-500">Loading...</div>
        )}
      </main>
    </div>
  );
}
