import React from "react";
export function Steps({steps=[],style}){
  return <div style={{position:"relative",display:"grid",gridTemplateColumns:"repeat("+steps.length+",minmax(0,1fr))",gap:24,...style}}>
    <div style={{position:"absolute",top:18,left:"calc(100% / "+steps.length*2+")",right:"calc(100% / "+steps.length*2+")",height:1,background:"var(--gray-300)"}}></div>
    {steps.map((s,i)=><div key={i} style={{position:"relative",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",gap:8}}>
      <div style={{width:36,height:36,borderRadius:"var(--radius-dot)",background:"var(--iq-purple-600)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:16}}>{i+1}</div>
      <div style={{fontWeight:600,fontSize:14,color:"var(--text-primary)"}}>{s.title}</div>
      <div style={{fontSize:11,lineHeight:1.35,color:"var(--text-body)",maxWidth:240}}>{s.body}</div>
    </div>)}
  </div>;
}
