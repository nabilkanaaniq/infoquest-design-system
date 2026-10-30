import * as React from "react";
/** 1440×810 regroup content slide with the aurora strip
 * @startingPoint section="Regroup" subtitle="1440×810 regroup content slide with the aurora strip" */
export interface RegroupSlideProps {
  /** Page number in the aurora strip */
  n?: React.ReactNode;
  /** Small bold label above the title: the department or section, e.g. "HR", "AI / Tech" */
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  /** Folder holding the logo files (default "assets/") */
  assetBase?: string;
  style?: React.CSSProperties;
  /** Purple confetti around the edges, for celebrations */
  confetti?: boolean;
  /** Near-black slide */
  dark?: boolean;
  children?: React.ReactNode;
}
export function RegroupSlide(props: RegroupSlideProps): JSX.Element;
