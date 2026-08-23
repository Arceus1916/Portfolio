"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Mail, Scroll, ExternalLink, UserCheck, ShieldCheck } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { QUICK_LINKS } from "@/config/links";

export default function AuthorPortraitCard() {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.aside
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative border-4 border-double border-ink-black bg-paper-cream p-5 sm:p-6 rounded-sm shadow-[4px_5px_0px_rgba(17,25,27,0.3)] hover:border-paper-red hover:shadow-[0_8px_30px_rgba(167,42,36,0.15)] transition-all duration-300 flex flex-col justify-between"
      aria-label="Editorial Author Portrait"
    >
      {/* Editorial Top Ribbon */}
      <div className="border-b-2 border-ink-black pb-3 mb-4 flex items-center justify-between gap-2">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-ink-black text-paper-cream text-[10px] font-mono font-bold uppercase tracking-widest rounded-sm">
          <UserCheck className="w-3 h-3 text-paper-red" />
          <span>EDITORIAL PORTRAIT</span>
        </div>
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-ink-black/70">
          FEATURED AUTHOR
        </span>
      </div>

      {/* Engraved Frame Portrait Container */}
      <div className="relative w-full aspect-[4/5] max-h-[380px] sm:max-h-[360px] mx-auto overflow-hidden border-2 border-ink-black bg-paper-tan/20 rounded-sm mb-4 shadow-inner group-hover:border-paper-red transition-colors">
        {!imageError ? (
          <Image
            src="/propic.jpeg"
            alt="Amey Rasekar - Software Associate"
            fill
            sizes="(max-width: 768px) 100vw, 360px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            priority
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-ink-black/60 font-mono">
            <UserCheck className="w-16 h-16 mb-2 text-paper-red" />
            <span className="text-xs uppercase font-bold">Amey Rasekar</span>
            <span className="text-[10px] uppercase">Software Associate</span>
          </div>
        )}

        {/* Vintage Seal Stamp */}
        <div className="absolute bottom-3 right-3 bg-paper-red text-paper-cream text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm shadow-md border border-white/20 flex items-center gap-1">
          <ShieldCheck className="w-3 h-3" />
          <span>VERIFIED</span>
        </div>
      </div>

      {/* Author Name & Modern Credentials */}
      <div className="text-center sm:text-left">
        <h3
          className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-ink-black font-headline group-hover:text-paper-red transition-colors"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          AMEY RASEKAR
        </h3>
        <p className="text-xs font-mono uppercase tracking-wider text-paper-red font-bold mt-0.5">
          Software Associate &amp; Systems Engineer
        </p>

        {/* Location & Status Tag */}
        <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-mono text-ink-black/80 bg-paper-tan/15 px-2.5 py-1 rounded border border-paper-tan/50">
          <MapPin className="w-3.5 h-3.5 text-paper-red shrink-0" />
          <span className="font-bold">PUNE, INDIA • ACTIVE STATUS</span>
        </div>

        <p className="mt-3 text-xs sm:text-sm font-serif italic text-ink-black/85 leading-relaxed">
          Specializing in scalable full-stack architectures, deep learning neural networks, and resilient automated engineering systems.
        </p>
      </div>

      {/* Quick Action Buttons Strip */}
      <div className="mt-5 pt-4 border-t border-paper-tan/40 grid grid-cols-2 sm:grid-cols-4 gap-2">
        <a
          href={QUICK_LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn Profile"
          className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-paper-cream hover:bg-ink-black hover:text-paper-cream border border-paper-tan text-ink-black text-[11px] font-mono font-bold uppercase rounded-sm transition-colors"
        >
          <LinkedinIcon className="w-3.5 h-3.5 shrink-0" />
          <span>LinkedIn</span>
        </a>

        <a
          href={QUICK_LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub Profile"
          className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-paper-cream hover:bg-ink-black hover:text-paper-cream border border-paper-tan text-ink-black text-[11px] font-mono font-bold uppercase rounded-sm transition-colors"
        >
          <GithubIcon className="w-3.5 h-3.5 shrink-0" />
          <span>GitHub</span>
        </a>

        <a
          href={QUICK_LINKS.resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          title="Resume PDF"
          className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-paper-cream hover:bg-paper-red hover:text-paper-cream border border-paper-tan text-ink-black text-[11px] font-mono font-bold uppercase rounded-sm transition-colors"
        >
          <Scroll className="w-3.5 h-3.5 shrink-0" />
          <span>Resume</span>
        </a>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-ink-black hover:bg-paper-red text-paper-cream text-[11px] font-mono font-bold uppercase rounded-sm transition-colors shadow-sm"
        >
          <Mail className="w-3.5 h-3.5 shrink-0" />
          <span>Contact</span>
        </Link>
      </div>
    </motion.aside>
  );
}
