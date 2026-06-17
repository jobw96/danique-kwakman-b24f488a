import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Dev-only heading-hierarchy linter.
 *
 * After each route change, inspects `document.querySelectorAll('h1..h6')` and
 * warns in the console when:
 *   - there is no H1, or more than one H1
 *   - a heading level is skipped (e.g. H1 → H3)
 *   - the first heading on the page is not H1
 *
 * Silent in production builds. Runs on a `requestAnimationFrame` after the
 * route renders so async content (Helmet, dynamic sections) is included.
 */
export const useHeadingHierarchyCheck = (): void => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (import.meta.env.PROD) return;
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const raf = window.requestAnimationFrame(() => {
      const headings = Array.from(
        document.querySelectorAll<HTMLHeadingElement>('h1, h2, h3, h4, h5, h6'),
      );
      if (headings.length === 0) return;

      const levels = headings.map((h) => Number(h.tagName.slice(1)));
      const h1Count = levels.filter((l) => l === 1).length;
      const issues: string[] = [];

      if (h1Count === 0) issues.push('No <h1> found on page.');
      if (h1Count > 1) issues.push(`Found ${h1Count} <h1> elements — there should be exactly one.`);
      if (levels[0] !== 1) issues.push(`First heading is <h${levels[0]}>, expected <h1>.`);

      for (let i = 1; i < levels.length; i++) {
        const prev = levels[i - 1];
        const cur = levels[i];
        if (cur > prev + 1) {
          const el = headings[i];
          issues.push(
            `Skipped heading level: <h${prev}> → <h${cur}> at "${(el.textContent ?? '').trim().slice(0, 60)}".`,
          );
        }
      }

      if (issues.length > 0) {
        // eslint-disable-next-line no-console
        console.warn(
          `[heading-hierarchy] ${pathname} has ${issues.length} issue(s):\n  - ${issues.join('\n  - ')}`,
        );
      }
    });

    return () => window.cancelAnimationFrame(raf);
  }, [pathname]);
};

export default useHeadingHierarchyCheck;
