import * as React from "react";
/** Purple-header table for sample profiles and commercial models. Square, hairline rows. */
export interface DataTableProps {
  columns: React.ReactNode[];
  rows: React.ReactNode[][];
  striped?: boolean;
  /** Full cell grid (commercial model) vs row rules only (sample profiles) */
  grid?: boolean;
  style?: React.CSSProperties;
}
export function DataTable(props: DataTableProps): JSX.Element;
