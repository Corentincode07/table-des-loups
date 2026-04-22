"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { navLinks } from "@/lib/data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ease-out ${
        scrolled ? "top-3 left-3 right-3" : "top-0 left-0 right-0"
      }`}
      aria-label="Navigation principale"
    >
      <div
        className={`relative flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "mx-auto max-w-5xl rounded-2xl px-5 h-14"
            : "w-full pl-0 pr-6 h-16"
        }`}
        style={
          scrolled
            ? {
                background: "rgba(7, 7, 20, 0.88)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow:
                  "0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03), inset 0 1px 0 rgba(255,255,255,0.04)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
              }
            : {}
        }
      >
        {/* Logo */}
        <a
          href="#accueil"
          className="flex items-center gap-2.5 group cursor-pointer ml-0"
          aria-label="Accueil La Table Des Loups"
        >
          <div
            className={`relative flex-shrink-0 transition-all duration-300 ${
              scrolled ? "w-[50px] h-[50px]" : "w-[50px] h-[50px]"
            }`}
          >
            <Image
              src="/logo.png"
              fill
              alt=""
              style={{ objectFit: "contain", mixBlendMode: "screen" }}
              aria-hidden="true"
            />
          </div>
          <span
            className={`font-extrabold text-white/85 font-[family-name:var(--font-syne)] tracking-tight transition-all duration-300 ${
              scrolled ? "text-sm" : "text-base"
            }`}
          >
            La Table Des Loups
          </span>
        </a>

        {/* Desktop nav — centered absolutely */}
        <nav
          className="hidden md:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2"
          aria-label="Liens principaux"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative px-4 py-2 rounded-xl text-sm text-white/50 hover:text-white/90 transition-all duration-200 font-medium group cursor-pointer"
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/5 transition-colors duration-200" />
            </a>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#rejoindre"
            className="hidden md:flex items-center gap-1.5 px-5 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:brightness-110 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #3B82F6, #7C3AED)",
              boxShadow:
                "0 0 20px rgba(59,130,246,0.2), 0 0 40px rgba(124,58,237,0.08), inset 0 1px 0 rgba(255,255,255,0.12)",
            }}
          >
            Adhérer — 20€
          </a>

          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl text-white/60 hover:text-white hover:bg-white/8 transition-all duration-200 cursor-pointer"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="currentColor"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path d="M2.293 2.293a1 1 0 011.414 0L9 7.586l5.293-5.293a1 1 0 111.414 1.414L10.414 9l5.293 5.293a1 1 0 01-1.414 1.414L9 10.414l-5.293 5.293a1 1 0 01-1.414-1.414L7.586 9 2.293 3.707a1 1 0 010-1.414z" />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 3.5a1 1 0 011-1h14a1 1 0 010 2H2a1 1 0 01-1-1zm0 5a1 1 0 011-1h14a1 1 0 010 2H2a1 1 0 01-1-1zm1 4a1 1 0 000 2h14a1 1 0 000-2H2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="md:hidden mt-2 mx-3 rounded-2xl overflow-hidden"
            style={{
              background: "rgba(7, 7, 20, 0.96)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              boxShadow: "0 12px 48px rgba(0,0,0,0.5)",
            }}
          >
            <nav className="px-4 py-4 flex flex-col gap-1" aria-label="Menu mobile">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm text-white/65 hover:text-white hover:bg-white/5 transition-all duration-200 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#rejoindre"
                onClick={() => setMenuOpen(false)}
                className="mt-2 px-4 py-3.5 rounded-xl text-sm font-bold text-white text-center cursor-pointer transition-all duration-200 hover:brightness-110"
                style={{ background: "linear-gradient(135deg, #3B82F6, #7C3AED)" }}
              >
                Adhérer — 20€/an
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
