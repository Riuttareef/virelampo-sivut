import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute, u as unescapeHTML } from '../chunks/astro/server_aS10jzg8.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_C7QanKeK.mjs';
import { $ as $$Cta } from '../chunks/Cta_DPH9KnDk.mjs';
import { S as SITE } from '../chunks/config_Bdb_4Kqe.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const articles = [
    {
      slug: "lampopumpun-valinta",
      title: "L\xE4mmitys, j\xE4\xE4hdytys vai molemmat? N\xE4in valitset ilmal\xE4mp\xF6pumpun",
      lead: "K\xE4ytt\xF6tarkoitus ratkaisee laitevalinnan. Opas omakoti- ja loma-asuntojen pumpun valintaan \u2013 mihin kannattaa kiinnitt\xE4\xE4 huomiota.",
      tag: "Omakoti & loma-asunto",
      icon: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v9.5h13V10"/><path d="M10 19.5v-5h4v5"/>',
      live: true
    },
    {
      slug: "energiansaasto-laskelmat",
      title: "Paljonko ilmal\xE4mp\xF6pumppu s\xE4\xE4st\xE4\xE4? Vinkit ja laskelmat l\xE4mmityskaudelle",
      lead: "Miten s\xE4\xE4st\xF6 syntyy, mik\xE4 on realistinen hy\xF6tysuhde Suomessa, ja esimerkkilaskelma suoras\xE4hk\xF6l\xE4mmitykseen verrattuna.",
      tag: "Energians\xE4\xE4st\xF6",
      icon: '<circle cx="12" cy="12" r="8.5"/><path d="M15 9a3.8 3.8 0 1 0 0 6"/><line x1="7.5" y1="11" x2="13" y2="11"/><line x1="7.5" y1="13.4" x2="12" y2="13.4"/>',
      live: true
    },
    {
      slug: "kylmaaineet-r410a-r32-r290",
      title: "Kylm\xE4aineet R410A, R32 ja R290 \u2013 mik\xE4 muuttui ja mit\xE4 se tarkoittaa sinulle",
      lead: "Miksi kylm\xE4aineet vaihtuvat, mit\xE4 se merkitsee kuluttajalle ja ilmastolle, ja miten ne eroavat teholtaan pakkasilla.",
      tag: "Tekniikka",
      icon: '<path d="M12 3.5s5.5 6 5.5 10.5a5.5 5.5 0 0 1-11 0C6.5 9.5 12 3.5 12 3.5z"/>',
      live: true
    },
    {
      slug: "miksi-vaihtaa-vanha-ilmalampopumppu",
      title: "Miksi 10 vuotta vanha ilmal\xE4mp\xF6pumppu kannattaa vaihtaa",
      lead: "Uusi R290-laite tuottaa enemm\xE4n l\xE4mp\xF6\xE4 v\xE4hemm\xE4ll\xE4 s\xE4hk\xF6ll\xE4 ja jaksaa pakkasellakin. Merkit vaihdolle ja esimerkkilaskelmat s\xE4\xE4st\xF6ist\xE4.",
      tag: "Koneen vaihto",
      icon: '<path d="M17 4v13"/><path d="M21 13.5 17 17.5 13 13.5"/><path d="M7 20V7"/><path d="M3 10.5 7 6.5 11 10.5"/>',
      live: true
    },
    {
      slug: "ilmalampopumppu-kerrostaloon",
      title: "Ilmal\xE4mp\xF6pumppu kerrostaloon \u2013 j\xE4\xE4hdytys, luvat ja taloyhti\xF6n vaatimukset",
      lead: "Kerrostalossa sallitaan vain j\xE4\xE4hdytys \u2013 ei l\xE4mmityst\xE4. K\xE4ymme l\xE4pi luvat, taloyhti\xF6n vaatimukset ja asennuksen erityispiirteet.",
      tag: "Kerrostalo",
      icon: '<rect x="5" y="3" width="14" height="18" rx="1.2"/><line x1="9" y1="7" x2="9" y2="7"/><line x1="15" y1="7" x2="15" y2="7"/><line x1="9" y1="11" x2="9" y2="11"/><line x1="15" y1="11" x2="15" y2="11"/><line x1="9" y1="15" x2="9" y2="15"/><line x1="15" y1="15" x2="15" y2="15"/><path d="M11 21v-3h2v3"/>',
      live: true
    }
  ];
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Hyv\xE4 tiet\xE4\xE4 \u2013 ilmal\xE4mp\xF6pumppuopas",
    description: "Asiantuntija-artikkelit ilmal\xE4mp\xF6pumpun valinnasta, energians\xE4\xE4st\xF6st\xE4, kylm\xE4aineista ja kerrostaloasennuksesta.",
    url: `https://${SITE.domain}/hyva-tietaa`
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Hyv\xE4 tiet\xE4\xE4", "description": "Ilmal\xE4mp\xF6pumppuopas: laitteen valinta, energians\xE4\xE4st\xF6 ja laskelmat, kylm\xE4aineet sek\xE4 kerrostaloasennus. Selke\xE4\xE4 tietoa asiantuntijalta.", "schema": schema, "data-astro-cid-jlhwjrfy": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero" data-astro-cid-jlhwjrfy> <div class="container" data-astro-cid-jlhwjrfy> <span class="pill" data-astro-cid-jlhwjrfy>Ilmalämpöpumppuopas</span> <h1 data-astro-cid-jlhwjrfy>Hyvä tietää</h1> <p data-astro-cid-jlhwjrfy>Selkeää, asiantuntijan kirjoittamaa tietoa ilmalämpöpumpun valinnasta, säästöistä ja asennuksesta – ilman myyntipuhetta.</p> </div> </section> <section class="section" data-astro-cid-jlhwjrfy> <div class="container" data-astro-cid-jlhwjrfy> <div class="grid grid--2" data-astro-cid-jlhwjrfy> ${articles.map((a) => a.live ? renderTemplate`<a${addAttribute(`/hyva-tietaa/${a.slug}`, "href")} class="card artcard" data-astro-cid-jlhwjrfy> <div class="artcard__head" data-astro-cid-jlhwjrfy> <div class="iconchip" data-astro-cid-jlhwjrfy><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-jlhwjrfy>${unescapeHTML(a.icon)}</svg></div> <span class="artcard__tag" data-astro-cid-jlhwjrfy>${a.tag}</span> </div> <h3 data-astro-cid-jlhwjrfy>${a.title}</h3> <p data-astro-cid-jlhwjrfy>${a.lead}</p> <span class="more" data-astro-cid-jlhwjrfy>Lue artikkeli</span> </a>` : renderTemplate`<div class="card artcard artcard--soon" data-astro-cid-jlhwjrfy> <div class="artcard__head" data-astro-cid-jlhwjrfy> <div class="iconchip" data-astro-cid-jlhwjrfy><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-jlhwjrfy>${unescapeHTML(a.icon)}</svg></div> <span class="artcard__tag" data-astro-cid-jlhwjrfy>${a.tag}</span> </div> <h3 data-astro-cid-jlhwjrfy>${a.title}</h3> <p data-astro-cid-jlhwjrfy>${a.lead}</p> <span class="artcard__soon" data-astro-cid-jlhwjrfy>Tulossa pian</span> </div>`)} </div> </div> </section> ${renderComponent($$result2, "Cta", $$Cta, { "title": "Kysy lis\xE4\xE4 \u2013 autamme mielell\xE4mme", "data-astro-cid-jlhwjrfy": true })} ` })} `;
}, "/sessions/jolly-bold-dijkstra/mnt/Ilmal\xE4mp\xF6pumppu liiketoiminta/virelampo-sivut/src/pages/hyva-tietaa/index.astro", void 0);

const $$file = "/sessions/jolly-bold-dijkstra/mnt/Ilmalämpöpumppu liiketoiminta/virelampo-sivut/src/pages/hyva-tietaa/index.astro";
const $$url = "/hyva-tietaa";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
