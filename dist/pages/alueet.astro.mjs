import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_aS10jzg8.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_C7QanKeK.mjs';
import { $ as $$Cta } from '../chunks/Cta_DPH9KnDk.mjs';
import { A as AREAS, L as LOCATIONS } from '../chunks/config_Bdb_4Kqe.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const ryhmat = Object.keys(AREAS).map((key) => ({
    alue: AREAS[key],
    kaupungit: LOCATIONS.filter((l) => l.area === key)
  }));
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Toiminta-alueet", "description": "Ilmal\xE4mp\xF6pumppujen asennus ja huolto Uudellamaalla, Varsinais-Suomessa ja Tampereen seudulla. Katso oman kaupunkisi sivu." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero"> <div class="container"> <span class="pill">Toiminta-alueet</span> <h1>Asennamme ilmalämpöpumput kolmella alueella</h1> <p>Valitse kaupunkisi – näet alueen lähtöhinnan ja paikalliset tiedot.</p> </div> </section> ${ryhmat.map((r) => renderTemplate`<section class="section"> <div class="container" style="max-width:900px"> <h2 style="text-align:left">${r.alue.label} <span style="color:var(--muted); font-weight:500; font-size:.7em">· alk. ${r.alue.basePriceFrom} €</span></h2> <div class="grid grid--3"> ${r.kaupungit.map((k) => renderTemplate`<a${addAttribute(`/alueet/${k.slug}`, "href")} class="card" style="text-decoration:none"> <h3 style="margin:0">${k.name}</h3> <span class="more">Ilmalämpöpumppu ${k.inessive} →</span> </a>`)} </div> </div> </section>`)}${renderComponent($$result2, "Cta", $$Cta, {})} ` })}`;
}, "/sessions/jolly-bold-dijkstra/mnt/Ilmal\xE4mp\xF6pumppu liiketoiminta/virelampo-sivut/src/pages/alueet/index.astro", void 0);

const $$file = "/sessions/jolly-bold-dijkstra/mnt/Ilmalämpöpumppu liiketoiminta/virelampo-sivut/src/pages/alueet/index.astro";
const $$url = "/alueet";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
