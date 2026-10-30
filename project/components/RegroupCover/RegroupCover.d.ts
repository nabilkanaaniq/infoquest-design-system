import * as React from "react";
/** Aurora cover with title, date and numbered agenda
 * @startingPoint section="Regroup" subtitle="Aurora cover with title, date and numbered agenda" */
export interface RegroupCoverProps {
  title?: React.ReactNode;
  date?: React.ReactNode;
  /** Section names; numbered 01, 02… with white hairlines */
  agenda?: React.ReactNode[];
  assetBase?: string;
  style?: React.CSSProperties;
}
export function RegroupCover(props: RegroupCoverProps): JSX.Element;
