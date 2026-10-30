import * as React from "react";
export interface CarouselTheme { name?: string; paper?: string; ink?: string; text?: string; accent?: string; card?: string; cta?: string; photo?: string | null; }
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
