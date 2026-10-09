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
  targetUrl: string;
  internalPath: string;
  color: string;
  iconBg: string;
}

const TOOLS_DATA: ToolItem[] = [
  {
    id: "railway",
    name: "Railway Cloud",
    category: "Cloud Infrastructure",
    tagline: "Deploy web applications, databases, and Docker services with zero DevOps friction.",
    badge: "Staff Pick • Top Cloud 2026",
    rating: "9.9 / 10",
    offer: "Get $20 Free Trial Credits",
    bestFor: "Full-Stack Devs & Startups",
    targetUrl: "https://railway.app",
    internalPath: "/go/railway",
    color: "from-indigo-500 to-purple-600",
    iconBg: "bg-indigo-500/10 border-indigo-500/30 text-indigo-400",
  },
  {
    id: "arcads",
    name: "Arcads AI",
    category: "AI Video & Ads",
    tagline: "Transform text scripts into studio-grade UGC video ads with hyper-realistic AI actors.",
    badge: "Best Ecom Creative",
    rating: "9.8 / 10",
    offer: "Instant Studio Demo Access",
    bestFor: "TikTok & Meta Media Buyers",
    targetUrl: "https://arcads.ai",
    internalPath: "/go/arcads",
    color: "from-cyan-500 to-blue-600",
    iconBg: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
  },
  {
    id: "lovable",
    name: "Lovable 2.0",
    category: "Vibe-Coding",
    tagline: "The #1 prompt-to-production app synthesizer with Supabase and two-way GitHub sync.",
    badge: "Editor's Choice Gold",
    rating: "9.8 / 10",
    offer: "Free Developer Sandbox",
    bestFor: "Rapid SaaS Prototyping",
    targetUrl: "https://lovable.dev",
    internalPath: "/go/lovable",
    color: "from-rose-500 to-pink-600",
    iconBg: "bg-rose-500/10 border-rose-500/30 text-rose-400",
  },
  {
    id: "firecrawl",
    name: "Firecrawl",
    category: "Developer APIs",
    tagline: "Turn entire websites into clean, LLM-ready markdown or structured data with 1 API call.",
    badge: "Top Scraper Engine",
    rating: "9.7 / 10",
    offer: "500 Free Scrapes Trial",
    bestFor: "AI Agents & RAG Pipelines",
    targetUrl: "https://firecrawl.dev",
    internalPath: "/go/firecrawl",
    color: "from-amber-500 to-orange-600",
    iconBg: "bg-amber-500/10 border-amber-500/30 text-amber-400",
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    category: "AI Voice & Audio",
    tagline: "Frontier voice synthesis, emotional voice cloning, and autonomous interactive voice agents.",
    badge: "Industry Audio Standard",
    rating: "9.9 / 10",
    offer: "Free Tier Included",
    bestFor: "Dubbing, Podcasts & Agents",
    targetUrl: "https://elevenlabs.io",
    internalPath: "/go/elevenlabs",
    color: "from-blue-400 to-indigo-600",
    iconBg: "bg-blue-500/10 border-blue-500/30 text-blue-400",
  },
  {
    id: "cursor",
    name: "Cursor AI",
    category: "Vibe-Coding",
    tagline: "The premier AI-native code editor built on VS Code for deep multi-file refactoring.",
    badge: "Developer Favorite",
    rating: "9.6 / 10",
    offer: "Free Tier Available",
    bestFor: "Professional Software Engineers",
    targetUrl: "https://cursor.com",
    internalPath: "https://cursor.com",
    color: "from-emerald-400 to-teal-600",
    iconBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
  },
];

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Cloud Infrastructure", "Vibe-Coding", "AI Video & Ads", "Developer APIs", "AI Voice & Audio"];

  const filteredTools = TOOLS_DATA.filter((tool) => {
    const matchesCategory = activeCategory === "All" || tool.category === activeCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.bestFor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* ======================================================== */}
      {/* 1. HEADER / NAVIGATION */}
      {/* ======================================================== */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#080a11]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <div className="font-extrabold text-lg tracking-tight text-white flex items-center gap-1.5">
                <span>FUTURES</span>
                <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent font-black">
                  TOOLS
                </span>
              </div>
              <div className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">
                Next-Gen Software Directory 2026
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-300">
            <a href="#featured" className="hover:text-indigo-400 transition-colors">Featured Platforms</a>
            <a href="#directory" className="hover:text-indigo-400 transition-colors">Directory Matrix</a>
            <a href="#benefits" className="hover:text-indigo-400 transition-colors">Why Futures Tools</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/go/railway"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-xs font-bold text-white shadow-md shadow-indigo-600/25 transition-all transform hover:scale-[1.02]"
            >
              Claim $20 Cloud Credit &rarr;
            </Link>
          </div>
        </div>
      </header>

      {/* ======================================================== */}
      {/* 2. HERO SECTION */}
      {/* ======================================================== */}
      <section className="relative pt-16 pb-20 px-6 border-b border-slate-800/60 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/25 via-[#080a11] to-[#080a11] pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>CURATED 2026 FRONTIER AI &amp; CLOUD ECOSYSTEM</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6">
            The Launchpad for{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              Next-Gen Software &amp; Cloud Tools
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Discover audited developer platforms, autonomous vibe-coding engines, and high-velocity cloud infrastructure with verified free trial credits.
          </p>

          {/* Search bar */}
          <div className="max-w-xl mx-auto relative mb-8">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tools by name, category, or use-case (e.g. Railway, video, scraper)..."
              className="w-full py-4 pl-12 pr-4 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 shadow-2xl transition-all"
            />
            <svg className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                    : "bg-slate-900/80 hover:bg-slate-800 text-slate-400 border border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. HERO SPOTLIGHT: RAILWAY CLOUD */}
      {/* ======================================================== */}
      <section id="featured" className="py-16 px-6 max-w-7xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950 border-2 border-indigo-500/30 p-8 sm:p-12 shadow-[0_20px_60px_-15px_rgba(99,102,241,0.25)] overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 text-xs font-bold uppercase tracking-wider">
                ⭐ Featured Infrastructure Spotlight • 2026 Pick
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-indigo-600/30">
                  R
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    Railway Official Cloud
                  </h2>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">
                    Zero-DevOps Cloud Platform &bull; Rated 9.9 / 10
                  </div>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Deploy web apps, Docker containers, and managed PostgreSQL/Redis databases in seconds. Connect your GitHub repository and let Railway automate builds, staging environments, and global domain routing without server babysitting.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="text-xs font-bold text-indigo-400 mb-1">✓ Instant $20 Credits</div>
                  <div className="text-[11px] text-slate-400">Claim free developer trial allowance with zero lock-in.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="text-xs font-bold text-purple-400 mb-1">✓ Git Push to Live URL</div>
                  <div className="text-[11px] text-slate-400">Automated rollbacks, health checks &amp; CI/CD pipelines.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="text-xs font-bold text-emerald-400 mb-1">✓ Managed Databases</div>
                  <div className="text-[11px] text-slate-400">1-click provisioning for Postgres, MySQL, and Redis.</div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/go/railway"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:opacity-95 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Deploy with $20 Free Credits &rarr;
                </Link>
                <div className="text-xs text-slate-400 font-mono">
                  Official Partner Gateway &bull; Verified 2026
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-950/90 border border-slate-800 rounded-2xl p-6 shadow-2xl text-left space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="font-mono text-xs uppercase tracking-wider text-slate-400">Platform Benchmark</div>
                <div className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono font-bold text-xs">
                  GRADE: A+
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>Deploy Velocity</span>
                    <span className="font-bold text-indigo-400">&lt; 15 seconds</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5">
                    <div className="bg-indigo-500 h-1.5 rounded-full w-[99%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>DevOps Friction</span>
                    <span className="font-bold text-emerald-400">Zero Configuration</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5">
                    <div className="bg-emerald-500 h-1.5 rounded-full w-[98%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>Database Reliability</span>
                    <span className="font-bold text-cyan-400">99.99% Uptime</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5">
                    <div className="bg-cyan-500 h-1.5 rounded-full w-[100%]" />
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
                Recommended alternative to Heroku &amp; AWS ECS for fast-moving engineering teams.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. DIRECTORY MATRIX GRID */}
      {/* ======================================================== */}
      <section id="directory" className="py-12 px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Frontier Software Directory
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Showing {filteredTools.length} audited platforms in category: <span className="text-indigo-400 font-semibold">{activeCategory}</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              className="rounded-2xl bg-slate-900/70 border border-slate-800/80 p-6 flex flex-col justify-between hover:border-slate-700 transition-all hover:shadow-xl group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-black text-sm border ${tool.iconBg}`}>
                      {tool.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                        {tool.name}
                      </h3>
                      <div className="text-[11px] text-slate-400 font-mono">
                        {tool.category}
                      </div>
                    </div>
                  </div>

                  <span className="px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-[10px] font-mono font-bold text-slate-300">
                    {tool.rating}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {tool.tagline}
                </p>

                {tool.badge && (
                  <div className="inline-block px-2.5 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold mb-4">
                    {tool.badge}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Offer:</span>
                  <span className="font-bold text-emerald-400 font-mono">{tool.offer}</span>
                </div>

                <Link
                  href={tool.internalPath}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-indigo-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                >
                  <span>Explore Platform Access</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. EDITORIAL TRUST & BENEFITS */}
      {/* ======================================================== */}
      <section id="benefits" className="py-16 px-6 border-t border-slate-800/60 bg-[#080a11]">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Why Builders Rely on Futures Tools
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mt-2">
              We eliminate marketing fluff with hands-on production tests and direct access to official trial vouchers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 font-bold mb-3">
                01
              </div>
              <h3 className="text-base font-bold text-white">Hands-On Code Benchmarks</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We stress-test every software on real production workloads before featuring it in our directory.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-400 font-bold mb-3">
                02
              </div>
              <h3 className="text-base font-bold text-white">Verified Partner Vouchers</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct connections to official developer trial credits and onboarding incentives for fast launch.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 font-bold mb-3">
                03
              </div>
              <h3 className="text-base font-bold text-white">Zero Vendor Bias</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Clear comparisons outlining strengths and trade-offs so you pick the right stack the first time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. FOOTER */}
      {/* ======================================================== */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <div className="font-extrabold text-white tracking-tight">FUTURES TOOLS</div>
            <span>&bull;</span>
            <span>Independent Software &amp; Cloud Directory &bull; futurestools.site</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/go/railway" className="hover:text-indigo-400">Railway Gateway</Link>
            <Link href="/go/lovable" className="hover:text-indigo-400">Lovable Gateway</Link>
            <a href="mailto:contact@futurestools.site" className="hover:text-indigo-400">Contact Team</a>
          </div>
        </div>
      </footer>
    </>
  );
}