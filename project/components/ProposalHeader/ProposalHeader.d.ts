import * as React from "react";
/** Aurora header with the PROPOSAL frame
 * @startingPoint section="Documents" subtitle="Aurora header with the PROPOSAL frame" */
export interface ProposalHeaderProps {
  /** Client name; shown upper-cased in the label */
  client: string;
  /** Folder holding the logo files, with trailing slash */
  assetBase?: string;
  style?: React.CSSProperties;
}
export function ProposalHeader(props: ProposalHeaderProps): JSX.Element;
