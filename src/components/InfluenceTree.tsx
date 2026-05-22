"use client";

import { useState } from "react";
import { ART_TREE } from "./content";
import { useLang } from "./lang";

/** Artistic influence tree: each movement inherits a vocabulary and breaks one rule. */
export default function InfluenceTree() {
  const { lang } = useLang();
  const [hover, setHover] = useState<string | null>(null);
  const X = (col: number) => 70 + col * 122;
  const Y = (row: number) => 70 + row * 100;
  const byId = Object.fromEntries(ART_TREE.map((n) => [n.id, n]));

  const lineageOf = (id: string): Set<string> => {
    const out = new Set<string>([id]);
    let frontier = [id];
    while (frontier.length) {
      const next: string[] = [];
      for (const f of frontier) for (const p of byId[f]?.parents ?? []) { if (!out.has(p)) { out.add(p); next.push(p); } }
      frontier = next;
    }
    return out;
  };
  const lit = hover ? lineageOf(hover) : null;

  return (
    <div className="overflow-x-auto rounded-xl border border-ink-100/10 bg-void-900 p-3 md:p-5">
      <svg viewBox="0 0 920 320" className="block w-full min-w-[680px]">
        {ART_TREE.map((n) =>
          n.parents.map((pid, i) => {
            const p = byId[pid];
            if (!p) return null;
            const on = lit ? lit.has(n.id) && lit.has(pid) : false;
            const x1 = X(p.col) + 16, y1 = Y(p.row), x2 = X(n.col) - 16, y2 = Y(n.row);
            const mx = (x1 + x2) / 2;
            return (
              <path key={`${n.id}-${i}`} d={`M ${x1} ${y1} C ${mx} ${y1} ${mx} ${y2} ${x2} ${y2}`} fill="none"
                stroke={n.accent} strokeWidth={on ? 2.4 : 1.1} opacity={on ? 0.95 : hover ? 0.12 : 0.42} className={on ? "flow" : ""} />
            );
          })
        )}
        {ART_TREE.map((n) => {
          const dim = lit ? !lit.has(n.id) : false;
          const on = hover === n.id;
          return (
            <g key={n.id} onMouseEnter={() => setHover(n.id)} onMouseLeave={() => setHover(null)} style={{ cursor: "pointer", opacity: dim ? 0.28 : 1 }}>
              <circle cx={X(n.col)} cy={Y(n.row)} r={on ? 9 : 6} fill={n.accent}>
                <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
              </circle>
              <text x={X(n.col)} y={Y(n.row) - 16} textAnchor="middle" fontFamily="Syne" fontWeight="600" fontSize="11.5" fill="#f4f1ff">
                <tspan className={lang === "zh" ? "zh" : ""}>{n.label[lang]}</tspan>
              </text>
              <text x={X(n.col)} y={Y(n.row) + 22} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill={n.accent} opacity="0.85">{n.year}</text>
            </g>
          );
        })}
      </svg>
      <p key={lang} className={`lang-fade mt-2 px-1 text-xs leading-relaxed text-ink-500 ${lang === "zh" ? "zh" : ""}`}>
        {lang === "zh" ? "悬停任一运动，点亮它的血脉——每一代都站在上一代的语汇之上，再打破一条规则。" : "Hover a movement to light its lineage — each generation stands on the last one's vocabulary, then breaks one rule."}
      </p>
    </div>
  );
}
