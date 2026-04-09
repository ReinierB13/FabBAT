import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Col 1 — Brand + contact */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="FAB Industrie Tertiaire"
                width={150}
                height={50}
                className="invert mix-blend-screen h-12 w-auto"
              />
            </Link>
            <p className="text-white/60 text-sm mb-4 leading-relaxed">
              Entreprise BTP spécialisée en industrie tertiaire, bâtiment et
              travaux publics. Basée en PACA, intervenant sur toute la région.
            </p>
            <address className="not-italic text-sm space-y-1">
              <p>11 Pôle d&apos;Activité Crau Durance</p>
              <p>13670 Saint-Andiol</p>
              <p className="mt-2">
                <a
                  href="tel:0676744548"
                  className="text-accent-light hover:text-white transition-colors"
                >
                  06 76 74 45 48
                </a>
              </p>
              <p>
                <a
                  href="mailto:fab.itertiaire@gmail.com"
                  className="text-accent-light hover:text-white transition-colors"
                >
                  fab.itertiaire@gmail.com
                </a>
              </p>
            </address>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <h3 className="font-heading text-white font-bold text-lg mb-4 uppercase tracking-wide">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Legal */}
          <div>
            <h3 className="font-heading text-white font-bold text-lg mb-4 uppercase tracking-wide">
              Informations légales
            </h3>
            <dl className="space-y-2 text-sm text-white/60">
              <div>
                <dt className="font-semibold text-white/80">Raison sociale</dt>
                <dd>FAB Industrie Tertiaire</dd>
              </div>
              <div>
                <dt className="font-semibold text-white/80">Gérant</dt>
                <dd>Fabien LLOPIS</dd>
              </div>
              <div>
                <dt className="font-semibold text-white/80">SIRET</dt>
                <dd>802 744 755 00038</dd>
              </div>
              <div>
                <dt className="font-semibold text-white/80">Code APE</dt>
                <dd>4339Z — Autres travaux de finition</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-white/40 text-xs">
          © {new Date().getFullYear()} FAB Industrie Tertiaire. SIRET 802 744 755 00038.
          Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
