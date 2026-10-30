The black legal strip at the foot of every document: one line with the registered entity and copyright.
```jsx
<LegalBar />              {/* UK: Infoquest Network LTD (default) */}
<LegalBar entity="uae" /> {/* UAE: Infoquest Network FZ-LLC, for GCC and MENA clients */}
```
- Use `entity="uae"` when the document goes to a GCC or MENA-based company; otherwise keep the UK default.
- Centered white 8.5px semibold text on `surface-inverse`. Pass children to replace the wording.
