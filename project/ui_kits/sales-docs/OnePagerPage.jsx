(()=>{
const {FeatureCard,Callout}=window.InfoquestDesignSystem_80b250;
const OP_TEAM=[{name:"Omar Yamak",role:"CEO",email:"omar@iqnetwork.co",phones:["+971 58 895 0161"]},{name:"Okba Dakdouk",role:"Associate Manager",email:"okba@iqnetwork.co",phones:["+1 (315) 843-1361"]},{name:"Antonio M Otto",role:"Associate Manager",email:"antonio.otto@iqnetwork.co",phones:["+57 304 458 44 91"]}];
function H2({children}){return <h2 style={{margin:"30px 0 14px",font:"var(--type-display)",fontSize:29,letterSpacing:"-0.01em",color:"var(--text-primary)"}}>{children}</h2>;}
function OnePagerPage({entity}){return <Page>
  <HeroHeader title="The Custom-Sourcing Expert Network"><p style={{margin:0}}>We help consulting teams, private corporates, and investment firms access hard-to-find expertise through custom-sourced expert calls, market intelligence, surveys and longer-term expert engagements.</p>
   <div style={{background:"rgba(255,255,255,.14)",padding:"12px 14px",marginTop:4}}><div style={{fontWeight:700,fontSize:15}}>Getting Started (2-credit deposit - $2,000)</div><div style={{fontSize:11,marginTop:4}}>Fully usable against your first expert engagements. No subscription or annual commitment.</div></div></HeroHeader>
  <div style={{padding:"18px 56px 26px",flex:1,background:"var(--surface-page)"}}>
   <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:18}}><FeatureCard title="Custom-Sourced Experts">We dont recycle profiles from a ready-database.</FeatureCard><FeatureCard title="Speed">We deliver your first batch of custom sourced experts in under two hours.</FeatureCard><FeatureCard title="Flexibility">Continuous feedback loop and support on a daily basis as your project progresses.</FeatureCard></div>
   <H2>Expert Call Engagement Models</H2>
   <div style={{display:"grid",gridTemplateColumns:"240px 1fr",gap:12}}>
    <div style={{background:"var(--surface-card)",padding:"24px 20px",textAlign:"center"}}><div style={{fontWeight:700,fontSize:18,lineHeight:1.2}}>60 min<br/>meeting</div><div style={{fontSize:13,lineHeight:1.5,margin:"14px 0"}}>or 30 minute<br/>calls at 75% of<br/>the hourly rate</div><div style={{height:1,background:"var(--border-rule)",margin:"0 20px 14px"}}></div><div style={{fontWeight:700,fontSize:18,color:"var(--text-accent)"}}>$1000/credit</div></div>
    <div style={{display:"flex",flexDirection:"column",gap:20}}><Callout title="Calls over one hour">Billed in 15-minute increments beyond the first hour. Follow-up calls on the same terms</Callout><Callout title="Follow ups">Follow ups are charged in 15 minute increments at 25% of the hourly rate</Callout><Callout title="Pricing model">Under our PAYG framework, some consultations may carry a multiplier based on expert seniority or specialization</Callout></div>
   </div>
   <H2>Additional services</H2>
   <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:18}}>{[["Expert sub-contracting","High-impact experts as part of your team through flexible models."],["Written reports","Expert written insights-rich market briefs to white papers."],["Surveys","First-hand market data from verified respondents."]].map(([t,b])=><FeatureCard key={t} align="center" title={<span style={{fontSize:18,fontWeight:600}}>{t}</span>}><span style={{fontSize:13}}>{b}</span></FeatureCard>)}</div>
   <Callout style={{marginTop:16}}><b>Competitive rates:</b> long-term engagements are available at competitive rates, including hourly bundles, daily fees, or total project fees.</Callout>
  </div>
  <ContactFooter people={OP_TEAM} photos/><LegalBar entity={entity}/></Page>;}
window.OnePagerPage=OnePagerPage;
})();
