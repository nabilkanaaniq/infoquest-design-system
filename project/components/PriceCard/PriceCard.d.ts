import * as React from "react";
/** Package / rate card from the pricing one-pagers: title, rule, struck-through list price, purple price, optional "Save 30%" bar. */
export interface PriceCardProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Struck-through reference price */
  was?: React.ReactNode;
  price: React.ReactNode;
  unit?: React.ReactNode;
  /** Lavender savings bar beneath the card */
  save?: React.ReactNode;
  style?: React.CSSProperties;
}
export function PriceCard(props: PriceCardProps): JSX.Element;
