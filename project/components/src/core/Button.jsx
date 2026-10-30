import React from "react";
const SIZES={sm:{padding:"8px 14px",fontSize:12},md:{padding:"11px 20px",fontSize:14},lg:{padding:"15px 28px",fontSize:16}};
const VARIANTS={
  primary:{background:"var(--iq-purple-600)",color:"var(--white)",border:"1.5px solid var(--iq-purple-600)"},
  dark:{background:"var(--gray-900)",color:"var(--white)",border:"1.5px solid var(--gray-900)"},
  outline:{background:"transparent",color:"var(--text-primary)",border:"1.5px solid var(--text-primary)"},
  inverse:{background:"transparent",color:"var(--white)",border:"var(--border-frame-inverse)"},
  ghost:{background:"transparent",color:"var(--iq-purple-600)",border:"1.5px solid transparent",textDecoration:"underline",textUnderlineOffset:3}
};
export function Button({variant="primary",size="md",arrow=false,disabled=false,href,onClick,children,style,...rest}){
  const [hover,setHover]=React.useState(false);
  const v=VARIANTS[variant]||VARIANTS.primary;
  const hov=hover&&!disabled?(variant==="primary"?{background:"var(--iq-purple-700)",borderColor:"var(--iq-purple-700)"}:variant==="dark"?{background:"var(--black)"}:variant==="outline"?{background:"var(--text-primary)",color:"var(--white)"}:variant==="inverse"?{background:"rgba(255,255,255,.12)"}:{color:"var(--iq-purple-700)"}):{};
  const Tag=href?"a":"button";
  return <Tag href={href} onClick={disabled?undefined:onClick} disabled={Tag==="button"?disabled:undefined}
    onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
    style={{display:"inline-flex",alignItems:"center",gap:10,fontFamily:"var(--font-text)",fontWeight:600,lineHeight:1.1,letterSpacing:0,borderRadius:0,cursor:disabled?"not-allowed":"pointer",opacity:disabled?.4:1,textDecoration:"none",transition:"background var(--dur) var(--ease),color var(--dur) var(--ease)",...SIZES[size],...v,...hov,...style}} {...rest}>
    {children}{arrow&&<span aria-hidden="true" style={{fontWeight:400}}>→</span>}
  </Tag>;
}
