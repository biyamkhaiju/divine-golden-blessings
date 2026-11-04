import React from "react";

/* Petals fall gently from the top — like flowers drifting down at a wedding */
const PETALS = [
  { x:  4, size: 14, dur: 24, delay:  -2, op: 0.34, rot:  12 },
  { x: 13, size: 11, dur: 29, delay:  -8, op: 0.28, rot: -18 },
  { x: 22, size: 16, dur: 26, delay:  -5, op: 0.36, rot:  30 },
  { x: 31, size: 12, dur: 31, delay: -11, op: 0.29, rot:  -8 },
  { x: 40, size: 15, dur: 27, delay:  -1, op: 0.34, rot:  22 },
  { x: 50, size: 12, dur: 30, delay: -14, op: 0.28, rot: -35 },
  { x: 60, size: 16, dur: 28, delay:  -6, op: 0.38, rot:   5 },
  { x: 70, size: 13, dur: 25, delay:  -9, op: 0.32, rot: -25 },
  { x: 80, size: 15, dur: 32, delay:  -3, op: 0.34, rot:  18 },
  { x: 90, size: 12, dur: 27, delay: -12, op: 0.29, rot: -14 },
  { x: 17, size: 13, dur: 30, delay: -16, op: 0.28, rot:  40 },
  { x: 55, size: 15, dur: 26, delay:  -4, op: 0.36, rot:  -5 },
];

/* Elongated lotus-petal teardrop, centred in 32×32 viewBox */
const PATH = "M16,2 C22,8 24,22 16,30 C8,22 10,8 16,2 Z";

export function GoldenPetals() {
  return (
    <div
      className="golden-petals"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {PETALS.map((p, i) => (
        <div
          key={i}
          className="golden-petal"
          style={{
            position: "absolute",
            top: "-60px",
            left: `${p.x}%`,
            width: p.size,
            height: p.size * 1.8,
            willChange: "transform, opacity",
            animation: `petal-fall ${p.dur}s ${p.delay}s linear infinite`,
          }}
        >
          <svg
            viewBox="0 0 32 32"
            style={{
              width: "100%",
              height: "100%",
              transform: `rotate(${p.rot}deg)`,
            }}
          >
            <defs>
              <radialGradient id={`pg${i}`} cx="50%" cy="25%" r="75%">
                <stop offset="0%"   stopColor="#FFF8DC" stopOpacity={Math.min(p.op + 0.18, 1)} />
                <stop offset="50%"  stopColor="#D4AF37" stopOpacity={p.op} />
                <stop offset="100%" stopColor="#8B6914" stopOpacity={p.op * 0.35} />
              </radialGradient>
            </defs>
            <path d={PATH} fill={`url(#pg${i})`} />
          </svg>
        </div>
      ))}

      <style>{`
        @keyframes petal-fall {
          0%   { transform: translate3d(0, 0, 0)       rotate(0deg)   scale(.92); opacity: 0; }
          8%   { opacity: .24; }
          35%  { transform: translate3d(18px, 34vh, 0) rotate(58deg)  scale(.96); }
          66%  { transform: translate3d(-15px, 68vh, 0) rotate(122deg) scale(.84); }
          91%  { opacity: .18; }
          100% { transform: translate3d(9px, 112vh, 0)  rotate(190deg) scale(.68); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
