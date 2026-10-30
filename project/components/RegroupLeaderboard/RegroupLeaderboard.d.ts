import * as React from "react";
/** Leaderboard with gold, silver and bronze ranks
 * @startingPoint section="Regroup" subtitle="Leaderboard with gold, silver and bronze ranks" */
export interface RegroupLeaderboardProps {
  /** Page number in the aurora strip */
  n?: React.ReactNode;
  /** Small bold label above the title: the department or section, e.g. "HR", "AI / Tech" */
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  /** Folder holding the logo files (default "assets/") */
  assetBase?: string;
  style?: React.CSSProperties;
  columns: { title: React.ReactNode; unit?: React.ReactNode; rows: { name: React.ReactNode; sub?: React.ReactNode; value: number }[] }[];
  /** Small label under each value, e.g. "interactions" */
  unit?: React.ReactNode;
}
export function RegroupLeaderboard(props: RegroupLeaderboardProps): JSX.Element;
