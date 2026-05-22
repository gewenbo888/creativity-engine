"use client";

/**
 * Procedural symbolic glyphs — the visual signature of each creation.
 * Each archetype is a small generative diagram (fusion, branch, spiral,
 * lattice, wave, orbit, fold, burst, mirror, flow) drawn as glowing strokes
 * in the creation's accent colour. Abstract on purpose: a creation is a shape
 * of thought, not a picture of a thing.
 */

type GlyphProps = { archetype: string; size?: number; accent?: string };

function paths(archetype: string, a: string): React.ReactNode {
  switch (archetype) {
    case "fusion": {
      return (
        <>
          <circle cx="32" cy="50" r="18" fill="none" stroke={a} strokeWidth="2" opacity="0.7" />
          <circle cx="68" cy="50" r="18" fill="none" stroke={a} strokeWidth="2" opacity="0.7" />
          <circle cx="50" cy="50" r="9" fill={a} opacity="0.85" />
          <circle cx="50" cy="50" r="9" fill="none" stroke="#f4f1ff" strokeWidth="1" />
        </>
      );
    }
    case "branch": {
      const segs: React.ReactNode[] = [];
      const grow = (x: number, y: number, ang: number, len: number, d: number, k: string) => {
        if (d === 0) return;
        const x2 = x + Math.cos(ang) * len, y2 = y - Math.sin(ang) * len;
        segs.push(<line key={k} x1={x} y1={y} x2={x2} y2={y2} stroke={a} strokeWidth={d * 0.7} strokeLinecap="round" opacity={0.5 + d * 0.12} />);
        segs.push(<circle key={k + "n"} cx={x2} cy={y2} r={d * 0.9} fill={a} opacity="0.7" />);
        grow(x2, y2, ang + 0.5, len * 0.72, d - 1, k + "L");
        grow(x2, y2, ang - 0.5, len * 0.72, d - 1, k + "R");
      };
      grow(50, 92, Math.PI / 2, 26, 3, "b");
      return <>{segs}</>;
    }
    case "spiral": {
      let d = "M 50 50";
      for (let i = 0; i <= 90; i++) {
        const ang = i * 0.28, r = i * 0.46;
        d += ` L ${50 + Math.cos(ang) * r} ${50 + Math.sin(ang) * r}`;
      }
      return (
        <>
          <path d={d} fill="none" stroke={a} strokeWidth="2" strokeLinecap="round" opacity="0.85" />
          <circle cx="50" cy="50" r="3" fill="#f4f1ff" />
        </>
      );
    }
    case "lattice": {
      const els: React.ReactNode[] = [];
      for (let i = 0; i < 4; i++)
        for (let j = 0; j < 4; j++) {
          const x = 24 + i * 17, y = 24 + j * 17;
          els.push(<circle key={`n${i}${j}`} cx={x} cy={y} r="2.6" fill={a} opacity="0.8" />);
          if (i < 3) els.push(<line key={`h${i}${j}`} x1={x} y1={y} x2={x + 17} y2={y} stroke={a} strokeWidth="0.8" opacity="0.4" />);
          if (j < 3) els.push(<line key={`v${i}${j}`} x1={x} y1={y} x2={x} y2={y + 17} stroke={a} strokeWidth="0.8" opacity="0.4" />);
        }
      return <>{els}</>;
    }
    case "wave": {
      const mk = (off: number, op: number) => {
        let d = `M 8 ${50 + off}`;
        for (let x = 8; x <= 92; x += 2) d += ` L ${x} ${50 + off - Math.sin((x - 8) / 11) * 18}`;
        return <path d={d} fill="none" stroke={a} strokeWidth="2" opacity={op} strokeLinecap="round" />;
      };
      return <>{mk(-10, 0.4)}{mk(0, 0.7)}{mk(10, 0.4)}</>;
    }
    case "orbit": {
      return (
        <>
          <circle cx="50" cy="50" r="7" fill={a} />
          <g className="spin-slow">
            <ellipse cx="50" cy="50" rx="40" ry="16" fill="none" stroke={a} strokeWidth="1.2" opacity="0.5" />
            <ellipse cx="50" cy="50" rx="40" ry="16" fill="none" stroke={a} strokeWidth="1.2" opacity="0.5" transform="rotate(60 50 50)" />
            <ellipse cx="50" cy="50" rx="40" ry="16" fill="none" stroke={a} strokeWidth="1.2" opacity="0.5" transform="rotate(120 50 50)" />
          </g>
          <circle cx="90" cy="50" r="3" fill="#f4f1ff" />
          <circle cx="30" cy="22" r="3" fill="#f4f1ff" />
        </>
      );
    }
    case "fold": {
      return (
        <>
          <polygon points="30,28 62,20 70,52 38,60" fill={a} opacity="0.18" stroke={a} strokeWidth="1.6" />
          <polygon points="38,60 70,52 64,84 32,78" fill={a} opacity="0.32" stroke={a} strokeWidth="1.6" />
          <polygon points="62,20 80,40 70,52" fill="none" stroke={a} strokeWidth="1.2" opacity="0.7" />
        </>
      );
    }
    case "burst": {
      const rays: React.ReactNode[] = [];
      for (let i = 0; i < 16; i++) {
        const ang = (i / 16) * Math.PI * 2, len = i % 2 ? 34 : 24;
        rays.push(<line key={i} x1={50} y1={50} x2={50 + Math.cos(ang) * len} y2={50 + Math.sin(ang) * len} stroke={a} strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />);
      }
      return <>{rays}<circle cx="50" cy="50" r="6" fill={a} /><circle cx="50" cy="50" r="6" fill="none" stroke="#f4f1ff" strokeWidth="1" /></>;
    }
    case "mirror": {
      const frame = (x: number, op: number) => <rect x={x} y="34" width="10" height="32" rx="2" fill="none" stroke={a} strokeWidth="1.6" opacity={op} />;
      return (
        <>
          {[14, 28, 42, 56, 70].map((x, i) => frame(x, 0.4 + i * 0.12))}
          <line x1="8" y1="50" x2="92" y2="50" stroke={a} strokeWidth="0.8" strokeDasharray="2 3" opacity="0.5" />
        </>
      );
    }
    case "flow": {
      const mk = (y: number, op: number) => {
        let d = `M 8 ${y}`;
        for (let x = 8; x <= 92; x += 3) d += ` Q ${x + 1.5} ${y + (x % 6 ? 9 : -9)} ${x + 3} ${y}`;
        return <path d={d} fill="none" stroke={a} strokeWidth="1.8" opacity={op} strokeLinecap="round" />;
      };
      return <>{mk(34, 0.4)}{mk(50, 0.75)}{mk(66, 0.4)}</>;
    }
    default:
      return <circle cx="50" cy="50" r="16" fill="none" stroke={a} strokeWidth="2" />;
  }
}

export default function Glyph({ archetype, size = 80, accent = "#9b7cff" }: GlyphProps) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className="block">
      <defs>
        <filter id={`g-${archetype}`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="1.8" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter={`url(#g-${archetype})`}>{paths(archetype, accent)}</g>
    </svg>
  );
}
