/* @ds-bundle: {"format":4,"namespace":"EastSideDesignSystem_ee2aed","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"SectionDivider","sourcePath":"components/core/SectionDivider.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"MenuItemRow","sourcePath":"components/menu/MenuItemRow.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavHeader","sourcePath":"components/navigation/NavHeader.jsx"},{"name":"App","sourcePath":"ui_kits/website/App.jsx"}],"sourceHashes":{"components/core/Button.jsx":"ef656e24735a","components/core/Card.jsx":"110d7bb50f93","components/core/SectionDivider.jsx":"170b5e269c17","components/core/Tag.jsx":"1b114fb0aa3b","components/forms/Input.jsx":"28357686c408","components/forms/Select.jsx":"2bb20ad6bb72","components/menu/MenuItemRow.jsx":"ac8525e173af","components/navigation/Footer.jsx":"201ad7e9f358","components/navigation/NavHeader.jsx":"70a164b7becc","ui_kits/website/App.jsx":"696998320fe5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EastSideDesignSystem_ee2aed = window.EastSideDesignSystem_ee2aed || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function Button({
  children,
  variant = 'primary',
  disabled,
  onClick
}) {
  const isPrimary = variant === 'primary';
  const bg = isPrimary ? 'var(--es-midnight)' : 'transparent';
  const color = isPrimary ? 'var(--es-ivory)' : 'var(--es-midnight)';
  const border = isPrimary ? '1px solid var(--es-midnight)' : '1px solid var(--es-midnight)';
  return React.createElement('button', {
    onClick,
    disabled,
    style: {
      minHeight: '3rem',
      paddingInline: 'var(--es-space-6)',
      background: bg,
      color,
      border,
      borderRadius: 'var(--es-radius-sm)',
      fontFamily: 'var(--es-font-ui)',
      fontWeight: 'var(--es-weight-semibold)',
      fontSize: 'var(--es-text-sm)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: `transform var(--es-duration-fast) var(--es-ease), background var(--es-duration-fast) var(--es-ease)`
    },
    onMouseOver: e => {
      if (disabled) return;
      e.currentTarget.style.transform = 'translateY(-1px)';
      e.currentTarget.style.background = 'var(--es-carbon)';
    },
    onMouseOut: e => {
      if (disabled) return;
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.background = bg;
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  eyebrow,
  title,
  description,
  image,
  dark = false
}) {
  const bg = dark ? 'var(--es-carbon)' : 'var(--es-surface)';
  const fg = dark ? 'var(--es-ivory)' : 'var(--es-text)';
  const sub = dark ? 'var(--es-smoke)' : 'var(--es-text-muted)';
  return React.createElement('div', {
    style: {
      background: bg,
      color: fg,
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 'var(--es-radius-md)'
    }
  }, React.createElement('div', {
    style: {
      aspectRatio: '4/3',
      background: dark ? '#2a2a2c' : '#f0ebe3',
      backgroundImage: image ? `url(${image})` : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--es-text-muted)',
      fontFamily: 'var(--es-font-ui)',
      fontSize: 'var(--es-text-xs)',
      textTransform: 'uppercase',
      letterSpacing: '0.06em'
    }
  }, !image && 'Area Foto'), React.createElement('div', {
    style: {
      padding: '20px'
    }
  }, eyebrow && React.createElement('span', {
    style: {
      display: 'block',
      marginBottom: '8px',
      fontSize: 'var(--es-text-xs)',
      fontWeight: 'var(--es-weight-medium)',
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      color: dark ? 'var(--es-smoke)' : 'var(--es-text-muted)'
    }
  }, eyebrow), React.createElement('h3', {
    style: {
      fontSize: 'var(--es-text-xl)',
      fontFamily: 'var(--es-font-editorial)',
      fontWeight: 'var(--es-weight-medium)',
      lineHeight: 0.92,
      letterSpacing: '-0.035em',
      margin: '0 0 8px'
    }
  }, title), description && React.createElement('p', {
    style: {
      margin: 0,
      fontFamily: 'var(--es-font-ui)',
      fontSize: 'var(--es-text-md)',
      color: sub,
      lineHeight: 1.6
    }
  }, description)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionDivider.jsx
try { (() => {
function SectionDivider({
  dark = false
}) {
  const color = dark ? 'var(--es-bone)' : 'var(--es-ink)';
  const widths = ['100%', '88%', '76%'];
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
      color
    }
  }, widths.map((w, i) => React.createElement('span', {
    key: i,
    style: {
      display: 'block',
      height: '2px',
      width: w,
      background: 'currentColor'
    }
  })));
}
Object.assign(__ds_scope, { SectionDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionDivider.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  tone = 'default'
}) {
  const styles = {
    default: {
      background: 'transparent',
      color: 'var(--es-midnight)',
      border: '1px solid var(--es-midnight)'
    },
    ember: {
      background: 'var(--es-ember)',
      color: 'var(--es-ivory)',
      border: 'none'
    },
    night: {
      background: 'var(--es-night-blue)',
      color: 'var(--es-ivory)',
      border: 'none'
    }
  };
  const s = styles[tone] || styles.default;
  return React.createElement('span', {
    style: {
      display: 'inline-block',
      padding: '4px 10px',
      fontFamily: 'var(--es-font-ui)',
      fontSize: 'var(--es-text-xs)',
      fontWeight: 'var(--es-weight-medium)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      borderRadius: 'var(--es-radius-sm)',
      ...s
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange
}) {
  return React.createElement('label', {
    style: {
      display: 'block',
      fontFamily: 'var(--es-font-ui)'
    }
  }, label && React.createElement('span', {
    style: {
      display: 'block',
      fontFamily: 'var(--es-font-ui)',
      fontSize: 'var(--es-text-xs)',
      fontWeight: 'var(--es-weight-medium)',
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      color: 'var(--es-text-muted)',
      marginBottom: '8px'
    }
  }, label), React.createElement('input', {
    type,
    placeholder,
    value,
    onChange,
    style: {
      width: '100%',
      padding: '8px 0',
      background: 'transparent',
      color: 'var(--es-text)',
      border: 'none',
      borderBottom: '1px solid var(--es-border)',
      borderRadius: 0,
      fontFamily: 'var(--es-font-ui)',
      fontSize: 'var(--es-text-md)',
      outline: 'none'
    }
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange
}) {
  return React.createElement('label', {
    style: {
      display: 'block',
      fontFamily: 'var(--es-font-ui)'
    }
  }, label && React.createElement('span', {
    style: {
      display: 'block',
      fontFamily: 'var(--es-font-ui)',
      fontSize: 'var(--es-text-xs)',
      fontWeight: 'var(--es-weight-medium)',
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      color: 'var(--es-text-muted)',
      marginBottom: '8px'
    }
  }, label), React.createElement('select', {
    value,
    onChange,
    style: {
      width: '100%',
      padding: '8px 0',
      background: 'transparent',
      color: 'var(--es-text)',
      border: 'none',
      borderBottom: '1px solid var(--es-border)',
      borderRadius: 0,
      fontFamily: 'var(--es-font-ui)',
      fontSize: 'var(--es-text-md)',
      outline: 'none'
    }
  }, options.map((o, i) => React.createElement('option', {
    key: i,
    value: o
  }, o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/menu/MenuItemRow.jsx
try { (() => {
function MenuItemRow({
  name,
  description,
  price,
  tags = [],
  dark = false
}) {
  const fg = dark ? 'var(--es-ivory)' : 'var(--es-text)';
  const sub = dark ? 'var(--es-smoke)' : 'var(--es-text-muted)';
  const border = dark ? '1px solid rgba(244,240,232,.2)' : '1px solid var(--es-border)';
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      padding: '18px 0',
      borderBottom: border,
      color: fg
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: '16px'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--es-font-editorial)',
      fontSize: '1.25rem',
      fontWeight: 'var(--es-weight-medium)',
      lineHeight: 0.92,
      letterSpacing: '-0.035em'
    }
  }, name), React.createElement('span', {
    style: {
      fontFamily: 'var(--es-font-ui)',
      fontWeight: 'var(--es-weight-semibold)',
      whiteSpace: 'nowrap',
      fontVariantNumeric: 'tabular-nums'
    }
  }, price)), description && React.createElement('p', {
    style: {
      margin: 0,
      fontFamily: 'var(--es-font-ui)',
      fontSize: 'var(--es-text-md)',
      lineHeight: 1.6,
      color: sub
    }
  }, description), tags.length > 0 && React.createElement('div', {
    style: {
      display: 'flex',
      gap: '8px',
      marginTop: '2px'
    }
  }, tags.map((t, i) => React.createElement('span', {
    key: i,
    style: {
      fontFamily: 'var(--es-font-ui)',
      fontSize: 'var(--es-text-xs)',
      fontWeight: 'var(--es-weight-medium)',
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      border: '1px solid ' + fg,
      padding: '2px 8px'
    }
  }, t))));
}
Object.assign(__ds_scope, { MenuItemRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menu/MenuItemRow.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function Footer({
  address = 'Sesto San Giovanni · MI'
}) {
  return React.createElement('footer', {
    style: {
      background: 'var(--es-midnight)',
      color: 'var(--es-ivory)',
      padding: '48px 40px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }
  }, React.createElement('img', {
    src: '../assets/logo/east-side-horizontal-white.svg',
    style: {
      height: '28px',
      maxWidth: '200px'
    }
  }), React.createElement('div', {
    style: {
      display: 'flex',
      gap: '48px',
      flexWrap: 'wrap',
      fontFamily: 'var(--es-font-ui)',
      fontSize: 'var(--es-text-sm)',
      color: 'var(--es-smoke)'
    }
  }, React.createElement('span', null, address), React.createElement('span', null, 'Mar–Gio 18:30–00:00'), React.createElement('span', null, 'Ven–Sab 18:30–01:00'), React.createElement('span', null, 'Dom 12:30–15:00 · 18:30–00:00')));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavHeader.jsx
try { (() => {
function NavHeader({
  links = ['Menù', 'Prenota', 'Storia', 'Contatti'],
  dark = true
}) {
  const bg = dark ? 'var(--es-midnight)' : 'var(--es-ivory)';
  const fg = dark ? 'var(--es-ivory)' : 'var(--es-midnight)';
  return React.createElement('header', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 40px',
      background: bg,
      color: fg
    }
  }, React.createElement('img', {
    src: dark ? '../assets/logo/east-side-horizontal-white.svg' : '../assets/logo/east-side-horizontal-black.svg',
    style: {
      height: '32px',
      marginRight: '40px'
    }
  }), React.createElement('nav', {
    style: {
      display: 'flex',
      gap: '32px'
    }
  }, links.map((l, i) => React.createElement('a', {
    key: i,
    href: '#',
    style: {
      color: fg,
      textDecoration: 'none',
      fontFamily: 'var(--es-font-ui)',
      fontSize: 'var(--es-text-sm)',
      fontWeight: 'var(--es-weight-medium)',
      textTransform: 'uppercase',
      letterSpacing: '0.06em'
    }
  }, l))));
}
Object.assign(__ds_scope, { NavHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Tag,
  Card,
  SectionDivider,
  MenuItemRow,
  NavHeader,
  Footer,
  Input,
  Select
} = window.EastSideDesignSystem_ee2aed;
function Home({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(NavHeader, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '640px',
      background: '#111 url(../../assets/web/hero_1920x1080.png) center/cover',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,.35)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      textAlign: 'center',
      color: '#F4F1EA'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/logo-primario-neg.svg",
    style: {
      height: '110px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '28px',
      display: 'flex',
      gap: '16px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "green",
    onClick: () => go('menu')
  }, "Vedi il men\xF9"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => go('reserve'),
    style: {
      borderColor: '#F4F1EA',
      color: '#F4F1EA'
    }
  }, "Prenota")))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1040px',
      margin: '0 auto',
      padding: '96px 40px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "es-eyebrow"
  }, "Il locale"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: '44px',
      margin: '16px 0 24px'
    }
  }, "Taglio, provenienza, cottura."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: '18px',
      lineHeight: 1.7,
      maxWidth: '640px',
      color: 'var(--es-anthracite)'
    }
  }, "A Sesto San Giovanni dal 2015. Griglia a vista, carni frollate in casa, birre alla spina. Diretto, senza fronzoli \u2014 si viene per la carne, non per l'esperienza.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--es-ink)',
      padding: '96px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1040px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '32px'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    dark: true,
    eyebrow: "Eventi",
    title: "Live Music",
    description: "Venerd\xEC, dalle 21:00, ingresso libero."
  }), /*#__PURE__*/React.createElement(Card, {
    dark: true,
    eyebrow: "Novit\xE0",
    title: "Birre di stagione",
    description: "Tre nuove spine ogni trimestre."
  }), /*#__PURE__*/React.createElement(Card, {
    dark: true,
    eyebrow: "Men\xF9",
    title: "Tagliata Irlandese",
    description: "Manzo frollato 30 giorni, sale in scaglie."
  }))), /*#__PURE__*/React.createElement(Footer, null));
}
function MenuPage({
  go
}) {
  const [cat, setCat] = React.useState('carni');
  const cats = {
    antipasti: 'Antipasti',
    carni: 'Carni alla Griglia',
    burger: 'Burger',
    dolci: 'Dolci'
  };
  const items = {
    antipasti: [{
      name: 'Tagliere East Side',
      description: 'Salumi, formaggi, mostarda di casa.',
      price: '€ 18,00'
    }, {
      name: 'Alette Piccanti',
      description: 'Marinatura 24h, salsa blue cheese.',
      price: '€ 12,00',
      tags: ['Piccante']
    }],
    carni: [{
      name: 'Tagliata di Manzo Irlandese',
      description: 'Cottura al sangue, sale in scaglie.',
      price: '€ 24,00',
      tags: ['Senza glutine']
    }, {
      name: 'Costata 600g',
      description: 'Frollatura 30 giorni, da condividere.',
      price: '€ 42,00',
      tags: ['Da condividere']
    }, {
      name: 'Filetto al Pepe Verde',
      description: 'Salsa al pepe verde, patate al forno.',
      price: '€ 27,00'
    }],
    burger: [{
      name: 'Burger East Side',
      description: '220g, cheddar, bacon, salsa BBQ.',
      price: '€ 16,00'
    }, {
      name: 'Burger Veggie',
      description: 'Cottura alla griglia, verdure di stagione.',
      price: '€ 14,00',
      tags: ['Vegetariano']
    }],
    dolci: [{
      name: 'Cheesecake al Caramello Salato',
      description: '',
      price: '€ 8,00'
    }, {
      name: 'Tiramisù della Casa',
      description: '',
      price: '€ 7,00'
    }]
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(NavHeader, null), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '260px',
      background: '#111 url(../../assets/web/menu-header_1600x600.png) center/cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '760px',
      margin: '0 auto',
      padding: '64px 40px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      textAlign: 'center',
      fontSize: '40px',
      marginBottom: '32px'
    }
  }, "Men\xF9"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px',
      justifyContent: 'center',
      marginBottom: '40px',
      flexWrap: 'wrap'
    }
  }, Object.entries(cats).map(([k, v]) => /*#__PURE__*/React.createElement("span", {
    key: k,
    onClick: () => setCat(k),
    style: {
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      fontSize: '13px',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      padding: '10px 18px',
      border: '2px solid var(--es-ink)',
      background: cat === k ? 'var(--es-ink)' : 'transparent',
      color: cat === k ? 'var(--es-bone)' : 'var(--es-ink)'
    }
  }, v))), items[cat].map((it, i) => /*#__PURE__*/React.createElement(MenuItemRow, _extends({
    key: i
  }, it))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '48px',
      width: '220px',
      marginInline: 'auto'
    }
  }, /*#__PURE__*/React.createElement(SectionDivider, null))), /*#__PURE__*/React.createElement(Footer, null));
}
function Reserve({
  go
}) {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(NavHeader, null), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '480px',
      margin: '0 auto',
      padding: '96px 40px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "es-eyebrow"
  }, "Prenotazione"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: '36px',
      margin: '16px 0 40px'
    }
  }, "Prenota un tavolo"), sent ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: '18px'
    }
  }, "Richiesta inviata. Ti contattiamo per confermare.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '28px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nome",
    placeholder: "Il tuo nome"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Telefono",
    type: "tel",
    placeholder: "+39"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Persone",
    options: ['2', '3', '4', '5', '6+']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Orario",
    options: ['19:00', '19:30', '20:00', '20:30', '21:00']
  }), /*#__PURE__*/React.createElement(Button, {
    onClick: () => setSent(true)
  }, "Invia richiesta"))), /*#__PURE__*/React.createElement(Footer, null));
}
function App() {
  const [page, setPage] = React.useState('home');
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      padding: '10px 16px',
      background: '#ddd',
      fontFamily: 'var(--font-text)',
      fontSize: '13px'
    }
  }, ['home', 'menu', 'reserve'].map(p => /*#__PURE__*/React.createElement("span", {
    key: p,
    onClick: () => setPage(p),
    style: {
      cursor: 'pointer',
      textDecoration: page === p ? 'underline' : 'none'
    }
  }, p))), page === 'home' && /*#__PURE__*/React.createElement(Home, {
    go: setPage
  }), page === 'menu' && /*#__PURE__*/React.createElement(MenuPage, {
    go: setPage
  }), page === 'reserve' && /*#__PURE__*/React.createElement(Reserve, {
    go: setPage
  }));
}
window.App = App;
Object.assign(__ds_scope, { App });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.SectionDivider = __ds_scope.SectionDivider;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.MenuItemRow = __ds_scope.MenuItemRow;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavHeader = __ds_scope.NavHeader;

__ds_ns.App = __ds_scope.App;

})();
