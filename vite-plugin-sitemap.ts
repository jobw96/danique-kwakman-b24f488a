import type { Plugin } from 'vite';
import { writeFileSync, mkdirSync, readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { execFileSync } from 'node:child_process';

export const SITE_BASE_URL = 'https://daniquekwakman.nl';

/** Routes die nooit in de sitemap horen (redirects, 404, aliassen, juridische pagina's). */
const EXCLUDED_PATHS = new Set(['/darmtherapie-traject', '/privacy', '/terms', '/cookie-policy']);

const root = process.cwd();
const readIfExists = (p: string) => (existsSync(p) ? readFileSync(p, 'utf-8') : '');

/** Alle publieke paden uit routeTree.gen.ts (FileRoutesByTo). */
const getRoutePaths = (): string[] => {
  const src = readIfExists(resolve(root, 'src/routeTree.gen.ts'));
  const block = src.match(/export interface FileRoutesByTo \{([\s\S]*?)\n\}/);
  if (!block) return [];
  return [...block[1].matchAll(/'([^']+)':/g)].map((m) => m[1]);
};

/** Route-pad → bronbestand (voor git lastmod + noindex/canonical-detectie). */
const routeFile = (path: string): string | null => {
  const base = path === '/' ? 'index' : path.replace(/^\//, '');
  const candidates = [
    `src/routes/_layout/${base}.tsx`,
    `src/routes/_layout/${base}/index.tsx`,
    `src/routes/${base}.tsx`,
    `src/routes/_layout/index.tsx`,
  ];
  for (const c of candidates) {
    const abs = resolve(root, c);
    if (existsSync(abs)) return abs;
  }
  return null;
};

/** Slugs uit een databestand halen zonder het te importeren (assets!). */
const slugsFrom = (file: string): string[] => {
  const src = readIfExists(resolve(root, file));
  return [...src.matchAll(/^\s*slug:\s*'([^']+)'/gm)].map((m) => m[1]);
};

/** Publicatiedata van blogposts (POST_DATES in src/pages/BlogPost.tsx). */
const blogDates = (): Record<string, string> => {
  const src = readIfExists(resolve(root, 'src/pages/BlogPost.tsx'));
  const block = src.match(/POST_DATES:\s*Record<string,\s*string>\s*=\s*\{([\s\S]*?)\}/);
  if (!block) return {};
  const out: Record<string, string> = {};
  for (const m of block[1].matchAll(/'([^']+)':\s*'(\d{4}-\d{2}-\d{2})'/g)) out[m[1]] = m[2];
  return out;
};

const gitDate = (file: string | null): string | null => {
  if (!file) return null;
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cs', '--', file], {
      cwd: root,
      encoding: 'utf-8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    return /^\d{4}-\d{2}-\d{2}$/.test(out) ? out : null;
  } catch {
    return null;
  }
};

/** Laatste wijziging van een pagina: routebestand én het paginacomponent. */
const pageLastmod = (routeAbs: string | null, source: string): string | null => {
  const files = [routeAbs];
  const imported = source.match(/from\s+["']@\/pages\/([^"']+)["']/);
  if (imported) {
    const abs = resolve(root, `src/pages/${imported[1]}.tsx`);
    if (existsSync(abs)) files.push(abs);
  }
  const dates = files.map(gitDate).filter(Boolean) as string[];
  return dates.length ? dates.sort().at(-1)! : null;
};

interface Entry {
  loc: string;
  lastmod?: string;
}

export const collectEntries = (): Entry[] => {
  const entries: Entry[] = [];
  const seen = new Set<string>();
  const push = (path: string, lastmod: string | null) => {
    if (seen.has(path)) return;
    seen.add(path);
    entries.push({ loc: `${SITE_BASE_URL}${path}`, ...(lastmod ? { lastmod } : {}) });
  };

  const posts = blogDates();

  for (const path of getRoutePaths()) {
    if (EXCLUDED_PATHS.has(path)) continue;
    const file = routeFile(path);
    const source = file ? readFileSync(file, 'utf-8') : '';

    if (path.includes('$slug')) {
      // Dynamische routes uitklappen uit hun contentbron.
      if (path.startsWith('/blog')) {
        // Blogposts: echte publicatiedatum uit POST_DATES.
        for (const slug of slugsFrom('src/pages/Blog.tsx')) push(`/blog/${slug}`, posts[slug] ?? null);
      } else if (path.startsWith('/recepten')) {
        // Recepten hebben geen per-recept wijzigingsdatum → geen lastmod.
        for (const slug of slugsFrom('src/data/recipes.ts')) push(`/recepten/${slug}`, null);
      }
      continue;
    }

    // noindex-pagina's overslaan.
    if (/robots:\s*["']noindex/.test(source)) continue;
    // Aliassen met een afwijkende canonical horen niet in de sitemap.
    const canonical = source.match(/canonicalPath:\s*["']([^"']+)["']/);
    if (canonical && canonical[1] !== path) continue;

    push(path, pageLastmod(file, source));
  }

  return entries.sort((a, b) => a.loc.localeCompare(b.loc));
};

const buildXml = (entries: Entry[]): string =>
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) =>
      `  <url>\n    <loc>${e.loc}</loc>${e.lastmod ? `\n    <lastmod>${e.lastmod}</lastmod>` : ''}\n  </url>`,
  )
  .join('\n')}
</urlset>
`;

/**
 * Genereert public/sitemap.xml bij dev-start en build op basis van
 * src/routeTree.gen.ts plus de blog- en receptenslugs.
 */
export const sitemapPlugin = (): Plugin => {
  const generate = () => {
    const outPath = resolve(root, 'public/sitemap.xml');
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, buildXml(collectEntries()), 'utf-8');
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
