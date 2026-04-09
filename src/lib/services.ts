import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "industrie-tertiaire",
    title: "Industrie Tertiaire",
    tagline: "Bureaux, commerces et espaces professionnels",
    description:
      "Nous réalisons l'aménagement complet de vos espaces tertiaires et industriels : bureaux, salles de réunion, commerces, entrepôts logistiques et zones d'activité. De la conception à la livraison, nous garantissons des finitions impeccables.",
    highlights: [
      "Aménagement de bureaux et open-spaces",
      "Faux-plafonds et plafonds suspendus",
      "Cloisons sèches et vitrées",
      "Sols techniques et revêtements de sol",
      "Espaces commerciaux et showrooms",
      "Zones industrielles et entrepôts",
    ],
    icon: "industry",
  },
  {
    slug: "batiment",
    title: "Bâtiment",
    tagline: "Construction, rénovation et finitions",
    description:
      "Du gros œuvre aux travaux de finition, FAB intervient sur tous types de bâtiments résidentiels, commerciaux et industriels. Notre expertise en revêtements (APE 4339Z) nous permet de livrer des chantiers de haute qualité dans les délais.",
    highlights: [
      "Gros œuvre et second œuvre",
      "Rénovation complète et remise en état",
      "Revêtements intérieurs et extérieurs",
      "Isolation thermique et acoustique",
      "Peinture et enduits décoratifs",
      "Carrelage, faïence et sols souples",
    ],
    icon: "building",
  },
  {
    slug: "travaux-publics",
    title: "Travaux Publics",
    tagline: "Voirie, terrassement et réseaux",
    description:
      "FAB réalise des travaux publics pour les collectivités et entreprises privées. De la préparation du terrain à la pose des revêtements de voirie, nous intervenons avec rigueur et savoir-faire sur l'ensemble de la région PACA.",
    highlights: [
      "Aménagement de voirie et espaces urbains",
      "Terrassement et nivellement",
      "Pose d'enrobés et dallage",
      "Réseaux divers (eau, assainissement)",
      "Parkings et aires de stationnement",
      "Travaux en milieu contraint",
    ],
    icon: "road",
  },
];
