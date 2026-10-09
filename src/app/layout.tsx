import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://futurestools.site"),
  title: "Futures Tools | Frontier AI & Cloud Infrastructure Directory 2026",
  description: "Curated directory and architectural benchmarks of the next-generation AI platforms, autonomous vibe-coding engines, and cloud developer infrastructure.",
  keywords: ["Railway cloud", "Lovable 2.0", "AI developer directory", "Future AI tools", "Arcads AI", "Firecrawl", "vibe coding"],
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Futures Tools | The Next-Gen AI & Cloud Directory",
    description: "Discover, benchmark, and deploy frontier software tools and cloud infrastructure.",
    url: "https://futurestools.site",
    siteName: "Futures Tools",
    images: [{ url: "/logo.jpg", width: 1024, height: 1024, alt: "Futures Tools Emblem" }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#080a11] text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}