"use client";

import { motion, type Variants } from "framer-motion";
import { teamMembers } from "@/lib/data";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function getInitials(name: string) {
  return name.slice(0, 2).toUpperCase();
}

const badgeStyle: Record<string, { bg: string; text: string; ring: string }> = {
  blue: { bg: "#EFF6FF", text: "#1D4ED8", ring: "rgba(59,130,246,0.3)" },
  violet: { bg: "#F5F3FF", text: "#4C1D95", ring: "rgba(124,58,237,0.3)" },
};

const avatarGradients = [
  "linear-gradient(135deg, #3B82F6, #7C3AED)",
  "linear-gradient(135deg, #7C3AED, #60A5FA)",
  "linear-gradient(135deg, #1D4ED8, #3B82F6)",
  "linear-gradient(135deg, #4C1D95, #7C3AED)",
  "linear-gradient(135deg, #60A5FA, #3B82F6)",
  "linear-gradient(135deg, #3B82F6, #4C1D95)",
];

export default function Team() {
  return (
    <section
      id="equipe"
      className="relative py-28 px-6 bg-white overflow-hidden"
      aria-labelledby="team-heading"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[180px] opacity-[0.05] pointer-events-none"
        style={{ background: "radial-gradient(circle, #3B82F6, #7C3AED)" }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold tracking-[0.25em] uppercase text-[#3B82F6] mb-4 font-[family-name:var(--font-syne)]">
            Les gens derrière TDL
          </span>
          <h2
            id="team-heading"
            className="text-4xl md:text-5xl font-extrabold text-[#0F0F1A] font-[family-name:var(--font-syne)]"
          >
            Notre Équipe
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {teamMembers.map((member, i) => {
            const colors = badgeStyle[member.color];
            const gradient = avatarGradients[i % avatarGradients.length];
            return (
              <motion.div
                key={member.name}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -4 }}
                className="group flex flex-col items-center text-center p-5 rounded-2xl bg-white border border-[rgba(96,165,250,0.12)] hover:border-[rgba(96,165,250,0.35)] transition-all duration-300 cursor-default"
                style={{
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                }}
              >
                {/* Avatar */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg mb-3 group-hover:scale-110 transition-transform duration-300 font-[family-name:var(--font-syne)]"
                  style={{
                    background: gradient,
                    boxShadow: `0 4px 15px ${member.color === "blue" ? "rgba(59,130,246,0.4)" : "rgba(124,58,237,0.4)"}`,
                  }}
                  aria-hidden="true"
                >
                  {getInitials(member.name)}
                </div>

                {/* Name */}
                <p className="font-bold text-sm text-[#0F0F1A] mb-2 font-[family-name:var(--font-syne)]">
                  {member.name}
                </p>

                {/* Role badge */}
                <span
                  className="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold leading-tight font-[family-name:var(--font-syne)]"
                  style={{
                    backgroundColor: colors.bg,
                    color: colors.text,
                    boxShadow: `0 0 0 1px ${colors.ring}`,
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
