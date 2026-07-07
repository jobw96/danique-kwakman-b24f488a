/**
 * Redirect map — bewaart SEO-waarde wanneer URL's veranderen.
 *
 * - `type: 'permanent'` → behandeld als 301 (oude URL → nieuwe URL definitief).
 * - `type: 'temporary'` → behandeld als 302 (tijdelijke verplaatsing).
 *
 * Op een client-side SPA kunnen we geen echte HTTP-statuscode versturen,
 * maar we doen drie dingen:
 *   1. <RedirectHandler> doet een `navigate(to, { replace: true })` zodat de
 *      oude URL uit de history verdwijnt (gedrag dat lijkt op 301).
 *   2. We zetten <meta http-equiv="refresh"> + <link rel="canonical"> naar de
 *      nieuwe URL zodat crawlers de signal-overdracht oppikken.
 *   3. We loggen de redirect via `trackRedirect` zodat onbedoelde 404s te
 *      monitoren zijn.
 *
 * Voeg hier nieuwe regels toe wanneer een pagina wordt hernoemd of verwijderd.
 * Wildcards: een `from` die op `/*` eindigt matcht het pad-prefix.
 */

export type RedirectType = 'permanent' | 'temporary';

export interface RedirectRule {
  from: string;
  to: string;
  type: RedirectType;
  /** Optioneel: behoud het pad na een wildcard-match. Standaard: false. */
  preservePath?: boolean;
  /** Optioneel: notitie waarom deze redirect bestaat. */
  note?: string;
}

export const REDIRECTS: RedirectRule[] = [
  // Voorbeeld: oude URL → nieuwe URL (definitief).
  // { from: '/oud-pad', to: '/nieuw-pad', type: 'permanent', note: 'Rebrand 2024' },

  // Bekende variaties die altijd naar de canonieke route moeten gaan.
  { from: '/glow-up', to: '/glowup', type: 'permanent' },
  { from: '/over', to: '/over-mij', type: 'permanent' },
  { from: '/about', to: '/over-mij', type: 'permanent' },
  { from: '/ebook', to: '/e-book', type: 'permanent' },
  { from: '/blog', to: '/recepten', type: 'permanent', note: 'Blog samengevoegd met recepten.' },
  { from: '/blog/*', to: '/recepten', type: 'permanent', note: 'Blogberichten samengevoegd met recepten.' },
];

/**
 * Vind een redirect voor een gegeven pad (case-insensitive, trailing slash
 * genegeerd). Ondersteunt wildcard `from` die op `/*` eindigt.
 */
export const findRedirect = (pathname: string): RedirectRule | null => {
  const normalized = pathname.replace(/\/+$/, '').toLowerCase() || '/';

  for (const rule of REDIRECTS) {
    const from = rule.from.replace(/\/+$/, '').toLowerCase();
    if (from.endsWith('/*')) {
      const prefix = from.slice(0, -2);
      if (normalized === prefix || normalized.startsWith(`${prefix}/`)) {
        const suffix = normalized.slice(prefix.length);
        return { ...rule, to: rule.preservePath ? `${rule.to}${suffix}` : rule.to };
      }
    } else if (normalized === from) {
      return rule;
    }
  }
  return null;
};
