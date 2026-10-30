Kept from the older "Expert Insights" carousels, rebuilt in the current style: rows separated by hairlines, each led by the purple `CheckIcon`. Two uses:
- **Checklist** — "Built for 2025, not 2005": short claims, one line each.
- **Profile** (`profile`) — one company or project per slide (Moro Hub, Khazna, Meeza): the name as title, a one-line descriptor, then two or three facts with optional bullets.
```jsx
<CarouselChecklist theme="datacenter" profile title="Moro Hub" dek="A subsidiary of Digital DEWA hosting the world's largest solar-powered data center."
  items={[{title:"Green, smart and solar-powered", bullets:["Runs entirely on renewable energy","Guinness World Record holder"]}]} />
```
- Three rows fit comfortably, four at most. No hand-drawn arrows or circles.
