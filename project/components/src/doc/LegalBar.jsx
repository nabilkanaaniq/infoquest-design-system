
import React from "react";
const LEGAL={
  uk:"Infoquest Network LTD is a company registered in England and Wales (Company Number 14587613). © Infoquest Network LTD. All rights reserved.",
  uae:"Infoquest Network FZ-LLC is a limited liability company registered in the United Arab Emirates under license number 10929. © Infoquest Network FZ-LLC. All rights reserved."
};
export function LegalBar({entity="uk",children,style}){
  return <div style={{background:"var(--surface-inverse)",color:"var(--white)",textAlign:"center",fontSize:8.5,fontWeight:600,lineHeight:1.5,padding:"12px 40px",...style}}>
    {children||LEGAL[entity]||LEGAL.uk}
  </div>;
}
