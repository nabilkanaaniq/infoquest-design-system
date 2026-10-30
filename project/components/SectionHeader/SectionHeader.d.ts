import * as React from "react";
/** Deck section opener: bold eyebrow ("Why Infoquest") over a light Plus Jakarta Sans action title. */
export interface SectionHeaderProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  /** Optional bold supporting line */
  lede?: React.ReactNode;
  inverse?: boolean;
  style?: React.CSSProperties;
}
export function SectionHeader(props: SectionHeaderProps): JSX.Element;
