import * as React from "react";
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
