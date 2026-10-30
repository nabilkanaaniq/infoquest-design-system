# Infoquest Design System

**Infoquest — the next-generation custom-sourcing expert network.** Infoquest (Infoquest Network LTD, registered in England & Wales, no. 14587613; web `iqnetwork.co`) connects consulting firms, private corporates, investment firms and government entities with hard-to-reach experts. Every engagement is custom-sourced (no recycled database profiles), first expert lists land in under 2 hours, and pricing is pay-as-you-go credits with no annual commitment. Strong roots in Saudi Arabia, the UAE and the wider GCC; coverage across EMEA, Asia and the Americas.

## Sources
All material came from PDFs uploaded to `uploads/` (no codebase, Figma or font files were provided):
- `Infoquest Intro Deck_Solutions Valley.pdf` — 9-slide 1440×810 capabilities deck (July 2026). Primary source for slides.
- `PROPOSAL · PREPARED FOR PIBIT.pdf`, `Copy of PROPOSAL · PREPARED FOR STRELLA.pdf` — 1-page client proposals.
- `One Pager MBX Group.pdf`, `With Credits.pdf` — 1-page engagement / pricing sheets.
- `Saudi Banking, Re-Regulated..pdf`, `AI in the Insurance Industry.pdf` (= `1778676678050.pdf`) — current "Expert Voices" LinkedIn carousels.
- `How AI is Transforming Fintech in the GCC.pdf`, `AI & Data Center Design.pdf` — older "Infoquest Expert Insights" carousels (legacy style: Open Sauce One / Poppins, heavy type, hand-drawn circles).
- `From Niche to Global`, `Inside GCC's Digital Oasis`, `The Future of Insurance: 3 Disruptions You Can't Ignore` — more legacy "Expert Insights" carousels, shared in chat by Nabil Kanaan (October 2026) and reviewed for what to keep; not stored here. What was kept is listed under the Carousel components below.
- `August_Company_Regroup.pdf` — 29-slide 1440×810 internal Quarterly Regroup (August 2026, Canva), shared in chat by Nabil Kanaan (October 2026); not stored here. Source for the Regroup components.

## Surfaces
1. **Sales documents** — proposals and one-pagers (letter portrait). → `ui_kits/sales-docs/`
2. **Capabilities deck** — 16:9 slides. → `slides/`
3. **Expert Voices** — square sector carousels for LinkedIn. → the `Carousel*` components (and the older `ui_kits/expert-voices/` kit)
4. **Quarterly Regroup** — the internal all-hands deck, 16:9, informal. → the `Regroup*` components

There is no software product UI in the sources; Infoquest's visible brand lives in documents.

---

## CONTENT FUNDAMENTALS
- **Voice:** confident, commercial, plain. First-person plural "we" for Infoquest, second person "you/your" for the client ("We deliver your first batch of custom sourced experts in under two hours."). Never "I".
- **Positioning by contrast:** copy routinely sets Infoquest against "legacy expert networks", "pre-built network panels", "static databases", "recycled profiles".
- **Proof in numbers:** short, punchy metrics — `<2 hrs`, `~30%`, `<24 hrs`, `$900/credit`, `100% fill (4 of 4)`. Use `<`, `~`, `$` symbols rather than words.
- **Action titles:** deck slide titles are one full-sentence claim, sentence case, no full stop: "Infoquest outperforms legacy expert networks on the four metrics that matter". A short bold eyebrow sits above ("Why Infoquest", "Coverage & Control").
- **Casing:** Title Case for card headings and labels ("Custom-Sourced Experts", "Package Deal Model"); sentence case for titles and body. UPPERCASE only for proposal header frames ("PROPOSAL · PREPARED FOR PIBIT"), badges, and Expert Voices running heads.
- **Separators:** middle dot `·` for lists of facets ("SAMA · NCA · SDAIA"), pipe `|` for service lists ("Research Retainer | Expert Interviews | Slide-Ready Outputs"), em dash for section numbers ("01 — THE MANDATE"), `→` for CTAs.
- **Footnotes:** begin with `*` and are italic ("*Rates are typically 30% below traditional vendors per-call pricing").
- **Hyphenated compound nouns** are core vocabulary: custom-sourced, custom-source, pre-screened, compliance-cleared, slide-ready.
- **Expert Voices** quotes an anonymised expert by role ("SENIOR COMPLIANCE SPECIALIST · SAUDI BANKING SECTOR"), titles end in a period ("Saudi Banking, Re-Regulated."), and close with "Need expert insights on …?" + "Reach out to us → info@iqnetwork.co".
- **No emoji.** Ever.
- Source copy has small typos ("We dont recycle", "calls at billed") — preserve client copy verbatim, but don't introduce new ones.

## VISUAL FOUNDATIONS
- **Color:** a white/near-white page (`#FAFAFA` / `#FFFFFF`) with flat light-grey cards (`#F3F3F3`), black text, and one accent — **Infoquest purple `#6D41B4`** (confirmed by Infoquest) for prices, metric values, table headers, step dots and check icons. Lavender `#E9E7F2` tints the lead card or savings bar. Feasibility badges use green `#1E7B45` / amber `#A0681C`.
- **The aurora:** the signature visual is a grainy, out-of-focus gradient — electric blue `#1E09EA` top-left, violet `#7A1BE9`, a pink `#EF9DF2` glow bottom-left and a near-black `#070614` mass on the right. Used full-bleed on deck covers/closers, as the header band of every proposal/one-pager, as the contact footer, and as a thin strip at the bottom of every content slide (holds the page number). Use the photographic `assets/bg-aurora.jpg` (it has film grain); `--gradient-strip` is the CSS version for thin strips. Always white text on it.
- **Expert Voices themes:** each sector carousel gets its own paper/ink pair (banking cream + forest, insurance vermilion + olive, data-center navy + blue, fintech raspberry + slate), plus a **Company** theme (deep navy-violet `#0A0440` + purple) for Infoquest's own stories rather than sector posts. **Carousels may leave the brand palette:** they are information pieces and should pop, so each post can take a vibrant palette (presets `desert` orange + maroon, `neon` near-black violet + magenta + teal, `citrus` yellow + cobalt, or a custom one). Keep body text at 4.5:1 (dark text on mid-tone grounds like orange or yellow); the purple CTA bar and white logo stay. Covers are full-bleed dark, motion-blurred photography with a white headline.
- **Type:** Plus Jakarta Sans for display — Bold for cover headlines and one-pager H1s (tight −3.5% tracking at hero size), **Light** for deck action titles. Inter for everything else (headings Semibold/Bold, body Regular, italics for footnotes). Metrics are Inter Bold 40px purple.
- **Corners: none.** Every card, button, tag, table, photo and badge is square (radius 0). Only the numbered step dots and check icons are circles.
- **Borders:** almost none. Cards are flat tints with no stroke. 1px light-grey row rules in tables; 1px mid-grey vertical hairlines separate columns or sit beside callout notes. White 1.5px hairline frames the "PROPOSAL · PREPARED FOR" label on the aurora.
- **Shadows:** none. Depth comes only from tint changes. No blur/glass effects.
- **Layout:** generous left-aligned grids; 56–90px side margins; rows of 3 cards (documents) or 4 metrics (deck); 2×2 service grids. Documents stack: aurora header → light body → aurora contact footer → black legal bar.
- **Imagery:** square headshots (never circular) on light office backgrounds; client logos in their own colors; carousel covers are cool/dark or warm/saturated abstract motion photography. No illustrations.
- **Animation:** documents are static PDFs; none observed. In interactive recreations keep to quick 120–200ms color fades (`--ease`).
- **Hover / press:** not present in sources. Recreations use darker purple (`#5A3496`) on primary hover, outline buttons fill solid black, no scale/shrink.
- **Transparency:** only a translucent white panel on the aurora (one-pager "Getting Started" box, ~14% white).

## ICONOGRAPHY
Infoquest uses almost no icons. Observed:
- **Filled purple circle with a white check** — bullet for coverage lists and proof rows (reproduced in `CheckIcon`, using the Lucide `check` path inside a CSS circle — *substitution*, the source glyph was vector-embedded).
- **Numbered purple dots** (1, 2, 3) for workflow steps — built from type, not icons.
- **Unicode arrows** `→` and `↗` in CTAs and links.
- Legacy carousels used thin line icons (snowflake, cubes, GPU) and filled circle icons (!, ?) plus hand-drawn ellipses — not part of the current system.
- No icon font, no emoji. If more icons are needed, use **Lucide** (CDN) at 1.5–2px stroke in black or purple and flag it.
- **Exception — Quarterly Regroup.** The internal regroup deck is informal: icons (`RegroupIcon`, one set of white line glyphs in filled circles), status pills, confetti, photos and leaderboards are welcome there, and only there. Still square, still no shadows, still no emoji.

## Logo
Supplied as high-res transparent PNGs (`uploads/*.png`, trimmed to 1600px wide in `assets/`):
- `logo-infoquest-color.png` — purple roundel + purple "info" + black "quest". Light pages.
- `logo-infoquest-color-inverse.png` — same with white "quest". Solid near-black grounds only.
- `logo-infoquest-white.png` — all white. Photography.
- `mark-iq.png` — purple "iq" roundel, for avatars and favicons.
The roundel purple matches `--iq-purple-600`. Never recolor or stretch. An earlier SVG upload contained no vector data; no vector logo is available yet.

---

## Index
- `tokens.json` — the tokens (colour, type, spacing, radius, shadow); `tokens.css` is generated from it
- `styles.css` — entry for pages in this system; imports `tokens.css`, then `components/bundle.css`
- `fonts/` — Plus Jakarta Sans + Inter variable woff2 (Google Fonts, latin)
- `assets/` — logos, `bg-aurora.jpg`, `imagery/` carousel cover photos, `team/` headshots
- `guidelines/` — foundation guideline pages (Type, Spacing, Brand)
- `components/` — React primitives (below): `bundle.js`, `bundle.css`, `index.d.ts`, and per component a README and a preview; sources in `components/src/`
- `ui_kits/sales-docs/` — Proposal, engagement one-pager, credits one-pager
- `ui_kits/expert-voices/` — themed carousel
- `slides/` — 8 deck layouts + `index.html` overview
- `assets/notes/SKILL.from-standalone.md` — the agent skill entry from the standalone version

## Components
No source component library existed; this set is derived from the patterns repeated across the PDFs.
- **Core** — `Button`, `Tag`, `Badge`, `Logo`
- **Content** — `SectionHeader`, `Stat`, `FeatureCard`, `PriceCard`, `Callout`, `CheckList` (+ `CheckIcon`), `Steps`
- **Data** — `DataTable`, `SpecTable`
- **Brand** — `AuroraBand`, `ContactCard`, `TeamMember`, `TeamGrid`
- **Documents** — `ProposalHeader`, `HeroHeader`, `ContactFooter`, `LegalBar`, `DocPage`
- **Slides** — `ContentSlide`, `CoverSlide`
- **Carousel** — `CarouselSlide`, `CarouselCover`, `CarouselQuote`, `CarouselColumns`, `CarouselStats`, `CarouselSplit`, `CarouselProcess`, `CarouselChecklist`, `CarouselShare`, `CarouselContrast`, `CarouselCTA` (1080×1080 Expert Voices slides; `theme` = banking, insurance, datacenter, fintech, company, or the vibrant desert, neon, citrus, or a custom palette)
- **Regroup** — `RegroupSlide`, `RegroupCover`, `RegroupDivider`, `RegroupPeople`, `RegroupPrompt`, `RegroupReview`, `RegroupTheme`, `RegroupGrid`, `RegroupCards`, `RegroupStats`, `RegroupLeaderboard`, `RegroupLogoWall`, `RegroupQA`, plus `RegroupIcon` and `RegroupStatus` (1440×810 internal Quarterly Regroup)

### Intentional additions
- `Button` hover/disabled states and `ghost`/`outline` variants — sources are static PDFs, interactive states are inferred.
- `TeamMember` and `TeamGrid` — added on request for team pages: name, role, phone number and email, text only (a photo is optional).
- Documents and Slides groups — the page and slide chrome that lived only in the sales-docs and slides kits (`DocChrome`, `SlideChrome`), now in the bundle. The kits keep their own copies.
- `Badge level="low"` — only high/medium appear in sources; low added for completeness.
- Carousel group — the Expert Voices slide types as data-driven components (they lived only as hard-coded slides in the kit). Kept from the legacy "Expert Insights" carousels and rebuilt in the current style: check rows with hairlines and the one-company-per-slide profile (`CarouselChecklist`), the market-share donut (`CarouselShare`), the "them vs us" contrast (`CarouselContrast`) and the Company theme. Dropped from them: hand-drawn arrows, scribble circles and brush ellipses, the "i" / "=" circle icons, busy textures behind body text, Poppins and over-tight CTA type, translucent lavender boxes, the logo on every slide, pictogram grids, and the two-line "Contact us at … or visit our website" ending.
- Regroup group — from the August 2026 Quarterly Regroup. Kept: the aurora cover with a numbered agenda, aurora / photo section dividers, people boards for joiners and anniversaries (with confetti), the icebreaker question slide, the promised / delivered / faced review, the "last quarter / this quarter" theme slides, the department tile grid, icon and numbered cards, status pills, KPI tiles with trend arrows, the leaderboard with gold / silver / bronze ranks, logo walls, the dark Q&A slide and the aurora strip footer with the iq mark. Dropped: charts pasted as screenshots with tiny labels (rebuilt as `RegroupStats` tiles and bars), the pasted architecture diagram, rounded and shadowed leaderboard cards, white text on pale lavender, 8–9px body text, and mixed icon styles (one `RegroupIcon` set instead). People boards show initials when there is no photo.

## Tokens
Colours, type, spacing, radius and shadow live in `tokens.json`; each carries a usage note. The values are those written above: the Infoquest purple `#6D41B4` accent, the aurora blue, violet, pink and near-black, the grey scale, the signal green / amber / red, and the Expert Voices paper / ink pairs (four sectors, Company, and the vibrant Desert, Neon and Citrus presets); Plus Jakarta Sans for display and Inter for text; the spacing scale; radius `0` with a `9999px` dot for the step dots and check icons; no shadows.


## Team
Names, roles and contacts as printed in the source documents (the capabilities deck, the Pibit and Strella proposals, and the MBX and credits one-pagers). Use these for `ContactCard`, `ContactFooter` and `TeamMember`.

| Name | Role | Email | Phone |
| --- | --- | --- | --- |
| Omar Yamak | CEO | omar@iqnetwork.co | +971 58 895 0161 |
| Mahmoud Bazerbachi | Managing Director | mahmoud@iqnetwork.co | +971 58 244 1369 |
| Uliana Rodionova | Commercial Director | uliana@iqnetwork.co | +44 7367 109688 |
| Emile Tabet | Head of Strategic Growth | emile@iqnetwork.co | +971 55 477 6854 |
| Julian Buritica | Senior Manager | julian.buritica@iqnetwork.co | +1 585 326 0442 |
| Okba Dakdouk | Associate Manager | okba@iqnetwork.co | +1 (315) 843-1361, +1 (585) 326 0121 |
| Antonio M Otto | Associate Manager | antonio.otto@iqnetwork.co | +57 304 458 44 91 |
| Sebastian Macias | Associate Manager | sebastian.macias@iqnetwork.co | +1 585 326 0488 |
| Hiyam Hashash | Associate Manager | hiyam@iqnetwork.co | +44 7361 589208 (mobile), +44 7457 403093 (whatsapp) |
| Takwa Dawa | Associate Manager | takwa@iqnetwork.co | +44 7360 277216 |

- Mahmoud's number is the +971 one, confirmed by Nabil Kanaan. The Pibit and Strella proposals still print +44 7360 277216 for him, which is Takwa's number in the credits one-pager.
- The general contact on carousels is `info@iqnetwork.co`.
- Headshots exist in `assets/team/` for Omar, Okba, Antonio, Hiyam and Takwa, taken from the one-pagers. The components work without photos.


---

## Consuming this system (generated — do not edit)

Every path named below is under `project/` in this design system: read `project/api/tokens.md`, not `api/tokens.md`.

`components/bundle.js` defines `window.InfoquestDesignSystem_80b250` (25 components); `components/bundle.css` is its stylesheet; `tokens.css` is every token as a CSS variable plus `@font-face` for the fonts. `components/bundle.css` reads its variables from `tokens.css`. The bundle needs react 18 (not packed in this system: bring your own copy) (`window.React`), react-dom 18 (not packed in this system: bring your own copy) (`window.ReactDOM`), loaded before it. Build any UI by mounting these components; never hand-build a control or draw an icon the system provides.

- **Standalone page:** inline `tokens.css` and `components/bundle.css` in a `<style>`, then the library files and `components/bundle.js` as classic scripts (a file containing `</style`, `</script` or `<!--` breaks an inline element: write the sequence `<\/style`, `<\/script` or `\x3C!--` in your copy, or load that file by URL).
- **Design canvas:** bring `tokens.css`, `components/bundle.css`, `components/bundle.js` and `components/index.d.ts` (for the editor’s props panel) onto the canvas in full, as the canvas type’s design-system components reference says (a server-side copy first where it offers one); in each artboard that uses this system, right after the `support.js` line, load `tokens.css` first, then the stylesheet, then the script; skip the library files (the artboard supplies React); mount with `<x-import component-from-global-scope="InfoquestDesignSystem_80b250.<Comp>" …>`.
- **Slides deck, or any surface that cannot run the bundle:** tokens and fonts — the values are on `api/tokens.md`; the deck takes `tokens.json` by file path for its colour pickers, and fonts as “Fonts” below says.

Fonts: `tokens.css` loads each font from its file, by path.

- **Design canvas:** copy `fonts/Inter-normal.woff2`, `fonts/Inter-italic.woff2`, `fonts/PlusJakartaSans-normal.woff2` and `fonts/PlusJakartaSans-italic.woff2` to the same paths under the canvas’s `project/ds/<folder>/` (`<folder>` is the folder you install this system under; `fonts/Inter-normal.woff2` lands on `project/ds/<folder>/fonts/Inter-normal.woff2`), in the same call that installs this system; the copy of `tokens.css` that each artboard links loads them from there. If the install’s reply leaves a font out, bring that font in as for any other page.
- **Slides deck:** for each family you use in the deck (`faces` holds at most the number of typefaces Slides’ `deck-files.md` gives), install its file with the system and name the path it lands on as that family’s `src` in `project/deck.json` `faces`, under the key in the Slides column. A deck takes a font as a file only under the rule in Slides’ `fonts.md` (no space or leading underscore in its path, for two): any other font, or one kept by id, is uploaded as `fonts.md` says.
- **Any other page:** one file per family is enough (below: the upright face nearest regular weight; bold and italic synthesize). Fetch it as the fetch column says (Artifact tool `read`, that id or path as `path`), upload it as an asset (`publish`, `file_path`, `asset:true`) and declare it with an `@font-face { font-family: "<family>"; src: url(<uploaded>) }` rule.

| family | file | fetch | CSS | Slides `faces` key |
| --- | --- | --- | --- | --- |
| Inter | `fonts/Inter-normal.woff2` (weight 300 800) | `read` the file with `project/` in front | `var(--font-text)` | `inter` |
| Plus Jakarta Sans | `fonts/PlusJakartaSans-normal.woff2` (weight 300 800) | `read` the file with `project/` in front | `var(--font-display)` | `plus-jakarta-sans` |

**Read, per thing:** a component’s props, parts and examples: `api/components/<Comp>.md`; token values: `api/tokens.md`. After this README, fetch the cards and fonts you need in ONE message as parallel calls — none depends on another.

**Two rules.** Before you use a thing — a component, a token group, an icon, an asset — read its card from the index below; a value you did not read from a card is a guess. `tokens.json`, `manifest.json`, `components/index.d.ts` and `design-system.json` are sources for tools: hand them over. `components/<Comp>/README.md` is the long-form second read a card links to; `SKILL.md` and `artifact-type/` beside them are authoring guidance, not needed to consume the system.

## Index (generated — do not edit)

**Tokens**

- `api/tokens.md` — Every token: surface, text, fill, border, palette, type, spacing, radius, shadow. (14.4k)

**Components** (`api/components/<Comp>.md`, 25)

- **Brand**: `AuroraBand` — The signature aurora gradient band · `ContactCard` — Point-of-contact block for footers and closing slides · `TeamMember` — Team member card for "Meet the team" pages: name, role, phone number and email on a flat tinted square
- `TeamGrid` — TeamGrid · `CheckIcon` — CheckIcon
- **Documents**: `ProposalHeader` — Top band of a client proposal: the white logo at left and a hairline-framed "PROPOSAL · PREPARED FOR " label at right, on the aurora · `HeroHeader` — Hero band for one-pagers: logo, a large display title and a short lede, on the aurora · `ContactFooter` — Aurora footer of a document: a "Your Points of Contact" title and a row of ContactCards · `LegalBar` — The black legal strip at the foot of every document: the informational-purposes disclaimer and the company registration line · `DocPage` — Letter-size page shell (816×1056) for sales documents
- **Slides**: `ContentSlide` — Content slide on a 1440×810 canvas: an eyebrow and action title at the top, free content in the middle, and the aurora strip at the foot holding the page numbe… · `CoverSlide` — Full-bleed aurora slide for covers and closers: logo top-left and the date top-right; place the headline and body as children
- **Content**: `Callout` — Commercial term or footnote set against a 1px neutral grey vertical hairline (never a colored accent bar) · `CheckList` — Bulleted list with purple circle-check icons · `FeatureCard` — Flat square card on a light tint — Infoquest's only card style · `PriceCard` — Rate / package card for pricing one-pagers · `SectionHeader` — Deck/page section opener — small bold eyebrow, then a full-sentence light-weight title · `Stat` — Headline metric block — the "four metrics that matter" row and workflow timings · `Steps` — Numbered process row (Scope → Sourcing → Delivery)
- **Core**: `Badge` — Tiny uppercase confidence flag shown inline after a fill-rate figure in proposals · `Button` — Square, flat CTA for briefs, proposals and carousel end-cards ("Submit your request here", "Reach out to us →") · `Logo` — The official Infoquest lockup — top-left of cover/header bands, bottom-right of carousel covers and CTAs · `Tag` — Small square label for perks, facets and category headers
- **Data**: `DataTable` — Purple-header table · `SpecTable` — Grey-key / white-value table used throughout proposals
