import type { Metadata } from "next";
import { Syne, DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "La Table Des Loups — Association de Nomeny",
  description:
    "La Table Des Loups, association de quartier à Nomeny (54610). Solidarité, écologie et sport. Rejoignez-nous !",
  keywords: ["La Table Des Loups", "TDL", "association Nomeny", "54610"],
  verification: {
    google: "p4aJP5Ekm4aDuraPpWSOO-qFBRaw8Sbxy5GSHkW4-ZY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${syne.variable} ${dmSans.variable} ${playfair.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
