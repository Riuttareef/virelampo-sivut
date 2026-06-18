import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate, r as renderComponent, e as renderSlot, f as renderHead, u as unescapeHTML } from './astro/server_aS10jzg8.mjs';
import 'kleur/colors';
/* empty css                              */
import 'clsx';
import { S as SITE, N as NAV, A as AREAS, L as LOCATIONS } from './config_Bdb_4Kqe.mjs';

const $$Astro$1 = createAstro("https://virelampo.fi");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const path = Astro2.url.pathname;
  const isCurrent = (href) => href === "/" ? path === "/" : path.startsWith(href);
  return renderTemplate`${maybeRenderHead()}<header class="hdr"> <div class="container bar"> <a href="/" class="brand"><img src="/logo.png"${addAttribute(SITE.name, "alt")} class="brand-logo" width="40" height="40"><span class="brand-text"><span class="brand-name">${SITE.name}</span><span class="brand-slogan">Ilmalämpöpumput ammattitaidolla</span></span></a> <nav> ${NAV.map((n) => renderTemplate`<a${addAttribute(n.href, "href")}${addAttribute(isCurrent(n.href) ? "page" : void 0, "aria-current")}>${n.label}</a>`)} </nav> <div class="hdr-cta"> ${SITE.showPhone} <a href="/yhteys" class="btn btn--cta" style="padding:10px 16px">Pyydä tarjous</a> <button class="menu-btn" id="menuBtn" aria-label="Valikko" aria-expanded="false" aria-controls="mobileNav"> <span class="menu-ico"><span></span><span></span><span></span></span> </button> </div> </div> </header> <!-- Full-screen mobile menu (premium overlay) – kept outside <header> so the
     header's backdrop-filter doesn't trap this position:fixed overlay --> <div class="mobile-menu" id="mobileNav"> <div class="mobile-menu__bg" aria-hidden="true"></div> <div class="mobile-menu__top"> <a href="/" class="brand brand--light"><img src="/logo.png"${addAttribute(SITE.name, "alt")} class="brand-logo" width="40" height="40">${SITE.name}</a> <button class="menu-close" id="menuClose" aria-label="Sulje valikko"> <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="5" y1="5" x2="19" y2="19"></line><line x1="19" y1="5" x2="5" y2="19"></line></svg> </button> </div> <nav class="mobile-menu__nav" aria-label="Mobiilivalikko"> ${NAV.map((n, i) => renderTemplate`<a${addAttribute(n.href, "href")}${addAttribute(isCurrent(n.href) ? "is-current" : void 0, "class")}${addAttribute(isCurrent(n.href) ? "page" : void 0, "aria-current")}> <span class="num">${String(i + 1).padStart(2, "0")}</span> <span class="lbl">${n.label}</span> <span class="arw" aria-hidden="true">→</span> </a>`)} </nav> <div class="mobile-menu__foot"> <a href="/yhteys" class="btn btn--cta btn--block">Pyydä tarjous</a> <a${addAttribute(`mailto:${SITE.email}`, "href")} class="mm-contact">${SITE.email}</a> <p class="mm-area">${SITE.areaShort}</p> </div> </div> `;
}, "/sessions/jolly-bold-dijkstra/mnt/Ilmal\xE4mp\xF6pumppu liiketoiminta/virelampo-sivut/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="ftr"> <div class="container"> <div class="cols"> <div> <h4>${SITE.name}</h4> <p>Ilmalämpöpumppujen asennus ja huolto. Tukes-pätevä ja vakuutettu. Kiinteät hinnat ja siisti jälki.</p> <p>${SITE.areaShort}</p> </div> <div> <h4>Palvelut</h4> ${NAV.filter((n) => n.href !== "/").map((n) => renderTemplate`<p style="margin:.2em 0"><a${addAttribute(n.href, "href")}>${n.label}</a></p>`)} <p style="margin:.2em 0"><a href="/tietoa">Tietoa meistä</a></p> </div> <div> <h4>Yhteys</h4> ${SITE.showPhone} <p style="margin:.2em 0"><a${addAttribute(`mailto:${SITE.email}`, "href")}>${SITE.email}</a></p> <p style="margin:.2em 0">${SITE.domain}</p> </div> </div> <p class="small">© ${year} ${SITE.name} · Y-tunnus ${SITE.businessId} · Kylmäalan pätevyys (Tukes) · S2-sähköpätevyys</p> </div> </footer>`;
}, "/sessions/jolly-bold-dijkstra/mnt/Ilmal\xE4mp\xF6pumppu liiketoiminta/virelampo-sivut/src/components/Footer.astro", void 0);

const $$StickyCta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="sticky-cta"> ${SITE.showPhone} <a href="/yhteys" class="btn btn--cta">Pyydä tarjous</a> </div>`;
}, "/sessions/jolly-bold-dijkstra/mnt/Ilmal\xE4mp\xF6pumppu liiketoiminta/virelampo-sivut/src/components/StickyCta.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro("https://virelampo.fi");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const { title, description, schema } = Astro2.props;
  const fullTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} \u2013 ${SITE.tagline}`;
  const desc = description ?? `${SITE.tagline}. Tukes-p\xE4tev\xE4 asentaja, kiinte\xE4t hinnat, kotitalousv\xE4hennys huomioitu.`;
  const ogImageUrl = new URL(SITE.ogImage, `https://${SITE.domain}`).href;
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": `https://${SITE.domain}/#business`,
    name: SITE.name,
    description: `${SITE.tagline}. Tukes-p\xE4tev\xE4 asentaja.`,
    url: `https://${SITE.domain}`,
    email: SITE.email,
    image: ogImageUrl,
    ...{},
    areaServed: [
      ...Object.values(AREAS).map((a) => ({ "@type": "AdministrativeArea", name: a.label })),
      ...LOCATIONS.map((l) => ({ "@type": "City", name: l.name }))
    ],
    knowsAbout: ["Ilmal\xE4mp\xF6pumppu", "Ilmal\xE4mp\xF6pumpun asennus", "Ilmal\xE4mp\xF6pumpun huolto"],
    ...{}
  };
  return renderTemplate(_b || (_b = __template(['<html lang="fi"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"><meta name="theme-color" content="#2F4156"><title>', '</title><meta name="description"', '><link rel="canonical"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:type" content="website"><meta property="og:locale" content="fi_FI"><meta property="og:site_name"', '><meta property="og:url"', '><meta property="og:image"', '><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><link rel="icon" href="/favicon.png" type="image/png"><link rel="apple-touch-icon" href="/favicon.png"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"><script type="application/ld+json">', "<\/script>", "", "</head> <body> ", " <main> ", " </main> ", " ", "  </body> </html>"])), fullTitle, addAttribute(desc, "content"), addAttribute(Astro2.url.href, "href"), addAttribute(fullTitle, "content"), addAttribute(desc, "content"), addAttribute(SITE.name, "content"), addAttribute(Astro2.url.href, "content"), addAttribute(ogImageUrl, "content"), addAttribute(fullTitle, "content"), addAttribute(desc, "content"), addAttribute(ogImageUrl, "content"), unescapeHTML(JSON.stringify(orgSchema)), schema && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(schema))), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "StickyCta", $$StickyCta, {}));
}, "/sessions/jolly-bold-dijkstra/mnt/Ilmal\xE4mp\xF6pumppu liiketoiminta/virelampo-sivut/src/layouts/Base.astro", void 0);

export { $$Base as $ };
