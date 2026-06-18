import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_aS10jzg8.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_C7QanKeK.mjs';
import { $ as $$Cta } from '../../chunks/Cta_DPH9KnDk.mjs';
import { p as priceForLocation, A as AREAS, L as LOCATIONS, S as SITE } from '../../chunks/config_Bdb_4Kqe.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://virelampo.fi");
function getStaticPaths() {
  return LOCATIONS.map((loc) => ({
    params: { kaupunki: loc.slug },
    props: { loc }
  }));
}
const $$kaupunki = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$kaupunki;
  const { loc } = Astro2.props;
  const hinta = priceForLocation(loc);
  const alue = AREAS[loc.area];
  const naapurit = LOCATIONS.filter((l) => l.area === loc.area && l.slug !== loc.slug);
  const schema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: `${SITE.name} \u2013 ilmal\xE4mp\xF6pumput ${loc.inessive}`,
    description: loc.lead,
    url: `https://${SITE.domain}/alueet/${loc.slug}`,
    areaServed: { "@type": "City", name: loc.name },
    email: SITE.email,
    ...{},
    makesOffer: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: hinta,
      itemOffered: { "@type": "Service", name: `Ilmal\xE4mp\xF6pumpun asennus ${loc.inessive}` }
    }
  };
  const title = `Ilmal\xE4mp\xF6pumpun asennus ${loc.inessive}`;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": loc.lead, "schema": schema }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero"> <div class="container"> <span class="pill">${alue.label} · alk. ${hinta} €</span> <h1>Ilmalämpöpumpun asennus ${loc.inessive}</h1> <p>${loc.lead}</p> <div class="actions"> <a href="/yhteys" class="btn btn--cta">Pyydä maksuton tarjous →</a> ${SITE.showPhone} </div> <p class="mini">${SITE.responsePromise}</p> </div> </section> <section class="section"> <div class="container prose"> <p>${loc.body}</p> <h2 style="text-align:left">Miksi valita meidät ${loc.inessive}</h2> <ul> ${loc.highlights.map((h) => renderTemplate`<li>${h}</li>`)} </ul> <p class="note">Perusasennus ${loc.inessive} alkaen <strong>${hinta} €</strong> (alue: ${alue.label}). Kotitalousvähennyksen jälkeen nettohinta on selvästi alhaisempi – katso <a href="/hinnoittelu">hinnoittelu ja lisätyöt</a> sekä <a href="/asennus">mitä asennukseen kuuluu</a>.</p> <h2 style="text-align:left">Tukes-pätevä ja vakuutettu asentaja</h2> <p>Meillä on kylmäalan pätevyys ja sähköalan S2-pätevyys, ja työ on vakuutettu. Saat kiinteän hinnan etukäteen, siistin jäljen ja opastuksen laitteen käyttöön. Pätevyyden voi tarkistaa Tukesin rekisteristä.</p> </div> </section> ${naapurit.length > 0 && renderTemplate`<section class="section section--soft"> <div class="container" style="max-width:900px"> <h2 style="text-align:left">Palvelemme myös lähialueilla</h2> <p style="color:var(--muted); margin-top:0">Toiminta-alue ${alue.label}:</p> <div class="grid grid--3"> ${naapurit.map((n) => renderTemplate`<a${addAttribute(`/alueet/${n.slug}`, "href")} class="card" style="text-decoration:none"> <h3 style="margin:0">${n.name}</h3> <span class="more">Ilmalämpöpumppu ${n.inessive} →</span> </a>`)} </div> </div> </section>`}${renderComponent($$result2, "Cta", $$Cta, { "title": `Pyyd\xE4 tarjous \u2013 ilmal\xE4mp\xF6pumppu ${loc.inessive}` })} ` })}`;
}, "/sessions/jolly-bold-dijkstra/mnt/Ilmal\xE4mp\xF6pumppu liiketoiminta/virelampo-sivut/src/pages/alueet/[kaupunki].astro", void 0);

const $$file = "/sessions/jolly-bold-dijkstra/mnt/Ilmalämpöpumppu liiketoiminta/virelampo-sivut/src/pages/alueet/[kaupunki].astro";
const $$url = "/alueet/[kaupunki]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$kaupunki,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
