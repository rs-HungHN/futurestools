"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ToolItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  badge?: string;
  rating: string;
  offer: string;
  bestFor: string;
  internalPath: string;
  accentColor: string;
  badgeColor: string;
  logoChar: string;
  highlightText: string;
}

const TOOLS_DATA: ToolItem[] = [
  {
    id: "railway",
    name: "Railway Cloud",
    category: "Cloud Infrastructure",
    tagline: "Deploy full-stack web apps, Docker services, and managed PostgreSQL databases in seconds with zero DevOps complexity.",
    badge: "Official Partner • $20 Credit",
    rating: "9.9",
    offer: "$20 Free Trial Credits",
    bestFor: "Full-Stack Devs & Startups",
    internalPath: "/go/railway",
    accentColor: "border-emerald-500/30 hover:border-emerald-500/60 shadow-emerald-500/10",
    badgeColor: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
    logoChar: "R",
    highlightText: "Instant Git Deploy & Provisioning",
  },
  {
    id: "superpower",
    name: "Superpower Health",
    category: "Longevity & Health",
    tagline: "Comprehensive 100+ biomarker blood scans, metabolic diagnostics, and personalized longevity protocols with HSA/FSA eligibility.",
    badge: "HSA / FSA Accepted",
    rating: "9.9",
    offer: "100+ Biomarker Panel",
    bestFor: "Preventive Care & Longevity",
    internalPath: "/go/superpower",
    accentColor: "border-amber-500/30 hover:border-amber-500/60 shadow-amber-500/10",
    badgeColor: "bg-amber-500/10 border-amber-500/30 text-amber-400",
    logoChar: "S",
    highlightText: "At-Home Phlebotomist Included",
  },
  {
    id: "ocuralife",
    name: "Ocura Life",
    category: "Beauty Technology",
    tagline: "Precision at-home Plasma Pen technology designed for targeted skin imperfection care, dark spots, and anti-aging routines.",
    badge: "Special Partner Voucher",
    rating: "9.7",
    offer: "Exclusive Voucher Applied",
    bestFor: "At-Home Skincare Tech",
    internalPath: "/go/ocura",
    accentColor: "border-rose-500/30 hover:border-rose-500/60 shadow-rose-500/10",
    badgeColor: "bg-rose-500/10 border-rose-500/30 text-rose-400",
    logoChar: "O",
    highlightText: "Precision Plasma Energy Care",
  },
  {
    id: "scentbird",
    name: "Scentbird",
    category: "Luxury Lifestyle",
    tagline: "The monthly luxury fragrance subscription. Explore 800+ authentic designer perfumes & colognes in travel-friendly atomizers.",
    badge: "50% Off First Month",
    rating: "9.8",
    offer: "Half Price Month 1",
    bestFor: "Fragrance Collectors",
    internalPath: "/go/scentbird",
    accentColor: "border-purple-500/30 hover:border-purple-500/60 shadow-purple-500/10",
    badgeColor: "bg-purple-500/10 border-purple-500/30 text-purple-400",
    logoChar: "B",
    highlightText: "800+ Authentic Designer Brands",
  },
  {
    id: "lovable",
    name: "Lovable 2.0",
    category: "Vibe-Coding Studio",
    tagline: "The industry-leading AI prompt-to-production builder. Autonomous React + Supabase code synthesis with two-way GitHub sync.",
    badge: "Gold Medal • Free Sandbox",
    rating: "9.8",
    offer: "Free Developer Tier",
    bestFor: "Rapid SaaS Prototyping",
    internalPath: "/go/lovable",
    accentColor: "border-sky-500/30 hover:border-sky-500/60 shadow-sky-500/10",
    badgeColor: "bg-sky-500/10 border-sky-500/30 text-sky-400",
    logoChar: "❤️",
    highlightText: "Supabase DB & Auth Built-in",
  },
  {
    id: "arcads",
    name: "Arcads AI",
    category: "AI Video Production",
    tagline: "Generate viral TikTok and Meta UGC video ads in minutes using ultra-realistic AI actors tailored for digital marketing.",
    badge: "High-Converting UGC",
    rating: "9.8",
    offer: "Free Studio Demo",
    bestFor: "Media Buyers & E-Commerce",
    internalPath: "/go/arcads",
    accentColor: "border-teal-500/30 hover:border-teal-500/60 shadow-teal-500/10",
    badgeColor: "bg-teal-500/10 border-teal-500/30 text-teal-400",
    logoChar: "A",
    highlightText: "100s of Winning Video Ads",
  },
];

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Cloud Infrastructure", "Longevity & Health", "Beauty Technology", "Luxury Lifestyle", "Vibe-Coding Studio"];

  const filteredTools = TOOLS_DATA.filter((tool) => {
    const matchesCategory = activeCategory === "All" || tool.category === activeCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.bestFor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#06090e] text-[#f1f5f9] selection:bg-amber-400 selection:text-black font-sans antialiased">
      
      {/* Subtle Aurora Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-[550px] h-[450px] bg-amber-500/5 rounded-full blur-[140px]" />
      </div>

      {/* ======================================================== */}
      {/* 1. EDITORIAL HEADER */}
      {/* ======================================================== */}
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#06090e]/85 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-400 via-emerald-400 to-teal-500 p-[1.5px] shadow-lg shadow-emerald-500/10 group-hover:shadow-emerald-500/25 transition-all">
              <div className="w-full h-full bg-[#06090e] rounded-[14px] flex items-center justify-center font-black text-base text-amber-400 tracking-tighter">
                FT
              </div>
            </div>
            <div>
              <div className="font-bold text-lg tracking-tight text-white flex items-center gap-2">
                <span>FUTURES</span>
                <span className="text-amber-400 font-extrabold">TOOLS</span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/[0.06] border border-white/[0.08] text-slate-300">
                  2026
                </span>
              </div>
              <div className="text-[11px] text-slate-400 tracking-wide font-normal">
                Curated Software &amp; Premium Lifestyle Directory
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-9 text-xs font-medium text-slate-300">
            <a href="#bento" className="hover:text-amber-400 transition-colors">Spotlight Selections</a>
            <a href="#catalog" className="hover:text-amber-400 transition-colors">Directory Matrix</a>
            <a href="#standards" className="hover:text-amber-400 transition-colors">Audit Standards</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/go/railway"
              className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs tracking-wide shadow-md shadow-amber-400/20 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Railway $20 Voucher &rarr;
            </Link>
          </div>
        </div>
      </header>

      {/* ======================================================== */}
      {/* 2. EDITORIAL HERO SECTION */}
      {/* ======================================================== */}
      <section className="relative pt-20 pb-16 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-amber-400 text-xs font-medium mb-8 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>INDEPENDENT VERIFIED REVIEWS &bull; EXCLUSIVE PARTNER INCENTIVES</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-8">
          Tomorrow&apos;s Tools for{" "}
          <span className="bg-gradient-to-r from-amber-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent italic font-serif">
            Builders, Health &amp; Living.
          </span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          A hand-picked directory of verified developer cloud platforms, medical-grade longevity blood scans, and luxury lifestyle subscriptions.
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto relative mb-10">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search verified platforms (e.g. Railway, Superpower, Ocura, Scentbird)..."
            className="w-full py-4 pl-12 pr-4 rounded-2xl bg-white/[0.04] border border-white/[0.12] text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:bg-white/[0.07] shadow-xl transition-all"
          />
          <svg className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeCategory === cat
                  ? "bg-white text-slate-950 font-bold shadow-lg"
                  : "bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 border border-white/[0.06]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. BENTO GRID SPOTLIGHT (ASMETRIC MODERN LAYOUT) */}
      {/* ======================================================== */}
      <section id="bento" className="py-12 px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">Editor&apos;s Highlight</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              Top Featured Platforms of Q4
            </h2>
          </div>
          <span className="hidden sm:block text-xs text-slate-400 font-mono">100% Tested In Production</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Bento Card 1: RAILWAY (Hero Size - 7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-gradient-to-br from-emerald-950/20 via-[#0a0f16] to-[#080d14] border border-emerald-500/30 p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-emerald-500/50 transition-all shadow-xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  ⭐ Top Developer Pick
                </span>
                <span className="text-xs font-mono text-slate-400">Score: 9.9 / 10</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-black text-2xl text-emerald-400">
                  R
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Railway Cloud</h3>
                  <div className="text-xs text-slate-400 font-mono">Instant Infrastructure &bull; Zero DevOps</div>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
                Deploy full-stack web applications, Docker containers, and PostgreSQL/Redis databases in seconds. Connect any GitHub repository for automated CI/CD and custom domains.
              </p>

              <div className="grid grid-cols-3 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-emerald-400 font-bold">$20 Credit</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Free Allowance</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-white font-bold">&lt; 15s Deploy</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Automated Git Push</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-white font-bold">Postgres &amp; Redis</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">1-Click DB Setup</div>
                </div>
              </div>
            </div>

            <div className="pt-8 relative z-10 flex items-center gap-4">
              <Link
                href="/go/railway"
                className="px-6 py-3.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-400/20 transition-all transform hover:scale-[1.02]"
              >
                Claim $20 Cloud Credit &rarr;
              </Link>
              <span className="text-xs text-slate-400 font-mono">Official Partner Portal</span>
            </div>
          </div>

          {/* Bento Card 2: SUPERPOWER HEALTH (5 Cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-amber-950/20 via-[#0a0f16] to-[#080d14] border border-amber-500/30 p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-amber-500/50 transition-all shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  🛡️ Longevity Diagnostic
                </span>
                <span className="text-xs font-mono text-slate-400">Score: 9.9</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-black text-2xl text-amber-400">
                  S
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-white tracking-tight">Superpower Health</h3>
                  <div className="text-xs text-slate-400 font-mono">100+ Biomarkers &bull; HSA / FSA</div>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                The most advanced preventive longevity blood diagnostic. An at-home phlebotomist draws your sample, testing cardiovascular, metabolic, and hormonal markers.
              </p>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs">
                <div className="flex justify-between text-slate-300"><span>Sampling</span><span className="font-bold text-amber-400">At-Home Phlebotomist</span></div>
                <div className="flex justify-between text-slate-300 mt-1"><span>Payment</span><span className="font-bold text-white">HSA &amp; FSA Eligible</span></div>
              </div>
            </div>

            <div className="pt-8 relative z-10">
              <Link
                href="/go/superpower"
                className="w-full py-3.5 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20 transition-all transform hover:scale-[1.02]"
              >
                <span>Explore 100+ Biomarker Panel</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Bento Card 3: OCURA LIFE (6 Cols) */}
          <div className="lg:col-span-6 rounded-3xl bg-[#0a0f16] border border-rose-500/25 p-7 flex flex-col justify-between hover:border-rose-500/50 transition-all shadow-lg">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase font-mono">
                  ✨ Beauty Technology
                </span>
                <span className="text-xs font-mono text-emerald-400 font-bold">Partner Code: bvsfccon</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center font-bold text-xl text-rose-400">
                  O
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Ocura Life</h3>
                  <div className="text-xs text-slate-400 font-mono">Precision Plasma Pen Device</div>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                At-home plasma pen designed for targeted beauty treatment of skin tags, age spots, and fine lines with rapid US shipping.
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.06] mt-4 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">Verified Discount Active</span>
              <Link
                href="/go/ocura"
                className="px-4 py-2 rounded-xl bg-rose-500 hover:bg-rose-400 text-white font-bold text-xs transition-all"
              >
                Claim Voucher &rarr;
              </Link>
            </div>
          </div>

          {/* Bento Card 4: SCENTBIRD (6 Cols) */}
          <div className="lg:col-span-6 rounded-3xl bg-[#0a0f16] border border-purple-500/25 p-7 flex flex-col justify-between hover:border-purple-500/50 transition-all shadow-lg">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase font-mono">
                  🎁 Luxury Fragrance
                </span>
                <span className="text-xs font-mono text-purple-300 font-bold">50% Off Month 1</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center font-bold text-xl text-purple-400">
                  B
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Scentbird</h3>
                  <div className="text-xs text-slate-400 font-mono">Monthly Designer Perfume Club</div>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Receive an 8ml 30-day supply of authentic luxury scents (Versace, Gucci, Tom Ford) delivered every month. Cancel anytime.
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.06] mt-4 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">800+ Scents Available</span>
              <Link
                href="/go/scentbird"
                className="px-4 py-2 rounded-xl bg-purple-500 hover:bg-purple-400 text-white font-bold text-xs transition-all"
              >
                Get 50% Off &rarr;
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. DIRECTORY MATRIX */}
      {/* ======================================================== */}
      <section id="catalog" className="py-14 px-6 max-w-7xl mx-auto border-t border-white/[0.08]">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">Directory Matrix</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              All Audited Platforms
            </h2>
          </div>
          <span className="text-xs text-slate-400 font-mono">Showing {filteredTools.length} verified listings</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              className={`rounded-2xl bg-[#0a0f16] border ${tool.accentColor} p-6 flex flex-col justify-between transition-all hover:shadow-xl group`}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center font-black text-sm text-white">
                      {tool.logoChar}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                        {tool.name}
                      </h3>
                      <div className="text-[11px] text-slate-400 font-mono">
                        {tool.category}
                      </div>
                    </div>
                  </div>

                  <span className="px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono font-bold text-amber-400">
                    ★ {tool.rating}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {tool.tagline}
                </p>

                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-[11px] text-slate-400 font-mono mb-4">
                  ✦ {tool.highlightText}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Offer:</span>
                  <span className="font-bold text-emerald-400">{tool.offer}</span>
                </div>

                <Link
                  href={tool.internalPath}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/[0.06] hover:bg-amber-400 hover:text-slate-950 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                >
                  <span>Claim Platform Access</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. AUDIT STANDARDS */}
      {/* ======================================================== */}
      <section id="standards" className="py-16 px-6 max-w-5xl mx-auto border-t border-white/[0.08] text-center space-y-10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400">Our Commitment</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
            Built on Rigorous Editorial Verification
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left text-xs">
          <div className="p-6 rounded-2xl bg-[#0a0f16] border border-white/[0.06] space-y-2">
            <div className="text-amber-400 font-bold text-sm">01. Direct Voucher Integrity</div>
            <p className="text-slate-400 leading-relaxed">Every trial code and discount coupon featured on Futures Tools is verified directly with our affiliate partnerships.</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#0a0f16] border border-white/[0.06] space-y-2">
            <div className="text-emerald-400 font-bold text-sm">02. Hands-on Lab Testing</div>
            <p className="text-slate-400 leading-relaxed">From deploying Docker containers on Railway to testing the Superpower phlebotomy network, we test before we recommend.</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#0a0f16] border border-white/[0.06] space-y-2">
            <div className="text-teal-400 font-bold text-sm">03. Zero Phishing or Cloaking</div>
            <p className="text-slate-400 leading-relaxed">All bridge destinations link directly to authentic, SSL-encrypted merchant platforms with zero intermediary data capture.</p>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. FOOTER */}
      {/* ======================================================== */}
      <footer className="border-t border-white/[0.08] bg-[#04060a] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <div className="font-extrabold text-white tracking-tight">FUTURES TOOLS</div>
            <span>&bull;</span>
            <span>Independent Directory &bull; futurestools.site</span>
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <Link href="/go/railway" className="hover:text-amber-400">Railway</Link>
            <Link href="/go/superpower" className="hover:text-amber-400">Superpower</Link>
            <Link href="/go/ocura" className="hover:text-amber-400">Ocura Life</Link>
            <Link href="/go/scentbird" className="hover:text-amber-400">Scentbird</Link>
            <Link href="/go/lovable" className="hover:text-amber-400">Lovable</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}