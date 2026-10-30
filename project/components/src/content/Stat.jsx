import React from "react";
export function Stat({label,value,caption,children,align="left",size="doc",style}){
  const t=size==="deck"?16:12;
  return <div style={{display:"flex",flexDirection:"column",gap:4,textAlign:align,...style}}>
    {label&&<div style={{fontFamily:"var(--font-text)",fontWeight:600,fontSize:t,color:"var(--text-primary)"}}>{label}</div>}
    <div style={{font:"var(--type-stat)",color:"var(--text-accent)",letterSpacing:"-0.01em"}}>{value}</div>
    {caption&&<div style={{fontFamily:"var(--font-text)",fontWeight:600,fontSize:t,color:"var(--text-primary)"}}>{caption}</div>}
    {children&&<div style={{marginTop:size==="deck"?28:16,fontSize:t,lineHeight:1.35,color:"var(--text-body)"}}>{children}</div>}
  </div>;
}
