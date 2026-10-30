import React from "react";
import {AuroraBand} from "../brand/AuroraBand.jsx";
import {SectionHeader} from "../content/SectionHeader.jsx";
export function ContentSlide({n,eyebrow,title,lede,children,style}){
  return <div style={{position:"relative",width:1440,height:810,background:"var(--surface-page)",overflow:"hidden",...style}}>
    <SectionHeader eyebrow={eyebrow} title={title} lede={lede} style={{position:"absolute",left:90,right:90,top:84}}/>
    <div style={{position:"absolute",left:90,right:90,top:lede?250:200,bottom:96}}>{children}</div>
    <AuroraBand variant="strip" style={{position:"absolute",left:0,right:0,bottom:0,height:64,padding:"0 90px"}}><span style={{fontSize:14,color:"var(--white)"}}>{n}</span></AuroraBand>
  </div>;
}
