import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  // Remove any canonical link inherited from the static index.html head,
  // so the 404 route never points crawlers at the homepage (soft-404 risk).
  useEffect(() => {
    const existing = Array.from(
      document.querySelectorAll('link[rel="canonical"]')
    ) as HTMLLinkElement[];
    const removed = existing.map((el) => ({ el, parent: el.parentNode }));
    existing.forEach((el) => el.parentNode?.removeChild(el));
    return () => {
      // Restore on unmount so other routes keep their canonical behavior.
      removed.forEach(({ el, parent }) => parent?.appendChild(el));
    };
  }, []);

  return (
    <>
      <SEO
        title="404 - Pagina niet gevonden"
        description="Deze pagina bestaat niet (meer). Ga terug naar de homepage."
        noIndex
      />
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Pagina niet gevonden</p>
          <a href="/" className="text-primary underline hover:text-primary/90">
            Terug naar de homepage
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
