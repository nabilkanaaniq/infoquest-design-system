import React from "react";
export function ContactCard({name,role,email,phones=[],photo,photoSize=90,inverse=true,style}){
  const fg=inverse?"var(--white)":"var(--text-primary)";
  return <div style={{display:"flex",gap:12,alignItems:"flex-start",color:fg,fontFamily:"var(--font-text)",...style}}>
    {photo!==undefined&&(photo?<img src={photo} alt="" style={{width:photoSize,height:photoSize,objectFit:"cover",flex:"none"}}/>:<div style={{width:photoSize,height:photoSize,flex:"none",background:inverse?"rgba(255,255,255,.18)":"var(--gray-100)"}}></div>)}
    <div style={{display:"flex",flexDirection:"column",gap:1,fontSize:11,lineHeight:1.35}}>
      <div style={{fontWeight:700,fontSize:13}}>{name}</div>
      {role&&<div style={{fontWeight:600}}>{role}</div>}
      {email&&<a href={"mailto:"+email} style={{color:fg,textDecoration:"underline",textUnderlineOffset:2}}>{email}</a>}
      {phones.map((p,i)=><div key={i}>{p}</div>)}
    </div>
  </div>;
}
