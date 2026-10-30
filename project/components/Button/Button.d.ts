import * as React from "react";
/**
 * Square, flat call-to-action. Primary = Infoquest purple; inverse = white hairline frame for aurora backgrounds.
 * @startingPoint section="Core" subtitle="Square CTA buttons" viewport="700x220"
 */
export interface ButtonProps {
  variant?: "primary" | "dark" | "outline" | "inverse" | "ghost";
  size?: "sm" | "md" | "lg";
  /** Appends a → glyph, as in "Reach out to us →" */
  arrow?: boolean;
  disabled?: boolean;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): JSX.Element;
