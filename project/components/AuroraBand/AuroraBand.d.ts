import * as React from "react";
/** The grainy blue–violet–pink "aurora" gradient field: cover/header bands, contact footers and the thin page-number strip. */
export interface AuroraBandProps {
  /** header/footer = photo gradient; strip = 40px CSS gradient strip at deck page bottoms */
  variant?: "header" | "footer" | "strip";
  height?: number | string;
  padding?: number | string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function AuroraBand(props: AuroraBandProps): JSX.Element;
