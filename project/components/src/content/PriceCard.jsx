import React from "react";
export function PriceCard({title,subtitle,was,price,unit,save,style}){
  return <div style={{display:"flex",flexDirection:"column",gap:10,...style}}>
    <div style={{background:"var(--surface-card)",padding:"22px 24px 18px",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center"}}>
      <div style={{fontFamily:"var(--font-text)",fontWeight:600,fontSize:20,color:"var(--text-primary)"}}>{title}</div>
      {subtitle&&<div style={{fontSize:12,marginTop:10,color:"var(--text-body)"}}>{subtitle}</div>}
      <div style={{width:"64%",height:1,background:"var(--border-rule)",margin:"16px 0 12px"}}></div>
      {was&&<div style={{fontSize:12,color:"var(--text-muted)",textDecoration:"line-through"}}>{was}</div>}
      <div style={{fontFamily:"var(--font-text)",fontWeight:700,fontSize:20,color:"var(--text-accent)",marginTop:4}}>{price}</div>
      {unit&&<div style={{fontSize:12,marginTop:4,color:"var(--text-body)"}}>{unit}</div>}
    </div>
    {save&&<div style={{background:"var(--iq-purple-100)",padding:"10px 12px",textAlign:"center",fontWeight:700,fontSize:14,color:"var(--text-primary)"}}>{save}</div>}
  </div>;
}
