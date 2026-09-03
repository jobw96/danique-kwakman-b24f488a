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
const JSONLD_BUSINESS = `{"@context":"https://schema.org","@type":"LocalBusiness","@id":"https://daniquekwakman.nl/#business","name":"Danique Kwakman - Orthomoleculair Therapeut","description":"Orthomoleculaire therapie voor hormoonbalans, darmgezondheid en energie. Persoonlijke begeleiding voor vrouwen via de CIRCLE-methode.","url":"https://daniquekwakman.nl","image":"https://daniquekwakman.nl/og-image.webp","priceRange":"€€","address":{"@type":"PostalAddress","addressCountry":"NL"},"areaServed":"NL","founder":{"@type":"Person","name":"Danique Kwakman","jobTitle":"Orthomoleculair Therapeut"}}`;
const JSONLD_WEBSITE = `{"@context":"https://schema.org","@type":"WebSite","url":"https://daniquekwakman.nl","name":"Danique Kwakman","inLanguage":"nl-NL"}`;
const JSONLD_PERSON = `{"@context":"https://schema.org","@type":"Person","@id":"https://daniquekwakman.nl/#person","name":"Danique Kwakman","jobTitle":"Orthomoleculair Therapeut","description":"Orthomoleculair therapeut gespecialiseerd in hormoonbalans, darmgezondheid en energie voor vrouwen.","url":"https://daniquekwakman.nl/over-mij","image":"https://daniquekwakman.nl/og-image.webp","sameAs":["https://www.instagram.com/daniquekwakman/"],"knowsAbout":["Orthomoleculaire therapie","Hormoonbalans","Darmgezondheid","Voeding","Vrouwengezondheid"],"worksFor":{"@id":"https://daniquekwakman.nl/#business"}}`;


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
      
      { property: "og:locale", content: "nl_NL" },
      { property: "og:image", content: "https://daniquekwakman.nl/og-image.webp" },
      { property: "og:image:type", content: "image/webp" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Danique Kwakman, orthomoleculair therapeut" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      { name: "twitter:image", content: "https://daniquekwakman.nl/og-image.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
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
