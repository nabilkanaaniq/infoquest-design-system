import * as React from "react";
/**
 * Team member card: square photo, name, role, phone and email on a flat tinted square.
 * @startingPoint section="Brand" subtitle="Team member card" viewport="700x300"
 */
export interface TeamMemberProps {
  name: React.ReactNode;
  role?: React.ReactNode;
  phone?: React.ReactNode;
  /** Rendered as a mailto link */
  email?: string;
  /** Optional square image URL. Omit it for a text-only card (the default); "" draws a placeholder square */
  photo?: string;
  photoSize?: number;
  tone?: "gray" | "accent" | "white";
  /** "row" puts the photo beside the text */
  layout?: "stacked" | "row";
  style?: React.CSSProperties;
}
export function TeamMember(props: TeamMemberProps): JSX.Element;
