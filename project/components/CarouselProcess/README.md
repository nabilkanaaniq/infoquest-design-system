How something works, in order: outlined step boxes numbered 01–05 in the accent, then an outcome row (a solid "pass" box with a purple check, an outlined "stop" box).
```jsx
<CarouselProcess theme="banking" title="How the SAMA sandbox actually works." steps={[{label:"Preparation", title:"Know your regulatory position.", body:"…"}, …]}
  outcomes={[{tone:"pass", title:"Pass.", body:"Product authorized to launch"}, {tone:"stop", title:"Stop.", body:"Back to development"}]} />
```
- Five steps is the maximum at this width; keep step bodies to about 20 words.
