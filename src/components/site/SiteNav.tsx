import { useState } from "react";
import { Menu, Search, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Logo } from "./Logo";

interface MegaItem {
  title: string;
  description: string;
  href: string;
}
interface NavSection {
  label: string;
  items?: MegaItem[];
  href?: string;
}

const NAV: NavSection[] = [
  {
    label: "About Us",
    items: [
      { title: "Our Firm", description: "Purpose, leadership, and history", href: "#about" },
      { title: "Leadership", description: "Board and executive committee", href: "#about" },
      { title: "Careers", description: "Build your career at BlackRock", href: "#about" },
      { title: "Contact", description: "Reach the right team, faster", href: "#about" },
    ],
  },
  {
    label: "Insights",
    items: [
      { title: "2026 Midyear Outlook", description: "Our latest view on markets", href: "#insights" },
      { title: "Investment Institute", description: "Research from BlackRock's experts", href: "#insights" },
      { title: "Weekly Commentary", description: "Themes shaping portfolios now", href: "#insights" },
      { title: "Thought Leadership", description: "Long‑form perspectives", href: "#insights" },
    ],
  },
  {
    label: "Social Impact",
    items: [
      { title: "Sustainability", description: "Our approach to a low‑carbon future", href: "#impact" },
      { title: "Philanthropy", description: "BlackRock Foundation initiatives", href: "#impact" },
      { title: "Community", description: "Employee volunteering and grants", href: "#impact" },
    ],
  },
  {
    label: "Investors",
    items: [
      { title: "Financial Results", description: "Latest earnings and filings", href: "#investors" },
      { title: "Stock Information", description: "BLK share price and history", href: "#investors" },
      { title: "Events & Presentations", description: "Upcoming investor events", href: "#investors" },
    ],
  },
  { label: "Newsroom", href: "#news" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <div className="flex items-center gap-8">
          <Logo />
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {NAV.map((section) =>
                section.items ? (
                  <NavigationMenuItem key={section.label}>
                    <NavigationMenuTrigger className="bg-transparent text-sm font-medium">
                      {section.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[520px] grid-cols-2 gap-1 p-4">
                        {section.items.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <a
                                href={item.href}
                                className="group block rounded-md p-3 transition-colors hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-semibold text-foreground">
                                    {item.title}
                                  </span>
                                  <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                                </div>
                                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                                  {item.description}
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={section.label}>
                    <NavigationMenuLink
                      href={section.href}
                      className={`${navigationMenuTriggerStyle()} bg-transparent text-sm font-medium`}
                    >
                      {section.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ),
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Search"
            className="hidden md:inline-flex"
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button asChild className="hidden md:inline-flex">
            <a href="#insights">Explore Insights</a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm p-0">
              <SheetHeader className="border-b border-border p-4">
                <SheetTitle className="flex items-center justify-between">
                  <Logo />
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                    className="rounded-md p-2 hover:bg-secondary"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile" className="flex flex-col divide-y divide-border">
                {NAV.map((section) => (
                  <a
                    key={section.label}
                    href={section.href ?? section.items?.[0]?.href ?? "#"}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between px-5 py-4 text-base font-medium text-foreground hover:bg-secondary"
                  >
                    {section.label}
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </a>
                ))}
                <div className="p-5">
                  <Button asChild className="w-full">
                    <a href="#insights" onClick={() => setOpen(false)}>
                      Explore Insights
                    </a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}