import type { Plugin } from 'vite';
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import {
  getAllSitemapRoutes,
  SITE_BASE_URL,
  type SitemapRoute,
} from './src/config/sitemap-routes';

const buildXml = (routes: SitemapRoute[], buildDate: string): string => {
  const urls = routes
    .map((route) => {
      const loc = `${SITE_BASE_URL}${route.path === '/' ? '/' : route.path}`;
      const lastmod = route.lastmod || buildDate;
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
};

/**
 * Genereert public/sitemap.xml automatisch bij dev-start en build,
 * op basis van src/config/sitemap-routes.ts.
 */
export const sitemapPlugin = (): Plugin => {
  const generate = () => {
    const buildDate = new Date().toISOString().slice(0, 10);
    const xml = buildXml(getAllSitemapRoutes(), buildDate);
    const outPath = resolve(process.cwd(), 'public/sitemap.xml');
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, xml, 'utf-8');
  };

  return {
    name: 'lovable-sitemap',
    apply: () => true,
    buildStart() {
      generate();
    },
    configureServer() {
      generate();
    },
  };
};

export default sitemapPlugin;
