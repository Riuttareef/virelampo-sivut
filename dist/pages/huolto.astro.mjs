import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_aS10jzg8.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_C7QanKeK.mjs';
import { $ as $$Cta } from '../chunks/Cta_DPH9KnDk.mjs';
import { S as SITE } from '../chunks/config_Bdb_4Kqe.mjs';
export { renderers } from '../renderers.mjs';

const $$Huolto = createComponent(($$result, $$props, $$slots) => {
  const paketit = [
    {
      nimi: "Kevythuolto",
      hinta: "alk. 149 \u20AC",
      featured: false,
      sub: "Kevyt puhdistus ja toiminnan tarkistus. Sopii v\xE4h\xE4n k\xE4ytetylle tai siistiss\xE4 ymp\xE4rist\xF6ss\xE4 olevalle laitteelle.",
      sis: [
        "Sis\xE4yksik\xF6n suodattimien ja n\xE4kyvien osien puhdistus",
        "Kennon kevyt puhdistus",
        "Kondenssiveden poiston testaus",
        "Ulkoyksik\xF6n yleiskunnon tarkastus",
        "Toiminnan tarkistus"
      ]
    },
    {
      nimi: "T\xE4yshuolto",
      hinta: "alk. 239 \u20AC",
      featured: true,
      sub: "Perusteellinen pesu, jossa sis\xE4yksikk\xF6 puretaan ja puhdistetaan l\xE4pikotaisin. Suosituin valinta.",
      sis: [
        "Sis\xE4yksik\xF6n purku osien perusteellista puhdistusta varten",
        "Puhallinrummun ja kennon syv\xE4puhdistus matalapaineh\xF6yryll\xE4 ja desinfiointiaineella",
        "L\xE4pivientien, kourujen ja laakerien tarkastus",
        "Kondenssiveden poiston testaus",
        "Kylm\xE4aineen paineiden ja l\xE4mp\xF6tilojen mittaus",
        "Sis\xE4- ja ulkoyksik\xF6n puhdistus ja yleiskunnon tarkastus"
      ]
    },
    {
      nimi: "T\xE4yshuolto + raportti",
      hinta: "alk. 289 \u20AC",
      featured: false,
      sub: "Kuten t\xE4yshuolto, mutta mukana mitatut arvot ja kirjallinen raportti laitteen kunnosta.",
      sis: [
        "Kaikki t\xE4yshuollon toimet",
        "Puhallinl\xE4mp\xF6tilojen mittaus",
        "Mitatut paineet ja l\xE4mp\xF6tilat kirjattuna",
        "Kirjallinen loppuraportti laitteen kunnosta",
        "Hy\xF6dyllinen kunnon seurantaan ja takuuasioissa"
      ]
    }
  ];
  const merkit = [
    ["Outo \xE4\xE4ni", "Kolinaa, hurinaa tai muuta poikkeavaa \xE4\xE4nt\xE4 laitteesta."],
    ["Heikentynyt teho", "Laite ei en\xE4\xE4 l\xE4mmit\xE4 tai viilenn\xE4 yht\xE4 tehokkaasti kuin ennen."],
    ["S\xE4hk\xF6lasku nousee", "Kulutus kasvaa ilman selke\xE4\xE4 syyt\xE4 \u2013 likainen laite kuluttaa enemm\xE4n."],
    ["Heikko ilmavirta tai haju", "Tukkeutunut kenno tai suodatin heikent\xE4\xE4 ilmavirtaa ja sis\xE4ilmaa."]
  ];
  const omatoiminen = [
    ["Puhdista suodattimet", "Irrota sis\xE4yksik\xF6n suodattimet, imuroi tai pese ne vedell\xE4 ja aseta takaisin. Suositus 1\u20132 kertaa kuukaudessa."],
    ["Tarkista ulkoyksikk\xF6", "Poista lehdet, roskat ja lumi yksik\xF6n ymp\xE4rilt\xE4. Varmista ettei kotelossa ole vaurioita tai tukoksia."],
    ["Testaa asetukset", "Tarkista ett\xE4 kaukos\xE4\xE4din toimii ja asetukset ovat oikein \u2013 l\xE4mmitys talvella, viilennys kes\xE4ll\xE4."]
  ];
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Ilmal\xE4mp\xF6pumpun huolto",
    provider: { "@type": "HVACBusiness", name: SITE.name, "@id": `https://${SITE.domain}/#business` },
    areaServed: SITE.areaShort,
    description: "Ilmal\xE4mp\xF6pumpun huolto ja puhdistus kaikkiin merkkeihin, selke\xE4t paketit kiinte\xE4ll\xE4 hinnalla."
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Ilmal\xE4mp\xF6pumpun huolto", "description": "Ilmal\xE4mp\xF6pumpun huolto ja puhdistus ammattitaidolla. Selke\xE4t huoltopaketit hintoineen. S\xE4\xE4nn\xF6llinen huolto pit\xE4\xE4 laitteen tehokkaana.", "schema": schema }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero"> <div class="container"> <span class="pill">Huollamme kaikki merkit – myös muiden asentamat</span> <h1>Ilmalämpöpumpun huolto ammattitaidolla</h1> <p>Säännöllinen huolto pitää laitteesi tehokkaana, pidentää sen ikää ja parantaa sisäilmaa. Suositus: huolto 1–3 vuoden välein käytöstä riippuen.</p> <div class="actions"> <a href="/yhteys" class="btn btn--cta">Varaa huolto →</a> </div> </div> </section>  <section class="section"> <div class="container"> <h2>Huoltopaketit</h2> <p class="lead">Valitse laitteesi käytön ja kunnon mukaan. Saat aina kiinteän hinnan etukäteen.</p> <div class="pkg-grid"> ${paketit.map((p) => renderTemplate`<div${addAttribute(p.featured ? "pkg featured" : "pkg", "class")}> ${p.featured && renderTemplate`<span class="badge">Suosituin</span>`} <h3>${p.nimi}</h3> <div class="pkg-price">${p.hinta}</div> <p class="pkg-sub">${p.sub}</p> <ul>${p.sis.map((x) => renderTemplate`<li>${x}</li>`)}</ul> <a href="/yhteys" class="btn btn--cta">Varaa ${p.nimi.toLowerCase()}</a> </div>`)} </div> <p style="font-size:.9rem; color:var(--muted); margin-top:14px; text-align:center; max-width:760px; margin-left:auto; margin-right:auto">Lisätyöt 74 €/h · kylmäaineen lisäys R32 35 €/100 g · huolto yli 3,2 m korkeuteen +80 €. Hinnat sisältävät alv:n (25,5 %) ja ovat suuntaa-antavia. Lopullinen hinta vahvistetaan ennen työtä, ja kotitalousvähennys huomioidaan työn osuudesta.</p> </div> </section>  <section class="section section--soft"> <div class="container" style="max-width:900px"> <h2 style="text-align:left">Milloin huolto on tarpeen?</h2> <div class="grid grid--2"> ${merkit.map((m) => renderTemplate`<div class="card"><h3>${m[0]}</h3><p style="color:var(--muted); margin:0">${m[1]}</p></div>`)} </div> </div> </section>  <section class="section"> <div class="container"> <h2>Omatoiminen huolto – pidä laite kunnossa itse</h2> <p class="lead">Pienillä toimilla pidät pumpun puhtaana huoltojen välissä. Isommat puhdistukset kannattaa jättää ammattilaiselle.</p> <div class="steps"> ${omatoiminen.map((s, i) => renderTemplate`<div class="step"> <div class="num">${i + 1}</div> <h3>${s[0]}</h3> <p style="color:var(--muted)">${s[1]}</p> </div>`)} </div> </div> </section>  <section class="section section--soft"> <div class="container" style="max-width:900px"> <div class="card"> <h2 style="text-align:left; margin-top:0">Huoltosopimus – huolettomin vaihtoehto</h2> <p>Huoltosopimuksella laitteesi pysyy kunnossa automaattisesti: muistutamme huoltoajasta puolestasi, saat etusijan huoltopyyntöihin ja kiinteän hinnan ilman yllätyksiä.</p> <ul class="checklist"> <li>Vuosittainen huolto sovitulla aikataululla</li> <li>Etuoikeus huolto- ja vikapyyntöihin</li> <li>Kiinteä hinta, ei yllätyksiä</li> <li>Mahdollinen alennus korjauksista ja lisätöistä</li> </ul> <a href="/yhteys" class="btn btn--cta" style="margin-top:6px">Kysy huoltosopimuksesta</a> </div> <p class="note" style="margin-top:18px">Lakisääteiset huolto- ja kylmäainetiedot dokumentoidaan ja säilytetään asianmukaisesti.</p> </div> </section> ${renderComponent($$result2, "Cta", $$Cta, { "title": "Varaa huolto tai kysy huoltosopimuksesta" })} ` })}`;
}, "/sessions/jolly-bold-dijkstra/mnt/Ilmal\xE4mp\xF6pumppu liiketoiminta/virelampo-sivut/src/pages/huolto.astro", void 0);

const $$file = "/sessions/jolly-bold-dijkstra/mnt/Ilmalämpöpumppu liiketoiminta/virelampo-sivut/src/pages/huolto.astro";
const $$url = "/huolto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Huolto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
