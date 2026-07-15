import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { NewsSection } from "@/components/site/NewsSection";
import { InsightsSection } from "@/components/site/InsightsSection";
import { ImpactSection } from "@/components/site/ImpactSection";
import { InvestorsSection } from "@/components/site/InvestorsSection";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:shadow-lg"
      >
        Skip to main content
      </a>
      <SiteNav />
      <main id="main">
        <Hero />
        <InsightsSection />
        <NewsSection />
        <ImpactSection />
        <InvestorsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
