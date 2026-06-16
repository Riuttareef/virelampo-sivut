// =====================================================================
//  SIVUSTON PERUSTIEDOT – muokkaa kaikki yrityskohtainen tästä yhdestä
//  paikasta. Kun yritysnimi, puhelin ja domain ovat selvillä, päivitä
//  alla olevat arvot, niin ne vaihtuvat koko sivustolle.
// =====================================================================

export const SITE = {
  // Yrityksen nimi:
  name: "Virelämpö",
  // Lyhyt iskulause (näkyy herossa ja title-tageissa):
  tagline: "Ilmalämpöpumput jäähdytykseen ja lämmitykseen",
  // Puhelin piilotettu kunnes oikea numero saadaan: laita numero alle ja
  // vaihda showPhone: true, niin kaikki puhelin/WhatsApp-napit palaavat.
  showPhone: false,
  phone: "010 000 0000",
  phoneHref: "tel:+358100000000",
  email: "info@virelampo.fi",
  whatsapp: "https://wa.me/358100000000",
  // Domain ilman protokollaa (käytetään näytöllä):
  domain: "virelampo.fi",
  // Some-jakokuva (og:image). Vaihda mieluiten 1200×630 px brändikuvaan.
  ogImage: "/logo.png",
  // Toiminta-alue lyhyesti:
  areaShort: "Toiminta-alueet: Varsinais-Suomi, Pirkanmaa ja Uusimaa",
  // Y-tunnus (placeholder):
  businessId: "0000000-0",
  // Vastauslupaus:
  responsePromise: "Vastaamme yleensä saman päivän aikana.",
  // Lähtöhinta-arvio perusasennukselle (€) – yleisnäkymä, alin aluehinta.
  // Aluekohtaiset hinnat määritellään AREAS-listassa alla.
  basePriceFrom: 590,
  // Ovatko REVIEWS oikeita asiakasarvosteluja? Pidä false niin kauan kuin
  // arvostelut ovat placeholdereita – fiktiivisten arvostelujen merkitseminen
  // hakukoneille (AggregateRating) voi johtaa Google-sanktioon.
  realReviews: false,
};

// =====================================================================
//  MARKKINA-ALUEET JA HINTATASOT
//  Kolme toiminta-aluetta. Jokainen kaupunki (LOCATIONS) kuuluu yhteen
//  alueeseen, ja alue määrää perusasennuksen lähtöhinnan + matkalisän.
//  HUOM: hinnat ovat luonnoksia – aseta omat aluekohtaiset hintasi tähän.
// =====================================================================
// Järjestys: halvimmasta kalleimpaan (näkyy hinnoittelusivulla tässä järjestyksessä).
export const AREAS = {
  varsinaissuomi: { label: "Varsinais-Suomi", basePriceFrom: 590 },
  pirkanmaa:      { label: "Pirkanmaa",       basePriceFrom: 690 },
  uusimaa:        { label: "Uusimaa",         basePriceFrom: 790 },
} as const;

export type AreaKey = keyof typeof AREAS;

// =====================================================================
//  KAUPUNKIKOHTAISET LANDING PAGET
//  Jokaiselle kaupungille generoidaan oma sivu osoitteeseen
//  /alueet/<slug>. TÄRKEÄÄ: jokaisen kaupungin sisällön on oltava
//  aidosti uniikkia (ei vain nimen vaihtoa) – muuten Google tulkitsee
//  sivut "doorway"-sivuiksi ja jättää indeksoimatta. lead + body +
//  highlights on kirjoitettu kaupungin omien piirteiden mukaan.
// =====================================================================
export type Location = {
  slug: string;
  name: string;        // taivutettava perusmuoto otsikoihin
  inessive: string;    // "-ssa/-ssä" muoto ("Helsingissä")
  area: AreaKey;
  lead: string;        // 1 lause hero/meta-description
  body: string;        // uniikki kappale paikallisista piirteistä
  highlights: string[];// 3 paikallista nostoa
};

export const LOCATIONS: Location[] = [
  // ---- Uusimaa ----
  {
    slug: "helsinki", name: "Helsinki", inessive: "Helsingissä", area: "uusimaa",
    lead: "Ilmalämpöpumpun asennus Helsingissä – kerros- ja rivitaloihin jäähdytykseen, omakotitaloihin myös lämmitykseen.",
    body: "Helsingin tiivis kerrostalokanta ja kantakaupungin tiili- ja betonijulkisivut vaativat usein timanttiporausta ja taloyhtiön luvan. Hoidamme läpiviennit siististi ja pölyttömästi, ja autamme lupa-asioissa. Kerrostaloasunnoissa keskitytään yleensä jäähdytykseen, omakoti- ja paritaloissa myös lämmitykseen.",
    highlights: [
      "Taloyhtiön lupaprosessi tuttu – autamme hakemuksessa",
      "Timanttiporaus tiili- ja betoniseinään pölyttömästi",
      "Kantakaupungin ahtaat pihat ja parvekkeet huomioitu sijoittelussa",
    ],
  },
  {
    slug: "espoo", name: "Espoo", inessive: "Espoossa", area: "uusimaa",
    lead: "Ilmalämpöpumpun asennus Espoossa omakoti-, pari- ja rivitaloihin – jäähdytys ja lämmitys.",
    body: "Espoon laaja omakoti- ja rivitalokanta Leppävaarasta Tapiolaan ja Espoonlahteen sopii erinomaisesti ilmalämpöpumpulle sekä jäähdytykseen että lämmitykseen. Uudehko talokanta tarkoittaa usein suoraviivaisen puuseinäläpiviennin ja siistin asennuksen.",
    highlights: [
      "Omakoti- ja rivitalojen lämmitys + jäähdytys",
      "Uudehko talokanta – nopea puuseinäläpivienti",
      "Oikean tehon mitoitus talon koon mukaan",
    ],
  },
  {
    slug: "vantaa", name: "Vantaa", inessive: "Vantaalla", area: "uusimaa",
    lead: "Ilmalämpöpumpun asennus Vantaalla – omakotitaloihin lämmitykseen ja jäähdytykseen.",
    body: "Vantaan omakotivaltaiset alueet Tikkurilasta Korsoon hyötyvät ilmalämpöpumpun tuomasta lämmityssäästöstä ja kesäjäähdytyksestä. Lentokentän läheisyydessä ulkoyksikön sijoittelussa kiinnitämme huomiota ääneen ja tärinänvaimennukseen.",
    highlights: [
      "Omakotitalojen lämmityskulujen pienennys",
      "Hiljainen ulkoyksikön sijoitus – tärinänvaimentimet",
      "Tehokas kesäjäähdytys makuuhuoneisiin",
    ],
  },
  {
    slug: "kirkkonummi", name: "Kirkkonummi", inessive: "Kirkkonummella", area: "uusimaa",
    lead: "Ilmalämpöpumpun asennus Kirkkonummella – omakotitalot ja rannikon vapaa-ajan asunnot.",
    body: "Kirkkonummen omakotitalot ja rannikon vapaa-ajan asunnot ovat tyypillistä ilmalämpöpumppukohdetta: pumppu tuo peruslämmön myös silloin kun paikalla ei olla, ja estää kosteus- ja homevauriot. Sovimme matkat ja aikataulut joustavasti laajalle alueelle.",
    highlights: [
      "Vapaa-ajan asuntojen peruslämpö ja kosteudenhallinta",
      "Joustava aikataulu laajalle haja-asutusalueelle",
      "Rannikon olosuhteisiin sopiva ulkoyksikön sijoitus",
    ],
  },
  {
    slug: "porvoo", name: "Porvoo", inessive: "Porvoossa", area: "uusimaa",
    lead: "Ilmalämpöpumpun asennus Porvoossa – vanhaan puutalokantaan ja uudempiin omakotitaloihin.",
    body: "Porvoon vaihteleva talokanta vanhasta puutalokaupungista uudempiin asuinalueisiin sopii hyvin ilmalämpöpumpulle. Puurakenteinen seinä tarkoittaa usein nopean ja siistin läpiviennin. Vanhemmissa kohteissa mietimme sijoittelun julkisivua kunnioittaen.",
    highlights: [
      "Puuseinäläpivienti nopeasti ja siististi",
      "Julkisivua kunnioittava sijoittelu vanhoissa kohteissa",
      "Lämmityssäästö suorasta sähkö- tai öljylämmityksestä",
    ],
  },
  // ---- Varsinais-Suomi ----
  {
    slug: "turku", name: "Turku", inessive: "Turussa", area: "varsinaissuomi",
    lead: "Ilmalämpöpumpun asennus Turussa – kerros-, rivi- ja omakotitaloihin jäähdytykseen ja lämmitykseen.",
    body: "Turun jokilaakson kerros- ja omakotitalokanta sekä kostea meri-ilmasto tekevät ilmalämpöpumpusta tehokkaan ratkaisun niin lämmitykseen kuin sisäilman kosteudenhallintaan. Kerrostalokohteissa autamme taloyhtiön luvassa, omakotitaloissa mitoitamme tehon talon mukaan.",
    highlights: [
      "Kostean meri-ilmaston sisäilman kosteudenhallinta",
      "Taloyhtiön lupaprosessi tuttu kerrostalokohteissa",
      "Tehon mitoitus jokilaakson vanhempaan kantaan",
    ],
  },
  {
    slug: "kaarina", name: "Kaarina", inessive: "Kaarinassa", area: "varsinaissuomi",
    lead: "Ilmalämpöpumpun asennus Kaarinassa – kasvavan kunnan omakoti- ja rivitaloihin.",
    body: "Kaarina on Turun seudun kasvavia omakotikuntia, ja uudehko talokanta sopii erinomaisesti ilmalämpöpumpulle sekä lämmitykseen että jäähdytykseen. Lyhyet etäisyydet Turun seudulla pitävät matkakulut maltillisina.",
    highlights: [
      "Uudehkojen omakotitalojen lämmitys + jäähdytys",
      "Lyhyet etäisyydet – maltilliset matkakulut",
      "Oikean mallin valinta talon kokoon",
    ],
  },
  {
    slug: "raisio", name: "Raisio", inessive: "Raisiossa", area: "varsinaissuomi",
    lead: "Ilmalämpöpumpun asennus Raisiossa – omakoti- ja rivitaloihin lämmitykseen ja jäähdytykseen.",
    body: "Raision asuinalueet ovat lähellä Turkua, joten asennus onnistuu joustavasti ja edullisin matkakuluin. Ilmalämpöpumppu leikkaa lämmityskuluja suorasähkötaloissa ja tuo kaivatun jäähdytyksen kesähelteille.",
    highlights: [
      "Lämmityskulujen leikkaus suorasähkötaloissa",
      "Joustava asennus lähellä Turkua",
      "Tehokas kesäjäähdytys",
    ],
  },
  {
    slug: "naantali", name: "Naantali", inessive: "Naantalissa", area: "varsinaissuomi",
    lead: "Ilmalämpöpumpun asennus Naantalissa – omakotitalot ja saariston vapaa-ajan asunnot.",
    body: "Naantalin saaristo ja rannikon vapaa-ajan asunnot ovat ihanteellisia ilmalämpöpumppukohteita: peruslämpö pysyy päällä myös tyhjillään, mikä estää kosteusvauriot. Sovimme saaristokohteiden aikataulut ja kuljetukset etukäteen.",
    highlights: [
      "Vapaa-ajan asuntojen peruslämpö ympäri vuoden",
      "Saaristokohteiden logistiikka sovitaan etukäteen",
      "Kosteus- ja homevaurioiden ennaltaehkäisy",
    ],
  },
  {
    slug: "salo", name: "Salo", inessive: "Salossa", area: "varsinaissuomi",
    lead: "Ilmalämpöpumpun asennus Salossa – omakotitaloihin laajalla alueella.",
    body: "Salon laaja maaseutumainen alue koostuu pääosin omakotitaloista, joissa ilmalämpöpumppu tuo merkittävät lämmityssäästöt suorasähkö- ja öljylämmitykseen verrattuna. Sovimme matkat ja asennusajat joustavasti koko Salon alueelle.",
    highlights: [
      "Merkittävä lämmityssäästö öljy-/sähkölämmitykseen",
      "Joustavat asennusajat laajalle alueelle",
      "Tehon mitoitus suuriinkin omakotitaloihin",
    ],
  },
  // ---- Tampereen seutu (Pirkanmaa) ----
  {
    slug: "tampere", name: "Tampere", inessive: "Tampereella", area: "pirkanmaa",
    lead: "Ilmalämpöpumpun asennus Tampereella – kerros-, rivi- ja omakotitaloihin jäähdytykseen ja lämmitykseen.",
    body: "Tampereen järvien välinen sijainti ja vaihteleva talokanta keskustan kerrostaloista esikaupunkien omakotitaloihin sopivat hyvin ilmalämpöpumpulle. Keskustakohteissa hoidamme taloyhtiön luvan ja siistin läpiviennin, omakotitaloissa optimoimme tehon ja sijoittelun.",
    highlights: [
      "Taloyhtiön lupa ja siisti läpivienti keskustakohteissa",
      "Tehon mitoitus esikaupunkien omakotitaloihin",
      "Kesäjäähdytys ja talvilämmitys samalla laitteella",
    ],
  },
  {
    slug: "nokia", name: "Nokia", inessive: "Nokialla", area: "pirkanmaa",
    lead: "Ilmalämpöpumpun asennus Nokialla – omakoti- ja rivitaloihin lämmitykseen ja jäähdytykseen.",
    body: "Nokian omakotivaltaiset asuinalueet hyötyvät ilmalämpöpumpun lämmityssäästöstä, ja lyhyt etäisyys Tampereelta pitää matkakulut pieninä. Mitoitamme laitteen talon koon ja lämmitystarpeen mukaan.",
    highlights: [
      "Omakotitalojen lämmityskulujen pienennys",
      "Lyhyt matka Tampereelta – pienet matkakulut",
      "Laitteen mitoitus lämmitystarpeen mukaan",
    ],
  },
  {
    slug: "ylojarvi", name: "Ylöjärvi", inessive: "Ylöjärvellä", area: "pirkanmaa",
    lead: "Ilmalämpöpumpun asennus Ylöjärvellä – kasvavan kunnan omakotitaloihin.",
    body: "Ylöjärvi on Tampereen seudun kasvavia omakotikuntia, ja uudehko talokanta sopii suoraviivaiseen ja siistiin ilmalämpöpumppuasennukseen. Pumppu tuo sekä lämmityssäästöt että kesäjäähdytyksen.",
    highlights: [
      "Uudehkon omakotikannan suoraviivainen asennus",
      "Lämmityssäästö ja kesäjäähdytys yhdellä laitteella",
      "Oikean tehon valinta talon kokoon",
    ],
  },
  {
    slug: "kangasala", name: "Kangasala", inessive: "Kangasalla", area: "pirkanmaa",
    lead: "Ilmalämpöpumpun asennus Kangasalla – omakotitalot ja järvenrannan vapaa-ajan asunnot.",
    body: "Kangasalan järvimaisemien omakotitalot ja vapaa-ajan asunnot ovat tyypillistä ilmalämpöpumppukohdetta. Vapaa-ajan asunnoissa pumppu pitää peruslämmön päällä ja estää kosteusvauriot, vakituisissa kodeissa se leikkaa lämmityskuluja.",
    highlights: [
      "Vapaa-ajan asuntojen peruslämpö ja kosteudenhallinta",
      "Lämmityssäästö vakituisiin koteihin",
      "Joustava aikataulu järvenranta-alueille",
    ],
  },
  {
    slug: "pirkkala", name: "Pirkkala", inessive: "Pirkkalassa", area: "pirkanmaa",
    lead: "Ilmalämpöpumpun asennus Pirkkalassa – omakoti- ja rivitaloihin lämmitykseen ja jäähdytykseen.",
    body: "Pirkkalan tiiviit omakoti- ja rivitaloalueet lähellä Tamperetta ovat helppoja ja nopeita asennuskohteita. Ilmalämpöpumppu tuo lämmityssäästöt ja tehokkaan jäähdytyksen makuuhuoneisiin kesähelteillä.",
    highlights: [
      "Nopea asennus tiiviillä asuinalueilla",
      "Lämmityssäästö ja kesäjäähdytys",
      "Hiljainen ulkoyksikön sijoitus",
    ],
  },
];

// Apufunktio: kaupungin perushinta alueen mukaan
export function priceForLocation(loc: Location): number {
  return AREAS[loc.area].basePriceFrom;
}

// =====================================================================
//  HINNOITTELUN SISÄLTÖ – yksi totuuden lähde hinnoittelu- ja
//  kaupunkisivuille. Hinnat ovat luonnoksia; aseta omat hintasi.
// =====================================================================
// Mitä perusasennus sisältää:
export const PERUSASENNUS_SISALTYY = [
  "Laitteen vastaanotto ja pakkauksen purku asennuskohteessa",
  "Sisä- ja ulkoyksikön asennus samaan kerrokseen, enintään 5 m putkitus",
  "Läpivienti puuseinään, huolellinen tiivistys",
  "Kylmäaineputket, sähkö ja kondenssivesi siistissä valkoisessa suojakourussa",
  "Ulkoyksikkö seinätelineelle tärinänvaimentimin",
  "Sähköistys maadoitetusta pistorasiasta (max 2 m)",
  "Kylmäputkiston tyhjiöinti ja tiiveyskoe",
  "Käyttöönotto, käytönopastus ja kirjalliset käyttöohjeet",
  "Työalueen siivous ja pakkausjätteiden poisvienti",
  "Matkakulut sovitulla toiminta-alueella",
];

// Lisätyöt [nimi, hinta, sisältö]. Kattava lista, koska lisätyöt koskevat
// valtaosaa asennuksista. Hinnat luonnoksia – aseta omat hintasi.
export const LISATYOT: [string, string, string][] = [
  ["Kylmäainevedot yli 5 m", "40 €/m", "Pidemmät putkivedot sisä- ja ulkoyksikön välillä"],
  ["Ulkoyksikön maateline + pohjan tasoitus", "alk. 80 €", "Kun seinäkiinnitys ei ole mahdollista"],
  ["Erivärinen putkikotelointi", "alk. 50 €", "Valkoisen suojakourun sijaan julkisivuun sopiva sävy"],
  ["Asennus yli 2,5 m korkeuteen", "alk. 150 €", "Vaatii telineet tai nostimen, turvalliset työjärjestelyt"],
  ["Timanttiporaus betoni-/tiili-/kiviseinään", "250–350 € / reikä", "Siisti, pölytön läpivienti kovaan seinään"],
  ["Kondenssiveden viemäröinti tai sulanapitokaapeli", "alk. 90 €", "Hallittu vedenpoisto, talvella sulanapitokaapeli ulkoyksikön altaaseen"],
  ["Vanhan laitteen purku ja kierrätys", "alk. 80 €", "Vanhan pumpun irrotus, kylmäaineen talteenotto ja asianmukainen kierrätys"],
  ["Lisäsisäyksikkö (multisplit)", "alk. 350 €", "Toinen tai useampi sisäyksikkö samaan ulkoyksikköön"],
  ["Muut lisätyöt tuntityönä", "85 €/h", "Erikoissähkötyöt, pidemmät vedenpoistot ym."],
  ["Huolto", "alk. 150 €", "Puhdistus, suodattimet ja toiminnan tarkistus"],
];

export const NAV = [
  { href: "/", label: "Etusivu" },
  { href: "/asennus", label: "Asennus" },
  { href: "/huolto", label: "Huolto" },
  { href: "/hinnoittelu", label: "Hinnoittelu" },
  { href: "/alueet", label: "Alueet" },
  { href: "/hyva-tietaa", label: "Hyvä tietää" },
  { href: "/yhteys", label: "Yhteys" },
];

// Luottamuskärjet (hero alapuolelle):
export const TRUST = [
  { title: "Tukes-pätevä & vakuutettu", text: "Kylmäalan pätevyys ja S2-sähköpätevyys. Pätevyyden voi tarkistaa Tukesin rekisteristä." },
  { title: "Kiinteä hinta etukäteen", text: "Selkeät asennuspaketit ilman yllätyslaskuja." },
  { title: "Kotitalousvähennys huomioitu", text: "Erittelemme työn osuuden valmiiksi vähennystä varten." },
];

// Arvostelut (placeholderit – korvaa oikeilla, kun niitä kertyy):
export const REVIEWS = [
  { name: "Tyytyväinen asiakas", text: "Nopea ja siisti asennus, ei jälkiä seinissä. Suosittelen.", stars: 5 },
  { name: "Omakotitalon omistaja", text: "Hinta oli juuri se mitä luvattiin. Selkeä opastus käyttöön.", stars: 5 },
  { name: "Rivitaloasukas", text: "Ammattitaitoista työtä, betoniseinän läpivienti hoitui siististi.", stars: 5 },
];
