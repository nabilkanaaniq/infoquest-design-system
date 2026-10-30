Team member card for "Meet the team" pages: name, role, phone number and email on a flat tinted square. Text only by default.
```jsx
<TeamMember name="Omar Yamak" role="CEO" phone="+971 58 895 0161" email="omar@iqnetwork.co" />
```
- Flat tint, no stroke and square corners, like `FeatureCard`; tones `gray` (default), `accent` (lavender) and `white`.
- Name bold, role in secondary grey, phone then email; the email is the purple accent, underlined. `phone` takes a node, so a second number can follow on its own line.
- No photo by default. If you add one it is a square, never circular: pass `photo` with an image URL, or `photo=""` for a placeholder square; `layout="row"` puts it beside the text.
- Use `TeamGrid` to lay several cards out. For the contact footer on the aurora use `ContactCard` instead.
