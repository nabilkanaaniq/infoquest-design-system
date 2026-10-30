import * as React from "react";
/** Numbered engagement workflow — purple numbered dots joined by a grey hairline. */
export interface StepsProps {
  steps: { title: React.ReactNode; body?: React.ReactNode }[];
  style?: React.CSSProperties;
}
export function Steps(props: StepsProps): JSX.Element;
