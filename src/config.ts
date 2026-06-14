// =====================================================================
//  SIVUSTON PERUSTIEDOT – muokkaa kaikki yrityskohtainen tästä yhdestä
//  paikasta. Kun yritysnimi, puhelin ja domain ovat selvillä, päivitä
//  alla olevat arvot, niin ne vaihtuvat koko sivustolle.
// =====================================================================

export const SITE = {
  // Yrityksen nimi:
  name: "Virelämpö",
  // Lyhyt iskulause (näkyy herossa ja title-tageissa):
  tagline: "Ilmalämpöpumppujen asennus pääkaupunkiseudulla",
  // Puhelin piilotettu kunnes oikea numero saadaan: laita numero alle ja
  // vaihda showPhone: true, niin kaikki puhelin/WhatsApp-napit palaavat.
  showPhone: false,
  phone: "010 000 0000",
  phoneHref: "tel:+358100000000",
  email: "info@virelampo.fi",
  whatsapp: "https://wa.me/358100000000",
  // Domain ilman protokollaa (käytetään näytöllä):
  domain: "virelampo.fi",
  // Toiminta-alue lyhyesti:
  areaShort: "Helsinki · Espoo · Vantaa · kehyskunnat",
  // Y-tunnus (placeholder):
  businessId: "0000000-0",
  // Vastauslupaus:
  responsePromise: "Vastaamme yleensä saman päivän aikana.",
  // Lähtöhinta-arvio perusasennukselle (€):
  basePriceFrom: 790,
};

export const NAV = [
  { href: "/", label: "Etusivu" },
  { href: "/asennus", label: "Asennus" },
  { href: "/huolto", label: "Huolto" },
  { href: "/hinnoittelu", label: "Hinnoittelu" },
  { href: "/alueet", label: "Alueet" },
  { href: "/tietoa", label: "Tietoa" },
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
  { name: "Asiakas, Espoo", text: "Nopea ja siisti asennus, ei jälkiä seinissä. Suosittelen.", stars: 5 },
  { name: "Asiakas, Vantaa", text: "Hinta oli juuri se mitä luvattiin. Selkeä opastus käyttöön.", stars: 5 },
  { name: "Asiakas, Helsinki", text: "Ammattitaitoista työtä, betoniseinän läpivienti hoitui siististi.", stars: 5 },
];
