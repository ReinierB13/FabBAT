import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import { services } from "@/lib/services";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accueil",
};

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80&auto=format&fit=crop";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Votre partenaire BTP en Provence"
        subtitle="Industrie Tertiaire, Bâtiment & Travaux Publics — expertise et savoir-faire au service de vos projets en région PACA."
        imageSrc={HERO_IMAGE}
        imageAlt="Chantier de construction professionnel"
        ctaLabel="Nos services"
        ctaHref="/services"
        secondaryLabel="Nos réalisations"
        secondaryHref="/realisations"
      />

      {/* Services overview */}
      <section className="py-20 px-4 bg-surface">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Ce que nous faisons"
            title="Nos domaines d'expertise"
            subtitle="De l'aménagement intérieur aux travaux publics, FAB intervient sur tous types de chantiers avec rigueur et professionnalisme."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} showLink />
            ))}
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <SectionHeading
                eyebrow="À propos"
                title="FAB Industrie Tertiaire"
                subtitle="Une entreprise à taille humaine, dirigée par Fabien LLOPIS, spécialisée dans les travaux de finition et d'aménagement pour les professionnels et les collectivités de la région Bouches-du-Rhône."
              />
              <p className="text-navy/70 leading-relaxed mb-6">
                Basée à Saint-Andiol (13670), FAB intervient sur l&apos;ensemble de
                la région PACA pour des chantiers tertiaires, industriels,
                résidentiels et de travaux publics. Notre approche : écoute,
                qualité d&apos;exécution et respect des délais.
              </p>
              <Link href="/contact" className="btn-primary">
                Demander un devis gratuit
              </Link>
            </div>
            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "10+", label: "Années d'expérience" },
                { value: "PACA", label: "Zone d'intervention" },
                { value: "100%", label: "Satisfaction client" },
                { value: "APE 4339Z", label: "Code activité" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="bg-surface rounded-xl p-6 text-center border border-gray-100"
                >
                  <p className="font-heading text-3xl font-bold text-accent mb-1">
                    {badge.value}
                  </p>
                  <p className="text-navy/60 text-sm font-medium">{badge.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
