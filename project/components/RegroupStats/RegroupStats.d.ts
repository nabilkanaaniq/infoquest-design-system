import * as React from "react";
/** KPI tiles with trend icons, plus a simple bar chart
 * @startingPoint section="Regroup" subtitle="KPI tiles with trend icons, plus a simple bar chart" */
export interface RegroupStatsProps {
  /** Page number in the aurora strip */
  n?: React.ReactNode;
  /** Small bold label above the title: the department or section, e.g. "HR", "AI / Tech" */
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  /** Folder holding the logo files (default "assets/") */
  assetBase?: string;
  style?: React.CSSProperties;
  tiles: { value: React.ReactNode; label: React.ReactNode; trend?: "up" | "down"; highlight?: boolean }[];
  bars?: { title?: React.ReactNode; data: { label: React.ReactNode; value: number; highlight?: boolean }[] };
}
export function RegroupStats(props: RegroupStatsProps): JSX.Element;
