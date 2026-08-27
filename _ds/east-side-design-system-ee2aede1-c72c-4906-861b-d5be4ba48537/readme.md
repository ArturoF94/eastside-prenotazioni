# East Side — Design System

**East Side | Pub & Steakhouse** is a grill/steakhouse-and-bar in Sesto San Giovanni (MI), Italy. This design system is built from the official **Brand Kit 1.0** — a comprehensive brand identity with 6-color palette, two typeface families (Bodoni Moda + Instrument Sans), design tokens, and 18-page brand manual.

**Sources:**
- `uploads/East-Side-Brand-Kit/`: official brand kit with design tokens, fonts (Bodoni Moda, Instrument Sans), logos (horizontal/stacked, black/white), brand manual, and templates.
- All colors, typography, spacing, and motion rules derive directly from `design-tokens.css` and the brand manual.

## Index
- `styles.css` — root stylesheet, imports everything under `tokens/`
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `base.css` (global element styles + the grid-bars utility)
- `assets/logo/` — every official logo/icon lockup (SVG)
- `assets/social/` — avatar, cover, post & story templates (SVG + PNG)
- `assets/web/` — favicons, hero image, menu-header image, OG image
- `guidelines/` — foundation specimen cards (shown in the Design System tab)
- `components/core/` — Button, Tag, Card, SectionDivider
- `components/forms/` — Input, Select
- `components/navigation/` — NavHeader, Footer
- `components/menu/` — MenuItemRow
- `ui_kits/website/` — click-through marketing site (Home, Menù, Prenota)
- `SKILL.md` — portable Claude Code skill version of this system

## Components
Button, Tag, Card, SectionDivider, Input, Select, NavHeader, Footer, MenuItemRow.

**Intentional additions:** no component inventory existed in any source (brand-kit-only project), so this is a from-scratch standard set sized to what a one-location restaurant site needs — a menu row, reservation form fields, nav/footer, and a generic content card. Nothing here mirrors shadcn/MUI defaults; paddings, the 2px rule weight, and zero border-radius all come straight from `tokens.css` in the kit.

## Content fundamentals
- **Language:** Italian. Tone: metropolitan, welcoming, premium but approachable. *"Metropolitan neighborhood hospitality"* and *"Premium nel modo in cui si presenta. Accessibile nel modo in cui accoglie."*
- **Casing:** display and editorial text use standard sentence case (not all-caps).
- **No emoji, no filler adjectives.** Copy is direct and product-focused.
- **One message per image** on social — never stack multiple CTAs.
- **Numbers:** prices with tabular figures, comma as decimal, e.g. `€ 24,00`.

## Visual foundations
- **Palette:** 
  - **Midnight** `#0B0B0C` — primary dark ground and text
  - **Carbon** `#171719` — raised dark surfaces
  - **Ivory** `#F4F0E8` — primary light ground and light text
  - **Smoke** `#B9B5AD` — secondary text on dark backgrounds
  - **Ember** `#8F3B2C` — food, warmth, and call-to-action accent
  - **Night Blue** `#23415D` — events, sport, late-night accent
- **Type:** 
  - **Bodoni Moda** (editorial serif) — titles, display type; never below 28px on screen. Medium weight, -0.035em letter-spacing for elegance.
  - **Instrument Sans** (UI sans-serif) — all UI text, menu, prices, sitetext. Weights: 400–700. Letter-spacing 0.06em for buttons/labels.
- **Type scale:** clamp(3.5rem, 8vw, 7.5rem) display · clamp(2.5rem, 5vw, 4rem) at 3xl · 2rem, 1.5rem, 1.25rem, 1rem, 0.875rem, 0.75rem.
- **Spacing:** 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96px (base 4px).
- **Corner radius:** 2px (small), 4px (medium), 999px (pill) — subtle, not sharp. Minimum for small interactive elements.
- **Buttons:** Midnight background, Ivory text, 2px radius, 3rem min-height, letter-spacing 0.06em uppercase. Hover: shift up 1px + Carbon background. Focus: 3px outline Midnight with 3px offset.
- **Shadows:** `0 14px 40px rgb(11 11 12 / 12%)` for elevated surfaces.
- **Motion:** fast 140ms, base 220ms, easing cubic-bezier(0.2, 0.7, 0.2, 1). Respect prefers-reduced-motion.
- **Backgrounds:** flat Ivory (light) or Midnight (dark). No gradients, patterns, or textures in the brand kit baseline.
- **Imagery:** photography direction: warm, approachable, premium-casual. Never provided with kit — use placeholders until real assets available.

## Iconography
- No custom icon set in the kit. If UI icons are needed (search, close, menu, chevron), use a clean sans-serif set like Lucide or Heroicons at a stroke weight matching Instrument Sans at 600 weight.
- No emoji anywhere in the brand.

## Logo variants (see `assets/logo/`)
- **Horizontal** (default, site headers, light surfaces) — with descriptor "PUB & STEAKHOUSE"
- **Stacked** (square or vertical spaces — flag signage, menu cover, coasters)
- Each available in **black** (light grounds) and **white** (dark grounds).
- **Wordmark-only** variants available for secondary uses.
Minimum sizes: digital 120px wide; print 30mm. Enforce clear space (half the cap height) around the mark; no other elements enter it.

## Next steps
- Update all components (Button, Card, Input, Select, etc.) to use the new token values and Bodoni Moda / Instrument Sans.
- Rebuild foundation cards to showcase the new 6-color palette, typography scale, and motion rules.
- Integrate the website codebase (when provided) into `ui_kits/website/` with the new brand identity.
- Add real photography to hero sections and menu/events cards.
- Build out additional pages: story/about, events calendar, contact/map.
