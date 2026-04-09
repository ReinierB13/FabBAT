import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez FAB Industrie Tertiaire pour un devis gratuit. Fabien LLOPIS, 06 76 74 45 48, Saint-Andiol (13670).",
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Parlons de votre projet"
            title="Contactez-nous"
            subtitle="Remplissez le formulaire ou appelez directement Fabien. Devis gratuit sous 48h."
            light
          />
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 px-4 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="font-heading text-2xl font-bold text-navy mb-6">
                Envoyez-nous un message
              </h2>
              <ContactForm />
            </div>

            {/* Info + map */}
            <div className="space-y-8">
              {/* Contact details */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="font-heading text-2xl font-bold text-navy mb-6">
                  Informations de contact
                </h2>
                <dl className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <dt className="font-semibold text-navy text-sm">Gérant</dt>
                      <dd className="text-navy/70">Fabien LLOPIS</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <dt className="font-semibold text-navy text-sm">Téléphone</dt>
                      <dd>
                        <a href="tel:0676744548" className="text-accent hover:text-accent-dark transition-colors">
                          06 76 74 45 48
                        </a>
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <dt className="font-semibold text-navy text-sm">Email</dt>
                      <dd>
                        <a href="mailto:fab.itertiaire@gmail.com" className="text-accent hover:text-accent-dark transition-colors break-all">
                          fab.itertiaire@gmail.com
                        </a>
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <dt className="font-semibold text-navy text-sm">Adresse</dt>
                      <dd className="text-navy/70">
                        11 Pôle d&apos;Activité Crau Durance<br />
                        13670 Saint-Andiol
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-64">
                <iframe
                  src="https://maps.google.com/maps?q=11+Pole+Activite+Crau+Durance+13670+Saint+Andiol&output=embed&z=14"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation FAB Industrie Tertiaire"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
