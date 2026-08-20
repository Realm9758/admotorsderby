"use client";

import { useEffect, useState } from "react";

/*
  The twenty-four hour ring. A signal box works to a twenty-four hour clock and
  so does this business, so every hour on the ring is lit. The only thing the
  client adds is which hour it is in Derby right now, which is why this is the
  one client component on the page.
*/

const HOURS = Array.from({ length: 24 }, (_, i) => i);
const CENTRE = 160;
const R_INNER = 118;
const R_OUTER = 140;
const R_LABEL = 101;

function point(hour: number, radius: number) {
  const angle = ((hour * 15 - 90) * Math.PI) / 180;
  return {
    x: CENTRE + radius * Math.cos(angle),
    y: CENTRE + radius * Math.sin(angle),
  };
}

export default function HourRing({ nowLabel, lit }: { nowLabel: string; lit: string }) {
  const [now, setNow] = useState<{ hour: number; text: string } | null>(null);

  useEffect(() => {
    const read = () => {
      const parts = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/London",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).formatToParts(new Date());
      const hour = Number(parts.find((p) => p.type === "hour")?.value ?? "0");
      const minute = parts.find((p) => p.type === "minute")?.value ?? "00";
      setNow({ hour: hour % 24, text: `${String(hour % 24).padStart(2, "0")}:${minute}` });
    };
    read();
    const id = window.setInterval(read, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="ring">
      <svg className="ringFace" viewBox="0 0 320 320" role="img" aria-label="A twenty-four hour clock face with every hour lit">
        <circle cx={CENTRE} cy={CENTRE} r={R_OUTER} fill="none" stroke="rgba(185,138,60,0.28)" strokeWidth="1" />
        <circle cx={CENTRE} cy={CENTRE} r={R_INNER} fill="none" stroke="rgba(185,138,60,0.16)" strokeWidth="1" />
        {HOURS.map((hour) => {
          const a = point(hour, R_INNER);
          const b = point(hour, R_OUTER);
          const major = hour % 6 === 0;
          const active = now?.hour === hour;
          return (
            <line
              key={hour}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke={active ? "#4fdb92" : major ? "rgba(244,241,234,0.62)" : "rgba(185,138,60,0.55)"}
              strokeWidth={active ? 5 : major ? 3 : 2}
              strokeLinecap="butt"
              style={active ? { filter: "drop-shadow(0 0 7px rgba(79,219,146,0.85))" } : undefined}
            />
          );
        })}
        {[0, 6, 12, 18].map((hour) => {
          const p = point(hour, R_LABEL);
          return (
            <text
              key={hour}
              x={p.x}
              y={p.y}
              fill="rgba(244,241,234,0.55)"
              fontSize="12"
              fontFamily="var(--font-plate)"
              letterSpacing="1"
              textAnchor="middle"
              dominantBaseline="central"
            >
              {String(hour).padStart(2, "0")}
            </text>
          );
        })}
      </svg>
      <div className="ringHub">
        <div>
          <div className="ringNow" suppressHydrationWarning>
            {now?.text ?? "00:00"}
          </div>
          <div className="ringNowLabel">{nowLabel}</div>
          <div className="ringState">
            <span className="blockNeedle" aria-hidden="true" />
            {lit}
          </div>
        </div>
      </div>
    </div>
  );
}
