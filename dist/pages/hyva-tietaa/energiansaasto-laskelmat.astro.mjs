import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_aS10jzg8.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_C7QanKeK.mjs';
import { $ as $$Cta } from '../../chunks/Cta_DPH9KnDk.mjs';
import { S as SITE } from '../../chunks/config_Bdb_4Kqe.mjs';
export { renderers } from '../../renderers.mjs';

const $$EnergiansaastoLaskelmat = createComponent(($$result, $$props, $$slots) => {
  const tips = [
    "Mitoituta laite oikein \u2013 v\xE4\xE4r\xE4 koko sy\xF6 hy\xF6tysuhteen",
    "Anna pumpun hoitaa perusl\xE4mmitys, \xE4l\xE4 pompottele l\xE4mp\xF6tilaa turhaan",
    "Pid\xE4 sis\xE4yksik\xF6n suodattimet puhtaina (tarkistus muutaman viikon v\xE4lein)",
    "Huolehdi ulkoyksikk\xF6 lumesta ja j\xE4\xE4st\xE4 talvella",
    "Tehosta ilmankiertoa: avoimet ovet viev\xE4t l\xE4mm\xF6n ja viile\xE4n laajemmalle",
    "\xC4l\xE4 sammuta laitetta \xF6iksi pakkasella \u2013 uudelleenl\xE4mmitys kuluttaa enemm\xE4n"
  ];
  const faq = [
    {
      q: "Miksi todellinen s\xE4\xE4st\xF6 j\xE4\xE4 usein esitteen lukua pienemm\xE4ksi?",
      a: "Esitteen SCOP mitataan keskim\xE4\xE4r\xE4ist\xE4 l\xE4mpim\xE4mm\xE4ss\xE4 ilmastovy\xF6hykkeess\xE4. Suomen pakkastunnit, sulatusjaksot ja se, ett\xE4 osa l\xE4mm\xF6st\xE4 tehd\xE4\xE4n silti vastuksella, laskevat todellista vuosihy\xF6tysuhdetta."
    },
    {
      q: "Kannattaako ilmal\xE4mp\xF6pumppu, jos talossa on jo vesikiertoinen l\xE4mmitys?",
      a: "Ilmal\xE4mp\xF6pumppu sopii parhaiten suoran s\xE4hk\xF6l\xE4mmityksen tueksi. Jos talossa on esimerkiksi maal\xE4mp\xF6 tai kaukol\xE4mp\xF6, s\xE4\xE4st\xF6logiikka on erilainen \u2013 arvioidaan tapauskohtaisesti."
    }
  ];
  const updated = "2026-06-16";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Paljonko ilmal\xE4mp\xF6pumppu s\xE4\xE4st\xE4\xE4? Vinkit ja laskelmat l\xE4mmityskaudelle",
    description: "Miten ilmal\xE4mp\xF6pumpun s\xE4\xE4st\xF6 syntyy, mik\xE4 on realistinen hy\xF6tysuhde Suomessa ja esimerkkilaskelma suoras\xE4hk\xF6l\xE4mmitykseen verrattuna.",
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name, "@id": `https://${SITE.domain}/#business` },
    mainEntityOfPage: `https://${SITE.domain}/hyva-tietaa/energiansaasto-laskelmat`,
    dateModified: updated
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Paljonko ilmal\xE4mp\xF6pumppu s\xE4\xE4st\xE4\xE4? Laskelmat l\xE4mmityskaudelle", "description": "Miten ilmal\xE4mp\xF6pumpun s\xE4\xE4st\xF6 syntyy, realistinen hy\xF6tysuhde Suomessa ja esimerkkilaskelma suoras\xE4hk\xF6l\xE4mmitykseen verrattuna. Energians\xE4\xE4st\xF6vinkit.", "schema": schema }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero"> <div class="container"> <span class="pill">Energiansäästö</span> <h1>Paljonko ilmalämpöpumppu säästää?</h1> <p>Säästö syntyy hyötysuhteesta – mutta todellinen luku Suomessa on maltillisempi kuin esitteen SCOP. Käydään läpi miten säästö lasketaan ja mistä se riippuu.</p> </div> </section> <section class="section"> <div class="container prose"> <p><a href="/hyva-tietaa">← Hyvä tietää</a></p> <h2 style="text-align:left">Mistä säästö syntyy?</h2> <p>Ilmalämpöpumppu ei tee lämpöä tyhjästä, vaan siirtää sitä ulkoilmasta sisään. Siksi se tuottaa enemmän lämpöenergiaa kuin kuluttaa sähköä. Tätä suhdetta kuvaa <strong>COP</strong>: jos COP on 3, laite antaa kolme yksikköä lämpöä yhdellä yksiköllä sähköä. <strong>SCOP</strong> on saman luvun koko lämmityskauden keskiarvo.</p> <h2 style="text-align:left">Realistinen hyötysuhde Suomessa</h2> <p>Esitteissä näkyvä SCOP (esim. 4,5) mitataan keskimääräistä lämpimämmässä vyöhykkeessä. Suomi kuuluu kylmään ilmastovyöhykkeeseen, joten <strong>todellinen vuosihyötysuhde jää usein 2,5–3,5 tienoille</strong>. Eroa selittävät pakkastuntien heikompi teho, sulatusjaksot ja se, että kovimmilla pakkasilla lämpöä tehdään silti vastuksella.</p> <p class="note">Se ei tarkoita, etteikö pumppu kannattaisi – se tarkoittaa, että lasketaan realistisilla luvuilla, ei myyntiesitteen parhailla.</p> <h2 style="text-align:left">Esimerkkilaskelma: suorasähkö vs. ilmalämpöpumppu</h2> <p>Otetaan sähkölämmitteinen omakotitalo, jonka huonelämmitys kuluttaa noin <strong>15 000 kWh vuodessa</strong>. Oikein mitoitettu ilmalämpöpumppu kattaa tyypillisesti merkittävän osan tästä, ja säästö asettuu usein <strong>30–50 %:iin lämmityskuluista</strong>.</p> <table class="price"> <tr><th>Tilanne</th><th>Lämmityskulu / v*</th></tr> <tr><td>Pelkkä suora sähkölämmitys (15 000 kWh)</td><td>≈ 2 250 €</td></tr> <tr><td>Ilmalämpöpumppu mukana (säästö ~40 %)</td><td>≈ 1 350 €</td></tr> <tr><td><strong>Säästö vuodessa</strong></td><td><strong>≈ 900 €</strong></td></tr> </table> <p style="color:var(--muted);font-size:.86rem">*Esimerkki sähkön hinnalla 15 snt/kWh. Luvut ovat suuntaa-antavia ja riippuvat talosta, käytöstä ja sähkön hinnasta.</p> <p>Motivan arvion mukaan ilmalämpöpumppu säästää tyypillisesti luokkaa <strong>3 000 kWh vuodessa</strong>, mikä nykyisillä sähkön hinnoilla tarkoittaa satojen eurojen vuosisäästöä. Suuremmassa tai huonosti eristetyssä talossa säästö voi olla isompikin.</p> <h2 style="text-align:left">Energiansäästövinkit lämmityskaudelle</h2> <ul class="checklist"> ${tips.map((t) => renderTemplate`<li>${t}</li>`)} </ul> <h2 style="text-align:left">Usein kysyttyä</h2> ${faq.map((f) => renderTemplate`<div style="margin-bottom:14px"> <h3 style="margin-bottom:.2em">${f.q}</h3> <p style="color:var(--muted)">${f.a}</p> </div>`)} <p style="color:var(--muted);font-size:.86rem;margin-top:28px">Päivitetty ${updated}. Lasketaan mielellämme arvio juuri sinun kohteeseesi.</p> <p style="margin-top:22px"><a href="/hyva-tietaa">← Takaisin Hyvä tietää -osioon</a></p> </div> </section> ${renderComponent($$result2, "Cta", $$Cta, { "title": "Pyyd\xE4 arvio s\xE4\xE4st\xF6ist\xE4 omaan kohteeseesi" })} ` })}`;
}, "/sessions/jolly-bold-dijkstra/mnt/Ilmal\xE4mp\xF6pumppu liiketoiminta/virelampo-sivut/src/pages/hyva-tietaa/energiansaasto-laskelmat.astro", void 0);

const $$file = "/sessions/jolly-bold-dijkstra/mnt/Ilmalämpöpumppu liiketoiminta/virelampo-sivut/src/pages/hyva-tietaa/energiansaasto-laskelmat.astro";
const $$url = "/hyva-tietaa/energiansaasto-laskelmat";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EnergiansaastoLaskelmat,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
