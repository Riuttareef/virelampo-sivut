import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_aS10jzg8.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_CycD1uBN.mjs';
import { S as SITE } from '../chunks/config_Bdb_4Kqe.mjs';
export { renderers } from '../renderers.mjs';

const $$Yhteys = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Pyyd\xE4 tarjous", "description": "Pyyd\xE4 maksuton tarjous ilmal\xE4mp\xF6pumpun asennuksesta." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero"> <div class="container"> <h1>Pyydä maksuton tarjous</h1> <p>Täytä lyhyt lomake, niin otamme sinuun yhteyttä. ${SITE.responsePromise}</p> </div> </section> <section class="section"> <div class="container" style="display:grid; gap:32px; grid-template-columns:1fr;"> <div> <!--
          LOMAKE: Käyttää Formspree-palvelua (toimii Cloudflare Pagesissa, ilmainen taso).
          Vaihda alla olevaan action-osoitteeseen oma Formspree-tunnuksesi (FORM_ID)
          osoitteesta formspree.io. Lähetykset tulevat sähköpostiisi.
        --> <form class="form" method="POST" action="https://formspree.io/f/xnjylbnq"> <input type="hidden" name="_subject" value="Uusi tarjouspyyntö – Virelämpö"> <input type="hidden" name="_next" value="https://virelampo-sivut.pages.dev/kiitos"> <div> <label for="nimi">Nimi *</label> <input id="nimi" name="nimi" required> </div> <div> <label for="puhelin">Puhelin *</label> <input id="puhelin" name="puhelin" type="tel" required> </div> <div> <label for="email">Sähköposti</label> <input id="email" name="email" type="email"> </div> <div> <label for="alue">Paikkakunta / alue *</label> <input id="alue" name="alue" placeholder="esim. kaupunki ja kaupunginosa" required> </div> <div> <label for="palvelu">Mitä tarvitset?</label> <select id="palvelu" name="palvelu"> <option>Asennus</option> <option>Huolto</option> <option>Korjaus / vianetsintä</option> <option>Muu</option> </select> </div> <div> <label for="viesti">Kuvaus tilanteesta</label> <textarea id="viesti" name="viesti" placeholder="Talotyyppi, toivottu sijainti laitteelle, mahdolliset kysymykset..."></textarea> </div> <button type="submit" class="btn btn--cta btn--block">Lähetä tarjouspyyntö</button> <p style="font-size:.85rem; color:var(--muted)">Lähettämällä hyväksyt, että otamme sinuun yhteyttä tarjousta varten.</p> </form> </div> <div class="card"> <h3>Yhteystiedot</h3> ${SITE.showPhone} <p><strong>Sähköposti:</strong> <a${addAttribute(`mailto:${SITE.email}`, "href")}>${SITE.email}</a></p> ${SITE.showPhone} <p><strong>Alue:</strong> ${SITE.areaShort}</p> <p style="color:var(--muted); margin-top:10px">${SITE.responsePromise}</p> </div> </div> </section> ` })}`;
}, "/sessions/jolly-bold-dijkstra/mnt/Ilmal\xE4mp\xF6pumppu liiketoiminta/virelampo-sivut/src/pages/yhteys.astro", void 0);

const $$file = "/sessions/jolly-bold-dijkstra/mnt/Ilmalämpöpumppu liiketoiminta/virelampo-sivut/src/pages/yhteys.astro";
const $$url = "/yhteys";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Yhteys,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
