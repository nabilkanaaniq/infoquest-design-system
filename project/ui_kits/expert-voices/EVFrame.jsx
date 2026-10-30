(()=>{
const {Logo}=window.InfoquestDesignSystem_80b250;
const THEMES={
 banking:{name:"Banking",paper:"#F0E8DB",ink:"#103D2D",text:"#1B1B1B",accent:"#6D41B4",photo:"photo-banking-cover.jpg",cta:"#103D2D"},
 insurance:{name:"Insurance",paper:"#C8381E",ink:"#2C2E17",text:"#FFFFFF",accent:"#FFFFFF",photo:"photo-insurance-cover.jpg",cta:"#2C2E17"},
 datacenter:{name:"Data Centers",paper:"#0C1A3F",ink:"#117BB5",text:"#FFFFFF",accent:"#117BB5",photo:"photo-datacenter-cover.jpg",cta:"#117BB5"},
 fintech:{name:"Fintech",paper:"#B1435E",ink:"#5C8490",text:"#FFFFFF",accent:"#FFFFFF",photo:"photo-fintech-cover.jpg",cta:"#5C8490"}};
const A="../../assets/";
function RunHead({t,i,n,sector,color}){return <div style={{position:"absolute",left:60,right:60,top:52,display:"flex",justifyContent:"space-between",font:"300 22px var(--font-text)",letterSpacing:".06em",textTransform:"uppercase",color}}><span>Expert Voices{sector?" · "+sector:""}</span><i>{String(i).padStart(2,"0")} / {String(n).padStart(2,"0")}</i></div>;}
function RunFoot({left,right,color}){return <div style={{position:"absolute",left:60,right:60,bottom:52,borderTop:"2px solid "+color,paddingTop:16,display:"flex",justifyContent:"space-between",font:"300 18px var(--font-text)",letterSpacing:".06em",textTransform:"uppercase",color}}><span>{left}</span><span>{right}</span></div>;}
function Frame({bg,children,label}){return <div data-screen-label={label} style={{position:"relative",width:1080,height:1080,overflow:"hidden",background:bg,fontFamily:"var(--font-text)"}}>{children}</div>;}
Object.assign(window,{EV_THEMES:THEMES,EV_A:A,RunHead,RunFoot,Frame,EVLogo:Logo});
})();
