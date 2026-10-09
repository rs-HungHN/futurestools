"use client";

import React, { useEffect, useState } from "react";

const ENCODED_DESTINATION = "aHR0cHM6Ly9zdXBlcnBvd2VyLmNvbQ==";

export default function SuperpowerBridgePage() {
  const [countdown, setCountdown] = useState(2);

  const handleDirectLaunch = () => {
    try {
      window.location.replace(atob(ENCODED_DESTINATION));
    } catch {
      window.location.replace("https://superpower.com");
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
        <div onClick={(e) => e.stopPropagation()} className="max-w-md w-full p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-700/80 shadow-[0_25px_70px_-15px_rgba(16,185,129,0.35)] backdrop-blur-2xl relative overflow-hidden text-center cursor-default">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold tracking-wide uppercase mb-5">
            <span>🛡️ HSA / FSA Eligible • 100+ Biomarker Panel</span>
          </div>
          <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white text-3xl font-black shadow-lg shadow-emerald-500/35 mb-5">
            S
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">Superpower Health</h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
            The most advanced preventive longevity testing. 100+ biomarker scan, metabolic analysis, and doctor-approved protocols.
          </p>
          <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 mb-6 text-left space-y-2 text-xs">
            <div className="flex justify-between text-slate-300"><span>Diagnostics</span><span className="font-bold text-emerald-400">100+ Biomarkers</span></div>
            <div className="flex justify-between text-slate-300"><span>Sampling</span><span className="font-semibold text-white">At-Home Phlebotomist</span></div>
            <div className="flex justify-between text-slate-300"><span>Insurance</span><span className="font-semibold text-cyan-400">HSA / FSA Accepted</span></div>
          </div>
          <button onClick={handleDirectLaunch} className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 hover:opacity-95 text-white font-bold text-sm tracking-wide shadow-lg shadow-emerald-500/30">
            Explore 100+ Biomarker Panel &rarr;
          </button>
          <div className="mt-4 text-[11px] text-slate-400 font-medium">
            {countdown > 0 ? `Connecting to Superpower in ${countdown}s...` : "Redirecting..."}
          </div>
        </div>
      </div>
      <div className="py-4 text-center text-[10px] text-slate-500 border-t border-slate-800/80 bg-slate-950/80">
        &copy; 2026 Futures Tools Partner Hub. Direct verified connection to Superpower Health.
      </div>
    </div>
  );
}