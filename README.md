# Infoquest Design System

Export of the **Infoquest Design System** (a Claude Design System artifact), October 2026.

Everything lives under [`project/`](project/), with the same paths the design system uses:

- `project/README.md` — the full guide: content and visual foundations, components, tokens, team roster
- `project/design-system.json` — the index (namespace `InfoquestDesignSystem_80b250`)
- `project/tokens.json` / `project/tokens.css` — colour, type, spacing, radius tokens
- `project/fonts/` — Plus Jakarta Sans + Inter (woff2)
- `project/assets/` — logos, aurora background, carousel cover imagery, team headshots
- `project/components/` — 51 React components: `bundle.js` (global `window.InfoquestDesignSystem_80b250`, needs React 18 + ReactDOM 18), `bundle.css`, `index.d.ts`, and per component a README, `.d.ts` and `preview.html`; sources in `components/src/`
- `project/api/` — generated reference cards per component and for tokens
- `project/ui_kits/` — sales documents and Expert Voices kits
- `project/slides/` — capabilities-deck layouts
- `project/guidelines/` — foundation guideline pages

## Importing into another Claude account
Create a new Design System artifact there and point it at this repo (or upload the `project/` folder), then ask Claude to import it keeping `project/design-system.json` as the index.
