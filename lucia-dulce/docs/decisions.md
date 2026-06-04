# Decisions

---

## 2026-06-03: Static Data Layer (No Backend for MVP)

**Decision:** Use static TypeScript data files in `lib/data/` instead of a database for MVP.

**Reason:** Faster to build, zero infrastructure cost, no auth needed. Products don't change daily. Supabase can be added in Phase 2 when admin dashboard is needed.

**Alternatives Considered:**
- Supabase from day one — rejected (overengineered for MVP launch)
- Hardcoded in components — rejected (harder to maintain)

---

## 2026-06-03: Tailwind CSS v4 (CSS-based config)

**Decision:** Keep Tailwind v4 as scaffolded by create-next-app. Define custom colors in `globals.css` via `@theme inline`.

**Reason:** Already set up by scaffolding. Avoids adding a `tailwind.config.js` file. v4's CSS-native approach is cleaner.

**Alternatives Considered:**
- Downgrade to Tailwind v3 — rejected (would require reinstalling)

---

## 2026-06-03: No shadcn/ui

**Decision:** Build custom components instead of using shadcn/ui.

**Reason:** shadcn/ui has compatibility issues with Tailwind v4 and requires additional setup. Custom components give us full brand control and avoid abstraction overhead.

**Alternatives Considered:**
- shadcn/ui — rejected (Tailwind v4 compatibility issues)
- Radix UI primitives — may add for accessibility in Phase 2

---

## 2026-06-03: Inquire-to-Order (No Online Cart for MVP)

**Decision:** Order flow directs to a contact form, no cart/checkout.

**Reason:** Lucia Dulce is a custom bakery business. Most orders are custom (size, message, flavour). A contact form is the correct UX for this business model at MVP stage.

**Alternatives Considered:**
- Full cart + checkout — rejected (overkill for MVP, custom bakery model)
- WhatsApp button — may add as enhancement

---

## 2026-06-03: Unsplash Images for Products

**Decision:** Use Unsplash image URLs as product photography placeholders.

**Reason:** The actual Lucia Dulce product photos are served as SVG lazy-load placeholders on their site and are not publicly extractable. Unsplash provides high-quality food photography as placeholder until real photos are supplied.

**Alternatives Considered:**
- CSS gradient placeholders — rejected (less visually impressive)
- Real photos — not available for scraping from source site
