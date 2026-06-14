# Ilmalämpöpumppuyrityksen nettisivut (Astro)

Nopea, mobiili edellä rakennettu sivusto pääkaupunkiseudun markkinalle. Vain asennus -malli, aluesivut paikallis-SEO:ta varten, tarjouspyyntölomake.

## Käyttöönotto

```bash
cd nettisivut
npm install        # asentaa riippuvuudet (vain ensimmäisellä kerralla)
npm run dev        # avaa kehitysversio: http://localhost:4321
```

Tuotantoversio:

```bash
npm run build      # rakentaa staattiset sivut kansioon dist/
npm run preview    # esikatsele tuotantoversio paikallisesti
```

## Mistä muokata mitä

| Haluan muuttaa... | Tiedosto |
|---|---|
| Yrityksen nimi, puhelin, sähköposti, domain, lähtöhinta | `src/config.ts` |
| Luottamuskärjet ja arvostelut | `src/config.ts` (TRUST, REVIEWS) |
| Aluesivut (Espoo, Vantaa, Helsinki, kehyskunnat...) | `src/data/alueet.ts` |
| Värit ja ulkoasu | `src/styles/global.css` (ylhäällä muuttujat) |
| Sivujen tekstit | `src/pages/*.astro` |
| Domain (SEO/sitemap) | `astro.config.mjs` |

## Vaihda yrityksen tiedot

Kaikki yrityskohtainen on koottu tiedostoon **`src/config.ts`**. Kun yritysnimi,
puhelin ja domain ovat selvillä, päivitä arvot siellä – ne vaihtuvat koko sivustolle.
Päivitä myös `astro.config.mjs`:n `site`-osoite ja `public/robots.txt`.

## Julkaisu (hosting)

Sivusto on staattinen, joten se voidaan julkaista ilmaiseksi esim.
**Netlify**, **Vercel** tai **Cloudflare Pages** -palvelussa. Yhdistä Git-repo,
niin sivut päivittyvät automaattisesti.

### Tarjouspyyntölomake

Lomake (`src/pages/yhteys.astro`) on valmiiksi yhteensopiva **Netlify Forms** -palvelun
kanssa (`data-netlify="true"`) ja ohjaa lähetyksen jälkeen sivulle `/kiitos`.
Muilla alustoilla vaihda lomakkeen `action` osoittamaan lomakepalveluun
(esim. Formspree) tai omaan päätepisteeseen.

## Vielä tehtävää ennen julkaisua

- [ ] Vaihda yritysnimi, puhelin, sähköposti, Y-tunnus ja domain (`src/config.ts`)
- [ ] Lisää oikeat asiakasarvostelut
- [ ] Lisää omat valokuvat asennuksista (kansio `public/`)
- [ ] Tarkista kotitalousvähennys-% ajantasaiseksi
- [ ] Luo Google-yritysprofiili ja linkitä se
- [ ] Lisää tietosuojaseloste ja evästeilmoitus
