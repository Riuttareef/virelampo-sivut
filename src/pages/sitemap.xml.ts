import type { APIRoute } from 'astro';
import { LOCATIONS } from '../config';

// Dynaaminen sitemap. Domain tulee astro.config.mjs:n site-arvosta.
// Staattiset sivut + kaikki kaupunkikohtaiset landing paget (LOCATIONS).
const staticPaths = [
  '', 'asennus', 'huolto', 'hinnoittelu', 'alueet', 'tietoa', 'yhteys',
  'hyva-tietaa',
  'hyva-tietaa/lampopumpun-valinta',
  'hyva-tietaa/energiansaasto-laskelmat',
  'hyva-tietaa/kylmaaineet-r410a-r32-r290',
  'hyva-tietaa/miksi-vaihtaa-vanha-ilmalampopumppu',
  'hyva-tietaa/ilmalampopumppu-kerrostaloon',
];

export const GET: APIRoute = ({ site }) => {
  const base = (site?.href ?? 'https://virelampo.fi/').replace(/\/$/, '');
  const urls = [
    ...staticPaths.map((p) => (p ? `${base}/${p}` : `${base}/`)),
    ...LOCATIONS.map((l) => `${base}/alueet/${l.slug}`),
  ];
  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n') +
    `\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
