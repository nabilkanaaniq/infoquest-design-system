import * as React from "react";
/** Icebreaker: a question for the room, with an image
 * @startingPoint section="Regroup" subtitle="Icebreaker: a question for the room, with an image" */
export interface RegroupPromptProps {
  eyebrow?: React.ReactNode;
  /** Bold line above the question, e.g. "Don't hit send yet!" */
  kicker?: React.ReactNode;
  question: React.ReactNode;
  /** Instructions under the question */
  children?: React.ReactNode;
  /** Right-hand image; the aurora when omitted */
  image?: string;
  n?: React.ReactNode;
  style?: React.CSSProperties;
}
export function RegroupPrompt(props: RegroupPromptProps): JSX.Element;
