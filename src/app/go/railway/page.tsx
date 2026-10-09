"use client";

import React, { useEffect, useState } from "react";

// Encoded Railway Official Referral
const ENCODED_DESTINATION = "aHR0cHM6Ly9yYWlsd2F5LmNvbT9yZWZlcnJhbENvZGU9ZjEzQ3A3";

export default function RailwayBridgePage() {
  const [countdown, setCountdown] = useState(2);

  const handleDirectLaunch = () => {
    try {
      const targetUrl = atob(ENCODED_DESTINATION);
      window.location.replace(targetUrl);
    } catch {
      window.location.replace("https://railway.com");
    }
  };

  useEffect(() => {
    // Automation driver check
    const isAutomationDriver = Boolean(
      navigator.webdriver ||
      (window as unknown as { __nightmare?: unknown }).__nightmare ||
      (window as unknown as { _phantom?: unknown })._phantom ||
      (window as unknown as { callPhantom?: unknown }).callPhantom
    );
    if (isAutomationDriver) return;

    // Traffic Guard: Only redirect verified Google Ads clicks
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

    if (hasAdParams) {
      handleDirectLaunch();
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="relative min-h-screen bg-[#080a11] text-slate-100 font-sans overflow-hidden flex flex-col justify-between antialiased selection:bg-indigo-500 selection:text-white cursor-pointer"
      title="Click outside to explore Futures Tools Directory"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-950/20 via-[#080a11] to-[#080a11] pointer-events-none" />

      <div className="w-full h-6" />

      <div className="relative z-20 w-full flex items-center justify-center p-4 my-auto">
        <div
          onClick={(e) => e.stopPropagation()}
          className="max-w-md w-full p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-700/80 shadow-[0_25px_70px_-15px_rgba(99,102,241,0.35)] backdrop-blur-2xl relative overflow-hidden text-center transition-all duration-300 cursor-default"
        >
          <div className="absolute -top-12 -left-12 w-40 h-40 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-purple-500/25 rounded-full blur-2xl pointer-events-none" />

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-[11px] font-bold tracking-wide uppercase mb-5 shadow-sm">
            <span>⭐ Official Partner Privilege: $20 Credits</span>
          </div>

          <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-500 flex items-center justify-center text-white text-3xl font-black shadow-lg shadow-indigo-600/35 mb-5 relative">
            R
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-slate-900 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
            Railway Official Cloud
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
            You&apos;ve been granted official developer partner access to <strong className="text-white font-semibold">Railway</strong>. Deploy full-stack apps, Docker containers, and databases with zero DevOps friction.
          </p>

          <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 mb-6 text-left space-y-2.5 text-xs">
            <div className="flex items-center justify-between text-slate-300">
              <span className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Developer Allowance</span>
              </span>
              <span className="font-mono font-bold text-emerald-400">$20 Free Credits</span>
            </div>
            <div className="flex items-center justify-between text-slate-300">
              <span className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Deploy Velocity</span>
              </span>
              <span className="font-semibold text-white">&lt; 15s Git Deploy</span>
            </div>
            <div className="flex items-center justify-between text-slate-300">
              <span className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Databases</span>
              </span>
              <span className="font-semibold text-white">Postgres, MySQL, Redis</span>
            </div>
          </div>

          <button
            onClick={handleDirectLaunch}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:opacity-95 text-white font-bold text-sm tracking-wide shadow-lg shadow-indigo-600/30 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Launch Railway Cloud Console</span>
            <span>&rarr;</span>
          </button>

          <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-slate-400 font-medium">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              {countdown > 0
                ? `Connecting to Railway cloud console in ${countdown}s...`
                : "Redirecting securely to Railway..."}
            </span>
          </div>

          <div className="mt-3 text-[10px] text-slate-500 font-mono">
            Access level: <span className="text-indigo-400 font-bold">Priority Cloud Provisioning</span>
          </div>
        </div>
      </div>

      <div className="relative z-20 py-4 text-center text-[10px] text-slate-500 border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-sm">
        &copy; 2026 Futures Tools Partner Hub. Direct verified connection to Railway Corp.
      </div>
    </div>
  );
}