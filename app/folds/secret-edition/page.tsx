"use client";

import React, { useState } from "react";
import Link from "next/link";
import Masthead from "@/components/Masthead";
import Footer from "@/components/Footer";
import FloatingActionBar from "@/components/FloatingActionBar";
import { QUICK_LINKS } from "@/config/links";
import {
  KeyRound,
  Unlock,
  Lock,
  Award,
  ArrowLeft,
  Sparkles,
  Terminal,
  Compass,
  CheckCircle2,
} from "lucide-react";

export default function SecretEditionPage() {
  const [cipherInput, setCipherInput] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const correctSolution = "CONTACT PAGE";
  const altSolution = "CONTACT";

  const handleVerifyCipher = (e: React.FormEvent) => {
    e.preventDefault();
    const normalized = cipherInput.trim().toUpperCase();
    if (normalized === correctSolution || normalized === altSolution) {
      setIsUnlocked(true);
      setErrorMsg(null);
    } else {
      setErrorMsg("INVALID CIPHER SHIFT: The Mechanical Oracle rejects this telegraph key.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-paper-cream">
      <Masthead
        title="The Secret Folds"
        date="RESTRICTED ROYAL SOCIETY SUPPLEMENT • MMV (2005)"
      />

      <main className="flex-1 max-w-[1000px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top return strip */}
        <div className="border-b-2 border-ink-black pb-3 mb-8 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-ink-black">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-paper-tan/20 hover:bg-ink-black hover:text-paper-cream px-3 py-1.5 border border-paper-tan rounded transition-colors font-bold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Public Broadsheet</span>
          </Link>
          <span className="flex items-center gap-1.5 font-bold text-paper-red">
            <Lock className="w-4 h-4" />
            INNER FOLD ARCHIVE • CONFIDENTIAL
          </span>
        </div>

        {/* Secret Edition Headline */}
        <section aria-label="Secret Supplement Headline" className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-paper-red text-paper-cream font-mono text-xs font-bold uppercase rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            EASTER EGG UNLOCKED
          </div>
          <h1
            className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-ink-black font-headline leading-tight"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            A Cabal of Engineers Unmasks the Mechanical Oracle
          </h1>
          <p className="mt-4 text-base sm:text-lg italic font-serif text-ink-black/85">
            You have discovered the Inner Folds of The Programmer&apos;s Gazette—a hidden annex
            where 19th-century natural philosophers and full-stack computational architects exchange
            crypted telegraphs and cryptographic ciphers.
          </p>
        </section>

        {/* The Cryptogram Challenge Section */}
        <section
          aria-label="The Cryptogram Challenge"
          className="max-w-2xl mx-auto border-4 border-double border-ink-black bg-paper-cream p-6 sm:p-8 rounded-sm shadow-lg mb-14"
        >
          <div className="border-b border-paper-tan pb-4 mb-6 flex items-center justify-between">
            <div>
              <h2
                className="text-2xl font-bold uppercase tracking-tight text-ink-black font-headline flex items-center gap-2"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                <KeyRound className="w-5 h-5 text-paper-red" />
                The Cryptogram Challenge
              </h2>
              <p className="text-xs font-mono uppercase text-ink-black/70 mt-1">
                SOLVE THE CAESAR CIPHER (+3 SHIFT) TO PROVE YOUR ARCHITECTURAL CREDIT
              </p>
            </div>
            <span className="font-mono text-xs bg-paper-tan/30 text-ink-black px-2.5 py-1 rounded font-bold">
              CIPHER KEY: +3
            </span>
          </div>

          <div className="space-y-6 font-serif">
            {/* Cipher Text Box */}
            <div className="p-4 bg-ink-black text-paper-cream rounded border border-paper-tan">
              <div className="text-[10px] font-mono uppercase tracking-widest text-paper-tan/80 mb-1">
                INTERCEPTED TELEGRAPH WIRE (MMV - 2005):
              </div>
              <div
                className="text-xl sm:text-2xl font-mono tracking-widest font-bold text-amber-300 select-all"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                &ldquo;Frqwrfw sdhj&rdquo;
              </div>
              <div className="mt-2 text-xs font-serif italic text-paper-cream/80">
                Hint: Each letter has been shifted forward by 3 positions in the alphabet (A → D, B → E, C → F...). What is the decrypted message?
              </div>
            </div>

            {!isUnlocked ? (
              <form onSubmit={handleVerifyCipher} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-ink-black mb-1">
                    Enter Decrypted Telegraph Solution:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Type the plaintext solution here..."
                    value={cipherInput}
                    onChange={(e) => setCipherInput(e.target.value)}
                    className="w-full bg-paper-cream border-2 border-paper-tan focus:border-paper-red p-3 text-ink-black placeholder:text-ink-black/40 focus:outline-none font-mono text-sm uppercase rounded-sm transition-colors"
                  />
                </div>

                {errorMsg && (
                  <div className="text-xs font-mono text-paper-red font-bold animate-shake">
                    ▲ {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-ink-black hover:bg-paper-red text-paper-cream font-mono font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-sm transition-colors shadow-sm"
                >
                  <Unlock className="w-4 h-4" />
                  Verify Cryptograph &amp; Unlock Oracle
                </button>
              </form>
            ) : (
              <div className="p-6 bg-emerald-950/90 text-paper-cream rounded-sm border-2 border-emerald-500/50 space-y-4 animate-fade-in">
                <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-sm uppercase tracking-wider">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>CIPHER RESOLVED: THE ORACLE IS UNLOCKED!</span>
                </div>
                <p className="text-sm font-serif leading-relaxed text-paper-cream/95">
                  Congratulations, esteemed colleague! By decrypting &ldquo;CONTACT PAGE&rdquo;,
                  you have demonstrated the deductive reasoning required of an Honorary Fellow of the
                  Royal Society of Computational Engineers.
                </p>

                <div className="border-t border-emerald-500/40 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs font-mono uppercase text-emerald-300">
                    ROYAL SOCIETY CREDENTIAL #1887-AR
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 bg-paper-red hover:bg-white hover:text-ink-black text-paper-cream font-mono font-bold text-xs uppercase tracking-wider px-4 py-2 rounded transition-colors shadow-md"
                  >
                    <span>Proceed to Contact Bureau →</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Filler Victorian Historical Note */}
        <section aria-label="Historical Note" className="border-t border-b border-paper-tan py-6 text-center max-w-2xl mx-auto font-serif text-sm italic text-ink-black/80">
          &ldquo;To keep our dear readers engaged, our editorial staff employs Victorian shorthand—observe the quaint spelling of &apos;shew&apos; instead of &apos;show&apos;—as an homage to tradition and the Analytical Engine.&rdquo;
        </section>
      </main>

      <FloatingActionBar />
      <Footer />
    </div>
  );
}
