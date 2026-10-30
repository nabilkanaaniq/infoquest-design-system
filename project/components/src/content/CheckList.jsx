import React from "react";
export function CheckIcon({size=18,color="var(--iq-purple-600)"}){
  return <span aria-hidden="true" style={{width:size,height:size,flex:"none",borderRadius:"var(--radius-dot)",background:color,display:"inline-flex",alignItems:"center",justifyContent:"center"}}>
    <svg width={size*.6} height={size*.6} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
  </span>;
}
export function CheckList({title,note,items=[],gap=14,inline=false,style}){
  return <div style={{display:"flex",flexDirection:"column",gap:16,...style}}>
    {title&&<div style={{display:"flex",alignItems:"baseline",gap:8}}><span style={{fontWeight:600,fontSize:15,color:"var(--text-primary)"}}>{title}</span>{note&&<i style={{fontSize:11,color:"var(--text-secondary)"}}>{note}</i>}</div>}
    <ul style={{listStyle:"none",margin:0,padding:0,display:"flex",flexDirection:inline?"row":"column",flexWrap:"wrap",gap:inline?"10px 40px":gap}}>
      {items.map((it,i)=><li key={i} style={{display:"flex",alignItems:"center",gap:8,fontSize:12,color:"var(--text-body)"}}><CheckIcon/>{it}</li>)}
    </ul>
  </div>;
}
