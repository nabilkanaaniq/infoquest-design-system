The base of every Expert Voices carousel slide: a 1080×1080 square with the running head ("EXPERT VOICES · BANKING — 03 / 09"), a light Plus Jakarta Sans title, free content and the running foot. Use it for a slide type the other `Carousel*` components don't cover.
```jsx
<CarouselSlide theme="banking" index={7} total={9} title="SAMA is the spine. But it isn't the whole skeleton." foot={{left:"06 — Multi-regulator", right:"SAMA · CMA · NCA"}}>
  {/* content */}
</CarouselSlide>
```
- 60px side margins, running head at 52px from the top, running foot on a 2px rule.
- Themes: `banking` (cream + forest), `insurance` (vermilion + olive), `datacenter` (navy + blue), `fintech` (raspberry + slate), `company` (deep navy-violet + purple, for Infoquest's own stories rather than sector posts).
- **Carousels may leave the brand palette.** They are information pieces and should pop: pick a vibrant palette per post. Vibrant presets: `desert` (orange + maroon, dark text), `neon` (near-black violet + magenta, teal numbers), `citrus` (yellow + cobalt, dark text). Or pass your own `{paper, ink, text, accent, card, cta}`: keep body text at 4.5:1 on `paper` (on mid-tone grounds like orange or yellow that means dark text, not white). The purple CTA bar and the white logo stay.
- Every slide is 1080×1080; scale the box yourself to preview it.
