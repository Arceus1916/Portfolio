import React from "react";
import Masthead from "@/components/Masthead";
import SideBySideArchivesAndExchange from "@/components/SideBySideArchivesAndExchange";
import AuthorPortraitCard from "@/components/AuthorPortraitCard";
import ScrollAnimatedSection from "@/components/ScrollAnimatedSection";
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
      <main className="flex-1 max-w-[1400px] w-full mx-auto px-3 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 border-x-0 sm:border-x-2 border-b-2 border-ink-black/80 overflow-hidden">
        {/* TOP BROADSHEET GRID: LEAD STORY AND EXECUTIVE SUMMARY IN VICTORIAN COLUMNS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 border-b-4 border-double border-ink-black pb-10">
          {/* Left Column (8 cols on desktop): Lead Story & Editorial Investigation */}
          <ScrollAnimatedSection
            as="section"
            duration={0.65}
            className="lg:col-span-8 lg:border-r-2 lg:border-ink-black lg:pr-8"
          >
            <div className="border-b-2 border-ink-black pb-1 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-ink-black/80 text-center sm:text-left">
              <span className="flex items-center justify-center sm:justify-start gap-1.5 font-bold text-paper-red">
                <Newspaper className="w-4 h-4 shrink-0" />
                <span>FRONT-PAGE LEAD INVESTIGATION</span>
              </span>
              <span>ENGINEERING BUREAU DISPATCH • PUNE, INDIA</span>
            </div>

            <h2
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink-black font-headline uppercase leading-tight sm:leading-none mb-4 text-balance hover:text-paper-red transition-colors duration-300"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Architecting Resilient Full-Stack Systems &amp; Neural Computation Models
            </h2>

            <div className="border-y border-paper-tan py-2.5 my-4 flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between gap-1 text-xs sm:text-sm font-serif italic text-ink-black/90">
              <div>
                By <span className="font-bold not-italic uppercase">Amey Rasekar</span> — Software
                Associate, Pune, India
              </div>
              <div className="font-mono not-italic text-[11px] sm:text-xs text-paper-red font-bold">
                [VERIFIED ENGINEER ARCHIVE: ACTIVE DEPLOYMENT]
              </div>
            </div>

            {/* Multi-column newspaper justified body text with Drop Cap */}
            <div className="newspaper-columns text-sm sm:text-base md:text-lg text-ink-black leading-relaxed font-serif text-justify pt-2">
              <p className="drop-cap mb-4">
                Operating from Pune, India, I have dedicated my career to synthesizing
                artificial intelligence, machine learning, and scalable full-stack computing. My work
                focuses on bridging deep neural models with real-time data ingestion pipelines—ranging
                from medical CNN diagnostic networks to decentralized energy platforms and high-throughput
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

            {/* Executive Summary Box (Left Column) */}
            <div
              className="mt-8 border-4 border-double border-ink-black bg-paper-tan/15 p-4 sm:p-5 rounded-sm hover:border-paper-red hover:shadow-[0_4px_20px_rgba(167,42,36,0.12)] transition-all duration-300"
            >
              <div className="border-b-2 border-ink-black pb-2 mb-3 flex items-center justify-between">
                <h3
                  className="text-base sm:text-lg font-bold uppercase tracking-wide text-ink-black font-headline flex items-center gap-1.5"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  <Award className="w-5 h-5 text-paper-red shrink-0" />
                  <span>Executive Summary</span>
                </h3>
                <span className="font-mono text-xs text-paper-red font-bold">
                  MMV (2005)
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
                  Node.js, Spring Boot, PostgreSQL, and decentralized networking platforms.
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
          </ScrollAnimatedSection>

          {/* Right Column (4 cols on desktop): Author Portrait Card & Executive Summary */}
          <aside
            aria-label="Author Portrait and Executive Summary"
            className="lg:col-span-4 flex flex-col justify-start space-y-6"
          >
            {/* Eye-Catching Profile Photo Card */}
            <AuthorPortraitCard />

            {/* Certifications Box */}
            <ScrollAnimatedSection
              delay={0.15}
              duration={0.6}
              className="border-2 border-ink-black bg-paper-tan/10 p-4 sm:p-5 rounded-sm hover:border-paper-red hover:shadow-md transition-all duration-300"
            >
              <div className="border-b-2 border-ink-black pb-2 mb-3 flex items-center justify-between">
                <h3
                  className="text-base sm:text-lg font-bold uppercase tracking-wide text-ink-black font-headline flex items-center gap-1.5"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  <ShieldCheck className="w-5 h-5 text-paper-red shrink-0" />
                  <span>Official Certifications</span>
                </h3>
                <span className="font-mono text-[10px] text-ink-black/70 font-bold uppercase bg-paper-tan/30 px-1.5 py-0.5 rounded">VERIFIED</span>
              </div>
              <ul className="space-y-3 font-serif text-sm sm:text-base text-ink-black leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="font-mono text-paper-red mt-1">●</span>
                  <div>
                    <a 
                      href="/certificates/23bce8587_OracleJavaFoundationAssociate.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-bold hover:text-paper-red hover:underline transition-colors block"
                    >
                      Oracle Java Foundation Associate
                    </a>
                    <span className="font-mono text-xs text-ink-black/70">Oracle Testing ID: OC8077282</span>
                  </div>
                </li>
              </ul>
            </ScrollAnimatedSection>

            {/* Quick Links Box */}
            <ScrollAnimatedSection
              delay={0.25}
              duration={0.6}
              className="border-2 border-ink-black bg-ink-black text-paper-cream p-4 sm:p-5 rounded-sm shadow-md"
            >
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-paper-tan mb-2 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-paper-red animate-pulse shrink-0" />
                <span>QUICK LINKS &amp; ACCESS</span>
              </div>
              <p className="text-xs font-serif italic text-paper-cream/90 mb-4">
                Immediate access to full credentials, project source code, and direct contact line.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href="/contact"
                  className="text-center py-2 px-3 bg-paper-red hover:bg-paper-cream hover:text-ink-black text-paper-cream font-mono font-bold text-xs uppercase rounded transition-colors"
                >
                  <div>Contact</div>
                  <div className="text-[10px] font-normal opacity-90">(Email)</div>
                </a>
                <a
                  href="/ledger"
                  className="text-center py-2 px-3 bg-paper-tan/30 hover:bg-paper-cream hover:text-ink-black text-paper-cream font-mono font-bold text-xs uppercase rounded transition-colors"
                >
                  <div>Resume</div>
                  <div className="text-[10px] font-normal opacity-90">(Official CV)</div>
                </a>
              </div>
            </ScrollAnimatedSection>
          </aside>
        </div>

        {/* SIDE-BY-SIDE COMPUTATIONAL EXCHANGE & TOP FLAGSHIP GITHUB ARCHIVES WITH AUTO-FLIPPING CARDS */}
        <ScrollAnimatedSection delay={0.1} duration={0.6}>
          <SideBySideArchivesAndExchange projects={PINNED_CASE_FILES} />
        </ScrollAnimatedSection>
      </main>

      <FloatingActionBar />
      <Footer />
    </div>
  );
}
