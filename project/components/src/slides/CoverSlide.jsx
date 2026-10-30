import React from "react";
import {Logo} from "../core/Logo.jsx";
export function CoverSlide({children,date="July 2026",assetBase="assets/",style}){
  return <div style={{position:"relative",width:1440,height:810,overflow:"hidden",color:"var(--white)",backgroundColor:"var(--aurora-night)",backgroundImage:"var(--bg-aurora)",backgroundSize:"cover",...style}}>
    <div style={{position:"absolute",left:90,right:90,top:84,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <Logo assetBase={assetBase} height={32}/><span style={{fontSize:18}}>{date}</span>
    </div>
    {children}
  </div>;
}
