import * as React from "react";
export interface CarouselTheme { name?: string; paper?: string; ink?: string; text?: string; accent?: string; card?: string; cta?: string; photo?: string | null; }
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
