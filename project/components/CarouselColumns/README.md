Three side-by-side points under an action title. One component, three looks from the current carousels:
```jsx
<CarouselColumns theme="insurance" variant="rule" title="Three reasons customers walk away from their insurer." items={[{title:"Opacity.", body:"…"}, …]} callout={{value:"+20%", text:"Lift in customer satisfaction after Allianz redesigned its claims process."}} />
<CarouselColumns theme="banking" variant="card" items={[{label:"Pillar", title:"Cybersecurity.", body:"…", meta:"Recently updated"}, …]} />
<CarouselColumns theme="banking" variant="bar" title="Three rules for getting Saudi banking compliance right." items={…} />
```
- `rule` for reasons and functions, `card` for pillars with a status line (`meta`), `bar` for the closing playbook.
- Titles inside columns end in a period.
