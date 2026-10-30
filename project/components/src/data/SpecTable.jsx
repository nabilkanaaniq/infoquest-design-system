import React from "react";
export function SpecTable({rows=[],keyWidth=180,style}){
  return <div style={{display:"grid",gridTemplateColumns:keyWidth+"px minmax(0,1fr)",fontFamily:"var(--font-text)",...style}}>
    {rows.map((r,i)=><React.Fragment key={i}>
      <div style={{background:"var(--surface-card)",padding:"14px 12px",fontSize:12,fontWeight:600,lineHeight:1.45,color:"var(--text-primary)",display:"flex",flexDirection:"column",justifyContent:"center"}}>{r.label}</div>
      <div style={{padding:"14px 10px",fontSize:12,lineHeight:1.5,color:"var(--text-body)",borderBottom:i<rows.length-1?"1px solid var(--gray-200)":"none",display:"flex",flexDirection:"column",justifyContent:"center"}}>{r.value}</div>
    </React.Fragment>)}
  </div>;
}
