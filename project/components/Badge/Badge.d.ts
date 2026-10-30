import * as React from "react";
/** Feasibility confidence flag used next to fill rates in proposals ("100% fill (4 of 4) HIGH CONFIDENCE"). */
export interface BadgeProps {
  level?: "high" | "medium" | "low";
  /** Override label; defaults to "<Level> confidence" */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Badge(props: BadgeProps): JSX.Element;
