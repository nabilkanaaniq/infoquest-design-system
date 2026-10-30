# Expert Voices UI kit
Square (1080×1080) LinkedIn carousels that publish an anonymised Infoquest expert's view on a sector. Recreated from `Saudi Banking, Re-Regulated..pdf` and `AI in the Insurance Industry.pdf` (current format). Older posts (`AI & Data Center Design.pdf`, `How AI is Transforming Fintech in the GCC.pdf`) used Open Sauce One/Poppins with heavier type — treat those as legacy.

Anatomy: running head (EXPERT VOICES · SECTOR — 01 / 09), light Plus Jakarta Sans action title, content, running foot (01 — THE MANDATE · facets), CTA end card ("Need expert insights on …?" + purple "Reach out to us → info@iqnetwork.co" bar), logo bottom-right on cover & CTA.

- `EVFrame.jsx` — themes, RunHead, RunFoot, Frame
- `EVSlides.jsx` — Cover, Quote, Pillars, Evidence, CTA

For new carousels use the `Carousel*` components in the bundle (data-driven, same anatomy and themes, plus the Company theme); this kit keeps its hard-coded Saudi Banking slides as the reference recreation.
