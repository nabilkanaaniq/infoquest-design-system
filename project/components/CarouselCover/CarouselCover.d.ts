import * as React from "react";
export interface CarouselTheme { name?: string; paper?: string; ink?: string; text?: string; accent?: string; card?: string; cta?: string; photo?: string | null; }
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
