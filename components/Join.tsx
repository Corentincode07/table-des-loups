"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { membershipBenefits, siteConfig } from "@/lib/data";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

type Errors = { nom?: string; prenom?: string; email?: string };

function validate(form: { nom: string; prenom: string; email: string; message: string }): Errors {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  return (
    <section
      id="rejoindre"
      className="relative py-28 px-6 bg-[#0F0F1A] overflow-hidden"
      aria-labelledby="join-heading"
    >
      {/* Background glows */}
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[160px] opacity-20 pointer-events-none animate-glow-pulse"
        style={{ background: "radial-gradient(circle, #3B82F6, transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[140px] opacity-15 pointer-events-none animate-glow-pulse"
        style={{ background: "radial-gradient(circle, #7C3AED, transparent)", animationDelay: "2s" }}
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
            Rejoignez-nous
          </span>
          <h2
            id="join-heading"
            className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-[family-name:var(--font-syne)]"
          >
            Nous rejoindre
          </h2>
          <p className="text-white/60 text-lg max-w-lg mx-auto">
            Cotisation annuelle :{" "}
            <span className="text-[#60A5FA] font-bold">{siteConfig.cotisation}</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Benefits */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-6 font-[family-name:var(--font-syne)]">
              Ce que vous gagnez
            </h3>
            {membershipBenefits.map((benefit) => (
              <motion.div
                key={benefit}
                variants={itemVariants}
                className="flex items-start gap-4 p-4 rounded-xl glass-card-dark"
              >
                <div
                  className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                  style={{ background: "linear-gradient(135deg, #3B82F6, #7C3AED)" }}
                  aria-hidden="true"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative p-8 rounded-2xl glass-card-dark"
            style={{
              border: "1px solid rgba(96,165,250,0.2)",
              boxShadow: "0 0 40px rgba(59,130,246,0.1)",
            }}
          >
            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ background: "linear-gradient(135deg, #3B82F6, #7C3AED)" }}
                >
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                    <path d="M5 14l7 7 11-11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-[family-name:var(--font-syne)]">
                  Message envoyé !
                </h3>
                <p className="text-white/60">
                  On reviendra vers vous très bientôt. Bienvenue dans la meute 🐺
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-2 gap-4">
                  {(["nom", "prenom"] as const).map((field) => (
                    <div key={field}>
                      <label
                        htmlFor={field}
                        className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2"
                      >
                        {field === "nom" ? "Nom" : "Prénom"}
                      </label>
                      <input
                        id={field}
                        name={field}
                        type="text"
                        value={form[field]}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-white/25 text-sm focus:outline-none focus:bg-white/8 transition-all duration-200 ${errors[field] ? "border-red-500/70 focus:border-red-500" : "border-white/10 focus:border-[#60A5FA]/60"}`}
                        placeholder={field === "nom" ? "Dupont" : "Jean"}
                      />
                      {errors[field] && (
                        <p className="mt-1.5 text-xs text-red-400">{errors[field]}</p>
                      )}
                    </div>
                  ))}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-white/25 text-sm focus:outline-none transition-all duration-200 ${errors.email ? "border-red-500/70 focus:border-red-500" : "border-white/10 focus:border-[#60A5FA]/60"}`}
                    placeholder="jean@exemple.fr"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#60A5FA]/60 transition-all duration-200 resize-none"
                    placeholder="Parlez-nous de vous, de vos motivations..."
                  />
                  <p className="mt-1.5 text-xs text-white/40">(optionnel)</p>
                </div>

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl font-bold text-white text-sm tracking-wide transition-all duration-300 disabled:opacity-70 font-[family-name:var(--font-syne)]"
                  style={{
                    background:
                      status === "sending"
                        ? "linear-gradient(135deg, #3B82F6, #7C3AED)"
                        : "linear-gradient(135deg, #3B82F6, #7C3AED)",
                    boxShadow: "0 0 25px rgba(59,130,246,0.4)",
                  }}
                >
                  {status === "sending" ? (
                    <span className="flex items-center justify-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                        className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        aria-hidden="true"
                      />
                      Envoi en cours…
                    </span>
                  ) : (
                    "Envoyer ma candidature"
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
