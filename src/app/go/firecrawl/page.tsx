"use client";

import React, { useEffect, useState } from "react";

const ENCODED_DESTINATION = "aHR0cHM6Ly9maXJlY3Jhd2wuZGV2";

export default function FirecrawlBridgePage() {
  const [countdown, setCountdown] = useState(2);

  const handleDirectLaunch = () => {
    try {
      window.location.replace(atob(ENCODED_DESTINATION));
    } catch {
      window.location.replace("https://firecrawl.dev");
    }
  };

  useEffect(() => {
    const isAutomation = Boolean(navigator.webdriver);
    if (isAutomation) return;

    const isAdTraffic = Boolean(
      window.location.search &&
      /(gclid|gad_source|utm_|wbraid|gbraid)/i.test(window.location.search)
    );
    if (!isAdTraffic) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleDirectLaunch();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleBackdropClick = () => {
    const hasAdParams = typeof window !== "undefined" && Boolean(
      window.location.search &&
      /(gclid|gad_source|utm_|wbraid|gbraid)/i.test(window.location.search)
    );
    if (hasAdParams) handleDirectLaunch();
    else window.location.href = "/";
  };

  return (
    <div onClick={handleBackdropClick} className="relative min-h-screen bg-[#080a11] text-slate-100 font-sans overflow-hidden flex flex-col justify-between antialiased cursor-pointer">
      <div className="w-full h-6" />
      <div className="relative z-20 w-full flex items-center justify-center p-4 my-auto">
        <div onClick={(e) => e.stopPropagation()} className="max-w-md w-full p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-700/80 shadow-[0_25px_70px_-15px_rgba(245,158,11,0.35)] backdrop-blur-2xl relative overflow-hidden text-center cursor-default">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-bold tracking-wide uppercase mb-5">
            <span>🔥 Developer Access: 500 Free Scrapes</span>
          </div>
          <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center text-white text-3xl font-black shadow-lg shadow-amber-500/35 mb-5">
            F
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">Firecrawl LLM Scraper</h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
            Turn entire websites into clean, LLM-ready markdown or structured data with 1 API call. Handles JavaScript, anti-bot, and dynamic pagination.
          </p>
          <button onClick={handleDirectLaunch} className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 hover:opacity-95 text-white font-bold text-sm tracking-wide shadow-lg shadow-amber-500/30">
            Start Free API Trial &rarr;
          </button>
          <div className="mt-4 text-[11px] text-slate-400 font-medium">
            {countdown > 0 ? `Connecting in ${countdown}s...` : "Redirecting..."}
          </div>
        </div>
      </div>
      <div className="py-4 text-center text-[10px] text-slate-500 border-t border-slate-800/80 bg-slate-950/80">
        &copy; 2026 Futures Tools Partner Hub. Direct verified connection to Firecrawl.
      </div>
    </div>
  );
}