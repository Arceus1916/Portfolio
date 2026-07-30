"use client";

import React, { useState } from "react";
import Masthead from "@/components/Masthead";
import FloatingActionBar from "@/components/FloatingActionBar";
import Footer from "@/components/Footer";
import { QUICK_LINKS } from "@/config/links";
import { Mail, Phone, Send, Radio, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/Icons";

export default function ContactPage() {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:rasekaramey@gmail.com?subject=${encodeURIComponent(
      `[TELEGRAPH DISPATCH] ${subject || "Inquiry from Gazette Visitor"}`
    )}&body=${encodeURIComponent(
      `From: ${senderName} (${senderEmail})\n\nDispatch Content:\n${message}\n\n--\nSent via The Programmer's Gazette Telegraph Interface`
    )}`;
    window.location.href = mailtoUrl;
  };

  const contactCards = [
    {
      title: "Electronic Mail Dispatch",
      label: "Email",
      value: "rasekaramey@gmail.com",
      href: QUICK_LINKS.email,
      icon: <Mail className="w-5 h-5 text-paper-red" />,
      badge: "PRIMARY BUREAU",
    },
    {
      title: "Telephone Wire Connection",
      label: "Phone Number",
      value: "+91 94033-20981",
      href: QUICK_LINKS.phone,
      icon: <Phone className="w-5 h-5 text-ink-black" />,
      badge: "DIRECT LINE",
    },
    {
      title: "GitHub Telegraph Network",
      label: "GitHub Profile",
      value: "github.com/Arceus1916",
      href: QUICK_LINKS.github,
      icon: <GithubIcon className="w-5 h-5 text-paper-red" />,
      badge: "CODE REPOSITORY",
    },
    {
      title: "LinkedIn Professional Wire",
      label: "LinkedIn",
      value: "Professional Network",
      href: QUICK_LINKS.linkedin,
      icon: <LinkedinIcon className="w-5 h-5 text-ink-black" />,
      badge: "EXCHANGE WIRE",
    },
    {
      title: "Instagram Visual Dispatch",
      label: "Instagram",
      value: "Social Chronicle",
      href: QUICK_LINKS.instagram,
      icon: <InstagramIcon className="w-5 h-5 text-paper-red" />,
      badge: "SOCIAL BULLETIN",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Masthead title="The Telegraph Office" date="PUNE BUREAU DISPATCH CENTER" />

      <main className="flex-1 max-w-[1100px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Strip */}
        <div className="border-b-2 border-ink-black pb-2 mb-6 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-ink-black/80">
          <span className="flex items-center gap-1.5 font-bold text-paper-red">
            <Radio className="w-4 h-4 animate-pulse" />
            THE TELEGRAPH OFFICE — DISPATCH &amp; INQUIRY BUREAU
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            PUNE ENGINEERING BUREAU, INDIA
          </span>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1
            className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-ink-black font-headline"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Direct Communication &amp; Telegraph Wires
          </h1>
          <p className="mt-2 text-base font-serif italic text-ink-black/80">
            Transmit an electronic dispatch directly to Special Correspondent Amey Rasekar regarding
            engineering commissions, research collaborations, or technical consultations.
          </p>
        </div>

        {/* 5 Contact Cards Grid */}
        <section aria-label="Telegraph Wires" className="mb-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex flex-col justify-between p-5 bg-paper-cream border-2 border-paper-tan hover:border-ink-black rounded-sm transition-all duration-200 shadow-[2px_3px_0px_rgba(151,109,103,0.2)] hover:shadow-[4px_5px_0px_rgba(17,25,27,0.3)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    {card.icon}
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider bg-paper-tan/20 text-ink-black px-2 py-0.5 rounded">
                      {card.badge}
                    </span>
                  </div>
                  <h3 className="text-sm font-mono uppercase tracking-wide text-paper-tan font-bold">
                    {card.label}
                  </h3>
                  <div
                    className="mt-1 text-lg font-bold text-ink-black font-headline group-hover:text-paper-red transition-colors"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {card.value}
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-paper-tan/40 flex items-center justify-between text-xs font-mono text-ink-black/70">
                  <span>{card.title}</span>
                  <span className="font-bold uppercase group-hover:translate-x-1 transition-transform">
                    Connect →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Dispatch Form (Author's Quill) */}
        <section
          aria-label="Author's Quill Dispatch Form"
          className="max-w-2xl mx-auto border-4 border-double border-paper-tan bg-paper-cream p-6 sm:p-8 rounded-sm shadow-sm"
        >
          <div className="border-b border-paper-tan pb-3 mb-6">
            <h2
              className="text-2xl font-bold uppercase tracking-tight text-ink-black font-headline"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Author&apos;s Quill — Transmit Dispatch
            </h2>
            <p className="text-xs font-mono uppercase text-ink-black/70 mt-1">
              COMPOSE YOUR MESSAGE BELOW TO TRANSMIT VIA TELEGRAPH INTERFACE
            </p>
          </div>

          <form onSubmit={handleDispatch} className="space-y-6 font-serif">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-ink-black mb-1">
                  Sender&apos;s Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sir/Madam Recruiter"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full bg-paper-cream border-b-2 border-paper-tan focus:border-paper-red py-2 px-1 text-ink-black placeholder:text-ink-black/40 focus:outline-none font-serif text-sm transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-ink-black mb-1">
                  Electronic Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. recruiter@company.com"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  className="w-full bg-paper-cream border-b-2 border-paper-tan focus:border-paper-red py-2 px-1 text-ink-black placeholder:text-ink-black/40 focus:outline-none font-serif text-sm transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-ink-black mb-1">
                Dispatch Subject *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Commission Inquiry / Architectural Consultation"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-paper-cream border-b-2 border-paper-tan focus:border-paper-red py-2 px-1 text-ink-black placeholder:text-ink-black/40 focus:outline-none font-serif text-sm transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-ink-black mb-1">
                Message Content *
              </label>
              <textarea
                required
                rows={5}
                placeholder="State your business or inquiry regarding full-stack systems, deep learning models, or engineering appointments..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-paper-cream border-2 border-paper-tan focus:border-paper-red p-3 text-ink-black placeholder:text-ink-black/40 focus:outline-none font-serif text-sm rounded-sm transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-ink-black hover:bg-paper-red text-paper-cream font-mono font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-sm transition-colors shadow-sm"
            >
              <Send className="w-4 h-4" />
              Transmit Dispatch via Quill
            </button>
          </form>
        </section>
      </main>

      <FloatingActionBar />
      <Footer />
    </div>
  );
}
