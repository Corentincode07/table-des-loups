"use client";

import { useState, useEffect } from "react";
import { navLinks } from "@/lib/data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

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

        {/* Desktop nav — absolutely centered in navbar */}
        <nav
          className="absolute left-1/2 -translate-x-1/2 flex items-center gap-0.5"
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

        {/* CTA */}
        <a
          href="#rejoindre"
          className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:brightness-110 cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #3B82F6, #7C3AED)",
            boxShadow:
              "0 0 20px rgba(59,130,246,0.2), 0 0 40px rgba(124,58,237,0.08), inset 0 1px 0 rgba(255,255,255,0.12)",
          }}
        >
          Adhérer — 20€
        </a>
      </div>
    </header>
  );
}
