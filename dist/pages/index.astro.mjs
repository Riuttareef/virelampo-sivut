import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute, u as unescapeHTML } from '../chunks/astro/server_aS10jzg8.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_C7QanKeK.mjs';
import { $ as $$Cta } from '../chunks/Cta_DPH9KnDk.mjs';
import { S as SITE, T as TRUST, R as REVIEWS } from '../chunks/config_Bdb_4Kqe.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      t: "Asennus",
      d: "Ilmal\xE4mp\xF6pumpun ammattiasennus \u2013 siisti l\xE4pivienti, putkivedot ja s\xE4hk\xF6istys.",
      href: "/asennus",
      icon: '<rect x="2.5" y="6" width="19" height="6.5" rx="2"/><line x1="6" y1="9.2" x2="14" y2="9.2"/><path d="M6.5 16.6c1.2-1.3 2.4-1.3 3.6 0"/><path d="M14 16.6c1.2-1.3 2.4-1.3 3.6 0"/>'
    },
    {
      t: "Huolto",
      d: "Vuosihuolto ja puhdistus pit\xE4v\xE4t laitteen tehokkaana ja pident\xE4v\xE4t sen ik\xE4\xE4.",
      href: "/huolto",
      icon: '<path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 3.5v4.5h-4.5"/>'
    },
    {
      t: "Korjaus",
      d: "Vianetsint\xE4 ja korjaus merkist\xE4 riippumatta \u2013 nopeasti ja luotettavasti.",
      href: "/yhteys",
      icon: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>'
    }
  ];
  const steps = [
    { t: "Pyyd\xE4 tarjous", d: "J\xE4t\xE4 lyhyt yhteydenotto netiss\xE4 tai soita." },
    { t: "Sovitaan aika", d: "Saat kiinte\xE4n hinnan ja sopivan asennusajan." },
    { t: "Asennus", d: "Siisti, ammattitaitoinen asennus sovitusti." },
    { t: "Opastus", d: "N\xE4yt\xE4mme laitteen k\xE4yt\xF6n ja huoltovinkit." }
  ];
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="hero" style="background-image: linear-gradient(120deg, rgba(16,32,48,.90) 0%, rgba(32,63,88,.66) 42%, rgba(120,78,55,.55) 74%, rgba(168,90,42,.62) 112%), url('/kuvat/hero.jpg'); background-size: cover; background-position: center;"> <div class="container"> <span class="pill">✓ Tukes-pätevä &amp; vakuutettu</span> <h1>Viileä koti kesällä – lämmin talvella.</h1> <p>Asennamme ilmalämpöpumput jäähdytykseen koteihin ja asuntoihin. Kokeneet, Tukes-pätevät asentajat, kiinteät hinnat ja siisti jälki.</p> <div class="actions"> <a href="/yhteys" class="btn btn--cta">Pyydä maksuton tarjous →</a> ${SITE.showPhone} </div> <p class="mini">${SITE.responsePromise}</p> </div> </section>  <div class="services"> <div class="container"> <div class="grid grid--3"> ${services.map((s) => renderTemplate`<a${addAttribute(s.href, "href")} class="scard"> <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${unescapeHTML(s.icon)}</svg></div> <h3>${s.t}</h3> <p>${s.d}</p> <span class="more">Lue lisää →</span> </a>`)} </div> </div> </div>  <section class="section"> <div class="container"> <div class="trust"> ${TRUST.map((x) => renderTemplate`<div class="item"> <div class="tick">✓</div> <div><strong>${x.title}</strong><span>${x.text}</span></div> </div>`)} </div> </div> </section>  <section class="section"> <div class="container"> <h2>Näin se toimii</h2> <p class="lead">Selkeä ja vaivaton prosessi alusta loppuun.</p> <div class="steps"> ${steps.map((s, i) => renderTemplate`<div class="step"> <div class="num">${i + 1}</div> <h3>${s.t}</h3> <p style="color:var(--muted)">${s.d}</p> </div>`)} </div> </div> </section>  <section class="section section--soft"> <div class="container"> <div class="feature"> <div class="shot"><img src="/kuvat/luonto.jpg" alt="Suomalainen luonto" onerror="this.remove()"><span>kuvat/luonto.jpg</span></div> <div> <span class="pill" style="background:var(--green-soft); color:var(--green-d); border-color:transparent">Viileyttä ja raikkautta</span> <h2>Viileä koti kesällä – energiatehokkaasti</h2> <p style="color:var(--muted)">Ilmalämpöpumppu jäähdyttää kotisi tehokkaasti kuumina kesäpäivinä ja parantaa sisäilmaa. Energiatehokkaana se kuormittaa ympäristöä vähemmän – ja tuo lämpöä talvella siellä missä se on sallittu.</p> <ul class="checklist"> <li>Tehokas jäähdytys kuumina kesäpäivinä</li> <li>Raikkaampi ja suodatettu sisäilma</li> <li>Energiatehokas – tuottaa moninkertaisesti käyttämänsä sähkön verran viilennystä ja lämpöä</li> <li>Lämmitys talvella lisähyötynä (omakoti- ja rivitalot)</li> </ul> </div> </div> </div> </section>  <section class="section section--soft"> <div class="container"> <h2>Työn jälki</h2> <p class="lead">Siisti asennus, oikea sijoitus ja huolelliset läpiviennit. Lisää tähän kuvia tekemistäsi asennuksista.</p> <div class="gallery"> <div class="shot"><img src="/kuvat/tyo1.jpg" alt="Asennettu ilmalämpöpumppu" onerror="this.remove()"><span>kuvat/tyo1.jpg</span></div> <div class="shot"><img src="/kuvat/tyo2.jpg" alt="Siisti seinäläpivienti" onerror="this.remove()"><span>kuvat/tyo2.jpg</span></div> <div class="shot"><img src="/kuvat/tyo3.jpg" alt="Sisäyksikkö olohuoneessa" onerror="this.remove()"><span>kuvat/tyo3.jpg</span></div> </div> </div> </section>  <section class="section"> <div class="container"> <h2>Asiakkaiden kokemuksia</h2> <p class="lead">Arvostelut kerätään jokaiselta tyytyväiseltä asiakkaalta.</p> <div class="grid grid--3"> ${REVIEWS.map((r) => renderTemplate`<div class="review"> <div class="stars">${"\u2605".repeat(r.stars)}</div> <p>${r.text}</p> <div class="who">${r.name}</div> </div>`)} </div> </div> </section> ${renderComponent($$result2, "Cta", $$Cta, {})} ` })}`;
}, "/sessions/jolly-bold-dijkstra/mnt/Ilmal\xE4mp\xF6pumppu liiketoiminta/virelampo-sivut/src/pages/index.astro", void 0);

const $$file = "/sessions/jolly-bold-dijkstra/mnt/Ilmalämpöpumppu liiketoiminta/virelampo-sivut/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
