import { Logo } from "./Logo";
import { Linkedin, Youtube, Twitter, Facebook } from "lucide-react";

const GROUPS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "About Us",
    links: [
      { label: "Our Firm", href: "#about" },
      { label: "Leadership", href: "#about" },
      { label: "Careers", href: "#about" },
      { label: "Contact", href: "#about" },
    ],
  },
  {
    title: "Insights",
    links: [
      { label: "Investment Institute", href: "#insights" },
      { label: "2026 Outlook", href: "#insights" },
      { label: "Weekly Commentary", href: "#insights" },
      { label: "Podcasts", href: "#insights" },
    ],
  },
  {
    title: "Social Impact",
    links: [
      { label: "Sustainability", href: "#impact" },
      { label: "Foundation", href: "#impact" },
      { label: "Community", href: "#impact" },
    ],
  },
  {
    title: "Investors",
    links: [
      { label: "Financial Results", href: "#investors" },
      { label: "Stock Information", href: "#investors" },
      { label: "SEC Filings", href: "#investors" },
      { label: "Governance", href: "#investors" },
    ],
  },
];

const SOCIALS = [
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Twitter, label: "Twitter" },
  { icon: Youtube, label: "YouTube" },
  { icon: Facebook, label: "Facebook" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="container-page py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              BlackRock's purpose is to help more and more people experience
              financial well‑being.
            </p>
            <div className="mt-6 flex gap-2">
              {SOCIALS.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-md border border-border bg-background text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {GROUPS.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h3 className="text-sm font-semibold text-foreground">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} BlackRock, Inc. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><a href="#" className="hover:text-foreground">Privacy</a></li>
            <li><a href="#" className="hover:text-foreground">Terms</a></li>
            <li><a href="#" className="hover:text-foreground">Accessibility</a></li>
            <li><a href="#" className="hover:text-foreground">Cookies</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}