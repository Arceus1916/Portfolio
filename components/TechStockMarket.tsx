"use client";

import React, { useState } from "react";
import { TrendingUp, Award, ShieldCheck, Cpu, Database, Layout, Sparkles } from "lucide-react";

export interface StockInstrument {
  ticker: string;
  name: string;
  yieldIndex: string; // e.g., "85"
  status: string; // e.g., "HIGH YIELD"
  trend: "up" | "down";
}

export interface SectorCategory {
  sectorName: string;
  instruments: StockInstrument[];
}

export const STOCK_MARKET_DATA: SectorCategory[] = [
  {
    sectorName: "AI & NEURAL ENGINES",
    instruments: [
      { ticker: "PYTH", name: "Python 3.11+", yieldIndex: "82", status: "PRIMARY LOGIC", trend: "up" },
      { ticker: "PTCH", name: "PyTorch & CNN Architecture", yieldIndex: "78", status: "HIGH YIELD", trend: "up" },
      { ticker: "SKLN", name: "Scikit-Learn & ML Pipelines", yieldIndex: "45", status: "STABLE EQUITY", trend: "down" },
      { ticker: "NPPD", name: "NumPy & Pandas Vectors", yieldIndex: "68", status: "HIGH VOLUME", trend: "up" },
    ],
  },
  {
    sectorName: "WEB & FRONT-END APPARATUS",
    instruments: [
      { ticker: "NX15", name: "Next.js 15 (App Router)", yieldIndex: "85", status: "TOP GROWTH", trend: "up" },
      { ticker: "RCT19", name: "React 19 & React Native", yieldIndex: "79", status: "HIGH YIELD", trend: "up" },
      { ticker: "TYPS", name: "TypeScript 5.0 (Strict)", yieldIndex: "81", status: "GOLD STANDARD", trend: "up" },
      { ticker: "TLW4", name: "Tailwind CSS v4 Engine", yieldIndex: "72", status: "STABLE EQUITY", trend: "down" },
    ],
  },
  {
    sectorName: "BACK-END & DISTRIBUTED LEDGERS",
    instruments: [
      { ticker: "NODE", name: "Node.js Runtime & Express", yieldIndex: "75", status: "HIGH YIELD", trend: "up" },
      { ticker: "SPRB", name: "Spring Boot Microservices", yieldIndex: "35", status: "ENTERPRISE", trend: "down" },
      { ticker: "REST", name: "RESTful & Telegraph APIs", yieldIndex: "60", status: "STABLE EQUITY", trend: "up" },
      { ticker: "P2PL", name: "Decentralized P2P Trading", yieldIndex: "25", status: "INNOVATION", trend: "down" },
    ],
  },
  {
    sectorName: "DATA INGESTION & TELEMETRY",
    instruments: [
      { ticker: "PSQL", name: "PostgreSQL & Relational DB", yieldIndex: "70", status: "CORE LEDGER", trend: "up" },
      { ticker: "RLDB", name: "Realm Offline-First DB", yieldIndex: "15", status: "STABLE EQUITY", trend: "down" },
      { ticker: "GITW", name: "Git & Version Control Wire", yieldIndex: "84", status: "HIGH VOLUME", trend: "up" },
      { ticker: "DOCK", name: "Docker & Container Eng", yieldIndex: "55", status: "RELIABLE", trend: "down" },
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
              <span className={item.trend === "up" ? "text-emerald-400 font-bold" : "text-red-400 font-bold"}>
                {item.trend === "up" ? "▲" : "▼"} {item.yieldIndex}
              </span>{" "}
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
                    <span className={`font-mono font-bold text-sm flex items-center gap-1 ${inst.trend === "up" ? "text-emerald-600" : "text-red-600"}`}>
                      {inst.trend === "up" ? "▲" : "▼"} {inst.yieldIndex}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Sector Footer Note */}
            <div className="bg-paper-tan/10 px-4 py-1.5 border-t border-paper-tan/40 text-[10px] font-mono uppercase text-ink-black/60 flex justify-between">
              <span>● CERTIFIED ROYAL SOCIETY YIELD</span>
              <span>● VERIFIED IN PUNE, INDIA</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
