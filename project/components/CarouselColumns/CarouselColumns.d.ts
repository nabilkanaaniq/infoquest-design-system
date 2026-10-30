import * as React from "react";
export interface CarouselTheme { name?: string; paper?: string; ink?: string; text?: string; accent?: string; card?: string; cta?: string; photo?: string | null; }
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
