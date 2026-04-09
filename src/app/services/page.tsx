import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import { services } from "@/lib/services";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Découvrez les services de FAB Industrie Tertiaire : aménagement tertiaire, construction bâtiment et travaux publics en région PACA.",
};

const serviceImages = {
  "industrie-tertiaire":
    "https://images.unsplash.com/photo-1497366216548-37526078f069?w=800&q=80&auto=format&fit=crop",
  batiment:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format&fit=crop",
  "travaux-publics":
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80&auto=format&fit=crop",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Ce que nous faisons"
            title="Nos services"
            subtitle="FAB Industrie Tertiaire intervient sur trois grands domaines d'activité pour répondre à tous vos besoins en matière de construction et d'aménagement."
            light
          />
        </div>
      </section>

      {/* Services detail */}
      <div className="bg-white">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          const imgSrc =
            serviceImages[service.slug as keyof typeof serviceImages];
          return (
            <section
              key={service.slug}
              id={service.slug}
              className={`py-20 px-4 ${isEven ? "bg-white" : "bg-surface"}`}
            >
              <div className="max-w-7xl mx-auto">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg ${
                      !isEven ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={imgSrc}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  {/* Content */}
                  <div className={!isEven ? "lg:order-1" : ""}>
                    <SectionHeading
                      eyebrow={service.tagline}
                      title={service.title}
                    />
                    <p className="text-navy/70 leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-3 text-navy/80"
                        >
                          <span className="mt-1.5 w-2 h-2 bg-accent rounded-full shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <CTABanner />
    </>
  );
}
