import * as React from "react";
/** 1440×810 content slide with strip footer
 * @startingPoint section="Slides" subtitle="1440×810 content slide with strip footer" */
export interface ContentSlideProps {
  /** Page number, shown in the aurora strip */
  n?: React.ReactNode;
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  lede?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function ContentSlide(props: ContentSlideProps): JSX.Element;
