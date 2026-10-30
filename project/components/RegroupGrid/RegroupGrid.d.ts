import * as React from "react";
/** Department index: tiles on the aurora
 * @startingPoint section="Regroup" subtitle="Department index: tiles on the aurora" */
export interface RegroupGridProps {
  title: React.ReactNode;
  items: React.ReactNode[];
  columns?: number;
  n?: React.ReactNode;
  style?: React.CSSProperties;
}
export function RegroupGrid(props: RegroupGridProps): JSX.Element;
