import * as React from "react";
/** Term / footnote beside a thin neutral grey hairline ("10-minute grace period", "Calls over one hour"). */
export interface CalloutProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  inverse?: boolean;
  style?: React.CSSProperties;
}
export function Callout(props: CalloutProps): JSX.Element;
