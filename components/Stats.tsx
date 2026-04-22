"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: 7,
    suffix: "+",
    label: "Membres fondateurs",
    gradient: { from: "#3B82F6", to: "#60A5FA" },
    glow: "rgba(59,130,246,0.35)",
    border: "rgba(59,130,246,0.25)",
  },
  {
    value: 20,
    suffix: "+",
    label: "Activités prévues",
    gradient: { from: "#7C3AED", to: "#A78BFA" },
    glow: "rgba(124,58,237,0.35)",
    border: "rgba(124,58,237,0.25)",
  },
  {
    value: 1,
    suffix: "",
    label: "Association loi 1901",
    gradient: { from: "#60A5FA", to: "#ffffff" },
    glow: "rgba(96,165,250,0.3)",
    border: "rgba(96,165,250,0.2)",
  },
];

function Counter({
  value,
  suffix,
  gradient,
  triggered,
}: {
  value: number;
  suffix: string;
  gradient: { from: string; to: string };
  triggered: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    const duration = 1400;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), value);
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [triggered, value]);

  return (
    <span
      className="text-6xl md:text-7xl font-extrabold leading-none font-[family-name:var(--font-syne)] tabular-nums"
      style={{
        background: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 overflow-hidden"
      style={{ background: "#070714" }}
      aria-label="Chiffres clés"
    >
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-15"
          style={{ background: "radial-gradient(ellipse, #3B82F6, #7C3AED, transparent)" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="relative flex flex-col items-center justify-center gap-3 py-10 px-6 rounded-2xl text-center"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${stat.border}`,
                boxShadow: `0 0 40px ${stat.glow}, inset 0 1px 0 rgba(255,255,255,0.04)`,
              }}
            >
              {/* Top glow line */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px rounded-full"
                style={{ background: `linear-gradient(90deg, transparent, ${stat.gradient.from}, transparent)` }}
                aria-hidden="true"
              />

              <Counter
                value={stat.value}
                suffix={stat.suffix}
                gradient={stat.gradient}
                triggered={inView}
              />

              <p className="text-white/50 text-sm font-medium tracking-wide font-[family-name:var(--font-syne)]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
