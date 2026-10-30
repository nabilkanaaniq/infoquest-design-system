import * as React from "react";
/** People board: joiners, anniversaries, promotions
 * @startingPoint section="Regroup" subtitle="People board: joiners, anniversaries, promotions" */
export interface RegroupPeopleProps {
  /** Page number in the aurora strip */
  n?: React.ReactNode;
  /** Small bold label above the title: the department or section, e.g. "HR", "AI / Tech" */
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  /** Folder holding the logo files (default "assets/") */
  assetBase?: string;
  style?: React.CSSProperties;
  /** Panels. Use people for a single grid, or rows for titled rows (1-year, 2-year anniversary) */
  groups: { title: React.ReactNode; flex?: number; people?: { name: string; role?: string; photo?: string }[]; rows?: { title: React.ReactNode; people: { name: string; role?: string; photo?: string }[] }[] }[];
  confetti?: boolean;
  photoSize?: number;
}
export function RegroupPeople(props: RegroupPeopleProps): JSX.Element;
