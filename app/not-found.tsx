"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function NotFound() {
  return (
    <main
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
      style={{ background: "#070714" }}
    >
      {/* Background aurora */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-40 -left-40 w-[800px] h-[800px] rounded-full blur-[180px] opacity-20"
          style={{ background: "radial-gradient(ellipse, #1D4ED8 0%, #3B82F6 35%, transparent 65%)" }}
        />
        <div
          className="absolute -bottom-40 -right-20 w-[700px] h-[700px] rounded-full blur-[180px] opacity-15"
          style={{ background: "radial-gradient(ellipse, #4C1D95 0%, #7C3AED 35%, transparent 65%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(rgba(148,168,255,0.9) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center gap-5 max-w-lg"
      >
        {/* Logo */}
        <motion.div variants={fadeUp}>
          <div className="relative mx-auto" style={{ width: 90, height: 90 }}>
            <Image
              src="/logo.png"
              fill
              alt="Logo La Table Des Loups"
              style={{ objectFit: "contain", mixBlendMode: "screen" }}
              priority
            />
          </div>
        </motion.div>

        {/* 404 */}
        <motion.div variants={fadeUp}>
          <span
            className="font-extrabold leading-none font-[family-name:var(--font-syne)] select-none"
            style={{
              fontSize: "clamp(6rem, 20vw, 10rem)",
              background: "linear-gradient(135deg, #3B82F6 0%, #a78bfa 50%, #ffffff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            404
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-playfair)]"
        >
          Oups, ce loup s&apos;est perdu&nbsp;!
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="text-white/45 text-sm md:text-base leading-relaxed"
        >
          La page que vous cherchez n&apos;existe pas ou a été déplacée.
        </motion.p>

        {/* CTA */}
        <motion.div variants={fadeUp}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 mt-2 px-7 py-3 rounded-2xl font-semibold text-white text-sm transition-all duration-300 hover:scale-105 hover:brightness-110 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #3B82F6 0%, #5B21B6 100%)",
              boxShadow: "0 0 30px rgba(59,130,246,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            Retourner à l&apos;accueil
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
