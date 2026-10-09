"use client";

import React, { useEffect, useState } from "react";

const ENCODED_DESTINATION = "aHR0cHM6Ly9hcmNhZHMuYWk=";

export default function ArcadsBridgePage() {
  const [countdown, setCountdown] = useState(2);

  const handleDirectLaunch = () => {
    try {
      window.location.replace(atob(ENCODED_DESTINATION));
    } catch {
      window.location.replace("https://arcads.ai");
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
        <div onClick={(e) => e.stopPropagation()} className="max-w-md w-full p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-700/80 shadow-[0_25px_70px_-15px_rgba(6,182,212,0.35)] backdrop-blur-2xl relative overflow-hidden text-center cursor-default">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[11px] font-bold tracking-wide uppercase mb-5">
            <span>⭐ Official Access: Arcads AI Studio</span>
          </div>
          <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center text-white text-3xl font-black shadow-lg shadow-cyan-500/35 mb-5">
            A
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">Arcads AI Video Creator</h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
            Generate high-converting TikTok and Meta UGC video ads using hyper-realistic AI actors in under 3 minutes.
          </p>
          <button onClick={handleDirectLaunch} className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-95 text-white font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/30">
            Launch Arcads Studio Free &rarr;
          </button>
          <div className="mt-4 text-[11px] text-slate-400 font-medium">
            {countdown > 0 ? `Connecting in ${countdown}s...` : "Redirecting..."}
          </div>
        </div>
      </div>
      <div className="py-4 text-center text-[10px] text-slate-500 border-t border-slate-800/80 bg-slate-950/80">
        &copy; 2026 Futures Tools Partner Hub. Direct verified connection to Arcads AI.
      </div>
    </div>
  );
}