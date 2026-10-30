import React from "react";
export function DocPage({children,style}){
  return <div style={{width:816,minHeight:1056,background:"var(--white)",display:"flex",flexDirection:"column",boxShadow:"0 0 0 1px var(--border-subtle)",...style}}>{children}</div>;
}
