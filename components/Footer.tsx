import Image from "next/image";
import { navLinks, siteConfig } from "@/lib/data";

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="3" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.79a8.18 8.18 0 0 0 4.78 1.52V6.86a4.85 4.85 0 0 1-1.01-.17z" />
  </svg>
);


export default function Footer() {
  return (
    <footer className="bg-[#080810] border-t border-white/5" aria-label="Pied de page">
      {/* Top divider glow */}
      <div
        className="h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.4), rgba(124,58,237,0.4), transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" width={32} height={32} alt="Logo La Table Des Loups" />
              <div>
                <p className="font-extrabold text-white text-lg leading-none font-[family-name:var(--font-syne)]">
                  La Table Des Loups
                </p>
                <p className="text-[#60A5FA] text-xs font-semibold tracking-widest mt-0.5">
                  TDL
                </p>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-[220px]">
              {siteConfig.tagline}
              <br />
              {siteConfig.location}
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Navigation du pied de page">
            <p className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-5 font-[family-name:var(--font-syne)]">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm hover:text-[#60A5FA] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div>
            <p className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-5 font-[family-name:var(--font-syne)]">
              Réseaux sociaux
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white/50 hover:text-white border border-white/10 hover:border-[#E1306C]/50 hover:bg-[#E1306C]/10 transition-all duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white/50 hover:text-white border border-white/10 hover:border-[#1877F2]/50 hover:bg-[#1877F2]/10 transition-all duration-200"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white/50 hover:text-white border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-200"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/25 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p>{siteConfig.loi} — {siteConfig.location}</p>
          <p>
            © {new Date().getFullYear()} La Table Des Loups. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
