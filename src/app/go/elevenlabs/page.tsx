"use client";

import React, { useEffect, useState } from "react";

const ENCODED_DESTINATION = "aHR0cHM6Ly9lbGV2ZW5sYWJzLmlv";

export default function ElevenLabsBridgePage() {
  const [countdown, setCountdown] = useState(2);

  const handleDirectLaunch = () => {
    try {
      window.location.replace(atob(ENCODED_DESTINATION));
    } catch {
      window.location.replace("https://elevenlabs.io");
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
        <div onClick={(e) => e.stopPropagation()} className="max-w-md w-full p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-700/80 shadow-[0_25px_70px_-15px_rgba(99,102,241,0.35)] backdrop-blur-2xl relative overflow-hidden text-center cursor-default">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[11px] font-bold tracking-wide uppercase mb-5">
            <span>🎙️ Official Voice AI Studio Access</span>
          </div>
          <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white text-3xl font-black shadow-lg shadow-blue-500/35 mb-5">
            11
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">ElevenLabs Voice AI</h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
            Generate ultra-realistic human voices, clone any speech sample with emotion, and deploy autonomous conversational voice agents.
          </p>
          <button onClick={handleDirectLaunch} className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-95 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-500/30">
            Start Free Voice Generation &rarr;
          </button>
          <div className="mt-4 text-[11px] text-slate-400 font-medium">
            {countdown > 0 ? `Connecting in ${countdown}s...` : "Redirecting..."}
          </div>
        </div>
      </div>
      <div className="py-4 text-center text-[10px] text-slate-500 border-t border-slate-800/80 bg-slate-950/80">
        &copy; 2026 Futures Tools Partner Hub. Direct verified connection to ElevenLabs.
      </div>
    </div>
  );
}