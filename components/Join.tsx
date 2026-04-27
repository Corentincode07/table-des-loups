"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { membershipBenefits, siteConfig } from "@/lib/data";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const CheckIcon = () => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
    <path
      d="M1.5 5.5l3 3 5-5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type Errors = { nom?: string; prenom?: string; email?: string };

function validate(form: {
  nom: string;
  prenom: string;
  email: string;
  message: string;
}): Errors {
  const errors: Errors = {};
  if (!form.nom.trim()) errors.nom = "Veuillez renseigner votre nom";
  if (!form.prenom.trim()) errors.prenom = "Veuillez renseigner votre prénom";
  if (!form.email.trim() || !form.email.includes("@") || !form.email.includes("."))
    errors.email = "Veuillez renseigner une adresse e-mail valide";
  return errors;
}

export default function Join() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ nom: "", prenom: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof Errors]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1300));
    setStatus("sent");
  };

  return (
    <section
      id="join"
      className="relative py-16 md:py-32 px-4 md:px-6 overflow-hidden"
      style={{ background: "#0C0C20" }}
      aria-labelledby="join-heading"
    >
      {/* Section divider */}
      <div className="absolute top-0 inset-x-0 section-divider" aria-hidden="true" />

      {/* Background glows */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[180px] opacity-[0.1] pointer-events-none animate-glow-pulse"
        style={{ background: "radial-gradient(circle, #3B82F6, transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[160px] opacity-[0.08] pointer-events-none animate-glow-pulse"
        style={{
          background: "radial-gradient(circle, #7C3AED, transparent)",
          animationDelay: "2s",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[11px] font-semibold tracking-[0.3em] uppercase text-[#60A5FA] mb-5 font-[family-name:var(--font-syne)]">
            Rejoignez-nous
          </span>
          <h2
            id="join-heading"
            className="text-4xl md:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)] leading-[1.1]"
          >
            Nous rejoindre
          </h2>
          <p className="text-white/50 text-base max-w-md mx-auto">
            Cotisation une seule fois :{" "}
            <span className="text-[#60A5FA] font-bold">20€</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* ── Benefits ── */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-lg font-bold text-white mb-8 font-[family-name:var(--font-syne)]"
            >
              Ce que vous gagnez
            </motion.h3>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={containerVariants}
              className="space-y-3"
            >
              {membershipBenefits.map((benefit, i) => (
                <motion.div
                  key={benefit}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-4 rounded-xl transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div
                    className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style={{
                      background: i % 2 === 0
                        ? "linear-gradient(135deg, #3B82F6, #60A5FA)"
                        : "linear-gradient(135deg, #7C3AED, #A78BFA)",
                    }}
                    aria-hidden="true"
                  >
                    <CheckIcon />
                  </div>
                  <p className="text-white/65 text-sm leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Price callout */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 p-6 rounded-2xl flex items-center gap-5"
              style={{
                background:
                  "linear-gradient(135deg, rgba(59,130,246,0.07), rgba(124,58,237,0.07))",
                border: "1px solid rgba(96,165,250,0.15)",
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                style={{
                  background: "linear-gradient(135deg, #3B82F6, #7C3AED)",
                  boxShadow: "0 8px 32px rgba(59,130,246,0.3)",
                }}
              >
                <span className="text-white font-extrabold text-lg font-[family-name:var(--font-syne)]">
                  20€
                </span>
              </div>
              <div>
                <p className="text-white font-bold font-[family-name:var(--font-syne)] text-sm">
                  Cotisation une seule fois
                </p>
                <p className="text-white/45 text-xs mt-0.5">
                  Accès à toutes les activités de l'association
                </p>
              </div>
            </motion.div>
          </div>

          {/* ── Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative p-8 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 0 60px rgba(59,130,246,0.06)",
            }}
          >
            {/* Top gradient accent */}
            <div
              className="absolute top-0 inset-x-0 h-px rounded-t-2xl"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(59,130,246,0.5), rgba(124,58,237,0.5), transparent)",
              }}
              aria-hidden="true"
            />

            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-center py-12"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{
                    background: "linear-gradient(135deg, #3B82F6, #7C3AED)",
                    boxShadow: "0 8px 32px rgba(59,130,246,0.35)",
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                    <path
                      d="M5 14l7 7 11-11"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-[family-name:var(--font-syne)]">
                  Message envoyé !
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  On reviendra vers vous très bientôt.
                  <br />
                  Bienvenue dans la meute.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(["nom", "prenom"] as const).map((field) => (
                    <div key={field}>
                      <label
                        htmlFor={field}
                        className="block text-[11px] font-semibold text-white/40 uppercase tracking-widest mb-2 font-[family-name:var(--font-syne)]"
                      >
                        {field === "nom" ? "Nom" : "Prénom"}
                      </label>
                      <input
                        id={field}
                        name={field}
                        type="text"
                        value={form[field]}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl text-sm input-premium ${
                          errors[field] ? "error" : ""
                        }`}
                        placeholder={field === "nom" ? "Dupont" : "Jean"}
                      />
                      {errors[field] && (
                        <p className="mt-1.5 text-xs text-red-400/90">{errors[field]}</p>
                      )}
                    </div>
                  ))}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[11px] font-semibold text-white/40 uppercase tracking-widest mb-2 font-[family-name:var(--font-syne)]"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl text-sm input-premium ${
                      errors.email ? "error" : ""
                    }`}
                    placeholder="jean@exemple.fr"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400/90">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[11px] font-semibold text-white/40 uppercase tracking-widest mb-2 font-[family-name:var(--font-syne)]"
                  >
                    Message{" "}
                    <span className="text-white/25 normal-case tracking-normal font-normal">
                      (optionnel)
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm input-premium resize-none"
                    placeholder="Parlez-nous de vous, de vos motivations..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full py-4 rounded-xl font-bold text-white text-sm tracking-wide transition-all duration-300 disabled:opacity-70 overflow-hidden cursor-pointer font-[family-name:var(--font-syne)]"
                  style={{
                    background: "linear-gradient(135deg, #3B82F6, #7C3AED)",
                    boxShadow: "0 0 30px rgba(59,130,246,0.3), inset 0 1px 0 rgba(255,255,255,0.12)",
                  }}
                >
                  {status === "sending" ? (
                    <span className="flex items-center justify-center gap-2.5">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 0.75, ease: "linear" }}
                        className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        aria-hidden="true"
                      />
                      Envoi en cours…
                    </span>
                  ) : (
                    <>
                      <span className="relative z-10">Envoyer ma candidature</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
