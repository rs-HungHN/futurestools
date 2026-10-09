"use client";

import React, { useEffect, useState } from "react";

// Official Ocura Life with brother referral code bvsfccon
const ENCODED_DESTINATION = "aHR0cHM6Ly9vY3VyYWxpZmUuY29tLz9yZWY9YnZzZmNjb24=";

export default function OcuraBridgePage() {
  const [countdown, setCountdown] = useState(2);

  const handleDirectLaunch = () => {
    try {
      window.location.replace(atob(ENCODED_DESTINATION));
    } catch {
      window.location.replace("https://ocuralife.com/?ref=bvsfccon");
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
            <span>✨ Official Partner Privilege: Exclusive Offer</span>
          </div>
          <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-pink-500 flex items-center justify-center text-white text-3xl font-black shadow-lg shadow-amber-500/35 mb-5">
            O
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">Ocura Life Official</h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
            Advanced at-home Plasma Pen technology designed for precision skincare, age spots, and non-invasive beauty care.
          </p>
          <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 mb-6 text-left space-y-2 text-xs">
            <div className="flex justify-between text-slate-300"><span>Technology</span><span className="font-bold text-amber-400">Precision Plasma Energy</span></div>
            <div className="flex justify-between text-slate-300"><span>Application</span><span className="font-semibold text-white">Targeted Skin Care</span></div>
            <div className="flex justify-between text-slate-300"><span>Shipping</span><span className="font-semibold text-emerald-400">Fast US Dispatch</span></div>
          </div>
          <button onClick={handleDirectLaunch} className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-rose-500 to-pink-500 hover:opacity-95 text-white font-bold text-sm tracking-wide shadow-lg shadow-amber-500/30">
            Claim Exclusive Ocura Offer &rarr;
          </button>
          <div className="mt-4 text-[11px] text-slate-400 font-medium">
            {countdown > 0 ? `Connecting to official store in ${countdown}s...` : "Redirecting securely..."}
          </div>
        </div>
      </div>
      <div className="py-4 text-center text-[10px] text-slate-500 border-t border-slate-800/80 bg-slate-950/80">
        &copy; 2026 Futures Tools Partner Hub. Direct verified connection to Ocura Life.
      </div>
    </div>
  );
}