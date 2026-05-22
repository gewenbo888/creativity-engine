"use client";

import { useState } from "react";
import { MATH_OBJECTS } from "./content";
import { useLang } from "./lang";

/** Discovered or invented? The same mathematical object, reframed under two philosophies. */
export default function MathToggle() {
  const { lang } = useLang();
  const [mode, setMode] = useState<"discovered" | "invented">("discovered");

  return (
    <div className="rounded-xl border border-ink-100/10 bg-void-900 p-5 md:p-7">
      <div className="mb-6 inline-flex overflow-hidden rounded-full border border-ink-100/20 font-mono text-xs">
        <button
          onClick={() => setMode("discovered")}
          className={`px-5 py-2 transition ${mode === "discovered" ? "bg-cyan-500/20 text-cyan-400" : "text-ink-500 hover:text-ink-200"}`}
        >
          {lang === "zh" ? "被发现的" : "Discovered"}
        </button>
        <button
          onClick={() => setMode("invented")}
          className={`px-5 py-2 transition ${mode === "invented" ? "bg-rose-500/20 text-rose-400" : "text-ink-500 hover:text-ink-200"}`}
        >
          {lang === "zh" ? "被发明的" : "Invented"}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {MATH_OBJECTS.map((m) => {
          const tint = mode === "discovered" ? "#33d6e8" : "#ff5fa2";
          return (
            <div key={m.name.en} className="rounded-lg border border-ink-100/10 bg-void-800 p-4" style={{ borderColor: `${m.accent}33` }}>
              <div className="display text-lg" style={{ color: m.accent }}>
                <span key={lang} className={lang === "zh" ? "zh" : ""}>{m.name[lang]}</span>
              </div>
              <p key={`${mode}-${lang}`} className={`lang-fade mt-2 text-sm leading-relaxed text-ink-200 ${lang === "zh" ? "zh" : ""}`}>
                {m[mode][lang]}
              </p>
              <div className="mt-3 font-mono text-[0.6rem] uppercase tracking-[0.14em]" style={{ color: tint }}>
                {mode === "discovered" ? (lang === "zh" ? "→ 本就为真" : "→ always true") : (lang === "zh" ? "→ 人类构造" : "→ a human construct")}
              </div>
            </div>
          );
        })}
      </div>

      <p key={`note-${lang}`} className={`lang-fade mt-5 max-w-3xl text-sm leading-relaxed text-ink-300 ${lang === "zh" ? "zh" : ""}`}>
        {lang === "zh"
          ? "数学是创造力最纯粹的试验场：若它是被发明的，那是人类心智所能产出的最不可思议的虚构；若它是被发现的，那么宇宙中存在着一片我们只能游历、无法编造的真理之境。两种答案都令人敬畏。"
          : "Mathematics is creativity's purest test case: if it is invented, it is the most uncanny fiction the human mind has ever produced; if it is discovered, there is a realm of truth we can only travel, never author. Either answer is humbling."}
      </p>
    </div>
  );
}
