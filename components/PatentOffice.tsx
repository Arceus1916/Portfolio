"use client";

import React, { useState } from "react";
import { ShieldCheck, Award, Sparkles, Stamp, CheckCircle2 } from "lucide-react";

interface PatentItem {
  id: string;
  patentNo: string;
  title: string;
  inventor: string;
  claim: string;
  technicalMerit: string;
}

const PATENTS: PatentItem[] = [
  {
    id: "ai-engine",
    patentNo: "PATENT NO. 2005-CNN",
    title: "90%+ Accuracy Alzheimer's Diagnostic Network",
    inventor: "Amey Rasekar (Pune, India)",
    claim:
      "I designed and trained a deep Convolutional Neural Network on MRI cross-sections to classify stages of cognitive degeneration with 90%+ empirical precision.",
    technicalMerit: "PyTorch • Python • Multi-Layer Convolutional Verification",
  },
  {
    id: "query-engine",
    patentNo: "PATENT NO. 2005-GEO",
    title: "Sub-200ms Biodiversity Telemetry Ingestor",
    inventor: "Amey Rasekar (Pune, India)",
    claim:
      "I engineered a high-throughput spatial querying apparatus capable of indexing multi-million row ecological datasets with negligible latency.",
    technicalMerit: "PostgreSQL • Spring Boot • Spatial GeoJSON Engine",
  },
  {
    id: "p2p-ledger",
    patentNo: "PATENT NO. 2005-P2P",
    title: "Decentralized Peer-to-Peer Energy Trading Ledger",
    inventor: "Amey Rasekar (Pune, India)",
    claim:
      "I built an automated smart-contract prototype allowing residential nodes to directly barter surplus solar electricity across a peer-to-peer wire.",
    technicalMerit: "TypeScript • Decentralized Consensus • Zero-Intermediary",
  },
  {
    id: "fullstack-arch",
    patentNo: "PATENT NO. 2005-ARCH",
    title: "Type-Safe Full-Stack Newspaper Interface Apparatus",
    inventor: "Amey Rasekar (Pune, India)",
    claim:
      "I architected this responsive, highly accessible broadsheet web application with sub-second asset hydration and WCAG-compliant high-contrast print.",
    technicalMerit: "Next.js 15 App Router • Tailwind CSS v4 • Type-Safe TS",
  },
];

export default function PatentOffice() {
  const [stampedPatents, setStampedPatents] = useState<Record<string, boolean>>({
    "ai-engine": true, // First one stamped by default as a demo
  });

  const toggleStamp = (id: string) => {
    setStampedPatents((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      aria-label="Royal Society Patent Office & Verified Endorsements"
      className="my-14 border-4 border-double border-ink-black bg-paper-cream p-5 sm:p-8 rounded-sm shadow-lg"
    >
      {/* Ornate Header */}
      <div className="border-b-2 border-ink-black pb-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div className="text-xs font-mono font-bold uppercase text-paper-red tracking-widest mb-1 flex items-center gap-1.5">
            <Stamp className="w-4 h-4 text-paper-red" />
            ROYAL SOCIETY PATENT OFFICE • PUNE ENGINEERING BUREAU
          </div>
          <h2
            className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-ink-black font-headline"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Registered Mechanical Patents &amp; Architectural Claims
          </h2>
          <p className="text-xs font-serif italic text-ink-black/80 mt-1">
            Click any patent specification below to stamp and inspect formal society verification.
          </p>
        </div>

        <span className="text-xs font-mono font-bold bg-ink-black text-paper-cream px-3 py-1.5 rounded uppercase shrink-0">
          ● 4 ACTIVE CERTIFICATES
        </span>
      </div>

      {/* 2x2 Patent Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PATENTS.map((item) => {
          const isStamped = !!stampedPatents[item.id];
          return (
            <div
              key={item.id}
              onClick={() => toggleStamp(item.id)}
              className={`relative border-2 transition-all p-5 rounded-sm cursor-pointer select-none group ${
                isStamped
                  ? "border-paper-red bg-paper-tan/15 shadow-md"
                  : "border-ink-black bg-paper-cream hover:border-paper-red hover:shadow-md"
              }`}
            >
              {/* Top Patent Number Bar */}
              <div className="flex items-center justify-between border-b border-paper-tan pb-2 mb-3">
                <span className="text-xs font-mono font-bold uppercase text-paper-red tracking-widest">
                  {item.patentNo}
                </span>
                <span className="text-[10px] font-mono text-ink-black/70 uppercase">
                  INVENTOR: {item.inventor}
                </span>
              </div>

              {/* Title and Claim */}
              <h3
                className="text-lg font-bold font-headline uppercase text-ink-black mb-2 group-hover:text-paper-red transition-colors"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                {item.title}
              </h3>
              <p className="text-sm font-serif text-ink-black/90 leading-relaxed mb-4">
                {item.claim}
              </p>

              {/* Technical Merit Footer */}
              <div className="flex items-center justify-between pt-2 border-t border-paper-tan/50 text-xs font-mono">
                <span className="text-ink-black/80 font-bold">{item.technicalMerit}</span>
                <span className="text-paper-red font-bold underline">
                  {isStamped ? "INSPECTED" : "CLICK TO STAMP"}
                </span>
              </div>

              {/* Stamped Wax Seal Overlay */}
              {isStamped && (
                <div className="absolute top-3 right-3 transform rotate-12 animate-fade-in pointer-events-none">
                  <div className="w-16 h-16 rounded-full border-4 border-paper-red bg-paper-red/95 text-paper-cream flex flex-col items-center justify-center text-center shadow-lg">
                    <Award className="w-5 h-5 text-paper-cream mb-0.5" />
                    <span className="text-[7px] font-mono font-bold tracking-widest uppercase leading-none">
                      VERIFIED
                    </span>
                    <span className="text-[6px] font-mono tracking-tighter text-paper-tan mt-0.5">
                      PUNE 2005
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-3 border-t border-paper-tan/60 text-center text-xs font-mono uppercase text-ink-black/70">
        ● ALL CLAIMS VERIFIED UNDER EMPIRICAL BENCHMARKS • PUNE ENGINEERING BUREAU ARCHIVES
      </div>
    </section>
  );
}
