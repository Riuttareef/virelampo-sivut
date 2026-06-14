import type { APIRoute } from 'astro';
import { ALUEET } from '../data/alueet';

// Kevyt, riippuvuusvapaa sitemap. Päivittyy automaattisesti kun aluesivuja
// lisätään (src/data/alueet.ts). Domain tulee astro.config.mjs:n site-arvosta.
const staticPaths = ['', 'asennus', 'huolto', 'hinnoittelu', 'tietoa', 'yhteys', 'alueet'];

export const GET: APIRoute = ({ site }) => {
  const base = (site?.href ?? 'https://virelampo.fi/').replace(/\/$/, '');
  const urls = [
    ...staticPaths.map((p) => (p ? `${base}/${p}` : `${base}/`)),
    ...ALUEET.map((a) => `${base}/alueet/${a.slug}`),
  ];
  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n') +
    `\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
