"use client";

import React from "react";
import Link from "next/link";
import Masthead from "@/components/Masthead";
import Footer from "@/components/Footer";
import FloatingActionBar from "@/components/FloatingActionBar";
import { ArrowLeft, ExternalLink, Download, Scroll, ShieldCheck } from "lucide-react";

export default function LedgerPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-paper-cream">
      <Masthead title="Resume" date="OFFICIAL CV & CREDENTIAL ARCHIVE" />

      <main className="flex-1 max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="border-b-2 border-ink-black pb-3 mb-6 flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest text-ink-black">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-paper-tan/20 hover:bg-ink-black hover:text-paper-cream px-3 py-1.5 border border-paper-tan rounded transition-colors font-bold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>

          <span className="flex items-center gap-1.5 font-bold text-paper-red">
            <Scroll className="w-4 h-4" />
            AMEY RASEKAR • CURRICULUM VITAE
          </span>
        </div>

        {/* Action Header */}
        <div className="border-4 border-double border-ink-black bg-paper-tan/15 p-6 rounded-sm mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h1
              className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-ink-black font-headline"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Resume (Official CV)
            </h1>
            <p className="text-sm font-serif italic text-ink-black/85 mt-1">
              Verified record of systems engineering, deep neural architectures, and formal
              qualifications.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ink-black hover:bg-paper-red text-paper-cream font-mono font-bold text-xs uppercase tracking-widest px-5 py-3 rounded-sm transition-colors shadow-md"
            >
              <span>Open PDF in New Tab</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href="/resume.pdf"
              download="Amey_Rasekar_Resume.pdf"
              className="inline-flex items-center gap-2 bg-paper-cream hover:bg-paper-tan/30 text-ink-black border-2 border-ink-black font-mono font-bold text-xs uppercase tracking-widest px-4 py-2.5 rounded-sm transition-colors"
            >
              <Download className="w-4 h-4 text-paper-red" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* PDF Viewer Frame */}
        <div className="border-2 border-ink-black bg-ink-black/5 p-2 rounded-sm shadow-xl min-h-[800px] flex flex-col">
          <div className="bg-ink-black text-paper-cream px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-widest flex items-center justify-between mb-2">
            <span>● VICTORIAN TELEGRAPH PDF VIEWER</span>
            <span className="text-paper-red">PUNE ENGINEERING BUREAU</span>
          </div>

          <iframe
            src="/resume.pdf#view=FitH"
            className="w-full flex-1 min-h-[850px] border border-paper-tan rounded-xs bg-white"
            title="Amey Rasekar Resume PDF"
          />
        </div>

        <div className="mt-6 text-center text-xs font-mono uppercase text-ink-black/70">
          ● VERIFIED CREDENTIALS ARCHIVE • ROYAL SOCIETY OF COMPUTATIONAL ENGINEERS • MMV (2005)
        </div>
      </main>

      <FloatingActionBar />
      <Footer />
    </div>
  );
}
