import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_aS10jzg8.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_C7QanKeK.mjs';
import { $ as $$Cta } from '../../chunks/Cta_DPH9KnDk.mjs';
import { S as SITE } from '../../chunks/config_Bdb_4Kqe.mjs';
export { renderers } from '../../renderers.mjs';

const $$IlmalampopumppuKerrostaloon = createComponent(($$result, $$props, $$slots) => {
  const checklist = [
    "Hae lupa taloyhti\xF6lt\xE4 (hallitukselta) ennen tilausta",
    "Valitse j\xE4\xE4hdytysk\xE4ytt\xF6\xF6n tarkoitettu laite \u2013 ei l\xE4mmitysk\xE4ytt\xF6\xE4",
    "Selvit\xE4, vaatiiko asennus toimenpideluvan kaupungilta",
    "Sovi ulkoyksik\xF6n paikka parvekkeella (lattialle kumitassujen p\xE4\xE4lle)",
    "Varmista kondenssiveden hallittu ohjaus (sadevesij\xE4rjestelm\xE4 tai erillinen ker\xE4ysastia)",
    "K\xE4yt\xE4 ammattiasentajaa \u2013 siisti, s\xE4\xE4nt\xF6jen mukainen asennus"
  ];
  const faq = [
    {
      q: "Voinko l\xE4mmitt\xE4\xE4 asuntoa ilmal\xE4mp\xF6pumpulla kerrostalossa?",
      a: "P\xE4\xE4s\xE4\xE4nt\xF6isesti et. Kerrostaloasunnoissa sallitaan tavallisesti vain j\xE4\xE4hdytysk\xE4ytt\xF6, ei l\xE4mmityst\xE4 \u2013 l\xE4mmitys kuuluu taloyhti\xF6n j\xE4rjestelm\xE4\xE4n. Asennetaan siis j\xE4\xE4hdytykseen tarkoitettu laite, ja taloyhti\xF6n linjaus ratkaisee."
    },
    {
      q: "Voiko naapuri est\xE4\xE4 asennuksen?",
      a: "Ei \u2013 asennuksesta p\xE4\xE4tt\xE4\xE4 taloyhti\xF6, ei yksitt\xE4inen naapuri. Ulkoyksikk\xF6 asennetaan parvekkeelle, eik\xE4 se vaadi naapurin lupaa."
    },
    {
      q: "Voinko asentaa j\xE4\xE4hdytyskoneen, jos asunnossa ei ole parveketta?",
      a: "Ei. Ulkoyksikk\xF6 asennetaan kerrostalossa parvekkeen lattialle, joten ilman parveketta sille ei ole sallittua asennuspaikkaa \u2013 julkisivuun asentamista ei kerrostaloissa yleens\xE4 sallita."
    }
  ];
  const updated = "2026-06-16";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ilmal\xE4mp\xF6pumppu kerrostaloon \u2013 j\xE4\xE4hdytys, luvat ja taloyhti\xF6n vaatimukset",
    description: "Kerrostalossa sallitaan vain j\xE4\xE4hdytys, ei l\xE4mmityst\xE4. Opas taloyhti\xF6n lupaan, mahdolliseen toimenpidelupaan ja kerrostaloasennuksen erityispiirteisiin.",
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name, "@id": `https://${SITE.domain}/#business` },
    mainEntityOfPage: `https://${SITE.domain}/hyva-tietaa/ilmalampopumppu-kerrostaloon`,
    dateModified: updated
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Ilmal\xE4mp\xF6pumppu kerrostaloon \u2013 j\xE4\xE4hdytys, luvat ja taloyhti\xF6", "description": "Kerrostalossa sallitaan vain j\xE4\xE4hdytys, ei l\xE4mmityst\xE4. Opas taloyhti\xF6n lupaan, toimenpidelupaan, ulkoyksik\xF6n sijoitukseen ja kondenssiveteen.", "schema": schema }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero"> <div class="container"> <span class="pill">Kerrostalo</span> <h1>Ilmalämpöpumppu kerrostaloon</h1> <p>Kerrostalossa pätevät omat säännöt: sallittua on vain jäähdytys, ja taloyhtiöllä on sanansa asiaan. Käydään läpi luvat ja erityisvaatimukset.</p> </div> </section> <section class="section"> <div class="container prose"> <p><a href="/hyva-tietaa">← Hyvä tietää</a></p> <h2 style="text-align:left">Vain jäähdytys – ei lämmitystä</h2> <p>Tärkein ero omakotitaloon: <strong>kerrostaloasunnossa ilmalämpöpumppua käytetään vain jäähdytykseen, ei lämmitykseen.</strong> Asunnon lämmitys kuuluu taloyhtiön järjestelmään, joten asennetaan jäähdytyskäyttöön tarkoitettu laite. Tämä on syytä varmistaa heti alussa, sillä se vaikuttaa sekä laitevalintaan että lupaan.</p> <h2 style="text-align:left">Taloyhtiön lupa tarvitaan aina</h2> <p>Koska asennus koskee rakennuksen rakenteita ja julkisivua, tarvitaan taloyhtiön (hallituksen) lupa ennen työn aloittamista. Vuoden 2020 asunto-osakeyhtiölain muutos helpotti tilannetta: <strong>taloyhtiö ei voi kieltää asennusta ilman painavia perusteita</strong> – kielto on mahdollinen vain, jos asennuksesta aiheutuu kohtuutonta haittaa suhteessa osakkaan saamaan hyötyyn.</p> <h2 style="text-align:left">Mahdollinen toimenpidelupa</h2> <p>Osassa kunnista ja kohteista asennus vaatii taloyhtiön luvan lisäksi <strong>toimenpideluvan kaupungilta</strong>, koska ulkoyksikkö muuttaa julkisivua. Tämä kannattaa selvittää etukäteen, sillä se pidentää aikataulua.</p> <h2 style="text-align:left">Asennuksen tekniset huomiot</h2> <ul> <li><strong>Sijoitus.</strong> Ulkoyksikkö asennetaan parvekkeen lattialle kumitassujen päälle. Parvekeasennus ei muuta rakennuksen julkisivua.</li> <li><strong>Läpivienti.</strong> Putkien läpivienti riippuu parvekkeen seinän runkomateriaalista. Kivirakenteinen seinä vaatii aina lisähintaisen timanttiporauksen – sen hinnan näet <a href="/hinnoittelu">hinnoittelusta</a>.</li> <li><strong>Kondenssivesi.</strong> Jäähdytyksessä syntyvä lauhdevesi pitää ohjata hallitusti, eikä se saa valua julkisivulle tai naapurin parvekkeelle. Ratkaisu riippuu taloyhtiöstä: jos parvekkeella on sadevesijärjestelmä, vesi voidaan johtaa siihen. Monissa taloyhtiöissä vesi ohjataan ulkoyksikön viereen erilliseen keräysastiaan, joka pitää itse tyhjentää. Astia voi olla myös automatisoitu niin, että se katkaisee laitteelta virran, kun astia on täynnä.</li> <li><strong>Sähköliitäntä.</strong> Sähkönsyöttö ja siihen liittyvät tarpeet ratkaistaan aina tapauskohtaisesti taloyhtiön iän ja sähköpaikkojen saatavuuden mukaan. Toteutamme kokonaisuuden avaimet käteen -periaatteella – hinta sovitaan etukäteen, ei yllätyksiä.</li> </ul> <h2 style="text-align:left">Vastuu laitteesta</h2> <p>Osakas vastaa itse asentamansa laitteen huollosta ja kunnossapidosta. Hyvin asennettu ja säännöllisesti huollettu laite pysyy hiljaisena ja toimii pitkään.</p> <h2 style="text-align:left">Näin etenet</h2> <p class="note"><strong>Helpoin tapa aloittaa:</strong> ota kuva parvekkeesta ja sisäyksikön suunnitellusta paikasta ja <a href="/yhteys">lähetä se meille</a>${""}. Kerromme nopeasti, mikä on mahdollista ja mitä se maksaa.</p> <ul class="checklist"> ${checklist.map((c) => renderTemplate`<li>${c}</li>`)} </ul> <p class="note">Taloyhtiökohtaiset säännöt vaihtelevat. Tarkista aina oman taloyhtiösi ohjeet – autamme mielellämme lupahakemuksessa ja oikean laitteen valinnassa.</p> <h2 style="text-align:left">Usein kysyttyä</h2> ${faq.map((f) => renderTemplate`<div style="margin-bottom:14px"> <h3 style="margin-bottom:.2em">${f.q}</h3> <p style="color:var(--muted)">${f.a}</p> </div>`)} <p style="color:var(--muted);font-size:.86rem;margin-top:28px">Päivitetty ${updated}. Autamme kerrostaloasennuksen luvissa ja toteutuksessa.</p> <p style="margin-top:22px"><a href="/hyva-tietaa">← Takaisin Hyvä tietää -osioon</a></p> </div> </section> ${renderComponent($$result2, "Cta", $$Cta, { "title": "Suunnitteletko j\xE4\xE4hdytyst\xE4 kerrostaloon?" })} ` })}`;
}, "/sessions/jolly-bold-dijkstra/mnt/Ilmal\xE4mp\xF6pumppu liiketoiminta/virelampo-sivut/src/pages/hyva-tietaa/ilmalampopumppu-kerrostaloon.astro", void 0);

const $$file = "/sessions/jolly-bold-dijkstra/mnt/Ilmalämpöpumppu liiketoiminta/virelampo-sivut/src/pages/hyva-tietaa/ilmalampopumppu-kerrostaloon.astro";
const $$url = "/hyva-tietaa/ilmalampopumppu-kerrostaloon";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$IlmalampopumppuKerrostaloon,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
