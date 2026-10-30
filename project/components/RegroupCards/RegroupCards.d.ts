import * as React from "react";
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
