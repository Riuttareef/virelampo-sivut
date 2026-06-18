import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_aS10jzg8.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_Ch2ieEKu.mjs';
import { $ as $$Cta } from '../../chunks/Cta_DPH9KnDk.mjs';
import { S as SITE } from '../../chunks/config_Bdb_4Kqe.mjs';
export { renderers } from '../../renderers.mjs';

const $$LampopumpunValinta = createComponent(($$result, $$props, $$slots) => {
  const checklist = [
    "P\xE4\xE4t\xE4 p\xE4\xE4k\xE4ytt\xF6tarkoitus: l\xE4mmitys, j\xE4\xE4hdytys vai molemmat",
    "Tarkista laitteen l\xE4mp\xF6teho juuri sinun pakkasilla (esim. \u221215 \xB0C), \xE4l\xE4 vain SCOP-lukua",
    "Varmista alin toimintal\xE4mp\xF6tila (useilla \u221225\u2026\u221230 \xB0C)",
    "Katso sis\xE4- ja ulkoyksik\xF6n \xE4\xE4nitaso (dB) \u2013 t\xE4rke\xE4\xE4 makuuhuoneen tai naapurin l\xE4hell\xE4",
    "Mietit\xE4\xE4n sis\xE4yksik\xF6n paikka niin, ett\xE4 ilma kiert\xE4\xE4 koko tilaan",
    "Loma-asuntoon: et\xE4ohjaus (wifi) ja yll\xE4pitol\xE4mm\xF6n toiminta",
    "Pyyd\xE4 mitoitus ammattilaiselta talon koon ja eristyksen mukaan"
  ];
  const faq = [
    {
      q: "Riitt\xE4\xE4k\xF6 yksi ilmal\xE4mp\xF6pumppu koko taloon?",
      a: "Avoimessa pohjaratkaisussa yksi hyvin sijoitettu pumppu l\xE4mmitt\xE4\xE4 ja viilent\xE4\xE4 suuren osan asuinpinta-alasta. Jos talossa on paljon erillisi\xE4 huoneita tai suljettuja ovia, l\xE4mp\xF6 ja viileys eiv\xE4t kanna joka huoneeseen \u2013 silloin kannattaa harkita sijoittelua tai useampaa sis\xE4yksikk\xF6\xE4."
    },
    {
      q: "Kannattaako loma-asuntoon eri laite kuin vakituiseen kotiin?",
      a: "Loma-asunnossa korostuvat et\xE4ohjaus ja luotettava yll\xE4pitol\xE4mp\xF6 (esim. +7\u2026+10 \xB0C), jotta paikka pysyy kuivana ja l\xE4mpi\xE4\xE4 nopeasti tullessa. Vakituisessa kodissa painottuu enemm\xE4n koko l\xE4mmityskauden hy\xF6tysuhde ja pakkasteho."
    }
  ];
  const updated = "2026-06-16";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "L\xE4mmitys, j\xE4\xE4hdytys vai molemmat? N\xE4in valitset ilmal\xE4mp\xF6pumpun",
    description: "Opas omakoti- ja loma-asuntojen ilmal\xE4mp\xF6pumpun valintaan: miten k\xE4ytt\xF6tarkoitus ohjaa laitevalintaa ja mihin kannattaa kiinnitt\xE4\xE4 huomiota.",
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name, "@id": `https://${SITE.domain}/#business` },
    mainEntityOfPage: `https://${SITE.domain}/hyva-tietaa/lampopumpun-valinta`,
    dateModified: updated
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "L\xE4mmitys, j\xE4\xE4hdytys vai molemmat? Ilmal\xE4mp\xF6pumpun valinta", "description": "Opas omakoti- ja loma-asuntojen ilmal\xE4mp\xF6pumpun valintaan: k\xE4ytt\xF6tarkoitus ratkaisee laitevalinnan. Pakkasteho, \xE4\xE4nitaso, mitoitus ja sijoittelu.", "schema": schema }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero"> <div class="container"> <span class="pill">Omakoti &amp; loma-asunto</span> <h1>Lämmitys, jäähdytys vai molemmat?</h1> <p>Oikea ilmalämpöpumppu valitaan käyttötarkoituksen mukaan. Tässä oppaassa käymme läpi, mihin kannattaa kiinnittää huomiota omakoti- ja loma-asunnossa.</p> </div> </section> <section class="section"> <div class="container prose"> <p><a href="/hyva-tietaa">← Hyvä tietää</a></p> <p>Ilmalämpöpumppuja markkinoidaan usein pelkillä hyötysuhdeluvuilla, mutta paras laite riippuu siitä, <strong>mihin sitä pääasiassa käytät</strong>. Lämmitykseen painottuva ympärivuotinen koti, kesän viileyttä kaipaava asunto ja vain ajoittain käytössä oleva loma-asunto asettavat laitteelle eri vaatimukset. Kun käyttötarkoitus on selvä, valinta helpottuu huomattavasti.</p> <h2 style="text-align:left">1. Mihin käytät pumppua?</h2> <p><strong>Pääosin lämmitykseen.</strong> Tavoitteena pienemmät lämmityskustannukset koko vuoden. Tärkeintä on teho pakkasilla ja hyvä lämmityskauden hyötysuhde. Tyypillinen omakotitalo, jossa on suora sähkölämmitys tai vanhempi lämmitysjärjestelmä tukena.</p> <p><strong>Pääosin jäähdytykseen.</strong> Tavoitteena viileä koti kesän helteillä ja parempi nukkuminen. Tärkeintä on riittävä jäähdytysteho, hiljainen käyntiääni ja sisäyksikön hyvä sijoitus. Lämmitys on tällöin lisähyöty siellä, missä se on sallittu.</p> <p><strong>Molempiin.</strong> Yleisin tilanne omakotitalossa: pumppu tuo lämmityssäästöt talvella ja jäähdytyksen kesällä. Tällöin haetaan tasapainoa – laitetta, joka pärjää pakkasilla mutta jäähdyttää myös tehokkaasti.</p> <h2 style="text-align:left">2. Lämmitys edellä – mitä katsoa</h2> <ul> <li><strong>Lämpöteho pakkasilla.</strong> Älä tuijota pelkkää SCOP-lukua. Katso, paljonko laite tuottaa lämpöä juuri sinun pakkasilla (esim. teho −15 °C:ssa). Teho laskee aina kylmetessä – ratkaisevaa on, riittääkö se silloin kun lämpöä eniten tarvitaan.</li> <li><strong>Alin toimintalämpötila.</strong> Useimmat laadukkaat pumput toimivat noin −25…−30 °C:een. Tarkista, että laite kattaa paikkakuntasi kovimmat pakkaset.</li> <li><strong>Sulatustoiminto.</strong> Pakkasella ulkoyksikköön muodostuu huurretta, jonka laite sulattaa automaattisesti. Hyvä sulatuksen hallinta pitää hyötysuhteen korkeammalla.</li> </ul> <p class="note">Suomi kuuluu kylmään ilmastovyöhykkeeseen, joten esitteen SCOP-luku on usein korkeampi kuin todellinen vuosihyötysuhde täällä. Lue lisää <a href="/hyva-tietaa/energiansaasto-laskelmat">energiansäästö-artikkelista</a>.</p> <h2 style="text-align:left">3. Jäähdytys edellä – mitä katsoa</h2> <ul> <li><strong>Jäähdytysteho.</strong> Mitoitetaan jäähdytettävän tilan koon ja auringonpuoleisuuden mukaan. Lievä ylimitoitus ei haittaa – inverterilaite käy silloin pienemmillä kierroksilla, jolloin se on hiljaisempi ja kuormittuu vähemmän, mikä voi jopa pidentää käyttöikää. Vältä kuitenkin reilua ali- tai ylimitoitusta: alimitoitettu ei viilennä riittävästi, ja selvästi ylimitoitettu maksaa turhaan.</li> <li><strong>Äänitaso.</strong> Kesällä laite käy juuri silloin kun ikkunat ovat auki ja nukutaan. Katso sekä sisä- että ulkoyksikön desibelit, etenkin makuuhuoneen lähellä.</li> <li><strong>Sisäyksikön sijoitus.</strong> Viileän ilman pitää päästä leviämään tasaisesti – väärä paikka tuntuu vedolta yhdessä kohdassa ja jättää muut tilat lämpimiksi.</li> </ul> <h2 style="text-align:left">4. Loma-asunnon erityishuomiot</h2> <p>Loma-asunnossa pumppu on usein käytössä vain ajoittain, joten korostuvat eri asiat kuin vakituisessa kodissa:</p> <ul> <li><strong>Ylläpitolämpö.</strong> Laite pitää mökin sopivassa peruslämmössä (esim. +7…+10 °C) myös poissa ollessa – tämä pitää tilat kuivina ja estää kosteusvauriot.</li> <li><strong>Etäohjaus.</strong> Wifi-ohjauksella lämmität mökin valmiiksi jo ennen saapumista.</li> <li><strong>Kosteudenpoisto.</strong> Pumppu tasaa kosteutta, mikä on iso etu kausikäytössä olevassa rakennuksessa.</li> </ul> <h2 style="text-align:left">5. Mitoitus ja sijoittelu ratkaisevat</h2> <p>Paraskaan laite ei toimi hyvin, jos se on väärin mitoitettu tai huonosti sijoitettu. Teho valitaan talon koon, eristyksen ja pohjaratkaisun mukaan, ja sisäyksikkö sijoitetaan niin, että ilma kiertää koko tilaan. Tässä ammattilaisen mitoitus maksaa itsensä takaisin – väärä valinta näkyy heti hyötysuhteessa ja mukavuudessa.</p> <h2 style="text-align:left">Tarkistuslista ennen ostoa</h2> <ul class="checklist"> ${checklist.map((c) => renderTemplate`<li>${c}</li>`)} </ul> <h2 style="text-align:left">Usein kysyttyä</h2> ${faq.map((f) => renderTemplate`<div style="margin-bottom:14px"> <h3 style="margin-bottom:.2em">${f.q}</h3> <p style="color:var(--muted)">${f.a}</p> </div>`)} <p style="color:var(--muted);font-size:.86rem;margin-top:28px">Päivitetty ${updated}. Autamme mielellämme oikean laitteen valinnassa ja mitoituksessa.</p> <p style="margin-top:22px"><a href="/hyva-tietaa">← Takaisin Hyvä tietää -osioon</a></p> </div> </section> ${renderComponent($$result2, "Cta", $$Cta, { "title": "Tarvitsetko apua laitteen valinnassa?" })} ` })}`;
}, "/sessions/jolly-bold-dijkstra/mnt/Ilmal\xE4mp\xF6pumppu liiketoiminta/virelampo-sivut/src/pages/hyva-tietaa/lampopumpun-valinta.astro", void 0);

const $$file = "/sessions/jolly-bold-dijkstra/mnt/Ilmalämpöpumppu liiketoiminta/virelampo-sivut/src/pages/hyva-tietaa/lampopumpun-valinta.astro";
const $$url = "/hyva-tietaa/lampopumpun-valinta";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LampopumpunValinta,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
