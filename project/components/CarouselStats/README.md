"The receipts." One big number on the left, up to three supporting numbers stacked on the right, on dark panels.
```jsx
<CarouselStats theme="insurance" title="The receipts." dek="Production deployments across global insurers, not lab experiments."
  lead={{label:"Chatbot resolution", value:"50%+", body:"Share of customer queries now handled by AI agents."}}
  items={[{label:"Zurich UK", value:"30%", body:"Faster personal-injury claim processing", pct:30}]} />
```
- Every number needs a named source (company, regulator, report). Use `<`, `~`, `+`, `%` symbols, not words.
- Pass `photo` (e.g. the theme cover) for the darker "receipts" look; without it the panels use the theme ink.
