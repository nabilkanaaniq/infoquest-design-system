import React from "react";
import {AuroraBand} from "../brand/AuroraBand.jsx";
import {ContactCard} from "../brand/ContactCard.jsx";
export function ContactFooter({people=[],layout="row",title="Your Points of Contact",photos=false,style}){
  const side=layout==="side";
  return <AuroraBand variant="footer" padding="28px 72px 30px" style={style}>
    <div style={{display:"flex",gap:side?40:12,flexDirection:side?"row":"column",alignItems:side?"center":"stretch"}}>
      <div style={{font:"var(--type-display)",fontSize:side?28:15,lineHeight:1.1}}>{title}</div>
      <div style={{display:"flex",gap:36,flexWrap:"wrap"}}>
        {people.map(p=><ContactCard key={p.name} {...p} photo={p.photo!==undefined?p.photo:(photos?"":undefined)} photoSize={78}/>)}
      </div>
    </div>
  </AuroraBand>;
}
