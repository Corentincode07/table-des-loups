"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { teamMembers } from "@/lib/data";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function getInitials(name: string) {
  return name.slice(0, 2).toUpperCase();
}

const avatarGradients = [
  "linear-gradient(145deg, #1D4ED8, #3B82F6)",
  "linear-gradient(145deg, #5B21B6, #7C3AED)",
  "linear-gradient(145deg, #1E40AF, #60A5FA)",
  "linear-gradient(145deg, #4C1D95, #A78BFA)",
  "linear-gradient(145deg, #1D4ED8, #7C3AED)",
  "linear-gradient(145deg, #3B82F6, #60A5FA)",
  "linear-gradient(145deg, #6D28D9, #818CF8)",
];

const badgeColors: Record<string, { bg: string; text: string; border: string }> = {
  blue: { bg: "rgba(59,130,246,0.08)", text: "#93C5FD", border: "rgba(59,130,246,0.2)" },
  violet: { bg: "rgba(124,58,237,0.08)", text: "#C4B5FD", border: "rgba(124,58,237,0.2)" },
};

type Member = typeof teamMembers[number];
type Selected = { member: Member; index: number } | null;

export default function Team() {
  const [selected, setSelected] = useState<Selected>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setSelected(null); };
    if (selected) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <section
        id="equipe"
        className="relative py-16 md:py-32 px-4 md:px-6 overflow-hidden"
        style={{ background: "#070714" }}
        aria-labelledby="team-heading"
      >
        {/* Section divider */}
        <div className="absolute top-0 inset-x-0 section-divider" aria-hidden="true" />

        {/* Subtle center glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[200px] opacity-[0.06] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #3B82F6, #7C3AED)" }}
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[11px] font-semibold tracking-[0.3em] uppercase text-[#60A5FA] mb-5 font-[family-name:var(--font-syne)]">
              Les gens derrière TDL
            </span>
            <h2
              id="team-heading"
              className="text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-playfair)] leading-[1.1]"
            >
              Notre Équipe
            </h2>
            <p className="text-white/35 text-sm mt-4 font-[family-name:var(--font-syne)]">
              Cliquez sur un membre pour en savoir plus
            </p>
          </motion.div>

          {/* Members grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4"
          >
            {teamMembers.map((member, i) => {
              const badge = badgeColors[member.color];
              const gradient = avatarGradients[i % avatarGradients.length];
              return (
                <motion.div
                  key={member.name}
                  variants={cardVariants}
                  onClick={() => setSelected({ member, index: i })}
                  className="group flex flex-col items-center text-center p-5 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    boxShadow: "0 1px 16px rgba(0,0,0,0.15)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      member.color === "blue"
                        ? "0 8px 32px rgba(59,130,246,0.25), 0 1px 16px rgba(0,0,0,0.2)"
                        : "0 8px 32px rgba(124,58,237,0.25), 0 1px 16px rgba(0,0,0,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 16px rgba(0,0,0,0.15)";
                  }}
                  aria-label={`Voir le profil de ${member.name}`}
                >
                  {/* Avatar */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-[15px] mb-3.5 font-[family-name:var(--font-syne)]"
                    style={{
                      background: gradient,
                      boxShadow: `0 6px 20px ${member.color === "blue" ? "rgba(59,130,246,0.35)" : "rgba(124,58,237,0.35)"}`,
                    }}
                    aria-hidden="true"
                  >
                    {getInitials(member.name)}
                  </div>

                  {/* Name */}
                  <p className="font-bold text-sm text-white/90 mb-2.5 font-[family-name:var(--font-syne)] leading-tight">
                    {member.name}
                  </p>

                  {/* Role badge */}
                  <span
                    className="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold leading-tight font-[family-name:var(--font-syne)] text-center"
                    style={{ background: badge.bg, color: badge.text, border: `1px solid ${badge.border}` }}
                  >
                    {member.role}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: "rgba(7,7,20,0.85)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
            onClick={() => setSelected(null)}
            aria-modal="true"
            role="dialog"
            aria-label={`Profil de ${selected.member.name}`}
          >
            <motion.div
              key="modal-card"
              initial={{ opacity: 0, scale: 0.88, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 24 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-sm w-full rounded-3xl p-8 text-center"
              style={{
                background: "rgba(12,12,32,0.98)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 0 80px rgba(59,130,246,0.15), 0 0 160px rgba(124,58,237,0.08), 0 32px 64px rgba(0,0,0,0.5)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top gradient accent */}
              <div
                className="absolute top-0 inset-x-0 h-px rounded-t-3xl"
                style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.6), rgba(124,58,237,0.6), transparent)" }}
                aria-hidden="true"
              />

              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-xl flex items-center justify-center text-white/40 hover:text-white hover:bg-white/8 transition-all duration-200 cursor-pointer"
                aria-label="Fermer"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <line x1="2" y1="2" x2="14" y2="14" />
                  <line x1="14" y1="2" x2="2" y2="14" />
                </svg>
              </button>

              {/* Large avatar */}
              <div
                className="w-24 h-24 rounded-3xl flex items-center justify-center text-white font-bold text-3xl mx-auto mb-5 font-[family-name:var(--font-syne)]"
                style={{
                  background: avatarGradients[selected.index % avatarGradients.length],
                  boxShadow: `0 12px 40px ${selected.member.color === "blue" ? "rgba(59,130,246,0.45)" : "rgba(124,58,237,0.45)"}`,
                }}
                aria-hidden="true"
              >
                {getInitials(selected.member.name)}
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-white mb-3 font-[family-name:var(--font-syne)]">
                {selected.member.name}
              </h3>

              {/* Role badge */}
              <span
                className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold mb-6 font-[family-name:var(--font-syne)]"
                style={{
                  background: badgeColors[selected.member.color].bg,
                  color: badgeColors[selected.member.color].text,
                  border: `1px solid ${badgeColors[selected.member.color].border}`,
                }}
              >
                {selected.member.role}
              </span>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed">
                {selected.member.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
