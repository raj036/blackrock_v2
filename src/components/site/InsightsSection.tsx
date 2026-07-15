import { useEffect, useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { ContentCard, type ContentCardProps } from "./ContentCard";
import { ContentCardSkeleton } from "./ContentCardSkeleton";
import insight1 from "@/assets/insight-1.jpg";
import insight2 from "@/assets/insight-2.jpg";
import insight3 from "@/assets/insight-3.jpg";

const INSIGHTS: ContentCardProps[] = [
  {
    category: "Midyear Outlook",
    title: "Where we see opportunity in a transformed macro regime",
    description:
      "Structural forces — from AI capex to the low‑carbon transition — are rewriting the rules of asset allocation. Our Investment Institute walks through the playbook.",
    date: "Jul 08, 2026",
    readTime: "12 min read",
    image: insight1,
    featured: true,
  },
  {
    category: "Sustainability",
    title: "The transition economy: from thesis to portfolio",
    description:
      "How investors can position for the multi‑decade capital reallocation into clean energy, grids, and storage.",
    date: "Jun 24, 2026",
    readTime: "8 min read",
    image: insight2,
  },
  {
    category: "Markets",
    title: "Private markets: the new core of long‑duration capital",
    description:
      "Why institutional and wealth portfolios are converging on private credit, infrastructure, and real assets.",
    date: "Jun 12, 2026",
    readTime: "6 min read",
    image: insight3,
  },
];

export function InsightsSection() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="insights" aria-labelledby="insights-title" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Thought Leadership"
          title="Insights that move portfolios"
          description="Research and perspective from the BlackRock Investment Institute and our portfolio managers around the world."
          ctaLabel="All insights"
          ctaHref="#insights"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className={i === 0 ? "md:col-span-2" : ""}>
                  <ContentCardSkeleton />
                </div>
              ))
            : INSIGHTS.map((item) => <ContentCard key={item.title} {...item} />)}
        </div>
      </div>
    </section>
  );
}