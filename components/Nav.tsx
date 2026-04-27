"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/lib/data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
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
              : "w-full pl-0 pr-4 h-16"
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
          {/* Brand */}
          <a
            href="#accueil"
            onClick={(e) => scrollTo(e, '#accueil')}
            className="flex items-center group cursor-pointer pl-4"
            aria-label="Accueil La Table Des Loups"
          >
            <span
              className={`font-extrabold text-white/85 font-[family-name:var(--font-syne)] tracking-tight transition-all duration-300 ${
                scrolled ? "text-sm" : "text-base"
              }`}
            >
              La Table Des Loups
            </span>
          </a>

          {/* Desktop nav — absolutely centered */}
          <nav
            className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-0.5"
            aria-label="Liens principaux"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="relative px-4 py-2 rounded-xl text-sm text-white/50 hover:text-white/90 transition-all duration-200 font-medium group cursor-pointer"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/5 transition-colors duration-200" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#join"
            onClick={(e) => scrollTo(e, '#join')}
            className="hidden md:flex items-center gap-1.5 px-5 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:brightness-110 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #3B82F6, #7C3AED)",
              boxShadow:
                "0 0 20px rgba(59,130,246,0.2), 0 0 40px rgba(124,58,237,0.08), inset 0 1px 0 rgba(255,255,255,0.12)",
            }}
          >
            Adhérer — 20€
          </a>
        </div>

        {/* Mobile toggle — fixed, independent of scroll state */}
        <button
          className="md:hidden fixed top-4 right-4 z-[60] flex items-center justify-center w-10 h-10 rounded-xl cursor-pointer text-white transition-colors duration-200"
          style={{ background: menuOpen ? "rgba(255,255,255,0.08)" : "transparent" }}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="3" y1="3" x2="17" y2="17" />
              <line x1="17" y1="3" x2="3" y2="17" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="3" y1="5" x2="17" y2="5" />
              <line x1="3" y1="10" x2="17" y2="10" />
              <line x1="3" y1="15" x2="17" y2="15" />
            </svg>
          )}
        </button>

        {/* Mobile full-screen overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden fixed inset-0 z-40 flex flex-col"
              style={{
                background: "rgba(7, 7, 20, 0.97)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
              }}
            >
              <nav className="flex flex-col items-center justify-center flex-1 gap-2" aria-label="Menu mobile">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="px-8 py-4 text-xl text-white/65 hover:text-white transition-colors duration-200 font-medium cursor-pointer font-[family-name:var(--font-syne)] min-h-[56px] flex items-center"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#join"
                  onClick={(e) => scrollTo(e, '#join')}
                  className="mt-6 px-10 py-4 rounded-2xl text-base font-semibold text-white text-center cursor-pointer min-h-[56px] flex items-center font-[family-name:var(--font-syne)] hover:scale-105 transition-transform duration-200"
                  style={{
                    background: "linear-gradient(135deg, #3B82F6, #7C3AED)",
                    boxShadow: "0 0 30px rgba(59,130,246,0.3)",
                  }}
                >
                  Adhérer — 20€
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
