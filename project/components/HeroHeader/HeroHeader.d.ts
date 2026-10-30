import * as React from "react";
/** Aurora hero header for one-pagers
 * @startingPoint section="Documents" subtitle="Aurora hero header for one-pagers" */
export interface HeroHeaderProps {
  title: React.ReactNode;
  /** Lede paragraphs */
  children?: React.ReactNode;
  assetBase?: string;
  style?: React.CSSProperties;
}
export function HeroHeader(props: HeroHeaderProps): JSX.Element;
