import { useEffect, type ReactNode } from "react";
import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
  useRouter,
} from "@tanstack/react-router";
import { HelmetProvider } from "@/lib/helmet";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BookingModalProvider } from "@/components/BookingModal";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { RedirectHandler } from "@/components/RedirectHandler";
import { Layout } from "@/components/Layout";
import { PageTransition } from "@/components/Animations";
import NotFound from "@/pages/NotFound";
import { useLocation } from "@/lib/router-compat";
import { reportLovableError } from "@/lib/lovable-error-reporting";
import { reportWebVitals } from "@/lib/reportWebVitals";
import appCss from "../styles.css?url";

const SITE_TITLE = "Danique Kwakman | Orthomoleculair Therapeut & Hormoonbalans";
const SITE_DESCRIPTION =
  "Herstel je hormonale balans, darmgezondheid en energie met orthomoleculaire therapie. Persoonlijke begeleiding via de CIRCLE-methode voor duurzame gezondheid.";

// ported from index.html — JSON-LD structured data, visible to Google before JS runs
const JSONLD_BUSINESS = `{"@context":"https://schema.org","@type":"LocalBusiness","@id":"https://daniquekwakman.nl/#business","name":"Danique Kwakman - Orthomoleculair Therapeut","description":"Orthomoleculaire therapie voor hormoonbalans, darmgezondheid en energie. Persoonlijke begeleiding voor vrouwen via de CIRCLE-methode.","url":"https://daniquekwakman.nl","image":"https://daniquekwakman.nl/og-image.jpg","priceRange":"€€","address":{"@type":"PostalAddress","addressCountry":"NL"},"areaServed":"NL","founder":{"@type":"Person","name":"Danique Kwakman","jobTitle":"Orthomoleculair Therapeut"}}`;
const JSONLD_WEBSITE = `{"@context":"https://schema.org","@type":"WebSite","url":"https://daniquekwakman.nl","name":"Danique Kwakman","inLanguage":"nl-NL"}`;
const JSONLD_PERSON = `{"@context":"https://schema.org","@type":"Person","@id":"https://daniquekwakman.nl/#person","name":"Danique Kwakman","jobTitle":"Orthomoleculair Therapeut","description":"Orthomoleculair therapeut gespecialiseerd in hormoonbalans, darmgezondheid en energie voor vrouwen.","url":"https://daniquekwakman.nl/over-mij","image":"https://daniquekwakman.nl/og-image.jpg","sameAs":["https://www.instagram.com/daniquekwakman/"],"knowsAbout":["Orthomoleculaire therapie","Hormoonbalans","Darmgezondheid","Voeding","Vrouwengezondheid"],"worksFor":{"@id":"https://daniquekwakman.nl/#business"}}`;

// ported from index.html — per-route SEO bootstrap for crawlers hitting deep links.
// Runs before React mounts; Helmet keeps tags in sync during client navigation.
const SEO_BOOTSTRAP = `(function () {
  var BASE = 'https://daniquekwakman.nl';
  var path = window.location.pathname.replace(/\\/+$/, '') || '/';
  var routes = {
    '/': { title: ${JSON.stringify(SITE_TITLE)}, description: ${JSON.stringify(SITE_DESCRIPTION)} },
    '/over-mij': { title: 'Over mij - Danique Kwakman | Orthomoleculair Therapeut', description: 'Maak kennis met Danique Kwakman, orthomoleculair therapeut gespecialiseerd in hormoonbalans, darmgezondheid en energie voor vrouwen.' },
    '/method': { title: 'De CIRCLE-methode | Danique Kwakman', description: 'Ontdek de CIRCLE-methode: een holistische aanpak voor hormoonbalans, darmherstel en duurzame energie bij vrouwen.' },
    '/behandelingen': { title: 'Aanbod Trajecten | Danique Kwakman', description: 'Bekijk de 1:1 trajecten van Danique Kwakman: Hormoontraject en Darmtraject voor hormoonbalans en darmherstel.' },
    '/hormoontraject': { title: '1:1 Hormoontraject | Hormoonbalans & Energie | Danique Kwakman', description: 'Het 1:1 Hormoontraject voor vrouwen met PMS, PCOS, vermoeidheid of hormonale disbalans. In 3 maanden naar hormonale balans, rust en vertrouwen in je lijf.' },
    '/glowup': { title: '1:1 Hormoontraject | Hormoonbalans & Energie | Danique Kwakman', description: 'Het 1:1 Hormoontraject voor vrouwen met PMS, PCOS, vermoeidheid of hormonale disbalans. In 3 maanden naar hormonale balans, rust en vertrouwen in je lijf.', canonical: '/hormoontraject' },
    '/darmtraject': { title: '1:1 Darmtraject Therapie | Lab onderzoek | Danique Kwakman', description: 'Diepgaand 1:1 darmtraject inclusief laboratoriumonderzoek om tot de kern van jouw klacht te komen. Persoonlijke begeleiding door Danique Kwakman.' },
    '/recepten': { title: 'Gezonde Recepten | Hormoonbalans & Darmgezondheid | Danique Kwakman', description: 'Voedzame, hormoon- en darmvriendelijke recepten van orthomoleculair therapeut Danique Kwakman. Ondersteunend voor energie en welzijn.' },
    '/kennismaking': { title: 'Gratis Kennismaking | Danique Kwakman', description: 'Plan een gratis kennismakingsgesprek met orthomoleculair therapeut Danique Kwakman en ontdek hoe ik jou kan helpen naar meer balans.' },
    '/podcast': { title: 'Podcast | Danique Kwakman | Hormonen, Darmen & Energie', description: 'Luister naar de podcast van Danique Kwakman over hormoonbalans, darmgezondheid, voeding en leefstijl voor vrouwen.' },
    '/e-book': { title: 'Gratis E-book | Danique Kwakman', description: 'Download het gratis e-book van Danique Kwakman met inzichten en praktische tips voor hormoonbalans en darmgezondheid.' },
    '/e-book-recepten-snacks': { title: '5 Recepten om je Cravings te Stillen | Gratis E-book | Danique Kwakman', description: 'Download gratis het e-book met 5 recepten om je zoete cravings rondom je menstruatie te stillen. Voedzaam, darmvriendelijk en snel klaar.' },
    '/nieuwsbrief': { title: 'Nieuwsbrief | Danique Kwakman', description: 'Schrijf je in voor de wekelijkse nieuwsbrief van Danique Kwakman en ontvang exclusieve inspiratie, tips en inzichten voor hormoonbalans en darmgezondheid.' },
    '/contact': { title: 'Contact | Danique Kwakman | Orthomoleculair Therapeut', description: 'Neem contact op met Danique Kwakman, orthomoleculair therapeut, voor vragen over trajecten, kennismaking of samenwerking.' },
    '/faq': { title: 'Veelgestelde Vragen | Danique Kwakman', description: 'Antwoorden op veelgestelde vragen over orthomoleculaire therapie, vergoeding, trajecten en werkwijze van Danique Kwakman.' },
    '/blog': { title: 'Blog | Hormoonbalans, Darmen & Energie | Danique Kwakman', description: 'Lees artikelen over hormoonbalans, darmgezondheid, voeding en leefstijl op de blog van orthomoleculair therapeut Danique Kwakman.' },
    '/privacy': { title: 'Privacybeleid | Danique Kwakman', description: 'Lees het privacybeleid van Danique Kwakman over de verwerking van persoonsgegevens.' },
    '/cookie-policy': { title: 'Cookiebeleid | Danique Kwakman', description: 'Informatie over het cookiebeleid van de website van Danique Kwakman.' },
    '/terms': { title: 'Algemene Voorwaarden | Danique Kwakman', description: 'Algemene voorwaarden van orthomoleculair therapeut Danique Kwakman.' }
  };
  var meta = routes[path];
  if (!meta) return;
  var canonicalPath = meta.canonical || path;
  var canonical = BASE + (canonicalPath === '/' ? '/' : canonicalPath);
  function setMeta(selector, attr, value) {
    var el = document.querySelector(selector);
    if (el) el.setAttribute(attr, value);
  }
  function setLink(rel, href) {
    var el = document.querySelector('link[rel="' + rel + '"]');
    if (!el) {
      el = document.createElement('link');
      el.setAttribute('rel', rel);
      document.head.appendChild(el);
    }
    el.setAttribute('href', href);
  }
  document.title = meta.title;
  setMeta('meta[name="description"]', 'content', meta.description);
  setMeta('meta[property="og:title"]', 'content', meta.title);
  setMeta('meta[property="og:description"]', 'content', meta.description);
  setMeta('meta[property="og:url"]', 'content', canonical);
  setMeta('meta[name="twitter:title"]', 'content', meta.title);
  setMeta('meta[name="twitter:description"]', 'content', meta.description);
  setLink('canonical', canonical);
})();`;

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { name: "author", content: "Danique Kwakman" },
      {
        httpEquiv: "Content-Security-Policy",
        content:
          "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://daniquekwakman.activehosted.com; style-src 'self' 'unsafe-inline' https://daniquekwakman.activehosted.com; font-src 'self' data:; img-src 'self' data: https: blob:; connect-src 'self' https://daniquekwakman.activehosted.com https://*.supabase.co https://*.supabase.in wss://*.supabase.co; frame-src 'self' https://daniquekwakman.clientomgeving.nl https://open.spotify.com https://*.spotify.com;",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Danique Kwakman" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:url", content: "https://daniquekwakman.nl/" },
      { property: "og:locale", content: "nl_NL" },
      { property: "og:image", content: "https://daniquekwakman.nl/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      { name: "twitter:image", content: "https://daniquekwakman.nl/og-image.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://daniquekwakman.nl/" },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon-512.png", type: "image/png", sizes: "512x512" },
      { rel: "icon", href: "/favicon-light.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://daniquekwakman.activehosted.com", crossOrigin: "anonymous" },
      { rel: "dns-prefetch", href: "https://daniquekwakman.activehosted.com" },
      { rel: "preconnect", href: "https://daniquekwakman.clientomgeving.nl", crossOrigin: "anonymous" },
      { rel: "dns-prefetch", href: "https://open.spotify.com" },
      { rel: "preload", href: "/fonts/Neulis-Sans-Light.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" },
      { rel: "preload", href: "/fonts/Aesthet-Nova.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSONLD_BUSINESS },
      { type: "application/ld+json", children: JSONLD_WEBSITE },
      { type: "application/ld+json", children: JSONLD_PERSON },
      { children: SEO_BOOTSTRAP },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: RootErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

// Scroll to hash element after page load (ported from App.tsx)
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return null;
}

function RootComponent() {
  // ported from main.tsx — stream LCP / INP / CLS / FCP / TTFB to console (dev) or dataLayer (prod)
  useEffect(() => {
    reportWebVitals();
  }, []);

  const { queryClient } = Route.useRouteContext();

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <BookingModalProvider>
            <Toaster />
            <Sonner />
            <ScrollToHash />
            <RedirectHandler />
            <ErrorBoundary>
              <Outlet />
            </ErrorBoundary>
          </BookingModalProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

function NotFoundComponent() {
  return (
    <Layout>
      <PageTransition>
        <NotFound />
      </PageTransition>
    </Layout>
  );
}

function RootErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  console.error(error);

  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-6 text-center">
      <h1 className="font-serif text-3xl md:text-4xl mb-4">Deze pagina kon niet laden</h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        Er ging iets mis. Probeer het opnieuw of ga terug naar de homepage.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="px-6 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium"
        >
          Probeer opnieuw
        </button>
        <a
          href="/"
          className="px-6 py-2.5 rounded-md border border-border text-sm font-medium"
        >
          Naar home
        </a>
      </div>
    </div>
  );
}
