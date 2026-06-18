import { c as createAstro, a as createComponent, m as maybeRenderHead, b as renderTemplate } from './astro/server_aS10jzg8.mjs';
import 'kleur/colors';
import 'clsx';
import { S as SITE } from './config_Bdb_4Kqe.mjs';

const $$Astro = createAstro("https://virelampo.fi");
const $$Cta = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cta;
  const { title = "Pyyd\xE4 maksuton tarjous", text = SITE.responsePromise } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="container"> <div class="ctaband"> <h2>${title}</h2> <p>${text}</p> <div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap"> <a href="/yhteys" class="btn btn--cta">Pyydä tarjous →</a> ${SITE.showPhone} </div> </div> </div> </section>`;
}, "/sessions/jolly-bold-dijkstra/mnt/Ilmal\xE4mp\xF6pumppu liiketoiminta/virelampo-sivut/src/components/Cta.astro", void 0);

export { $$Cta as $ };
