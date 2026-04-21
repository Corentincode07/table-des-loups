"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";

const GeoPoly = ({
  className,
  color1,
  color2,
  size = 120,
}: {
  className?: string;
  color1: string;
  color2: string;
  size?: number;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    className={className}
    aria-hidden="true"
  >
    <polygon points="60,10 110,40 110,80 60,110 10,80 10,40" fill={color1} opacity="0.15" />
    <polygon points="60,25 95,45 95,75 60,95 25,75 25,45" fill={color2} opacity="0.1" />
    <polygon points="60,40 80,52 80,68 60,80 40,68 40,52" fill={color1} opacity="0.12" />
  </svg>
);

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="accueil"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F0F1A] pb-48"
      aria-label="Accueil"
    >
      {/* Parallax background layer */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F0F1A] via-[#0d0d22] to-[#0F0F1A]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3B82F6] rounded-full blur-[128px] opacity-20 animate-glow-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#7C3AED] rounded-full blur-[128px] opacity-15 animate-glow-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-64 h-64 bg-[#60A5FA] rounded-full blur-[100px] opacity-10 animate-glow-pulse"
          style={{ animationDelay: "1s" }}
        />

        {/* Floating geometric shapes */}
        <div className="absolute top-16 right-16 animate-float">
          <GeoPoly color1="#3B82F6" color2="#7C3AED" size={140} />
        </div>
        <div className="absolute bottom-20 left-10 animate-float-slow" style={{ animationDelay: "2s" }}>
          <GeoPoly color1="#7C3AED" color2="#60A5FA" size={100} />
        </div>
        <div className="absolute top-1/2 right-8 animate-float" style={{ animationDelay: "3s" }}>
          <GeoPoly color1="#60A5FA" color2="#3B82F6" size={80} />
        </div>
        <div className="absolute top-1/4 left-16 animate-float-slow" style={{ animationDelay: "1s" }}>
          <GeoPoly color1="#4C1D95" color2="#3B82F6" size={60} />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(96,165,250,1) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          <motion.div variants={itemVariants} className="flex justify-center mt-20">
            <Image src="/logo.png" width={500} height={500} alt="Logo La Table Des Loups" style={{ objectFit: "contain" }} className="mx-auto" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-8xl font-extrabold leading-tight tracking-tight text-gradient-hero font-[family-name:var(--font-syne)]"
          >
            La Table
            <br />
            Des Loups
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-[#60A5FA] text-lg md:text-xl font-semibold tracking-widest uppercase font-[family-name:var(--font-syne)]"
          >
            Solidarité • Écologie • Sport
            <span className="text-white/40 mx-3">—</span>
            <span className="text-white/60">Nomeny, 54610</span>
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-white/70 text-base md:text-lg max-w-xl leading-relaxed"
          >
            Une association de quartier née autour d'une table partagée. Ensemble,
            nous construisons un Nomeny plus solidaire, plus vert et plus vivant.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href="#rejoindre"
              className="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #3B82F6, #7C3AED)",
                boxShadow: "0 0 30px rgba(59,130,246,0.4), 0 0 60px rgba(124,58,237,0.2)",
              }}
            >
              <span className="relative z-10">Nous rejoindre</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#activites"
              className="px-8 py-4 rounded-xl font-semibold text-white/80 border border-white/20 hover:border-[#60A5FA]/60 hover:text-white transition-all duration-300 hover:scale-105"
              style={{ backdropFilter: "blur(8px)" }}
            >
              Nos activités
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#60A5FA] to-transparent"
        />
      </motion.div>
    </section>
  );
}
