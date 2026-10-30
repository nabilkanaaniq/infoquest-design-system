import * as React from "react";
/** Two-column key/value table with grey key cells — proposal feasibility and pricing blocks. */
export interface SpecTableProps {
  rows: { label: React.ReactNode; value: React.ReactNode }[];
  keyWidth?: number;
  style?: React.CSSProperties;
}
export function SpecTable(props: SpecTableProps): JSX.Element;
