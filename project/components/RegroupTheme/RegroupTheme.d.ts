import * as React from "react";
/** Theme of the quarter: list rows beside a big panel
 * @startingPoint section="Regroup" subtitle="Theme of the quarter: list rows beside a big panel" */
export interface RegroupThemeProps {
  /** Line above the rows */
  intro?: React.ReactNode;
  items?: React.ReactNode[];
  /** Icon at the end of each row, e.g. "arrow" */
  icon?: "arrow" | "check" | "up" | "star";
  panel: { kicker?: React.ReactNode; title: React.ReactNode; body?: React.ReactNode };
  side?: "left" | "right";
  /** aurora (default) | lavender | plain */
  tone?: "aurora" | "lavender" | "plain";
  n?: React.ReactNode;
  assetBase?: string;
  style?: React.CSSProperties;
}
export function RegroupTheme(props: RegroupThemeProps): JSX.Element;
