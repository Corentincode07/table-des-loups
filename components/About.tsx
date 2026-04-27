"use client";

import { motion, type Variants } from "framer-motion";
import { values } from "@/lib/data";

/* ── SVG icon components ── */

const HandshakeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
  </svg>
);

const LeafIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M11 20A7 7 0 014 13c0-3.87 3.13-7 7-7h5a7 7 0 017 7 7 7 0 01-7 7z" />
    <path d="M11 20V13" />
    <path d="M8 17l3-3 3 3" />
  </svg>
);

const TrophyIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6 9H4.5a2.5 2.5 0 010-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 000-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0012 0V2z" />
  </svg>
);

const iconComponents: Record<string, React.FC> = {
  handshake: HandshakeIcon,
  leaf: LeafIcon,
  trophy: TrophyIcon,
};

const iconGradients = [
  { from: "#3B82F6", to: "#60A5FA", glow: "rgba(59,130,246,0.3)" },
  { from: "#10B981", to: "#34D399", glow: "rgba(16,185,129,0.3)" },
  { from: "#7C3AED", to: "#A78BFA", glow: "rgba(124,58,237,0.3)" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  return (
    <section
      id="qui-sommes-nous"
      className="relative py-32 px-6 overflow-hidden bg-white"
      aria-labelledby="about-heading"
    >

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* ── Left: story + values ── */}
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={containerVariants}
              className="mb-12"
            >
              <motion.span
                variants={fadeUp}
                className="inline-block text-[11px] font-semibold tracking-[0.3em] uppercase text-[#3B82F6] mb-5 font-[family-name:var(--font-syne)]"
              >
                Notre histoire
              </motion.span>
              <motion.h2
                variants={fadeUp}
                id="about-heading"
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-[family-name:var(--font-playfair)] leading-[1.1]"
              >
                Qui sommes-nous ?
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-600 text-base md:text-lg leading-[1.8]">
                Fondée par un groupe d&apos;amis de Nomeny autour d&apos;une table partagée, c&apos;est de là que vient notre nom. La Table Des Loups est née d&apos;une envie simple : créer du lien, agir ensemble, et vivre pleinement notre quartier. Solidarité, écologie et sport sont nos piliers.
              </motion.p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={containerVariants}
              className="space-y-3"
            >
              {values.map((value, i) => {
                const Icon = iconComponents[value.icon] ?? HandshakeIcon;
                const grad = iconGradients[i];
                return (
                  <motion.div
                    key={value.title}
                    variants={fadeUp}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="group flex items-start gap-5 p-5 rounded-2xl cursor-default transition-all duration-300 bg-white"
                    style={{
                      border: "1px solid rgba(0,0,0,0.08)",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                    }}
                  >
                    {/* Icon */}
                    <div
                      className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${grad.from}, ${grad.to})`,
                        boxShadow: `0 4px 16px ${grad.glow}`,
                      }}
                    >
                      <Icon />
                    </div>

                    <div>
                      <h3 className="text-[15px] font-bold text-gray-900 mb-1 font-[family-name:var(--font-syne)]">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>

                    {/* Subtle right-edge accent */}
                    <div
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-l-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(180deg, ${grad.from}, ${grad.to})`,
                      }}
                      aria-hidden="true"
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* ── Right: map ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <div>
              <span className="inline-block text-[11px] font-semibold tracking-[0.3em] uppercase text-[#3B82F6] mb-4 font-[family-name:var(--font-syne)]">
                Localisation
              </span>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 font-[family-name:var(--font-playfair)] leading-[1.1]">
                Où nous trouver ?
              </h3>
              <p className="text-gray-500 text-sm mt-3">
                Nomeny, Meurthe-et-Moselle — 54610
              </p>
            </div>

            <div className="p-4 bg-[#0a0a1a] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(124,58,237,0.4)]">
              <div className="rounded-2xl overflow-hidden border border-blue-500/40" style={{ height: "480px" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41983.54873276361!2d6.191466850901038!3d48.87781421148403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4794eab5e309a6e5%3A0x40a5fb99a3af5a0!2s54610%20Nomeny!5e1!3m2!1sfr!2sfr!4v1776842191976!5m2!1sfr!2sfr"
                  width="100%"
                  height="480"
                  style={{ height: "480px", width: "100%", border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carte de Nomeny"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
