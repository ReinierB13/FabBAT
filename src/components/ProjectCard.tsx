import Image from "next/image";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

const categoryColors: Record<Project["category"], string> = {
  "Industrie Tertiaire": "bg-blue-600",
  "Bâtiment": "bg-amber-600",
  "Travaux Publics": "bg-emerald-600",
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl aspect-[4/3] shadow-md">
      <Image
        src={project.image}
        alt={project.alt}
        fill
        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/65 transition-colors duration-300" />
      {/* Caption slides up on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <span
          className={`inline-block text-white text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded mb-2 ${
            categoryColors[project.category]
          }`}
        >
          {project.category}
        </span>
        <p className="font-heading text-white font-bold text-xl leading-tight">
          {project.title}
        </p>
      </div>
    </div>
  );
}
