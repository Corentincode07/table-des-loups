"use client";

import { useState, useRef, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Normalise: lowercase + strip diacritics ── */
function norm(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim();
}

/* ── Keyword → section mapping ── */
const SECTIONS = [
  {
    id: "#activites",
    label: "Activités",
    keywords: [
      "sport", "activite", "activites", "tournoi", "randonnee", "peche",
      "echecs", "olympiade", "fifa", "mario", "kart", "jeu", "jeux",
      "competition", "match", "foot", "football",
    ],
  },
  {
    id: "#equipe",
    label: "Notre Équipe",
    keywords: [
      "equipe", "membre", "membres", "pierre", "corentin", "elio",
      "valentine", "anouk", "philemon", "matthieu", "president",
      "tresorier", "secretaire", "coach", "benevole", "bureau",
    ],
  },
  {
    id: "#rejoindre",
    label: "Nous rejoindre",
    keywords: [
      "rejoindre", "adherer", "adhesion", "cotisation", "inscription",
      "rejoins", "formulaire", "contact", "20", "adherer", "devenir",
    ],
  },
  {
    id: "#events",
    label: "Événements",
    keywords: [
      "evenement", "evenements", "event", "events", "concert", "poker",
      "soiree", "tartiflette", "loto", "dictee", "calendrier", "agenda",
      "prochain", "prochains", "fete", "animation",
    ],
  },
  {
    id: "#qui-sommes-nous",
    label: "Qui sommes-nous",
    keywords: [
      "carte", "nomeny", "localisation", "trouver", "solidarite",
      "ecologie", "histoire", "qui", "sommes", "association", "valeurs",
      "origine", "mission", "a propos", "propos",
    ],
  },
];

const HINTS = ["sport", "équipe", "adhérer", "événements", "Nomeny"];

function findSection(raw: string) {
  const q = norm(raw);
  if (!q) return null;
  for (const s of SECTIONS) {
    for (const kw of s.keywords) {
      if (q.includes(norm(kw)) || norm(kw).includes(q)) return s;
    }
  }
  return null;
}

/* ── Icons ── */
const SearchIcon = ({ active }: { active: boolean }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke={active ? "#60A5FA" : "rgba(255,255,255,0.32)"}
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0 transition-colors duration-300"
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const ClearIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
    <path d="M1.293 1.293a1 1 0 011.414 0L6 4.586l3.293-3.293a1 1 0 011.414 1.414L7.414 6l3.293 3.293a1 1 0 01-1.414 1.414L6 7.414l-3.293 3.293a1 1 0 01-1.414-1.414L4.586 6 1.293 2.707a1 1 0 010-1.414z" />
  </svg>
);

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const InfoIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#F87171" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

/* ── Component ── */
export default function SearchBar() {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [match, setMatch] = useState<(typeof SECTIONS)[0] | null>(null);
  const [notFound, setNotFound] = useState(false);

  /* Resolve & scroll */
  function resolve(raw: string) {
    const found = findSection(raw);
    if (found) {
      setMatch(found);
      setNotFound(false);
      setTimeout(() => {
        document.querySelector(found.id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 160);
    } else if (raw.trim()) {
      setMatch(null);
      setNotFound(true);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setQuery(val);
    setNotFound(false);
    if (val.length >= 3) {
      const found = findSection(val);
      setMatch(found);
    } else {
      setMatch(null);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") resolve(query);
    if (e.key === "Escape") {
      setQuery("");
      setMatch(null);
      setNotFound(false);
    }
  }

  function handleHint(hint: string) {
    setQuery(hint);
    setNotFound(false);
    resolve(hint);
    inputRef.current?.focus();
  }

  function handleClear() {
    setQuery("");
    setMatch(null);
    setNotFound(false);
    inputRef.current?.focus();
  }

  /* Gradient border is visible & active when focused, dimmer when idle */
  const borderOpacity = focused ? 1 : 0.45;
  const glowOpacity  = focused ? 0.35 : 0.12;

  return (
    <div className="w-full max-w-md mx-auto" role="search">
      {/* ── Border + glow stack ── */}
      <div className="relative">
        {/* Outer soft glow */}
        <div
          className="absolute -inset-1.5 rounded-2xl blur-xl pointer-events-none transition-opacity duration-500"
          style={{
            opacity: glowOpacity,
            background:
              "linear-gradient(90deg, #1D4ED8, #3B82F6, #7C3AED, #A78BFA, #7C3AED, #3B82F6, #1D4ED8)",
            backgroundSize: "300% 100%",
            animation: "gradient-shift 4s ease infinite",
          }}
          aria-hidden="true"
        />

        {/* Animated gradient border (1px) */}
        <div
          className="absolute -inset-px rounded-2xl pointer-events-none transition-opacity duration-500"
          style={{
            opacity: borderOpacity,
            background:
              "linear-gradient(90deg, #1D4ED8, #3B82F6, #7C3AED, #A78BFA, #7C3AED, #3B82F6, #1D4ED8)",
            backgroundSize: "300% 100%",
            animation: "gradient-shift 4s ease infinite",
          }}
          aria-hidden="true"
        />

        {/* Input row */}
        <div
          className="relative flex items-center gap-3 px-5 py-3.5 rounded-2xl"
          style={{
            background: "rgba(7, 7, 20, 0.94)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          <SearchIcon active={focused || !!query} />

          <input
            ref={inputRef}
            id={inputId}
            type="search"
            value={query}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="Rechercher une section…"
            autoComplete="off"
            className="flex-1 bg-transparent text-white/88 text-sm placeholder-white/28 focus:outline-none"
            aria-label="Rechercher une section du site"
          />

          {/* Clear */}
          <AnimatePresence>
            {query && (
              <motion.button
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.15 }}
                onClick={handleClear}
                className="text-white/28 hover:text-white/60 transition-colors cursor-pointer p-0.5"
                aria-label="Effacer la recherche"
                tabIndex={-1}
              >
                <ClearIcon />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Go button */}
          <button
            onClick={() => resolve(query)}
            className="shrink-0 flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white transition-all duration-200 hover:brightness-115 active:scale-95 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #3B82F6, #7C3AED)",
              boxShadow: "0 0 14px rgba(59,130,246,0.25)",
            }}
            aria-label="Lancer la recherche"
          >
            Aller
            <ArrowIcon />
          </button>
        </div>
      </div>

      {/* ── Feedback badge ── */}
      <AnimatePresence mode="wait">
        {match && (
          <motion.div
            key="match"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mt-3 flex items-center gap-2 px-4 py-2.5 rounded-xl"
            style={{
              background: "rgba(59,130,246,0.07)",
              border: "1px solid rgba(59,130,246,0.2)",
            }}
            role="status"
            aria-live="polite"
          >
            <CheckIcon />
            <span className="text-[#93C5FD] text-xs">
              Section trouvée :{" "}
              <strong className="text-[#60A5FA]">{match.label}</strong>
            </span>
          </motion.div>
        )}

        {notFound && (
          <motion.div
            key="notfound"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mt-3 flex items-center gap-2 px-4 py-2.5 rounded-xl"
            style={{
              background: "rgba(239,68,68,0.05)",
              border: "1px solid rgba(239,68,68,0.14)",
            }}
            role="status"
            aria-live="polite"
          >
            <InfoIcon />
            <span className="text-red-400/75 text-xs">
              Aucune section trouvée pour &ldquo;{query}&rdquo;
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Hint chips ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: query ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-wrap justify-center gap-2 mt-3 pointer-events-none"
        style={{ pointerEvents: query ? "none" : "auto" }}
        aria-hidden={!!query}
      >
        {HINTS.map((hint) => (
          <button
            key={hint}
            onClick={() => handleHint(hint)}
            tabIndex={query ? -1 : 0}
            className="px-3 py-1 rounded-full text-[11px] text-white/35 hover:text-white/65 transition-all duration-200 cursor-pointer hover:border-white/15"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {hint}
          </button>
        ))}
      </motion.div>
    </div>
  );
}
