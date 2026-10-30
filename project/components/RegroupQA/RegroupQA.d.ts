import * as React from "react";
/** Q&A and feedback: open space and discussion starters
 * @startingPoint section="Regroup" subtitle="Q&A and feedback: open space and discussion starters" */
export interface RegroupQAProps {
  title?: React.ReactNode;
  open?: { title?: React.ReactNode; body?: React.ReactNode; prompt?: React.ReactNode };
  starters?: React.ReactNode[];
  n?: React.ReactNode;
  assetBase?: string;
  style?: React.CSSProperties;
}
export function RegroupQA(props: RegroupQAProps): JSX.Element;
