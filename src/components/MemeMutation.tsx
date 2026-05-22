"use client";

import { MEME_TREE } from "./content";
import { useLang } from "./lang";

/** Memetic mutation tree: a template variant-and-selects; fitness drives survival. */
export default function MemeMutation() {
  const { lang } = useLang();
  const X = (pos: number) => 30 + pos * 700;
  const Y = (depth: number) => 46 + depth * 96;
  const byId = Object.fromEntries(MEME_TREE.map((n) => [n.id, n]));
  const col = (fit: number) => (fit > 0.85 ? "#3fe3a8" : fit > 0.55 ? "#ffc94d" : fit > 0.3 ? "#9b7cff" : "#5a5280");

  return (
    <div className="overflow-x-auto rounded-xl border border-ink-100/10 bg-void-900 p-4 md:p-6">
      <svg viewBox="0 0 760 360" className="block w-full min-w-[560px]">
        {MEME_TREE.map((n) => {
          if (!n.parent) return null;
          const p = byId[n.parent];
          const dead = n.fit < 0.3;
          return (
            <line key={`e-${n.id}`} x1={X(p.pos)} y1={Y(p.depth)} x2={X(n.pos)} y2={Y(n.depth)}
              stroke={col(n.fit)} strokeWidth={dead ? 1 : 1.6} opacity={dead ? 0.3 : 0.6} strokeDasharray={dead ? "3 4" : undefined} />
          );
        })}
        {MEME_TREE.map((n, i) => {
          const c = col(n.fit);
          const r = 7 + n.fit * 9;
          const dead = n.fit < 0.3;
          return (
            <g key={n.id} className="rise-in" style={{ animationDelay: `${i * 0.12}s` }}>
              <circle cx={X(n.pos)} cy={Y(n.depth)} r={r + 6} fill={c} opacity={dead ? 0.05 : 0.14} />
              <circle cx={X(n.pos)} cy={Y(n.depth)} r={r} fill={c} opacity={dead ? 0.4 : 0.9} className={n.fit >= 0.95 ? "pulse" : ""} />
              {n.fit >= 0.95 && <circle cx={X(n.pos)} cy={Y(n.depth)} r={r} fill="none" stroke="#f4f1ff" strokeWidth="1" />}
              <text x={X(n.pos)} y={Y(n.depth) - r - 7} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill={dead ? "#5a5280" : "#f4f1ff"}>
                <tspan className={lang === "zh" ? "zh" : ""}>{n.label[lang]}</tspan>
              </text>
            </g>
          );
        })}
      </svg>
      <div key={lang} className="lang-fade mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 px-1 font-mono text-[0.62rem] text-ink-500">
        <span className="inline-flex items-center gap-1.5"><span className="inline-block h-2.5 w-2.5 rounded-full bg-mint-500" />{lang === "zh" ? "高适应度 · 病毒式扩散" : "high fitness · goes viral"}</span>
        <span className="inline-flex items-center gap-1.5"><span className="inline-block h-2.5 w-2.5 rounded-full bg-spark-500" />{lang === "zh" ? "中等 · 局部流行" : "medium · local spread"}</span>
        <span className="inline-flex items-center gap-1.5"><span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: "#5a5280" }} />{lang === "zh" ? "低 · 灭绝变体" : "low · dead variant"}</span>
      </div>
      <p key={`c-${lang}`} className={`lang-fade mt-2 px-1 text-xs leading-relaxed text-ink-500 ${lang === "zh" ? "zh" : ""}`}>
        {lang === "zh" ? "一个模板被复制、变异、筛选——和生物进化同构，只是世代以小时计。" : "A template is copied, mutated, selected — isomorphic to biological evolution, but with generations measured in hours."}
      </p>
    </div>
  );
}
