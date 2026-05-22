"use client";

import { useState } from "react";
import { Net } from "./content";
import { useLang } from "./lang";

/** Reusable idea-network: nodes are ideas/places, edges are "this enabled that". */
export default function NetworkGraph({ net }: { net: Net }) {
  const { lang } = useLang();
  const [hover, setHover] = useState<string | null>(null);
  const byId = Object.fromEntries(net.nodes.map((n) => [n.id, n]));

  const isLinked = (id: string) =>
    !!hover && (hover === id || net.edges.some((e) => (e.from === hover && e.to === id) || (e.to === hover && e.from === id)));

  return (
    <div className="overflow-hidden rounded-xl border border-ink-100/10 bg-void-900 p-3 md:p-5">
      <svg viewBox="0 0 880 440" className="block w-full">
        <defs>
          <filter id="net-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {net.edges.map((e, i) => {
          const a = byId[e.from], b = byId[e.to];
          if (!a || !b) return null;
          const on = hover === e.from || hover === e.to;
          const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2 - Math.hypot(b.x - a.x, b.y - a.y) * 0.12;
          return (
            <path
              key={i}
              d={`M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`}
              fill="none"
              stroke={a.accent}
              strokeWidth={on ? 2.2 : 1}
              opacity={on ? 0.95 : hover ? 0.16 : 0.4}
              className={on ? "flow" : ""}
            />
          );
        })}

        {net.nodes.map((n) => {
          const on = hover === n.id;
          const dim = hover && !isLinked(n.id);
          return (
            <g key={n.id} onMouseEnter={() => setHover(n.id)} onMouseLeave={() => setHover(null)} style={{ cursor: "pointer", opacity: dim ? 0.3 : 1 }}>
              <circle cx={n.x} cy={n.y} r={on ? 22 : 14} fill={n.accent} opacity="0.16" />
              <circle cx={n.x} cy={n.y} r={on ? 8 : 5.5} fill={n.accent} filter={on ? "url(#net-glow)" : undefined}>
                <animate attributeName="opacity" values="0.55;1;0.55" dur="2.8s" repeatCount="indefinite" />
              </circle>
              <text x={n.x} y={n.y - 20} textAnchor="middle" fontFamily="Syne" fontWeight="600" fontSize="12.5" fill="#f4f1ff" opacity={on ? 1 : 0.82}>
                <tspan className={lang === "zh" ? "zh" : ""}>{n.label[lang]}</tspan>
              </text>
              {on && (
                <text x={n.x} y={n.y + 30} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9.5" fill={n.accent}>
                  <tspan className={lang === "zh" ? "zh" : ""}>{n.tag[lang]}</tspan>
                </text>
              )}
            </g>
          );
        })}
      </svg>
      <p key={lang} className={`lang-fade mt-2 px-1 text-xs leading-relaxed text-ink-500 ${lang === "zh" ? "zh" : ""}`}>{net.caption[lang]}</p>
    </div>
  );
}
