import * as React from "react";
/** Status pill: exploring, exploiting, the payoff
 * @startingPoint section="Regroup" subtitle="Status pill: exploring, exploiting, the payoff" */
export interface RegroupStatusProps {
  /** exploring (grey) | exploiting (black) | payoff (purple) | done (green) | risk (amber) */
  tone?: "exploring" | "exploiting" | "payoff" | "done" | "risk";
  /** Label; defaults to the tone */
  children?: React.ReactNode;
}
export function RegroupStatus(props: RegroupStatusProps): JSX.Element;
