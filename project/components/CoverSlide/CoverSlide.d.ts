import * as React from "react";
/** 1440×810 full-bleed aurora cover
 * @startingPoint section="Slides" subtitle="1440×810 full-bleed aurora cover" */
export interface CoverSlideProps {
  /** Positioned content: headline, body */
  children?: React.ReactNode;
  date?: React.ReactNode;
  assetBase?: string;
  style?: React.CSSProperties;
}
export function CoverSlide(props: CoverSlideProps): JSX.Element;
