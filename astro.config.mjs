import { defineConfig } from 'astro/config';

// Sivuston pääosoite (ASCII-domain). Sitemap generoidaan src/pages/sitemap.xml.ts.
export default defineConfig({
  site: 'https://virelampo.fi',
});
