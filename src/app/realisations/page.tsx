import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import CTABanner from "@/components/CTABanner";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Découvrez les réalisations de FAB Industrie Tertiaire : projets de bâtiment, industrie tertiaire et travaux publics en PACA.",
};

export default function RealisationsPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Notre travail"
            title="Nos réalisations"
            subtitle="Un aperçu de nos chantiers réalisés en région PACA — industrie tertiaire, bâtiment et travaux publics."
            light
          />
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4 bg-surface">
        <div className="max-w-7xl mx-auto">
          {/* Category filter labels */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {["Tous", "Industrie Tertiaire", "Bâtiment", "Travaux Publics"].map(
              (cat) => (
                <span
                  key={cat}
                  className="px-4 py-1.5 rounded-full text-sm font-semibold bg-white border border-gray-200 text-navy/70"
                >
                  {cat}
                </span>
              )
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <p className="text-center text-navy/50 text-sm mt-10">
            Photos à titre illustratif — nos réalisations client seront ajoutées prochainement.
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
