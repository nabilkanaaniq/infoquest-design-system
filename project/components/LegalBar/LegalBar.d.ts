import * as React from "react";
/** Black legal strip at the foot of a document
 * @startingPoint section="Documents" subtitle="Black legal strip at the foot of a document" */
export interface LegalBarProps {
  /** "uk" (default, Infoquest Network LTD) or "uae" (Infoquest Network FZ-LLC, for GCC/MENA clients) */
  entity?: "uk" | "uae";
  /** Replaces the legal line */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function LegalBar(props: LegalBarProps): JSX.Element;
