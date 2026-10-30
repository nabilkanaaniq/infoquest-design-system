import * as React from "react";
/** "Your Points of Contact" person block: square headshot + name, role, email, phone(s). */
export interface ContactCardProps {
  name: React.ReactNode;
  role?: React.ReactNode;
  email?: string;
  phones?: React.ReactNode[];
  /** Image URL; pass "" for a placeholder square; omit to hide the photo */
  photo?: string;
  photoSize?: number;
  /** White text for aurora footers (default) */
  inverse?: boolean;
  style?: React.CSSProperties;
}
export function ContactCard(props: ContactCardProps): JSX.Element;
