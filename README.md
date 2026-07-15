# BlackRock Corporate Webpage — Version 2

A modern, responsive corporate landing page built with React 19, TypeScript, TanStack Start, Tailwind CSS v4, and shadcn/ui. The design emphasizes editorial hierarchy, premium financial aesthetics, accessibility, and mobile-first responsiveness.

---

## Project Structure

The application follows TanStack Start conventions with file-based routing and a component-driven architecture.

```
├── src/
│   ├── routes/                    # File-based routes
│   │   ├── __root.tsx             # Root layout, SEO metadata, error boundaries
│   │   └── index.tsx              # Homepage composition
│   ├── components/
│   │   ├── ui/                    # shadcn/ui primitives (Button, Card, Sheet, etc.)
│   │   └── site/                  # Page-section components
│   │       ├── SiteNav.tsx
│   │       ├── Hero.tsx
│   │       ├── InsightsSection.tsx
│   │       ├── NewsSection.tsx
│   │       ├── ImpactSection.tsx
│   │       ├── InvestorsSection.tsx
│   │       ├── SiteFooter.tsx
│   │       ├── ContentCard.tsx
│   │       ├── ContentCardSkeleton.tsx
│   │       ├── SectionHeader.tsx
│   │       └── Logo.tsx
│   ├── assets/                    # Generated editorial imagery
│   ├── styles.css                 # Tailwind v4 theme tokens and utilities
│   ├── router.tsx                 # TanStack Router bootstrap
│   └── start.ts                   # Application entry configuration
├── components.json                # shadcn/ui configuration
├── package.json
└── README.md
```

Routes are defined by files in `src/routes/`. The root layout (`__root.tsx`) provides the HTML shell, global metadata, fonts, and top-level error/not-found boundaries. Page sections live in `src/components/site/` and are composed together in `src/routes/index.tsx`.

---

## Reusable Components

Several components were intentionally designed for reuse across sections:

### `SectionHeader`
Standardized heading block with optional eyebrow, title, description, and CTA link. Used across `InsightsSection`, `NewsSection`, `ImpactSection`, and `InvestorsSection` to maintain consistent rhythm and reduce duplication.

### `ContentCard`
A flexible editorial card that supports standard and featured layouts. Accepts `category`, `title`, `description`, `date`, `readTime`, `image`, `href`, and a `featured` flag. The featured variant spans two columns and renders horizontally on desktop, making it ideal for hero-like content grids.

### `ContentCardSkeleton`
Mirrors the `ContentCard` layout using skeleton loaders. It is used during simulated data fetching to improve perceived performance and reduce layout shift.

### `SiteNav`
Responsive navigation component that renders a mega-menu on desktop and a full-screen sheet drawer on mobile. The navigation data is extracted into a local configuration array, making it easy to update links without touching markup.

### `Logo`
A minimal, reusable brand mark used in both the navbar and mobile drawer.

---

## Engineering Decisions

### TanStack Start over Next.js
The environment ships with TanStack Start (React 19 + Vite 7 + Tailwind v4), so the project was built using TanStack's file-based routing and server-function patterns rather than Next.js App Router. This provides equivalent SSR/SSG capabilities while matching the project's existing toolchain.

### Tailwind CSS v4 with CSS Theme Variables
The design system is implemented entirely through `src/styles.css` using Tailwind v4's native `@theme` and CSS custom properties. A custom `container-page` utility and `eyebrow` typography class enforce consistent spacing and hierarchy without scattering magic values across components.

### shadcn/ui for Primitives
Components such as `Button`, `Card`, `Badge`, `Sheet`, and `NavigationMenu` are sourced from shadcn/ui. This accelerates development, ensures accessible defaults, and keeps the UI consistent with a well-maintained design system.

### Mobile-First Responsive Design
Layouts are built with mobile-first breakpoints (`md:` and `lg:`). The navigation collapses into a sheet drawer on small screens, and the hero and card grids reflow gracefully from single-column to multi-column as viewport width increases.

### Accessibility First
A "Skip to main content" link is placed at the top of the page for keyboard users. Semantic landmarks (`<main>`, `<section>`, `<header>`, `<footer>`), ARIA labels, and focus-visible states are used throughout. The mega-menu and mobile sheet rely on shadcn/ui's accessible primitives.

### Skeleton Loaders for Perceived Performance
Both the Insights and News sections simulate async data loading with skeleton cards. This avoids blank states and gives users immediate feedback while content is prepared.

---

## Trade-offs

### Static Content Over a CMS
All content is hardcoded in TypeScript arrays for speed and simplicity. This keeps the build self-contained and avoids external dependencies, but it means content updates require code changes rather than CMS edits.

### Simulated Loading States
The skeleton loaders are triggered by `setTimeout` rather than real network requests. This demonstrates the loading UX without needing a backend or API integration, but it does not reflect true data-fetching latency.

### Hash Anchors for Internal Navigation
The mega-menu links point to in-page hash anchors (e.g., `#insights`) rather than dedicated route pages. This is appropriate for a single-page landing experience, but a full corporate site would likely want separate routes for sections like Newsroom, Investors, and Social Impact.

### Generated Imagery
Editorial images are AI-generated placeholders. They establish the visual direction, but a production site would use licensed photography and optimized assets with full art direction.

---

## Future Improvements

If I had another week to work on this page, I would focus on the following:

1. **Dedicated Route Pages**
   Move major sections (Insights, Newsroom, Investors, Social Impact) into separate TanStack routes with unique metadata and URLs, rather than relying solely on hash anchors.

2. **Real Data Integration**
   Wire the News and Insights sections to a backend or headless CMS so content can be updated without code changes. TanStack Query would manage server state, caching, and invalidation.

3. **Enhanced Animations**
   Add scroll-triggered entrance animations using a lightweight library like Framer Motion to give the page a more polished, premium feel without hurting performance.

4. **Search Functionality**
   Implement a working global search that indexes insights and press releases, with a command palette UI for quick navigation.

5. **Dark Mode Support**
   Extend the Tailwind theme to support a dark color scheme and persist the user's preference in `localStorage`.

6. **Performance Optimization**
   Add responsive image srcsets, preload critical hero assets, and run Lighthouse audits to address any remaining accessibility or performance gaps.
