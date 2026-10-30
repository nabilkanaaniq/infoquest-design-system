Content slide on a 1440×810 canvas: an eyebrow and action title at the top, free content in the middle, and the aurora strip at the foot holding the page number.
```jsx
<ContentSlide n="4" eyebrow="Why Infoquest" title="Infoquest outperforms legacy expert networks on the four metrics that matter">
  {/* content */}
</ContentSlide>
```
- 90px side margins. Pass `lede` for the bold lede under the title; the content area then starts lower.
- Fit it to the viewport yourself (scale the 1440×810 box); the component does not scale.
