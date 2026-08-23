"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { QUICK_LINKS } from "@/config/links";
import { Scroll, Radio, PenTool, ExternalLink, Sparkles, ShieldCheck } from "lucide-react";

interface MastheadProps {
  title?: string;
  date?: string;
  edition?: string;
  showHeroName?: boolean;
}

export default function Masthead({
  title = "The Programmer's Gazette",
  date = "Pune Edition — 2005",
  edition = "Developer Portfolio — Amey Rasekar",
  showHeroName = false,
}: MastheadProps) {
  const navLinks = [
    {
      label: "Resume",
      subLabel: "(Official CV)",
      href: QUICK_LINKS.resumePdf,
      icon: <Scroll className="w-4 h-4 mr-1.5 inline-block text-paper-red" />,
    },
    {
      label: "GitHub",
      subLabel: "(Projects)",
      href: QUICK_LINKS.github,
      icon: <Radio className="w-4 h-4 mr-1.5 inline-block text-paper-red" />,
    },
    {
      label: "Contact",
      subLabel: "(Get in Touch)",
      href: QUICK_LINKS.email,
      icon: <PenTool className="w-4 h-4 mr-1.5 inline-block text-paper-red" />,
    },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-paper-cream border-b-4 border-double border-ink-black pt-5 pb-4 px-4 sm:px-8 lg:px-12 select-none"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Top bar telegraphic publication banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-b-2 border-ink-black pb-2 mb-4 text-xs uppercase tracking-widest font-mono text-ink-black">
          <span className="flex items-center gap-2 font-bold">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-paper-red animate-pulse" />
            {title} • OFFICIAL PORTFOLIO EDITION
          </span>
          <span className="font-bold text-paper-red mt-1 sm:mt-0">
            {edition}
          </span>
        </div>

        {/* MAIN HERO IDENTIFICATION: AMEY RASEKAR BRIGHT & BIG */}
        {showHeroName && (
          <div className="text-center py-6 border-b-2 border-paper-tan/60 relative flex flex-col items-center justify-center">
            <div className="inline-flex items-center px-3.5 py-1 bg-ink-black text-paper-cream text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest rounded-sm mb-3 text-center max-w-full leading-snug">
              SOFTWARE ASSOCIATE • PUNE, INDIA
            </div>

            <div className="flex items-center justify-center gap-4 sm:gap-8 w-full">
              {/* Left AR Seal Emblem */}
              <Link
                href="/folds/secret-edition"
                title="Click to unlock The Secret Folds supplement (Easter Egg)"
                className="hidden lg:flex flex-col items-center justify-center w-16 h-16 border-2 border-ink-black bg-paper-cream rounded-full shadow-[inset_0_0_6px_#976D67] text-center select-none shrink-0 hover:bg-paper-red hover:text-paper-cream transition-colors group cursor-pointer"
              >
                <span className="text-xl font-bold font-serif leading-none text-paper-red group-hover:text-paper-cream tracking-tighter">
                  AR
                </span>
                <span className="text-[8px] font-mono tracking-widest text-ink-black group-hover:text-paper-cream uppercase mt-0.5">
                  PUNE
                </span>
              </Link>

              {/* AMEY RASEKAR NAME HIGHLIGHTED */}
              <div className="flex-1 text-center px-1">
                <h1
                  className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-ink-black font-headline uppercase leading-tight sm:leading-none text-balance"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  <span className="text-paper-red">Amey</span> Rasekar
                </h1>
                <p className="mt-3 text-base sm:text-xl md:text-2xl font-bold uppercase tracking-wider text-ink-black font-serif text-balance leading-snug">
                  Software Associate • Full-Stack &amp; AI Developer
                </p>
                <p className="mt-2 text-[10px] sm:text-xs md:text-sm font-mono uppercase tracking-widest text-ink-black/75 text-balance leading-relaxed">
                  PUNE, INDIA • DEEP LEARNING • SCALABLE BACKEND SYSTEMS • TYPE-SAFE WEB
                </p>
              </div>

              {/* Right AR Crest Emblem */}
              <Link
                href="/folds/secret-edition"
                title="Click to unlock The Secret Folds supplement (Easter Egg)"
                className="hidden lg:flex flex-col items-center justify-center w-16 h-16 border-2 border-ink-black bg-paper-cream rounded-full shadow-[inset_0_0_6px_#976D67] text-center select-none shrink-0 hover:bg-paper-red hover:text-paper-cream transition-colors group cursor-pointer"
              >
                <span className="text-xl font-bold font-serif leading-none text-paper-red group-hover:text-paper-cream tracking-tighter">
                  AR
                </span>
                <span className="text-[8px] font-mono tracking-widest text-ink-black group-hover:text-paper-cream uppercase mt-0.5">
                  2005
                </span>
              </Link>
            </div>
          </div>
        )}

        {/* Date Line & Location Strip (Easter Egg Link on Date) */}
        <div className="border-b-2 border-ink-black py-2 my-2 flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-between gap-1 sm:gap-2 text-center text-xs sm:text-sm font-serif uppercase tracking-wider text-ink-black">
          <span className="font-bold">LOCATION: PUNE, INDIA</span>
          <Link
            href="/folds/secret-edition"
            title="Click to discover The Secret Folds supplement (Easter Egg)"
            className="font-bold text-paper-red hover:underline hover:text-ink-black transition-colors cursor-pointer"
          >
            ★ {date} ★
          </Link>
          <span className="font-bold">PRICE: ONE PENNY (OR GITHUB STAR)</span>
        </div>

        {/* Top Navigation Bar: Resume, GitHub, Contact */}
        <nav
          aria-label="Main Victorian Navigation"
          className="pt-2 pb-1 flex flex-wrap items-center justify-center gap-2 sm:gap-6 md:gap-8"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href === "/resume" || link.href.endsWith(".pdf") || link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href === "/resume" || link.href.endsWith(".pdf") || link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex flex-wrap items-center justify-center text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider text-ink-black hover:text-paper-red transition-colors py-1.5 px-2 sm:px-3 border border-transparent hover:border-paper-tan rounded-sm text-center"
            >
              {link.icon}
              <span className="border-b border-ink-black group-hover:border-paper-red">
                {link.label}
              </span>
              <span className="ml-1 text-[10px] sm:text-xs font-mono font-normal text-ink-black/70 group-hover:text-paper-red">
                {link.subLabel}
              </span>
              <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline-block" />
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
