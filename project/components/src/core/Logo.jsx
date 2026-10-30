import React from "react";
const FILES={color:"logo-infoquest-color.png",inverse:"logo-infoquest-color-inverse.png",white:"logo-infoquest-white.png"};
export function Logo({variant="white",markOnly=false,height=28,assetBase="assets/",style}){
  const file=markOnly?"mark-iq.png":(FILES[variant]||FILES.inverse);
  return <img src={assetBase+file} alt="infoquest" style={{height,width:"auto",display:"block",...style}}/>;
}
