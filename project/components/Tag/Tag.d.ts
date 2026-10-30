import * as React from "react";
/** Small square label — package perks ("No expiration"), carousel facets ("SURGE IN SOCIAL ENGINEERING"), category headers. */
export interface TagProps {
  tone?: "dark" | "light" | "outline" | "accent";
  /** Uppercase tracked micro-label style (Expert Voices) */
  caps?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Tag(props: TagProps): JSX.Element;
