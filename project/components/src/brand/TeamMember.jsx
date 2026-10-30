import React from "react";
export function TeamMember({name,role,phone,email,photo,photoSize=88,tone="gray",layout="stacked",style}){
  const bg=tone==="accent"?"var(--surface-card-accent)":tone==="white"?"var(--white)":"var(--surface-card)";
  const row=layout==="row";
  const pic=photo===undefined?null:photo
    ?<img src={photo} alt="" style={{width:photoSize,height:photoSize,objectFit:"cover",flex:"none",display:"block"}}/>
    :<div style={{width:photoSize,height:photoSize,flex:"none",background:"var(--gray-200)"}}></div>;
  return <div style={{background:bg,padding:"18px 22px 20px",display:"flex",flexDirection:row?"row":"column",gap:row?16:14,alignItems:row?"center":"flex-start",fontFamily:"var(--font-text)",color:"var(--text-primary)",borderRadius:0,...style}}>
    {pic}
    <div style={{display:"flex",flexDirection:"column",gap:2,minWidth:0}}>
      <div style={{fontSize:15,fontWeight:700,lineHeight:1.2}}>{name}</div>
      {role&&<div style={{fontSize:12,fontWeight:600,lineHeight:1.35,color:"var(--text-secondary)"}}>{role}</div>}
      {(phone||email)&&<div style={{display:"flex",flexDirection:"column",gap:1,marginTop:8,fontSize:12,lineHeight:1.45,color:"var(--text-body)"}}>
        {phone&&<div>{phone}</div>}
        {email&&<a href={"mailto:"+email} style={{color:"var(--text-accent)",textDecoration:"underline",textUnderlineOffset:2,overflowWrap:"anywhere"}}>{email}</a>}
      </div>}
    </div>
  </div>;
}
export function TeamGrid({columns=3,gap=14,children,style}){
  return <div style={{display:"grid",gridTemplateColumns:"repeat("+columns+",minmax(0,1fr))",gap,alignItems:"start",...style}}>{children}</div>;
}
