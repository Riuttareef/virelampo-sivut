// Aluesivujen sisältö. Lisää tai muokkaa alueita vapaasti – jokainen
// objekti synnyttää oman sivunsa osoitteeseen /alueet/<slug>.
// Kirjoita jokaiseen AITO paikallinen teksti (älä kopioi) – Google
// arvostaa uniikkia sisältöä ja paikallishaku palkitsee siitä.

export interface Alue {
  slug: string;
  name: string;        // esim. "Espoo"
  title: string;       // selaimen otsikko / H1
  lead: string;        // lyhyt johdanto
  kaupunginosat: string[];
  body: string[];      // kappaleet
}

export const ALUEET: Alue[] = [
  {
    slug: "espoo",
    name: "Espoo",
    title: "Ilmalämpöpumpun asennus Espoossa",
    lead: "Asennan ilmalämpöpumput ammattitaidolla kaikkialla Espoossa – pientaloalueilta kerrostaloihin.",
    kaupunginosat: ["Leppävaara", "Tapiola", "Espoon keskus", "Matinkylä", "Kauklahti", "Kalajärvi"],
    body: [
      "Espoo on pientalovaltaista aluetta, jossa ilmalämpöpumppu on suosittu tapa pienentää lämmityskuluja ja tuoda kesäksi jäähdytys. Hoidan asennuksen alusta loppuun: läpiviennit siististi timanttiporauksella, putkivedot, sähköistys ja käytön opastus.",
      "Saat kiinteän hinnan etukäteen ja erittelen työn osuuden valmiiksi kotitalousvähennystä varten. Pyydä maksuton tarjous – kerro talotyyppi ja toivottu sijainti laitteelle, niin saat arvion nopeasti.",
    ],
  },
  {
    slug: "vantaa",
    name: "Vantaa",
    title: "Ilmalämpöpumpun asennus Vantaalla",
    lead: "Nopea ja siisti ilmalämpöpumpun asennus Vantaan omakoti- ja rivitaloihin.",
    kaupunginosat: ["Tikkurila", "Myyrmäki", "Korso", "Koivukylä", "Hakunila", "Kivistö"],
    body: [
      "Vantaalla on paljon pientaloja, joihin ilmalämpöpumppu sopii erinomaisesti. Teen asennukset huolellisesti ja sovitussa aikataulussa – kotisi pysyy siistinä myös betoni- ja tiiliseinien läpivienneissä.",
      "Kerron etukäteen mitä asennus sisältää ja mitä se maksaa. Ota yhteyttä, niin sovitaan sinulle sopiva aika.",
    ],
  },
  {
    slug: "helsinki",
    name: "Helsinki",
    title: "Ilmalämpöpumpun asennus Helsingissä",
    lead: "Ilmalämpöpumpun asennus Helsingin pientaloihin ja rivitaloihin – luotettavasti ja sovittuun hintaan.",
    kaupunginosat: ["Pakila", "Tapanila", "Puistola", "Laajasalo", "Konala", "Pukinmäki"],
    body: [
      "Helsingin pientaloalueilla ilmalämpöpumppu on tehokas tapa leikata lämmityskuluja ja parantaa kesän viilennystä. Asennan laitteen siististi ja ammattitaidolla, ja huolehdin että läpiviennit ja putkivedot tehdään huolellisesti.",
      "Pyydä maksuton tarjous. Erittelen työn osuuden laskuun, jotta kotitalousvähennyksen hakeminen on sinulle helppoa.",
    ],
  },
  {
    slug: "kehyskunnat",
    name: "Kehyskunnat",
    title: "Ilmalämpöpumpun asennus kehyskunnissa",
    lead: "Palvelen myös pääkaupunkiseudun kehyskuntia – vahva pientaloalue, jossa ilmalämpöpumpulle on kova kysyntä.",
    kaupunginosat: ["Kirkkonummi", "Nurmijärvi", "Tuusula", "Järvenpää", "Kerava", "Sipoo"],
    body: [
      "Kehyskunnissa on runsaasti omakotitaloja, joissa ilmalämpöpumppu tuo merkittävät säästöt lämmityskuluihin. Tulen paikan päälle, asennan laitteen siististi ja opastan käytössä.",
      "Kerro asuinkuntasi ja talotyyppi tarjouspyynnössä, niin saat arvion nopeasti. Kiinteä hinta etukäteen, ei yllätyksiä.",
    ],
  },
];
