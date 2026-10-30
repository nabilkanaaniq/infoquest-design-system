Letter-size page shell (816×1056) for sales documents. Stack `ProposalHeader` or `HeroHeader`, the light body, `ContactFooter` and `LegalBar` inside it.
```jsx
<DocPage>
  <ProposalHeader client="Pibit" />
  {/* body */}
  <ContactFooter people={people} />
  <LegalBar />
</DocPage>
```
- White page, a 1px hairline ring, at least 1056px tall, flex column so the footer sits at the bottom.
