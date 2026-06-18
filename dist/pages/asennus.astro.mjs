import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_aS10jzg8.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_Ch2ieEKu.mjs';
import { $ as $$Cta } from '../chunks/Cta_DPH9KnDk.mjs';
import { S as SITE } from '../chunks/config_Bdb_4Kqe.mjs';
export { renderers } from '../renderers.mjs';

const $$Asennus = createComponent(($$result, $$props, $$slots) => {
  const includes = [
    "Enint\xE4\xE4n 4 m kylm\xE4aineputkea",
    "Sein\xE4l\xE4pivienti puusein\xE4\xE4n",
    "Ulkoyksik\xF6n kiinnitys ja t\xE4rin\xE4vaimennus",
    "Kondenssiveden ohjaus",
    "S\xE4hk\xF6istys (S2-p\xE4tevyys)",
    "K\xE4yt\xF6n ja huollon opastus"
  ];
  const faq = [
    { q: "Kauanko asennus kest\xE4\xE4?", a: "Tavallinen asennus valmistuu muutamassa tunnissa, useimmiten saman p\xE4iv\xE4n aikana." },
    { q: "Saanko kotitalousv\xE4hennyksen?", a: "Kyll\xE4, asennusty\xF6n osuudesta. Erittelemme ty\xF6n osuuden laskuun valmiiksi v\xE4hennyst\xE4 varten." },
    { q: "Sotkeeko poraus sein\xE4t?", a: "Ei. K\xE4yt\xE4mme laadukasta timanttiporausta, jolla l\xE4pivienti tehd\xE4\xE4n nopeasti ja p\xF6lytt\xF6m\xE4sti." },
    { q: "Mist\xE4 laite hankitaan?", a: "Voit ostaa laitteen itse tai yhteisty\xF6kumppanimme kautta \u2013 autamme tarvittaessa oikean mallin valinnassa." },
    { q: "Sopiiko ilmal\xE4mp\xF6pumppu kerrostaloon?", a: "Kyll\xE4, j\xE4\xE4hdytysk\xE4ytt\xF6\xF6n. Kerrostaloasunnoissa tarvitaan taloyhti\xF6n lupa, ja yleens\xE4 sallitaan vain j\xE4\xE4hdytys \u2013 ei l\xE4mmitysk\xE4ytt\xF6\xE4. Autamme lupa-asiassa ja oikean laitteen valinnassa." }
  ];
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Ilmal\xE4mp\xF6pumpun asennus",
      provider: { "@type": "HVACBusiness", name: SITE.name, "@id": `https://${SITE.domain}/#business` },
      areaServed: SITE.areaShort,
      description: "Ilmal\xE4mp\xF6pumpun ammattiasennus kiinte\xE4ll\xE4 hinnalla, Tukes-p\xE4tev\xE4 asentaja.",
      offers: { "@type": "Offer", priceCurrency: "EUR", price: SITE.basePriceFrom }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a }
      }))
    }
  ];
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Ilmal\xE4mp\xF6pumpun asennus", "description": "Ilmal\xE4mp\xF6pumpun ammattiasennus kiinte\xE4ll\xE4 hinnalla. Siisti timanttiporaus, kotitalousv\xE4hennys huomioitu.", "schema": schema }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero"> <div class="container"> <h1>Ilmalämpöpumpun asennus ammattitaidolla</h1> <p>Ammattitaitoinen asennus kiinteällä hinnalla. Saat siistin jäljen, oikean sijoituksen ja opastuksen käyttöön.</p> <div class="actions"> <a href="/yhteys" class="btn btn--cta">Pyydä tarjous asennuksesta</a> ${SITE.showPhone} </div> </div> </section> <section class="section"> <div class="container prose"> <p>Asennamme ilmalämpöpumput jäähdytykseen koteihin ja asuntoihin – ja lämmitykseen siellä missä se on sallittu. Olemme Tukes-päteviä, ja meillä on sähköalan S2-pätevyys sekä vahva kokemus pumppujen asennuksesta. Saat kiinteän hinnan etukäteen – ei yllätyslaskuja.</p> <h2 style="text-align:left">Perusasennukseen kuuluu</h2> <ul> ${includes.map((i) => renderTemplate`<li>${i}</li>`)} </ul> <p class="note">Perusasennus alkaen <strong>${SITE.basePriceFrom} €</strong>. Kotitalousvähennyksen jälkeen nettohinta on selvästi alhaisempi – katso <a href="/hinnoittelu">hinnoittelu</a>.</p> <h2 style="text-align:left">Miksi valita meidät</h2> <ul> <li>Tukes-pätevyys ja vakuutus – pätevyyden voi tarkistaa rekisteristä</li> <li>Siisti asennustyö, joka ei sotke kotia</li> <li>Selkeä hinta etukäteen ja kotitalousvähennyksen ohjeistus</li> <li>Paikallinen, nopea ja joustava palvelu</li> </ul> <h2 style="text-align:left">Usein kysyttyä</h2> ${faq.map((f) => renderTemplate`<div style="margin-bottom:14px"> <h3 style="margin-bottom:.2em">${f.q}</h3> <p style="color:var(--muted)">${f.a}</p> </div>`)} </div> </section> ${renderComponent($$result2, "Cta", $$Cta, { "title": "Pyyd\xE4 tarjous asennuksesta" })} ` })}`;
}, "/sessions/jolly-bold-dijkstra/mnt/Ilmal\xE4mp\xF6pumppu liiketoiminta/virelampo-sivut/src/pages/asennus.astro", void 0);

const $$file = "/sessions/jolly-bold-dijkstra/mnt/Ilmalämpöpumppu liiketoiminta/virelampo-sivut/src/pages/asennus.astro";
const $$url = "/asennus";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Asennus,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
