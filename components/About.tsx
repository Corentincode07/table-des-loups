"use client";

import { motion, type Variants } from "framer-motion";
import { values } from "@/lib/data";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <section
      id="qui-sommes-nous"
      className="relative py-28 px-6 bg-white overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-[0.06] pointer-events-none"
        style={{ background: "radial-gradient(circle, #3B82F6, #7C3AED)" }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span
            variants={textVariants}
            className="inline-block text-sm font-semibold tracking-[0.25em] uppercase text-[#3B82F6] mb-4 font-[family-name:var(--font-syne)]"
          >
            Notre histoire
          </motion.span>
          <motion.h2
            variants={textVariants}
            id="about-heading"
            className="text-4xl md:text-5xl font-extrabold text-[#0F0F1A] mb-6 font-[family-name:var(--font-syne)]"
          >
            Qui sommes-nous ?
          </motion.h2>
          <motion.p
            variants={textVariants}
            className="text-[#0F0F1A]/70 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Fondée par un groupe d'amis de Nomeny autour d'une table partagée — d'où notre
            nom — La Table Des Loups est née d'une envie simple : créer du lien, agir
            ensemble, et vivre pleinement notre quartier. Solidarité, écologie et sport
            sont nos piliers.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -4 }}
              className="group relative p-8 rounded-2xl glass-card cursor-default transition-all duration-300"
              style={{
                boxShadow:
                  i % 2 === 0
                    ? "0 0 0 1px rgba(59,130,246,0.15)"
                    : "0 0 0 1px rgba(124,58,237,0.15)",
              }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow:
                    i % 2 === 0
                      ? "0 0 40px rgba(59,130,246,0.2), inset 0 0 40px rgba(59,130,246,0.05)"
                      : "0 0 40px rgba(124,58,237,0.2), inset 0 0 40px rgba(124,58,237,0.05)",
                  border:
                    i % 2 === 0
                      ? "1px solid rgba(59,130,246,0.4)"
                      : "1px solid rgba(124,58,237,0.4)",
                }}
                aria-hidden="true"
              />

              <div className="relative z-10">
                <div className="text-4xl mb-5" role="img" aria-label={value.title}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0F0F1A] mb-3 font-[family-name:var(--font-syne)]">
                  {value.title}
                </h3>
                <p className="text-[#0F0F1A]/65 leading-relaxed text-sm">
                  {value.description}
                </p>

                {/* Accent line */}
                <div
                  className="mt-6 h-0.5 w-12 rounded-full transition-all duration-300 group-hover:w-full"
                  style={{
                    background:
                      i % 2 === 0
                        ? "linear-gradient(90deg, #3B82F6, #60A5FA)"
                        : "linear-gradient(90deg, #7C3AED, #60A5FA)",
                  }}
                  aria-hidden="true"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
