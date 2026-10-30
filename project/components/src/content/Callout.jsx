import React from "react";
export function Callout({title,children,inverse=false,style}){
  const fg=inverse?"var(--white)":"var(--text-primary)";
  return <div style={{borderLeft:inverse?"1px solid rgba(255,255,255,.5)":"1px solid var(--gray-500)",paddingLeft:12,display:"flex",flexDirection:"column",gap:3,...style}}>
    {title&&<div style={{fontFamily:"var(--font-text)",fontWeight:600,fontSize:16,lineHeight:1.2,color:fg}}>{title}</div>}
    <div style={{fontSize:12,lineHeight:1.4,color:fg}}>{children}</div>
  </div>;
}
