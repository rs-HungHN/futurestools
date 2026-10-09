"use client";

import React from "react";

const ENCODED_DESTINATION = "aHR0cHM6Ly9sb3ZhYmxlLmRldg==";

export default function LovableBridgePage() {
  const handleDirectLaunch = () => {
    try {
      window.location.replace(atob(ENCODED_DESTINATION));
    } catch {
      window.location.replace("https://lovable.dev");
    }
  };

  const handleBackdropClick = () => {
    window.location.href = "/";
  };

  return (
    <div onClick={handleBackdropClick} className="relative min-h-screen bg-[#080a11] text-slate-100 font-sans overflow-hidden flex flex-col justify-between antialiased cursor-pointer">
      <div className="w-full h-6" />
      <div className="relative z-20 w-full flex items-center justify-center p-4 my-auto">
        <div onClick={(e) => e.stopPropagation()} className="max-w-md w-full p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-700/80 shadow-[0_25px_70px_-15px_rgba(244,63,94,0.35)] backdrop-blur-2xl relative overflow-hidden text-center cursor-default">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-[11px] font-bold tracking-wide uppercase mb-5">
            <span>🏆 Official Access: Lovable 2.0 Studio</span>
          </div>
          <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-600 flex items-center justify-center text-white text-3xl font-black shadow-lg shadow-rose-500/35 mb-5">
            ❤️
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">Build with Lovable 2.0</h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
            The leading AI full-stack builder. Generate complete React web applications, connect Supabase databases, and ship production SaaS in seconds.
          </p>
          <button onClick={handleDirectLaunch} className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 hover:opacity-95 text-white font-bold text-sm tracking-wide shadow-lg shadow-rose-500/30">
            Launch Lovable Studio Free &rarr;
          </button>
          <div className="mt-4 text-[11px] text-slate-400 font-medium">
            Official Partner Access • Free Tier &amp; Sandbox Included
          </div>
        </div>
      </div>
      <div className="py-4 text-center text-[10px] text-slate-500 border-t border-slate-800/80 bg-slate-950/80">
        &copy; 2026 Futures Tools Partner Hub. Direct verified connection to Lovable Labs.
      </div>
    </div>
  );
}