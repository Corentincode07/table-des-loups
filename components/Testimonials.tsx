"use client";

import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const testimonials = [
  {
    name: "Pierre",
    role: "Président",
    text: "La Table Des Loups c'est avant tout une famille. On a créé quelque chose de rare : un endroit où tout le monde se sent bienvenu, peu importe qui tu es.",
    gradient: "linear-gradient(145deg, #1D4ED8, #3B82F6)",
    glow: "rgba(59,130,246,0.35)",
    border: "rgba(59,130,246,0.3)",
  },
  {
    name: "Philemon",
    role: "Coach sportif",
    text: "Ce qui me plaît dans cette asso, c'est qu'on mélange le sport avec la solidarité. On transpire ensemble mais on partage aussi des moments humains forts.",
    gradient: "linear-gradient(145deg, #5B21B6, #7C3AED)",
    glow: "rgba(124,58,237,0.35)",
    border: "rgba(124,58,237,0.3)",
  },
  {
    name: "Valentine",
    role: "Secrétaire",
    text: "J'ai rejoint l'asso pour donner de mon temps et j'ai reçu bien plus en retour. C'est exactement le genre de projet qui manquait à Nomeny.",
    gradient: "linear-gradient(145deg, #1E40AF, #60A5FA)",
    glow: "rgba(96,165,250,0.35)",
    border: "rgba(96,165,250,0.3)",
  },
];

const QuoteIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path
      d="M9.333 20c0-3.682 2.985-6.667 6.667-6.667V10.667C9.671 10.667 5.333 15.004 5.333 20.667V26h8V20H9.333zM22.667 20c0-3.682 2.985-6.667 6.666-6.667V10.667c-6.328 0-10.666 4.337-10.666 10v5.333h8V20h-4z"
      fill="currentColor"
    />
  </svg>
);

export default function Testimonials() {
  return (
    <section
      id="temoignages"
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "#070714" }}
      aria-labelledby="testimonials-heading"
    >
      {/* Section divider */}
      <div className="absolute top-0 inset-x-0 section-divider" aria-hidden="true" />

      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[200px] opacity-[0.06] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #3B82F6, #7C3AED)" }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[11px] font-semibold tracking-[0.3em] uppercase text-[#60A5FA] mb-5 font-[family-name:var(--font-syne)]">
            Témoignages
          </span>
          <h2
            id="testimonials-heading"
            className="text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-playfair)] leading-[1.1]"
          >
            Ils parlent de nous
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="flex flex-col gap-5 p-7 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${t.border}`,
                boxShadow: `0 0 40px ${t.glow}, 0 1px 16px rgba(0,0,0,0.2)`,
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Quote icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: t.gradient, color: "white" }}
              >
                <QuoteIcon />
              </div>

              {/* Text */}
              <p
                className="text-[#C4B5FD] text-[15px] leading-relaxed flex-1 font-[family-name:var(--font-syne)]"
                style={{ fontStyle: "italic" }}
              >
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ background: t.gradient }}
                >
                  {t.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold font-[family-name:var(--font-syne)]">
                    {t.name}
                  </p>
                  <p className="text-[#60A5FA] text-xs font-[family-name:var(--font-syne)]">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
