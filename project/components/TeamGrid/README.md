Equal-column grid that lays out `TeamMember` cards for "Meet the team" pages.
```jsx
<TeamGrid columns={3}>
  <TeamMember name="Omar Yamak" role="CEO" phone="+971 58 895 0161" email="omar@iqnetwork.co" />
  <TeamMember name="Uliana Rodionova" role="Commercial Director" phone="+44 7367 109688" email="uliana@iqnetwork.co" />
</TeamGrid>
```
- `columns` defaults to 3 and `gap` to 14px. Cards keep their own height and align to the top.
- The roster of names, roles and contacts is in the README under Team.
