"use client";

import { useState } from "react";
import { CREATIONS } from "./content";
import { useLang } from "./lang";

/** Idea fusion network: a creation's source patterns flow and merge into the new whole. */
export default function RecombinationGraph() {
  const { lang } = useLang();
  const [sel, setSel] = useState(CREATIONS[0].key);
  const c = CREATIONS.find((x) => x.key === sel)!;
  const srcN = c.sources.length;
  const rx = 640, ry = 175; // result node
  const sx = 320;

  const arc = (ax: number, ay: number, bx: number, by: number) => {
    const mx = (ax + bx) / 2 + 30;
    return `M ${ax} ${ay} Q ${mx} ${(ay + by) / 2} ${bx} ${by}`;
  };

  return (
    <div className="rounded-xl border border-ink-100/10 bg-void-900 p-5 md:p-7">
      <div className="mb-6 flex flex-wrap gap-2">
        {CREATIONS.map((cr) => (
          <button
            key={cr.key}
            onClick={() => setSel(cr.key)}
            className={`rounded-full border px-3 py-1 font-mono text-[0.7rem] transition ${
              sel === cr.key ? "border-transparent text-void-950" : "border-ink-100/20 text-ink-300 hover:text-ink-50"
            }`}
            style={sel === cr.key ? { background: cr.accent } : undefined}
          >
            <span className={lang === "zh" ? "zh" : ""}>{cr.name[lang]}</span>
          </button>
        ))}
      </div>

      <svg viewBox="0 0 760 350" className="block w-full">
        <defs>
          <filter id="rg-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* arcs from each source to the result */}
        {c.sources.map((_, i) => {
          const ay = 60 + (i * 230) / Math.max(1, srcN - 1);
          return (
            <path key={`a-${sel}-${i}`} d={arc(sx + 4, ay, rx - 36, ry)} fill="none" stroke={c.accent} strokeWidth="1.6" opacity="0.5" className="flow" />
          );
        })}

        {/* source nodes */}
        {c.sources.map((s, i) => {
          const ay = 60 + (i * 230) / Math.max(1, srcN - 1);
          return (
            <g key={`s-${sel}-${i}`}>
              <circle cx={sx} cy={ay} r="7" fill={c.accent} opacity="0.85" />
              <circle cx={sx} cy={ay} r="14" fill={c.accent} opacity="0.14" />
              <text x={sx - 22} y={ay + 4} textAnchor="end" fontFamily="JetBrains Mono" fontSize="11" fill="#c6bff0">
                {s[lang]}
              </text>
            </g>
          );
        })}

        {/* merge caption */}
        <text x="480" y="28" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="11" fill="#8e86bd">
          {lang === "zh" ? "已有的部件，融合为新的整体 →" : "existing parts, fused into a new whole →"}
        </text>

        {/* result node */}
        <circle cx={rx} cy={ry} r="34" fill={c.accent} opacity="0.16" filter="url(#rg-glow)" />
        <circle cx={rx} cy={ry} r="20" fill={c.accent} filter="url(#rg-glow)">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <circle cx={rx} cy={ry} r="20" fill="none" stroke="#f4f1ff" strokeWidth="1" />
        <text x={rx} y={ry - 46} textAnchor="middle" fontFamily="Syne" fontWeight="700" fontSize="16" fill="#f4f1ff">
          <tspan className={lang === "zh" ? "zh" : ""}>{c.name[lang]}</tspan>
        </text>
        <text x={rx} y={ry + 52} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill={c.accent}>
          {lang === "zh" ? "= 新的关系" : "= a new relationship"}
        </text>
      </svg>

      <div key={`leap-${lang}`} className="lang-fade mt-3 rounded-lg border-l-2 px-4 py-3" style={{ borderColor: c.accent, background: "rgba(29,23,64,0.4)" }}>
        <span className="label-mono" style={{ color: c.accent }}>{lang === "zh" ? "飞跃" : "The leap"}</span>
        <p className={`mt-1 text-sm leading-relaxed text-ink-200 ${lang === "zh" ? "zh" : ""}`}>{c.leap[lang]}</p>
      </div>
    </div>
  );
}
