import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

interface ServerErrorProps {
  onRetry?: () => void;
}

/**
 * Generieke 500-pagina. We kunnen op een client-side SPA geen echte 5xx
 * statuscode versturen, maar we geven crawlers wel een duidelijke hint
 * via `prerender-status-code` (gerespecteerd door prerender-services en
 * een aantal social crawlers) en zetten `noindex`.
 */
const ServerError = ({ onRetry }: ServerErrorProps) => {
  return (
    <>
      <Helmet>
        <title>Er ging iets mis | Danique Kwakman</title>
        <meta name="description" content="Er is een onverwachte fout opgetreden. Probeer de pagina opnieuw te laden of neem contact op." />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="prerender-status-code" content="500" />
      </Helmet>

      <main className="flex min-h-screen items-center justify-center bg-muted px-4">
        <div className="max-w-lg text-center">
          <p className="text-sm uppercase tracking-wider text-muted-foreground">Fout 500</p>
          <h1 className="mt-2 text-3xl font-semibold md:text-4xl">Er ging iets mis</h1>
          <p className="mt-4 text-muted-foreground">
            Er trad een onverwachte fout op bij het laden van deze pagina.
            Probeer het opnieuw — als het probleem blijft bestaan, laat het ons weten.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => (onRetry ? onRetry() : window.location.reload())}
              className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Probeer opnieuw
            </button>
            <Link
              to="/"
              className="rounded-md border border-border px-5 py-2.5 text-sm font-medium hover:bg-accent"
            >
              Naar de homepage
            </Link>
            <Link
              to="/contact"
              className="rounded-md border border-border px-5 py-2.5 text-sm font-medium hover:bg-accent"
            >
              Contact opnemen
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default ServerError;
