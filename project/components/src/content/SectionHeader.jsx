import React from "react";
export function SectionHeader({eyebrow,title,lede,inverse=false,style}){
  const fg=inverse?"var(--white)":"var(--text-primary)";
  return <header style={{display:"flex",flexDirection:"column",gap:10,...style}}>
    {eyebrow&&<div style={{font:"var(--type-eyebrow)",color:fg}}>{eyebrow}</div>}
    <h2 style={{margin:0,font:"var(--type-section)",letterSpacing:"var(--tracking-section)",color:fg,textWrap:"pretty"}}>{title}</h2>
    {lede&&<p style={{margin:0,fontFamily:"var(--font-display)",fontWeight:700,fontSize:13,lineHeight:1.35,color:fg,maxWidth:900}}>{lede}</p>}
  </header>;
}
