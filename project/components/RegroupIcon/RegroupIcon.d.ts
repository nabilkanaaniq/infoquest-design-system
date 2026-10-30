import * as React from "react";
/** One icon style for the regroup: line glyph in a filled circle
 * @startingPoint section="Regroup" subtitle="One icon style for the regroup: line glyph in a filled circle" */
export interface RegroupIconProps {
  /** check | arrow | up | down | alert | x | plus | star | spark | chat | users | target | flag */
  name?: "check" | "arrow" | "up" | "down" | "alert" | "x" | "plus" | "star" | "spark" | "chat" | "users" | "target" | "flag";
  size?: number;
  /** Circle colour (default Infoquest purple) */
  color?: string;
  /** Glyph colour (default white) */
  glyph?: string;
  style?: React.CSSProperties;
}
export function RegroupIcon(props: RegroupIconProps): JSX.Element;
