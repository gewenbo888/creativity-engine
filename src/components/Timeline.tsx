"use client";

import { TIMELINE } from "./content";
import { useLang } from "./lang";

/** The long arc of human creative leaps, from first tools to generative AI. */
export default function Timeline() {
  const { lang } = useLang();
  return (
    <div className="relative">
      <div className="absolute left-[104px] top-1 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-iris-500 via-cyan-500 to-rose-500 opacity-60 md:left-[132px]" />
      <div className="space-y-7">
        {TIMELINE.map((e, i) => (
          <div key={i} className="grid grid-cols-[96px_24px_1fr] items-start gap-3 md:grid-cols-[124px_24px_1fr] md:gap-4">
            <div className="text-right font-mono text-xs text-cyan-400">
              <span key={lang} className={`lang-fade ${lang === "zh" ? "zh" : ""}`}>{e.year[lang]}</span>
            </div>
            <div className="relative mt-1.5 h-3 w-3">
              <div className="absolute inset-0 rounded-full bg-iris-500 pulse" />
              <div className="absolute inset-[3px] rounded-full bg-ink-50" />
            </div>
            <div key={lang} className="lang-fade">
              <div className={`display text-lg text-ink-50 ${lang === "zh" ? "zh" : ""}`}>{e.title[lang]}</div>
              <div className={`mt-0.5 text-sm leading-relaxed text-ink-300 ${lang === "zh" ? "zh" : ""}`}>{e.note[lang]}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
