import React from "react";
import { QUICK_LINKS } from "@/config/links";
import { Compass, Scroll, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Footer() {
  const footerLinks = [
    {
      label: "Resume",
      href: QUICK_LINKS.resumePdf,
      icon: <Scroll className="w-4 h-4 text-paper-red shrink-0" />,
    },
    {
      label: "GitHub",
      href: QUICK_LINKS.github,
      icon: <GithubIcon className="w-4 h-4 text-ink-black shrink-0" />,
    },
    {
      label: "LinkedIn",
      href: QUICK_LINKS.linkedin,
      icon: <LinkedinIcon className="w-4 h-4 text-ink-black shrink-0" />,
    },
    {
      label: "Email",
      href: QUICK_LINKS.email,
      icon: <Mail className="w-4 h-4 text-paper-red shrink-0" />,
    },
    {
      label: "Phone",
      href: QUICK_LINKS.phone,
      icon: <Phone className="w-4 h-4 text-ink-black shrink-0" />,
    },
  ];

  return (
    <footer className="w-full bg-paper-cream border-t-4 border-double border-paper-tan mt-16 pt-10 pb-16 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-[1100px] mx-auto">
        {/* Top Ornament line */}
        <div className="flex items-center justify-center gap-3 text-paper-tan mb-6">
          <span className="h-[1px] w-24 bg-paper-tan inline-block" />
          <Compass className="w-5 h-5 text-paper-red" />
          <span className="h-[1px] w-24 bg-paper-tan inline-block" />
        </div>

        {/* Newspaper Footer Title & Summary */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2
            className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-ink-black font-display"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The Programmer&apos;s Gazette
          </h2>
          <p className="mt-1 text-xs font-mono uppercase tracking-widest text-ink-black/80">
            PUNE, INDIA • PORTFOLIO OF ARTIFICIAL INTELLIGENCE &amp; FULL-STACK SYSTEMS
          </p>
        </div>

        {/* Links Grid with Icons */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 border-y border-paper-tan py-6 my-6 font-serif">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-ink-black hover:text-paper-red transition-colors border-b border-transparent hover:border-paper-red"
            >
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        {/* Lore Notes (Copyright Removed) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-serif text-ink-black/80 text-center sm:text-left">
          <div className="font-mono text-paper-red font-bold">
            Built with Next.js, React &amp; TypeScript
          </div>
          <div>
            Developed by <span className="font-bold">Amey Rasekar</span> (Pune, India)
          </div>
        </div>
      </div>
    </footer>
  );
}
