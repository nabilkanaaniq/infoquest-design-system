import * as React from "react";
/** List with filled purple circle-check bullets — coverage lists and proof-point rows. */
export interface CheckListProps {
  title?: React.ReactNode;
  /** Italic aside after the title, e.g. "non-exhaustive list" */
  note?: React.ReactNode;
  items: React.ReactNode[];
  gap?: number;
  /** Lay items in a horizontal row */
  inline?: boolean;
  style?: React.CSSProperties;
}
export function CheckList(props: CheckListProps): JSX.Element;
export function CheckIcon(props: { size?: number; color?: string }): JSX.Element;
