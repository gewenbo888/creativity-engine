import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

const TITLE_EN = "Creativity Engine · The Nature of Creativity, Novelty, Symbolic Recombination & Human Creation Systems";
const TITLE_ZH = "创造力引擎 · 创造力、新颖性、符号重组与人类创造系统的本质";
const DESC =
  "A civilisation-scale, bilingual exploration of creativity as recombination — how invention, art, mathematics, science, memes, play, collective intelligence and AI all generate novelty by rearranging existing patterns into structures that did not exist before. Creativity may be the process by which intelligence generates new realities from old elements.";

export const metadata: Metadata = {
  metadataBase: new URL("https://creativity-engine.psyverse.fun"),
  title: `${TITLE_EN} | ${TITLE_ZH}`,
  description: DESC,
  keywords: [
    "creativity", "innovation", "novelty", "invention", "recombination", "symbolic combination",
    "imagination", "cross-domain synthesis", "creative cognition", "analogical thinking",
    "scientific discovery", "mathematical creativity", "artistic creation", "memes", "remix culture",
    "play and creativity", "collective intelligence", "generative AI", "synthetic creativity",
    "combinatorial creativity", "creative process", "ideas",
    "创造力", "创新", "新颖性", "发明", "重组", "符号组合", "想象力", "跨领域综合",
    "创造性认知", "类比思维", "科学发现", "数学创造", "艺术创作", "模因", "集体智能", "生成式AI",
  ],
  authors: [{ name: "Gewenbo", url: "https://psyverse.fun" }],
  alternates: { canonical: "/", languages: { en: "/", "zh-CN": "/", "x-default": "/" } },
  openGraph: {
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Creativity Engine · 创造力引擎 — Creativity as Recombination, Novelty & Human Creation Systems" }],
    title: TITLE_EN,
    description:
      "Creativity is not magic — it is recombination, abstraction and novelty generation. A bilingual atlas of how intelligence builds new realities from old elements.",
    url: "https://creativity-engine.psyverse.fun/",
    siteName: "Psyverse",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    images: ["/twitter-image.png"],
    card: "summary_large_image",
    title: TITLE_EN,
    description: "Invention, art, mathematics, memes, AI — every creation began as old patterns recombined into something radically new.",
  },
  robots: { index: true, follow: true },
  other: { "theme-color": "#05040a" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=Spectral:ital,wght@0,300;0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@300;400;500&family=Noto+Serif+SC:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: TITLE_EN,
              alternateName: TITLE_ZH,
              description: DESC,
              url: "https://creativity-engine.psyverse.fun/",
              inLanguage: ["en", "zh-CN"],
              author: { "@type": "Person", name: "Gewenbo", url: "https://psyverse.fun/" },
              publisher: { "@type": "Organization", name: "Psyverse", url: "https://psyverse.fun/" },
            }),
          }}
        />
      </head>
      <body className="bg-void-950 text-ink-100 antialiased">
        {children}
        <Script src="https://analytics-dashboard-two-blue.vercel.app/tracker.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
