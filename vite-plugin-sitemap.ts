import type { Plugin } from 'vite';
import { writeFileSync, mkdirSync, readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { execFileSync } from 'node:child_process';

export const SITE_BASE_URL = 'https://daniquekwakman.nl';

/** Routes die nooit in de sitemap horen (redirects, 404, aliassen). */
const EXCLUDED_PATHS = new Set(['/darmtherapie-traject']);

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

interface Entry {
  loc: string;
  lastmod?: string;
}

export const collectEntries = (): Entry[] => {
  const entries: Entry[] = [];
  const seen = new Set<string>();
  const push = (path: string, file: string | null) => {
    if (seen.has(path)) return;
    seen.add(path);
    const lastmod = gitDate(file);
    entries.push({ loc: `${SITE_BASE_URL}${path}`, ...(lastmod ? { lastmod } : {}) });
  };

  for (const path of getRoutePaths()) {
    if (EXCLUDED_PATHS.has(path)) continue;
    const file = routeFile(path);
    const source = file ? readFileSync(file, 'utf-8') : '';

    if (path.includes('$slug')) {
      // Dynamische routes uitklappen uit hun contentbron.
      const [slugs, dataFile] =
        path.startsWith('/blog')
          ? [slugsFrom('src/pages/Blog.tsx'), 'src/pages/Blog.tsx']
          : path.startsWith('/recepten')
            ? [slugsFrom('src/data/recipes.ts'), 'src/data/recipes.ts']
            : [[], ''];
      for (const slug of slugs) push(path.replace('$slug', slug), resolve(root, dataFile));
      continue;
    }

    // noindex-pagina's overslaan.
    if (/robots:\s*["']noindex/.test(source)) continue;
    // Aliassen met een afwijkende canonical horen niet in de sitemap.
    const canonical = source.match(/canonicalPath:\s*["']([^"']+)["']/);
    if (canonical && canonical[1] !== path) continue;

    push(path, file);
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
