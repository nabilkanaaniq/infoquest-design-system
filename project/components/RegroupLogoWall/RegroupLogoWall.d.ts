import * as React from "react";
/** Client logo wall grouped by period
 * @startingPoint section="Regroup" subtitle="Client logo wall grouped by period" */
export interface RegroupLogoWallProps {
  /** Page number in the aurora strip */
  n?: React.ReactNode;
  /** Small bold label above the title: the department or section, e.g. "HR", "AI / Tech" */
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  /** Folder holding the logo files (default "assets/") */
  assetBase?: string;
  style?: React.CSSProperties;
  groups: { title: React.ReactNode; flex?: number; logos: ({ src?: string; name?: string; height?: number } | string)[] }[];
}
export function RegroupLogoWall(props: RegroupLogoWallProps): JSX.Element;
