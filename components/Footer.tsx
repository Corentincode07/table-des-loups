import Image from "next/image";
import { navLinks, siteConfig } from "@/lib/data";

const InstagramIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="3" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

const TikTokIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.79a8.18 8.18 0 004.78 1.52V6.86a4.85 4.85 0 01-1.01-.17z" />
  </svg>
);

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/latabledesloups_",
    icon: InstagramIcon,
    hoverColor: "#E1306C",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61566081459260",
    icon: FacebookIcon,
    hoverColor: "#1877F2",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@latabledesloups_",
    icon: TikTokIcon,
    hoverColor: "#ffffff",
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#030308" }} aria-label="Pied de page">
      {/* Top gradient divider */}
      <div className="section-divider" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/logo.png"
                  fill
                  alt="Logo La Table Des Loups"
                  style={{ objectFit: "contain", mixBlendMode: "screen" }}
                />
              </div>
              <p className="font-extrabold text-white/85 text-base leading-tight font-[family-name:var(--font-syne)] tracking-tight">
                La Table Des Loups
              </p>
            </div>
            {/* Social icons */}
            <p className="text-white/28 text-xl font-semibold uppercase tracking-[0.25em] mb-4 mt-2 font-[family-name:var(--font-syne)]">
              Suivez-nous
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map(({ label, href, icon: Icon, hoverColor }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group rounded-xl flex items-center justify-center p-3 text-white/40 transition-all duration-200 cursor-pointer"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  aria-label={label}
                >
                  <span
                    className="transition-colors duration-200 group-hover:text-white w-8 h-8 flex items-center justify-center"
                    style={{ color: "inherit" }}
                  >
                    <Icon />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Navigation du pied de page">
            <p className="text-white/28 text-[10px] font-semibold uppercase tracking-[0.25em] mb-6 font-[family-name:var(--font-syne)]">
              Navigation
            </p>
            <ul className="space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm hover:text-white/85 transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Association info */}
          <div>
            <p className="text-white/28 text-[10px] font-semibold uppercase tracking-[0.25em] mb-6 font-[family-name:var(--font-syne)]">
              Association
            </p>
            <div className="space-y-3.5">
              {[
                { label: "Statut", value: siteConfig.loi },
                { label: "Ville", value: siteConfig.location },
                { label: "Cotisation", value: "20€ — une seule fois" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-white/28 text-xs mb-0.5">{label}</p>
                  <p className="text-white/55 text-sm">{value}</p>
                </div>
              ))}
            </div>

            <a
              href="#rejoindre"
              className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-105 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #3B82F6, #7C3AED)",
                boxShadow: "0 0 20px rgba(59,130,246,0.2)",
              }}
            >
              Adhérer — 20€
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/22 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p>{siteConfig.loi} — {siteConfig.location}</p>
          <p>© {new Date().getFullYear()} La Table Des Loups. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
