import * as React from "react";
/** Flat, square tinted card — value props ("Custom-Sourced Experts"), service lines, additional services. No border, no shadow. */
export interface FeatureCardProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  children?: React.ReactNode;
  /** gray = #F3F3F3 default; accent = lavender (lead service); white */
  tone?: "gray" | "accent" | "white";
  align?: "left" | "center";
  /** lg renders a purple service-line title */
  titleSize?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
}
export function FeatureCard(props: FeatureCardProps): JSX.Element;
