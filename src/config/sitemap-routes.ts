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
  // Homepage
  { path: '/', changefreq: 'daily', priority: 1.0 },

  // Hoofdpagina's
  { path: '/over-mij', changefreq: 'weekly', priority: 0.8 },
  { path: '/method', changefreq: 'weekly', priority: 0.8 },
  { path: '/behandelingen', changefreq: 'weekly', priority: 0.8 },
  { path: '/hormoontraject', changefreq: 'weekly', priority: 0.8 },
  { path: '/darmtraject', changefreq: 'weekly', priority: 0.8 },
  { path: '/recepten', changefreq: 'weekly', priority: 0.8 },
  { path: '/podcast', changefreq: 'weekly', priority: 0.8 },
  { path: '/contact', changefreq: 'weekly', priority: 0.8 },
  { path: '/blog', changefreq: 'weekly', priority: 0.8 },
  { path: '/blog/darmen-gezond-houden-5-tips', changefreq: 'monthly', priority: 0.7 },
  { path: '/blog/hormoonbalans-5-signalen', changefreq: 'monthly', priority: 0.7 },
  { path: '/blog/darmgezondheid-basis-welzijn', changefreq: 'monthly', priority: 0.7 },
  { path: '/blog/natuurlijke-energie-boost', changefreq: 'monthly', priority: 0.7 },

  // Subpagina's / statische content
  { path: '/e-book', changefreq: 'monthly', priority: 0.6 },
  { path: '/e-book-recepten-snacks', changefreq: 'monthly', priority: 0.6 },
  { path: '/nieuwsbrief', changefreq: 'monthly', priority: 0.6 },
  { path: '/faq', changefreq: 'monthly', priority: 0.6 },
  { path: '/privacy', changefreq: 'monthly', priority: 0.6 },
  { path: '/cookie-policy', changefreq: 'monthly', priority: 0.6 },
  { path: '/terms', changefreq: 'monthly', priority: 0.6 },
];

export const getAllSitemapRoutes = (): SitemapRoute[] => STATIC_ROUTES;
