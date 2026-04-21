"use client";

import { motion, type Variants } from "framer-motion";
import { activities } from "@/lib/data";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const colorMap: Record<string, { border: string; glow: string; badge: string; dot: string }> = {
  blue: {
    border: "rgba(59,130,246,0.3)",
    glow: "rgba(59,130,246,0.3)",
    badge: "bg-blue-500/10 text-[#60A5FA]",
    dot: "bg-[#3B82F6]",
  },
  violet: {
    border: "rgba(124,58,237,0.3)",
    glow: "rgba(124,58,237,0.3)",
    badge: "bg-violet-500/10 text-[#A78BFA]",
    dot: "bg-[#7C3AED]",
  },
};

export default function Activities() {
  return (
    <section
      id="activites"
      className="relative py-28 px-6 bg-[#0a0a1a] overflow-hidden"
      aria-labelledby="activities-heading"
    >
      {/* Background accent */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #7C3AED, #3B82F6)" }}
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
          <span className="inline-block text-sm font-semibold tracking-[0.25em] uppercase text-[#A78BFA] mb-4 font-[family-name:var(--font-syne)]">
            Ce qu&apos;on fait
          </span>
          <h2
            id="activities-heading"
            className="text-4xl md:text-5xl font-extrabold text-white font-[family-name:var(--font-syne)]"
          >
            Nos Activités
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {activities.map((activity) => {
            const colors = colorMap[activity.color];
            return (
              <motion.div
                key={activity.category}
                variants={cardVariants}
                whileHover={{ scale: 1.04, y: -6 }}
                className="group relative rounded-2xl p-6 cursor-default transition-all duration-300 overflow-hidden bg-[#0f0f2e]"
                style={{
                  border: `1px solid ${colors.border}`,
                  boxShadow: "0 1px 20px rgba(0,0,0,0.3)",
                }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{
                    boxShadow: `0 0 35px ${colors.glow}, inset 0 0 20px ${colors.glow}`,
                    border: `1px solid ${colors.glow}`,
                  }}
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  <div className="text-3xl mb-4" role="img" aria-label={activity.category}>
                    {activity.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4 font-[family-name:var(--font-syne)]">
                    {activity.category}
                  </h3>
                  <ul className="space-y-2.5">
                    {activity.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-white/60">
                        <span
                          className={`mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full ${colors.dot}`}
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      activity.color === "blue"
                        ? "linear-gradient(90deg, #3B82F6, #60A5FA)"
                        : "linear-gradient(90deg, #7C3AED, #60A5FA)",
                  }}
                  aria-hidden="true"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
