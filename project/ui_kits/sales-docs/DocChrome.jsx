(()=>{
const {AuroraBand,Logo,Button,ContactCard}=window.InfoquestDesignSystem_80b250;
const A="../../assets/";
function ProposalHeader({client}){return <AuroraBand padding="0 72px" style={{height:120,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
  <Logo assetBase={A} height={34}/><Button variant="inverse" size="md" style={{fontWeight:500,letterSpacing:".01em",cursor:"default"}}>PROPOSAL · PREPARED FOR {client.toUpperCase()}</Button></AuroraBand>;}
function HeroHeader({title,children}){return <AuroraBand padding="28px 56px 36px"><Logo assetBase={A} height={26}/>
  <h1 style={{margin:"28px 0 12px",font:"var(--type-display)",fontSize:36,letterSpacing:"-0.02em"}}>{title}</h1>
  <div style={{fontSize:16,lineHeight:1.45,display:"flex",flexDirection:"column",gap:10}}>{children}</div></AuroraBand>;}
function ContactFooter({people,layout="row",title="Your Points of Contact",photos=false}){return <AuroraBand variant="footer" padding="28px 72px 30px">
  <div style={{display:"flex",gap:layout==="side"?40:12,flexDirection:layout==="side"?"row":"column",alignItems:layout==="side"?"center":"stretch"}}>
  <div style={{font:"var(--type-display)",fontSize:layout==="side"?28:15,lineHeight:1.1}}>{title}</div>
  <div style={{display:"flex",gap:36,flexWrap:"wrap"}}>{people.map(p=><ContactCard key={p.name} {...p} photo={photos?"":undefined} photoSize={78}/>)}</div></div></AuroraBand>;}
function LegalBar({entity="uk"}){return <div style={{background:"var(--surface-inverse)",color:"#fff",textAlign:"center",fontSize:8.5,fontWeight:600,lineHeight:1.5,padding:"12px 40px"}}>{entity==="uae"?"Infoquest Network FZ-LLC is a limited liability company registered in the United Arab Emirates under license number 10929. © Infoquest Network FZ-LLC. All rights reserved.":"Infoquest Network LTD is a company registered in England and Wales (Company Number 14587613). © Infoquest Network LTD. All rights reserved."}</div>;}
function Page({children}){return <div data-screen-label="page" style={{width:816,minHeight:1056,background:"var(--white)",display:"flex",flexDirection:"column",boxShadow:"0 0 0 1px rgba(0,0,0,.06)"}}>{children}</div>;}
Object.assign(window,{ProposalHeader,HeroHeader,ContactFooter,LegalBar,Page});
})();
