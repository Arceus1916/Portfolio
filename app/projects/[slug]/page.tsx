import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Masthead from "@/components/Masthead";
import Footer from "@/components/Footer";
import FloatingActionBar from "@/components/FloatingActionBar";
import { PROJECT_CASE_FILES } from "@/data/projects";
import {
  FileText,
  ExternalLink,
  ShieldCheck,
  Terminal,
  ArrowLeft,
  Award,
  Compass,
  Layers,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectCaseFilePage({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECT_CASE_FILES[slug.toLowerCase()];

  if (!project) {
    notFound();
  }

  const githubTargetUrl =
    project.repoName === "Arceus1916"
      ? "https://github.com/Arceus1916"
      : `https://github.com/Arceus1916/${project.repoName}`;

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Masthead title="Case File Dossier" date={project.date} />

      <main className="flex-1 max-w-[1100px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Return Banner */}
        <div className="border-b-2 border-ink-black pb-3 mb-6 flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest text-ink-black">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-paper-tan/20 hover:bg-ink-black hover:text-paper-cream px-3 py-1.5 border border-paper-tan rounded transition-colors font-bold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Front-Page Edition</span>
          </Link>

          <span className="flex items-center gap-1.5 font-bold text-paper-red">
            <FileText className="w-4 h-4" />
            {project.caseNumber} • OFFICIAL INVESTIGATION RECORD
          </span>
        </div>

        {/* Newspaper Headline */}
        <article aria-labelledby="case-file-title" className="space-y-8 font-serif">
          <header className="border-b-4 border-double border-paper-tan pb-6">
            <div className="text-xs font-mono uppercase font-bold text-paper-red tracking-widest mb-2">
              ROYAL SOCIETY OF COMPUTATIONAL ENGINEERS • SPECIAL ARCHIVE
            </div>
            <h1
              id="case-file-title"
              className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-ink-black font-headline leading-tight"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              {project.title}
            </h1>
            <p className="mt-4 text-lg sm:text-xl italic font-serif text-ink-black/90">
              {project.subtitle}
            </p>

            {/* Author Byline and Date */}
            <div className="mt-6 pt-4 border-t border-paper-tan/60 flex flex-wrap items-center justify-between text-xs sm:text-sm font-serif italic text-ink-black/80">
              <div>
                By <span className="font-bold not-italic uppercase">{project.author}</span>
              </div>
              <div className="font-mono not-italic text-paper-red font-bold uppercase">
                {project.date}
              </div>
            </div>
          </header>

          {/* SYNOPSIS & EDITORIAL INVESTIGATION (Drop Cap Newspaper Justified Text) */}
          <section aria-label="Synopsis and Investigation">
            <h2 className="text-xl sm:text-2xl font-bold uppercase font-headline tracking-wide text-ink-black mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-paper-red shrink-0" />
              Synopsis &amp; Editorial Investigation
            </h2>
            <div className="text-base sm:text-lg text-ink-black leading-relaxed font-serif text-justify newspaper-columns">
              <p className="drop-cap">{project.synopsis}</p>
            </div>
          </section>

          {/* IMPLEMENTATION ARCHITECTURE */}
          <section
            aria-label="Implementation Architecture"
            className="border-2 border-paper-tan bg-paper-tan/10 p-6 rounded-sm my-8"
          >
            <h2 className="text-xl sm:text-2xl font-bold uppercase font-headline tracking-wide text-ink-black mb-3 flex items-center gap-2">
              <Layers className="w-5 h-5 text-paper-red shrink-0" />
              Implementation Architecture &amp; Methodology
            </h2>
            <p className="text-base sm:text-lg text-ink-black leading-relaxed font-serif">
              {project.implementation}
            </p>
          </section>

          {/* MECHANICAL TECHNOLOGIES & INSTRUMENTS */}
          <section aria-label="Mechanical Technologies">
            <h2 className="text-lg sm:text-xl font-bold uppercase font-headline tracking-wide text-ink-black mb-4">
              Mechanical Technologies &amp; Instruments Employed
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider bg-paper-cream border-2 border-paper-tan text-ink-black rounded shadow-sm hover:border-paper-red transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* EVIDENCE & OUTCOMES */}
          <section aria-label="Evidence and Outcomes" className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold uppercase font-headline tracking-wide text-ink-black">
              Verified Evidence &amp; Empirical Outcomes
            </h2>
            <ul className="space-y-2.5 pt-2">
              {project.outcomes.map((outcome, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-base sm:text-lg font-serif text-ink-black"
                >
                  <ShieldCheck className="w-5 h-5 text-paper-red shrink-0 mt-1" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* CODE SPECIMEN (TYPEWRITER TELEGRAPH LOG) */}
          <section aria-label="Code Specimen" className="my-10">
            <div className="border-t-2 border-b-2 border-ink-black py-2 mb-4 flex items-center justify-between bg-paper-tan/15 px-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-ink-black flex items-center gap-2">
                <Terminal className="w-4 h-4 text-paper-red shrink-0" />
                {project.codeSpecimenTitle}
              </span>
              <span className="text-[10px] font-mono text-paper-red font-bold uppercase">
                TELEGRAPH REPRINT
              </span>
            </div>

            <div className="relative border-2 border-paper-tan bg-ink-black text-paper-cream p-4 sm:p-6 rounded-sm shadow-md overflow-x-auto">
              <div className="absolute top-2 right-3 text-[10px] font-mono uppercase tracking-widest text-paper-tan/60 select-none">
                TYPEWRITER TRANSMISSION LOG
              </div>
              <pre
                className="text-xs sm:text-sm font-mono leading-relaxed pt-3 text-paper-cream/95"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {project.codeSpecimen}
              </pre>
            </div>
          </section>

          {/* GITHUB DISPATCH FOOTER BUTTON */}
          <footer className="border-t-4 border-double border-paper-tan pt-8 pb-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm font-serif italic text-ink-black/80">
              Complete source code and project history available on GitHub.
            </div>

            <a
              href={githubTargetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ink-black hover:bg-paper-red text-paper-cream font-mono font-bold text-xs sm:text-sm uppercase tracking-widest px-6 py-3.5 rounded-sm transition-colors shadow-md"
            >
              <span>View Full Code on GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </footer>
        </article>
      </main>

      <FloatingActionBar />
      <Footer />
    </div>
  );
}
