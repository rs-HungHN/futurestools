import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://futurestools.site"),
  title: "Futures Tools | Next-Gen AI & Modern Lifestyle Directory",
  description: "Curated software benchmarks, developer cloud infrastructure, and premium lifestyle subscriptions published by Futurestools86 LLC (Managing Director: HOANG NGOC ANH).",
  keywords: ["Futurestools86 LLC", "HOANG NGOC ANH", "Railway cloud", "Superpower health", "Ocura Life", "Scentbird", "Lovable 2.0", "AI directory 2026"],
  authors: [{ name: "HOANG NGOC ANH" }],
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Futures Tools | Futurestools86 LLC",
    description: "Discover verified software, cloud infrastructure, and premium subscriptions.",
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
      <body className="min-h-screen flex flex-col bg-[#06090e] text-slate-100 antialiased selection:bg-amber-400 selection:text-black">
        {children}
      </body>
    </html>
  );
}