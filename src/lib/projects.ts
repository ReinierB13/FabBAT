import type { Project } from "@/types";

const BASE = "https://images.unsplash.com/photo-";
const Q = "?w=800&q=80&auto=format&fit=crop";

export const projects: Project[] = [
  {
    id: 1,
    title: "Aménagement bureaux modernes",
    category: "Industrie Tertiaire",
    image: `${BASE}1497366216548-37526078f069${Q}`,
    alt: "Espace de bureaux aménagé en open-space moderne",
  },
  {
    id: 2,
    title: "Rénovation espace commercial",
    category: "Industrie Tertiaire",
    image: `${BASE}1486325212027-8081e485255e${Q}`,
    alt: "Intérieur commercial rénové avec finitions soignées",
  },
  {
    id: 3,
    title: "Cloisons et cloisonnement",
    category: "Industrie Tertiaire",
    image: `${BASE}1503387762-592deb58ef4e${Q}`,
    alt: "Cloisons de séparation installées dans un espace de travail",
  },
  {
    id: 4,
    title: "Rénovation façade immeuble",
    category: "Bâtiment",
    image: `${BASE}1590381105924-c72589b9ef3f${Q}`,
    alt: "Façade d'immeuble en cours de rénovation",
  },
  {
    id: 5,
    title: "Chantier gros œuvre",
    category: "Bâtiment",
    image: `${BASE}1504307651254-35680f356dfd${Q}`,
    alt: "Ouvriers sur un chantier de construction",
  },
  {
    id: 6,
    title: "Pose de revêtements de sol",
    category: "Bâtiment",
    image: `${BASE}1558618666-fcd25c85cd64${Q}`,
    alt: "Pose de carrelage sur un chantier",
  },
  {
    id: 7,
    title: "Isolation thermique",
    category: "Bâtiment",
    image: `${BASE}1581094794329-c8112a89af12${Q}`,
    alt: "Installation d'isolant thermique sur un mur",
  },
  {
    id: 8,
    title: "Travaux de voirie",
    category: "Travaux Publics",
    image: `${BASE}1545558014-8692077e9b5c${Q}`,
    alt: "Pose d'enrobé bitumineux sur une route",
  },
  {
    id: 9,
    title: "Terrassement de chantier",
    category: "Travaux Publics",
    image: `${BASE}1504917595217-d4dc5ebe6122${Q}`,
    alt: "Excavatrice sur un chantier de terrassement",
  },
  {
    id: 10,
    title: "Aménagement urbain",
    category: "Travaux Publics",
    image: `${BASE}1573804633927-bfcbcd909acd${Q}`,
    alt: "Aménagement de pavés et espaces urbains",
  },
  {
    id: 11,
    title: "Chantier industriel",
    category: "Industrie Tertiaire",
    image: `${BASE}1565538810643-b5bdb6cc921f${Q}`,
    alt: "Intérieur d'un hall industriel en chantier",
  },
  {
    id: 12,
    title: "Construction maçonnerie",
    category: "Bâtiment",
    image: `${BASE}1517089596207-0fda61b52e5f${Q}`,
    alt: "Travaux de maçonnerie et de briquetage",
  },
];
