(()=>{
const {AuroraBand,Logo,SectionHeader}=window.InfoquestDesignSystem_80b250;
const A="../assets/";
function Fit({children}){const [s,setS]=React.useState(1);React.useEffect(()=>{const f=()=>setS(Math.min(innerWidth/1440,innerHeight/810));f();addEventListener('resize',f);return()=>removeEventListener('resize',f)},[]);
 return <div style={{width:1440*s,height:810*s,overflow:"hidden"}}><div style={{width:1440,height:810,transform:"scale("+s+")",transformOrigin:"0 0"}}>{children}</div></div>;}
function ContentSlide({n,eyebrow,title,lede,children,label}){return <div data-screen-label={label} style={{position:"relative",width:1440,height:810,background:"var(--surface-page)",overflow:"hidden"}}>
 <SectionHeader eyebrow={eyebrow} title={title} lede={lede} style={{position:"absolute",left:90,right:90,top:84}}/>
 <div style={{position:"absolute",left:90,right:90,top:lede?250:200,bottom:96}}>{children}</div>
 <AuroraBand variant="strip" style={{position:"absolute",left:0,right:0,bottom:0,height:64,padding:"0 90px"}}><span style={{fontSize:14,color:"#fff"}}>{n}</span></AuroraBand></div>;}
function CoverSlide({label,children,date="July 2026"}){return <div data-screen-label={label} style={{position:"relative",width:1440,height:810,overflow:"hidden",color:"#fff",backgroundColor:"var(--aurora-night)",backgroundImage:"var(--bg-aurora)",backgroundSize:"cover"}}>
 <div style={{position:"absolute",left:90,right:90,top:84,display:"flex",justifyContent:"space-between",alignItems:"center"}}><Logo assetBase={A} height={32}/><span style={{fontSize:18}}>{date}</span></div>{children}</div>;}
Object.assign(window,{Fit,ContentSlide,CoverSlide});
})();
