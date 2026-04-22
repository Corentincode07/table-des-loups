"use client";

import { motion, type Variants } from "framer-motion";
import { activities } from "@/lib/data";

/* ── Icon components ── */

const TrophyIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9H4.5a2.5 2.5 0 010-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 000-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0012 0V2z" />
  </svg>
);

const HeartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
  </svg>
);

const StarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const BookIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
  </svg>
);

const iconComponents: Record<string, React.FC> = {
  trophy: TrophyIcon,
  heart: HeartIcon,
  star: StarIcon,
  book: BookIcon,
};

const colorConfig: Record<string, {
  iconGrad: string;
  iconGlow: string;
  topLine: string;
  dotBg: string;
  hoverBorder: string;
  hoverGlow: string;
}> = {
  blue: {
    iconGrad: "linear-gradient(135deg, #1D4ED8, #3B82F6)",
    iconGlow: "rgba(59,130,246,0.4)",
    topLine: "linear-gradient(90deg, #3B82F6, #60A5FA)",
    dotBg: "#3B82F6",
    hoverBorder: "rgba(59,130,246,0.35)",
    hoverGlow: "rgba(59,130,246,0.12)",
  },
  violet: {
    iconGrad: "linear-gradient(135deg, #4C1D95, #7C3AED)",
    iconGlow: "rgba(124,58,237,0.4)",
    topLine: "linear-gradient(90deg, #7C3AED, #A78BFA)",
    dotBg: "#7C3AED",
    hoverBorder: "rgba(124,58,237,0.35)",
    hoverGlow: "rgba(124,58,237,0.12)",
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Activities() {
  return (
    <section
      id="activites"
      className="relative py-32 px-6 overflow-hidden bg-white"
      aria-labelledby="activities-heading"
    >

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[11px] font-semibold tracking-[0.3em] uppercase text-[#7C3AED] mb-5 font-[family-name:var(--font-syne)]">
            Ce qu&apos;on fait
          </span>
          <h2
            id="activities-heading"
            className="text-4xl md:text-5xl font-extrabold text-gray-900 font-[family-name:var(--font-syne)] leading-[1.05]"
          >
            Nos Activités
          </h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {activities.map((activity) => {
            const c = colorConfig[activity.color];
            const Icon = iconComponents[activity.icon] ?? TrophyIcon;
            return (
              <motion.div
                key={activity.category}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group relative rounded-2xl overflow-hidden cursor-default bg-white"
                style={{
                  border: "1px solid rgba(99,102,241,0.15)",
                  boxShadow: "0 2px 16px rgba(99,102,241,0.07), 0 1px 4px rgba(0,0,0,0.04)",
                }}
              >
                {/* Top gradient line */}
                <div
                  className="h-0.5 w-full"
                  style={{ background: c.topLine }}
                  aria-hidden="true"
                />

                {/* Hover glow overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl"
                  style={{
                    border: `1px solid ${c.hoverBorder}`,
                    boxShadow: `inset 0 0 30px ${c.hoverGlow}`,
                  }}
                  aria-hidden="true"
                />

                <div className="relative p-6 z-10">
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: c.iconGrad,
                      boxShadow: `0 4px 20px ${c.iconGlow}`,
                    }}
                  >
                    <Icon />
                  </div>

                  {/* Category */}
                  <h3 className="text-base font-bold text-gray-900 mb-4 font-[family-name:var(--font-syne)]">
                    {activity.category}
                  </h3>

                  {/* Items */}
                  <ul className="space-y-2.5">
                    {activity.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[13px] text-gray-700 leading-snug"
                      >
                        <span
                          className="mt-[5px] shrink-0 w-1.5 h-1.5 rounded-full"
                          style={{ background: c.dotBg, opacity: 0.7 }}
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
