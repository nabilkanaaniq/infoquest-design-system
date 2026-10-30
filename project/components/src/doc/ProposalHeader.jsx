import React from "react";
import {AuroraBand} from "../brand/AuroraBand.jsx";
import {Logo} from "../core/Logo.jsx";
import {Button} from "../core/Button.jsx";
export function ProposalHeader({client,assetBase="assets/",style}){
  return <AuroraBand padding="0 72px" style={{height:120,display:"flex",alignItems:"center",justifyContent:"space-between",...style}}>
    <Logo assetBase={assetBase} height={34}/>
    <Button variant="inverse" size="md" style={{fontWeight:500,letterSpacing:".01em",cursor:"default"}}>PROPOSAL · PREPARED FOR {String(client).toUpperCase()}</Button>
  </AuroraBand>;
}
