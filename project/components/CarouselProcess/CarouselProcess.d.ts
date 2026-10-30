import * as React from "react";
export interface CarouselTheme { name?: string; paper?: string; ink?: string; text?: string; accent?: string; card?: string; cta?: string; photo?: string | null; }
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
