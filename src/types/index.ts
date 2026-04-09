export interface Project {
  id: number;
  title: string;
  category: "Industrie Tertiaire" | "Bâtiment" | "Travaux Publics";
  image: string;
  alt: string;
}

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  icon: "industry" | "building" | "road";
}
