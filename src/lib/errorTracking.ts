/**
 * Lichtgewicht error-tracking voor 404s, redirects en runtime errors.
 *
 * - In dev: console.warn met context.
 * - In productie: pusht naar `window.dataLayer` (GTM/GA4) als die bestaat,
 *   zodat 404-rapporten in Google Analytics zichtbaar worden zonder extra
 *   integratie. Optioneel kun je later een eigen endpoint toevoegen.
 */

type DataLayerEvent = Record<string, unknown> & { event: string };

const pushToDataLayer = (event: DataLayerEvent) => {
  if (typeof window === 'undefined') return;
  const w = window as unknown as { dataLayer?: DataLayerEvent[] };
  if (!Array.isArray(w.dataLayer)) w.dataLayer = [];
  w.dataLayer.push(event);
};

const isDev = import.meta.env?.DEV === true;

export const track404 = (pathname: string, referrer?: string) => {
  const ref = referrer ?? (typeof document !== 'undefined' ? document.referrer : '');
  if (isDev) {
    console.warn('[404]', pathname, ref ? `(referrer: ${ref})` : '');
  }
  pushToDataLayer({
    event: 'page_not_found',
    page_path: pathname,
    page_referrer: ref || undefined,
  });
};

export const trackRedirect = (
  from: string,
  to: string,
  type: 'permanent' | 'temporary',
) => {
  if (isDev) {
    console.info(`[redirect ${type === 'permanent' ? '301' : '302'}]`, from, '→', to);
  }
  pushToDataLayer({
    event: 'redirect',
    redirect_from: from,
    redirect_to: to,
    redirect_type: type,
  });
};

export const trackRuntimeError = (error: unknown, info?: Record<string, unknown>) => {
  const message = error instanceof Error ? error.message : String(error);
  const stack = error instanceof Error ? error.stack : undefined;
  if (isDev) {
    console.error('[runtime-error]', message, info, stack);
  }
  pushToDataLayer({
    event: 'runtime_error',
    error_message: message,
    error_stack: stack,
    ...info,
  });
};
