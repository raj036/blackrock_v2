import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface ContentCardProps {
  category: string;
  title: string;
  description: string;
  date: string;
  readTime?: string;
  image?: string;
  href?: string;
  featured?: boolean;
}

export function ContentCard({
  category,
  title,
  description,
  date,
  readTime,
  image,
  href = "#",
  featured = false,
}: ContentCardProps) {
  return (
    <Card
      className={`group relative flex h-full flex-col overflow-hidden rounded-lg border-border/70 bg-card p-0 transition-shadow duration-300 hover:shadow-[var(--shadow-elegant)] ${
        featured ? "md:col-span-2 md:flex-row" : ""
      }`}
    >
      {image && (
        <div
          className={`relative overflow-hidden ${
            featured ? "md:w-1/2" : "aspect-[16/10] w-full"
          }`}
        >
          <img
            src={image}
            alt=""
            loading="lazy"
            className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
              featured ? "md:h-full" : ""
            }`}
          />
        </div>
      )}
      <CardContent
        className={`flex flex-1 flex-col p-6 md:p-7 ${featured ? "md:w-1/2 md:justify-center" : ""}`}
      >
        <Badge
          variant="secondary"
          className="w-fit rounded-sm bg-secondary text-xs font-semibold uppercase tracking-wider text-secondary-foreground"
        >
          {category}
        </Badge>
        <h3
          className={`mt-4 font-serif font-semibold leading-tight text-foreground ${
            featured ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
          }`}
        >
          <a href={href} className="after:absolute after:inset-0 hover:underline">
            {title}
          </a>
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          {description}
        </p>
        <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
          <span>
            {date}
            {readTime ? ` · ${readTime}` : ""}
          </span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </CardContent>
    </Card>
  );
}