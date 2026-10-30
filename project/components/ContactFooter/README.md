Aurora footer of a document: a "Your Points of Contact" title and a row of `ContactCard`s.
```jsx
<ContactFooter people={[{ name: "Omar Yamak", role: "CEO", email: "omar@iqnetwork.co", phones: ["+971 58 895 0161"], photo: "…/omar-yamak.jpg" }]} />
```
- `layout="side"` puts the large title beside the people (credits one-pager); the default stacks a small title above them.
- `photos` draws grey placeholder squares for people with no `photo`. A person's own `photo` always wins.
- Photos are square and live in `assets/team/`. Always white text.
