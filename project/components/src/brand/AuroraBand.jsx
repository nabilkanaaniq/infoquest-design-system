import React from "react";
export function AuroraBand({variant="header",height,padding,children,style}){
  const strip=variant==="strip";
  return <div style={{position:"relative",color:"var(--white)",backgroundColor:"var(--aurora-night)",backgroundImage:strip?"var(--gradient-strip)":"var(--bg-aurora)",backgroundSize:"cover",backgroundPosition:variant==="footer"?"left bottom":"left center",minHeight:height??(strip?40:undefined),padding:padding??(strip?"0 56px":"40px 56px"),display:strip?"flex":undefined,alignItems:strip?"center":undefined,...style}}>{children}</div>;
}
