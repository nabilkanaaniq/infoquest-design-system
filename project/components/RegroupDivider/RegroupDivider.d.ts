import * as React from "react";
/** Section divider: big title on aurora, photo or black
 * @startingPoint section="Regroup" subtitle="Section divider: big title on aurora, photo or black" */
export interface RegroupDividerProps {
  title: React.ReactNode;
  kicker?: React.ReactNode;
  n?: React.ReactNode;
  /** Full-bleed photo (darkened) instead of the aurora */
  photo?: string;
  ground?: "aurora" | "dark";
  style?: React.CSSProperties;
}
export function RegroupDivider(props: RegroupDividerProps): JSX.Element;
