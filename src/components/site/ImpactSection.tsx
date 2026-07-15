import { Heart, Leaf, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import impactImg from "@/assets/impact.jpg";

const PILLARS = [
  {
    icon: Leaf,
    title: "Sustainability",
    body: "Helping clients navigate the transition to a low‑carbon economy.",
  },
  {
    icon: GraduationCap,
    title: "Financial Access",
    body: "Expanding access to retirement and long‑term saving for working families.",
  },
  {
    icon: Heart,
    title: "Community",
    body: "Employee volunteering and grants that strengthen the places we work.",
  },
];

export function ImpactSection() {
  return (
    <section id="impact" aria-labelledby="impact-title" className="bg-primary text-primary-foreground">
      <div className="container-page grid grid-cols-1 gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-16">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={impactImg}
            alt="Volunteers planting a tree at sunrise"
            loading="lazy"
            width={1600}
            height={1100}
            className="h-full min-h-[320px] w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <span className="eyebrow text-primary-foreground/70">Social Impact</span>
          <h2
            id="impact-title"
            className="mt-3 font-serif text-3xl font-semibold leading-tight md:text-5xl"
          >
            Investing in the long‑term wellbeing of people and the planet.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-primary-foreground/80 md:text-lg">
            Through the BlackRock Foundation and our sustainability platform,
            we support the transition to a more inclusive and resilient economy.
          </p>

          <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {PILLARS.map(({ icon: Icon, title, body }) => (
              <li key={title} className="border-t border-primary-foreground/20 pt-5">
                <Icon className="h-6 w-6 text-[color:var(--accent)]" aria-hidden />
                <h3 className="mt-4 text-base font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">
                  {body}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="h-12 bg-background text-foreground hover:bg-background/90"
            >
              <a href="#impact">
                Read the impact report
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}