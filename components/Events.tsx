"use client";

import { motion, type Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const events = [
  {
    day: "15",
    month: "Mai",
    title: "Tournoi de sport",
    description: "Venez participer à notre tournoi multisports ouvert à tous les niveaux",
    location: "Nomeny",
    category: "Sport",
    color: "blue",
  },
  {
    day: "22",
    month: "Mai",
    title: "Tartiflette géante",
    description: "Grand repas solidaire pour récolter des fonds pour l'association",
    location: "Nomeny",
    category: "Événement",
    color: "violet",
  },
  {
    day: "1",
    month: "Juin",
    title: "Rando écolo",
    description: "Randonnée découverte de la nature autour de Nomeny avec ramassage de déchets",
    location: "Nomeny",
    category: "Solidarité",
    color: "blue",
  },
];

const categoryStyles: Record<string, string> = {
  Sport: "bg-blue-500/15 text-[#60A5FA] border border-blue-500/30",
  Événement: "bg-violet-500/15 text-[#A78BFA] border border-violet-500/30",
  Solidarité: "bg-blue-500/15 text-[#60A5FA] border border-blue-500/30",
};

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

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.12 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {events.map((event) => (
            <motion.div
              key={event.title}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative rounded-2xl p-6 bg-[#0f0f2e] cursor-default transition-all duration-300 overflow-hidden"
              style={{
                border: event.color === "blue"
                  ? "1px solid rgba(59,130,246,0.25)"
                  : "1px solid rgba(124,58,237,0.25)",
              }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{
                  boxShadow: event.color === "blue"
                    ? "0 0 35px rgba(59,130,246,0.25), inset 0 0 20px rgba(59,130,246,0.05)"
                    : "0 0 35px rgba(124,58,237,0.25), inset 0 0 20px rgba(124,58,237,0.05)",
                  border: event.color === "blue"
                    ? "1px solid rgba(59,130,246,0.5)"
                    : "1px solid rgba(124,58,237,0.5)",
                }}
                aria-hidden="true"
              />

              <div className="relative z-10">
                {/* Date badge */}
                <div
                  className="inline-flex flex-col items-center justify-center w-14 h-14 rounded-xl mb-5 font-[family-name:var(--font-syne)]"
                  style={{
                    background: event.color === "blue"
                      ? "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(96,165,250,0.1))"
                      : "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(167,139,250,0.1))",
                    border: event.color === "blue"
                      ? "1px solid rgba(59,130,246,0.3)"
                      : "1px solid rgba(124,58,237,0.3)",
                  }}
                >
                  <span className="text-xl font-extrabold text-white leading-none">{event.day}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-white/50">{event.month}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 font-[family-name:var(--font-syne)]">
                  {event.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-5">
                  {event.description}
                </p>

                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-1.5 text-white/40 text-xs">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {event.location}
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryStyles[event.category]}`}>
                    {event.category}
                  </span>
                </div>
              </div>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: event.color === "blue"
                    ? "linear-gradient(90deg, #3B82F6, #60A5FA)"
                    : "linear-gradient(90deg, #7C3AED, #A78BFA)",
                }}
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 rounded-xl font-bold text-white text-sm tracking-wide font-[family-name:var(--font-syne)] border border-white/15 bg-white/5 hover:bg-white/10 transition-all duration-200"
          >
            Voir tous les événements
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
