import * as React from "react";
/** Headline metric: small label, big purple value, bold caption, optional description ("Speed / <2 hrs / Expert list delivery"). */
export interface StatProps {
  label?: React.ReactNode;
  value: React.ReactNode;
  caption?: React.ReactNode;
  /** Description paragraph below */
  children?: React.ReactNode;
  align?: "left" | "center";
  /** doc = 12px labels (pages); deck = 16px labels (1440 slides) */
  size?: "doc" | "deck";
  style?: React.CSSProperties;
}
export function Stat(props: StatProps): JSX.Element;
