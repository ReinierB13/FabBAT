import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | FAB Industrie Tertiaire",
    default: "FAB Industrie Tertiaire — Bâtiment & Travaux Publics",
  },
  description:
    "FAB — Industrie Tertiaire, Bâtiment & TP. Entreprise de travaux de finition basée à Saint-Andiol (13670). Contactez Fabien LLOPIS pour votre devis gratuit.",
  keywords: [
    "BTP",
    "bâtiment",
    "travaux publics",
    "industrie tertiaire",
    "revêtements",
    "Saint-Andiol",
    "Bouches-du-Rhône",
    "PACA",
  ],
  openGraph: {
    siteName: "FAB Industrie Tertiaire",
    locale: "fr_FR",
    type: "website",
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
      className={`${inter.variable} ${barlowCondensed.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
