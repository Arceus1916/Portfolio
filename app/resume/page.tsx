import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Amey Rasekar - Official Architectural Resume",
  description:
    "Official Systems Engineering, Deep Learning (CNN), and Full-Stack Architectural Curriculum Vitae of Amey Rasekar — Pune Engineering Bureau.",
  icons: {
    icon: "/icon",
    shortcut: "/icon",
    apple: "/icon",
  },
};

export default function ResumeViewerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-ink-black text-paper-cream font-mono">
      {/* Telegraph Top Control Strip */}
      <header className="bg-ink-black border-b border-paper-tan px-4 py-3 flex flex-wrap items-center justify-between gap-4 select-none shadow-md">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 bg-paper-tan/20 hover:bg-paper-red text-paper-cream px-3 py-1.5 rounded text-xs font-bold uppercase transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Gazette</span>
          </Link>
          <span className="text-sm sm:text-base font-bold text-paper-cream tracking-wide">
            AMEY RASEKAR — OFFICIAL ARCHITECTURAL RESUME (EST. 2005)
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-paper-red hover:bg-paper-red/80 text-paper-cream px-4 py-1.5 rounded text-xs font-bold uppercase transition-colors"
          >
            <span>Raw PDF View</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href="/resume.pdf"
            download="Amey_Rasekar_Resume.pdf"
            className="inline-flex items-center gap-1.5 bg-paper-cream text-ink-black hover:bg-paper-tan/30 px-4 py-1.5 rounded text-xs font-bold uppercase transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-paper-red" />
            <span>Download PDF</span>
          </a>
        </div>
      </header>

      {/* Full-Screen PDF Viewer */}
      <div
        className="w-full bg-neutral-900 flex-1 flex flex-col"
        style={{ height: "calc(100vh - 58px)", minHeight: "850px" }}
      >
        <iframe
          src="/resume.pdf#view=FitH"
          className="w-full border-0 bg-white block flex-1"
          style={{ width: "100%", height: "calc(100vh - 58px)", minHeight: "850px" }}
          title="Amey Rasekar - Official Architectural Resume"
        />
      </div>
    </div>
  );
}
