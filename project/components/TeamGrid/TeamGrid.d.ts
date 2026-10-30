import * as React from "react";
/**
 * Equal-column grid for TeamMember cards.
 * @startingPoint section="Brand" subtitle="Team grid" viewport="700x300"
 */
export interface TeamGridProps {
  columns?: number;
  gap?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function TeamGrid(props: TeamGridProps): JSX.Element;
