import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_aS10jzg8.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_Ch2ieEKu.mjs';
import { $ as $$Cta } from '../../chunks/Cta_DPH9KnDk.mjs';
import { S as SITE } from '../../chunks/config_Bdb_4Kqe.mjs';
export { renderers } from '../../renderers.mjs';

const $$KylmaaineetR410AR32R290 = createComponent(($$result, $$props, $$slots) => {
  const faq = [
    {
      q: "Pit\xE4\xE4k\xF6 vanha R410A-laitteeni vaihtaa heti?",
      a: "Ei. Olemassa olevaa laitetta saa k\xE4ytt\xE4\xE4 ja huoltaa normaalisti. Ajan my\xF6t\xE4 korkean GWP:n kylm\xE4aineen saatavuus voi kuitenkin heikenty\xE4 ja huoltohinta nousta, mik\xE4 kannattaa pit\xE4\xE4 mieless\xE4 laitteen elinkaaren loppup\xE4\xE4ss\xE4."
    },
    {
      q: "Onko R290 (propaani) vaarallinen kotona?",
      a: "R290 on syttyv\xE4\xE4, joten asennuksessa noudatetaan varoet\xE4isyyksi\xE4 ja ammattiasennusta. Useimmissa malleissa koko kylm\xE4ainepiiri on ulkoyksik\xF6ss\xE4, jolloin propaania ei ole sis\xE4tiloissa."
    }
  ];
  const updated = "2026-06-16";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Kylm\xE4aineet R410A, R32 ja R290 \u2013 mik\xE4 muuttui ja mit\xE4 se tarkoittaa sinulle",
    description: "Miksi kylm\xE4aineet vaihtuvat, miten R410A, R32 ja R290 eroavat ilmastovaikutukseltaan ja teholtaan, ja mit\xE4 muutos merkitsee kuluttajalle.",
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name, "@id": `https://${SITE.domain}/#business` },
    mainEntityOfPage: `https://${SITE.domain}/hyva-tietaa/kylmaaineet-r410a-r32-r290`,
    dateModified: updated
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Kylm\xE4aineet R410A, R32 ja R290 \u2013 mik\xE4 muuttui", "description": "Miksi ilmal\xE4mp\xF6pumppujen kylm\xE4aineet vaihtuvat, miten R410A, R32 ja R290 eroavat ilmastovaikutukseltaan ja pakkasteholtaan, ja mit\xE4 se tarkoittaa kuluttajalle.", "schema": schema }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero"> <div class="container"> <span class="pill">Tekniikka</span> <h1>Kylmäaineet R410A, R32 ja R290</h1> <p>Ilmalämpöpumppujen kylmäaineet vaihtuvat ilmastosyistä. Käydään läpi mikä muuttui, miten aineet eroavat – ja mitä se merkitsee sinulle ostajana.</p> </div> </section> <section class="section"> <div class="container prose"> <p><a href="/hyva-tietaa">← Hyvä tietää</a></p> <h2 style="text-align:left">Miksi kylmäaine muuttuu?</h2> <p>Kylmäaine on pumpun "verenkierto", joka siirtää lämpöä. Vanhat kylmäaineet ovat voimakkaita kasvihuonekaasuja, jos niitä pääsee vuotamaan ilmakehään. EU:n F-kaasuasetus ohjaa siksi alaa kohti pienemmän ilmastovaikutuksen aineita. Vaikutusta mitataan <strong>GWP-luvulla</strong> (Global Warming Potential): mitä pienempi, sitä vähemmän haittaa ilmastolle.</p> <h2 style="text-align:left">GWP-vertailu</h2> <div class="tbl"><div class="tbl__scroll"> <table class="price"> <tr><th>Kylmäaine</th><th>Tyyppi</th><th>GWP*</th></tr> <tr><td>R410A</td><td>Vanha HFC-seos</td><td>≈ 2088</td></tr> <tr><td>R32</td><td>Matalamman GWP:n HFC</td><td>675</td></tr> <tr><td>R290 (propaani)</td><td>Luonnollinen kylmäaine</td><td>3</td></tr> </table> </div></div> <p style="color:var(--muted);font-size:.86rem">*GWP kuvaa ilmastovaikutusta suhteessa hiilidioksidiin. Ero R410A:n ja R290:n välillä on yli 600-kertainen.</p> <h2 style="text-align:left">Aikajana: R410A → R32 → R290</h2> <p>Kehitys etenee selkeästi kohti pienempää ilmastovaikutusta. Lyhyesti, miten kylmäaineet vaihtuvat ilmalämpöpumpuissa:</p> <ul> <li><strong>Noin 10 vuotta vanhat laitteet:</strong> R410A. Uusia R410A-laitteita ei enää myydä.</li> <li><strong>2026–2027:</strong> R32 on tällä hetkellä uusien laitteiden yleisin ja suosituin kylmäaine.</li> <li><strong>1.1.2029:</strong> EU:n F-kaasuasetus kieltää uusien R32-laitteiden (split-ilmalämpöpumput ≤ 12 kW, GWP ≥ 150) valmistuksen ja myynnin EU-alueella.</li> <li><strong>2029 alkaen:</strong> uudet laitteet siirtyvät R290:een (GWP 3). Näitä saa jo nyt – ja valikoima kasvaa nopeasti.</li> </ul> <p class="note">Varmistamme aina ajantasaiset vaatimukset ennen laitesuositusta, sillä asetuksen yksityiskohdat voivat tarkentua.</p> <h2 style="text-align:left">Mitä tämä tarkoittaa sinulle?</h2> <ul> <li><strong>Uutta ostaessa:</strong> matalan GWP:n laite (R32 tai R290) on tulevaisuudenkestävä – kylmäainetta ja huoltoa on saatavilla pitkään.</li> <li><strong>Vanha R410A-laite:</strong> toimii ja sitä saa huoltaa, mutta kylmäaineen hinta ja saatavuus voivat ajan myötä heikentyä.</li> <li><strong>Turvallisuus:</strong> R290 on syttyvää, mutta useimmissa malleissa kylmäainepiiri on kokonaan ulkoyksikössä ja asennus tehdään varoetäisyyksin.</li> </ul> <h2 style="text-align:left">Entä teho pakkasilla?</h2> <p>Tässä R290 todella loistaa. Sen termodynaamiset ominaisuudet ovat erinomaiset, ja se tuottaa korkeamman lämpötilan tehokkaasti myös kovilla pakkasilla. <strong>Jos haet maksimaalista hyötysuhdetta silloin kun pakkanen paukkuu, R290-laite on tällä hetkellä omaa luokkaansa.</strong></p> <p>Vertailun vuoksi: VTT:n testeissä tyypillisen R32-mallin lämpökerroin on noin <strong>2 (−15 °C)</strong> ja laskee kovemmilla pakkasilla, vaikka tehoa riittää vielä −30 °C:ssakin. Erot ovat aina myös laitekohtaisia – kylmäaine on yksi tekijä, ja ratkaisevaa on koko laitteen suunnittelu ja oikea mitoitus – mutta suunta on selvä: kylmän ilmaston huippuhyötysuhde löytyy jatkossa R290-laitteista.</p> <h2 style="text-align:left">Harkitsetko vanhan koneen vaihtoa?</h2> <p>Jos sinulla on noin 10 vuotta vanha R410A-kone, joka ei jaksa pakkasilla, vaihto uuteen R290-laitteeseen on usein erittäin kannattava. Kokosimme merkit vaihdolle ja konkreettiset esimerkkilaskelmat säästöistä omaan artikkeliinsa: <a href="/hyva-tietaa/miksi-vaihtaa-vanha-ilmalampopumppu">Miksi 10 vuotta vanha ilmalämpöpumppu kannattaa vaihtaa</a>.</p> <h2 style="text-align:left">Usein kysyttyä</h2> ${faq.map((f) => renderTemplate`<div style="margin-bottom:14px"> <h3 style="margin-bottom:.2em">${f.q}</h3> <p style="color:var(--muted)">${f.a}</p> </div>`)} <p style="color:var(--muted);font-size:.86rem;margin-top:28px">Päivitetty ${updated}. Autamme valitsemaan tulevaisuudenkestävän laitteen.</p> <p style="margin-top:22px"><a href="/hyva-tietaa">← Takaisin Hyvä tietää -osioon</a></p> </div> </section> ${renderComponent($$result2, "Cta", $$Cta, { "title": "Kysy lis\xE4\xE4 kylm\xE4aineista ja laitevalinnasta" })} ` })}`;
}, "/sessions/jolly-bold-dijkstra/mnt/Ilmal\xE4mp\xF6pumppu liiketoiminta/virelampo-sivut/src/pages/hyva-tietaa/kylmaaineet-r410a-r32-r290.astro", void 0);

const $$file = "/sessions/jolly-bold-dijkstra/mnt/Ilmalämpöpumppu liiketoiminta/virelampo-sivut/src/pages/hyva-tietaa/kylmaaineet-r410a-r32-r290.astro";
const $$url = "/hyva-tietaa/kylmaaineet-r410a-r32-r290";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$KylmaaineetR410AR32R290,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
