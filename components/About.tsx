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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: text + values */}
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={containerVariants}
              className="mb-12"
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
                className="text-[#0F0F1A]/70 text-lg leading-relaxed"
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
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
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

          {/* Right: map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-extrabold text-[#0F0F1A] mb-2 font-[family-name:var(--font-syne)]">
              Où nous trouver ?
            </h3>
            <p className="text-[#0F0F1A]/60 text-sm mb-6">Nomeny, 54610</p>
            <div className="rounded-2xl overflow-hidden border border-black/10" style={{ boxShadow: "0 0 40px rgba(59,130,246,0.08)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2636.5!2d6.2333!3d48.8833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4794c0b0b0b0b0b0%3A0x0!2sNomeny%2C+France!5e0!3m2!1sfr!2sfr!4v1"
                width="100%"
                height="420"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte Nomeny"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
