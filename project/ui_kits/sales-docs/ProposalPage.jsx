(()=>{
const {SpecTable,Badge,FeatureCard}=window.InfoquestDesignSystem_80b250;
const TEAM=[{name:"Mahmoud Bazerbachi",role:"Managing Director",email:"mahmoud@iqnetwork.co",phones:["+44 7360 277216"]},{name:"Julian Buritica",role:"Senior Manager",email:"julian.buritica@iqnetwork.co",phones:["+1 585 326 0442"]},{name:"Okba Dakdouk",role:"Associate Manager",email:"okba@iqnetwork.co",phones:["+1 585 326 0121"]},{name:"Sebastian Macias",role:"Associate Manager",email:"sebastian.macias@iqnetwork.co",phones:["+1 585 326 0488"]}];
function H3({children}){return <h3 style={{margin:"0 0 14px",fontSize:15,fontWeight:600,color:"var(--text-primary)"}}>{children}</h3>;}
function ProposalPage({client="Strella",entity}){
  const lbl=(a,b,c)=><><span>{a}</span><span>{b}</span><i style={{fontWeight:400}}>{c}</i></>;
  return <Page><ProposalHeader client={client}/>
  <div style={{padding:"44px 72px 40px",flex:1}}>
    <h1 style={{margin:0,font:"var(--type-h1)",fontSize:27,color:"var(--text-primary)"}}>Custom B2B Recruit, Generative Media Inference</h1>
    <div style={{fontStyle:"italic",fontSize:12,margin:"12px 0 18px"}}>Enterprise Inference Buyers &amp; Serving-Infrastructure Experts &nbsp;|&nbsp; 8–10 completes across two segments</div>
    <p style={{fontSize:11.5,lineHeight:1.6,margin:"0 0 30px"}}>This industry sits squarely in Infoquest's area of expertise: we <b>custom-source niche experts for every project</b> using AI-powered sourcing and human targeted outreach, with no static databases, and no generic profiles. That is exactly what a narrow, technical pool like diffusion serving-infrastructure demands. Below is our feasibility read and blinded pricing for both interview lengths.</p>
    <H3>Feasibility &amp; Fill Rate by Segment</H3>
    <SpecTable keyWidth={190} rows={[
      {label:lbl("Segment 1","Enterprise inference buyers","Target ~5 completes"),value:<><div><b>100% fill (5 of 5)</b> <Badge level="high"/></div>Deep, addressable bench of Head / VP / Director of ML Platform, ML Infrastructure &amp; Engineering, and Product leaders who own the inference-vendor decision.</>},
      {label:lbl("Segment 2","Serving infrastructure experts","Target ~5 completes"),value:<><div><b>50% fill (2–3 of 5)</b> <Badge level="high"/> &nbsp;<b>100% fill (5 of 5)</b> <Badge level="medium"/></div>Senior / Staff / Principal engineers with genuine hands-on diffusion image/video serving depth are a scarce pool. We commit to half at high confidence and pursue the full quota at medium confidence.</>}]}/>
    <div style={{height:28}}></div>
    <H3>Pricing Per Completed Expert</H3>
    <SpecTable keyWidth={140} rows={[{label:"30-minute expert interview",value:<span><b>$750</b> /expert</span>},{label:"45-minute expert interview",value:<span><b>$900</b> /expert</span>},{label:"Blinding",value:<span>Rates apply to both <b>single-blinded</b> and <b>double-blinded</b> delivery, sponsor identity and study intent withheld from all respondents. One session per participant; standard recording + participant consent; NDA available on standard terms.</span>}]}/>
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14,marginTop:30}}>
      <FeatureCard titleSize="sm" title="Custom-Sourced, No Database">100% sourced to your brief with human research + AI. Every expert vetted for knowledge fit, then passed through compliance.</FeatureCard>
      <FeatureCard titleSize="sm" title="Fast, Rolling Work">ASAP start, first vetted experts typically within 2 hours of kickoff, delivered on a rolling basis.</FeatureCard>
      <FeatureCard titleSize="sm" title="A Partner Alongside You">We work with you, as an extension of your team and commercial flexibility from day one.</FeatureCard>
    </div>
  </div>
  <ContactFooter people={TEAM}/><LegalBar entity={entity}/></Page>;}
window.ProposalPage=ProposalPage;
})();
