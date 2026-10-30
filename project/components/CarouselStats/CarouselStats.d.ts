import * as React from "react";
export interface CarouselTheme { name?: string; paper?: string; ink?: string; text?: string; accent?: string; card?: string; cta?: string; photo?: string | null; }
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
