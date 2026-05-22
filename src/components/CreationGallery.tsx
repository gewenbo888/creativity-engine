"use client";

import { useState } from "react";
import { CREATIONS } from "./content";
import { useLang } from "./lang";
import Glyph from "./Glyph";

export default function CreationGallery() {
  const { lang } = useLang();
  const [open, setOpen] = useState<string | null>(CREATIONS[0].key);

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {CREATIONS.map((c) => {
        const isOpen = open === c.key;
        return (
          <article
            key={c.key}
            className="idea overflow-hidden rounded-xl"
            style={{ borderColor: isOpen ? `${c.accent}55` : undefined }}
          >
            <button onClick={() => setOpen(isOpen ? null : c.key)} className="flex w-full items-center gap-4 p-5 text-left">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg" style={{ background: "radial-gradient(circle, rgba(29,23,64,0.9), rgba(8,7,18,1))" }}>
                <Glyph archetype={c.glyph} size={70} accent={c.accent} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="display text-2xl" style={{ color: c.accent }}>
                  <span key={lang} className={lang === "zh" ? "zh" : ""}>{c.name[lang]}</span>
                </h3>
                <div key={`d-${lang}`} className={`mt-0.5 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-ink-500 ${lang === "zh" ? "zh" : ""}`}>{c.domain[lang]}</div>
                <div key={`f-${lang}`} className={`mt-1 text-sm leading-snug text-ink-300 ${lang === "zh" ? "zh" : ""}`}>{c.formula[lang]}</div>
              </div>
              <span className="font-mono text-lg text-ink-500">{isOpen ? "−" : "+"}</span>
            </button>

            {isOpen && (
              <div key={lang} className="lang-fade space-y-4 border-t border-ink-100/8 px-5 pb-6 pt-4">
                <div>
                  <div className="label-mono" style={{ color: c.accent }}>{lang === "zh" ? "重组的源" : "Recombined from"}</div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {c.sources.map((s, i) => (
                      <span key={i} className={`rounded-full border border-ink-100/15 px-2.5 py-0.5 text-[0.72rem] text-ink-300 ${lang === "zh" ? "zh" : ""}`}>
                        {s[lang]}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="label-mono" style={{ color: c.accent }}>{lang === "zh" ? "创造性飞跃" : "The creative leap"}</div>
                  <p className={`mt-1 text-sm leading-relaxed text-ink-100 ${lang === "zh" ? "zh" : ""}`}>{c.leap[lang]}</p>
                </div>
                <div>
                  <div className="label-mono" style={{ color: c.accent }}>{lang === "zh" ? "对文明的影响" : "Civilisation impact"}</div>
                  <p className={`mt-1 text-sm leading-relaxed text-ink-300 ${lang === "zh" ? "zh" : ""}`}>{c.impact[lang]}</p>
                </div>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
