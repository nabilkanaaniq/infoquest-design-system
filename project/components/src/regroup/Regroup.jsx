import React from "react";

/* Quarterly Regroup: internal 1440×810 slides. Informal: icons, confetti and photos are allowed here (and only here). */
const P={purple:"var(--iq-purple-600)",lav:"var(--iq-purple-100)",card:"var(--surface-card)",ink:"var(--text-primary)",body:"var(--text-body)",sec:"var(--text-secondary)",rule:"var(--border-rule)"};
const AURORA={background:"var(--aurora-night) var(--bg-aurora) center/cover no-repeat",color:"#fff"};

const PATHS={
  check:["M20 6 9 17l-5-5"],
  arrow:["M5 12h14","m12 5 7 7-7 7"],
  up:["m5 12 7-7 7 7","M12 19V5"],
  down:["M12 5v14","m19 12-7 7-7-7"],
  alert:["M12 7v6","M12 17h.01"],
  x:["M18 6 6 18","m6 6 12 12"],
  plus:["M5 12h14","M12 5v14"],
  star:["M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"],
  spark:["M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2z"],
  chat:["M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"],
  users:["M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2","M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0","M22 21v-2a4 4 0 0 0-3-3.87","M16 3.13a4 4 0 0 1 0 7.75"],
  target:["M12 12m-10 0a10 10 0 1 0 20 0a10 10 0 1 0-20 0","M12 12m-6 0a6 6 0 1 0 12 0a6 6 0 1 0-12 0","M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"],
  flag:["M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z","M4 22v-7"]
};
/* One icon style: a Lucide-style line glyph, white, inside a filled circle. */
export function RegroupIcon({name="check",size=28,color=P.purple,glyph="#fff",style}){
  return <span aria-hidden="true" style={{width:size,height:size,flex:"none",borderRadius:"var(--radius-dot)",background:color,display:"inline-flex",alignItems:"center",justifyContent:"center",...style}}>
    <svg width={size*.58} height={size*.58} viewBox="0 0 24 24" fill="none" stroke={glyph} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">{(PATHS[name]||PATHS.check).map((d,i)=><path key={i} d={d}/>)}</svg>
  </span>;
}
const STATUS={exploring:{bg:"#76767c",c:"#fff"},exploiting:{bg:"#141414",c:"#fff"},payoff:{bg:P.purple,c:"#fff"},done:{bg:"var(--signal-high)",c:"#fff"},risk:{bg:"var(--signal-medium)",c:"#fff"}};
export function RegroupStatus({tone="exploring",children}){const s=STATUS[tone]||STATUS.exploring;
  return <span style={{display:"inline-block",background:s.bg,color:s.c,font:"700 11px var(--font-text)",letterSpacing:".1em",textTransform:"uppercase",padding:"5px 10px",whiteSpace:"nowrap"}}>{children||tone}</span>;}

function Confetti(){const bits=[[60,40,-20],[180,90,30],[340,30,60],[520,70,-40],[700,20,15],[880,60,70],[1040,30,-25],[1220,80,40],[1360,40,-60],[30,260,50],[1400,240,-15],[110,520,20],[1390,520,65],[70,720,-35],[1330,700,25]];
  return <svg width="1440" height="810" viewBox="0 0 1440 810" style={{position:"absolute",inset:0,pointerEvents:"none"}}>
    {bits.map(([x,y,r],i)=>i%3===2?<path key={i} d={`M${x} ${y} q 18 -22 36 0 t 36 0`} fill="none" stroke={i%2?"#8457c9":"#b9a3e3"} strokeWidth="5" transform={`rotate(${r} ${x} ${y})`}/>
      :<rect key={i} x={x} y={y} width={i%2?34:22} height={i%2?14:22} fill={i%4?"#8457c9":"#c9b6ee"} opacity=".85" transform={`rotate(${r} ${x} ${y})`}/>)}
  </svg>;}
function Strip({n,assetBase}){return <div style={{position:"absolute",left:0,right:0,bottom:0,height:52,background:"var(--gradient-strip)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 56px",color:"#fff",font:"400 14px var(--font-text)"}}>
  <span>{n}</span><span style={{width:28,height:28,borderRadius:"var(--radius-dot)",background:"#fff",color:"#141414",display:"inline-flex",alignItems:"center",justifyContent:"center",font:"800 14px/1 var(--font-display)",letterSpacing:"-0.04em"}}>iq</span></div>;}
function Head({eyebrow,title,inverse}){return <div>
  {eyebrow&&<div style={{font:"700 15px var(--font-display)",color:inverse?"#fff":P.ink,marginBottom:8}}>{eyebrow}</div>}
  {title&&<h2 style={{margin:0,font:"300 40px/1.2 var(--font-display)",letterSpacing:"-0.01em",color:inverse?"#fff":P.ink}}>{title}</h2>}
</div>;}

/* Content slide: eyebrow + light title, free content, aurora strip with page number and iq mark. */
export function RegroupSlide({n,eyebrow,title,confetti=false,dark=false,assetBase="assets/",children,style}){
  return <div style={{position:"relative",width:1440,height:810,overflow:"hidden",background:dark?"#141414":"var(--surface-page)",color:dark?"#fff":P.body,fontFamily:"var(--font-text)",...style}}>
    {confetti&&<Confetti/>}
    <div style={{position:"absolute",left:90,right:90,top:64}}><Head eyebrow={eyebrow} title={title} inverse={dark}/></div>
    <div style={{position:"absolute",left:90,right:90,top:title?(eyebrow?190:160):90,bottom:100}}>{children}</div>
    <Strip n={n} assetBase={assetBase}/>
  </div>;}

/* Cover: aurora, logo, date, title and the numbered agenda. */
export function RegroupCover({title="Quarterly Regroup",date,agenda=[],assetBase="assets/",style}){
  return <div style={{position:"relative",width:1440,height:810,overflow:"hidden",...AURORA,fontFamily:"var(--font-text)",...style}}>
    <img src={assetBase+"logo-infoquest-white.png"} alt="infoquest" style={{position:"absolute",left:80,top:80,height:32}}/>
    {date&&<div style={{position:"absolute",right:80,top:84,font:"400 18px var(--font-text)"}}>{date}</div>}
    <h1 style={{position:"absolute",left:80,top:300,margin:0,font:"700 88px/1 var(--font-display)",letterSpacing:"-0.035em"}}>{title}</h1>
    {agenda.length>0&&<div style={{position:"absolute",left:80,right:80,bottom:90}}>
      <div style={{font:"400 26px var(--font-text)",marginBottom:28}}>Table of contents:</div>
      <div style={{display:"grid",gridTemplateColumns:"repeat("+agenda.length+",1fr)"}}>{agenda.map((a,i)=><div key={i} style={{borderLeft:"1.5px solid rgba(255,255,255,.85)",padding:"6px 18px 6px 18px",minHeight:110}}>
        <div style={{font:"600 26px var(--font-text)",marginBottom:10}}>{String(i+1).padStart(2,"0")}</div>
        <div style={{font:"400 22px/1.35 var(--font-text)"}}>{a}</div></div>)}</div>
    </div>}
  </div>;}

/* Section divider: big white title on the aurora, a photo, or near-black. */
export function RegroupDivider({title,kicker,n,photo,ground="aurora",style}){
  const bg=photo?{background:"#070614 url("+photo+") center/cover no-repeat",color:"#fff"}:ground==="dark"?{background:"#141414",color:"#fff"}:AURORA;
  return <div style={{position:"relative",width:1440,height:810,overflow:"hidden",...bg,fontFamily:"var(--font-text)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",...style}}>
    {photo&&<div style={{position:"absolute",inset:0,background:"rgba(0,0,0,.35)"}}/>}
    {kicker&&<div style={{position:"relative",font:"600 20px var(--font-text)",letterSpacing:".12em",textTransform:"uppercase",marginBottom:20}}>{kicker}</div>}
    <h1 style={{position:"relative",margin:0,font:"700 104px/1.05 var(--font-display)",letterSpacing:"-0.03em",maxWidth:1200}}>{title}</h1>
    {n!=null&&<div style={{position:"absolute",right:56,bottom:40,font:"400 14px var(--font-text)"}}>{n}</div>}
  </div>;}

const initials=s=>String(s).split(/\s+/).filter(Boolean).slice(0,2).map(w=>w[0]).join("").toUpperCase();
function Person({p,size=84}){return <div style={{width:size+30,display:"flex",flexDirection:"column",alignItems:"center",gap:8,textAlign:"center"}}>
  {p.photo?<img src={p.photo} alt="" style={{width:size,height:size,objectFit:"cover",display:"block"}}/>
   :<div style={{width:size,height:size,background:P.lav,color:P.purple,display:"flex",alignItems:"center",justifyContent:"center",font:"700 "+Math.round(size*.34)+"px var(--font-display)"}}>{initials(p.name)}</div>}
  <div style={{font:"500 14px/1.3 var(--font-text)",color:P.ink}}>{p.name}</div>
  {p.role&&<div style={{font:"400 12px/1.3 var(--font-text)",color:P.sec,marginTop:-4}}>{p.role}</div>}
</div>;}
/* People board: new joiners, anniversaries, promotions. Square photos, or initials when there is no photo. */
export function RegroupPeople({n,eyebrow,title,groups=[],confetti=false,photoSize=84,assetBase,style}){
  return <RegroupSlide n={n} eyebrow={eyebrow} title={title} confetti={confetti} assetBase={assetBase} style={style}>
    <div style={{display:"flex",gap:16,height:"100%",alignItems:"stretch"}}>{groups.map((g,i)=><div key={i} style={{flex:g.flex||1,background:P.card,padding:"22px 24px",display:"flex",flexDirection:"column",gap:14}}>
      <div style={{font:"600 18px var(--font-text)",color:P.ink,textAlign:g.rows?"left":"center"}}>{g.title}</div>
      {g.rows?g.rows.map((r,j)=><div key={j}><div style={{font:"600 14px var(--font-text)",color:P.ink,paddingBottom:8,borderBottom:"1.5px solid "+P.purple,marginBottom:12}}>{r.title}</div>
          <div style={{display:"flex",flexWrap:"wrap",gap:"12px 6px"}}>{r.people.map((p,k)=><Person key={k} p={p} size={Math.round(photoSize*.75)}/>)}</div></div>)
        :<div style={{display:"flex",flexWrap:"wrap",gap:"18px 10px",justifyContent:"center"}}>{(g.people||[]).map((p,k)=><Person key={k} p={p} size={photoSize}/>)}</div>}
    </div>)}</div>
  </RegroupSlide>;}

/* Icebreaker / prompt: dark panel with the question, image on the right. */
export function RegroupPrompt({eyebrow="Ice Breaker",kicker,question,children,image,n,style}){
  return <div style={{position:"relative",width:1440,height:810,overflow:"hidden",background:"#141414",color:"#fff",fontFamily:"var(--font-text)",display:"flex",...style}}>
    <div style={{flex:"0 0 840px",padding:"130px 90px 80px 140px",display:"flex",flexDirection:"column",gap:22}}>
      <div style={{font:"300 40px var(--font-display)"}}>{eyebrow}</div>
      {kicker&&<div style={{font:"700 28px/1.3 var(--font-text)",marginTop:20}}>{kicker}</div>}
      <div style={{font:"700 54px/1.08 var(--font-display)",letterSpacing:"-0.03em"}}>{question}</div>
      {children&&<div style={{font:"400 26px/1.35 var(--font-text)",marginTop:10}}>{children}</div>}
    </div>
    <div style={{flex:1,...(image?{background:"#222 url("+image+") center/cover no-repeat"}:AURORA)}}/>
    {n!=null&&<div style={{position:"absolute",left:56,bottom:30,font:"400 14px var(--font-text)"}}>{n}</div>}
  </div>;}

/* Quarter review: columns of icon rows, e.g. promised (arrow) · delivered (check) · faced (alert). */
const ICOL={arrow:"#141414",check:P.purple,alert:"#5e5e64",x:"var(--signal-low)",up:"var(--signal-high)",star:"#c79a1e"};
export function RegroupReview({n,eyebrow,title,columns=[],assetBase,style}){
  return <RegroupSlide n={n} eyebrow={eyebrow} title={title} assetBase={assetBase} style={style}>
    <div style={{display:"grid",gridTemplateColumns:"repeat("+columns.length+",1fr)",gap:30,paddingTop:10}}>{columns.map((c,i)=><div key={i} style={{borderLeft:"1.5px solid "+P.rule,paddingLeft:18}}>
      <div style={{font:"600 22px var(--font-text)",color:P.ink,marginBottom:26}}>{c.title}</div>
      <div style={{display:"flex",flexDirection:"column",gap:24}}>{c.items.map((it,j)=>{const bold=typeof it==="object"&&it.bold;const t=typeof it==="object"?it.text:it;
        return <div key={j} style={{display:"flex",gap:12,alignItems:"flex-start",font:(bold?"600":"400")+" 19px/1.4 var(--font-text)",color:P.ink}}><RegroupIcon name={c.icon||"check"} size={28} color={ICOL[c.icon||"check"]}/><span>{t}</span></div>;})}</div>
    </div>)}</div>
  </RegroupSlide>;}

/* Theme of the quarter: a list of rows beside a big aurora / lavender / plain panel. */
export function RegroupTheme({n,intro,items=[],icon,panel={},side="right",tone="aurora",assetBase="assets/",style}){
  const panelBg=tone==="lavender"?{background:"linear-gradient(160deg,#c9b6ee 0%,#e9e7f2 60%,#f1eff8 100%)",color:"var(--iq-purple-700)"}:tone==="plain"?{background:"var(--surface-page)",color:P.ink}:AURORA;
  const list=<div style={{flex:1,padding:"0 70px",display:"flex",flexDirection:"column",justifyContent:"center",gap:16}}>
    {intro&&<div style={{font:"400 26px/1.35 var(--font-text)",color:P.ink,marginBottom:22}}>{intro}</div>}
    {items.map((t,i)=><div key={i} style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:20,background:P.card,padding:"16px 20px",font:"500 19px/1.35 var(--font-text)",color:P.ink}}>
      <span>{t}</span>{icon&&<RegroupIcon name={icon} size={28}/>}</div>)}
  </div>;
  const big=<div style={{flex:"0 0 520px",...panelBg,padding:"80px 60px",display:"flex",flexDirection:"column",gap:24}}>
    {panel.kicker&&<div style={{font:"700 34px var(--font-display)"}}>{panel.kicker}</div>}
    <div style={{font:"700 76px/1.02 var(--font-display)",letterSpacing:"-0.03em"}}>{panel.title}</div>
    {panel.body&&<div style={{font:"400 24px/1.35 var(--font-text)",marginTop:"auto"}}>{panel.body}</div>}
  </div>;
  return <div style={{position:"relative",width:1440,height:810,overflow:"hidden",background:"var(--surface-page)",fontFamily:"var(--font-text)",display:"flex",...style}}>
    {side==="left"?<>{big}{list}</>:<>{list}{big}</>}
    {n!=null&&<div style={{position:"absolute",right:side==="left"?56:580,bottom:30,font:"400 14px var(--font-text)",color:P.sec}}>{n}</div>}
  </div>;}

/* Department index: tiles on the aurora. */
export function RegroupGrid({title,items=[],columns=5,n,style}){
  return <div style={{position:"relative",width:1440,height:810,overflow:"hidden",...AURORA,fontFamily:"var(--font-text)",...style}}>
    <h1 style={{position:"absolute",left:100,top:90,margin:0,font:"700 84px/1.05 var(--font-display)",letterSpacing:"-0.03em",maxWidth:800}}>{title}</h1>
    <div style={{position:"absolute",left:100,right:100,bottom:110,display:"grid",gridTemplateColumns:"repeat("+columns+",1fr)",gap:6}}>{items.map((t,i)=><div key={i} style={{background:"rgba(255,255,255,.14)",height:120,display:"flex",alignItems:"center",justifyContent:"center",font:"600 20px var(--font-text)"}}>{t}</div>)}</div>
    {n!=null&&<div style={{position:"absolute",right:56,bottom:40,font:"400 14px var(--font-text)"}}>{n}</div>}
  </div>;}

/* Cards with an icon or a number on top: strategy pillars, process steps, department updates. */
export function RegroupCards({n,eyebrow,title,items=[],numbered=false,assetBase,style}){
  return <RegroupSlide n={n} eyebrow={eyebrow} title={title} assetBase={assetBase} style={style}>
    <div style={{display:"grid",gridTemplateColumns:"repeat("+items.length+",1fr)",gap:14,alignItems:"stretch",paddingTop:20}}>{items.map((it,i)=><div key={i} style={{background:P.card,padding:"34px 28px",minHeight:it.foot?380:320,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",gap:14}}>
      {numbered?<span style={{width:38,height:38,borderRadius:"var(--radius-dot)",background:P.purple,color:"#fff",display:"inline-flex",alignItems:"center",justifyContent:"center",font:"700 18px var(--font-text)"}}>{i+1}</span>:<RegroupIcon name={it.icon||"up"} size={38}/>}
      {it.status&&<RegroupStatus tone={it.status.tone}>{it.status.label}</RegroupStatus>}
      <div style={{font:"700 23px/1.3 var(--font-text)",color:P.ink}}>{it.title}</div>
      {it.body&&<div style={{font:"400 18px/1.5 var(--font-text)",color:P.body}}>{it.body}</div>}
      {it.foot&&<div style={{marginTop:"auto",paddingTop:14,borderTop:"1px solid "+P.rule,alignSelf:"stretch",font:"600 15px/1.4 var(--font-text)",color:P.purple}}>{it.foot}</div>}
    </div>)}</div>
  </RegroupSlide>;}

/* KPI tiles with trend arrows, and an optional bar chart. */
export function RegroupStats({n,eyebrow,title,tiles=[],bars,assetBase,style}){
  const max=bars?Math.max(...bars.data.map(d=>d.value)):1;
  return <RegroupSlide n={n} eyebrow={eyebrow} title={title} assetBase={assetBase} style={style}>
    <div style={{display:"grid",gridTemplateColumns:"repeat("+tiles.length+",1fr)",gap:10}}>{tiles.map((t,i)=><div key={i} style={{background:t.highlight?P.purple:"#fff",color:t.highlight?"#fff":P.purple,border:"1.5px solid "+(t.highlight?P.purple:P.rule),padding:"20px 22px",display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:10}}>
      <div><div style={{font:"700 54px/1 var(--font-display)",letterSpacing:"-0.02em"}}>{t.value}</div><div style={{font:"500 16px/1.35 var(--font-text)",marginTop:8,color:t.highlight?"#fff":P.sec}}>{t.label}</div></div>
      {t.trend&&<RegroupIcon name={t.trend} size={30} color={t.highlight?"#fff":P.purple} glyph={t.highlight?P.purple:"#fff"}/>}
    </div>)}</div>
    {bars&&<div style={{marginTop:34}}>
      {bars.title&&<div style={{font:"600 15px var(--font-text)",letterSpacing:".06em",textTransform:"uppercase",color:P.ink,marginBottom:14}}>{bars.title}</div>}
      <div style={{display:"flex",alignItems:"flex-end",gap:14,height:250,borderBottom:"1.5px solid "+P.ink}}>{bars.data.map((d,i)=><div key={i} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end",height:"100%"}}>
        <div style={{font:"600 15px var(--font-text)",color:P.ink,marginBottom:6}}>{d.value}</div>
        <div style={{width:"100%",height:(d.value/max*200)+"px",background:d.highlight?"var(--iq-purple-700)":P.purple}}/></div>)}</div>
      <div style={{display:"flex",gap:14,marginTop:8}}>{bars.data.map((d,i)=><div key={i} style={{flex:1,textAlign:"center",font:"400 14px var(--font-text)",color:P.sec}}>{d.label}</div>)}</div>
    </div>}
  </RegroupSlide>;}

/* Leaderboard: ranked people per column with gold / silver / bronze ranks. */
const MEDAL=["#c79a1e","#8f8f96","#a8643a"];
export function RegroupLeaderboard({n,eyebrow,title,columns=[],unit,assetBase,style}){
  return <RegroupSlide n={n} eyebrow={eyebrow} title={title} assetBase={assetBase} style={style}>
    <div style={{display:"grid",gridTemplateColumns:"repeat("+columns.length+",1fr)",gap:30}}>{columns.map((c,i)=>{const max=Math.max(...c.rows.map(r=>r.value));
      return <div key={i}><div style={{font:"700 14px var(--font-text)",letterSpacing:".18em",textTransform:"uppercase",color:P.purple,textAlign:"center",marginBottom:14}}>{c.title}</div>
        <div style={{display:"flex",flexDirection:"column",gap:8}}>{c.rows.map((r,j)=><div key={j} style={{display:"flex",alignItems:"center",gap:16,background:j===0?"#fdf6e3":"#fff",borderLeft:"4px solid "+(MEDAL[j]||P.rule),padding:"12px 18px"}}>
          <span style={{width:34,height:34,flex:"none",borderRadius:"var(--radius-dot)",background:MEDAL[j]||P.card,color:j<3?"#fff":P.sec,display:"inline-flex",alignItems:"center",justifyContent:"center",font:"700 15px var(--font-text)"}}>{j===0?<svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d={PATHS.star[0]}/></svg>:j+1}</span>
          <div style={{flex:1,minWidth:0}}><div style={{font:"700 17px var(--font-text)",color:P.ink}}>{r.name}</div>{r.sub&&<div style={{font:"400 13px var(--font-text)",color:P.sec}}>{r.sub}</div>}</div>
          <div style={{textAlign:"right",minWidth:120}}><div style={{font:"700 30px/1 var(--font-display)",color:j===0?MEDAL[0]:P.purple}}>{r.value}</div>
            <div style={{height:4,background:P.lav,marginTop:6}}><div style={{width:(r.value/max*100)+"%",height:"100%",background:P.purple}}/></div>
            {(c.unit||unit)&&<div style={{font:"500 10px var(--font-text)",letterSpacing:".12em",textTransform:"uppercase",color:P.sec,marginTop:4}}>{c.unit||unit}</div>}</div>
        </div>)}</div></div>;})}</div>
  </RegroupSlide>;}

/* Logo wall: client logos grouped by period. Logos as images ({src}) or names. */
export function RegroupLogoWall({n,eyebrow,title,groups=[],assetBase,style}){
  return <RegroupSlide n={n} eyebrow={eyebrow} title={title} assetBase={assetBase} style={style}>
    <div style={{display:"flex",gap:14,alignItems:"flex-start"}}>{groups.map((g,i)=><div key={i} style={{flex:g.flex||1,background:P.card,padding:"26px 26px 32px",minHeight:300}}>
      <div style={{font:"600 18px var(--font-text)",color:P.ink,textAlign:"center",marginBottom:18}}>{g.title}</div>
      <div style={{display:"flex",flexWrap:"wrap",gap:"14px 18px",alignItems:"center",justifyContent:"center"}}>{g.logos.map((l,j)=>l.src?<img key={j} src={l.src} alt={l.name||""} style={{height:l.height||36,maxWidth:180,objectFit:"contain"}}/>:<span key={j} style={{font:"700 20px var(--font-display)",color:P.ink,padding:"6px 10px",background:"#fff"}}>{l.name||l}</span>)}</div>
    </div>)}</div>
  </RegroupSlide>;}

/* Q&A and feedback: dark slide, open-space panel and discussion starters. */
export function RegroupQA({n,title="Q&A and Team Feedback",open={},starters=[],assetBase="assets/",style}){
  return <RegroupSlide n={n} title={title} dark assetBase={assetBase} style={style}>
    <div style={{display:"grid",gridTemplateColumns:"1fr 2.1fr",gap:14,height:"100%"}}>
      <div style={{background:"#222",padding:"30px 30px",display:"flex",flexDirection:"column",gap:18}}>
        <RegroupIcon name="chat" size={44}/>
        <div style={{font:"700 26px/1.25 var(--font-text)"}}>{open.title||"Open space for questions"}</div>
        {open.body&&<div style={{font:"400 18px/1.5 var(--font-text)"}}>{open.body}</div>}
        {open.prompt&&<div style={{marginTop:"auto",font:"italic 500 18px/1.4 var(--font-text)",textDecoration:"underline",textUnderlineOffset:4}}>{open.prompt}</div>}
      </div>
      <div style={{background:"#222",padding:"30px 34px"}}>
        <div style={{font:"700 24px var(--font-text)",marginBottom:16}}>Discussion starters</div>
        <div style={{display:"flex",flexDirection:"column",gap:12}}>{starters.map((s,i)=><div key={i} style={{display:"flex",gap:12,font:"italic 400 16px/1.45 var(--font-text)"}}><span style={{color:"var(--iq-purple-500)",fontStyle:"normal"}}>→</span><span>{s}</span></div>)}</div>
      </div>
    </div>
  </RegroupSlide>;}
