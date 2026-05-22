"use client";

import { useState } from "react";
import { CREATIONS, CREATIVITY_DIMS } from "./content";
import { useLang } from "./lang";

/** Creativity-Capacity meta-model — a 7-axis radar across the seven dimensions. */
export default function CreativityModel() {
  const { lang } = useLang();
  const [sel, setSel] = useState(CREATIONS[0].key);
  const c = CREATIONS.find((x) => x.key === sel)!;
  const dims = CREATIVITY_DIMS;
  const n = dims.length;
  const cx = 200, cy = 200, R = 150;

  const pt = (i: number, val: number) => {
    const ang = (i / n) * Math.PI * 2 - Math.PI / 2;
    const r = (val / 100) * R;
    return [cx + Math.cos(ang) * r, cy + Math.sin(ang) * r];
  };
  const poly = dims.map((d, i) => pt(i, c[d.key] as number).join(",")).join(" ");
  const score = Math.round(dims.reduce((s, d) => s + (c[d.key] as number), 0) / dims.length);

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

      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[400px_1fr]">
        <svg viewBox="-80 -8 616 416" className="block w-full">
          {[0.25, 0.5, 0.75, 1].map((f, i) => (
            <polygon
              key={i}
              points={dims.map((_, j) => {
                const ang = (j / n) * Math.PI * 2 - Math.PI / 2;
                return [cx + Math.cos(ang) * R * f, cy + Math.sin(ang) * R * f].join(",");
              }).join(" ")}
              fill="none" stroke="#1d1740" strokeWidth="0.8"
            />
          ))}
          {dims.map((d, i) => {
            const ang = (i / n) * Math.PI * 2 - Math.PI / 2;
            const ex = cx + Math.cos(ang) * R, ey = cy + Math.sin(ang) * R;
            const lx = cx + Math.cos(ang) * (R + 26), ly = cy + Math.sin(ang) * (R + 26);
            return (
              <g key={i}>
                <line x1={cx} y1={cy} x2={ex} y2={ey} stroke="#141029" strokeWidth="0.8" />
                <text x={lx} y={ly} textAnchor={Math.abs(Math.cos(ang)) < 0.3 ? "middle" : Math.cos(ang) > 0 ? "start" : "end"} dominantBaseline="middle" fontFamily="JetBrains Mono" fontSize="8.5" fill="#8e86bd">
                  <tspan className={lang === "zh" ? "zh" : ""}>{d.label[lang]}</tspan>
                </text>
              </g>
            );
          })}
          <polygon points={poly} fill={c.accent} fillOpacity="0.2" stroke={c.accent} strokeWidth="2" />
          {dims.map((d, i) => {
            const [px, py] = pt(i, c[d.key] as number);
            return <circle key={i} cx={px} cy={py} r="3.5" fill={c.accent} />;
          })}
        </svg>

        <div>
          <div className="label-mono">{lang === "zh" ? "创造力容量" : "Creativity capacity"}</div>
          <div className="mt-2 flex items-baseline gap-3">
            <span className="display text-6xl" style={{ color: c.accent }}>{score}</span>
            <span className="text-ink-500">/ 100</span>
          </div>
          <p className={`mt-3 max-w-md text-sm leading-relaxed text-ink-300 ${lang === "zh" ? "zh" : ""}`}>
            {lang === "zh"
              ? "创造力容量 = 模式识别 + 符号重组 + 抽象能力 + 模拟深度 + 跨域迁移 + 情感建模 + 新颖生成。每一项创造在七维上的「形状」各不相同——数学高在抽象，爵士高在情感，区块链高在重组。"
              : "Creativity capacity = pattern recognition + symbolic recombination + abstraction + simulation depth + cross-domain transfer + emotional modelling + novelty generation. Each creation has a different shape across the seven — mathematics peaks on abstraction, jazz on emotion, the blockchain on recombination."}
          </p>
          <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-1.5">
            {dims.map((d) => (
              <div key={String(d.key)} className="flex items-center justify-between gap-2 border-b border-ink-100/8 pb-1">
                <span className={`font-mono text-[0.65rem] text-ink-500 ${lang === "zh" ? "zh" : ""}`}>{d.label[lang]}</span>
                <span className="font-mono text-xs" style={{ color: c.accent }}>{c[d.key] as number}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
