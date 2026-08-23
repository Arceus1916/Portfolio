"use client";

import React from "react";
import { QUICK_LINKS } from "@/config/links";
import { Scroll, Mail, Phone } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function FloatingActionBar() {
  return (
    <div
      aria-label="30-Second Quick Recruiter Scanning Bar"
      className="fixed bottom-3 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-6 z-50 flex items-center justify-center gap-1 sm:gap-2 bg-ink-black/95 text-paper-cream px-3 py-1.5 sm:py-2 rounded-full shadow-lg border-2 border-paper-tan backdrop-blur-sm select-none max-w-[92vw]"
    >
      <span className="text-[10px] font-mono uppercase tracking-widest text-paper-tan px-1 hidden sm:inline border-r border-paper-tan/50 mr-1">
        QUICK ACCESS:
      </span>

      <a
        href={QUICK_LINKS.resumePdf}
        target="_blank"
        rel="noopener noreferrer"
        title="Resume (PDF)"
        className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono uppercase font-bold tracking-wider hover:text-paper-red transition-colors"
      >
        <Scroll className="w-4 h-4 text-paper-red shrink-0" />
        <span>Resume</span>
      </a>

      <a
        href={QUICK_LINKS.github}
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub Profile"
        className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono uppercase font-bold tracking-wider hover:text-paper-red transition-colors border-l border-paper-tan/40"
      >
        <GithubIcon className="w-4 h-4 text-paper-tan shrink-0" />
        <span>GitHub</span>
      </a>

      <a
        href={QUICK_LINKS.email}
        title="Email Contact"
        className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono uppercase font-bold tracking-wider hover:text-paper-red transition-colors border-l border-paper-tan/40"
      >
        <Mail className="w-4 h-4 text-paper-tan shrink-0" />
        <span>Email</span>
      </a>
    </div>
  );
}
