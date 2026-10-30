import React from "react";
export function FeatureCard({eyebrow,title,children,tone="gray",align="left",titleSize="md",style}){
  const bg=tone==="accent"?"var(--surface-card-accent)":tone==="white"?"var(--white)":"var(--surface-card)";
  const ts={sm:{fontSize:13,fontWeight:700},md:{fontSize:17,fontWeight:600},lg:{fontSize:20,fontWeight:700,color:"var(--text-accent)"}}[titleSize];
  return <div style={{background:bg,padding:"18px 22px 20px",display:"flex",flexDirection:"column",gap:6,textAlign:align,borderRadius:0,...style}}>
    {eyebrow&&<div style={{fontSize:11,fontWeight:600,color:"var(--text-primary)"}}>{eyebrow}</div>}
    <div style={{fontFamily:"var(--font-text)",lineHeight:1.2,color:"var(--text-primary)",...ts}}>{title}</div>
    {children&&<div style={{fontSize:12,lineHeight:1.45,color:"var(--text-body)"}}>{children}</div>}
  </div>;
}
