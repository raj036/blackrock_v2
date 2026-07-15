import { useEffect, useState } from "react";
import { Newspaper, ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { SectionHeader } from "./SectionHeader";

interface NewsItem {
  id: string;
  category: string;
  title: string;
  date: string;
  href: string;
}

const NEWS: NewsItem[] = [
  {
    id: "1",
    category: "Press Release",
    title: "BlackRock reports third quarter 2026 diluted EPS of $12.14",
    date: "Oct 14, 2026",
    href: "#news",
  },
  {
    id: "2",
    category: "Announcement",
    title: "BlackRock to acquire private infrastructure platform in $12.5B deal",
    date: "Sep 30, 2026",
    href: "#news",
  },
  {
    id: "3",
    category: "Product",
    title: "iShares launches suite of active fixed income ETFs in Europe",
    date: "Sep 22, 2026",
    href: "#news",
  },
  {
    id: "4",
    category: "Leadership",
    title: "BlackRock names new Global Head of Sustainable Investing",
    date: "Sep 09, 2026",
    href: "#news",
  },
];

export function NewsSection() {
  // Simulated fetch to demonstrate skeleton state for perceived performance
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="news" aria-labelledby="news-title" className="bg-secondary/40 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Newsroom"
          title="Latest news & press releases"
          description="Company announcements, corporate updates, and executive commentary from BlackRock."
          ctaLabel="Visit the newsroom"
          ctaHref="#news"
        />

        <ul className="divide-y divide-border rounded-lg border border-border bg-card">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <li key={i} className="flex items-center gap-6 p-6">
                  <Skeleton className="h-10 w-10 rounded-md" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-3 w-24" />
                    <Skeleton className="h-5 w-3/4" />
                  </div>
                  <Skeleton className="hidden h-4 w-24 md:block" />
                </li>
              ))
            : NEWS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-6 p-6 transition-colors hover:bg-secondary/60 focus-visible:bg-secondary/60 focus-visible:outline-none"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary/5 text-primary">
                      <Newspaper className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="eyebrow text-[color:var(--accent-foreground)]/70">
                        {item.category}
                      </div>
                      <div className="mt-1 text-base font-medium text-foreground md:text-lg">
                        {item.title}
                      </div>
                    </div>
                    <span className="hidden text-sm text-muted-foreground md:block">
                      {item.date}
                    </span>
                    <ArrowRight
                      aria-hidden
                      className="hidden h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 md:block"
                    />
                  </a>
                </li>
              ))}
        </ul>
      </div>
    </section>
  );
}