"use client";

import { motion, type Variants } from "framer-motion";
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
  blue: {
    bg: "rgba(59,130,246,0.08)",
    text: "#93C5FD",
    border: "rgba(59,130,246,0.2)",
  },
  violet: {
    bg: "rgba(124,58,237,0.08)",
    text: "#C4B5FD",
    border: "rgba(124,58,237,0.2)",
  },
};

export default function Team() {
  return (
    <section
      id="equipe"
      className="relative py-32 px-6 overflow-hidden"
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
            className="text-4xl md:text-5xl font-extrabold text-white font-[family-name:var(--font-syne)] leading-[1.05]"
          >
            Notre Équipe
          </h2>
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
                whileHover={{ y: -6, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group flex flex-col items-center text-center p-5 rounded-2xl cursor-default transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  boxShadow: "0 1px 16px rgba(0,0,0,0.15)",
                }}
              >
                {/* Avatar */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-[15px] mb-3.5 group-hover:scale-110 transition-transform duration-300 font-[family-name:var(--font-syne)]"
                  style={{
                    background: gradient,
                    boxShadow: `0 6px 20px ${
                      member.color === "blue"
                        ? "rgba(59,130,246,0.35)"
                        : "rgba(124,58,237,0.35)"
                    }`,
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
                  style={{
                    background: badge.bg,
                    color: badge.text,
                    border: `1px solid ${badge.border}`,
                  }}
                >
                  {member.role}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
