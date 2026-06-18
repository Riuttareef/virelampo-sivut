import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_aS10jzg8.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_C7QanKeK.mjs';
import { $ as $$Cta } from '../chunks/Cta_DPH9KnDk.mjs';
import { S as SITE, P as PERUSASENNUS_SISALTYY, a as LISATYOT, A as AREAS } from '../chunks/config_Bdb_4Kqe.mjs';
export { renderers } from '../renderers.mjs';

const $$Hinnoittelu = createComponent(($$result, $$props, $$slots) => {
  const sisaltyy = PERUSASENNUS_SISALTYY;
  const lisatyot = LISATYOT;
  const alueet = Object.values(AREAS);
  const huomioi = [
    ["Kartoitus ja sijoittelu", "Varmistetaan yksik\xF6iden paikat, putkireitit ja l\xE4piviennin kohta ennen asennusta."],
    ["S\xE4hk\xF6piste", "Perusasennus vaatii maadoitetun pistorasian max 2 m et\xE4isyydelt\xE4. Kiinte\xE4 kytkent\xE4 turvakytkimelle sovitaan erikseen."],
    ["Taloyhti\xF6n lupa", "Rivi- ja kerrostaloissa tarvitaan usein taloyhti\xF6n lupa. Hanki se ennen tilausta."],
    ["Kondenssivesi", "Kondenssivesi johdetaan hallitusti ulos. Viem\xE4riliit\xE4nt\xE4 tai pidempi poisto lis\xE4ty\xF6n\xE4."]
  ];
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Hinnoittelu ja kotitalousv\xE4hennys", "description": "L\xE4pin\xE4kyv\xE4 hinnoittelu ilmal\xE4mp\xF6pumpun asennukseen. Selke\xE4 perusasennushinta ja eritellyt lis\xE4ty\xF6t. Kotitalousv\xE4hennys huomioitu." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero"> <div class="container"> <span class="pill">Selkeät hinnat etukäteen</span> <h1>Hinnoittelu</h1> <p>Tiedät tarkasti mitä perusasennus sisältää ja mitä mahdolliset lisätyöt maksavat. Saat aina kiinteän hinnan ennen työn aloitusta.</p> </div> </section>  <section class="section"> <div class="container" style="max-width:900px"> <div class="card"> <div class="price-hero"> <span class="amount">alk. ${SITE.basePriceFrom} €</span> <span class="vat">sis. alv 25,5 %</span> </div> <h2 style="text-align:left; margin-top:0">Perusasennus sisältää</h2> <ul class="checklist"> ${sisaltyy.map((s) => renderTemplate`<li>${s}</li>`)} </ul> </div> </div> </section>  <section class="section section--soft"> <div class="container" style="max-width:900px"> <h2 style="text-align:left">Perusasennuksen hinta alueittain</h2> <p style="color:var(--muted); margin-top:0">Lähtöhinta vaihtelee toiminta-alueen mukaan. Tarkan kokonaishinnan saat tarjouksessa.</p> <div class="grid grid--3"> ${alueet.map((a) => renderTemplate`<div class="card"> <h3>${a.label}</h3> <div class="price-hero"><span class="amount">alk. ${a.basePriceFrom} €</span><span class="vat">sis. alv 25,5 %</span></div> </div>`)} </div> </div> </section>  <section class="section section--soft"> <div class="container" style="max-width:900px"> <h2 style="text-align:left">Mahdolliset lisätyöt</h2> <p style="color:var(--muted); margin-top:0">Lisätyöt sovitaan aina etukäteen. Kohteet ja tarpeet selviävät kartoituksessa.</p> <table class="price"> <thead><tr><th>Lisätyö</th><th>Hinta</th><th>Sisältö</th></tr></thead> <tbody> ${lisatyot.map((r) => renderTemplate`<tr><td><strong>${r[0]}</strong></td><td style="white-space:nowrap">${r[1]}</td><td style="color:var(--muted)">${r[2]}</td></tr>`)} </tbody> </table> <p style="font-size:.9rem; color:var(--muted); margin-top:10px">Hinnat sisältävät alv:n (25,5 %) ja ovat suuntaa-antavia. Saat tarkan, kiinteän kokonaishinnan tarjouksessa.</p> </div> </section>  <section class="section"> <div class="container" style="max-width:900px"> <h2 style="text-align:left">Hyvä tietää ennen asennusta</h2> <div class="grid grid--2"> ${huomioi.map((h) => renderTemplate`<div class="card"> <h3>${h[0]}</h3> <p style="color:var(--muted); margin:0">${h[1]}</p> </div>`)} </div> </div> </section>  <section class="section section--soft"> <div class="container" style="max-width:900px"> <h2 style="text-align:left">Kotitalousvähennys</h2> <p style="margin-top:0">Asennustyön osuudesta saat kotitalousvähennyksen verotuksessa. Koska laskutamme vain asennustyön – emme itse laitetta – käytännössä lähes koko laskusi oikeuttaa vähennykseen. Erittelemme työn osuuden valmiiksi laskuun, jotta vähennyksen saa vaivatta.</p> <div class="card"> <h3>Vakioasennus (2026–2027)</h3> <div class="price-hero"><span class="amount">40 %</span><span class="vat">työn osuudesta</span></div> <p style="color:var(--muted); margin:0">Enintään 2 100 € / henkilö vuodessa. Omavastuu 150 € / henkilö.</p> </div> <p class="note">Esimerkki (vakioasennus): jos asennustyön osuus on 700 €, vähennys on 40 % = 280 €, josta vähennetään 150 € omavastuu → verohyöty noin 130 €. Pariskunnalla omavastuu ja enimmäismäärä lasketaan kummallekin erikseen, jolloin hyöty on usein suurempi. Laske oma tilanteesi <a href="https://www.vero.fi/syventavat-vero-ohjeet/ohje-hakusivu/47873/kotitalousvahennys-verotuksessa5/" target="_blank" rel="noopener">Verohallinnon ohjeesta</a>.</p> <p style="font-size:.85rem; color:var(--muted); margin-top:8px">Korotus 35 % → 40 % ja 1 600 € → 2 100 € on määräaikainen (vuodet 2026–2027) ja tulee voimaan takautuvasti 1.1.2026. Muutos on hallituksen esitys, jonka eduskunnan vahvistus on vielä kesken – varmistamme luvut ennen julkaisua.</p> </div> </section> ${renderComponent($$result2, "Cta", $$Cta, {})} ` })}`;
}, "/sessions/jolly-bold-dijkstra/mnt/Ilmal\xE4mp\xF6pumppu liiketoiminta/virelampo-sivut/src/pages/hinnoittelu.astro", void 0);

const $$file = "/sessions/jolly-bold-dijkstra/mnt/Ilmalämpöpumppu liiketoiminta/virelampo-sivut/src/pages/hinnoittelu.astro";
const $$url = "/hinnoittelu";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Hinnoittelu,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
