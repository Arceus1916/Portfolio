"use client";

import React, { useState } from "react";
import { TrendingUp, Award, ShieldCheck, Cpu, Database, Layout, Sparkles } from "lucide-react";

export interface StockInstrument {
  ticker: string;
  name: string;
  yieldIndex: string; // e.g., "99.8%" or "AA+"
  status: string; // e.g., "HIGH YIELD"
}

export interface SectorCategory {
  sectorName: string;
  instruments: StockInstrument[];
}

export const STOCK_MARKET_DATA: SectorCategory[] = [
  {
    sectorName: "AI & NEURAL ENGINES",
    instruments: [
      { ticker: "PYTH", name: "Python 3.11+", yieldIndex: "99.8%", status: "PRIMARY LOGIC" },
      { ticker: "PTCH", name: "PyTorch & CNN Architecture", yieldIndex: "98.5%", status: "HIGH YIELD" },
      { ticker: "SKLN", name: "Scikit-Learn & ML Pipelines", yieldIndex: "95.0%", status: "STABLE EQUITY" },
      { ticker: "NPPD", name: "NumPy & Pandas Vectors", yieldIndex: "99.1%", status: "HIGH VOLUME" },
    ],
  },
  {
    sectorName: "WEB & FRONT-END APPARATUS",
    instruments: [
      { ticker: "NX15", name: "Next.js 15 (App Router)", yieldIndex: "99.9%", status: "TOP GROWTH" },
      { ticker: "RCT19", name: "React 19 & React Native", yieldIndex: "99.5%", status: "HIGH YIELD" },
      { ticker: "TYPS", name: "TypeScript 5.0 (Strict)", yieldIndex: "99.7%", status: "GOLD STANDARD" },
      { ticker: "TLW4", name: "Tailwind CSS v4 Engine", yieldIndex: "98.9%", status: "STABLE EQUITY" },
    ],
  },
  {
    sectorName: "BACK-END & DISTRIBUTED LEDGERS",
    instruments: [
      { ticker: "NODE", name: "Node.js Runtime & Express", yieldIndex: "98.8%", status: "HIGH YIELD" },
      { ticker: "SPRB", name: "Spring Boot Microservices", yieldIndex: "97.5%", status: "ENTERPRISE" },
      { ticker: "REST", name: "RESTful & Telegraph APIs", yieldIndex: "99.6%", status: "STABLE EQUITY" },
      { ticker: "P2PL", name: "Decentralized P2P Trading", yieldIndex: "96.4%", status: "INNOVATION" },
    ],
  },
  {
    sectorName: "DATA INGESTION & TELEMETRY",
    instruments: [
      { ticker: "PSQL", name: "PostgreSQL & Relational DB", yieldIndex: "99.4%", status: "CORE LEDGER" },
      { ticker: "RLDB", name: "Realm Offline-First DB", yieldIndex: "95.8%", status: "STABLE EQUITY" },
      { ticker: "GITW", name: "Git & Version Control Wire", yieldIndex: "99.9%", status: "HIGH VOLUME" },
      { ticker: "DOCK", name: "Docker & Container Eng", yieldIndex: "97.0%", status: "RELIABLE" },
    ],
  },
];

export default function TechStockMarket() {
  const [selectedSector, setSelectedSector] = useState<string>("ALL");

  const sectors = ["ALL", ...STOCK_MARKET_DATA.map((s) => s.sectorName)];

  const displayedData =
    selectedSector === "ALL"
      ? STOCK_MARKET_DATA
      : STOCK_MARKET_DATA.filter((c) => c.sectorName === selectedSector);

  const getSectorIcon = (sectorName: string) => {
    switch (sectorName) {
      case "AI & NEURAL ENGINES":
        return <Cpu className="w-4 h-4 text-paper-red" />;
      case "WEB & FRONT-END APPARATUS":
        return <Layout className="w-4 h-4 text-paper-red" />;
      case "BACK-END & DISTRIBUTED LEDGERS":
        return <Database className="w-4 h-4 text-paper-red" />;
      default:
        return <Award className="w-4 h-4 text-paper-red" />;
    }
  };

  return (
    <section aria-label="Tech Stock Market and Equipment Inventory" className="my-10">
      {/* Ornate Newspaper Section Header */}
      <div className="border-t-2 border-b-2 border-ink-black py-2.5 my-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-paper-tan/15 px-4">
        <div>
          <h2
            className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-ink-black font-headline flex items-center gap-2"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            <TrendingUp className="w-6 h-6 text-paper-red" />
            Pune Engineering Bureau — Computational Exchange
          </h2>
          <p className="text-xs font-mono uppercase tracking-wider text-ink-black/80">
            OFFICIAL 2x2 MARKET GRID OF COMPUTATIONAL INSTRUMENTS &amp; TECHNOLOGICAL EQUITIES
          </p>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-xs text-paper-red font-bold uppercase bg-paper-cream px-3 py-1.5 border border-paper-tan rounded shadow-xs">
          <Sparkles className="w-4 h-4 text-paper-red shrink-0" />
          <span>EQUITIES INDEX: BULLISH (HIGH DEMAND)</span>
        </div>
      </div>

      {/* Sector Filter Buttons */}
      <div className="flex flex-wrap items-center gap-2 my-4">
        {sectors.map((sector) => (
          <button
            key={sector}
            onClick={() => setSelectedSector(sector)}
            className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wide border transition-all rounded-sm cursor-pointer ${
              selectedSector === sector
                ? "bg-ink-black text-paper-cream border-ink-black font-bold shadow-sm"
                : "bg-paper-cream text-ink-black border-paper-tan hover:bg-paper-tan/20"
            }`}
          >
            {sector}
          </button>
        ))}
      </div>

      {/* Ticker Tape Strip */}
      <div className="overflow-hidden whitespace-nowrap bg-ink-black text-paper-cream py-1.5 px-3 border-y border-paper-tan text-xs font-mono mb-6 flex items-center select-none shadow-sm">
        <span className="font-bold text-paper-red mr-3">● LATEST QUOTATIONS:</span>
        <div className="inline-block animate-marquee">
          {STOCK_MARKET_DATA.flatMap((s) => s.instruments).map((item, idx) => (
            <span key={item.ticker} className="mr-6">
              <span className="text-paper-cream font-bold">{item.ticker}</span> ({item.name}){" "}
              <span className="text-emerald-400 font-bold">{item.yieldIndex}</span>{" "}
              <span className="text-paper-cream/60">[{item.status}]</span>
              {idx < 20 ? "  •  " : ""}
            </span>
          ))}
        </div>
      </div>

      {/* 2x2 NEWSPAPER EQUITY GRID VIEW (NO BIG SCROLL DOWN) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {displayedData.map((sector, sIdx) => (
          <div
            key={sector.sectorName}
            className="border-2 border-ink-black bg-paper-cream rounded-sm shadow-md overflow-hidden flex flex-col justify-between"
          >
            {/* Sector Bar */}
            <div className="bg-ink-black text-paper-cream px-4 py-2.5 flex items-center justify-between border-b border-paper-tan">
              <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider font-headline flex items-center gap-2 text-paper-cream">
                {getSectorIcon(sector.sectorName)}
                <span>{sector.sectorName}</span>
              </h3>
              <span className="text-[11px] font-mono text-paper-red font-bold uppercase bg-paper-cream/10 px-2 py-0.5 rounded">
                SECTOR #0{sIdx + 1}
              </span>
            </div>

            {/* Compact Equity Instruments Grid */}
            <div className="p-4 divide-y divide-paper-tan/40">
              {sector.instruments.map((inst) => (
                <div
                  key={inst.ticker}
                  className="py-2.5 flex items-center justify-between gap-3 group hover:bg-paper-tan/15 px-2 -mx-2 rounded transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold text-xs sm:text-sm bg-paper-tan/30 text-ink-black px-2 py-0.5 rounded group-hover:bg-paper-red group-hover:text-paper-cream transition-colors">
                      {inst.ticker}
                    </span>
                    <span className="font-serif font-bold text-sm sm:text-base text-ink-black">
                      {inst.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-right">
                    <span className="text-xs font-mono text-ink-black/70 hidden sm:inline">
                      [{inst.status}]
                    </span>
                    <span className="font-mono font-bold text-sm text-paper-red">
                      {inst.yieldIndex}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Sector Footer Note */}
            <div className="bg-paper-tan/10 px-4 py-1.5 border-t border-paper-tan/40 text-[10px] font-mono uppercase text-ink-black/60 flex justify-between">
              <span>● CERTIFIED ROYAL SOCIETY YIELD</span>
              <span>● VERIFIED IN PUNE BUREAU</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
