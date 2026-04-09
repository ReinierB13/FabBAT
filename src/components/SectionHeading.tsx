interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center mx-auto max-w-2xl" : ""}`}>
      {eyebrow && (
        <span
          className={`section-label ${light ? "text-accent-light" : "text-accent"}`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-heading text-4xl md:text-5xl font-bold leading-tight ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-white/70" : "text-navy/60"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
