import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Search } from "lucide-react";
import SEO from "@/components/SEO";
import { STATIC_ROUTES } from "@/config/sitemap-routes";
import { track404 } from "@/lib/errorTracking";

/** Populaire bestemmingen — getoond als suggesties op de 404-pagina. */
const POPULAR_LINKS: Array<{ to: string; label: string; description: string }> = [
  { to: "/glowup", label: "1:1 GlowUp", description: "Persoonlijk hormoontraject van 3 maanden." },
  { to: "/darmtraject", label: "Darmtraject", description: "Herstel je darmgezondheid stap voor stap." },
  { to: "/recepten", label: "Recepten", description: "Hormoonvriendelijke recepten om direct te koken." },
  { to: "/over-mij", label: "Over Danique", description: "Mijn aanpak en achtergrond als orthomoleculair therapeut." },
  { to: "/contact", label: "Contact", description: "Stel je vraag of plan een kennismaking." },
];

/** Eenvoudige fuzzy-match op pad-segmenten — geen DB nodig. */
const suggestRoutes = (pathname: string) => {
  const token = pathname.replace(/[^a-z0-9]+/gi, " ").trim().toLowerCase();
  if (!token) return [] as string[];
  return STATIC_ROUTES
    .map((r) => r.path)
    .filter((p) => p !== "/" && token.split(" ").some((t) => t.length > 2 && p.includes(t)))
    .slice(0, 3);
};

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  // Log de 404 (dev: console, prod: dataLayer voor GA4/GTM).
  useEffect(() => {
    track404(location.pathname);
  }, [location.pathname]);

  // Verwijder eventuele canonical uit de statische <head> — anders wijst
  // de 404 route per ongeluk naar de homepage (soft-404 risico).
  useEffect(() => {
    const existing = Array.from(
      document.querySelectorAll('link[rel="canonical"]')
    ) as HTMLLinkElement[];
    const removed = existing.map((el) => ({ el, parent: el.parentNode }));
    existing.forEach((el) => el.parentNode?.removeChild(el));
    return () => {
      removed.forEach(({ el, parent }) => parent?.appendChild(el));
    };
  }, []);

  const suggestions = useMemo(() => suggestRoutes(location.pathname), [location.pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim().toLowerCase();
    if (!q) return;
    // Probeer een directe match op een bestaande route.
    const direct = STATIC_ROUTES.find((r) => r.path.includes(q));
    if (direct) {
      navigate(direct.path);
      return;
    }
    // Fallback: stuur naar recepten/blog-overzicht waar relevant kan zijn.
    navigate(`/recepten?q=${encodeURIComponent(q)}`);
  };

  return (
    <>
      {/* prerender-status-code: hint voor prerender-services & sommige crawlers
          dat dit een echte 404 is, ook al kan een SPA geen 4xx HTTP-status sturen. */}
      <Helmet>
        <meta name="prerender-status-code" content="404" />
      </Helmet>
      <SEO
        title="404 - Pagina niet gevonden"
        description="Deze pagina bestaat niet (meer). Bekijk populaire pagina's of zoek wat je nodig hebt."
        noIndex
      />

      <main className="mx-auto max-w-3xl px-4 py-16 md:py-24">
        <p className="text-sm uppercase tracking-wider text-muted-foreground">Fout 404</p>
        <h1 className="mt-2 text-3xl font-semibold md:text-4xl">Deze pagina bestaat niet (meer)</h1>
        <p className="mt-4 text-muted-foreground">
          De link is mogelijk verouderd of de pagina is verplaatst. Gebruik de zoekbalk
          hieronder of bekijk een van onze populaire pagina's.
        </p>

        {/* Zoekfunctie */}
        <form onSubmit={handleSearch} className="mt-8 flex gap-2" role="search" aria-label="Zoeken op de site">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Zoek bijv. 'hormoon', 'recept', 'darm'…"
              className="w-full rounded-md border border-border bg-background py-2.5 pl-10 pr-3 text-sm outline-none focus:ring-2 focus:ring-primary/40"
              aria-label="Zoekopdracht"
            />
          </div>
          <button
            type="submit"
            className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Zoek
          </button>
        </form>

        {/* Suggesties op basis van het foutieve pad */}
        {suggestions.length > 0 && (
          <section className="mt-10" aria-labelledby="suggestions-heading">
            <h2 id="suggestions-heading" className="text-lg font-medium">Bedoelde je misschien…</h2>
            <ul className="mt-3 space-y-1">
              {suggestions.map((p) => (
                <li key={p}>
                  <Link to={p} className="text-primary underline-offset-4 hover:underline">
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Populaire bestemmingen */}
        <section className="mt-10" aria-labelledby="popular-heading">
          <h2 id="popular-heading" className="text-lg font-medium">Populaire pagina's</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {POPULAR_LINKS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="block rounded-md border border-border p-4 transition-colors hover:bg-accent"
                >
                  <span className="block font-medium">{item.label}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{item.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-12 text-sm text-muted-foreground">
          Probleem blijft bestaan?{" "}
          <Link to="/contact" className="text-primary underline-offset-4 hover:underline">
            Laat het me weten via contact
          </Link>
          .
        </p>
      </main>
    </>
  );
};

export default NotFound;
