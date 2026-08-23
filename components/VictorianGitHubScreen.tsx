"use client";

import React, { useState } from "react";
import GitHubRepoCard, { CaseFileProps } from "./GitHubRepoCard";
import {
  Terminal,
  Activity,
  GitCommit,
  GitFork,
  Star,
  ExternalLink,
  ShieldCheck,
  Radio,
  Cpu,
  Layers,
} from "lucide-react";

interface VictorianGitHubScreenProps {
  projects: CaseFileProps[];
}

export default function VictorianGitHubScreen({ projects }: VictorianGitHubScreenProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");

  // Filter top 4 projects
  const top4Projects = projects.slice(0, 4);

  // Generate a mock 12-week Victorian punch-card contribution ledger (GitHub squares in Victorian palette)
  const weeks = 16;
  const daysPerWeek = 7;
  const punchCardData = React.useMemo(() => {
    const grid: number[][] = [];
    for (let w = 0; w < weeks; w++) {
      const week: number[] = [];
      for (let d = 0; d < daysPerWeek; d++) {
        // pseudo-random contribution intensity 0 to 3
        const intensity = (w * 3 + d * 5 + 7) % 4;
        week.push(intensity);
      }
      grid.push(week);
    }
    return grid;
  }, []);

  const getPunchStyle = (intensity: number) => {
    switch (intensity) {
      case 3:
        return "bg-paper-red text-paper-cream border-ink-black shadow-[inset_0_0_2px_rgba(0,0,0,0.5)]";
      case 2:
        return "bg-paper-tan text-paper-cream border-ink-black";
      case 1:
        return "bg-paper-tan/40 text-ink-black border-paper-tan";
      default:
        return "bg-paper-cream/80 text-ink-black border-paper-tan/30";
    }
  };

  return (
    <section
      aria-label="Victorian GitHub Telegraph Console"
      className="my-10 border-4 border-double border-ink-black bg-paper-cream p-4 sm:p-6 lg:p-8 rounded-sm shadow-xl"
    >
      {/* Telegraph Console Top Bar */}
      <div className="border-b-2 border-ink-black pb-3 mb-6 flex flex-wrap items-center justify-between gap-4 bg-ink-black text-paper-cream p-3 rounded-sm">
        <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-widest">
          <Terminal className="w-4 h-4 text-paper-red shrink-0 animate-pulse" />
          <span>GITHUB TELEGRAPH CONSOLE • WIRE MONITOR: ARCEUS1916</span>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono">
          <span className="flex items-center gap-1.5 text-paper-cream">
            <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            WIRE STATUS: ONLINE
          </span>
          <a
            href="https://github.com/Arceus1916"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-paper-red hover:bg-paper-cream hover:text-ink-black text-paper-cream px-2.5 py-1 rounded transition-colors font-bold uppercase"
          >
            <span>GITHUB BUREAU</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Engineer Identification Bar within GitHub Screen */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border-2 border-ink-black bg-paper-tan/15 p-4 mb-8 text-xs font-mono uppercase tracking-wider text-ink-black">
        <div className="border-b md:border-b-0 md:border-r border-paper-tan pb-2 md:pb-0 md:pr-4">
          <div className="text-[10px] text-ink-black/60">AUTHOR ARCHIVE</div>
          <div className="text-sm font-bold text-paper-red font-serif">AMEY RASEKAR</div>
          <div className="text-[11px] text-ink-black/80">(@Arceus1916)</div>
        </div>

        <div className="border-b md:border-b-0 md:border-r border-paper-tan pb-2 md:pb-0 md:pr-4">
          <div className="text-[10px] text-ink-black/60">CORE COMPUTATIONAL STACK</div>
          <div className="font-bold">PYTORCH • NEXT.JS • SPRING BOOT</div>
          <div className="text-[11px] text-ink-black/80">FULL-STACK SYSTEMS</div>
        </div>

        <div className="border-b md:border-b-0 md:border-r border-paper-tan pb-2 md:pb-0 md:pr-4">
          <div className="text-[10px] text-ink-black/60">TELEGRAPH DISPATCHES</div>
          <div className="font-bold flex items-center gap-1.5">
            <GitCommit className="w-3.5 h-3.5 text-paper-red" />
            <span>15+ REPOSITORIES</span>
          </div>
          <div className="text-[11px] text-ink-black/80">VERIFIED CODE SPECIMENS</div>
        </div>

        <div>
          <div className="text-[10px] text-ink-black/60">BUREAU HEADQUARTERS</div>
          <div className="font-bold text-ink-black">PUNE ENGINEERING BUREAU</div>
          <div className="text-[11px] text-paper-red font-bold">● INDIA DIVISION</div>
        </div>
      </div>

      {/* 19TH-CENTURY PUNCH-CARD CONTRIBUTION LEDGER (GITHUB SQUARES IN VICTORIAN PALETTE) */}
      <div className="border-2 border-paper-tan bg-ink-black text-paper-cream p-4 sm:p-5 rounded-sm mb-10 shadow-inner overflow-x-auto">
        <div className="flex items-center justify-between border-b border-paper-tan/40 pb-2 mb-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-paper-cream flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-paper-red" />
            16-WEEK MECHANICAL CONTRIBUTION LEDGER (PUNCH-CARD ACTIVITY ARCHIVE)
          </span>
          <div className="flex items-center gap-2 text-[10px] font-mono text-paper-tan">
            <span>LESS</span>
            <span className="w-2.5 h-2.5 inline-block bg-paper-cream/80 border border-paper-tan/40" />
            <span className="w-2.5 h-2.5 inline-block bg-paper-tan/40 border border-paper-tan" />
            <span className="w-2.5 h-2.5 inline-block bg-paper-tan border border-ink-black" />
            <span className="w-2.5 h-2.5 inline-block bg-paper-red border border-ink-black" />
            <span>MORE</span>
          </div>
        </div>

        {/* The Contribution Squares Grid */}
        <div className="flex gap-1.5 min-w-[500px] py-1">
          {punchCardData.map((week, weekIdx) => (
            <div key={weekIdx} className="flex flex-col gap-1.5 flex-1">
              {week.map((intensity, dayIdx) => (
                <div
                  key={dayIdx}
                  title={`Punch Card Week ${weekIdx + 1}, Day ${dayIdx + 1}: ${
                    intensity * 3 + 1
                  } Commits Transmitted`}
                  className={`w-3.5 h-3.5 rounded-xs border transition-transform hover:scale-125 cursor-pointer ${getPunchStyle(
                    intensity
                  )}`}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="mt-2 text-[10px] font-mono uppercase text-paper-cream/60 flex justify-between">
          <span>● CONTINUOUS MECHANICAL RECORDING</span>
          <span>● UPDATED FROM PUNE, INDIA</span>
        </div>
      </div>

      {/* TOP 4 GITHUB PROJECTS SECTION HEADER */}
      <div className="border-t-2 border-b-2 border-ink-black py-2.5 my-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-paper-tan/20 px-4">
        <div>
          <h2
            className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-ink-black font-headline flex items-center gap-2.5"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            <Layers className="w-6 h-6 text-paper-red" />
            Top 4 Flagship GitHub Archives
          </h2>
          <p className="text-xs font-mono uppercase tracking-wider text-ink-black/80">
            SELECTED FULL-STACK ARCHITECTURAL DOSSIERS &amp; NEURAL CODE SPECIMENS
          </p>
        </div>

        <span className="text-xs font-mono font-bold uppercase bg-ink-black text-paper-cream px-3 py-1.5 rounded-sm">
          DISPLAYING TOP 4 OF 15 ARCHIVES
        </span>
      </div>

      {/* TOP 4 PROJECTS NEWSPAPER GRID (2x2 FRAME-BASED LAYOUT) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-6">
        {top4Projects.map((project, index) => (
          <div
            key={project.caseNumber}
            className="flex flex-col h-full border-2 border-ink-black bg-paper-cream shadow-md hover:shadow-xl transition-shadow"
          >
            {/* Index Ribbon for the Newspaper Frame */}
            <div className="bg-ink-black text-paper-cream px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-widest flex items-center justify-between">
              <span>FLAGSHIP ARCHIVE #0{index + 1}</span>
              <span className="text-paper-red">★ VERIFIED CODEBASE ★</span>
            </div>
            <div className="flex-1 p-2">
              <GitHubRepoCard {...project} />
            </div>
          </div>
        ))}
      </div>

      {/* TELEGRAPH CONSOLE FOOTER ACTION */}
      <div className="border-t-2 border-ink-black pt-6 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-black">
        <div>
          <span>ALL PROJECTS VERIFIED UNDER APACHE-2.0 &amp; MIT LICENSES • </span>
          <span className="font-bold text-paper-red">PUNE ENGINEERING BUREAU</span>
        </div>

        <a
          href="https://github.com/Arceus1916?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-ink-black hover:bg-paper-red text-paper-cream font-mono font-bold text-xs uppercase tracking-widest px-5 py-3 rounded-sm transition-colors shadow-md"
        >
          <span>Explore All 15+ Repositories on GitHub Wire</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
