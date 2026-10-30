# Sales documents UI kit
Letter-size (816×1056) client-facing PDFs: **Proposal · Prepared for <Client>**, the engagement one-pager (MBX Group) and the credits/pricing one-pager.
Recreated from `uploads/PROPOSAL · PREPARED FOR PIBIT.pdf`, `…STRELLA.pdf`, `One Pager MBX Group.pdf`, `With Credits.pdf`.

- `DocChrome.jsx` — ProposalHeader, HeroHeader, ContactFooter, LegalBar, Page
- `ProposalPage.jsx`, `OnePagerPage.jsx`, `CreditsPage.jsx`
- `index.html` — switch documents; edit the client name to retitle the proposal header; the "Legal entity" button flips the legal bar between UK (Infoquest Network LTD) and UAE (Infoquest Network FZ-LLC, for GCC and MENA clients).

Headshots are shown as grey placeholders (real photos live in the source PDFs).
