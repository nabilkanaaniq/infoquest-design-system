import * as React from "react";
/** The official Infoquest lockup: purple "iq" roundel + purple "info" + "quest" in black (color) or white (inverse). */
export interface LogoProps {
  /** color = light pages; white = aurora bands and photography (default, as in the source PDFs); inverse = solid black/near-black grounds only */
  variant?: "color" | "inverse" | "white";
  /** Just the purple "iq" roundel */
  markOnly?: boolean;
  height?: number;
  /** Path to this design system's assets/ folder, relative to the page. Default "assets/". */
  assetBase?: string;
  style?: React.CSSProperties;
}
export function Logo(props: LogoProps): JSX.Element;
