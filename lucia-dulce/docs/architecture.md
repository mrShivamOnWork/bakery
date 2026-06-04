# Architecture

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (CSS-based config via `@theme inline`)
- **Animations**: Framer Motion
- **UI Components**: Custom (no shadcn for now — avoids v4 compatibility issues)
- **Fonts**: Playfair Display (headings), Inter (body) via `next/font/google`
- **Images**: Next.js `Image` component, Unsplash for product photos, brand logo from luciadulce.com CDN
- **Backend**: None (static for MVP) — Supabase planned for Phase 2

## Folder Structure
```
lucia-dulce/
├── app/
│   ├── layout.tsx              # Root layout — fonts, metadata, body
│   ├── globals.css             # Tailwind v4 @theme config, brand colors
│   ├── page.tsx                # Homepage
│   ├── menu/page.tsx           # Product catalog with filters
│   ├── about/page.tsx          # Brand story
│   ├── locations/page.tsx      # Store locations
│   └── contact/page.tsx        # Order/contact form
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky nav, mobile hamburger
│   │   ├── Footer.tsx          # Brand footer with social links
│   │   └── MobileBottomNav.tsx # App-style bottom nav (mobile only)
│   ├── home/
│   │   ├── HeroSection.tsx     # Cinematic hero with CTA
│   │   ├── FeaturedProducts.tsx
│   │   ├── ShopByOccasion.tsx  # Category grid
│   │   ├── BrandStory.tsx      # Emotional brand narrative
│   │   ├── Testimonials.tsx    # Customer reviews carousel
│   │   └── LocationsPreview.tsx
│   ├── products/
│   │   ├── ProductCard.tsx     # Reusable product card
│   │   ├── ProductGrid.tsx     # Responsive grid wrapper
│   │   └── ProductFilters.tsx  # Category filter tabs
│   └── locations/
│       └── LocationCard.tsx    # Store info card
├── lib/
│   └── data/
│       ├── products.ts         # All product data (static)
│       ├── categories.ts       # Category + occasion data
│       ├── locations.ts        # All 9 store locations
│       └── testimonials.ts     # Customer reviews
├── public/
│   └── images/                 # Local assets (if any)
└── docs/                       # Project Brain (this folder)
```

## Brand Colors (Tailwind Custom Tokens)
Defined in `app/globals.css` via `@theme inline`:
- `cream` (#FFF8EF) — primary background
- `chocolate` (#4B2E2A) — body text
- `brand` (#8B1A1A) — brand identity (from logo)
- `gold` (#D9A441) — CTA buttons, price accents
- `pink` (#F7C8C8) — soft accents
- `warm-white` (#FFFDF9) — card backgrounds
- `warm-gray` (#F5EEE8) — section backgrounds

## Image Strategy
- Product images: Unsplash URLs (configured in `next.config.ts` remotePatterns)
- Logo: Loaded from luciadulce.com CDN
- All images use Next.js `Image` component for optimization

## Routing
| Route | Page |
|-------|------|
| `/` | Homepage |
| `/menu` | Full product catalog |
| `/menu?category={slug}` | Filtered by category |
| `/about` | Brand story |
| `/locations` | All stores |
| `/locations#{city}` | Jump to city section |
| `/contact` | Order/contact form |

## Phase 2 Plans
- Supabase backend for dynamic product management
- Admin dashboard for adding/editing products
- Online ordering with Supabase Storage for photo uploads
- Customer accounts and order history
