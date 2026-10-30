import * as React from "react";
/** Letter page: header, body, footer, legal bar
 * @startingPoint section="Documents" subtitle="Letter page: header, body, footer, legal bar" */
export interface DocPageProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function DocPage(props: DocPageProps): JSX.Element;
