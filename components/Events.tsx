"use client";

import { motion } from "framer-motion";

export default function Events() {
  return (
    <section
      id="evenements"
      className="relative py-28 px-6 bg-[#0F0F1A] overflow-hidden"
      aria-labelledby="events-heading"
    >
      {/* Background glows */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[160px] opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #7C3AED, transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full blur-[140px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #3B82F6, transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold tracking-[0.25em] uppercase text-[#60A5FA] mb-4 font-[family-name:var(--font-syne)]">
            Nos prochains rendez-vous
          </span>
          <h2
            id="events-heading"
            className="text-4xl md:text-5xl font-extrabold text-white font-[family-name:var(--font-syne)]"
          >
            Événements à venir
          </h2>
        </motion.div>

        {/* Announcement card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-12 rounded-2xl p-8 text-center bg-[#0f0f2e]"
          style={{
            border: "1px solid rgba(96,165,250,0.3)",
            boxShadow: "0 0 40px rgba(124,58,237,0.2), 0 0 80px rgba(59,130,246,0.1)",
          }}
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
            style={{ background: "linear-gradient(135deg, #3B82F6, #7C3AED)" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
          <p className="text-white/80 text-lg leading-relaxed font-[family-name:var(--font-syne)]">
            Les prochains événements seront annoncés très bientôt,{" "}
            <span className="text-[#60A5FA] font-semibold">restez connectés !</span>
          </p>
        </motion.div>

        {/* Placeholder cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="rounded-2xl p-6 bg-[#0f0f2e] flex flex-col items-center justify-center min-h-[180px]"
              style={{
                border: "1px solid rgba(96,165,250,0.1)",
              }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white/40 font-[family-name:var(--font-syne)]"
                style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}
              >
                <span
                  className="w-2 h-2 rounded-full bg-[#60A5FA] animate-pulse"
                  aria-hidden="true"
                />
                À venir...
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
