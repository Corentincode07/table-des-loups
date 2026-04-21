"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0F0F1A]/90 backdrop-blur-xl border-b border-white/8"
          : "bg-transparent"
      }`}
      aria-label="Navigation principale"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#accueil" className="flex items-center gap-2.5 group" aria-label="La Table Des Loups — Accueil">
          <Image src="/logo.png" width={28} height={28} alt="Logo La Table Des Loups" style={{ objectFit: "contain" }} />
          <span className="font-extrabold text-white text-sm tracking-wide group-hover:text-[#60A5FA] transition-colors duration-200 font-[family-name:var(--font-syne)]">
            TDL
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Liens principaux">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/8 transition-all duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#rejoindre"
            className="ml-3 px-5 py-2 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #3B82F6, #7C3AED)",
              boxShadow: "0 0 20px rgba(59,130,246,0.3)",
            }}
          >
            Adhérer
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-white/70 hover:bg-white/10 transition-colors"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <span className="sr-only">{menuOpen ? "Fermer" : "Menu"}</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            {menuOpen ? (
              <path fillRule="evenodd" clipRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
            ) : (
              <path fillRule="evenodd" clipRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm1 4a1 1 0 100 2h12a1 1 0 100-2H4z" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-[#0F0F1A]/95 backdrop-blur-xl border-b border-white/8"
          >
            <nav className="px-6 py-4 flex flex-col gap-1" aria-label="Menu mobile">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/8 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#rejoindre"
                onClick={() => setMenuOpen(false)}
                className="mt-2 px-4 py-3 rounded-xl text-sm font-bold text-white text-center"
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
