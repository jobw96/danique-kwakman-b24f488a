/**
 * SSR-safe interop for react-helmet-async (CommonJS package).
 * Under Vite SSR the module surfaces as a default export; in the browser
 * bundle the named exports work. This wrapper handles both.
 */
import * as ReactHelmetAsync from "react-helmet-async";

type HelmetModule = typeof ReactHelmetAsync;

const mod =
  ((ReactHelmetAsync as unknown as { default?: HelmetModule }).default ??
    ReactHelmetAsync) as HelmetModule;

export const Helmet = mod.Helmet;
export const HelmetProvider = mod.HelmetProvider;
