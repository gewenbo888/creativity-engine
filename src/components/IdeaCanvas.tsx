"use client";

import { useEffect, useRef } from "react";

/**
 * Hero field: drifting idea-particles in the idea spectrum. Nearby particles
 * link with faint lines (a recombination network); when two cross closely a
 * brief bright "fusion" flash fires — novelty generated from collision.
 */
const HUES = ["124,92,255", "51,214,232", "255,201,77", "63,227,168", "255,95,162", "183,155,255"];

export default function IdeaCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    let w = (canvas.width = canvas.clientWidth * dpr);
    let h = (canvas.height = canvas.clientHeight * dpr);

    type P = { x: number; y: number; vx: number; vy: number; r: number; hue: string };
    type F = { x: number; y: number; life: number; hue: string };
    const COUNT = Math.min(70, Math.floor((w * h) / (26000 * dpr)));
    const LINK = 130 * dpr;
    const mk = (): P => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.45 * dpr,
      vy: (Math.random() - 0.5) * 0.45 * dpr,
      r: (1 + Math.random() * 2.4) * dpr,
      hue: HUES[(Math.random() * HUES.length) | 0],
    });
    const ps: P[] = Array.from({ length: COUNT }, mk);
    const flashes: F[] = [];

    const onResize = () => {
      w = canvas.width = canvas.clientWidth * dpr;
      h = canvas.height = canvas.clientHeight * dpr;
    };
    window.addEventListener("resize", onResize);

    const tick = () => {
      ctx.clearRect(0, 0, w, h);

      // links + collision flashes
      for (let i = 0; i < ps.length; i++) {
        const a = ps[i];
        for (let j = i + 1; j < ps.length; j++) {
          const b = ps[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < LINK) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${a.hue},${(1 - d / LINK) * 0.32})`;
            ctx.lineWidth = 0.8 * dpr;
            ctx.stroke();
            if (d < 16 * dpr && Math.random() < 0.04) {
              flashes.push({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2, life: 1, hue: a.hue });
            }
          }
        }
      }

      for (const p of ps) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.hue},0.85)`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.hue},0.07)`;
        ctx.fill();
      }

      for (let i = flashes.length - 1; i >= 0; i--) {
        const f = flashes[i];
        f.life -= 0.02;
        if (f.life <= 0) { flashes.splice(i, 1); continue; }
        const r = (1 - f.life) * 30 * dpr;
        ctx.beginPath();
        ctx.arc(f.x, f.y, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${f.hue},${f.life * 0.8})`;
        ctx.lineWidth = 1.4 * dpr;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(f.x, f.y, 2.4 * dpr, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${f.life})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full" />;
}
