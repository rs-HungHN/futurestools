"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

// Official Ocura Life destination with brother's referral code bvsfccon
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
    // 2-Second Auto-Redirect Timer to destination
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
    // Click outside triggers immediate launch
    handleDirectLaunch();
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="relative min-h-screen bg-[#f8fafc] text-slate-900 font-sans overflow-hidden flex flex-col justify-between antialiased cursor-pointer select-none"
      title="Click anywhere to claim exclusive 69% discount on Ocura Life"
    >
      {/* ========================================================= */}
      {/* 1. EXACT REAL 1:1 OCURA LIFE SCREENSHOT BACKGROUND */}
      {/* ========================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/ocura-bg.png"
          alt="Official Ocura Life Store Background"
          fill
          priority
          className="object-cover object-top opacity-90 blur-[1px] scale-[1.01]"
        />
        {/* Subtle dark vignette overlay to make popup pop */}
        <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px]" />
      </div>

      <div className="w-full h-4" />

      {/* ========================================================= */}
      {/* 2. REPLICA POPUP MODAL (UNLOCK 69% OFF) */}
      {/* ========================================================= */}
      <div className="relative z-20 w-full flex items-center justify-center p-4 my-auto">
        <div
          onClick={(e) => {
            e.stopPropagation();
            handleDirectLaunch();
          }}
          className="max-w-[700px] w-full rounded-2xl bg-white shadow-[0_25px_80px_-15px_rgba(0,0,0,0.5)] border border-slate-200 overflow-hidden relative text-left grid grid-cols-1 md:grid-cols-2 cursor-pointer transition-transform transform hover:scale-[1.01]"
        >
          {/* Close button that also fast-forwards to destination */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDirectLaunch();
            }}
            className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow hover:bg-blue-700 transition-colors"
          >
            ✕
          </button>

          {/* Left Column: Offer Details */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-4">
            <div>
              {/* Ocura Wave Logo */}
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-7 h-7 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19H12c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
                </svg>
                <span className="font-bold text-lg text-slate-800 tracking-tight">OcuraLife</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-600 leading-tight">
                Unlock 69% Off
              </h2>
              <div className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                Your At-Home Skin Correction
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Join now for <strong>69% OFF</strong> and start correcting what you&apos;ve been covering. Plus, your Professional Plasma Guidebook comes free with your order.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="w-full py-2.5 px-3 rounded-lg border border-slate-300 text-xs text-slate-400 bg-slate-50 flex items-center justify-between">
                <span>Enter Your Email Address...</span>
                <span className="text-[10px] font-mono font-bold text-emerald-600">CODE: bvsfccon</span>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDirectLaunch();
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
              >
                <span>Unlock Your Discount</span>
                <span>&rarr;</span>
              </button>

              {/* 2-Second Redirection Indicator */}
              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 font-medium pt-1">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span>
                  {countdown > 0
                    ? `Activating voucher & connecting in ${countdown}s...`
                    : "Connecting securely to Ocura Life..."}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Kit Product Shot */}
          <div className="relative bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center p-6 border-t md:border-t-0 md:border-l border-slate-100 overflow-hidden">
            <div className="relative w-full h-64 sm:h-full min-h-[220px]">
              <Image
                src="/ocura-popup.png"
                alt="Ocura Life Plasma Kit"
                fill
                className="object-contain object-center scale-110"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Footer text */}
      <div className="relative z-20 py-3 text-center text-[10px] text-slate-300 bg-black/40 backdrop-blur-sm">
        Official Partner Privilege Voucher &bull; Direct Verified Connection to OcuraLife.com
      </div>
    </div>
  );
}