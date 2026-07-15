import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden"
    >
      <img
        src={heroImg}
        alt=""
        aria-hidden
        width={1920}
        height={1200}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--hero-overlay)" }}
      />

      <div className="container-page relative flex min-h-[560px] flex-col justify-end py-16 md:min-h-[680px] md:py-24 lg:py-32">
        <div className="max-w-2xl text-white">
          <span className="eyebrow text-white/80">2026 Midyear Outlook</span>
          <h1
            id="hero-title"
            className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl"
          >
            Investing through a
            <span className="block text-[color:var(--accent)]">
              transformed economy.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            The old macro anchors are gone. Our Investment Institute lays out
            where we see risk, opportunity, and long‑term return in the second
            half of 2026.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="h-12 px-6 text-sm font-semibold">
              <a href="#insights">
                Read the Outlook
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="h-12 px-4 text-sm font-semibold text-white hover:bg-white/10 hover:text-white"
            >
              <a href="#insights">
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch the briefing
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}