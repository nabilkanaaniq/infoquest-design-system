import * as React from "react";

// AuroraBand
/** The grainy blue–violet–pink "aurora" gradient field: cover/header bands, contact footers and the thin page-number strip. */
export interface AuroraBandProps {
  /** header/footer = photo gradient; strip = 40px CSS gradient strip at deck page bottoms */
  variant?: "header" | "footer" | "strip";
  height?: number | string;
  padding?: number | string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function AuroraBand(props: AuroraBandProps): JSX.Element;

// Badge
/** Feasibility confidence flag used next to fill rates in proposals ("100% fill (4 of 4) HIGH CONFIDENCE"). */
export interface BadgeProps {
  level?: "high" | "medium" | "low";
  /** Override label; defaults to "<Level> confidence" */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Badge(props: BadgeProps): JSX.Element;

// Button
/**
 * Square, flat call-to-action. Primary = Infoquest purple; inverse = white hairline frame for aurora backgrounds.
 * @startingPoint section="Core" subtitle="Square CTA buttons" viewport="700x220"
 */
export interface ButtonProps {
  variant?: "primary" | "dark" | "outline" | "inverse" | "ghost";
  size?: "sm" | "md" | "lg";
  /** Appends a → glyph, as in "Reach out to us →" */
  arrow?: boolean;
  disabled?: boolean;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): JSX.Element;

// Callout
/** Term / footnote beside a thin neutral grey hairline ("10-minute grace period", "Calls over one hour"). */
export interface CalloutProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  inverse?: boolean;
  style?: React.CSSProperties;
}
export function Callout(props: CalloutProps): JSX.Element;

// CheckList
/** List with filled purple circle-check bullets — coverage lists and proof-point rows. */
export interface CheckListProps {
  title?: React.ReactNode;
  /** Italic aside after the title, e.g. "non-exhaustive list" */
  note?: React.ReactNode;
  items: React.ReactNode[];
  gap?: number;
  /** Lay items in a horizontal row */
  inline?: boolean;
  style?: React.CSSProperties;
}
export function CheckList(props: CheckListProps): JSX.Element;
export function CheckIcon(props: { size?: number; color?: string }): JSX.Element;

// ContactCard
/** "Your Points of Contact" person block: square headshot + name, role, email, phone(s). */
export interface ContactCardProps {
  name: React.ReactNode;
  role?: React.ReactNode;
  email?: string;
  phones?: React.ReactNode[];
  /** Image URL; pass "" for a placeholder square; omit to hide the photo */
  photo?: string;
  photoSize?: number;
  /** White text for aurora footers (default) */
  inverse?: boolean;
  style?: React.CSSProperties;
}
export function ContactCard(props: ContactCardProps): JSX.Element;

// ContactFooter
/** Aurora footer with points of contact
 * @startingPoint section="Documents" subtitle="Aurora footer with points of contact" */
export interface ContactFooterPerson {
  name: string;
  role?: string;
  email?: string;
  phones?: React.ReactNode[];
  /** Image URL; "" draws a placeholder square */
  photo?: string;
}
export interface ContactFooterProps {
  people: ContactFooterPerson[];
  layout?: "row" | "side";
  title?: React.ReactNode;
  /** Placeholder squares for people with no photo */
  photos?: boolean;
  style?: React.CSSProperties;
}
export function ContactFooter(props: ContactFooterProps): JSX.Element;

// ContentSlide
/** 1440×810 content slide with strip footer
 * @startingPoint section="Slides" subtitle="1440×810 content slide with strip footer" */
export interface ContentSlideProps {
  /** Page number, shown in the aurora strip */
  n?: React.ReactNode;
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  lede?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function ContentSlide(props: ContentSlideProps): JSX.Element;

// CoverSlide
/** 1440×810 full-bleed aurora cover
 * @startingPoint section="Slides" subtitle="1440×810 full-bleed aurora cover" */
export interface CoverSlideProps {
  /** Positioned content: headline, body */
  children?: React.ReactNode;
  date?: React.ReactNode;
  assetBase?: string;
  style?: React.CSSProperties;
}
export function CoverSlide(props: CoverSlideProps): JSX.Element;

// DataTable
/** Purple-header table for sample profiles and commercial models. Square, hairline rows. */
export interface DataTableProps {
  columns: React.ReactNode[];
  rows: React.ReactNode[][];
  striped?: boolean;
  /** Full cell grid (commercial model) vs row rules only (sample profiles) */
  grid?: boolean;
  style?: React.CSSProperties;
}
export function DataTable(props: DataTableProps): JSX.Element;

// DocPage
/** Letter page: header, body, footer, legal bar
 * @startingPoint section="Documents" subtitle="Letter page: header, body, footer, legal bar" */
export interface DocPageProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function DocPage(props: DocPageProps): JSX.Element;

// FeatureCard
/** Flat, square tinted card — value props ("Custom-Sourced Experts"), service lines, additional services. No border, no shadow. */
export interface FeatureCardProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  children?: React.ReactNode;
  /** gray = #F3F3F3 default; accent = lavender (lead service); white */
  tone?: "gray" | "accent" | "white";
  align?: "left" | "center";
  /** lg renders a purple service-line title */
  titleSize?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
}
export function FeatureCard(props: FeatureCardProps): JSX.Element;

// HeroHeader
/** Aurora hero header for one-pagers
 * @startingPoint section="Documents" subtitle="Aurora hero header for one-pagers" */
export interface HeroHeaderProps {
  title: React.ReactNode;
  /** Lede paragraphs */
  children?: React.ReactNode;
  assetBase?: string;
  style?: React.CSSProperties;
}
export function HeroHeader(props: HeroHeaderProps): JSX.Element;

// LegalBar
/** Black legal strip at the foot of a document
 * @startingPoint section="Documents" subtitle="Black legal strip at the foot of a document" */
export interface LegalBarProps {
  /** "uk" (default, Infoquest Network LTD) or "uae" (Infoquest Network FZ-LLC, for GCC/MENA clients) */
  entity?: "uk" | "uae";
  /** Replaces the legal line */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function LegalBar(props: LegalBarProps): JSX.Element;

// Logo
/** The official Infoquest lockup: purple "iq" roundel + purple "info" + "quest" in black (color) or white (inverse). */
export interface LogoProps {
  /** color = light pages; white = aurora bands and photography (default, as in the source PDFs); inverse = solid black/near-black grounds only */
  variant?: "color" | "inverse" | "white";
  /** Just the purple "iq" roundel */
  markOnly?: boolean;
  height?: number;
  /** Path to this design system's assets/ folder, relative to the page. Default "assets/". */
  assetBase?: string;
  style?: React.CSSProperties;
}
export function Logo(props: LogoProps): JSX.Element;

// PriceCard
/** Package / rate card from the pricing one-pagers: title, rule, struck-through list price, purple price, optional "Save 30%" bar. */
export interface PriceCardProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Struck-through reference price */
  was?: React.ReactNode;
  price: React.ReactNode;
  unit?: React.ReactNode;
  /** Lavender savings bar beneath the card */
  save?: React.ReactNode;
  style?: React.CSSProperties;
}
export function PriceCard(props: PriceCardProps): JSX.Element;

// ProposalHeader
/** Aurora header with the PROPOSAL frame
 * @startingPoint section="Documents" subtitle="Aurora header with the PROPOSAL frame" */
export interface ProposalHeaderProps {
  /** Client name; shown upper-cased in the label */
  client: string;
  /** Folder holding the logo files, with trailing slash */
  assetBase?: string;
  style?: React.CSSProperties;
}
export function ProposalHeader(props: ProposalHeaderProps): JSX.Element;

// SectionHeader
/** Deck section opener: bold eyebrow ("Why Infoquest") over a light Plus Jakarta Sans action title. */
export interface SectionHeaderProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  /** Optional bold supporting line */
  lede?: React.ReactNode;
  inverse?: boolean;
  style?: React.CSSProperties;
}
export function SectionHeader(props: SectionHeaderProps): JSX.Element;

// SpecTable
/** Two-column key/value table with grey key cells — proposal feasibility and pricing blocks. */
export interface SpecTableProps {
  rows: { label: React.ReactNode; value: React.ReactNode }[];
  keyWidth?: number;
  style?: React.CSSProperties;
}
export function SpecTable(props: SpecTableProps): JSX.Element;

// Stat
/** Headline metric: small label, big purple value, bold caption, optional description ("Speed / <2 hrs / Expert list delivery"). */
export interface StatProps {
  label?: React.ReactNode;
  value: React.ReactNode;
  caption?: React.ReactNode;
  /** Description paragraph below */
  children?: React.ReactNode;
  align?: "left" | "center";
  /** doc = 12px labels (pages); deck = 16px labels (1440 slides) */
  size?: "doc" | "deck";
  style?: React.CSSProperties;
}
export function Stat(props: StatProps): JSX.Element;

// Steps
/** Numbered engagement workflow — purple numbered dots joined by a grey hairline. */
export interface StepsProps {
  steps: { title: React.ReactNode; body?: React.ReactNode }[];
  style?: React.CSSProperties;
}
export function Steps(props: StepsProps): JSX.Element;

// Tag
/** Small square label — package perks ("No expiration"), carousel facets ("SURGE IN SOCIAL ENGINEERING"), category headers. */
export interface TagProps {
  tone?: "dark" | "light" | "outline" | "accent";
  /** Uppercase tracked micro-label style (Expert Voices) */
  caps?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Tag(props: TagProps): JSX.Element;

// TeamGrid
/**
 * Equal-column grid for TeamMember cards.
 * @startingPoint section="Brand" subtitle="Team grid" viewport="700x300"
 */
export interface TeamGridProps {
  columns?: number;
  gap?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function TeamGrid(props: TeamGridProps): JSX.Element;

// TeamMember
/**
 * Team member card: square photo, name, role, phone and email on a flat tinted square.
 * @startingPoint section="Brand" subtitle="Team member card" viewport="700x300"
 */
export interface TeamMemberProps {
  name: React.ReactNode;
  role?: React.ReactNode;
  phone?: React.ReactNode;
  /** Rendered as a mailto link */
  email?: string;
  /** Optional square image URL. Omit it for a text-only card (the default); "" draws a placeholder square */
  photo?: string;
  photoSize?: number;
  tone?: "gray" | "accent" | "white";
  /** "row" puts the photo beside the text */
  layout?: "stacked" | "row";
  style?: React.CSSProperties;
}
export function TeamMember(props: TeamMemberProps): JSX.Element;

// CarouselSlide
export interface CarouselTheme { name?: string; paper?: string; ink?: string; text?: string; accent?: string; card?: string; cta?: string; photo?: string | null; }
/** 1080×1080 Expert Voices frame: running head, body, running foot
 * @startingPoint section="Carousel" subtitle="1080×1080 Expert Voices frame: running head, body, running foot" */
export interface CarouselSlideProps {
  /** Theme: a sector ("banking" | "insurance" | "datacenter" | "fintech"), "company", a vibrant preset ("desert" | "neon" | "citrus"), or a custom {paper, ink, text, accent, card, cta}: carousels may use any vibrant palette */
  theme?: "banking" | "insurance" | "datacenter" | "fintech" | "company" | "desert" | "neon" | "citrus" | CarouselTheme;
  /** Slide number in the running head */
  index?: number;
  /** Total slides, shown as "03 / 09" */
  total?: number;
  /** Sector after "Expert Voices ·" in the running head */
  sector?: string;
  /** Running foot: left "03 — Post-COVID", right facets "Anti-fraud · Social engineering" */
  foot?: { left?: React.ReactNode; right?: React.ReactNode };
  /** Folder holding the logo and imagery/ (default "assets/") */
  assetBase?: string;
  style?: React.CSSProperties;
  title?: React.ReactNode;
  dek?: React.ReactNode;
  /** "paper" (default) or "ink" ground */
  ground?: "paper" | "ink";
  /** Full-bleed photo behind the slide (file in assets/imagery/ or a URL), darkened for white text */
  photo?: string;
  children?: React.ReactNode;
}
export function CarouselSlide(props: CarouselSlideProps): JSX.Element;

// CarouselCover
/** Photo cover with headline, dek and expert credit
 * @startingPoint section="Carousel" subtitle="Photo cover with headline, dek and expert credit" */
export interface CarouselCoverProps {
  /** Theme: a sector ("banking" | "insurance" | "datacenter" | "fintech"), "company", a vibrant preset ("desert" | "neon" | "citrus"), or a custom {paper, ink, text, accent, card, cta}: carousels may use any vibrant palette */
  theme?: "banking" | "insurance" | "datacenter" | "fintech" | "company" | "desert" | "neon" | "citrus" | CarouselTheme;
  /** Slide number in the running head */
  index?: number;
  /** Total slides, shown as "03 / 09" */
  total?: number;
  /** Sector after "Expert Voices ·" in the running head */
  sector?: string;
  /** Running foot: left "03 — Post-COVID", right facets "Anti-fraud · Social engineering" */
  foot?: { left?: React.ReactNode; right?: React.ReactNode };
  /** Folder holding the logo and imagery/ (default "assets/") */
  assetBase?: string;
  style?: React.CSSProperties;
  title: React.ReactNode;
  dek?: React.ReactNode;
  /** Credit lines, e.g. ["Featuring · Infoquest Expert", "Senior Compliance Specialist · Saudi Banking Sector"] */
  featuring?: React.ReactNode[];
  /** Photo in assets/imagery/ or a URL; defaults to the theme's cover; null for a flat ink cover */
  photo?: string | null;
}
export function CarouselCover(props: CarouselCoverProps): JSX.Element;

// CarouselQuote
/** Expert pull quote with role attribution
 * @startingPoint section="Carousel" subtitle="Expert pull quote with role attribution" */
export interface CarouselQuoteProps {
  /** Theme: a sector ("banking" | "insurance" | "datacenter" | "fintech"), "company", a vibrant preset ("desert" | "neon" | "citrus"), or a custom {paper, ink, text, accent, card, cta}: carousels may use any vibrant palette */
  theme?: "banking" | "insurance" | "datacenter" | "fintech" | "company" | "desert" | "neon" | "citrus" | CarouselTheme;
  /** Slide number in the running head */
  index?: number;
  /** Total slides, shown as "03 / 09" */
  total?: number;
  /** Sector after "Expert Voices ·" in the running head */
  sector?: string;
  /** Running foot: left "03 — Post-COVID", right facets "Anti-fraud · Social engineering" */
  foot?: { left?: React.ReactNode; right?: React.ReactNode };
  /** Folder holding the logo and imagery/ (default "assets/") */
  assetBase?: string;
  style?: React.CSSProperties;
  quote: React.ReactNode;
  /** Role line, e.g. "Senior Compliance Specialist · Saudi Banking Sector" */
  attribution?: React.ReactNode;
  /** Quote size in px (default 58) */
  size?: number;
}
export function CarouselQuote(props: CarouselQuoteProps): JSX.Element;

// CarouselColumns
/** 2–4 numbered columns: pillars, reasons, rules
 * @startingPoint section="Carousel" subtitle="2–4 numbered columns: pillars, reasons, rules" */
export interface CarouselColumnsProps {
  /** Theme: a sector ("banking" | "insurance" | "datacenter" | "fintech"), "company", a vibrant preset ("desert" | "neon" | "citrus"), or a custom {paper, ink, text, accent, card, cta}: carousels may use any vibrant palette */
  theme?: "banking" | "insurance" | "datacenter" | "fintech" | "company" | "desert" | "neon" | "citrus" | CarouselTheme;
  /** Slide number in the running head */
  index?: number;
  /** Total slides, shown as "03 / 09" */
  total?: number;
  /** Sector after "Expert Voices ·" in the running head */
  sector?: string;
  /** Running foot: left "03 — Post-COVID", right facets "Anti-fraud · Social engineering" */
  foot?: { left?: React.ReactNode; right?: React.ReactNode };
  /** Folder holding the logo and imagery/ (default "assets/") */
  assetBase?: string;
  style?: React.CSSProperties;
  title: React.ReactNode;
  dek?: React.ReactNode;
  items: { num?: string; label?: string; title: React.ReactNode; body?: React.ReactNode; meta?: React.ReactNode }[];
  /** "rule": top hairline (reasons); "card": tinted card with accent top rule (pillars); "bar": accent left bar, big number (playbook) */
  variant?: "rule" | "card" | "bar";
  /** Auto-number 01, 02… (default true) */
  numbered?: boolean;
  /** Dark band under the columns: a big value and a line of proof */
  callout?: { value?: React.ReactNode; text: React.ReactNode };
}
export function CarouselColumns(props: CarouselColumnsProps): JSX.Element;

// CarouselStats
/** By-the-numbers slide: lead stat plus supporting stats
 * @startingPoint section="Carousel" subtitle="By-the-numbers slide: lead stat plus supporting stats" */
export interface CarouselStatsProps {
  /** Theme: a sector ("banking" | "insurance" | "datacenter" | "fintech"), "company", a vibrant preset ("desert" | "neon" | "citrus"), or a custom {paper, ink, text, accent, card, cta}: carousels may use any vibrant palette */
  theme?: "banking" | "insurance" | "datacenter" | "fintech" | "company" | "desert" | "neon" | "citrus" | CarouselTheme;
  /** Slide number in the running head */
  index?: number;
  /** Total slides, shown as "03 / 09" */
  total?: number;
  /** Sector after "Expert Voices ·" in the running head */
  sector?: string;
  /** Running foot: left "03 — Post-COVID", right facets "Anti-fraud · Social engineering" */
  foot?: { left?: React.ReactNode; right?: React.ReactNode };
  /** Folder holding the logo and imagery/ (default "assets/") */
  assetBase?: string;
  style?: React.CSSProperties;
  title: React.ReactNode;
  dek?: React.ReactNode;
  lead: { label: React.ReactNode; value: React.ReactNode; body?: React.ReactNode };
  /** Up to three supporting stats; pct draws a progress bar */
  items?: { label: React.ReactNode; value: React.ReactNode; body?: React.ReactNode; pct?: number }[];
  /** Photo behind the slide (as in "The receipts."); panels turn near-black */
  photo?: string;
}
export function CarouselStats(props: CarouselStatsProps): JSX.Element;

// CarouselSplit
/** Italic quote and tags beside an ink panel or numbered list
 * @startingPoint section="Carousel" subtitle="Italic quote and tags beside an ink panel or numbered list" */
export interface CarouselSplitProps {
  /** Theme: a sector ("banking" | "insurance" | "datacenter" | "fintech"), "company", a vibrant preset ("desert" | "neon" | "citrus"), or a custom {paper, ink, text, accent, card, cta}: carousels may use any vibrant palette */
  theme?: "banking" | "insurance" | "datacenter" | "fintech" | "company" | "desert" | "neon" | "citrus" | CarouselTheme;
  /** Slide number in the running head */
  index?: number;
  /** Total slides, shown as "03 / 09" */
  total?: number;
  /** Sector after "Expert Voices ·" in the running head */
  sector?: string;
  /** Running foot: left "03 — Post-COVID", right facets "Anti-fraud · Social engineering" */
  foot?: { left?: React.ReactNode; right?: React.ReactNode };
  /** Folder holding the logo and imagery/ (default "assets/") */
  assetBase?: string;
  style?: React.CSSProperties;
  title: React.ReactNode;
  /** Italic quote or claim on the left */
  quote?: React.ReactNode;
  /** Outline tags under the quote */
  tags?: string[];
  /** Right side, option 1: an ink panel */
  panel?: { eyebrow?: React.ReactNode; title: React.ReactNode; body?: React.ReactNode; foot?: React.ReactNode };
  /** Right side, option 2: a numbered list ("The path forward") */
  list?: { eyebrow?: React.ReactNode; items: { title: React.ReactNode; body?: React.ReactNode }[] };
}
export function CarouselSplit(props: CarouselSplitProps): JSX.Element;

// CarouselProcess
/** Numbered process steps with a pass / stop outcome row
 * @startingPoint section="Carousel" subtitle="Numbered process steps with a pass / stop outcome row" */
export interface CarouselProcessProps {
  /** Theme: a sector ("banking" | "insurance" | "datacenter" | "fintech"), "company", a vibrant preset ("desert" | "neon" | "citrus"), or a custom {paper, ink, text, accent, card, cta}: carousels may use any vibrant palette */
  theme?: "banking" | "insurance" | "datacenter" | "fintech" | "company" | "desert" | "neon" | "citrus" | CarouselTheme;
  /** Slide number in the running head */
  index?: number;
  /** Total slides, shown as "03 / 09" */
  total?: number;
  /** Sector after "Expert Voices ·" in the running head */
  sector?: string;
  /** Running foot: left "03 — Post-COVID", right facets "Anti-fraud · Social engineering" */
  foot?: { left?: React.ReactNode; right?: React.ReactNode };
  /** Folder holding the logo and imagery/ (default "assets/") */
  assetBase?: string;
  style?: React.CSSProperties;
  title: React.ReactNode;
  dek?: React.ReactNode;
  /** 3–5 steps */
  steps: { label?: React.ReactNode; title: React.ReactNode; body?: React.ReactNode }[];
  /** Outcome row, e.g. [{tone:"pass", title:"Pass.", body:"Product authorized to launch"}, {tone:"stop", title:"Stop.", body:"…"}] */
  outcomes?: { tone?: "pass" | "stop"; title: React.ReactNode; body?: React.ReactNode }[];
}
export function CarouselProcess(props: CarouselProcessProps): JSX.Element;

// CarouselChecklist
/** Check rows with hairlines; also the company-profile slide
 * @startingPoint section="Carousel" subtitle="Check rows with hairlines; also the company-profile slide" */
export interface CarouselChecklistProps {
  /** Theme: a sector ("banking" | "insurance" | "datacenter" | "fintech"), "company", a vibrant preset ("desert" | "neon" | "citrus"), or a custom {paper, ink, text, accent, card, cta}: carousels may use any vibrant palette */
  theme?: "banking" | "insurance" | "datacenter" | "fintech" | "company" | "desert" | "neon" | "citrus" | CarouselTheme;
  /** Slide number in the running head */
  index?: number;
  /** Total slides, shown as "03 / 09" */
  total?: number;
  /** Sector after "Expert Voices ·" in the running head */
  sector?: string;
  /** Running foot: left "03 — Post-COVID", right facets "Anti-fraud · Social engineering" */
  foot?: { left?: React.ReactNode; right?: React.ReactNode };
  /** Folder holding the logo and imagery/ (default "assets/") */
  assetBase?: string;
  style?: React.CSSProperties;
  title: React.ReactNode;
  dek?: React.ReactNode;
  items: { title: React.ReactNode; body?: React.ReactNode; bullets?: React.ReactNode[] }[];
  /** Larger title for a company or project profile (name as title, one-line descriptor as dek) */
  profile?: boolean;
}
export function CarouselChecklist(props: CarouselChecklistProps): JSX.Element;

// CarouselShare
/** Market-share donut with a short note
 * @startingPoint section="Carousel" subtitle="Market-share donut with a short note" */
export interface CarouselShareProps {
  /** Theme: a sector ("banking" | "insurance" | "datacenter" | "fintech"), "company", a vibrant preset ("desert" | "neon" | "citrus"), or a custom {paper, ink, text, accent, card, cta}: carousels may use any vibrant palette */
  theme?: "banking" | "insurance" | "datacenter" | "fintech" | "company" | "desert" | "neon" | "citrus" | CarouselTheme;
  /** Slide number in the running head */
  index?: number;
  /** Total slides, shown as "03 / 09" */
  total?: number;
  /** Sector after "Expert Voices ·" in the running head */
  sector?: string;
  /** Running foot: left "03 — Post-COVID", right facets "Anti-fraud · Social engineering" */
  foot?: { left?: React.ReactNode; right?: React.ReactNode };
  /** Folder holding the logo and imagery/ (default "assets/") */
  assetBase?: string;
  style?: React.CSSProperties;
  title: React.ReactNode;
  dek?: React.ReactNode;
  /** Share in percent, 0–100 */
  value: number;
  /** What the share is, e.g. "Khazna holds approximately 74% of the UAE market" */
  label: React.ReactNode;
  note?: React.ReactNode;
  /** Name for the remainder, shown as "Rest · 26% · …" */
  rest?: React.ReactNode;
}
export function CarouselShare(props: CarouselShareProps): JSX.Element;

// CarouselContrast
/** Them vs us: legacy approach beside Infoquest's
 * @startingPoint section="Carousel" subtitle="Them vs us: legacy approach beside Infoquest's" */
export interface CarouselContrastProps {
  /** Theme: a sector ("banking" | "insurance" | "datacenter" | "fintech"), "company", a vibrant preset ("desert" | "neon" | "citrus"), or a custom {paper, ink, text, accent, card, cta}: carousels may use any vibrant palette */
  theme?: "banking" | "insurance" | "datacenter" | "fintech" | "company" | "desert" | "neon" | "citrus" | CarouselTheme;
  /** Slide number in the running head */
  index?: number;
  /** Total slides, shown as "03 / 09" */
  total?: number;
  /** Sector after "Expert Voices ·" in the running head */
  sector?: string;
  /** Running foot: left "03 — Post-COVID", right facets "Anti-fraud · Social engineering" */
  foot?: { left?: React.ReactNode; right?: React.ReactNode };
  /** Folder holding the logo and imagery/ (default "assets/") */
  assetBase?: string;
  style?: React.CSSProperties;
  title: React.ReactNode;
  dek?: React.ReactNode;
  /** Left, outlined: the legacy way */
  them: { label: React.ReactNode; items: React.ReactNode[] };
  /** Right, ink with checks: the Infoquest way */
  us: { label: React.ReactNode; items: React.ReactNode[] };
}
export function CarouselContrast(props: CarouselContrastProps): JSX.Element;

// CarouselCTA
/** Closing card: question, purple contact bar, expert credit
 * @startingPoint section="Carousel" subtitle="Closing card: question, purple contact bar, expert credit" */
export interface CarouselCTAProps {
  /** Theme: a sector ("banking" | "insurance" | "datacenter" | "fintech"), "company", a vibrant preset ("desert" | "neon" | "citrus"), or a custom {paper, ink, text, accent, card, cta}: carousels may use any vibrant palette */
  theme?: "banking" | "insurance" | "datacenter" | "fintech" | "company" | "desert" | "neon" | "citrus" | CarouselTheme;
  /** Slide number in the running head */
  index?: number;
  /** Total slides, shown as "03 / 09" */
  total?: number;
  /** Sector after "Expert Voices ·" in the running head */
  sector?: string;
  /** Running foot: left "03 — Post-COVID", right facets "Anti-fraud · Social engineering" */
  foot?: { left?: React.ReactNode; right?: React.ReactNode };
  /** Folder holding the logo and imagery/ (default "assets/") */
  assetBase?: string;
  style?: React.CSSProperties;
  /** Default "Need expert insights?"; name the sectors, e.g. "Need expert insights on banking, compliance, or AI strategy?" */
  question?: React.ReactNode;
  /** Default "Reach out to us" */
  linkLabel?: React.ReactNode;
  /** Default "info@iqnetwork.co" */
  email?: string;
  featuring?: React.ReactNode[];
}
export function CarouselCTA(props: CarouselCTAProps): JSX.Element;

// RegroupSlide
/** 1440×810 regroup content slide with the aurora strip
 * @startingPoint section="Regroup" subtitle="1440×810 regroup content slide with the aurora strip" */
export interface RegroupSlideProps {
  /** Page number in the aurora strip */
  n?: React.ReactNode;
  /** Small bold label above the title: the department or section, e.g. "HR", "AI / Tech" */
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  /** Folder holding the logo files (default "assets/") */
  assetBase?: string;
  style?: React.CSSProperties;
  /** Purple confetti around the edges, for celebrations */
  confetti?: boolean;
  /** Near-black slide */
  dark?: boolean;
  children?: React.ReactNode;
}
export function RegroupSlide(props: RegroupSlideProps): JSX.Element;

// RegroupIcon
/** One icon style for the regroup: line glyph in a filled circle
 * @startingPoint section="Regroup" subtitle="One icon style for the regroup: line glyph in a filled circle" */
export interface RegroupIconProps {
  /** check | arrow | up | down | alert | x | plus | star | spark | chat | users | target | flag */
  name?: "check" | "arrow" | "up" | "down" | "alert" | "x" | "plus" | "star" | "spark" | "chat" | "users" | "target" | "flag";
  size?: number;
  /** Circle colour (default Infoquest purple) */
  color?: string;
  /** Glyph colour (default white) */
  glyph?: string;
  style?: React.CSSProperties;
}
export function RegroupIcon(props: RegroupIconProps): JSX.Element;

// RegroupStatus
/** Status pill: exploring, exploiting, the payoff
 * @startingPoint section="Regroup" subtitle="Status pill: exploring, exploiting, the payoff" */
export interface RegroupStatusProps {
  /** exploring (grey) | exploiting (black) | payoff (purple) | done (green) | risk (amber) */
  tone?: "exploring" | "exploiting" | "payoff" | "done" | "risk";
  /** Label; defaults to the tone */
  children?: React.ReactNode;
}
export function RegroupStatus(props: RegroupStatusProps): JSX.Element;

// RegroupCover
/** Aurora cover with title, date and numbered agenda
 * @startingPoint section="Regroup" subtitle="Aurora cover with title, date and numbered agenda" */
export interface RegroupCoverProps {
  title?: React.ReactNode;
  date?: React.ReactNode;
  /** Section names; numbered 01, 02… with white hairlines */
  agenda?: React.ReactNode[];
  assetBase?: string;
  style?: React.CSSProperties;
}
export function RegroupCover(props: RegroupCoverProps): JSX.Element;

// RegroupDivider
/** Section divider: big title on aurora, photo or black
 * @startingPoint section="Regroup" subtitle="Section divider: big title on aurora, photo or black" */
export interface RegroupDividerProps {
  title: React.ReactNode;
  kicker?: React.ReactNode;
  n?: React.ReactNode;
  /** Full-bleed photo (darkened) instead of the aurora */
  photo?: string;
  ground?: "aurora" | "dark";
  style?: React.CSSProperties;
}
export function RegroupDivider(props: RegroupDividerProps): JSX.Element;

// RegroupPeople
/** People board: joiners, anniversaries, promotions
 * @startingPoint section="Regroup" subtitle="People board: joiners, anniversaries, promotions" */
export interface RegroupPeopleProps {
  /** Page number in the aurora strip */
  n?: React.ReactNode;
  /** Small bold label above the title: the department or section, e.g. "HR", "AI / Tech" */
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  /** Folder holding the logo files (default "assets/") */
  assetBase?: string;
  style?: React.CSSProperties;
  /** Panels. Use people for a single grid, or rows for titled rows (1-year, 2-year anniversary) */
  groups: { title: React.ReactNode; flex?: number; people?: { name: string; role?: string; photo?: string }[]; rows?: { title: React.ReactNode; people: { name: string; role?: string; photo?: string }[] }[] }[];
  confetti?: boolean;
  photoSize?: number;
}
export function RegroupPeople(props: RegroupPeopleProps): JSX.Element;

// RegroupPrompt
/** Icebreaker: a question for the room, with an image
 * @startingPoint section="Regroup" subtitle="Icebreaker: a question for the room, with an image" */
export interface RegroupPromptProps {
  eyebrow?: React.ReactNode;
  /** Bold line above the question, e.g. "Don't hit send yet!" */
  kicker?: React.ReactNode;
  question: React.ReactNode;
  /** Instructions under the question */
  children?: React.ReactNode;
  /** Right-hand image; the aurora when omitted */
  image?: string;
  n?: React.ReactNode;
  style?: React.CSSProperties;
}
export function RegroupPrompt(props: RegroupPromptProps): JSX.Element;

// RegroupReview
/** Quarter review: promised · delivered · faced, with icons
 * @startingPoint section="Regroup" subtitle="Quarter review: promised · delivered · faced, with icons" */
export interface RegroupReviewProps {
  /** Page number in the aurora strip */
  n?: React.ReactNode;
  /** Small bold label above the title: the department or section, e.g. "HR", "AI / Tech" */
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  /** Folder holding the logo files (default "assets/") */
  assetBase?: string;
  style?: React.CSSProperties;
  /** Columns of icon rows; an item can be {text, bold} */
  columns: { title: React.ReactNode; icon?: "arrow" | "check" | "alert" | "x" | "up" | "star"; items: (React.ReactNode | { text: React.ReactNode; bold?: boolean })[] }[];
}
export function RegroupReview(props: RegroupReviewProps): JSX.Element;

// RegroupTheme
/** Theme of the quarter: list rows beside a big panel
 * @startingPoint section="Regroup" subtitle="Theme of the quarter: list rows beside a big panel" */
export interface RegroupThemeProps {
  /** Line above the rows */
  intro?: React.ReactNode;
  items?: React.ReactNode[];
  /** Icon at the end of each row, e.g. "arrow" */
  icon?: "arrow" | "check" | "up" | "star";
  panel: { kicker?: React.ReactNode; title: React.ReactNode; body?: React.ReactNode };
  side?: "left" | "right";
  /** aurora (default) | lavender | plain */
  tone?: "aurora" | "lavender" | "plain";
  n?: React.ReactNode;
  assetBase?: string;
  style?: React.CSSProperties;
}
export function RegroupTheme(props: RegroupThemeProps): JSX.Element;

// RegroupGrid
/** Department index: tiles on the aurora
 * @startingPoint section="Regroup" subtitle="Department index: tiles on the aurora" */
export interface RegroupGridProps {
  title: React.ReactNode;
  items: React.ReactNode[];
  columns?: number;
  n?: React.ReactNode;
  style?: React.CSSProperties;
}
export function RegroupGrid(props: RegroupGridProps): JSX.Element;

// RegroupCards
/** Icon or numbered cards: pillars, steps, updates
 * @startingPoint section="Regroup" subtitle="Icon or numbered cards: pillars, steps, updates" */
export interface RegroupCardsProps {
  /** Page number in the aurora strip */
  n?: React.ReactNode;
  /** Small bold label above the title: the department or section, e.g. "HR", "AI / Tech" */
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  /** Folder holding the logo files (default "assets/") */
  assetBase?: string;
  style?: React.CSSProperties;
  items: { icon?: "up" | "check" | "arrow" | "star" | "spark" | "users" | "target" | "flag" | "chat"; title: React.ReactNode; body?: React.ReactNode; foot?: React.ReactNode; status?: { tone: "exploring" | "exploiting" | "payoff" | "done" | "risk"; label?: React.ReactNode } }[];
  /** Purple number dots instead of icons */
  numbered?: boolean;
}
export function RegroupCards(props: RegroupCardsProps): JSX.Element;

// RegroupStats
/** KPI tiles with trend icons, plus a simple bar chart
 * @startingPoint section="Regroup" subtitle="KPI tiles with trend icons, plus a simple bar chart" */
export interface RegroupStatsProps {
  /** Page number in the aurora strip */
  n?: React.ReactNode;
  /** Small bold label above the title: the department or section, e.g. "HR", "AI / Tech" */
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  /** Folder holding the logo files (default "assets/") */
  assetBase?: string;
  style?: React.CSSProperties;
  tiles: { value: React.ReactNode; label: React.ReactNode; trend?: "up" | "down"; highlight?: boolean }[];
  bars?: { title?: React.ReactNode; data: { label: React.ReactNode; value: number; highlight?: boolean }[] };
}
export function RegroupStats(props: RegroupStatsProps): JSX.Element;

// RegroupLeaderboard
/** Leaderboard with gold, silver and bronze ranks
 * @startingPoint section="Regroup" subtitle="Leaderboard with gold, silver and bronze ranks" */
export interface RegroupLeaderboardProps {
  /** Page number in the aurora strip */
  n?: React.ReactNode;
  /** Small bold label above the title: the department or section, e.g. "HR", "AI / Tech" */
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  /** Folder holding the logo files (default "assets/") */
  assetBase?: string;
  style?: React.CSSProperties;
  columns: { title: React.ReactNode; unit?: React.ReactNode; rows: { name: React.ReactNode; sub?: React.ReactNode; value: number }[] }[];
  /** Small label under each value, e.g. "interactions" */
  unit?: React.ReactNode;
}
export function RegroupLeaderboard(props: RegroupLeaderboardProps): JSX.Element;

// RegroupLogoWall
/** Client logo wall grouped by period
 * @startingPoint section="Regroup" subtitle="Client logo wall grouped by period" */
export interface RegroupLogoWallProps {
  /** Page number in the aurora strip */
  n?: React.ReactNode;
  /** Small bold label above the title: the department or section, e.g. "HR", "AI / Tech" */
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  /** Folder holding the logo files (default "assets/") */
  assetBase?: string;
  style?: React.CSSProperties;
  groups: { title: React.ReactNode; flex?: number; logos: ({ src?: string; name?: string; height?: number } | string)[] }[];
}
export function RegroupLogoWall(props: RegroupLogoWallProps): JSX.Element;

// RegroupQA
/** Q&A and feedback: open space and discussion starters
 * @startingPoint section="Regroup" subtitle="Q&A and feedback: open space and discussion starters" */
export interface RegroupQAProps {
  title?: React.ReactNode;
  open?: { title?: React.ReactNode; body?: React.ReactNode; prompt?: React.ReactNode };
  starters?: React.ReactNode[];
  n?: React.ReactNode;
  assetBase?: string;
  style?: React.CSSProperties;
}
export function RegroupQA(props: RegroupQAProps): JSX.Element;

