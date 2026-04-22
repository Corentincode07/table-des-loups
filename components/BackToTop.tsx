"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ArrowUpIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 19V5" />
    <path d="M5 12l7-7 7 7" />
  </svg>
);

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          initial={{ opacity: 0, scale: 0.7, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 16 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center text-white cursor-pointer transition-all duration-200 hover:scale-110 hover:brightness-110"
          style={{
            background: "linear-gradient(135deg, #3B82F6, #7C3AED)",
            boxShadow: "0 0 20px rgba(59,130,246,0.35), 0 0 40px rgba(124,58,237,0.15), inset 0 1px 0 rgba(255,255,255,0.12)",
          }}
          aria-label="Retour en haut de page"
        >
          <ArrowUpIcon />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
