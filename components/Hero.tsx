"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.25 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section
      id="accueil"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-8"
      style={{ background: "#070714" }}
      aria-label="Accueil"
    >
      {/* ── Parallax background ── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Aurora top-left */}
        <div
          className="absolute -top-40 -left-40 w-[900px] h-[900px] rounded-full blur-[180px] opacity-25 animate-glow-pulse"
          style={{
            background:
              "radial-gradient(ellipse, #1D4ED8 0%, #3B82F6 35%, transparent 65%)",
          }}
        />
        {/* Aurora bottom-right */}
        <div
          className="absolute -bottom-40 -right-20 w-[800px] h-[800px] rounded-full blur-[180px] opacity-20 animate-glow-pulse"
          style={{
            background:
              "radial-gradient(ellipse, #4C1D95 0%, #7C3AED 35%, transparent 65%)",
            animationDelay: "2.5s",
          }}
        />
        {/* Subtle center accent */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[200px] opacity-8"
          style={{
            background: "radial-gradient(circle, #60A5FA, transparent)",
          }}
        />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.032]"
          style={{
            backgroundImage: `radial-gradient(rgba(148,168,255,0.9) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Noise grain */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Horizontal gradient line accent */}
        <div
          className="absolute top-[55%] left-0 right-0 h-px opacity-20"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(96,165,250,0.6), rgba(167,139,250,0.6), transparent)",
          }}
        />
      </motion.div>

      {/* ── Main content ── */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto w-full"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-3"
        >
          {/* Logo */}
          <motion.div variants={itemVariants}>
            <div className="relative mx-auto" style={{ width: 200, height: 200 }}>
              <Image
                src="/logo.png"
                fill
                alt="Logo La Table Des Loups"
                style={{ objectFit: "contain", mixBlendMode: "screen" }}
                priority
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.div variants={itemVariants}>
            <h1
              className="text-gradient-hero font-[family-name:var(--font-syne)] font-extrabold tracking-tight leading-[0.9]"
              style={{ fontSize: "clamp(4rem, 10vw, 7rem)" }}
            >
              La Table Des Loups
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-white/40 text-xs tracking-[0.35em] uppercase font-[family-name:var(--font-syne)]"
          >
            Solidarité · Écologie · Sport
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-white/58 text-sm md:text-base max-w-md leading-relaxed"
          >
            Une association de quartier née autour d'une table partagée.
            Ensemble, nous construisons un Nomeny plus solidaire, plus vert et plus vivant.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#rejoindre"
              className="group relative px-7 py-2.5 rounded-2xl font-semibold text-white text-sm overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #3B82F6 0%, #5B21B6 100%)",
                boxShadow: "0 0 30px rgba(59,130,246,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
            >
              <span className="relative z-10 tracking-wide">Nous rejoindre</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/12 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </a>
            <a
              href="#activites"
              className="px-7 py-2.5 rounded-2xl font-semibold text-white/65 text-sm border border-white/10 hover:border-white/22 hover:text-white/88 transition-all duration-300 cursor-pointer tracking-wide"
              style={{ backdropFilter: "blur(8px)", background: "rgba(255,255,255,0.025)" }}
            >
              Nos activités
            </a>
          </motion.div>

        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        aria-hidden="true"
      >
        <span className="text-white/22 text-[9px] tracking-[0.35em] uppercase font-[family-name:var(--font-syne)]">
          Défiler
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/25 to-transparent"
        />
      </motion.div>
    </section>
  );
}
