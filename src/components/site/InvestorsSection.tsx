import { TrendingUp, FileText, Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "./SectionHeader";

const STATS = [
  { label: "Assets under management", value: "$11.9T", helper: "As of Q2 2026" },
  { label: "Countries served", value: "100+", helper: "Global footprint" },
  { label: "Employees worldwide", value: "22,000", helper: "Across 30+ offices" },
];

const LINKS = [
  {
    icon: FileText,
    title: "Q2 2026 Earnings",
    body: "Financial results, presentation, and transcript.",
  },
  {
    icon: TrendingUp,
    title: "BLK Stock",
    body: "Real‑time share price, history, and analyst coverage.",
  },
  {
    icon: Calendar,
    title: "Upcoming Events",
    body: "Investor days, conferences, and webcasts.",
  },
];

export function InvestorsSection() {
  return (
    <section id="investors" aria-labelledby="investors-title" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Investor Relations"
          title="Information for BlackRock investors"
          description="Financial results, stock information, filings, and upcoming investor events — all in one place."
          ctaLabel="Investor Relations home"
          ctaHref="#investors"
        />

        <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.label} className="bg-card p-8">
              <dt className="eyebrow">{s.label}</dt>
              <dd className="mt-3 font-serif text-4xl font-semibold text-foreground md:text-5xl">
                {s.value}
              </dd>
              <p className="mt-2 text-sm text-muted-foreground">{s.helper}</p>
            </div>
          ))}
        </dl>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {LINKS.map(({ icon: Icon, title, body }) => (
            <Card
              key={title}
              className="group relative rounded-lg border-border/70 p-0 transition-shadow hover:shadow-[var(--shadow-elegant)]"
            >
              <CardContent className="p-7">
                <Icon className="h-6 w-6 text-primary" aria-hidden />
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  <a href="#investors" className="after:absolute after:inset-0 hover:underline">
                    {title}
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
                <div className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}