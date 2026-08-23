"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GitHubRepoCard, { CaseFileProps } from "./GitHubRepoCard";
import { STOCK_MARKET_DATA, SectorCategory, StockInstrument } from "./TechStockMarket";
import {
  TrendingUp,
  Layers,
  Pause,
  Play,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Database,
  Layout,
  Award,
  Activity,
  Terminal,
  ExternalLink,
  Radio,
  Sparkles,
} from "lucide-react";

interface SideBySideProps {
  projects: CaseFileProps[];
}

export default function SideBySideArchivesAndExchange({ projects }: SideBySideProps) {
  // Left Column State: Computational Exchange Sectors (4 total)
  const [exchangeIndex, setExchangeIndex] = useState<number>(0);
  const [exchangePaused, setExchangePaused] = useState<boolean>(false);

  // Right Column State: Top Flagship GitHub Archives (4 total)
  const [archiveIndex, setArchiveIndex] = useState<number>(0);
  const [archivePaused, setArchivePaused] = useState<boolean>(false);

  const top4Projects = projects.slice(0, 4);
  const totalSectors = STOCK_MARKET_DATA.length;
  const totalArchives = top4Projects.length;

  // Auto-flip timer for Left Column (Computational Exchange) - flips every 4.5 seconds by default
  useEffect(() => {
    if (exchangePaused) return;
    const timer = setInterval(() => {
      setExchangeIndex((prev) => (prev + 1) % totalSectors);
    }, 4500);
    return () => clearInterval(timer);
  }, [exchangePaused, totalSectors]);

  // Auto-flip timer for Right Column (Top Flagship GitHub Archives) - flips every 5 seconds by default
  useEffect(() => {
    if (archivePaused) return;
    const timer = setInterval(() => {
      setArchiveIndex((prev) => (prev + 1) % totalArchives);
    }, 5000);
    return () => clearInterval(timer);
  }, [archivePaused, totalArchives]);

  const handleExchangeNext = () => {
    setExchangeIndex((prev) => (prev + 1) % totalSectors);
  };
  const handleExchangePrev = () => {
    setExchangeIndex((prev) => (prev - 1 + totalSectors) % totalSectors);
  };

  const handleArchiveNext = () => {
    setArchiveIndex((prev) => (prev + 1) % totalArchives);
  };
  const handleArchivePrev = () => {
    setArchiveIndex((prev) => (prev - 1 + totalArchives) % totalArchives);
  };

  // Generate a mock 16-week Victorian punch-card contribution ledger
  const weeks = 16;
  const daysPerWeek = 7;
  const punchCardData = React.useMemo(() => {
    const grid: number[][] = [];
    for (let w = 0; w < weeks; w++) {
      const week: number[] = [];
      for (let d = 0; d < daysPerWeek; d++) {
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

  const getSectorIcon = (sectorName: string) => {
    switch (sectorName) {
      case "AI & NEURAL ENGINES":
        return <Cpu className="w-5 h-5 text-paper-red" />;
      case "WEB & FRONT-END APPARATUS":
        return <Layout className="w-5 h-5 text-paper-red" />;
      case "BACK-END & DISTRIBUTED LEDGERS":
        return <Database className="w-5 h-5 text-paper-red" />;
      default:
        return <Award className="w-5 h-5 text-paper-red" />;
    }
  };

  const currentSector: SectorCategory = STOCK_MARKET_DATA[exchangeIndex] || STOCK_MARKET_DATA[0];
  const currentArchive: CaseFileProps = top4Projects[archiveIndex] || top4Projects[0];

  return (
    <section
      aria-label="Side by Side Computational Exchange and Top Flagship GitHub Archives"
      className="my-10 border-4 border-double border-ink-black bg-paper-cream p-4 sm:p-6 lg:p-8 rounded-sm shadow-xl"
    >
      {/* Newspaper Section Title Ribbon */}
      <div className="border-b-2 border-ink-black pb-4 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-ink-black text-paper-cream text-xs font-mono font-bold uppercase tracking-widest rounded-sm mb-2">
            <Sparkles className="w-3.5 h-3.5 text-paper-red" />
            <span>PUNE, INDIA — SPECIAL TECHNICAL EXHIBIT</span>
          </div>
          <h2
            className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-ink-black font-headline"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Technical Equities Exchange &amp; Flagship Code Archives
          </h2>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono uppercase font-bold text-ink-black/80">
          <span className="flex items-center gap-1 bg-paper-tan/20 border border-paper-tan px-2.5 py-1 rounded">
            <Radio className="w-3.5 h-3.5 text-paper-red animate-pulse" />
            AUTO-FLIPPING ENABLED
          </span>
        </div>
      </div>

      {/* TWO-COLUMN NEWSPAPER BROADSHEET LAYOUT: LEFT = EXCHANGE, RIGHT = GITHUB ARCHIVES */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-6">
        {/* ==================== LEFT COLUMN: COMPUTATIONAL EXCHANGE ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col h-full border-2 border-ink-black bg-paper-cream rounded-sm overflow-hidden shadow-md hover:border-paper-red hover:shadow-[0_8px_30px_rgba(167,42,36,0.12)] transition-all duration-300"
        >
          {/* Engraved Header */}
          <div className="border-b-2 border-ink-black bg-paper-tan/20 p-4 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-paper-red bg-paper-red/10 border border-paper-red/30 px-2.5 py-0.5 rounded">
                MARKET SECTOR {exchangeIndex + 1} OF {totalSectors}
              </span>
              <span className="text-[11px] font-mono text-ink-black/70 font-bold uppercase">
                EQUITIES INDEX: BULLISH
              </span>
            </div>
            <h3
              className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-ink-black font-headline flex items-center gap-2"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              <TrendingUp className="w-6 h-6 text-paper-red shrink-0" />
              Computational exchange index
            </h3>
            <p className="text-xs font-mono uppercase tracking-wider text-ink-black/80">
              REAL-TIME QUOTATION OF TECHNICAL EQUITIES, INSTRUMENTS &amp; COMPETENCIES
            </p>
          </div>

          {/* Interactive Mechanical Toolbar: Pause/Resume & Navigation */}
          <div className="border-b border-paper-tan/80 bg-ink-black text-paper-cream px-4 py-2.5 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setExchangePaused(!exchangePaused)}
                aria-label={exchangePaused ? "Resume auto-flip" : "Pause auto-flip"}
                className="flex items-center gap-1.5 px-2.5 py-1 bg-paper-red hover:bg-paper-tan text-paper-cream font-bold rounded-xs transition-colors"
              >
                {exchangePaused ? (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    <span>RESUME</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span>PAUSE</span>
                  </>
                )}
              </button>
              <span className="text-[11px] text-paper-cream/80 hidden sm:inline">
                {exchangePaused ? "[AUTO-FLIP PAUSED]" : "[FLIPS EVERY 4.5s]"}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleExchangePrev}
                aria-label="Previous Market Sector"
                className="p-1 bg-paper-tan/20 hover:bg-paper-red text-paper-cream rounded-xs transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="px-2 py-0.5 bg-ink-black border border-paper-tan/40 text-[11px] font-bold">
                0{exchangeIndex + 1} / 0{totalSectors}
              </span>
              <button
                type="button"
                onClick={handleExchangeNext}
                aria-label="Next Market Sector"
                className="p-1 bg-paper-tan/20 hover:bg-paper-red text-paper-cream rounded-xs transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Animated Flipping Sector Card Container */}
          <div className="flex-1 p-5 sm:p-6 bg-paper-cream relative min-h-[380px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={exchangeIndex}
                initial={{ rotateX: 25, opacity: 0, scale: 0.96 }}
                animate={{ rotateX: 0, opacity: 1, scale: 1 }}
                exit={{ rotateX: -25, opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col h-full justify-between"
              >
                <div>
                  {/* Active Sector Name Banner */}
                  <div className="flex items-center gap-2.5 border-b-2 border-ink-black pb-3 mb-5">
                    {getSectorIcon(currentSector.sectorName)}
                    <h4
                      className="text-xl font-bold uppercase tracking-tight text-ink-black font-headline"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {currentSector.sectorName}
                    </h4>
                  </div>

                  {/* Stock Instruments Table */}
                  <div className="space-y-3">
                    {currentSector.instruments.map((item: StockInstrument) => (
                      <div
                        key={item.ticker}
                        className="flex items-center justify-between p-3 border-2 border-paper-tan/60 hover:border-ink-black bg-paper-cream rounded-sm transition-colors shadow-xs group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs font-bold uppercase bg-ink-black text-paper-cream px-2.5 py-1 rounded-xs">
                            {item.ticker}
                          </span>
                          <div>
                            <div className="text-sm sm:text-base font-bold text-ink-black font-serif group-hover:text-paper-red transition-colors">
                              {item.name}
                            </div>
                            <div className="text-[11px] font-mono uppercase text-ink-black/70">
                              EQUITY CLASS: VERIFIED
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className={`text-sm font-mono font-bold flex items-center justify-end gap-1 ${item.trend === "up" ? "text-emerald-600" : "text-red-600"}`}>
                            {item.trend === "up" ? "▲" : "▼"} {item.yieldIndex}
                          </div>
                          <span className="text-[10px] font-mono font-bold uppercase bg-paper-tan/20 text-ink-black px-1.5 py-0.5 rounded">
                            {item.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sector Footer Note */}
                <div className="mt-6 pt-3 border-t border-paper-tan/60 flex flex-wrap items-center justify-between gap-1 text-[10px] sm:text-xs font-mono uppercase text-ink-black/70">
                  <span>● AUDITED TECHNICAL LEDGER • PUNE, INDIA</span>
                  <span className="font-bold text-paper-red">SECTOR 0{exchangeIndex + 1} / 04</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ==================== RIGHT COLUMN: TOP FLAGSHIP GITHUB ARCHIVES ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="flex flex-col h-full border-2 border-ink-black bg-paper-cream rounded-sm overflow-hidden shadow-md hover:border-paper-red hover:shadow-[0_8px_30px_rgba(167,42,36,0.12)] transition-all duration-300"
        >
          {/* Engraved Header */}
          <div className="border-b-2 border-ink-black bg-paper-tan/20 p-4 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-paper-red bg-paper-red/10 border border-paper-red/30 px-2.5 py-0.5 rounded">
                ARCHIVE DOSSIER {archiveIndex + 1} OF {totalArchives}
              </span>
              <span className="text-[11px] font-mono text-ink-black/70 font-bold uppercase">
                GITHUB WIRE: SYNCED
              </span>
            </div>
            <h3
              className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-ink-black font-headline flex items-center gap-2"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              <Layers className="w-6 h-6 text-paper-red shrink-0" />
              Top flagship GitHub archives
            </h3>
            <p className="text-xs font-mono uppercase tracking-wider text-ink-black/80">
              SELECTED FULL-STACK ARCHITECTURAL DOSSIERS &amp; NEURAL CODE SPECIMENS
            </p>
          </div>

          {/* Interactive Mechanical Toolbar: Pause/Resume & Navigation */}
          <div className="border-b border-paper-tan/80 bg-ink-black text-paper-cream px-4 py-2.5 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setArchivePaused(!archivePaused)}
                aria-label={archivePaused ? "Resume auto-flip" : "Pause auto-flip"}
                className="flex items-center gap-1.5 px-2.5 py-1 bg-paper-red hover:bg-paper-tan text-paper-cream font-bold rounded-xs transition-colors"
              >
                {archivePaused ? (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    <span>RESUME</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span>PAUSE</span>
                  </>
                )}
              </button>
              <span className="text-[11px] text-paper-cream/80 hidden sm:inline">
                {archivePaused ? "[AUTO-FLIP PAUSED]" : "[FLIPS EVERY 4.5s]"}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleArchivePrev}
                aria-label="Previous Archive"
                className="p-1 bg-paper-tan/20 hover:bg-paper-red text-paper-cream rounded-xs transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="px-2 py-0.5 bg-ink-black border border-paper-tan/40 text-[11px] font-bold">
                0{archiveIndex + 1} / 0{totalArchives}
              </span>
              <button
                type="button"
                onClick={handleArchiveNext}
                aria-label="Next Archive"
                className="p-1 bg-paper-tan/20 hover:bg-paper-red text-paper-cream rounded-xs transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive GitHub Dossier Card with Auto-Flip and AnimatePresence */}
          <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between bg-paper-cream relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentArchive.repo}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full justify-between"
              >
                <div>
                  {/* Top Flagship Index Banner inside Card */}
                  <div className="bg-ink-black text-paper-cream px-3 py-1.5 text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-widest flex flex-wrap items-center justify-between gap-1 rounded-t-sm mb-4">
                    <span>FLAGSHIP ARCHIVE #0{archiveIndex + 1} OF 0{totalArchives}</span>
                    <span className="text-paper-red">★ VERIFIED CODEBASE ★</span>
                  </div>

                  {/* Render the GitHub Repo Dossier Card */}
                  <div className="flex-1">
                    <GitHubRepoCard {...currentArchive} />
                  </div>
                </div>

                {/* Card Footer Metric */}
                <div className="mt-6 pt-3 border-t border-paper-tan/60 flex flex-wrap items-center justify-between gap-1 text-[10px] sm:text-xs font-mono uppercase text-ink-black/70">
                  <span>● APACHE-2.0 / MIT OPEN ARCHIVE</span>
                  <span className="font-bold text-paper-red">DOSSIER 0{archiveIndex + 1} / 04</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* ==================== 16-WEEK MECHANICAL CONTRIBUTION LEDGER ==================== */}
      <div className="border-2 border-paper-tan bg-ink-black text-paper-cream p-4 sm:p-6 rounded-sm mt-8 shadow-inner overflow-x-auto max-w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-paper-tan/40 pb-3 mb-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-paper-cream flex items-center gap-2">
            <Activity className="w-4 h-4 text-paper-red shrink-0" />
            <span>16-WEEK MECHANICAL CONTRIBUTION LEDGER (GITHUB PUNCH-CARD ACTIVITY ARCHIVE)</span>
          </span>
          <div className="flex items-center gap-2 text-[10px] font-mono text-paper-tan shrink-0">
            <span>LESS</span>
            <span className="w-2.5 h-2.5 inline-block bg-paper-cream/80 border border-paper-tan/40" />
            <span className="w-2.5 h-2.5 inline-block bg-paper-tan/40 border border-paper-tan" />
            <span className="w-2.5 h-2.5 inline-block bg-paper-tan border border-ink-black" />
            <span className="w-2.5 h-2.5 inline-block bg-paper-red border border-ink-black" />
            <span>MORE</span>
          </div>
        </div>

        {/* The Contribution Squares Grid */}
        <div className="flex gap-1.5 min-w-[420px] py-2">
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
        <div className="mt-3 text-[10px] font-mono uppercase text-paper-cream/60 flex flex-col sm:flex-row justify-between gap-1 text-center sm:text-left">
          <span>● CONTINUOUS MECHANICAL RECORDING • SYNCED TO ARCEUS1916</span>
          <a
            href="https://github.com/Arceus1916?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-paper-red hover:underline font-bold"
          >
            EXPLORE ALL 15+ REPOSITORIES ON GITHUB WIRE →
          </a>
        </div>
      </div>
    </section>
  );
}
