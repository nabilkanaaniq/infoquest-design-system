import React from "react";
const TONES={dark:{background:"var(--surface-chip)",color:"var(--white)",border:"1px solid var(--surface-chip)"},
  light:{background:"var(--surface-card)",color:"var(--text-primary)",border:"1px solid var(--surface-card)"},
  outline:{background:"transparent",color:"currentColor",border:"1px solid currentColor"},
  accent:{background:"var(--iq-purple-100)",color:"var(--iq-purple-700)",border:"1px solid var(--iq-purple-100)"}};
export function Tag({tone="dark",caps=false,children,style}){
  return <span style={{display:"inline-flex",alignItems:"center",padding:caps?"5px 10px":"6px 8px",fontFamily:"var(--font-text)",fontSize:caps?10:12,fontWeight:caps?600:500,letterSpacing:caps?"var(--tracking-caps)":0,textTransform:caps?"uppercase":"none",lineHeight:1.2,borderRadius:0,whiteSpace:"nowrap",...TONES[tone],...style}}>{children}</span>;
}
