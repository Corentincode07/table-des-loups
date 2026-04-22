"use client";

import { motion } from "framer-motion";

const CalendarIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const BellIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 01-3.46 0" />
  </svg>
);

const placeholders = [
  {
    label: "Prochain événement",
    desc: "À définir prochainement",
    delay: 0.15,
  },
  {
    label: "Événement en préparation",
    desc: "Restez à l'écoute",
    delay: 0.25,
  },
  {
    label: "Surprise à venir",
    desc: "On vous prépare quelque chose",
    delay: 0.35,
  },
];

export default function Events() {
  return (
    <section
      id="events"
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "#0C0C20" }}
      aria-labelledby="events-heading"
    >
      {/* Section divider */}
      <div className="absolute top-0 inset-x-0 section-divider" aria-hidden="true" />

      {/* Background glows */}
      <div
        className="absolute top-0 right-1/4 w-[550px] h-[550px] rounded-full blur-[180px] opacity-[0.08] pointer-events-none"
        style={{ background: "radial-gradient(circle, #7C3AED, transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-[450px] h-[450px] rounded-full blur-[160px] opacity-[0.06] pointer-events-none"
        style={{ background: "radial-gradient(circle, #3B82F6, transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[11px] font-semibold tracking-[0.3em] uppercase text-[#60A5FA] mb-5 font-[family-name:var(--font-syne)]">
            Nos prochains rendez-vous
          </span>
          <h2
            id="events-heading"
            className="text-4xl md:text-5xl font-extrabold text-white font-[family-name:var(--font-syne)] leading-[1.05]"
          >
            Événements à venir
          </h2>
        </motion.div>

        {/* Announcement card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto mb-14 rounded-2xl p-10 text-center relative overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(96,165,250,0.2)",
            boxShadow:
              "0 0 60px rgba(124,58,237,0.12), 0 0 120px rgba(59,130,246,0.06)",
          }}
        >
          {/* Subtle top gradient accent */}
          <div
            className="absolute top-0 inset-x-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(59,130,246,0.5), rgba(124,58,237,0.5), transparent)",
            }}
            aria-hidden="true"
          />

          {/* Icon */}
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white"
            style={{
              background: "linear-gradient(135deg, #3B82F6, #7C3AED)",
              boxShadow: "0 8px 32px rgba(59,130,246,0.3), 0 0 60px rgba(124,58,237,0.15)",
            }}
          >
            <CalendarIcon />
          </div>

          <h3 className="text-xl font-bold text-white mb-3 font-[family-name:var(--font-syne)]">
            Annonces à venir
          </h3>
          <p className="text-white/55 text-base leading-relaxed">
            Les prochains événements seront annoncés très bientôt.{" "}
            <span className="text-[#60A5FA] font-semibold">
              Restez connectés !
            </span>
          </p>

          {/* Follow hint */}
          <div
            className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full text-xs text-white/40 font-[family-name:var(--font-syne)]"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <BellIcon />
            Suivez-nous sur les réseaux pour ne rien manquer
          </div>
        </motion.div>

        {/* Placeholder cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {placeholders.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: p.delay, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-2xl p-8 flex flex-col gap-4 relative overflow-hidden cursor-default transition-all duration-300 hover:border-white/12"
              style={{
                background: "rgba(255,255,255,0.018)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Top line skeleton */}
              <div
                className="h-1.5 rounded-full animate-shimmer"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 100%)",
                  backgroundSize: "200% auto",
                  width: i === 0 ? "60%" : i === 1 ? "75%" : "50%",
                }}
                aria-hidden="true"
              />

              <div className="space-y-2" aria-hidden="true">
                {[80, 65, 45].map((w, j) => (
                  <div
                    key={j}
                    className="h-1 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      width: `${w}%`,
                    }}
                  />
                ))}
              </div>

              {/* Label */}
              <div className="mt-auto">
                <span
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold text-white/30 font-[family-name:var(--font-syne)]"
                  style={{
                    border: "1px solid rgba(255,255,255,0.07)",
                    background: "rgba(255,255,255,0.025)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] opacity-60"
                    aria-hidden="true"
                    style={{ animation: `pulse 2s ease-in-out ${i * 0.4}s infinite` }}
                  />
                  {p.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
