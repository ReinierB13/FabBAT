import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}

export default function HeroSection({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  ctaLabel,
  ctaHref,
  secondaryLabel,
  secondaryHref,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
        {/* Large logo */}
        <div className="mb-8">
          <Image
            src="/logo_transparent.png"
            alt="FAB Industrie Tertiaire"
            width={420}
            height={140}
            className="invert w-64 sm:w-80 md:w-[420px] h-auto"
            priority
          />
        </div>
        <span className="section-label text-accent-light">
          Entreprise BTP — Bouches-du-Rhône
        </span>
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6 max-w-3xl">
          {title}
        </h1>
        <p className="text-white/80 text-xl max-w-2xl mb-10 leading-relaxed">
          {subtitle}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href={ctaHref} className="btn-primary text-base">
            {ctaLabel}
          </Link>
          <Link href={secondaryHref} className="btn-outline text-base">
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
