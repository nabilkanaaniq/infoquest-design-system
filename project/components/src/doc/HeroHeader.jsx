import React from "react";
import {AuroraBand} from "../brand/AuroraBand.jsx";
import {Logo} from "../core/Logo.jsx";
export function HeroHeader({title,children,assetBase="assets/",style}){
  return <AuroraBand padding="28px 56px 36px" style={style}>
    <Logo assetBase={assetBase} height={26}/>
    <h1 style={{margin:"28px 0 12px",font:"var(--type-display)",fontSize:36,letterSpacing:"-0.02em"}}>{title}</h1>
    <div style={{fontSize:16,lineHeight:1.45,display:"flex",flexDirection:"column",gap:10}}>{children}</div>
  </AuroraBand>;
}
