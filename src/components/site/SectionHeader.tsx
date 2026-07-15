import { ArrowRight } from "lucide-react";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function SectionHeader({ eyebrow, title, description, ctaLabel, ctaHref }: Props) {
  return (
    <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-foreground md:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        )}
      </div>
      {ctaLabel && ctaHref && (
        <a
          href={ctaHref}
          className="group inline-flex items-center gap-2 self-start text-sm font-semibold text-foreground underline-offset-4 hover:underline md:self-end"
        >
          {ctaLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      )}
    </div>
  );
}