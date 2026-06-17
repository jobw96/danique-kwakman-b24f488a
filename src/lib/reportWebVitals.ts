/**
 * Core Web Vitals reporter.
 *
 * Streams LCP, INP, CLS, FCP and TTFB to the console (dev) and, in production,
 * to `window.dataLayer` so any analytics tool can pick them up. Replace the
 * `dispatch` body if you want to ship them to a custom endpoint.
 *
 * Call `reportWebVitals()` once from `main.tsx`.
 */

import { onCLS, onFCP, onINP, onLCP, onTTFB, type Metric } from 'web-vitals';

type AnalyticsEvent = {
  event: 'web-vitals';
  metric: Metric['name'];
  value: number;
  rating: Metric['rating'];
  id: string;
  navigationType: Metric['navigationType'];
};

declare global {
  interface Window {
    dataLayer?: AnalyticsEvent[];
  }
}

const RATING_EMOJI: Record<Metric['rating'], string> = {
  good: '🟢',
  'needs-improvement': '🟡',
  poor: '🔴',
};

const dispatch = (metric: Metric) => {
  // Production: push to dataLayer (GTM / GA4 / custom analytics).
  if (import.meta.env.PROD) {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'web-vitals',
        metric: metric.name,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        rating: metric.rating,
        id: metric.id,
        navigationType: metric.navigationType,
      });
    }
    return;
  }

  // Dev: human-readable console log.
  // eslint-disable-next-line no-console
  console.log(
    `${RATING_EMOJI[metric.rating]} [web-vitals] ${metric.name}: ${metric.value.toFixed(metric.name === 'CLS' ? 3 : 0)} (${metric.rating})`,
  );
};

export const reportWebVitals = () => {
  onLCP(dispatch);
  onINP(dispatch); // replaces FID since web-vitals v3
  onCLS(dispatch);
  onFCP(dispatch);
  onTTFB(dispatch);
};
