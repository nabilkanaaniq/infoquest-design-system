import * as React from "react";
/** Aurora footer with points of contact
 * @startingPoint section="Documents" subtitle="Aurora footer with points of contact" */
export interface ContactFooterPerson {
  name: string;
  role?: string;
  email?: string;
  phones?: React.ReactNode[];
  /** Image URL; "" draws a placeholder square */
  photo?: string;
}
export interface ContactFooterProps {
  people: ContactFooterPerson[];
  layout?: "row" | "side";
  title?: React.ReactNode;
  /** Placeholder squares for people with no photo */
  photos?: boolean;
  style?: React.CSSProperties;
}
export function ContactFooter(props: ContactFooterProps): JSX.Element;
