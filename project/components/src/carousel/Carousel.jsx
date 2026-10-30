import React from "react";
import {theme,Frame,Title,Credit,label,pad} from "./base.jsx";
import {CheckIcon} from "../content/CheckList.jsx";

const T=(p)=>theme(p.theme);
const frameProps=(p,th)=>({th,index:p.index,total:p.total,sector:p.sector,foot:p.foot,assetBase:p.assetBase||"assets/",style:p.style});

/* Generic slide: frame + optional title, free content. */
export function CarouselSlide(p){const th=T(p);
  return <Frame {...frameProps(p,th)} bg={p.ground==="ink"?th.ink:undefined} color={p.ground==="ink"?"#fff":undefined} photo={p.photo}>
    {p.title&&<Title dek={p.dek}>{p.title}</Title>}{p.children}
  </Frame>;}

/* 01 — full-bleed photo cover. */
export function CarouselCover(p){const th=T(p);const ab=p.assetBase||"assets/";const photo=p.photo===undefined?th.photo:p.photo;
  return <Frame th={th} bg={photo?"#000":(th.cover||th.ink)} color="#fff" index={1} total={p.total} sector={p.sector??th.name} photo={photo} assetBase={ab} style={p.style}>
    <div style={{paddingTop:50}}>
      <div style={{width:60,height:3,background:"#fff",marginBottom:28}}/>
      <h1 style={{margin:0,font:"700 120px/1.0 var(--font-display)",letterSpacing:"-0.03em",maxWidth:920}}>{p.title}</h1>
    </div>
    <div style={{marginTop:"auto"}}>
      {p.dek&&<p style={{margin:"0 120px 40px 0",font:"400 28px/1.45 var(--font-text)"}}>{p.dek}</p>}
      <Credit featuring={p.featuring} assetBase={ab}/>
    </div>
  </Frame>;}

/* Expert pull quote. */
export function CarouselQuote(p){const th=T(p);
  return <Frame {...frameProps(p,th)}>
    <div style={{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",paddingBottom:60}}>
      <blockquote style={{margin:0,font:"italic 300 "+(p.size||58)+"px/1.3 var(--font-display)",letterSpacing:"-0.01em",maxWidth:910}}>{p.quote}</blockquote>
      {p.attribution&&<div style={{marginTop:36,font:"300 20px var(--font-text)",letterSpacing:".06em",textTransform:"uppercase"}}>{p.attribution}</div>}
    </div>
  </Frame>;}

/* 2–4 columns: pillars, reasons, rules. variant rule | card | bar. */
export function CarouselColumns(p){const th=T(p);const v=p.variant||"rule";const items=p.items||[];
  const col=(it,i)=>{const num=p.numbered===false?null:(it.num||pad(i+1));
    const box=v==="card"?{background:th.card,borderTop:"3px solid "+th.accent,padding:"22px 20px"}:v==="bar"?{background:th.card,borderLeft:"4px solid "+th.accent,padding:"24px 22px"}:{borderTop:"2px solid "+th.text,paddingTop:18};
    return <div key={i} style={{display:"flex",flexDirection:"column",gap:12,...box}}>
      {(num||it.label)&&<div style={{...label,fontSize:v==="bar"?40:15,fontWeight:v==="bar"?700:500,letterSpacing:v==="bar"?0:".08em",fontFamily:v==="bar"?"var(--font-display)":"var(--font-text)",color:v==="rule"?th.text:th.accent}}>{num}{num&&it.label&&v!=="bar"?" · ":""}{v==="bar"?null:it.label}</div>}
      {v==="bar"&&it.label&&<div style={{...label,color:th.text}}>{it.label}</div>}
      <div style={{font:(v==="rule"?"400 32px":"700 30px")+"/1.2 var(--font-display)"}}>{it.title}</div>
      {it.body&&<div style={{font:"400 19px/1.55 var(--font-text)",opacity:.9}}>{it.body}</div>}
      {it.meta&&<div style={{marginTop:"auto",paddingTop:14,...label,fontSize:13,color:th.accent}}>— {it.meta}</div>}
    </div>;};
  return <Frame {...frameProps(p,th)}>
    <Title dek={p.dek}>{p.title}</Title>
    <div style={{display:"grid",gridTemplateColumns:"repeat("+items.length+",minmax(0,1fr))",gap:v==="rule"?36:16,flex:p.callout||v==="bar"?"none":1,alignItems:"stretch",paddingBottom:40}}>{items.map(col)}</div>
    {p.callout&&<div style={{marginTop:"auto",marginBottom:36,background:th.ink,color:"#fff",padding:"18px 26px",display:"flex",alignItems:"center",gap:26}}>
      {p.callout.value&&<span style={{font:"400 72px/1 var(--font-display)",whiteSpace:"nowrap"}}>{p.callout.value}</span>}
      <span style={{font:"500 20px/1.45 var(--font-text)"}}>{p.callout.text}</span></div>}
  </Frame>;}

/* By the numbers: one lead stat and up to three supporting stats with progress bars. */
export function CarouselStats(p){const th=T(p);const items=p.items||[];
  const panel={background:p.photo?"#1E1E1E":th.ink,color:"#fff"};
  const Bar=({pct})=>pct==null?null:<div style={{height:6,background:"rgba(255,255,255,.2)",marginTop:14}}><div style={{width:Math.max(0,Math.min(100,pct))+"%",height:"100%",background:"#fff"}}/></div>;
  return <Frame {...frameProps(p,th)} photo={p.photo} color={p.photo?"#fff":undefined}>
    <Title dek={p.dek}>{p.title}</Title>
    <div style={{display:"grid",gridTemplateColumns:items.length?"1.15fr 1fr":"1fr",gap:6,marginBottom:40}}>
      <div style={{...panel,padding:"28px 30px",display:"flex",flexDirection:"column",minHeight:500}}>
        <div style={label}>{p.lead.label}</div>
        <div style={{font:"400 140px/1 var(--font-display)",letterSpacing:"-0.02em",margin:"auto 0"}}>{p.lead.value}</div>
        <div style={{font:"400 18px/1.55 var(--font-text)"}}>{p.lead.body}</div>
      </div>
      {items.length>0&&<div style={{display:"flex",flexDirection:"column",gap:6}}>{items.map((it,i)=><div key={i} style={{...panel,flex:1,padding:"22px 26px"}}>
        <div style={label}>{it.label}</div>
        <div style={{font:"400 72px/1.1 var(--font-display)",margin:"10px 0 8px"}}>{it.value}</div>
        <div style={{font:"400 17px/1.5 var(--font-text)"}}>{it.body}</div><Bar pct={it.pct}/>
      </div>)}</div>}
    </div>
  </Frame>;}

/* Split: italic quote + tags on the left, an ink panel or a numbered list on the right. */
export function CarouselSplit(p){const th=T(p);
  const right=p.list?<div style={{display:"flex",flexDirection:"column"}}>
      {p.list.eyebrow&&<div style={{...label,marginBottom:16}}>{p.list.eyebrow}</div>}
      {p.list.items.map((it,i)=><div key={i} style={{display:"flex",gap:26,padding:"22px 0",borderTop:i?"1px solid "+th.text:"none",borderColor:"currentColor"}}>
        <span style={{font:"400 44px/1 var(--font-display)",color:th.accent}}>{pad(i+1)}</span>
        <div><div style={{font:"700 22px/1.3 var(--font-text)"}}>{it.title}</div>{it.body&&<div style={{font:"400 17px/1.5 var(--font-text)",marginTop:6,opacity:.9}}>{it.body}</div>}</div></div>)}
    </div>
    :<div style={{background:th.ink,color:"#fff",padding:"28px 30px",display:"flex",flexDirection:"column",gap:18,minHeight:500}}>
      {p.panel.eyebrow&&<div style={label}>{p.panel.eyebrow}</div>}
      <div style={{font:"700 44px/1.1 var(--font-display)"}}>{p.panel.title}</div>
      {p.panel.body&&<div style={{font:"500 20px/1.5 var(--font-text)"}}>{p.panel.body}</div>}
      {p.panel.foot&&<div style={{marginTop:"auto",...label}}>— {p.panel.foot}</div>}
    </div>;
  return <Frame {...frameProps(p,th)}>
    <Title>{p.title}</Title>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1.05fr",gap:40,alignItems:"start"}}>
      <div style={{display:"flex",flexDirection:"column",gap:12}}>
        <div style={{font:"italic 400 30px/1.35 var(--font-display)",marginBottom:26}}>{p.quote}</div>
        {(p.tags||[]).map(t=><span key={t} style={{alignSelf:"flex-start",border:"1px solid currentColor",padding:"9px 14px",...label,fontSize:13,fontWeight:500}}>{t}</span>)}
      </div>
      {right}
    </div>
  </Frame>;}

/* Numbered process with an outcome row (pass / stop). */
export function CarouselProcess(p){const th=T(p);const steps=p.steps||[];
  return <Frame {...frameProps(p,th)}>
    <Title dek={p.dek}>{p.title}</Title>
    <div style={{display:"grid",gridTemplateColumns:"repeat("+steps.length+",minmax(0,1fr))",gap:12}}>
      {steps.map((s,i)=><div key={i} style={{border:"1.5px solid "+th.text,padding:"20px 16px",display:"flex",flexDirection:"column",gap:8,minHeight:330}}>
        <div style={{font:"700 54px/1 var(--font-display)",color:th.accent}}>{pad(i+1)}</div>
        {s.label&&<div style={{...label,fontSize:13,fontWeight:500}}>{s.label}</div>}
        <div style={{font:"700 21px/1.25 var(--font-text)"}}>{s.title}</div>
        {s.body&&<div style={{font:"400 16px/1.5 var(--font-text)",opacity:.9}}>{s.body}</div>}
      </div>)}
    </div>
    {p.outcomes&&<div style={{display:"grid",gridTemplateColumns:"repeat("+p.outcomes.length+",1fr)",gap:12,marginTop:12}}>
      {p.outcomes.map((o,i)=>{const pass=o.tone!=="stop";return <div key={i} style={{display:"flex",gap:16,alignItems:"center",padding:"20px 22px",background:pass?th.ink:"transparent",color:pass?"#fff":th.text,border:"1.5px solid "+(pass?th.ink:th.text)}}>
        <span style={{width:30,height:30,flex:"none",borderRadius:"var(--radius-dot)",display:"inline-flex",alignItems:"center",justifyContent:"center",background:pass?"var(--iq-purple-600)":"transparent",border:pass?"none":"1.5px solid currentColor",font:"700 16px var(--font-text)"}}>{pass?"✓":"✕"}</span>
        <div><div style={{font:"700 22px var(--font-text)"}}>{o.title}</div>{o.body&&<div style={{font:"400 15px/1.45 var(--font-text)",marginTop:4}}>{o.body}</div>}</div></div>;})}
    </div>}
  </Frame>;}

/* Check rows with hairlines. Also the company-profile slide: name as title, one-line descriptor as dek. */
export function CarouselChecklist(p){const th=T(p);
  return <Frame {...frameProps(p,th)}>
    <Title dek={p.dek} size={p.profile?72:58}>{p.title}</Title>
    <div style={{display:"flex",flexDirection:"column",marginTop:"auto",marginBottom:40}}>
      {(p.items||[]).map((it,i)=><div key={i} style={{display:"flex",gap:26,padding:"26px 0",borderTop:"1px solid "+th.text}}>
        <CheckIcon size={44}/>
        <div style={{flex:1}}><div style={{font:"700 26px/1.3 var(--font-text)"}}>{it.title}</div>
          {it.body&&<div style={{font:"400 19px/1.5 var(--font-text)",marginTop:6,opacity:.9}}>{it.body}</div>}
          {it.bullets&&<ul style={{margin:"8px 0 0",paddingLeft:22,font:"400 19px/1.55 var(--font-text)",opacity:.9}}>{it.bullets.map((b,j)=><li key={j}>{b}</li>)}</ul>}
        </div></div>)}
    </div>
  </Frame>;}

/* Market share: flat donut + note. */
export function CarouselShare(p){const th=T(p);const v=Math.max(0,Math.min(100,p.value));const r=150,c=2*Math.PI*r;
  return <Frame {...frameProps(p,th)}>
    <Title dek={p.dek}>{p.title}</Title>
    <div style={{display:"flex",alignItems:"center",gap:70,flex:1,paddingBottom:40}}>
      <svg width="400" height="400" viewBox="0 0 400 400" style={{flex:"none"}}>
        <circle cx="200" cy="200" r={r} fill="none" stroke="currentColor" strokeOpacity=".18" strokeWidth="70"/>
        <circle cx="200" cy="200" r={r} fill="none" stroke={th.text===("#FFFFFF")?"#FFFFFF":"var(--iq-purple-600)"} strokeWidth="70" strokeDasharray={(c*v/100)+" "+c} transform="rotate(-90 200 200)"/>
        <text x="200" y="216" textAnchor="middle" style={{font:"400 64px var(--font-display)",fill:"currentColor"}}>{v}%</text>
      </svg>
      <div style={{display:"flex",flexDirection:"column",gap:20}}>
        <div style={{font:"300 40px/1.25 var(--font-display)"}}>{p.label}</div>
        {p.note&&<div style={{font:"400 20px/1.55 var(--font-text)",opacity:.9}}>{p.note}</div>}
        {p.rest&&<div style={{...label,fontWeight:500,opacity:.85}}>Rest · {100-v}% · {p.rest}</div>}
      </div>
    </div>
  </Frame>;}

/* Them vs us. */
export function CarouselContrast(p){const th=T(p);
  const Col=({c,us})=><div style={{padding:"30px 30px 36px",minHeight:420,background:us?th.ink:"transparent",color:us?"#fff":th.text,border:"1.5px solid "+(us?th.ink:th.text),display:"flex",flexDirection:"column",gap:26}}>
    <div style={{...label,opacity:us?1:.85}}>{c.label}</div>
    {c.items.map((t,i)=><div key={i} style={{display:"flex",gap:14,alignItems:"flex-start",font:(us?"600":"400")+" 26px/1.4 var(--font-text)"}}>
      {us?<CheckIcon size={30}/>:<span style={{width:30,flex:"none",textAlign:"center",opacity:.7}}>–</span>}<span>{t}</span></div>)}
  </div>;
  return <Frame {...frameProps(p,th)}>
    <Title dek={p.dek}>{p.title}</Title>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,alignItems:"start"}}><Col c={p.them}/><Col c={p.us} us/></div>
  </Frame>;}

/* Closing card. */
export function CarouselCTA(p){const th=T(p);const ab=p.assetBase||"assets/";
  return <Frame th={th} bg={th.cta} color="#fff" index={p.total} total={p.total} style={p.style}>
    <div style={{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",paddingBottom:40}}>
      <h2 style={{margin:"0 0 60px",font:"400 72px/1.2 var(--font-display)",letterSpacing:"-0.01em"}}>{p.question||"Need expert insights?"}</h2>
      <div style={{background:"var(--iq-purple-600)",padding:"20px 24px",display:"flex",gap:24,alignItems:"center",font:"500 24px var(--font-text)"}}>
        <u style={{fontWeight:700}}>{p.linkLabel||"Reach out to us"}</u><span>→</span><span>{p.email||"info@iqnetwork.co"}</span></div>
    </div>
    <Credit featuring={p.featuring} assetBase={ab}/>
  </Frame>;}
