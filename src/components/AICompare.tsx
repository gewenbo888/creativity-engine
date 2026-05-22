"use client";

import { AI_COMPARE } from "./content";
import { useLang } from "./lang";

/** Human vs generative AI across the dimensions of creative work. */
export default function AICompare() {
  const { lang } = useLang();
  const Bar = ({ v, color }: { v: number; color: string }) => (
    <div className="flex gap-1">
      {[0, 1, 2].map((i) => (
        <span key={i} className="h-2.5 w-6 rounded-sm" style={{ background: i < v ? color : "rgba(142,134,189,0.18)" }} />
      ))}
    </div>
  );

  return (
    <div className="rounded-xl border border-ink-100/10 bg-void-900 p-5 md:p-7">
      <div className="mb-5 grid grid-cols-[1fr_auto_auto] items-end gap-4 border-b border-ink-100/10 pb-3">
        <span className="label-mono">{lang === "zh" ? "维度" : "Dimension"}</span>
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-cyan-400">{lang === "zh" ? "人类" : "Human"}</span>
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-iris-400">{lang === "zh" ? "生成式 AI" : "Gen AI"}</span>
      </div>

      <div className="space-y-4">
        {AI_COMPARE.map((r, i) => (
          <div key={i} className="grid grid-cols-[1fr_auto_auto] items-center gap-4">
            <div className="min-w-0">
              <div key={`d-${lang}`} className={`font-serif text-base text-ink-50 ${lang === "zh" ? "zh" : ""}`}>{r.dim[lang]}</div>
              <div key={`n-${lang}`} className={`mt-0.5 text-xs leading-snug text-ink-500 ${lang === "zh" ? "zh" : ""}`}>{r.note[lang]}</div>
            </div>
            <Bar v={r.human} color="#33d6e8" />
            <Bar v={r.ai} color="#9b7cff" />
          </div>
        ))}
      </div>

      <div key={`v-${lang}`} className="lang-fade mt-6 rounded-lg border-l-2 border-spark-500 bg-void-800 px-4 py-3">
        <span className="label-mono" style={{ color: "#ffc94d" }}>{lang === "zh" ? "结论" : "The verdict"}</span>
        <p className={`mt-1 text-sm leading-relaxed text-ink-200 ${lang === "zh" ? "zh" : ""}`}>
          {lang === "zh"
            ? "AI 已在「组合广度」与「速度规模」上压倒人类——它就是一台重组机器。它欠缺的是意图、利害与具身经验：那个「在乎结果」的自我。若创造力 = 重组，机器已会创造；若创造力还需要「有所担当地去意指」，那它仍缺一块。"
            : "AI already overwhelms humans on combinatorial breadth and on speed — it is, literally, a recombination machine. What it lacks is intention, stakes and embodiment: a self that cares how it turns out. If creativity equals recombination, the machine already creates; if creativity also requires meaning something at one's own risk, a piece is still missing."}
        </p>
      </div>
    </div>
  );
}
