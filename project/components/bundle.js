/* @ds-bundle: {"format":4,"namespace":"InfoquestDesignSystem_80b250","components":[{"name":"AuroraBand"},{"name":"ContactCard"},{"name":"TeamMember"},{"name":"TeamGrid"},{"name":"ProposalHeader"},{"name":"HeroHeader"},{"name":"ContactFooter"},{"name":"LegalBar"},{"name":"DocPage"},{"name":"ContentSlide"},{"name":"CoverSlide"},{"name":"Callout"},{"name":"CheckIcon"},{"name":"CheckList"},{"name":"FeatureCard"},{"name":"PriceCard"},{"name":"SectionHeader"},{"name":"Stat"},{"name":"Steps"},{"name":"Badge"},{"name":"Button"},{"name":"Logo"},{"name":"Tag"},{"name":"DataTable"},{"name":"SpecTable"},{"name":"CarouselSlide"},{"name":"CarouselCover"},{"name":"CarouselQuote"},{"name":"CarouselColumns"},{"name":"CarouselStats"},{"name":"CarouselSplit"},{"name":"CarouselProcess"},{"name":"CarouselChecklist"},{"name":"CarouselShare"},{"name":"CarouselContrast"},{"name":"CarouselCTA"},{"name":"RegroupSlide"},{"name":"RegroupIcon"},{"name":"RegroupStatus"},{"name":"RegroupCover"},{"name":"RegroupDivider"},{"name":"RegroupPeople"},{"name":"RegroupPrompt"},{"name":"RegroupReview"},{"name":"RegroupTheme"},{"name":"RegroupGrid"},{"name":"RegroupCards"},{"name":"RegroupStats"},{"name":"RegroupLeaderboard"},{"name":"RegroupLogoWall"},{"name":"RegroupQA"}]} */
var __ds = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // build/react-shim.js
  var require_react_shim = __commonJS({
    "build/react-shim.js"(exports, module) {
      module.exports = window.React;
    }
  });

  // build/entry.js
  var entry_exports = {};
  __export(entry_exports, {
    AuroraBand: () => AuroraBand,
    Badge: () => Badge,
    Button: () => Button,
    Callout: () => Callout,
    CarouselCTA: () => CarouselCTA,
    CarouselChecklist: () => CarouselChecklist,
    CarouselColumns: () => CarouselColumns,
    CarouselContrast: () => CarouselContrast,
    CarouselCover: () => CarouselCover,
    CarouselProcess: () => CarouselProcess,
    CarouselQuote: () => CarouselQuote,
    CarouselShare: () => CarouselShare,
    CarouselSlide: () => CarouselSlide,
    CarouselSplit: () => CarouselSplit,
    CarouselStats: () => CarouselStats,
    CheckIcon: () => CheckIcon,
    CheckList: () => CheckList,
    ContactCard: () => ContactCard,
    ContactFooter: () => ContactFooter,
    ContentSlide: () => ContentSlide,
    CoverSlide: () => CoverSlide,
    DataTable: () => DataTable,
    DocPage: () => DocPage,
    FeatureCard: () => FeatureCard,
    HeroHeader: () => HeroHeader,
    LegalBar: () => LegalBar,
    Logo: () => Logo,
    PriceCard: () => PriceCard,
    ProposalHeader: () => ProposalHeader,
    RegroupCards: () => RegroupCards,
    RegroupCover: () => RegroupCover,
    RegroupDivider: () => RegroupDivider,
    RegroupGrid: () => RegroupGrid,
    RegroupIcon: () => RegroupIcon,
    RegroupLeaderboard: () => RegroupLeaderboard,
    RegroupLogoWall: () => RegroupLogoWall,
    RegroupPeople: () => RegroupPeople,
    RegroupPrompt: () => RegroupPrompt,
    RegroupQA: () => RegroupQA,
    RegroupReview: () => RegroupReview,
    RegroupSlide: () => RegroupSlide,
    RegroupStats: () => RegroupStats,
    RegroupStatus: () => RegroupStatus,
    RegroupTheme: () => RegroupTheme,
    SectionHeader: () => SectionHeader,
    SpecTable: () => SpecTable,
    Stat: () => Stat,
    Steps: () => Steps,
    Tag: () => Tag,
    TeamGrid: () => TeamGrid,
    TeamMember: () => TeamMember
  });

  // stage/project/components/src/brand/AuroraBand.jsx
  var import_react = __toESM(require_react_shim());
  function AuroraBand({ variant = "header", height, padding, children, style }) {
    const strip = variant === "strip";
    return /* @__PURE__ */ import_react.default.createElement("div", { style: { position: "relative", color: "var(--white)", backgroundColor: "var(--aurora-night)", backgroundImage: strip ? "var(--gradient-strip)" : "var(--bg-aurora)", backgroundSize: "cover", backgroundPosition: variant === "footer" ? "left bottom" : "left center", minHeight: height ?? (strip ? 40 : void 0), padding: padding ?? (strip ? "0 56px" : "40px 56px"), display: strip ? "flex" : void 0, alignItems: strip ? "center" : void 0, ...style } }, children);
  }

  // stage/project/components/src/brand/ContactCard.jsx
  var import_react2 = __toESM(require_react_shim());
  function ContactCard({ name, role, email, phones = [], photo, photoSize = 90, inverse = true, style }) {
    const fg = inverse ? "var(--white)" : "var(--text-primary)";
    return /* @__PURE__ */ import_react2.default.createElement("div", { style: { display: "flex", gap: 12, alignItems: "flex-start", color: fg, fontFamily: "var(--font-text)", ...style } }, photo !== void 0 && (photo ? /* @__PURE__ */ import_react2.default.createElement("img", { src: photo, alt: "", style: { width: photoSize, height: photoSize, objectFit: "cover", flex: "none" } }) : /* @__PURE__ */ import_react2.default.createElement("div", { style: { width: photoSize, height: photoSize, flex: "none", background: inverse ? "rgba(255,255,255,.18)" : "var(--gray-100)" } })), /* @__PURE__ */ import_react2.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 1, fontSize: 11, lineHeight: 1.35 } }, /* @__PURE__ */ import_react2.default.createElement("div", { style: { fontWeight: 700, fontSize: 13 } }, name), role && /* @__PURE__ */ import_react2.default.createElement("div", { style: { fontWeight: 600 } }, role), email && /* @__PURE__ */ import_react2.default.createElement("a", { href: "mailto:" + email, style: { color: fg, textDecoration: "underline", textUnderlineOffset: 2 } }, email), phones.map((p, i) => /* @__PURE__ */ import_react2.default.createElement("div", { key: i }, p))));
  }

  // stage/project/components/src/content/Callout.jsx
  var import_react3 = __toESM(require_react_shim());
  function Callout({ title, children, inverse = false, style }) {
    const fg = inverse ? "var(--white)" : "var(--text-primary)";
    return /* @__PURE__ */ import_react3.default.createElement("div", { style: { borderLeft: inverse ? "1px solid rgba(255,255,255,.5)" : "1px solid var(--gray-500)", paddingLeft: 12, display: "flex", flexDirection: "column", gap: 3, ...style } }, title && /* @__PURE__ */ import_react3.default.createElement("div", { style: { fontFamily: "var(--font-text)", fontWeight: 600, fontSize: 16, lineHeight: 1.2, color: fg } }, title), /* @__PURE__ */ import_react3.default.createElement("div", { style: { fontSize: 12, lineHeight: 1.4, color: fg } }, children));
  }

  // stage/project/components/src/content/CheckList.jsx
  var import_react4 = __toESM(require_react_shim());
  function CheckIcon({ size = 18, color = "var(--iq-purple-600)" }) {
    return /* @__PURE__ */ import_react4.default.createElement("span", { "aria-hidden": "true", style: { width: size, height: size, flex: "none", borderRadius: "var(--radius-dot)", background: color, display: "inline-flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ import_react4.default.createElement("svg", { width: size * 0.6, height: size * 0.6, viewBox: "0 0 24 24", fill: "none", stroke: "#fff", strokeWidth: "3.2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ import_react4.default.createElement("path", { d: "M20 6 9 17l-5-5" })));
  }
  function CheckList({ title, note, items = [], gap = 14, inline = false, style }) {
    return /* @__PURE__ */ import_react4.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 16, ...style } }, title && /* @__PURE__ */ import_react4.default.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 8 } }, /* @__PURE__ */ import_react4.default.createElement("span", { style: { fontWeight: 600, fontSize: 15, color: "var(--text-primary)" } }, title), note && /* @__PURE__ */ import_react4.default.createElement("i", { style: { fontSize: 11, color: "var(--text-secondary)" } }, note)), /* @__PURE__ */ import_react4.default.createElement("ul", { style: { listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: inline ? "row" : "column", flexWrap: "wrap", gap: inline ? "10px 40px" : gap } }, items.map((it, i) => /* @__PURE__ */ import_react4.default.createElement("li", { key: i, style: { display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "var(--text-body)" } }, /* @__PURE__ */ import_react4.default.createElement(CheckIcon, null), it))));
  }

  // stage/project/components/src/content/FeatureCard.jsx
  var import_react5 = __toESM(require_react_shim());
  function FeatureCard({ eyebrow, title, children, tone = "gray", align = "left", titleSize = "md", style }) {
    const bg = tone === "accent" ? "var(--surface-card-accent)" : tone === "white" ? "var(--white)" : "var(--surface-card)";
    const ts = { sm: { fontSize: 13, fontWeight: 700 }, md: { fontSize: 17, fontWeight: 600 }, lg: { fontSize: 20, fontWeight: 700, color: "var(--text-accent)" } }[titleSize];
    return /* @__PURE__ */ import_react5.default.createElement("div", { style: { background: bg, padding: "18px 22px 20px", display: "flex", flexDirection: "column", gap: 6, textAlign: align, borderRadius: 0, ...style } }, eyebrow && /* @__PURE__ */ import_react5.default.createElement("div", { style: { fontSize: 11, fontWeight: 600, color: "var(--text-primary)" } }, eyebrow), /* @__PURE__ */ import_react5.default.createElement("div", { style: { fontFamily: "var(--font-text)", lineHeight: 1.2, color: "var(--text-primary)", ...ts } }, title), children && /* @__PURE__ */ import_react5.default.createElement("div", { style: { fontSize: 12, lineHeight: 1.45, color: "var(--text-body)" } }, children));
  }

  // stage/project/components/src/content/PriceCard.jsx
  var import_react6 = __toESM(require_react_shim());
  function PriceCard({ title, subtitle, was, price, unit, save, style }) {
    return /* @__PURE__ */ import_react6.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10, ...style } }, /* @__PURE__ */ import_react6.default.createElement("div", { style: { background: "var(--surface-card)", padding: "22px 24px 18px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" } }, /* @__PURE__ */ import_react6.default.createElement("div", { style: { fontFamily: "var(--font-text)", fontWeight: 600, fontSize: 20, color: "var(--text-primary)" } }, title), subtitle && /* @__PURE__ */ import_react6.default.createElement("div", { style: { fontSize: 12, marginTop: 10, color: "var(--text-body)" } }, subtitle), /* @__PURE__ */ import_react6.default.createElement("div", { style: { width: "64%", height: 1, background: "var(--border-rule)", margin: "16px 0 12px" } }), was && /* @__PURE__ */ import_react6.default.createElement("div", { style: { fontSize: 12, color: "var(--text-muted)", textDecoration: "line-through" } }, was), /* @__PURE__ */ import_react6.default.createElement("div", { style: { fontFamily: "var(--font-text)", fontWeight: 700, fontSize: 20, color: "var(--text-accent)", marginTop: 4 } }, price), unit && /* @__PURE__ */ import_react6.default.createElement("div", { style: { fontSize: 12, marginTop: 4, color: "var(--text-body)" } }, unit)), save && /* @__PURE__ */ import_react6.default.createElement("div", { style: { background: "var(--iq-purple-100)", padding: "10px 12px", textAlign: "center", fontWeight: 700, fontSize: 14, color: "var(--text-primary)" } }, save));
  }

  // stage/project/components/src/content/SectionHeader.jsx
  var import_react7 = __toESM(require_react_shim());
  function SectionHeader({ eyebrow, title, lede, inverse = false, style }) {
    const fg = inverse ? "var(--white)" : "var(--text-primary)";
    return /* @__PURE__ */ import_react7.default.createElement("header", { style: { display: "flex", flexDirection: "column", gap: 10, ...style } }, eyebrow && /* @__PURE__ */ import_react7.default.createElement("div", { style: { font: "var(--type-eyebrow)", color: fg } }, eyebrow), /* @__PURE__ */ import_react7.default.createElement("h2", { style: { margin: 0, font: "var(--type-section)", letterSpacing: "var(--tracking-section)", color: fg, textWrap: "pretty" } }, title), lede && /* @__PURE__ */ import_react7.default.createElement("p", { style: { margin: 0, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, lineHeight: 1.35, color: fg, maxWidth: 900 } }, lede));
  }

  // stage/project/components/src/content/Stat.jsx
  var import_react8 = __toESM(require_react_shim());
  function Stat({ label: label2, value, caption, children, align = "left", size = "doc", style }) {
    const t = size === "deck" ? 16 : 12;
    return /* @__PURE__ */ import_react8.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 4, textAlign: align, ...style } }, label2 && /* @__PURE__ */ import_react8.default.createElement("div", { style: { fontFamily: "var(--font-text)", fontWeight: 600, fontSize: t, color: "var(--text-primary)" } }, label2), /* @__PURE__ */ import_react8.default.createElement("div", { style: { font: "var(--type-stat)", color: "var(--text-accent)", letterSpacing: "-0.01em" } }, value), caption && /* @__PURE__ */ import_react8.default.createElement("div", { style: { fontFamily: "var(--font-text)", fontWeight: 600, fontSize: t, color: "var(--text-primary)" } }, caption), children && /* @__PURE__ */ import_react8.default.createElement("div", { style: { marginTop: size === "deck" ? 28 : 16, fontSize: t, lineHeight: 1.35, color: "var(--text-body)" } }, children));
  }

  // stage/project/components/src/content/Steps.jsx
  var import_react9 = __toESM(require_react_shim());
  function Steps({ steps = [], style }) {
    return /* @__PURE__ */ import_react9.default.createElement("div", { style: { position: "relative", display: "grid", gridTemplateColumns: "repeat(" + steps.length + ",minmax(0,1fr))", gap: 24, ...style } }, /* @__PURE__ */ import_react9.default.createElement("div", { style: { position: "absolute", top: 18, left: "calc(100% / " + steps.length * 2 + ")", right: "calc(100% / " + steps.length * 2 + ")", height: 1, background: "var(--gray-300)" } }), steps.map((s, i) => /* @__PURE__ */ import_react9.default.createElement("div", { key: i, style: { position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 8 } }, /* @__PURE__ */ import_react9.default.createElement("div", { style: { width: 36, height: 36, borderRadius: "var(--radius-dot)", background: "var(--iq-purple-600)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 16 } }, i + 1), /* @__PURE__ */ import_react9.default.createElement("div", { style: { fontWeight: 600, fontSize: 14, color: "var(--text-primary)" } }, s.title), /* @__PURE__ */ import_react9.default.createElement("div", { style: { fontSize: 11, lineHeight: 1.35, color: "var(--text-body)", maxWidth: 240 } }, s.body))));
  }

  // stage/project/components/src/core/Badge.jsx
  var import_react10 = __toESM(require_react_shim());
  var LEVELS = { high: { bg: "var(--signal-high)", label: "High confidence" }, medium: { bg: "var(--signal-medium)", label: "Medium confidence" }, low: { bg: "var(--signal-low)", label: "Low confidence" } };
  function Badge({ level = "high", children, style }) {
    const l = LEVELS[level] || LEVELS.high;
    return /* @__PURE__ */ import_react10.default.createElement("span", { style: { display: "inline-block", padding: "3px 5px", background: l.bg, color: "var(--white)", fontFamily: "var(--font-text)", fontSize: "var(--fs-badge)", fontWeight: 700, letterSpacing: ".02em", textTransform: "uppercase", lineHeight: 1.2, borderRadius: 0, verticalAlign: "middle", ...style } }, children || l.label);
  }

  // stage/project/components/src/core/Button.jsx
  var import_react11 = __toESM(require_react_shim());
  var SIZES = { sm: { padding: "8px 14px", fontSize: 12 }, md: { padding: "11px 20px", fontSize: 14 }, lg: { padding: "15px 28px", fontSize: 16 } };
  var VARIANTS = {
    primary: { background: "var(--iq-purple-600)", color: "var(--white)", border: "1.5px solid var(--iq-purple-600)" },
    dark: { background: "var(--gray-900)", color: "var(--white)", border: "1.5px solid var(--gray-900)" },
    outline: { background: "transparent", color: "var(--text-primary)", border: "1.5px solid var(--text-primary)" },
    inverse: { background: "transparent", color: "var(--white)", border: "var(--border-frame-inverse)" },
    ghost: { background: "transparent", color: "var(--iq-purple-600)", border: "1.5px solid transparent", textDecoration: "underline", textUnderlineOffset: 3 }
  };
  function Button({ variant = "primary", size = "md", arrow = false, disabled = false, href, onClick, children, style, ...rest }) {
    const [hover, setHover] = import_react11.default.useState(false);
    const v = VARIANTS[variant] || VARIANTS.primary;
    const hov = hover && !disabled ? variant === "primary" ? { background: "var(--iq-purple-700)", borderColor: "var(--iq-purple-700)" } : variant === "dark" ? { background: "var(--black)" } : variant === "outline" ? { background: "var(--text-primary)", color: "var(--white)" } : variant === "inverse" ? { background: "rgba(255,255,255,.12)" } : { color: "var(--iq-purple-700)" } : {};
    const Tag2 = href ? "a" : "button";
    return /* @__PURE__ */ import_react11.default.createElement(
      Tag2,
      {
        href,
        onClick: disabled ? void 0 : onClick,
        disabled: Tag2 === "button" ? disabled : void 0,
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
        style: { display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-text)", fontWeight: 600, lineHeight: 1.1, letterSpacing: 0, borderRadius: 0, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.4 : 1, textDecoration: "none", transition: "background var(--dur) var(--ease),color var(--dur) var(--ease)", ...SIZES[size], ...v, ...hov, ...style },
        ...rest
      },
      children,
      arrow && /* @__PURE__ */ import_react11.default.createElement("span", { "aria-hidden": "true", style: { fontWeight: 400 } }, "\u2192")
    );
  }

  // stage/project/components/src/core/Logo.jsx
  var import_react12 = __toESM(require_react_shim());
  var FILES = { color: "logo-infoquest-color.png", inverse: "logo-infoquest-color-inverse.png", white: "logo-infoquest-white.png" };
  function Logo({ variant = "white", markOnly = false, height = 28, assetBase = "assets/", style }) {
    const file = markOnly ? "mark-iq.png" : FILES[variant] || FILES.inverse;
    return /* @__PURE__ */ import_react12.default.createElement("img", { src: assetBase + file, alt: "infoquest", style: { height, width: "auto", display: "block", ...style } });
  }

  // stage/project/components/src/core/Tag.jsx
  var import_react13 = __toESM(require_react_shim());
  var TONES = {
    dark: { background: "var(--surface-chip)", color: "var(--white)", border: "1px solid var(--surface-chip)" },
    light: { background: "var(--surface-card)", color: "var(--text-primary)", border: "1px solid var(--surface-card)" },
    outline: { background: "transparent", color: "currentColor", border: "1px solid currentColor" },
    accent: { background: "var(--iq-purple-100)", color: "var(--iq-purple-700)", border: "1px solid var(--iq-purple-100)" }
  };
  function Tag({ tone = "dark", caps: caps2 = false, children, style }) {
    return /* @__PURE__ */ import_react13.default.createElement("span", { style: { display: "inline-flex", alignItems: "center", padding: caps2 ? "5px 10px" : "6px 8px", fontFamily: "var(--font-text)", fontSize: caps2 ? 10 : 12, fontWeight: caps2 ? 600 : 500, letterSpacing: caps2 ? "var(--tracking-caps)" : 0, textTransform: caps2 ? "uppercase" : "none", lineHeight: 1.2, borderRadius: 0, whiteSpace: "nowrap", ...TONES[tone], ...style } }, children);
  }

  // stage/project/components/src/data/DataTable.jsx
  var import_react14 = __toESM(require_react_shim());
  function DataTable({ columns = [], rows = [], striped = false, grid = false, style }) {
    const cell = { padding: "12px 10px", fontSize: 12, lineHeight: 1.35, color: "var(--text-body)", textAlign: "left", verticalAlign: "middle" };
    return /* @__PURE__ */ import_react14.default.createElement("table", { style: { width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-text)", ...style } }, /* @__PURE__ */ import_react14.default.createElement("thead", null, /* @__PURE__ */ import_react14.default.createElement("tr", null, columns.map((c, i) => /* @__PURE__ */ import_react14.default.createElement("th", { key: i, style: { ...cell, background: "var(--iq-purple-600)", color: "#fff", fontWeight: 700, fontSize: 14, padding: "10px", border: grid ? "1px solid var(--gray-200)" : "none" } }, c)))), /* @__PURE__ */ import_react14.default.createElement("tbody", null, rows.map((r, ri) => /* @__PURE__ */ import_react14.default.createElement("tr", { key: ri, style: { background: striped && ri % 2 ? "var(--gray-50)" : "transparent" } }, r.map((v, ci) => /* @__PURE__ */ import_react14.default.createElement("td", { key: ci, style: { ...cell, borderBottom: "1px solid var(--gray-200)", border: grid ? "1px solid var(--gray-200)" : void 0 } }, v))))));
  }

  // stage/project/components/src/data/SpecTable.jsx
  var import_react15 = __toESM(require_react_shim());
  function SpecTable({ rows = [], keyWidth = 180, style }) {
    return /* @__PURE__ */ import_react15.default.createElement("div", { style: { display: "grid", gridTemplateColumns: keyWidth + "px minmax(0,1fr)", fontFamily: "var(--font-text)", ...style } }, rows.map((r, i) => /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, { key: i }, /* @__PURE__ */ import_react15.default.createElement("div", { style: { background: "var(--surface-card)", padding: "14px 12px", fontSize: 12, fontWeight: 600, lineHeight: 1.45, color: "var(--text-primary)", display: "flex", flexDirection: "column", justifyContent: "center" } }, r.label), /* @__PURE__ */ import_react15.default.createElement("div", { style: { padding: "14px 10px", fontSize: 12, lineHeight: 1.5, color: "var(--text-body)", borderBottom: i < rows.length - 1 ? "1px solid var(--gray-200)" : "none", display: "flex", flexDirection: "column", justifyContent: "center" } }, r.value))));
  }

  // stage/project/components/src/brand/TeamMember.jsx
  var import_react16 = __toESM(require_react_shim());
  function TeamMember({ name, role, phone, email, photo, photoSize = 88, tone = "gray", layout = "stacked", style }) {
    const bg = tone === "accent" ? "var(--surface-card-accent)" : tone === "white" ? "var(--white)" : "var(--surface-card)";
    const row = layout === "row";
    const pic = photo === void 0 ? null : photo ? /* @__PURE__ */ import_react16.default.createElement("img", { src: photo, alt: "", style: { width: photoSize, height: photoSize, objectFit: "cover", flex: "none", display: "block" } }) : /* @__PURE__ */ import_react16.default.createElement("div", { style: { width: photoSize, height: photoSize, flex: "none", background: "var(--gray-200)" } });
    return /* @__PURE__ */ import_react16.default.createElement("div", { style: { background: bg, padding: "18px 22px 20px", display: "flex", flexDirection: row ? "row" : "column", gap: row ? 16 : 14, alignItems: row ? "center" : "flex-start", fontFamily: "var(--font-text)", color: "var(--text-primary)", borderRadius: 0, ...style } }, pic, /* @__PURE__ */ import_react16.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 2, minWidth: 0 } }, /* @__PURE__ */ import_react16.default.createElement("div", { style: { fontSize: 15, fontWeight: 700, lineHeight: 1.2 } }, name), role && /* @__PURE__ */ import_react16.default.createElement("div", { style: { fontSize: 12, fontWeight: 600, lineHeight: 1.35, color: "var(--text-secondary)" } }, role), (phone || email) && /* @__PURE__ */ import_react16.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 1, marginTop: 8, fontSize: 12, lineHeight: 1.45, color: "var(--text-body)" } }, phone && /* @__PURE__ */ import_react16.default.createElement("div", null, phone), email && /* @__PURE__ */ import_react16.default.createElement("a", { href: "mailto:" + email, style: { color: "var(--text-accent)", textDecoration: "underline", textUnderlineOffset: 2, overflowWrap: "anywhere" } }, email))));
  }
  function TeamGrid({ columns = 3, gap = 14, children, style }) {
    return /* @__PURE__ */ import_react16.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(" + columns + ",minmax(0,1fr))", gap, alignItems: "start", ...style } }, children);
  }

  // stage/project/components/src/doc/ProposalHeader.jsx
  var import_react17 = __toESM(require_react_shim());
  function ProposalHeader({ client, assetBase = "assets/", style }) {
    return /* @__PURE__ */ import_react17.default.createElement(AuroraBand, { padding: "0 72px", style: { height: 120, display: "flex", alignItems: "center", justifyContent: "space-between", ...style } }, /* @__PURE__ */ import_react17.default.createElement(Logo, { assetBase, height: 34 }), /* @__PURE__ */ import_react17.default.createElement(Button, { variant: "inverse", size: "md", style: { fontWeight: 500, letterSpacing: ".01em", cursor: "default" } }, "PROPOSAL \xB7 PREPARED FOR ", String(client).toUpperCase()));
  }

  // stage/project/components/src/doc/HeroHeader.jsx
  var import_react18 = __toESM(require_react_shim());
  function HeroHeader({ title, children, assetBase = "assets/", style }) {
    return /* @__PURE__ */ import_react18.default.createElement(AuroraBand, { padding: "28px 56px 36px", style }, /* @__PURE__ */ import_react18.default.createElement(Logo, { assetBase, height: 26 }), /* @__PURE__ */ import_react18.default.createElement("h1", { style: { margin: "28px 0 12px", font: "var(--type-display)", fontSize: 36, letterSpacing: "-0.02em" } }, title), /* @__PURE__ */ import_react18.default.createElement("div", { style: { fontSize: 16, lineHeight: 1.45, display: "flex", flexDirection: "column", gap: 10 } }, children));
  }

  // stage/project/components/src/doc/ContactFooter.jsx
  var import_react19 = __toESM(require_react_shim());
  function ContactFooter({ people = [], layout = "row", title = "Your Points of Contact", photos = false, style }) {
    const side = layout === "side";
    return /* @__PURE__ */ import_react19.default.createElement(AuroraBand, { variant: "footer", padding: "28px 72px 30px", style }, /* @__PURE__ */ import_react19.default.createElement("div", { style: { display: "flex", gap: side ? 40 : 12, flexDirection: side ? "row" : "column", alignItems: side ? "center" : "stretch" } }, /* @__PURE__ */ import_react19.default.createElement("div", { style: { font: "var(--type-display)", fontSize: side ? 28 : 15, lineHeight: 1.1 } }, title), /* @__PURE__ */ import_react19.default.createElement("div", { style: { display: "flex", gap: 36, flexWrap: "wrap" } }, people.map((p) => /* @__PURE__ */ import_react19.default.createElement(ContactCard, { key: p.name, ...p, photo: p.photo !== void 0 ? p.photo : photos ? "" : void 0, photoSize: 78 })))));
  }

  // stage/project/components/src/doc/LegalBar.jsx
  var import_react20 = __toESM(require_react_shim());
  var LEGAL = {
    uk: "Infoquest Network LTD is a company registered in England and Wales (Company Number 14587613). \xA9 Infoquest Network LTD. All rights reserved.",
    uae: "Infoquest Network FZ-LLC is a limited liability company registered in the United Arab Emirates under license number 10929. \xA9 Infoquest Network FZ-LLC. All rights reserved."
  };
  function LegalBar({ entity = "uk", children, style }) {
    return /* @__PURE__ */ import_react20.default.createElement("div", { style: { background: "var(--surface-inverse)", color: "var(--white)", textAlign: "center", fontSize: 8.5, fontWeight: 600, lineHeight: 1.5, padding: "12px 40px", ...style } }, children || LEGAL[entity] || LEGAL.uk);
  }

  // stage/project/components/src/doc/DocPage.jsx
  var import_react21 = __toESM(require_react_shim());
  function DocPage({ children, style }) {
    return /* @__PURE__ */ import_react21.default.createElement("div", { style: { width: 816, minHeight: 1056, background: "var(--white)", display: "flex", flexDirection: "column", boxShadow: "0 0 0 1px var(--border-subtle)", ...style } }, children);
  }

  // stage/project/components/src/slides/ContentSlide.jsx
  var import_react22 = __toESM(require_react_shim());
  function ContentSlide({ n, eyebrow, title, lede, children, style }) {
    return /* @__PURE__ */ import_react22.default.createElement("div", { style: { position: "relative", width: 1440, height: 810, background: "var(--surface-page)", overflow: "hidden", ...style } }, /* @__PURE__ */ import_react22.default.createElement(SectionHeader, { eyebrow, title, lede, style: { position: "absolute", left: 90, right: 90, top: 84 } }), /* @__PURE__ */ import_react22.default.createElement("div", { style: { position: "absolute", left: 90, right: 90, top: lede ? 250 : 200, bottom: 96 } }, children), /* @__PURE__ */ import_react22.default.createElement(AuroraBand, { variant: "strip", style: { position: "absolute", left: 0, right: 0, bottom: 0, height: 64, padding: "0 90px" } }, /* @__PURE__ */ import_react22.default.createElement("span", { style: { fontSize: 14, color: "var(--white)" } }, n)));
  }

  // stage/project/components/src/slides/CoverSlide.jsx
  var import_react23 = __toESM(require_react_shim());
  function CoverSlide({ children, date = "July 2026", assetBase = "assets/", style }) {
    return /* @__PURE__ */ import_react23.default.createElement("div", { style: { position: "relative", width: 1440, height: 810, overflow: "hidden", color: "var(--white)", backgroundColor: "var(--aurora-night)", backgroundImage: "var(--bg-aurora)", backgroundSize: "cover", ...style } }, /* @__PURE__ */ import_react23.default.createElement("div", { style: { position: "absolute", left: 90, right: 90, top: 84, display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ import_react23.default.createElement(Logo, { assetBase, height: 32 }), /* @__PURE__ */ import_react23.default.createElement("span", { style: { fontSize: 18 } }, date)), children);
  }

  // stage/project/components/src/carousel/Carousel.jsx
  var import_react25 = __toESM(require_react_shim());

  // stage/project/components/src/carousel/base.jsx
  var import_react24 = __toESM(require_react_shim());
  var THEMES = {
    banking: { name: "Banking", paper: "var(--ev-banking-paper)", ink: "var(--ev-banking-ink)", text: "#1B1B1B", accent: "var(--iq-purple-600)", card: "#F8F3EA", cta: "var(--ev-banking-ink)", photo: "photo-banking-cover.jpg" },
    insurance: { name: "Insurance", paper: "var(--ev-insurance-paper)", ink: "var(--ev-insurance-ink)", text: "#FFFFFF", accent: "#FFFFFF", card: "rgba(255,255,255,.08)", cta: "var(--ev-insurance-ink)", photo: "photo-insurance-cover.jpg" },
    datacenter: { name: "Data Centers", paper: "var(--ev-datacenter-paper)", ink: "var(--ev-datacenter-ink)", text: "#FFFFFF", accent: "var(--ev-datacenter-ink)", card: "rgba(255,255,255,.06)", cta: "var(--ev-datacenter-ink)", photo: "photo-datacenter-cover.jpg" },
    fintech: { name: "Fintech", paper: "var(--ev-fintech-paper)", ink: "var(--ev-fintech-ink)", text: "#FFFFFF", accent: "#FFFFFF", card: "rgba(255,255,255,.08)", cta: "var(--ev-fintech-ink)", photo: "photo-fintech-cover.jpg" },
    company: { name: "", cover: "var(--ev-company-paper)", paper: "var(--ev-company-paper)", ink: "var(--ev-company-ink)", text: "#FFFFFF", accent: "var(--iq-purple-500)", card: "rgba(255,255,255,.06)", cta: "var(--ev-company-ink)", photo: null },
    /* Vibrant presets: carousels are information pieces and may leave the brand palette. */
    desert: { name: "", cover: "var(--ev-desert-ink)", paper: "var(--ev-desert-paper)", ink: "var(--ev-desert-ink)", text: "#1A0F08", accent: "var(--ev-desert-ink)", card: "rgba(255,255,255,.2)", cta: "var(--ev-desert-ink)", photo: null },
    neon: { name: "", cover: "var(--ev-neon-paper)", paper: "var(--ev-neon-paper)", ink: "var(--ev-neon-ink)", text: "#FFFFFF", accent: "#19C3B1", card: "rgba(255,255,255,.07)", cta: "var(--ev-neon-ink)", photo: null },
    citrus: { name: "", cover: "var(--ev-citrus-ink)", paper: "var(--ev-citrus-paper)", ink: "var(--ev-citrus-ink)", text: "#141414", accent: "var(--ev-citrus-ink)", card: "rgba(255,255,255,.35)", cta: "var(--ev-citrus-ink)", photo: null }
  };
  function theme(t) {
    return typeof t === "object" && t ? { ...THEMES.banking, ...t } : THEMES[t] || THEMES.banking;
  }
  var pad = (n) => String(n).padStart(2, "0");
  var caps = { textTransform: "uppercase", letterSpacing: ".06em" };
  function RunHead({ index, total, sector, color }) {
    return /* @__PURE__ */ import_react24.default.createElement("div", { style: { display: "flex", justifyContent: "space-between", font: "300 22px var(--font-text)", ...caps, color } }, /* @__PURE__ */ import_react24.default.createElement("span", null, "Expert Voices", sector ? " \xB7 " + sector : ""), index != null && /* @__PURE__ */ import_react24.default.createElement("i", null, pad(index), total ? " / " + pad(total) : ""));
  }
  function RunFoot({ left, right, color }) {
    return /* @__PURE__ */ import_react24.default.createElement("div", { style: { borderTop: "2px solid " + color, paddingTop: 16, display: "flex", justifyContent: "space-between", gap: 30, font: "300 18px var(--font-text)", ...caps, color } }, /* @__PURE__ */ import_react24.default.createElement("span", { style: { whiteSpace: "nowrap" } }, left), /* @__PURE__ */ import_react24.default.createElement("span", { style: { textAlign: "right" } }, right));
  }
  function Credit({ featuring, assetBase, color = "#fff" }) {
    const Logo2 = ({ h }) => /* @__PURE__ */ import_react24.default.createElement("img", { src: assetBase + "logo-infoquest-white.png", alt: "infoquest", style: { height: h, width: "auto", display: "block" } });
    return /* @__PURE__ */ import_react24.default.createElement("div", { style: { borderTop: "2px solid rgba(255,255,255,.8)", paddingTop: 18, display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 30, color } }, /* @__PURE__ */ import_react24.default.createElement("div", { style: { font: "600 18px/1.5 var(--font-text)", ...caps } }, [].concat(featuring || []).map((l, i) => /* @__PURE__ */ import_react24.default.createElement("div", { key: i }, l))), /* @__PURE__ */ import_react24.default.createElement(Logo2, { h: 34 }));
  }
  function Frame({ th, bg, color, index, total, sector, foot, photo, assetBase, children, style }) {
    const c = color || th.text;
    return /* @__PURE__ */ import_react24.default.createElement("div", { style: { position: "relative", width: 1080, height: 1080, overflow: "hidden", background: bg || th.paper, color: c, fontFamily: "var(--font-text)", boxSizing: "border-box", ...style } }, photo && /* @__PURE__ */ import_react24.default.createElement("div", { style: { position: "absolute", inset: 0, backgroundImage: "url(" + (photo.includes("/") ? photo : assetBase + "imagery/" + photo) + ")", backgroundSize: "cover", backgroundPosition: "center" } }), photo && /* @__PURE__ */ import_react24.default.createElement("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(0,0,0,.25) 0%,rgba(0,0,0,.35) 50%,rgba(0,0,0,.7) 100%)" } }), /* @__PURE__ */ import_react24.default.createElement("div", { style: { position: "relative", height: "100%", boxSizing: "border-box", padding: "52px 60px", display: "flex", flexDirection: "column" } }, /* @__PURE__ */ import_react24.default.createElement(RunHead, { index, total, sector, color: c }), /* @__PURE__ */ import_react24.default.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", paddingTop: 100, minHeight: 0 } }, children), foot && /* @__PURE__ */ import_react24.default.createElement(RunFoot, { left: foot.left, right: foot.right, color: c })));
  }
  function Title({ children, dek, color, size = 58 }) {
    return /* @__PURE__ */ import_react24.default.createElement("div", { style: { marginBottom: 44 } }, /* @__PURE__ */ import_react24.default.createElement("h2", { style: { margin: 0, font: "300 " + size + "px/1.2 var(--font-display)", letterSpacing: "-0.01em", color, maxWidth: 900 } }, children), dek && /* @__PURE__ */ import_react24.default.createElement("p", { style: { margin: "14px 0 0", font: "400 22px/1.45 var(--font-text)", color, opacity: 0.85, maxWidth: 880 } }, dek));
  }
  var label = { font: "600 14px var(--font-text)", letterSpacing: ".1em", textTransform: "uppercase" };

  // stage/project/components/src/carousel/Carousel.jsx
  var T = (p) => theme(p.theme);
  var frameProps = (p, th) => ({ th, index: p.index, total: p.total, sector: p.sector, foot: p.foot, assetBase: p.assetBase || "assets/", style: p.style });
  function CarouselSlide(p) {
    const th = T(p);
    return /* @__PURE__ */ import_react25.default.createElement(Frame, { ...frameProps(p, th), bg: p.ground === "ink" ? th.ink : void 0, color: p.ground === "ink" ? "#fff" : void 0, photo: p.photo }, p.title && /* @__PURE__ */ import_react25.default.createElement(Title, { dek: p.dek }, p.title), p.children);
  }
  function CarouselCover(p) {
    const th = T(p);
    const ab = p.assetBase || "assets/";
    const photo = p.photo === void 0 ? th.photo : p.photo;
    return /* @__PURE__ */ import_react25.default.createElement(Frame, { th, bg: photo ? "#000" : th.cover || th.ink, color: "#fff", index: 1, total: p.total, sector: p.sector ?? th.name, photo, assetBase: ab, style: p.style }, /* @__PURE__ */ import_react25.default.createElement("div", { style: { paddingTop: 50 } }, /* @__PURE__ */ import_react25.default.createElement("div", { style: { width: 60, height: 3, background: "#fff", marginBottom: 28 } }), /* @__PURE__ */ import_react25.default.createElement("h1", { style: { margin: 0, font: "700 120px/1.0 var(--font-display)", letterSpacing: "-0.03em", maxWidth: 920 } }, p.title)), /* @__PURE__ */ import_react25.default.createElement("div", { style: { marginTop: "auto" } }, p.dek && /* @__PURE__ */ import_react25.default.createElement("p", { style: { margin: "0 120px 40px 0", font: "400 28px/1.45 var(--font-text)" } }, p.dek), /* @__PURE__ */ import_react25.default.createElement(Credit, { featuring: p.featuring, assetBase: ab })));
  }
  function CarouselQuote(p) {
    const th = T(p);
    return /* @__PURE__ */ import_react25.default.createElement(Frame, { ...frameProps(p, th) }, /* @__PURE__ */ import_react25.default.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", paddingBottom: 60 } }, /* @__PURE__ */ import_react25.default.createElement("blockquote", { style: { margin: 0, font: "italic 300 " + (p.size || 58) + "px/1.3 var(--font-display)", letterSpacing: "-0.01em", maxWidth: 910 } }, p.quote), p.attribution && /* @__PURE__ */ import_react25.default.createElement("div", { style: { marginTop: 36, font: "300 20px var(--font-text)", letterSpacing: ".06em", textTransform: "uppercase" } }, p.attribution)));
  }
  function CarouselColumns(p) {
    const th = T(p);
    const v = p.variant || "rule";
    const items = p.items || [];
    const col = (it, i) => {
      const num = p.numbered === false ? null : it.num || pad(i + 1);
      const box = v === "card" ? { background: th.card, borderTop: "3px solid " + th.accent, padding: "22px 20px" } : v === "bar" ? { background: th.card, borderLeft: "4px solid " + th.accent, padding: "24px 22px" } : { borderTop: "2px solid " + th.text, paddingTop: 18 };
      return /* @__PURE__ */ import_react25.default.createElement("div", { key: i, style: { display: "flex", flexDirection: "column", gap: 12, ...box } }, (num || it.label) && /* @__PURE__ */ import_react25.default.createElement("div", { style: { ...label, fontSize: v === "bar" ? 40 : 15, fontWeight: v === "bar" ? 700 : 500, letterSpacing: v === "bar" ? 0 : ".08em", fontFamily: v === "bar" ? "var(--font-display)" : "var(--font-text)", color: v === "rule" ? th.text : th.accent } }, num, num && it.label && v !== "bar" ? " \xB7 " : "", v === "bar" ? null : it.label), v === "bar" && it.label && /* @__PURE__ */ import_react25.default.createElement("div", { style: { ...label, color: th.text } }, it.label), /* @__PURE__ */ import_react25.default.createElement("div", { style: { font: (v === "rule" ? "400 32px" : "700 30px") + "/1.2 var(--font-display)" } }, it.title), it.body && /* @__PURE__ */ import_react25.default.createElement("div", { style: { font: "400 19px/1.55 var(--font-text)", opacity: 0.9 } }, it.body), it.meta && /* @__PURE__ */ import_react25.default.createElement("div", { style: { marginTop: "auto", paddingTop: 14, ...label, fontSize: 13, color: th.accent } }, "\u2014 ", it.meta));
    };
    return /* @__PURE__ */ import_react25.default.createElement(Frame, { ...frameProps(p, th) }, /* @__PURE__ */ import_react25.default.createElement(Title, { dek: p.dek }, p.title), /* @__PURE__ */ import_react25.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(" + items.length + ",minmax(0,1fr))", gap: v === "rule" ? 36 : 16, flex: p.callout || v === "bar" ? "none" : 1, alignItems: "stretch", paddingBottom: 40 } }, items.map(col)), p.callout && /* @__PURE__ */ import_react25.default.createElement("div", { style: { marginTop: "auto", marginBottom: 36, background: th.ink, color: "#fff", padding: "18px 26px", display: "flex", alignItems: "center", gap: 26 } }, p.callout.value && /* @__PURE__ */ import_react25.default.createElement("span", { style: { font: "400 72px/1 var(--font-display)", whiteSpace: "nowrap" } }, p.callout.value), /* @__PURE__ */ import_react25.default.createElement("span", { style: { font: "500 20px/1.45 var(--font-text)" } }, p.callout.text)));
  }
  function CarouselStats(p) {
    const th = T(p);
    const items = p.items || [];
    const panel = { background: p.photo ? "#1E1E1E" : th.ink, color: "#fff" };
    const Bar = ({ pct }) => pct == null ? null : /* @__PURE__ */ import_react25.default.createElement("div", { style: { height: 6, background: "rgba(255,255,255,.2)", marginTop: 14 } }, /* @__PURE__ */ import_react25.default.createElement("div", { style: { width: Math.max(0, Math.min(100, pct)) + "%", height: "100%", background: "#fff" } }));
    return /* @__PURE__ */ import_react25.default.createElement(Frame, { ...frameProps(p, th), photo: p.photo, color: p.photo ? "#fff" : void 0 }, /* @__PURE__ */ import_react25.default.createElement(Title, { dek: p.dek }, p.title), /* @__PURE__ */ import_react25.default.createElement("div", { style: { display: "grid", gridTemplateColumns: items.length ? "1.15fr 1fr" : "1fr", gap: 6, marginBottom: 40 } }, /* @__PURE__ */ import_react25.default.createElement("div", { style: { ...panel, padding: "28px 30px", display: "flex", flexDirection: "column", minHeight: 500 } }, /* @__PURE__ */ import_react25.default.createElement("div", { style: label }, p.lead.label), /* @__PURE__ */ import_react25.default.createElement("div", { style: { font: "400 140px/1 var(--font-display)", letterSpacing: "-0.02em", margin: "auto 0" } }, p.lead.value), /* @__PURE__ */ import_react25.default.createElement("div", { style: { font: "400 18px/1.55 var(--font-text)" } }, p.lead.body)), items.length > 0 && /* @__PURE__ */ import_react25.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6 } }, items.map((it, i) => /* @__PURE__ */ import_react25.default.createElement("div", { key: i, style: { ...panel, flex: 1, padding: "22px 26px" } }, /* @__PURE__ */ import_react25.default.createElement("div", { style: label }, it.label), /* @__PURE__ */ import_react25.default.createElement("div", { style: { font: "400 72px/1.1 var(--font-display)", margin: "10px 0 8px" } }, it.value), /* @__PURE__ */ import_react25.default.createElement("div", { style: { font: "400 17px/1.5 var(--font-text)" } }, it.body), /* @__PURE__ */ import_react25.default.createElement(Bar, { pct: it.pct }))))));
  }
  function CarouselSplit(p) {
    const th = T(p);
    const right = p.list ? /* @__PURE__ */ import_react25.default.createElement("div", { style: { display: "flex", flexDirection: "column" } }, p.list.eyebrow && /* @__PURE__ */ import_react25.default.createElement("div", { style: { ...label, marginBottom: 16 } }, p.list.eyebrow), p.list.items.map((it, i) => /* @__PURE__ */ import_react25.default.createElement("div", { key: i, style: { display: "flex", gap: 26, padding: "22px 0", borderTop: i ? "1px solid " + th.text : "none", borderColor: "currentColor" } }, /* @__PURE__ */ import_react25.default.createElement("span", { style: { font: "400 44px/1 var(--font-display)", color: th.accent } }, pad(i + 1)), /* @__PURE__ */ import_react25.default.createElement("div", null, /* @__PURE__ */ import_react25.default.createElement("div", { style: { font: "700 22px/1.3 var(--font-text)" } }, it.title), it.body && /* @__PURE__ */ import_react25.default.createElement("div", { style: { font: "400 17px/1.5 var(--font-text)", marginTop: 6, opacity: 0.9 } }, it.body))))) : /* @__PURE__ */ import_react25.default.createElement("div", { style: { background: th.ink, color: "#fff", padding: "28px 30px", display: "flex", flexDirection: "column", gap: 18, minHeight: 500 } }, p.panel.eyebrow && /* @__PURE__ */ import_react25.default.createElement("div", { style: label }, p.panel.eyebrow), /* @__PURE__ */ import_react25.default.createElement("div", { style: { font: "700 44px/1.1 var(--font-display)" } }, p.panel.title), p.panel.body && /* @__PURE__ */ import_react25.default.createElement("div", { style: { font: "500 20px/1.5 var(--font-text)" } }, p.panel.body), p.panel.foot && /* @__PURE__ */ import_react25.default.createElement("div", { style: { marginTop: "auto", ...label } }, "\u2014 ", p.panel.foot));
    return /* @__PURE__ */ import_react25.default.createElement(Frame, { ...frameProps(p, th) }, /* @__PURE__ */ import_react25.default.createElement(Title, null, p.title), /* @__PURE__ */ import_react25.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: 40, alignItems: "start" } }, /* @__PURE__ */ import_react25.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12 } }, /* @__PURE__ */ import_react25.default.createElement("div", { style: { font: "italic 400 30px/1.35 var(--font-display)", marginBottom: 26 } }, p.quote), (p.tags || []).map((t) => /* @__PURE__ */ import_react25.default.createElement("span", { key: t, style: { alignSelf: "flex-start", border: "1px solid currentColor", padding: "9px 14px", ...label, fontSize: 13, fontWeight: 500 } }, t))), right));
  }
  function CarouselProcess(p) {
    const th = T(p);
    const steps = p.steps || [];
    return /* @__PURE__ */ import_react25.default.createElement(Frame, { ...frameProps(p, th) }, /* @__PURE__ */ import_react25.default.createElement(Title, { dek: p.dek }, p.title), /* @__PURE__ */ import_react25.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(" + steps.length + ",minmax(0,1fr))", gap: 12 } }, steps.map((s, i) => /* @__PURE__ */ import_react25.default.createElement("div", { key: i, style: { border: "1.5px solid " + th.text, padding: "20px 16px", display: "flex", flexDirection: "column", gap: 8, minHeight: 330 } }, /* @__PURE__ */ import_react25.default.createElement("div", { style: { font: "700 54px/1 var(--font-display)", color: th.accent } }, pad(i + 1)), s.label && /* @__PURE__ */ import_react25.default.createElement("div", { style: { ...label, fontSize: 13, fontWeight: 500 } }, s.label), /* @__PURE__ */ import_react25.default.createElement("div", { style: { font: "700 21px/1.25 var(--font-text)" } }, s.title), s.body && /* @__PURE__ */ import_react25.default.createElement("div", { style: { font: "400 16px/1.5 var(--font-text)", opacity: 0.9 } }, s.body)))), p.outcomes && /* @__PURE__ */ import_react25.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(" + p.outcomes.length + ",1fr)", gap: 12, marginTop: 12 } }, p.outcomes.map((o, i) => {
      const pass = o.tone !== "stop";
      return /* @__PURE__ */ import_react25.default.createElement("div", { key: i, style: { display: "flex", gap: 16, alignItems: "center", padding: "20px 22px", background: pass ? th.ink : "transparent", color: pass ? "#fff" : th.text, border: "1.5px solid " + (pass ? th.ink : th.text) } }, /* @__PURE__ */ import_react25.default.createElement("span", { style: { width: 30, height: 30, flex: "none", borderRadius: "var(--radius-dot)", display: "inline-flex", alignItems: "center", justifyContent: "center", background: pass ? "var(--iq-purple-600)" : "transparent", border: pass ? "none" : "1.5px solid currentColor", font: "700 16px var(--font-text)" } }, pass ? "\u2713" : "\u2715"), /* @__PURE__ */ import_react25.default.createElement("div", null, /* @__PURE__ */ import_react25.default.createElement("div", { style: { font: "700 22px var(--font-text)" } }, o.title), o.body && /* @__PURE__ */ import_react25.default.createElement("div", { style: { font: "400 15px/1.45 var(--font-text)", marginTop: 4 } }, o.body)));
    })));
  }
  function CarouselChecklist(p) {
    const th = T(p);
    return /* @__PURE__ */ import_react25.default.createElement(Frame, { ...frameProps(p, th) }, /* @__PURE__ */ import_react25.default.createElement(Title, { dek: p.dek, size: p.profile ? 72 : 58 }, p.title), /* @__PURE__ */ import_react25.default.createElement("div", { style: { display: "flex", flexDirection: "column", marginTop: "auto", marginBottom: 40 } }, (p.items || []).map((it, i) => /* @__PURE__ */ import_react25.default.createElement("div", { key: i, style: { display: "flex", gap: 26, padding: "26px 0", borderTop: "1px solid " + th.text } }, /* @__PURE__ */ import_react25.default.createElement(CheckIcon, { size: 44 }), /* @__PURE__ */ import_react25.default.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ import_react25.default.createElement("div", { style: { font: "700 26px/1.3 var(--font-text)" } }, it.title), it.body && /* @__PURE__ */ import_react25.default.createElement("div", { style: { font: "400 19px/1.5 var(--font-text)", marginTop: 6, opacity: 0.9 } }, it.body), it.bullets && /* @__PURE__ */ import_react25.default.createElement("ul", { style: { margin: "8px 0 0", paddingLeft: 22, font: "400 19px/1.55 var(--font-text)", opacity: 0.9 } }, it.bullets.map((b, j) => /* @__PURE__ */ import_react25.default.createElement("li", { key: j }, b))))))));
  }
  function CarouselShare(p) {
    const th = T(p);
    const v = Math.max(0, Math.min(100, p.value));
    const r = 150, c = 2 * Math.PI * r;
    return /* @__PURE__ */ import_react25.default.createElement(Frame, { ...frameProps(p, th) }, /* @__PURE__ */ import_react25.default.createElement(Title, { dek: p.dek }, p.title), /* @__PURE__ */ import_react25.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: 70, flex: 1, paddingBottom: 40 } }, /* @__PURE__ */ import_react25.default.createElement("svg", { width: "400", height: "400", viewBox: "0 0 400 400", style: { flex: "none" } }, /* @__PURE__ */ import_react25.default.createElement("circle", { cx: "200", cy: "200", r, fill: "none", stroke: "currentColor", strokeOpacity: ".18", strokeWidth: "70" }), /* @__PURE__ */ import_react25.default.createElement("circle", { cx: "200", cy: "200", r, fill: "none", stroke: th.text === "#FFFFFF" ? "#FFFFFF" : "var(--iq-purple-600)", strokeWidth: "70", strokeDasharray: c * v / 100 + " " + c, transform: "rotate(-90 200 200)" }), /* @__PURE__ */ import_react25.default.createElement("text", { x: "200", y: "216", textAnchor: "middle", style: { font: "400 64px var(--font-display)", fill: "currentColor" } }, v, "%")), /* @__PURE__ */ import_react25.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 20 } }, /* @__PURE__ */ import_react25.default.createElement("div", { style: { font: "300 40px/1.25 var(--font-display)" } }, p.label), p.note && /* @__PURE__ */ import_react25.default.createElement("div", { style: { font: "400 20px/1.55 var(--font-text)", opacity: 0.9 } }, p.note), p.rest && /* @__PURE__ */ import_react25.default.createElement("div", { style: { ...label, fontWeight: 500, opacity: 0.85 } }, "Rest \xB7 ", 100 - v, "% \xB7 ", p.rest))));
  }
  function CarouselContrast(p) {
    const th = T(p);
    const Col = ({ c, us }) => /* @__PURE__ */ import_react25.default.createElement("div", { style: { padding: "30px 30px 36px", minHeight: 420, background: us ? th.ink : "transparent", color: us ? "#fff" : th.text, border: "1.5px solid " + (us ? th.ink : th.text), display: "flex", flexDirection: "column", gap: 26 } }, /* @__PURE__ */ import_react25.default.createElement("div", { style: { ...label, opacity: us ? 1 : 0.85 } }, c.label), c.items.map((t, i) => /* @__PURE__ */ import_react25.default.createElement("div", { key: i, style: { display: "flex", gap: 14, alignItems: "flex-start", font: (us ? "600" : "400") + " 26px/1.4 var(--font-text)" } }, us ? /* @__PURE__ */ import_react25.default.createElement(CheckIcon, { size: 30 }) : /* @__PURE__ */ import_react25.default.createElement("span", { style: { width: 30, flex: "none", textAlign: "center", opacity: 0.7 } }, "\u2013"), /* @__PURE__ */ import_react25.default.createElement("span", null, t))));
    return /* @__PURE__ */ import_react25.default.createElement(Frame, { ...frameProps(p, th) }, /* @__PURE__ */ import_react25.default.createElement(Title, { dek: p.dek }, p.title), /* @__PURE__ */ import_react25.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, alignItems: "start" } }, /* @__PURE__ */ import_react25.default.createElement(Col, { c: p.them }), /* @__PURE__ */ import_react25.default.createElement(Col, { c: p.us, us: true })));
  }
  function CarouselCTA(p) {
    const th = T(p);
    const ab = p.assetBase || "assets/";
    return /* @__PURE__ */ import_react25.default.createElement(Frame, { th, bg: th.cta, color: "#fff", index: p.total, total: p.total, style: p.style }, /* @__PURE__ */ import_react25.default.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", paddingBottom: 40 } }, /* @__PURE__ */ import_react25.default.createElement("h2", { style: { margin: "0 0 60px", font: "400 72px/1.2 var(--font-display)", letterSpacing: "-0.01em" } }, p.question || "Need expert insights?"), /* @__PURE__ */ import_react25.default.createElement("div", { style: { background: "var(--iq-purple-600)", padding: "20px 24px", display: "flex", gap: 24, alignItems: "center", font: "500 24px var(--font-text)" } }, /* @__PURE__ */ import_react25.default.createElement("u", { style: { fontWeight: 700 } }, p.linkLabel || "Reach out to us"), /* @__PURE__ */ import_react25.default.createElement("span", null, "\u2192"), /* @__PURE__ */ import_react25.default.createElement("span", null, p.email || "info@iqnetwork.co"))), /* @__PURE__ */ import_react25.default.createElement(Credit, { featuring: p.featuring, assetBase: ab }));
  }

  // stage/project/components/src/regroup/Regroup.jsx
  var import_react26 = __toESM(require_react_shim());
  var P = { purple: "var(--iq-purple-600)", lav: "var(--iq-purple-100)", card: "var(--surface-card)", ink: "var(--text-primary)", body: "var(--text-body)", sec: "var(--text-secondary)", rule: "var(--border-rule)" };
  var AURORA = { background: "var(--aurora-night) var(--bg-aurora) center/cover no-repeat", color: "#fff" };
  var PATHS = {
    check: ["M20 6 9 17l-5-5"],
    arrow: ["M5 12h14", "m12 5 7 7-7 7"],
    up: ["m5 12 7-7 7 7", "M12 19V5"],
    down: ["M12 5v14", "m19 12-7 7-7-7"],
    alert: ["M12 7v6", "M12 17h.01"],
    x: ["M18 6 6 18", "m6 6 12 12"],
    plus: ["M5 12h14", "M12 5v14"],
    star: ["M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"],
    spark: ["M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2z"],
    chat: ["M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"],
    users: ["M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", "M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0", "M22 21v-2a4 4 0 0 0-3-3.87", "M16 3.13a4 4 0 0 1 0 7.75"],
    target: ["M12 12m-10 0a10 10 0 1 0 20 0a10 10 0 1 0-20 0", "M12 12m-6 0a6 6 0 1 0 12 0a6 6 0 1 0-12 0", "M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"],
    flag: ["M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z", "M4 22v-7"]
  };
  function RegroupIcon({ name = "check", size = 28, color = P.purple, glyph = "#fff", style }) {
    return /* @__PURE__ */ import_react26.default.createElement("span", { "aria-hidden": "true", style: { width: size, height: size, flex: "none", borderRadius: "var(--radius-dot)", background: color, display: "inline-flex", alignItems: "center", justifyContent: "center", ...style } }, /* @__PURE__ */ import_react26.default.createElement("svg", { width: size * 0.58, height: size * 0.58, viewBox: "0 0 24 24", fill: "none", stroke: glyph, strokeWidth: "2.6", strokeLinecap: "round", strokeLinejoin: "round" }, (PATHS[name] || PATHS.check).map((d, i) => /* @__PURE__ */ import_react26.default.createElement("path", { key: i, d }))));
  }
  var STATUS = { exploring: { bg: "#76767c", c: "#fff" }, exploiting: { bg: "#141414", c: "#fff" }, payoff: { bg: P.purple, c: "#fff" }, done: { bg: "var(--signal-high)", c: "#fff" }, risk: { bg: "var(--signal-medium)", c: "#fff" } };
  function RegroupStatus({ tone = "exploring", children }) {
    const s = STATUS[tone] || STATUS.exploring;
    return /* @__PURE__ */ import_react26.default.createElement("span", { style: { display: "inline-block", background: s.bg, color: s.c, font: "700 11px var(--font-text)", letterSpacing: ".1em", textTransform: "uppercase", padding: "5px 10px", whiteSpace: "nowrap" } }, children || tone);
  }
  function Confetti() {
    const bits = [[60, 40, -20], [180, 90, 30], [340, 30, 60], [520, 70, -40], [700, 20, 15], [880, 60, 70], [1040, 30, -25], [1220, 80, 40], [1360, 40, -60], [30, 260, 50], [1400, 240, -15], [110, 520, 20], [1390, 520, 65], [70, 720, -35], [1330, 700, 25]];
    return /* @__PURE__ */ import_react26.default.createElement("svg", { width: "1440", height: "810", viewBox: "0 0 1440 810", style: { position: "absolute", inset: 0, pointerEvents: "none" } }, bits.map(([x, y, r], i) => i % 3 === 2 ? /* @__PURE__ */ import_react26.default.createElement("path", { key: i, d: `M${x} ${y} q 18 -22 36 0 t 36 0`, fill: "none", stroke: i % 2 ? "#8457c9" : "#b9a3e3", strokeWidth: "5", transform: `rotate(${r} ${x} ${y})` }) : /* @__PURE__ */ import_react26.default.createElement("rect", { key: i, x, y, width: i % 2 ? 34 : 22, height: i % 2 ? 14 : 22, fill: i % 4 ? "#8457c9" : "#c9b6ee", opacity: ".85", transform: `rotate(${r} ${x} ${y})` })));
  }
  function Strip({ n, assetBase }) {
    return /* @__PURE__ */ import_react26.default.createElement("div", { style: { position: "absolute", left: 0, right: 0, bottom: 0, height: 52, background: "var(--gradient-strip)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 56px", color: "#fff", font: "400 14px var(--font-text)" } }, /* @__PURE__ */ import_react26.default.createElement("span", null, n), /* @__PURE__ */ import_react26.default.createElement("span", { style: { width: 28, height: 28, borderRadius: "var(--radius-dot)", background: "#fff", color: "#141414", display: "inline-flex", alignItems: "center", justifyContent: "center", font: "800 14px/1 var(--font-display)", letterSpacing: "-0.04em" } }, "iq"));
  }
  function Head({ eyebrow, title, inverse }) {
    return /* @__PURE__ */ import_react26.default.createElement("div", null, eyebrow && /* @__PURE__ */ import_react26.default.createElement("div", { style: { font: "700 15px var(--font-display)", color: inverse ? "#fff" : P.ink, marginBottom: 8 } }, eyebrow), title && /* @__PURE__ */ import_react26.default.createElement("h2", { style: { margin: 0, font: "300 40px/1.2 var(--font-display)", letterSpacing: "-0.01em", color: inverse ? "#fff" : P.ink } }, title));
  }
  function RegroupSlide({ n, eyebrow, title, confetti = false, dark = false, assetBase = "assets/", children, style }) {
    return /* @__PURE__ */ import_react26.default.createElement("div", { style: { position: "relative", width: 1440, height: 810, overflow: "hidden", background: dark ? "#141414" : "var(--surface-page)", color: dark ? "#fff" : P.body, fontFamily: "var(--font-text)", ...style } }, confetti && /* @__PURE__ */ import_react26.default.createElement(Confetti, null), /* @__PURE__ */ import_react26.default.createElement("div", { style: { position: "absolute", left: 90, right: 90, top: 64 } }, /* @__PURE__ */ import_react26.default.createElement(Head, { eyebrow, title, inverse: dark })), /* @__PURE__ */ import_react26.default.createElement("div", { style: { position: "absolute", left: 90, right: 90, top: title ? eyebrow ? 190 : 160 : 90, bottom: 100 } }, children), /* @__PURE__ */ import_react26.default.createElement(Strip, { n, assetBase }));
  }
  function RegroupCover({ title = "Quarterly Regroup", date, agenda = [], assetBase = "assets/", style }) {
    return /* @__PURE__ */ import_react26.default.createElement("div", { style: { position: "relative", width: 1440, height: 810, overflow: "hidden", ...AURORA, fontFamily: "var(--font-text)", ...style } }, /* @__PURE__ */ import_react26.default.createElement("img", { src: assetBase + "logo-infoquest-white.png", alt: "infoquest", style: { position: "absolute", left: 80, top: 80, height: 32 } }), date && /* @__PURE__ */ import_react26.default.createElement("div", { style: { position: "absolute", right: 80, top: 84, font: "400 18px var(--font-text)" } }, date), /* @__PURE__ */ import_react26.default.createElement("h1", { style: { position: "absolute", left: 80, top: 300, margin: 0, font: "700 88px/1 var(--font-display)", letterSpacing: "-0.035em" } }, title), agenda.length > 0 && /* @__PURE__ */ import_react26.default.createElement("div", { style: { position: "absolute", left: 80, right: 80, bottom: 90 } }, /* @__PURE__ */ import_react26.default.createElement("div", { style: { font: "400 26px var(--font-text)", marginBottom: 28 } }, "Table of contents:"), /* @__PURE__ */ import_react26.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(" + agenda.length + ",1fr)" } }, agenda.map((a, i) => /* @__PURE__ */ import_react26.default.createElement("div", { key: i, style: { borderLeft: "1.5px solid rgba(255,255,255,.85)", padding: "6px 18px 6px 18px", minHeight: 110 } }, /* @__PURE__ */ import_react26.default.createElement("div", { style: { font: "600 26px var(--font-text)", marginBottom: 10 } }, String(i + 1).padStart(2, "0")), /* @__PURE__ */ import_react26.default.createElement("div", { style: { font: "400 22px/1.35 var(--font-text)" } }, a))))));
  }
  function RegroupDivider({ title, kicker, n, photo, ground = "aurora", style }) {
    const bg = photo ? { background: "#070614 url(" + photo + ") center/cover no-repeat", color: "#fff" } : ground === "dark" ? { background: "#141414", color: "#fff" } : AURORA;
    return /* @__PURE__ */ import_react26.default.createElement("div", { style: { position: "relative", width: 1440, height: 810, overflow: "hidden", ...bg, fontFamily: "var(--font-text)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", ...style } }, photo && /* @__PURE__ */ import_react26.default.createElement("div", { style: { position: "absolute", inset: 0, background: "rgba(0,0,0,.35)" } }), kicker && /* @__PURE__ */ import_react26.default.createElement("div", { style: { position: "relative", font: "600 20px var(--font-text)", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 20 } }, kicker), /* @__PURE__ */ import_react26.default.createElement("h1", { style: { position: "relative", margin: 0, font: "700 104px/1.05 var(--font-display)", letterSpacing: "-0.03em", maxWidth: 1200 } }, title), n != null && /* @__PURE__ */ import_react26.default.createElement("div", { style: { position: "absolute", right: 56, bottom: 40, font: "400 14px var(--font-text)" } }, n));
  }
  var initials = (s) => String(s).split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  function Person({ p, size = 84 }) {
    return /* @__PURE__ */ import_react26.default.createElement("div", { style: { width: size + 30, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, textAlign: "center" } }, p.photo ? /* @__PURE__ */ import_react26.default.createElement("img", { src: p.photo, alt: "", style: { width: size, height: size, objectFit: "cover", display: "block" } }) : /* @__PURE__ */ import_react26.default.createElement("div", { style: { width: size, height: size, background: P.lav, color: P.purple, display: "flex", alignItems: "center", justifyContent: "center", font: "700 " + Math.round(size * 0.34) + "px var(--font-display)" } }, initials(p.name)), /* @__PURE__ */ import_react26.default.createElement("div", { style: { font: "500 14px/1.3 var(--font-text)", color: P.ink } }, p.name), p.role && /* @__PURE__ */ import_react26.default.createElement("div", { style: { font: "400 12px/1.3 var(--font-text)", color: P.sec, marginTop: -4 } }, p.role));
  }
  function RegroupPeople({ n, eyebrow, title, groups = [], confetti = false, photoSize = 84, assetBase, style }) {
    return /* @__PURE__ */ import_react26.default.createElement(RegroupSlide, { n, eyebrow, title, confetti, assetBase, style }, /* @__PURE__ */ import_react26.default.createElement("div", { style: { display: "flex", gap: 16, height: "100%", alignItems: "stretch" } }, groups.map((g, i) => /* @__PURE__ */ import_react26.default.createElement("div", { key: i, style: { flex: g.flex || 1, background: P.card, padding: "22px 24px", display: "flex", flexDirection: "column", gap: 14 } }, /* @__PURE__ */ import_react26.default.createElement("div", { style: { font: "600 18px var(--font-text)", color: P.ink, textAlign: g.rows ? "left" : "center" } }, g.title), g.rows ? g.rows.map((r, j) => /* @__PURE__ */ import_react26.default.createElement("div", { key: j }, /* @__PURE__ */ import_react26.default.createElement("div", { style: { font: "600 14px var(--font-text)", color: P.ink, paddingBottom: 8, borderBottom: "1.5px solid " + P.purple, marginBottom: 12 } }, r.title), /* @__PURE__ */ import_react26.default.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: "12px 6px" } }, r.people.map((p, k) => /* @__PURE__ */ import_react26.default.createElement(Person, { key: k, p, size: Math.round(photoSize * 0.75) }))))) : /* @__PURE__ */ import_react26.default.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: "18px 10px", justifyContent: "center" } }, (g.people || []).map((p, k) => /* @__PURE__ */ import_react26.default.createElement(Person, { key: k, p, size: photoSize })))))));
  }
  function RegroupPrompt({ eyebrow = "Ice Breaker", kicker, question, children, image, n, style }) {
    return /* @__PURE__ */ import_react26.default.createElement("div", { style: { position: "relative", width: 1440, height: 810, overflow: "hidden", background: "#141414", color: "#fff", fontFamily: "var(--font-text)", display: "flex", ...style } }, /* @__PURE__ */ import_react26.default.createElement("div", { style: { flex: "0 0 840px", padding: "130px 90px 80px 140px", display: "flex", flexDirection: "column", gap: 22 } }, /* @__PURE__ */ import_react26.default.createElement("div", { style: { font: "300 40px var(--font-display)" } }, eyebrow), kicker && /* @__PURE__ */ import_react26.default.createElement("div", { style: { font: "700 28px/1.3 var(--font-text)", marginTop: 20 } }, kicker), /* @__PURE__ */ import_react26.default.createElement("div", { style: { font: "700 54px/1.08 var(--font-display)", letterSpacing: "-0.03em" } }, question), children && /* @__PURE__ */ import_react26.default.createElement("div", { style: { font: "400 26px/1.35 var(--font-text)", marginTop: 10 } }, children)), /* @__PURE__ */ import_react26.default.createElement("div", { style: { flex: 1, ...image ? { background: "#222 url(" + image + ") center/cover no-repeat" } : AURORA } }), n != null && /* @__PURE__ */ import_react26.default.createElement("div", { style: { position: "absolute", left: 56, bottom: 30, font: "400 14px var(--font-text)" } }, n));
  }
  var ICOL = { arrow: "#141414", check: P.purple, alert: "#5e5e64", x: "var(--signal-low)", up: "var(--signal-high)", star: "#c79a1e" };
  function RegroupReview({ n, eyebrow, title, columns = [], assetBase, style }) {
    return /* @__PURE__ */ import_react26.default.createElement(RegroupSlide, { n, eyebrow, title, assetBase, style }, /* @__PURE__ */ import_react26.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(" + columns.length + ",1fr)", gap: 30, paddingTop: 10 } }, columns.map((c, i) => /* @__PURE__ */ import_react26.default.createElement("div", { key: i, style: { borderLeft: "1.5px solid " + P.rule, paddingLeft: 18 } }, /* @__PURE__ */ import_react26.default.createElement("div", { style: { font: "600 22px var(--font-text)", color: P.ink, marginBottom: 26 } }, c.title), /* @__PURE__ */ import_react26.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 24 } }, c.items.map((it, j) => {
      const bold = typeof it === "object" && it.bold;
      const t = typeof it === "object" ? it.text : it;
      return /* @__PURE__ */ import_react26.default.createElement("div", { key: j, style: { display: "flex", gap: 12, alignItems: "flex-start", font: (bold ? "600" : "400") + " 19px/1.4 var(--font-text)", color: P.ink } }, /* @__PURE__ */ import_react26.default.createElement(RegroupIcon, { name: c.icon || "check", size: 28, color: ICOL[c.icon || "check"] }), /* @__PURE__ */ import_react26.default.createElement("span", null, t));
    }))))));
  }
  function RegroupTheme({ n, intro, items = [], icon, panel = {}, side = "right", tone = "aurora", assetBase = "assets/", style }) {
    const panelBg = tone === "lavender" ? { background: "linear-gradient(160deg,#c9b6ee 0%,#e9e7f2 60%,#f1eff8 100%)", color: "var(--iq-purple-700)" } : tone === "plain" ? { background: "var(--surface-page)", color: P.ink } : AURORA;
    const list = /* @__PURE__ */ import_react26.default.createElement("div", { style: { flex: 1, padding: "0 70px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 } }, intro && /* @__PURE__ */ import_react26.default.createElement("div", { style: { font: "400 26px/1.35 var(--font-text)", color: P.ink, marginBottom: 22 } }, intro), items.map((t, i) => /* @__PURE__ */ import_react26.default.createElement("div", { key: i, style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, background: P.card, padding: "16px 20px", font: "500 19px/1.35 var(--font-text)", color: P.ink } }, /* @__PURE__ */ import_react26.default.createElement("span", null, t), icon && /* @__PURE__ */ import_react26.default.createElement(RegroupIcon, { name: icon, size: 28 }))));
    const big = /* @__PURE__ */ import_react26.default.createElement("div", { style: { flex: "0 0 520px", ...panelBg, padding: "80px 60px", display: "flex", flexDirection: "column", gap: 24 } }, panel.kicker && /* @__PURE__ */ import_react26.default.createElement("div", { style: { font: "700 34px var(--font-display)" } }, panel.kicker), /* @__PURE__ */ import_react26.default.createElement("div", { style: { font: "700 76px/1.02 var(--font-display)", letterSpacing: "-0.03em" } }, panel.title), panel.body && /* @__PURE__ */ import_react26.default.createElement("div", { style: { font: "400 24px/1.35 var(--font-text)", marginTop: "auto" } }, panel.body));
    return /* @__PURE__ */ import_react26.default.createElement("div", { style: { position: "relative", width: 1440, height: 810, overflow: "hidden", background: "var(--surface-page)", fontFamily: "var(--font-text)", display: "flex", ...style } }, side === "left" ? /* @__PURE__ */ import_react26.default.createElement(import_react26.default.Fragment, null, big, list) : /* @__PURE__ */ import_react26.default.createElement(import_react26.default.Fragment, null, list, big), n != null && /* @__PURE__ */ import_react26.default.createElement("div", { style: { position: "absolute", right: side === "left" ? 56 : 580, bottom: 30, font: "400 14px var(--font-text)", color: P.sec } }, n));
  }
  function RegroupGrid({ title, items = [], columns = 5, n, style }) {
    return /* @__PURE__ */ import_react26.default.createElement("div", { style: { position: "relative", width: 1440, height: 810, overflow: "hidden", ...AURORA, fontFamily: "var(--font-text)", ...style } }, /* @__PURE__ */ import_react26.default.createElement("h1", { style: { position: "absolute", left: 100, top: 90, margin: 0, font: "700 84px/1.05 var(--font-display)", letterSpacing: "-0.03em", maxWidth: 800 } }, title), /* @__PURE__ */ import_react26.default.createElement("div", { style: { position: "absolute", left: 100, right: 100, bottom: 110, display: "grid", gridTemplateColumns: "repeat(" + columns + ",1fr)", gap: 6 } }, items.map((t, i) => /* @__PURE__ */ import_react26.default.createElement("div", { key: i, style: { background: "rgba(255,255,255,.14)", height: 120, display: "flex", alignItems: "center", justifyContent: "center", font: "600 20px var(--font-text)" } }, t))), n != null && /* @__PURE__ */ import_react26.default.createElement("div", { style: { position: "absolute", right: 56, bottom: 40, font: "400 14px var(--font-text)" } }, n));
  }
  function RegroupCards({ n, eyebrow, title, items = [], numbered = false, assetBase, style }) {
    return /* @__PURE__ */ import_react26.default.createElement(RegroupSlide, { n, eyebrow, title, assetBase, style }, /* @__PURE__ */ import_react26.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(" + items.length + ",1fr)", gap: 14, alignItems: "stretch", paddingTop: 20 } }, items.map((it, i) => /* @__PURE__ */ import_react26.default.createElement("div", { key: i, style: { background: P.card, padding: "34px 28px", minHeight: it.foot ? 380 : 320, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 14 } }, numbered ? /* @__PURE__ */ import_react26.default.createElement("span", { style: { width: 38, height: 38, borderRadius: "var(--radius-dot)", background: P.purple, color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", font: "700 18px var(--font-text)" } }, i + 1) : /* @__PURE__ */ import_react26.default.createElement(RegroupIcon, { name: it.icon || "up", size: 38 }), it.status && /* @__PURE__ */ import_react26.default.createElement(RegroupStatus, { tone: it.status.tone }, it.status.label), /* @__PURE__ */ import_react26.default.createElement("div", { style: { font: "700 23px/1.3 var(--font-text)", color: P.ink } }, it.title), it.body && /* @__PURE__ */ import_react26.default.createElement("div", { style: { font: "400 18px/1.5 var(--font-text)", color: P.body } }, it.body), it.foot && /* @__PURE__ */ import_react26.default.createElement("div", { style: { marginTop: "auto", paddingTop: 14, borderTop: "1px solid " + P.rule, alignSelf: "stretch", font: "600 15px/1.4 var(--font-text)", color: P.purple } }, it.foot)))));
  }
  function RegroupStats({ n, eyebrow, title, tiles = [], bars, assetBase, style }) {
    const max = bars ? Math.max(...bars.data.map((d) => d.value)) : 1;
    return /* @__PURE__ */ import_react26.default.createElement(RegroupSlide, { n, eyebrow, title, assetBase, style }, /* @__PURE__ */ import_react26.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(" + tiles.length + ",1fr)", gap: 10 } }, tiles.map((t, i) => /* @__PURE__ */ import_react26.default.createElement("div", { key: i, style: { background: t.highlight ? P.purple : "#fff", color: t.highlight ? "#fff" : P.purple, border: "1.5px solid " + (t.highlight ? P.purple : P.rule), padding: "20px 22px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 } }, /* @__PURE__ */ import_react26.default.createElement("div", null, /* @__PURE__ */ import_react26.default.createElement("div", { style: { font: "700 54px/1 var(--font-display)", letterSpacing: "-0.02em" } }, t.value), /* @__PURE__ */ import_react26.default.createElement("div", { style: { font: "500 16px/1.35 var(--font-text)", marginTop: 8, color: t.highlight ? "#fff" : P.sec } }, t.label)), t.trend && /* @__PURE__ */ import_react26.default.createElement(RegroupIcon, { name: t.trend, size: 30, color: t.highlight ? "#fff" : P.purple, glyph: t.highlight ? P.purple : "#fff" })))), bars && /* @__PURE__ */ import_react26.default.createElement("div", { style: { marginTop: 34 } }, bars.title && /* @__PURE__ */ import_react26.default.createElement("div", { style: { font: "600 15px var(--font-text)", letterSpacing: ".06em", textTransform: "uppercase", color: P.ink, marginBottom: 14 } }, bars.title), /* @__PURE__ */ import_react26.default.createElement("div", { style: { display: "flex", alignItems: "flex-end", gap: 14, height: 250, borderBottom: "1.5px solid " + P.ink } }, bars.data.map((d, i) => /* @__PURE__ */ import_react26.default.createElement("div", { key: i, style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%" } }, /* @__PURE__ */ import_react26.default.createElement("div", { style: { font: "600 15px var(--font-text)", color: P.ink, marginBottom: 6 } }, d.value), /* @__PURE__ */ import_react26.default.createElement("div", { style: { width: "100%", height: d.value / max * 200 + "px", background: d.highlight ? "var(--iq-purple-700)" : P.purple } })))), /* @__PURE__ */ import_react26.default.createElement("div", { style: { display: "flex", gap: 14, marginTop: 8 } }, bars.data.map((d, i) => /* @__PURE__ */ import_react26.default.createElement("div", { key: i, style: { flex: 1, textAlign: "center", font: "400 14px var(--font-text)", color: P.sec } }, d.label)))));
  }
  var MEDAL = ["#c79a1e", "#8f8f96", "#a8643a"];
  function RegroupLeaderboard({ n, eyebrow, title, columns = [], unit, assetBase, style }) {
    return /* @__PURE__ */ import_react26.default.createElement(RegroupSlide, { n, eyebrow, title, assetBase, style }, /* @__PURE__ */ import_react26.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(" + columns.length + ",1fr)", gap: 30 } }, columns.map((c, i) => {
      const max = Math.max(...c.rows.map((r) => r.value));
      return /* @__PURE__ */ import_react26.default.createElement("div", { key: i }, /* @__PURE__ */ import_react26.default.createElement("div", { style: { font: "700 14px var(--font-text)", letterSpacing: ".18em", textTransform: "uppercase", color: P.purple, textAlign: "center", marginBottom: 14 } }, c.title), /* @__PURE__ */ import_react26.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8 } }, c.rows.map((r, j) => /* @__PURE__ */ import_react26.default.createElement("div", { key: j, style: { display: "flex", alignItems: "center", gap: 16, background: j === 0 ? "#fdf6e3" : "#fff", borderLeft: "4px solid " + (MEDAL[j] || P.rule), padding: "12px 18px" } }, /* @__PURE__ */ import_react26.default.createElement("span", { style: { width: 34, height: 34, flex: "none", borderRadius: "var(--radius-dot)", background: MEDAL[j] || P.card, color: j < 3 ? "#fff" : P.sec, display: "inline-flex", alignItems: "center", justifyContent: "center", font: "700 15px var(--font-text)" } }, j === 0 ? /* @__PURE__ */ import_react26.default.createElement("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "#fff" }, /* @__PURE__ */ import_react26.default.createElement("path", { d: PATHS.star[0] })) : j + 1), /* @__PURE__ */ import_react26.default.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ import_react26.default.createElement("div", { style: { font: "700 17px var(--font-text)", color: P.ink } }, r.name), r.sub && /* @__PURE__ */ import_react26.default.createElement("div", { style: { font: "400 13px var(--font-text)", color: P.sec } }, r.sub)), /* @__PURE__ */ import_react26.default.createElement("div", { style: { textAlign: "right", minWidth: 120 } }, /* @__PURE__ */ import_react26.default.createElement("div", { style: { font: "700 30px/1 var(--font-display)", color: j === 0 ? MEDAL[0] : P.purple } }, r.value), /* @__PURE__ */ import_react26.default.createElement("div", { style: { height: 4, background: P.lav, marginTop: 6 } }, /* @__PURE__ */ import_react26.default.createElement("div", { style: { width: r.value / max * 100 + "%", height: "100%", background: P.purple } })), (c.unit || unit) && /* @__PURE__ */ import_react26.default.createElement("div", { style: { font: "500 10px var(--font-text)", letterSpacing: ".12em", textTransform: "uppercase", color: P.sec, marginTop: 4 } }, c.unit || unit))))));
    })));
  }
  function RegroupLogoWall({ n, eyebrow, title, groups = [], assetBase, style }) {
    return /* @__PURE__ */ import_react26.default.createElement(RegroupSlide, { n, eyebrow, title, assetBase, style }, /* @__PURE__ */ import_react26.default.createElement("div", { style: { display: "flex", gap: 14, alignItems: "flex-start" } }, groups.map((g, i) => /* @__PURE__ */ import_react26.default.createElement("div", { key: i, style: { flex: g.flex || 1, background: P.card, padding: "26px 26px 32px", minHeight: 300 } }, /* @__PURE__ */ import_react26.default.createElement("div", { style: { font: "600 18px var(--font-text)", color: P.ink, textAlign: "center", marginBottom: 18 } }, g.title), /* @__PURE__ */ import_react26.default.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: "14px 18px", alignItems: "center", justifyContent: "center" } }, g.logos.map((l, j) => l.src ? /* @__PURE__ */ import_react26.default.createElement("img", { key: j, src: l.src, alt: l.name || "", style: { height: l.height || 36, maxWidth: 180, objectFit: "contain" } }) : /* @__PURE__ */ import_react26.default.createElement("span", { key: j, style: { font: "700 20px var(--font-display)", color: P.ink, padding: "6px 10px", background: "#fff" } }, l.name || l)))))));
  }
  function RegroupQA({ n, title = "Q&A and Team Feedback", open = {}, starters = [], assetBase = "assets/", style }) {
    return /* @__PURE__ */ import_react26.default.createElement(RegroupSlide, { n, title, dark: true, assetBase, style }, /* @__PURE__ */ import_react26.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 2.1fr", gap: 14, height: "100%" } }, /* @__PURE__ */ import_react26.default.createElement("div", { style: { background: "#222", padding: "30px 30px", display: "flex", flexDirection: "column", gap: 18 } }, /* @__PURE__ */ import_react26.default.createElement(RegroupIcon, { name: "chat", size: 44 }), /* @__PURE__ */ import_react26.default.createElement("div", { style: { font: "700 26px/1.25 var(--font-text)" } }, open.title || "Open space for questions"), open.body && /* @__PURE__ */ import_react26.default.createElement("div", { style: { font: "400 18px/1.5 var(--font-text)" } }, open.body), open.prompt && /* @__PURE__ */ import_react26.default.createElement("div", { style: { marginTop: "auto", font: "italic 500 18px/1.4 var(--font-text)", textDecoration: "underline", textUnderlineOffset: 4 } }, open.prompt)), /* @__PURE__ */ import_react26.default.createElement("div", { style: { background: "#222", padding: "30px 34px" } }, /* @__PURE__ */ import_react26.default.createElement("div", { style: { font: "700 24px var(--font-text)", marginBottom: 16 } }, "Discussion starters"), /* @__PURE__ */ import_react26.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12 } }, starters.map((s, i) => /* @__PURE__ */ import_react26.default.createElement("div", { key: i, style: { display: "flex", gap: 12, font: "italic 400 16px/1.45 var(--font-text)" } }, /* @__PURE__ */ import_react26.default.createElement("span", { style: { color: "var(--iq-purple-500)", fontStyle: "normal" } }, "\u2192"), /* @__PURE__ */ import_react26.default.createElement("span", null, s)))))));
  }
  return __toCommonJS(entry_exports);
})();
(function(){var ns=window.InfoquestDesignSystem_80b250=window.InfoquestDesignSystem_80b250||{};for(var k in __ds){if(k!=="__esModule")ns[k]=__ds[k];}})();
