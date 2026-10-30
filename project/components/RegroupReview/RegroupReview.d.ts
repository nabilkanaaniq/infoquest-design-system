import * as React from "react";
/** Quarter review: promised · delivered · faced, with icons
 * @startingPoint section="Regroup" subtitle="Quarter review: promised · delivered · faced, with icons" */
export interface RegroupReviewProps {
  /** Page number in the aurora strip */
  n?: React.ReactNode;
  /** Small bold label above the title: the department or section, e.g. "HR", "AI / Tech" */
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  /** Folder holding the logo files (default "assets/") */
  assetBase?: string;
  style?: React.CSSProperties;
  /** Columns of icon rows; an item can be {text, bold} */
  columns: { title: React.ReactNode; icon?: "arrow" | "check" | "alert" | "x" | "up" | "star"; items: (React.ReactNode | { text: React.ReactNode; bold?: boolean })[] }[];
}
export function RegroupReview(props: RegroupReviewProps): JSX.Element;
