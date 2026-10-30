import * as React from "react";
export interface CarouselTheme { name?: string; paper?: string; ink?: string; text?: string; accent?: string; card?: string; cta?: string; photo?: string | null; }
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
