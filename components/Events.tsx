"use client";

import { motion } from "framer-motion";

const events = [
  {
    emoji: "🍲",
    title: "Couscousquiz",
    description:
      "Un quiz géant autour d'un couscous convivial ! Testez vos connaissances en équipe dans une ambiance chaleureuse et gourmande.",
    category: "Événement",
    badgeColor: "#F59E0B",
    badgeBg: "rgba(245,158,11,0.12)",
    glow: "rgba(245,158,11,0.18)",
    accent: "#F59E0B",
    delay: 0.1,
  },
  {
    emoji: "🎨",
    title: "Concours de Dessin",
    description:
      "Exprimez votre créativité ! Ouvert à tous les niveaux, ce concours met à l'honneur les talents artistiques de Nomeny.",
    category: "Culture",
    badgeColor: "#60A5FA",
    badgeBg: "rgba(96,165,250,0.12)",
    glow: "rgba(59,130,246,0.18)",
    accent: "#3B82F6",
    delay: 0.2,
  },
  {
    emoji: "🏆",
    title: "Wolfycup",
    description:
      "La compétition sportive de La Table Des Loups ! Plusieurs épreuves, une ambiance de feu et l'esprit d'équipe au rendez-vous.",
    category: "Sport",
    badgeColor: "#A78BFA",
    badgeBg: "rgba(167,139,250,0.12)",
    glow: "rgba(124,58,237,0.18)",
    accent: "#7C3AED",
    delay: 0.3,
  },
];

export default function Events() {
  return (
    <section
      id="events"
      className="relative py-16 md:py-32 px-4 md:px-6 overflow-hidden"
      style={{ background: "#0C0C20" }}
      aria-labelledby="events-heading"
    >
      {/* Section divider */}
      <div className="absolute top-0 inset-x-0 section-divider" aria-hidden="true" />

      {/* Background glows */}
      <div
        className="absolute top-0 right-1/4 w-[550px] h-[550px] rounded-full blur-[180px] opacity-[0.08] pointer-events-none"
        style={{ background: "radial-gradient(circle, #7C3AED, transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-[450px] h-[450px] rounded-full blur-[160px] opacity-[0.06] pointer-events-none"
        style={{ background: "radial-gradient(circle, #3B82F6, transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[11px] font-semibold tracking-[0.3em] uppercase text-[#60A5FA] mb-5 font-[family-name:var(--font-syne)]">
            Nos prochains rendez-vous
          </span>
          <h2
            id="events-heading"
            className="text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-playfair)] leading-[1.1]"
          >
            Événements à venir
          </h2>
        </motion.div>

        {/* Event cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {events.map((event) => (
            <motion.article
              key={event.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.55, delay: event.delay, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-2xl p-7 flex flex-col gap-5 relative overflow-hidden cursor-default"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              }}
              onHoverStart={(e) => {
                const el = e.target as HTMLElement;
                el.closest("article")!.style.borderColor = `${event.accent}55`;
                el.closest("article")!.style.boxShadow = `0 0 40px ${event.glow}, 0 0 80px ${event.glow}`;
              }}
              onHoverEnd={(e) => {
                const el = e.target as HTMLElement;
                const article = el.closest("article");
                if (article) {
                  article.style.borderColor = "rgba(255,255,255,0.08)";
                  article.style.boxShadow = "none";
                }
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 inset-x-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent, ${event.accent}99, transparent)`,
                }}
                aria-hidden="true"
              />

              {/* Emoji icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{
                  background: event.badgeBg,
                  border: `1px solid ${event.badgeColor}33`,
                }}
              >
                {event.emoji}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-lg font-bold text-white font-[family-name:var(--font-syne)] leading-snug">
                  {event.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>

              {/* Category badge */}
              <div>
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold font-[family-name:var(--font-syne)]"
                  style={{
                    color: event.badgeColor,
                    background: event.badgeBg,
                    border: `1px solid ${event.badgeColor}33`,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: event.badgeColor }}
                    aria-hidden="true"
                  />
                  {event.category}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
