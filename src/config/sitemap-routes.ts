/**
 * Centrale lijst van alle openbare routes voor de sitemap.
 *
 * - Toevoegen van een nieuwe pagina of blogpost? Voeg hier één regel toe.
 * - De Vite-plugin (`vite-plugin-sitemap.ts`) genereert hiermee
 *   automatisch `public/sitemap.xml` bij elke build.
 * - `lastmod` blijft leeg om automatisch op de huidige builddatum te vallen.
 */

export type ChangeFreq =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never';

export interface SitemapRoute {
  path: string;
  changefreq: ChangeFreq;
  priority: number;
  /** ISO date (YYYY-MM-DD). Wanneer leeg → builddatum. */
  lastmod?: string;
}

export const SITE_BASE_URL = 'https://daniquekwakman.nl';

export const STATIC_ROUTES: SitemapRoute[] = [
  { path: '/', changefreq: 'weekly', priority: 1.0 },
  { path: '/over-mij', changefreq: 'monthly', priority: 0.8 },
  { path: '/method', changefreq: 'monthly', priority: 0.8 },
  { path: '/behandelingen', changefreq: 'monthly', priority: 0.9 },
  { path: '/glowup', changefreq: 'monthly', priority: 0.8 },
  { path: '/darmtraject', changefreq: 'monthly', priority: 0.8 },
  
  { path: '/recepten', changefreq: 'weekly', priority: 0.7 },
  { path: '/kennismaking', changefreq: 'monthly', priority: 0.9 },
  { path: '/podcast', changefreq: 'weekly', priority: 0.7 },
  { path: '/e-book', changefreq: 'monthly', priority: 0.7 },
  { path: '/e-book-recepten-snacks', changefreq: 'monthly', priority: 0.7 },
  { path: '/nieuwsbrief', changefreq: 'monthly', priority: 0.7 },
  { path: '/contact', changefreq: 'monthly', priority: 0.8 },
  { path: '/faq', changefreq: 'monthly', priority: 0.6 },
  { path: '/blog', changefreq: 'weekly', priority: 0.8 },
  { path: '/privacy', changefreq: 'yearly', priority: 0.3 },
  { path: '/cookie-policy', changefreq: 'yearly', priority: 0.3 },
  { path: '/terms', changefreq: 'yearly', priority: 0.3 },
];

/**
 * Blogposts: slug + ISO publish date.
 * Hier toevoegen wanneer er een nieuwe blogpost bijkomt.
 */
export const BLOG_SITEMAP_ENTRIES: Array<{ slug: string; lastmod: string }> = [
  { slug: 'hormoonbalans-5-signalen', lastmod: '2024-11-28' },
  { slug: 'darmgezondheid-basis-welzijn', lastmod: '2024-11-21' },
  { slug: 'natuurlijke-energie-boost', lastmod: '2024-11-14' },
];

export const getBlogRoutes = (): SitemapRoute[] =>
  BLOG_SITEMAP_ENTRIES.map((entry) => ({
    path: `/blog/${entry.slug}`,
    changefreq: 'yearly' as ChangeFreq,
    priority: 0.6,
    lastmod: entry.lastmod,
  }));

export const getAllSitemapRoutes = (): SitemapRoute[] => [
  ...STATIC_ROUTES,
  ...getBlogRoutes(),
];
