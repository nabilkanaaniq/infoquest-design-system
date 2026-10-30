(()=>{
const {FeatureCard,PriceCard,Callout,Tag}=window.InfoquestDesignSystem_80b250;
function CreditsPage(){const H=({children})=><h2 style={{margin:"30px 0 14px",font:"var(--type-display)",fontSize:29,letterSpacing:"-0.01em"}}>{children}</h2>;
 return <Page>
  <HeroHeader title="The Custom-Sourcing Expert Network"><p style={{margin:0}}>We help firms like <b>Oliver Wyman</b> close critical knowledge gaps by connecting their teams with the right experts, from any industry, anywhere in the world, anytime.</p><p style={{margin:0}}>Unlike legacy expert networks, we <b>custom-source</b> hard-to-reach specialists for each engagement, delivering fast, relevant, and actionable insights.</p></HeroHeader>
  <div style={{padding:"30px 30px 40px",flex:1,background:"var(--surface-page)"}}>
   <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:18}}><FeatureCard title="Custom-Sourced Experts">We dont recycle profiles from a ready-database.</FeatureCard><FeatureCard title="Speed">We deliver your first batch of custom sourced experts in under two hours.</FeatureCard><FeatureCard title="Flexibility">Continuous feedback and support with no long term commitments.</FeatureCard></div>
   <H>PAYG Pricing Model</H>
   <div style={{display:"grid",gridTemplateColumns:"230px 1fr",gap:12}}><PriceCard title="30 min call" price="$680" unit="discounted flat fee"/><Callout title="Grace Period" style={{alignSelf:"start"}}>If you decide the expert isn't a fit within the first 10 minutes, the call won't be charged</Callout></div>
   <H>Package Deal Model</H>
   <div style={{display:"flex",gap:12,marginBottom:12}}><Tag>No expiration</Tag><Tag>Use across any project</Tag><Tag>Tied to current rate</Tag></div>
   <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:36}}>{[["10","5","$600","30"],["20","10","$550","35"],["30","15","$520","40"]].map(([n,c,p,s])=><PriceCard key={n} title={n+" calls package"} subtitle={c+" credits"} was="$680" price={p} unit="per 30 minute call" save={"Save "+s+"%"}/>)}</div>
  </div>
  <ContactFooter layout="side" photos people={[{name:"Hiyam Hashash",role:"Associate Manager",email:"hiyam@iqnetwork.co",phones:["+ 44 7361 589208 (mobile)"]},{name:"Takwa Dawa",role:"Associate Manager",email:"takwa@iqnetwork.co",phones:["+44 7360 277216"]}]}/></Page>;}
window.CreditsPage=CreditsPage;
})();
