import React from "react";
import Masthead from "@/components/Masthead";
import SideBySideArchivesAndExchange from "@/components/SideBySideArchivesAndExchange";
import { CaseFileProps } from "@/components/GitHubRepoCard";
import FloatingActionBar from "@/components/FloatingActionBar";
import Footer from "@/components/Footer";
import { Award, Compass, ShieldCheck, Newspaper, Terminal, Sparkles } from "lucide-react";

const PINNED_CASE_FILES: CaseFileProps[] = [
  {
    caseNumber: "Case #101",
    title: "Ocean Intelligence: Centralized Marine Research Platform",
    focus: "Full-Stack Marine Data & Real-Time Processing",
    keyFeature:
      "Automated data ingestion pipeline integrating marine biodiversity data into a PostgreSQL database with real-time analytics.",
    tech: ["React", "Node.js/Spring Boot", "PostgreSQL", "Python"],
    owner: "Arceus1916",
    repo: "Ocean-Intelligence",
    githubUrl: "https://github.com/Arceus1916",
  },
  {
    caseNumber: "Case #102",
    title: "Early Detection of Mental Illness via CNN & Interactive Agent",
    focus: "Deep Learning Diagnostics (Alzheimer’s Stage Classification)",
    keyFeature:
      "CNN model achieving 90%+ diagnostic accuracy on MRI scans, seamlessly integrated into a web-based prediction system.",
    tech: ["Python", "PyTorch", "Scikit-learn", "CNN", "Web API"],
    owner: "Arceus1916",
    repo: "Mental-Illness-Detection",
    githubUrl: "https://github.com/Arceus1916",
  },
  {
    caseNumber: "Case #103",
    title: "EnvDex: Premium Biodiversity Journal & Species Archive",
    focus: "Mobile Ecosystem & Offline-First Data Capture",
    keyFeature:
      "Pokédex-style mobile archive utilizing React Native, Expo, and Realm DB for local auth, GPS tagging, media storage, and species grouping.",
    tech: ["React Native", "Expo CLI", "Realm DB", "TypeScript"],
    owner: "Arceus1916",
    repo: "EnvDex",
    githubUrl: "https://github.com/Arceus1916",
  },
  {
    caseNumber: "Case #104",
    title: "URRJA: Decentralized Peer-to-Peer Energy Trading Prototype",
    focus: "P2P Energy Market & Distributed Ledgers",
    keyFeature:
      "Functional prototype enabling decentralized buying and selling of surplus residential solar energy directly between peer nodes.",
    tech: ["JavaScript/TypeScript", "Smart Logic", "Web API"],
    owner: "Arceus1916",
    repo: "URRJA",
    githubUrl: "https://github.com/Arceus1916",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-paper-cream">
      {/* Victorian Masthead Header with Hero Amey Rasekar Name Highlighted */}
      <Masthead showHeroName={true} />

      {/* Main Full-Page Newspaper Broadsheet Frame */}
      <main className="flex-1 max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12 py-8 border-x-2 border-b-2 border-ink-black/80">
        {/* TOP BROADSHEET GRID: LEAD STORY AND EXECUTIVE SUMMARY IN VICTORIAN COLUMNS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 border-b-4 border-double border-ink-black pb-10">
          {/* Left Column (8 cols on desktop): Lead Story & Editorial Investigation */}
          <section aria-label="Lead Story" className="lg:col-span-8 lg:border-r-2 lg:border-ink-black lg:pr-8">
            <div className="border-b-2 border-ink-black pb-1 mb-4 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-ink-black/80">
              <span className="flex items-center gap-1.5 font-bold text-paper-red">
                <Newspaper className="w-4 h-4" />
                FRONT-PAGE LEAD INVESTIGATION
              </span>
              <span>ENGINEERING BUREAU DISPATCH • PUNE, INDIA</span>
            </div>

            <h2
              className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink-black font-headline uppercase leading-none mb-4"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Architecting Resilient Full-Stack Systems &amp; Neural Computation Models
            </h2>

            <div className="border-y border-paper-tan py-2.5 my-4 flex flex-wrap items-center justify-between text-xs sm:text-sm font-serif italic text-ink-black/90">
              <div>
                By <span className="font-bold not-italic uppercase">Amey Rasekar</span> — Chief
                Computational Architect, Pune Bureau
              </div>
              <div className="font-mono not-italic text-xs text-paper-red font-bold">
                [VERIFIED ENGINEER ARCHIVE: ACTIVE DEPLOYMENT]
              </div>
            </div>

            {/* Multi-column newspaper justified body text with Drop Cap */}
            <div className="newspaper-columns text-base sm:text-lg text-ink-black leading-relaxed font-serif text-justify pt-2">
              <p className="drop-cap mb-4">
                Operating from the Pune Engineering Bureau, I have dedicated my career to synthesizing
                artificial intelligence, machine learning, and scalable full-stack computing. My work
                focuses on bridging deep neural models with real-time data ingestion pipelines—ranging
                from medical CNN diagnostic networks to decentralized energy ledgers and high-throughput
                biodiversity archives.
              </p>
              <p className="mb-4">
                Through resilient architectures in Python, React, TypeScript, and Spring Boot, I
                transform raw computational power into actionable, real-world intelligence. Whether I am
                architecting marine biodiversity engines that ingest live oceanic metrics or developing
                convolutional neural networks capable of recognizing early-stage cognitive anomalies
                with high precision, my engineering methodology always prioritizes sub-second speed,
                fault tolerance, and strict formal correctness.
              </p>
              <p>
                In an era dominated by fleeting technological trends, I build on first
                principles—combining modern type-safe frontend systems, distributed backend
                microservices, and rigorously evaluated AI models to deliver software that operates with
                the precision of a chronometer.
              </p>
            </div>
          </section>

          {/* Right Column (4 cols on desktop): Executive Summary & Architectural Credentials */}
          <aside
            aria-label="Executive Architectural Summary"
            className="lg:col-span-4 flex flex-col justify-between space-y-6"
          >
            <div className="border-4 border-double border-ink-black bg-paper-tan/15 p-5 rounded-sm">
              <div className="border-b-2 border-ink-black pb-2 mb-3 flex items-center justify-between">
                <h3
                  className="text-lg font-bold uppercase tracking-wide text-ink-black font-headline flex items-center gap-1.5"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  <Award className="w-5 h-5 text-paper-red shrink-0" />
                  Executive Dossier
                </h3>
                <span className="text-[10px] font-mono bg-paper-red text-paper-cream px-1.5 py-0.5 rounded font-bold">
                  MY SUMMARY
                </span>
              </div>

              <div className="space-y-4 font-serif text-sm sm:text-base text-ink-black leading-relaxed">
                <p>
                  <strong className="font-mono text-xs uppercase text-paper-red block mb-1">
                    01. PRIMARY EXPERTISE
                  </strong>
                  I specialize in full-stack engineering with scalable microservices, type-safe web
                  frontends, and production-grade deep learning architectures.
                </p>

                <p>
                  <strong className="font-mono text-xs uppercase text-paper-red block mb-1">
                    02. CORE TOOLING &amp; INSTRUMENTS
                  </strong>
                  My day-to-day engineering stack includes Python, TypeScript, React / Next.js, PyTorch,
                  Node.js, Spring Boot, PostgreSQL, and decentralized networking ledgers.
                </p>

                <p>
                  <strong className="font-mono text-xs uppercase text-paper-red block mb-1">
                    03. ENGINEERING PHILOSOPHY
                  </strong>
                  I believe in formal correctness, sub-second telemetry processing, and WCAG-compliant
                  interface design built to last.
                </p>
              </div>
            </div>

            {/* Telegraph Quick Dispatch Box */}
            <div className="border-2 border-ink-black bg-ink-black text-paper-cream p-5 rounded-sm">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-paper-tan mb-2 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-paper-red animate-pulse" />
                TELEGRAPH QUICK-DISPATCH
              </div>
              <p className="text-xs font-serif italic text-paper-cream/90 mb-4">
                Immediate access to full credentials, source code ledgers, and direct Pune bureau wire.
              </p>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="/contact"
                  className="text-center py-2 px-3 bg-paper-red hover:bg-paper-cream hover:text-ink-black text-paper-cream font-mono font-bold text-xs uppercase rounded transition-colors"
                >
                  Author&apos;s Quill
                </a>
                <a
                  href="/ledger"
                  className="text-center py-2 px-3 bg-paper-tan/30 hover:bg-paper-cream hover:text-ink-black text-paper-cream font-mono font-bold text-xs uppercase rounded transition-colors"
                >
                  Paper Ledger
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* SIDE-BY-SIDE COMPUTATIONAL EXCHANGE & TOP FLAGSHIP GITHUB ARCHIVES WITH AUTO-FLIPPING CARDS */}
        <SideBySideArchivesAndExchange projects={PINNED_CASE_FILES} />
      </main>

      <FloatingActionBar />
      <Footer />
    </div>
  );
}
