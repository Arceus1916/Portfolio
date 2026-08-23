"use client";

import React, { useState } from "react";
import { Radio, CheckCircle2, TrendingUp, Sparkles, Send } from "lucide-react";

interface PollOption {
  id: string;
  label: string;
  votes: number;
}

export default function TelegraphPoll() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);

  const [options, setOptions] = useState<PollOption[]>([
    { id: "A", label: "Formal Type-Safety & Zero-Runtime-Error Ledgers (TypeScript / Rust)", votes: 42 },
    { id: "B", label: "Deep Convolutional Neural Networks & Diagnostic Logic (PyTorch / CNN)", votes: 38 },
    { id: "C", label: "Sub-200ms Distributed Marine & Telemetry Wires (PostgreSQL / Spring)", votes: 29 },
    { id: "D", label: "Uncompromising Steampunk Aesthetics & UX Craftsmanship", votes: 31 },
  ]);

  const handleVote = (id: string) => {
    if (hasVoted) return;
    setSelectedOption(id);
    setHasVoted(true);
    setOptions((prev) =>
      prev.map((opt) => (opt.id === id ? { ...opt, votes: opt.votes + 1 } : opt))
    );
  };

  const totalVotes = options.reduce((acc, curr) => acc + curr.votes, 0);

  return (
    <section
      aria-label="The Daily Telegraph Ballot"
      className="my-14 border-4 border-double border-ink-black bg-paper-tan/15 p-5 sm:p-8 rounded-sm shadow-md"
    >
      <div className="border-b-2 border-ink-black pb-3 mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-mono font-bold uppercase text-paper-red tracking-widest mb-1 flex items-center gap-1.5">
            <Radio className="w-4 h-4 text-paper-red animate-pulse" />
            THE DAILY TELEGRAPH BALLOT • READER DISPATCH POLL
          </div>
          <h2
            className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-ink-black font-headline"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Which Architectural Principle Should Drive Modern Software?
          </h2>
          <p className="text-xs font-serif italic text-ink-black/80 mt-1">
            Cast your vote via the Pune Telegraph Wire to see live consensus from engineers worldwide.
          </p>
        </div>

        <span className="text-xs font-mono font-bold bg-paper-red text-paper-cream px-3 py-1.5 rounded uppercase">
          ● {totalVotes} TELEGRAMS RECORDED
        </span>
      </div>

      <div className="space-y-4">
        {options.map((opt) => {
          const percentage = Math.round((opt.votes / totalVotes) * 100);
          const isSelected = selectedOption === opt.id;

          return (
            <div
              key={opt.id}
              onClick={() => handleVote(opt.id)}
              className={`relative border-2 p-4 rounded-sm transition-all cursor-pointer select-none ${
                isSelected
                  ? "border-paper-red bg-ink-black text-paper-cream shadow-md"
                  : "border-ink-black bg-paper-cream hover:border-paper-red text-ink-black"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono font-bold text-xs sm:text-sm uppercase flex items-center gap-2">
                  <span
                    className={`inline-block w-6 h-6 text-center leading-6 rounded-xs border font-bold ${
                      isSelected
                        ? "bg-paper-red text-paper-cream border-paper-red"
                        : "bg-paper-tan/30 text-ink-black border-ink-black"
                    }`}
                  >
                    {opt.id}
                  </span>
                  <span>{opt.label}</span>
                </span>
                {hasVoted && (
                  <span className="font-mono font-bold text-xs">
                    {percentage}% ({opt.votes} votes)
                  </span>
                )}
              </div>

              {/* Vote Bar */}
              {hasVoted && (
                <div className="w-full h-2 bg-paper-tan/30 rounded-full overflow-hidden mt-2">
                  <div
                    className={`h-full transition-all duration-700 ${
                      isSelected ? "bg-paper-red" : "bg-ink-black"
                    }`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {hasVoted && (
        <div className="mt-6 p-4 bg-emerald-950 text-paper-cream rounded-sm border border-emerald-500/50 flex items-center justify-between text-xs font-mono uppercase animate-fade-in">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            VOTE REGISTERED ON PUNE, INDIA LEDGER!
          </span>
          <span className="text-emerald-400 font-bold">● THANK YOU FOR YOUR DISPATCH</span>
        </div>
      )}
    </section>
  );
}
