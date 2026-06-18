import { L as LOCATIONS } from '../chunks/config_Bdb_4Kqe.mjs';
export { renderers } from '../renderers.mjs';

const staticPaths = [
  "",
  "asennus",
  "huolto",
  "hinnoittelu",
  "alueet",
  "tietoa",
  "yhteys",
  "hyva-tietaa",
  "hyva-tietaa/lampopumpun-valinta",
  "hyva-tietaa/energiansaasto-laskelmat",
  "hyva-tietaa/kylmaaineet-r410a-r32-r290",
  "hyva-tietaa/miksi-vaihtaa-vanha-ilmalampopumppu",
  "hyva-tietaa/ilmalampopumppu-kerrostaloon"
];
const GET = ({ site }) => {
  const base = (site?.href ?? "https://virelampo.fi/").replace(/\/$/, "");
  const urls = [
    ...staticPaths.map((p) => p ? `${base}/${p}` : `${base}/`),
    ...LOCATIONS.map((l) => `${base}/alueet/${l.slug}`)
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
` + urls.map((u) => `  <url><loc>${u}</loc></url>`).join("\n") + `
</urlset>
`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
