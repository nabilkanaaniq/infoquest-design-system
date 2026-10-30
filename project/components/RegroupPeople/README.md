Welcomes and celebrations: grey panels of people with square photos, or lavender initials squares when there is no photo.
```jsx
<RegroupPeople n={2} title="A quick welcome to our latest joiners!" groups={[{title:"Associate new joiners!", people:[{name:"Khaled Abboud"},…]}]} />
<RegroupPeople n={3} title="A quick congrats" confetti groups={[{title:"Anniversaries", flex:2, rows:[{title:"1-year anniversary", people:[…]}]}]} />
```
- Photos are optional; the board works with initials alone. Photos are never circular.
