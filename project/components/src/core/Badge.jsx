import React from "react";
const LEVELS={high:{bg:"var(--signal-high)",label:"High confidence"},medium:{bg:"var(--signal-medium)",label:"Medium confidence"},low:{bg:"var(--signal-low)",label:"Low confidence"}};
export function Badge({level="high",children,style}){
  const l=LEVELS[level]||LEVELS.high;
  return <span style={{display:"inline-block",padding:"3px 5px",background:l.bg,color:"var(--white)",fontFamily:"var(--font-text)",fontSize:"var(--fs-badge)",fontWeight:700,letterSpacing:".02em",textTransform:"uppercase",lineHeight:1.2,borderRadius:0,verticalAlign:"middle",...style}}>{children||l.label}</span>;
}
