import React from "react";

/* Expert Voices sector themes. paper = slide ground, ink = cover/CTA/panel ground,
   text = text on paper, accent = numbers and rules on paper, card = tinted card on paper. */
export const THEMES={
  banking:{name:"Banking",paper:"var(--ev-banking-paper)",ink:"var(--ev-banking-ink)",text:"#1B1B1B",accent:"var(--iq-purple-600)",card:"#F8F3EA",cta:"var(--ev-banking-ink)",photo:"photo-banking-cover.jpg"},
  insurance:{name:"Insurance",paper:"var(--ev-insurance-paper)",ink:"var(--ev-insurance-ink)",text:"#FFFFFF",accent:"#FFFFFF",card:"rgba(255,255,255,.08)",cta:"var(--ev-insurance-ink)",photo:"photo-insurance-cover.jpg"},
  datacenter:{name:"Data Centers",paper:"var(--ev-datacenter-paper)",ink:"var(--ev-datacenter-ink)",text:"#FFFFFF",accent:"var(--ev-datacenter-ink)",card:"rgba(255,255,255,.06)",cta:"var(--ev-datacenter-ink)",photo:"photo-datacenter-cover.jpg"},
  fintech:{name:"Fintech",paper:"var(--ev-fintech-paper)",ink:"var(--ev-fintech-ink)",text:"#FFFFFF",accent:"#FFFFFF",card:"rgba(255,255,255,.08)",cta:"var(--ev-fintech-ink)",photo:"photo-fintech-cover.jpg"},
  company:{name:"",cover:"var(--ev-company-paper)",paper:"var(--ev-company-paper)",ink:"var(--ev-company-ink)",text:"#FFFFFF",accent:"var(--iq-purple-500)",card:"rgba(255,255,255,.06)",cta:"var(--ev-company-ink)",photo:null},
  /* Vibrant presets: carousels are information pieces and may leave the brand palette. */
  desert:{name:"",cover:"var(--ev-desert-ink)",paper:"var(--ev-desert-paper)",ink:"var(--ev-desert-ink)",text:"#1A0F08",accent:"var(--ev-desert-ink)",card:"rgba(255,255,255,.2)",cta:"var(--ev-desert-ink)",photo:null},
  neon:{name:"",cover:"var(--ev-neon-paper)",paper:"var(--ev-neon-paper)",ink:"var(--ev-neon-ink)",text:"#FFFFFF",accent:"#19C3B1",card:"rgba(255,255,255,.07)",cta:"var(--ev-neon-ink)",photo:null},
  citrus:{name:"",cover:"var(--ev-citrus-ink)",paper:"var(--ev-citrus-paper)",ink:"var(--ev-citrus-ink)",text:"#141414",accent:"var(--ev-citrus-ink)",card:"rgba(255,255,255,.35)",cta:"var(--ev-citrus-ink)",photo:null}
};
export function theme(t){return typeof t==="object"&&t?{...THEMES.banking,...t}:(THEMES[t]||THEMES.banking);}
export const pad=n=>String(n).padStart(2,"0");
const caps={textTransform:"uppercase",letterSpacing:".06em"};

export function RunHead({index,total,sector,color}){
  return <div style={{display:"flex",justifyContent:"space-between",font:"300 22px var(--font-text)",...caps,color}}>
    <span>Expert Voices{sector?" · "+sector:""}</span>
    {index!=null&&<i>{pad(index)}{total?" / "+pad(total):""}</i>}
  </div>;
}
export function RunFoot({left,right,color}){
  return <div style={{borderTop:"2px solid "+color,paddingTop:16,display:"flex",justifyContent:"space-between",gap:30,font:"300 18px var(--font-text)",...caps,color}}>
    <span style={{whiteSpace:"nowrap"}}>{left}</span><span style={{textAlign:"right"}}>{right}</span>
  </div>;
}
export function Credit({featuring,assetBase,color="#fff"}){
  const Logo=({h})=><img src={assetBase+"logo-infoquest-white.png"} alt="infoquest" style={{height:h,width:"auto",display:"block"}}/>;
  return <div style={{borderTop:"2px solid rgba(255,255,255,.8)",paddingTop:18,display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:30,color}}>
    <div style={{font:"600 18px/1.5 var(--font-text)",...caps}}>{[].concat(featuring||[]).map((l,i)=><div key={i}>{l}</div>)}</div>
    <Logo h={34}/>
  </div>;
}
/* 1080×1080 square frame: running head, body, running foot. */
export function Frame({th,bg,color,index,total,sector,foot,photo,assetBase,children,style}){
  const c=color||th.text;
  return <div style={{position:"relative",width:1080,height:1080,overflow:"hidden",background:bg||th.paper,color:c,fontFamily:"var(--font-text)",boxSizing:"border-box",...style}}>
    {photo&&<div style={{position:"absolute",inset:0,backgroundImage:"url("+(photo.includes("/")?photo:assetBase+"imagery/"+photo)+")",backgroundSize:"cover",backgroundPosition:"center"}}/>}
    {photo&&<div style={{position:"absolute",inset:0,background:"linear-gradient(180deg,rgba(0,0,0,.25) 0%,rgba(0,0,0,.35) 50%,rgba(0,0,0,.7) 100%)"}}/>}
    <div style={{position:"relative",height:"100%",boxSizing:"border-box",padding:"52px 60px",display:"flex",flexDirection:"column"}}>
      <RunHead index={index} total={total} sector={sector} color={c}/>
      <div style={{flex:1,display:"flex",flexDirection:"column",paddingTop:100,minHeight:0}}>{children}</div>
      {foot&&<RunFoot left={foot.left} right={foot.right} color={c}/>}
    </div>
  </div>;
}
export function Title({children,dek,color,size=58}){
  return <div style={{marginBottom:44}}>
    <h2 style={{margin:0,font:"300 "+size+"px/1.2 var(--font-display)",letterSpacing:"-0.01em",color,maxWidth:900}}>{children}</h2>
    {dek&&<p style={{margin:"14px 0 0",font:"400 22px/1.45 var(--font-text)",color,opacity:.85,maxWidth:880}}>{dek}</p>}
  </div>;
}
export const label={font:"600 14px var(--font-text)",letterSpacing:".1em",textTransform:"uppercase"};
