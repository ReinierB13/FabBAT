import type { Service } from "@/types";
import Link from "next/link";

function IndustryIcon() {
  return (
    <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
}

function RoadIcon() {
  return (
    <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  );
}

interface ServiceCardProps {
  service: Service;
  showLink?: boolean;
}

export default function ServiceCard({ service, showLink = false }: ServiceCardProps) {
  const Icon =
    service.icon === "industry"
      ? IndustryIcon
      : service.icon === "building"
      ? BuildingIcon
      : RoadIcon;

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 group flex flex-col">
      <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
        <Icon />
      </div>
      <h3 className="font-heading text-2xl font-bold text-navy mb-2">
        {service.title}
      </h3>
      <p className="text-accent text-sm font-semibold mb-3">{service.tagline}</p>
      <p className="text-navy/70 leading-relaxed mb-5 flex-1">{service.description}</p>
      <ul className="space-y-2 mb-6">
        {service.highlights.map((h) => (
          <li key={h} className="text-sm text-navy/60 flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0" />
            {h}
          </li>
        ))}
      </ul>
      {showLink && (
        <Link
          href="/services"
          className="text-accent font-semibold text-sm hover:text-accent-dark transition-colors"
        >
          En savoir plus →
        </Link>
      )}
    </div>
  );
}
