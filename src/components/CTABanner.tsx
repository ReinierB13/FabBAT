import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-accent py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
          Un projet ? Demandez votre devis gratuit
        </h2>
        <p className="text-white/85 text-lg mb-8 max-w-xl mx-auto">
          Contactez Fabien directement par téléphone ou via le formulaire en
          ligne. Réponse sous 24–48h.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:0676744548"
            className="btn-outline"
          >
            06 76 74 45 48
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-accent font-semibold px-7 py-3 rounded hover:bg-surface transition-colors"
          >
            Formulaire de contact →
          </Link>
        </div>
      </div>
    </section>
  );
}
