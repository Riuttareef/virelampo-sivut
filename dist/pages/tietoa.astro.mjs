import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_aS10jzg8.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_CycD1uBN.mjs';
import { $ as $$Cta } from '../chunks/Cta_DPH9KnDk.mjs';
export { renderers } from '../renderers.mjs';

const $$Tietoa = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Tietoa ja p\xE4tevyydet", "description": "Tukes-p\xE4tev\xE4 ilmal\xE4mp\xF6pumppuasentaja. Kylm\xE4alan p\xE4tevyys ja S2-s\xE4hk\xF6p\xE4tevyys." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero"> <div class="container"> <h1>Tietoa ja pätevyydet</h1> <p>Kokeneet, pätevät ja vakuutetut tekijät – työ tehdään kerralla oikein.</p> </div> </section> <section class="section"> <div class="container prose"> <p>Virelämpö on ilmalämpöpumppujen asennukseen ja huoltoon erikoistunut yritys. Taustaltamme löytyy sähkötekniikan koulutusta ja yli kymmenen vuoden kokemus, mukaan lukien rakennusalan työnjohto- ja projektinjohtotehtäviä. Se näkyy laadukkaana asennusjälkenä ja sujuvana, sovitusti etenevänä työnä.</p> <h2 style="text-align:left">Pätevyydet</h2> <ul> <li><strong>Kylmäalan pätevyys (Tukes):</strong> F-kaasulaitteiden asennus ja huolto luvanmukaisesti. Pätevyyden voi tarkistaa Tukesin julkisesta pätevyysrekisteristä.</li> <li><strong>S2-sähköpätevyys:</strong> asennuksen sähkötyöt asianmukaisesti.</li> <li><strong>Vakuutukset:</strong> toiminnan vastuuvakuutus.</li> </ul> <h2 style="text-align:left">Lupauksemme</h2> <ul> <li>Kiinteä hinta etukäteen, ei yllätyksiä</li> <li>Siisti jälki – läpiviennit timanttiporauksella</li> <li>Selkeä opastus ja kotitalousvähennyksen ohjeistus</li> <li>Nopea vastaus yhteydenottoihin</li> </ul> </div> </section> ${renderComponent($$result2, "Cta", $$Cta, {})} ` })}`;
}, "/sessions/jolly-bold-dijkstra/mnt/Ilmal\xE4mp\xF6pumppu liiketoiminta/virelampo-sivut/src/pages/tietoa.astro", void 0);

const $$file = "/sessions/jolly-bold-dijkstra/mnt/Ilmalämpöpumppu liiketoiminta/virelampo-sivut/src/pages/tietoa.astro";
const $$url = "/tietoa";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tietoa,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
