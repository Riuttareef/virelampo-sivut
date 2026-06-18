import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_aS10jzg8.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_CycD1uBN.mjs';
import { $ as $$Cta } from '../../chunks/Cta_DPH9KnDk.mjs';
import { S as SITE } from '../../chunks/config_Bdb_4Kqe.mjs';
export { renderers } from '../../renderers.mjs';

const $$MiksiVaihtaaVanhaIlmalampopumppu = createComponent(($$result, $$props, $$slots) => {
  const signs = [
    "Teho ei riit\xE4 kovilla pakkasilla \u2013 joudut turvautumaan lis\xE4l\xE4mmitykseen",
    "S\xE4hk\xF6nkulutus on noussut, vaikka k\xE4ytt\xF6 on ennallaan",
    "Laite on aiempaa \xE4\xE4nekk\xE4\xE4mpi tai sulattaa jatkuvasti",
    "Toistuvia vikoja tai huoltotarvetta",
    "Kone on R410A-kylm\xE4aineella (noin 10 v tai vanhempi)"
  ];
  const faq = [
    {
      q: "Toimiihan vanha koneeni viel\xE4 \u2013 kannattaako silti vaihtaa?",
      a: "Jos kone on hyv\xE4kuntoinen ja riitt\xE4\xE4 tarpeisiisi, kiire ei ole. Vaihto kannattaa erityisesti silloin, jos teho ei riit\xE4 pakkasilla, s\xE4hk\xF6lasku on noussut tai kone vikailee. Lasketaan tarvittaessa arvio juuri sinun kulutuksellasi."
    },
    {
      q: "Saako vaihtoon kotitalousv\xE4hennyksen?",
      a: "Asennusty\xF6n osuudesta kyll\xE4. Erittelemme ty\xF6n osuuden laskuun valmiiksi v\xE4hennyst\xE4 varten \u2013 se pienent\xE4\xE4 vaihdon todellista hintaa. Katso lis\xE4\xE4 hinnoittelusivulta."
    }
  ];
  const updated = "2026-06-16";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Miksi 10 vuotta vanha ilmal\xE4mp\xF6pumppu kannattaa vaihtaa",
    description: "Vanhan ilmal\xE4mp\xF6pumpun vaihto uuteen R290-laitteeseen: pakkasteho, hy\xF6tysuhteen harppaus ja esimerkkilaskelmat s\xE4\xE4st\xF6ist\xE4 ja takaisinmaksusta.",
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name, "@id": `https://${SITE.domain}/#business` },
    mainEntityOfPage: `https://${SITE.domain}/hyva-tietaa/miksi-vaihtaa-vanha-ilmalampopumppu`,
    dateModified: updated
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Miksi 10 vuotta vanha ilmal\xE4mp\xF6pumppu kannattaa vaihtaa", "description": "Vanhan ilmal\xE4mp\xF6pumpun vaihto uuteen R290-laitteeseen: parempi pakkasteho, 30\u201350 % parempi hy\xF6tysuhde ja esimerkkilaskelmat s\xE4\xE4st\xF6ist\xE4 ja takaisinmaksusta.", "schema": schema }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero"> <div class="container"> <span class="pill">Koneen vaihto</span> <h1>Miksi 10 vuotta vanha ilmalämpöpumppu kannattaa vaihtaa</h1> <p>Vanha kone toimii ehkä vielä, mutta uusi laite tuottaa enemmän lämpöä vähemmällä sähköllä – ja jaksaa pakkasellakin. Katsotaan milloin vaihto kannattaa ja mitä se tarkoittaa euroissa.</p> </div> </section> <section class="section"> <div class="container prose"> <p><a href="/hyva-tietaa">← Hyvä tietää</a></p> <h2 style="text-align:left">Mikä on muuttunut kymmenessä vuodessa?</h2> <p>Ilmalämpöpumput ovat kehittyneet huomattavasti. Uudet laitteet ovat tyypillisesti <strong>30–50 % energiatehokkaampia</strong> kuin 10–15 vuotta vanhat mallit: invertterikompressorit, isommat lämmönvaihtimet ja parempi ohjaus nostavat hyötysuhdetta. Siinä missä vanhan koneen mitoitus-SCOP saattoi olla 2,5–3,0, uudet yltävät 4,0–5,0:een. Tärkeintä kylmässä ilmastossa on kuitenkin <strong>pakkasteho</strong> – ja juuri siinä uudet R290-laitteet ovat omaa luokkaansa.</p> <h2 style="text-align:left">Merkit, että vaihto on ajankohtainen</h2> <ul class="checklist"> ${signs.map((s) => renderTemplate`<li>${s}</li>`)} </ul> <h2 style="text-align:left">Esimerkkilaskelma 1: hyötysuhteen tuoma säästö</h2> <p>Oletetaan, että ilmalämpöpumppu kattaa noin <strong>8 000 kWh</strong> kodin lämmöntarpeesta vuodessa. Vanha ja uusi kone tarvitsevat tähän eri määrän sähköä hyötysuhteen mukaan:</p> <table class="price"> <tr><th>Kone</th><th>Hyötysuhde (SCOP)</th><th>Sähköä / v</th><th>Kulu / v*</th></tr> <tr><td>Vanha R410A</td><td>2,5</td><td>3 200 kWh</td><td>≈ 480 €</td></tr> <tr><td>Uusi R290</td><td>3,8</td><td>2 105 kWh</td><td>≈ 316 €</td></tr> <tr><td><strong>Säästö</strong></td><td></td><td><strong>≈ 1 095 kWh</strong></td><td><strong>≈ 164 €</strong></td></tr> </table> <p style="color:var(--muted);font-size:.86rem">*Sähkön hinnalla 15 snt/kWh. Suuntaa-antava – riippuu kohteesta, käytöstä ja sähkön hinnasta.</p> <h2 style="text-align:left">Esimerkkilaskelma 2: pakkaskauden lisähyöty</h2> <p>Suurin ero näkyy kovilla pakkasilla. Vanha kone luovuttaa, jolloin lämpö tehdään kalliilla suoralla sähköllä (hyötysuhde 1,0). Uusi R290-laite jaksaa tuottaa lämpöä pumppuna vielä silloinkin. Jos uusi kone kattaa pumppuna esimerkiksi <strong>1 500 kWh</strong>, joka vanhalla olisi mennyt suoralla sähköllä hyötysuhteella ~2,0:</p> <table class="price"> <tr><th>Tilanne</th><th>Sähköä 1 500 kWh lämpöön</th><th>Kulu*</th></tr> <tr><td>Vanha kone luovuttaa → suora sähkö (COP 1,0)</td><td>1 500 kWh</td><td>≈ 225 €</td></tr> <tr><td>Uusi R290 pumppuna (COP 2,0)</td><td>750 kWh</td><td>≈ 113 €</td></tr> <tr><td><strong>Lisäsäästö pakkaskaudella</strong></td><td><strong>≈ 750 kWh</strong></td><td><strong>≈ 112 €</strong></td></tr> </table> <p>Yhteensä esimerkeissä säästöä kertyy noin <strong>275 € vuodessa</strong>. Laitteen 12–15 vuoden käyttöiällä se tarkoittaa <strong>3 000–4 000 euron</strong> säästöä – ja kun asennuksen kotitalousvähennys pienentää hankintahintaa, takaisinmaksuaika jää usein muutamaan vuoteen.</p> <p class="note">Luvut ovat esimerkkejä havainnollistamiseen. Lasketaan mielellämme arvion juuri sinun kulutuksellasi ja sähkön hinnallasi.</p> <h2 style="text-align:left">Säästön lisäksi saat</h2> <ul> <li><strong>Tehoa pakkasilla</strong> – mukavampi sisälämpö myös kovimmilla keleillä.</li> <li><strong>Hiljaisemman käynnin</strong> ja paremman, etäohjattavan säädön.</li> <li><strong>Tulevaisuudenkestävyyden</strong> – R290 on alan uusi standardi, jolle kylmäainetta ja huoltoa riittää pitkään. Lue lisää <a href="/hyva-tietaa/kylmaaineet-r410a-r32-r290">kylmäaineista</a>.</li> </ul> <h2 style="text-align:left">Usein kysyttyä</h2> ${faq.map((f) => renderTemplate`<div style="margin-bottom:14px"> <h3 style="margin-bottom:.2em">${f.q}</h3> <p style="color:var(--muted)">${f.a}</p> </div>`)} <p style="color:var(--muted);font-size:.86rem;margin-top:28px">Päivitetty ${updated}. Autamme vaihdon suunnittelussa ja laskemme arvion säästöistä.</p> <p style="margin-top:22px"><a href="/hyva-tietaa">← Takaisin Hyvä tietää -osioon</a></p> </div> </section> ${renderComponent($$result2, "Cta", $$Cta, { "title": "Pyyd\xE4 arvio koneen vaihdosta" })} ` })}`;
}, "/sessions/jolly-bold-dijkstra/mnt/Ilmal\xE4mp\xF6pumppu liiketoiminta/virelampo-sivut/src/pages/hyva-tietaa/miksi-vaihtaa-vanha-ilmalampopumppu.astro", void 0);

const $$file = "/sessions/jolly-bold-dijkstra/mnt/Ilmalämpöpumppu liiketoiminta/virelampo-sivut/src/pages/hyva-tietaa/miksi-vaihtaa-vanha-ilmalampopumppu.astro";
const $$url = "/hyva-tietaa/miksi-vaihtaa-vanha-ilmalampopumppu";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MiksiVaihtaaVanhaIlmalampopumppu,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
