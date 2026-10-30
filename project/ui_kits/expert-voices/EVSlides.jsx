(()=>{
const {Tag,Button}=window.InfoquestDesignSystem_80b250;
function Cover({th,n}){return <Frame label="01 Cover" bg={th.ink}>
 <div style={{position:"absolute",inset:0,backgroundImage:"url("+EV_A+"imagery/"+th.photo+")",backgroundSize:"cover",backgroundPosition:"center"}}></div>
 <div style={{position:"absolute",inset:0,background:"linear-gradient(180deg,rgba(0,0,0,.15) 0%,rgba(0,0,0,.05) 40%,rgba(0,0,0,.6) 100%)"}}></div>
 <RunHead i={1} n={n} sector={th.name} color="#fff"/>
 <div style={{position:"absolute",left:60,right:60,top:250,color:"#fff"}}>
  <div style={{width:60,height:3,background:"#fff",marginBottom:28}}></div>
  <h1 style={{margin:0,font:"700 120px/1.0 var(--font-display)",letterSpacing:"-0.03em"}}>Saudi Banking,<br/>Re<span style={{color:"#8457C9"}}>-</span>Regulated.</h1>
 </div>
 <p style={{position:"absolute",left:60,right:180,bottom:220,margin:0,color:"#fff",font:"400 28px/1.45 var(--font-text)"}}>Cybersecurity, consumer protection, and personal data, how SAMA is reshaping what it takes to operate a bank in the Kingdom.</p>
 <div style={{position:"absolute",left:60,right:60,bottom:56,borderTop:"2px solid rgba(255,255,255,.8)",paddingTop:18,display:"flex",justifyContent:"space-between",alignItems:"flex-end",color:"#fff"}}>
  <div style={{font:"600 18px/1.5 var(--font-text)",letterSpacing:".06em",textTransform:"uppercase"}}>Featuring · Infoquest Expert<br/>Senior Compliance Specialist · Saudi Banking Sector</div><EVLogo variant="white" assetBase={EV_A} height={34}/></div>
</Frame>;}
function Quote({th,n}){return <Frame label="02 Quote" bg={th.paper}>
 <RunHead i={2} n={n} color={th.text} />
 <blockquote style={{position:"absolute",left:60,right:110,top:270,margin:0,font:"italic 300 58px/1.3 var(--font-display)",color:th.text,letterSpacing:"-0.01em"}}>SAMA wants a financial sector that is resilient, innovative, and trustworthy, the banks building toward all three are the ones best placed to grow.</blockquote>
 <div style={{position:"absolute",left:60,top:740,font:"300 20px var(--font-text)",letterSpacing:".06em",textTransform:"uppercase",color:th.text}}>Senior Compliance Specialist · Saudi Banking Sector</div>
 <RunFoot left="01 — The Mandate" right="Resilient · Innovative · Trustworthy" color={th.text}/>
</Frame>;}
function Pillars({th,n}){const P=[["01","Cybersecurity.","National Cybersecurity Authority + SAMA","NCA Essential Controls · SAMA CSF","Recently updated"],["02","Consumer protection.","SAMA Consumer Protection Department","Fair-treatment & disclosure principles","Longstanding priority"],["03","Personal data.","Saudi Data & AI Authority (SDAIA)","PDPL, aligned with GDPR principles","New law, 2022"]];
 const card=th.paper==="#F0E8DB"?"#F8F3EA":"rgba(255,255,255,.08)";
 return <Frame label="03 Pillars" bg={th.paper}>
 <RunHead i={3} n={n} color={th.text}/>
 <h2 style={{position:"absolute",left:60,right:120,top:200,margin:0,font:"300 58px/1.2 var(--font-display)",color:th.text}}>Three pillars define Saudi banking compliance today.</h2>
 <div style={{position:"absolute",left:60,right:60,top:420,display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>{P.map(([k,t,a,f,s])=><div key={k} style={{background:card,padding:"26px 24px",height:440,display:"flex",flexDirection:"column",gap:20,color:th.text}}>
  <div style={{font:"600 15px var(--font-text)",letterSpacing:".3em",color:th.accent}}>PILLAR {k}</div>
  <div style={{font:"700 36px/1.1 var(--font-display)"}}>{t}</div>
  <div><div style={{font:"500 13px var(--font-text)",letterSpacing:".1em",opacity:.6}}>AUTHORITY</div><div style={{font:"400 19px/1.35 var(--font-text)",marginTop:6}}>{a}</div></div>
  <div><div style={{font:"500 13px var(--font-text)",letterSpacing:".1em",opacity:.6}}>KEY FRAMEWORK</div><div style={{font:"400 19px/1.35 var(--font-text)",marginTop:6}}>{f}</div></div>
  <div style={{marginTop:"auto",font:"600 14px var(--font-text)",letterSpacing:".1em",textTransform:"uppercase",color:th.accent}}>— {s}</div></div>)}</div>
 <RunFoot left="02 — The Pillars" right="SAMA · NCA · SDAIA" color={th.text}/>
</Frame>;}
function Concealment({th,n}){return <Frame label="04 Evidence" bg={th.paper}>
 <RunHead i={4} n={n} color={th.text}/>
 <h2 style={{position:"absolute",left:60,right:120,top:200,margin:0,font:"300 58px/1.2 var(--font-display)",color:th.text}}>SAMA rebuilt anti-fraud from the ground up.</h2>
 <div style={{position:"absolute",left:60,width:440,top:410,display:"flex",flexDirection:"column",gap:14,color:th.text}}>
  <div style={{font:"italic 300 30px/1.35 var(--font-display)",marginBottom:30}}>“COVID-19 didn't just disrupt operations, it triggered a global surge in social-engineering that prompted SAMA to rewrite its anti-fraud framework end-to-end.”</div>
  {["Surge in social engineering","Updated anti-fraud framework","Detailed monitoring requirements"].map(t=><Tag key={t} tone="outline" caps style={{fontSize:13,padding:"9px 14px",color:th.text}}>{t}</Tag>)}</div>
 <div style={{position:"absolute",right:60,width:460,top:410,height:500,background:th.ink,color:"#fff",padding:"28px 30px",display:"flex",flexDirection:"column",gap:18}}>
  <div style={{font:"600 14px var(--font-text)",letterSpacing:".1em",textTransform:"uppercase"}}>Local nuance · KSA-specific</div>
  <div style={{font:"700 44px/1.1 var(--font-display)"}}>Commercial concealment.</div>
  <div style={{font:"600 20px/1.5 var(--font-text)"}}>Conducting commercial activity under another party's name or license, recognised as a distinct crime under Saudi law, and sitting squarely inside the compliance remit of every bank in the Kingdom.</div>
  <div style={{marginTop:"auto",font:"600 14px var(--font-text)",letterSpacing:".1em",textTransform:"uppercase"}}>— A compliance signal that doesn't travel</div></div>
 <RunFoot left="03 — Post-COVID" right="Anti-fraud · Social engineering · Commercial concealment" color={th.text}/>
</Frame>;}
function CTA({th,n}){return <Frame label="09 CTA" bg={th.cta}>
 <RunHead i={n} n={n} color="#fff"/>
 <h2 style={{position:"absolute",left:60,right:80,top:360,margin:0,font:"400 72px/1.2 var(--font-display)",color:"#fff",letterSpacing:"-0.01em"}}>Need expert insights on banking, compliance, or AI strategy?</h2>
 <div style={{position:"absolute",left:60,right:60,top:680,background:"#6D41B4",padding:"20px 24px",display:"flex",gap:24,alignItems:"center",color:"#fff",font:"500 24px var(--font-text)"}}><u style={{fontWeight:700}}>Reach out to us</u><span>→</span><span>info@iqnetwork.co</span></div>
 <div style={{position:"absolute",left:60,right:60,bottom:56,borderTop:"2px solid rgba(255,255,255,.8)",paddingTop:18,display:"flex",justifyContent:"space-between",alignItems:"flex-end",color:"#fff"}}>
  <div style={{font:"600 18px/1.5 var(--font-text)",letterSpacing:".06em",textTransform:"uppercase"}}>Featuring · Infoquest Expert<br/>Senior Compliance Specialist · Saudi Banking Sector</div><EVLogo variant="white" assetBase={EV_A} height={34}/></div>
</Frame>;}
window.EV_SLIDES=[Cover,Quote,Pillars,Concealment,CTA];
})();
