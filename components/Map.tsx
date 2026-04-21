export default function Map() {
  return (
    <section
      id="carte"
      className="py-20 px-6 bg-[#0F0F1A]"
      aria-labelledby="map-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block text-sm font-semibold tracking-[0.25em] uppercase text-[#60A5FA] mb-4 font-[family-name:var(--font-syne)]">
            Localisation
          </span>
          <h2
            id="map-heading"
            className="text-4xl md:text-5xl font-extrabold text-white mb-3 font-[family-name:var(--font-syne)]"
          >
            Nous trouver
          </h2>
          <p className="text-white/60 text-lg">Nomeny, 54610 — Meurthe-et-Moselle</p>
        </div>
        <div className="rounded-2xl overflow-hidden border border-white/10" style={{ boxShadow: "0 0 40px rgba(59,130,246,0.1)" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2636.5!2d6.2333!3d48.8833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4794c0b0b0b0b0b0%3A0x0!2sNomeny%2C+France!5e0!3m2!1sfr!2sfr!4v1"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Carte Nomeny"
          />
        </div>
      </div>
    </section>
  );
}
