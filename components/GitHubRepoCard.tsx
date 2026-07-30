"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Star, GitFork, Clock, ExternalLink, ShieldCheck, AlertCircle, ArrowRight } from "lucide-react";

export interface CaseFileProps {
  caseNumber: string;
  title: string;
  focus: string;
  keyFeature: string;
  tech: string[];
  owner: string;
  repo: string;
  githubUrl?: string;
  isExternalSync?: boolean;
}

interface RepoMetadata {
  stars: number;
  forks: number;
  lastCommit: string;
  description?: string;
  language?: string;
  htmlUrl?: string;
}

const CACHE_DURATION_MS = 60 * 60 * 1000; // 1 hour in milliseconds

export default function GitHubRepoCard({
  caseNumber,
  title,
  focus,
  keyFeature,
  tech,
  owner,
  repo,
  githubUrl,
  isExternalSync = false,
}: CaseFileProps) {
  const [metadata, setMetadata] = useState<RepoMetadata>({
    stars: 12,
    forks: 3,
    lastCommit: "MMV (2005) (Recent)",
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isCached, setIsCached] = useState<boolean>(false);
  const [errorNotice, setErrorNotice] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const cacheKey = `gazette_repo_cache_${owner}_${repo}`;
    const etagKey = `gazette_repo_etag_${owner}_${repo}`;

    async function fetchRepoData() {
      setIsLoading(true);
      setErrorNotice(null);

      try {
        const cachedRaw = localStorage.getItem(cacheKey);
        const cachedEtag = localStorage.getItem(etagKey);

        let parsedCache: { data: RepoMetadata; timestamp: number } | null = null;
        if (cachedRaw) {
          try {
            parsedCache = JSON.parse(cachedRaw);
          } catch {
            parsedCache = null;
          }
        }

        // Check if cache is fresh (< 1 hour)
        const now = Date.now();
        if (parsedCache && now - parsedCache.timestamp < CACHE_DURATION_MS) {
          if (isMounted) {
            setMetadata(parsedCache.data);
            setIsCached(true);
            setIsLoading(false);
          }
          return;
        }

        // Prepare headers with conditional ETag
        const headers: Record<string, string> = {
          Accept: "application/vnd.github.v3+json",
        };
        if (cachedEtag) {
          headers["If-None-Match"] = cachedEtag;
        }

        const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
          headers,
        });

        // 304 Not Modified - return existing cache
        if (res.status === 304 && parsedCache) {
          // Refresh cache timestamp
          localStorage.setItem(
            cacheKey,
            JSON.stringify({ data: parsedCache.data, timestamp: now })
          );
          if (isMounted) {
            setMetadata(parsedCache.data);
            setIsCached(true);
            setIsLoading(false);
          }
          return;
        }

        if (res.ok) {
          const newEtag = res.headers.get("etag");
          const json = await res.json();
          const newData: RepoMetadata = {
            stars: json.stargazers_count ?? 0,
            forks: json.forks_count ?? 0,
            lastCommit: json.updated_at
              ? new Date(json.updated_at).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
              : "MMV (2005)",
            description: json.description || undefined,
            language: json.language || undefined,
            htmlUrl: json.html_url || undefined,
          };

          if (newEtag) {
            localStorage.setItem(etagKey, newEtag);
          }
          localStorage.setItem(
            cacheKey,
            JSON.stringify({ data: newData, timestamp: now })
          );

          if (isMounted) {
            setMetadata(newData);
            setIsCached(false);
            setIsLoading(false);
          }
        } else {
          // If API rate limit or error, fallback to cache if available, else static default
          if (parsedCache) {
            if (isMounted) {
              setMetadata(parsedCache.data);
              setIsCached(true);
              setIsLoading(false);
            }
          } else {
            throw new Error(`Telegraph status code ${res.status}`);
          }
        }
      } catch (err) {
        // Fallback static data if offline or error
        if (isMounted) {
          setErrorNotice("Telegraph offline — displaying local archive records.");
          setIsLoading(false);
        }
      }
    }

    fetchRepoData();

    return () => {
      isMounted = false;
    };
  }, [owner, repo]);

  const targetUrl = githubUrl || metadata.htmlUrl || `https://github.com/${owner}/${repo}`;

  return (
    <article className="group relative flex flex-col justify-between bg-paper-cream border-2 border-paper-tan hover:border-ink-black rounded-sm p-5 transition-all duration-300 shadow-[2px_3px_0px_rgba(151,109,103,0.2)] hover:shadow-[4px_6px_0px_rgba(17,25,27,0.3)]">
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-paper-tan/60 pb-2 mb-3">
          {/* Case Number Badge */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold tracking-widest uppercase bg-paper-red text-paper-cream px-2 py-0.5 rounded-sm shrink-0">
              {caseNumber}
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase text-ink-black bg-paper-tan/30 px-2 py-0.5 rounded-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-paper-red inline-block" />
              <span>{owner}/{repo}</span>
            </span>
          </div>

          {/* Stars & Forks & Cache Status */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono uppercase text-ink-black/80 font-bold">
            {isCached && (
              <span
                title="ETag Verified Local Archive"
                className="inline-flex items-center gap-1 text-paper-tan text-[10px] uppercase font-semibold"
              >
                <ShieldCheck className="w-3 h-3 text-paper-red shrink-0" />
                <span>ETAG CACHED</span>
              </span>
            )}
            <span className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-paper-red fill-paper-red shrink-0" />
              <span>{isLoading ? "..." : metadata.stars}</span>
            </span>
            <span className="flex items-center gap-1">
              <GitFork className="w-3.5 h-3.5 text-ink-black shrink-0" />
              <span>{isLoading ? "..." : metadata.forks}</span>
            </span>
          </div>
        </div>

        {/* Title */}
        <h3
          className="text-lg sm:text-xl md:text-2xl font-bold text-ink-black font-headline tracking-tight group-hover:text-paper-red transition-colors text-balance"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          {title}
        </h3>

        {/* Focus Sub-headline */}
        <div className="mt-1 text-xs font-mono uppercase tracking-wide text-paper-tan font-semibold">
          Focus: <span className="text-ink-black">{focus}</span>
        </div>

        {/* Key Feature Summary */}
        <p className="mt-3 text-sm sm:text-base font-serif text-ink-black/90 leading-relaxed text-justify">
          {keyFeature}
        </p>

        {/* Dynamic description from GitHub if available and external sync */}
        {isExternalSync && metadata.description && (
          <p className="mt-2 text-xs font-mono italic text-ink-black/70 bg-paper-tan/10 p-2 rounded border-l-2 border-paper-tan">
            &ldquo;{metadata.description}&rdquo;
          </p>
        )}

        {errorNotice && (
          <div className="mt-2 flex items-center gap-1.5 text-[11px] text-paper-red font-mono italic">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{errorNotice}</span>
          </div>
        )}
      </div>

      {/* Footer / Tech Stack Tags & Action Button */}
      <div className="mt-6 pt-3 border-t border-paper-tan/50 flex flex-col gap-3">
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5">
          {tech.map((item) => (
            <span
              key={item}
              className="px-2 py-0.5 text-xs font-mono bg-paper-tan/15 border border-paper-tan/50 text-ink-black rounded-full select-none"
            >
              {item}
            </span>
          ))}
          {metadata.language && !tech.includes(metadata.language) && (
            <span className="px-2 py-0.5 text-xs font-mono bg-paper-red/10 border border-paper-red/30 text-paper-red font-bold rounded-full select-none">
              {metadata.language}
            </span>
          )}
        </div>

        {/* Action Buttons: Case Dossier & GitHub Telegraph */}
        <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-between gap-2 pt-2 border-t border-paper-tan/40">
          <Link
            href={`/projects/${repo.toLowerCase()}`}
            className="inline-flex items-center justify-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-paper-cream bg-ink-black hover:bg-paper-red px-3 py-2 sm:py-1.5 rounded transition-colors shadow-sm text-center"
          >
            <span>Read Case Dossier</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0" />
          </Link>

          <a
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Open in GitHub Telegraph"
            className="inline-flex items-center justify-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-ink-black bg-paper-cream hover:bg-paper-tan/20 border border-ink-black px-2.5 py-2 sm:py-1.5 rounded transition-all duration-200 text-center"
          >
            <span>Telegraph</span>
            <ExternalLink className="w-3.5 h-3.5 shrink-0" />
          </a>
        </div>
      </div>
    </article>
  );
}
