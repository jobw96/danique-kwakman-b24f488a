import { useEffect, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import { Layout } from "@/components/Layout";
import { PageTransition } from "@/components/Animations";
import { BookingModalProvider } from "@/components/BookingModal";

// Homepage stays eager-loaded for fastest first paint
import Index from "./pages/Index";

// All other routes lazy-loaded — smaller initial bundle, faster homepage load
const About = lazy(() => import("./pages/About"));
const Method = lazy(() => import("./pages/Method"));
const GlowUp = lazy(() => import("./pages/GlowUp"));
const Darmtraject = lazy(() => import("./pages/Darmtraject"));
const ResetRecharge = lazy(() => import("./pages/ResetRecharge"));
const Recepten = lazy(() => import("./pages/Recepten"));
const Kennismaking = lazy(() => import("./pages/Kennismaking"));
const Podcast = lazy(() => import("./pages/Podcast"));
const Ebook = lazy(() => import("./pages/Ebook"));
const EbookCravings = lazy(() => import("./pages/EbookCravings"));
const Contact = lazy(() => import("./pages/Contact"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Privacy = lazy(() => import("./pages/Privacy"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Linktree = lazy(() => import("./pages/Linktree"));
const Nieuwsbrief = lazy(() => import("./pages/Nieuwsbrief"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Behandelingen = lazy(() => import("./pages/Behandelingen"));

const queryClient = new QueryClient();

// Lightweight loading fallback — keeps layout stable while route chunk loads
const RouteFallback = () => (
  <div className="min-h-screen flex items-center justify-center" aria-label="Laden">
    <div className="w-8 h-8 border-2 border-secondary border-t-transparent rounded-full animate-spin" />
  </div>
);

// Scroll to hash element after page load
const ScrollToHash = () => {
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);
  
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<RouteFallback />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Index /></PageTransition>} />
          <Route path="/over-mij" element={<PageTransition><About /></PageTransition>} />
          <Route path="/method" element={<PageTransition><Method /></PageTransition>} />
          <Route path="/behandelingen" element={<PageTransition><Behandelingen /></PageTransition>} />
          <Route path="/glowup" element={<PageTransition><GlowUp /></PageTransition>} />
          <Route path="/darmtraject" element={<PageTransition><Darmtraject /></PageTransition>} />
          <Route path="/reset-recharge" element={<PageTransition><ResetRecharge /></PageTransition>} />
          <Route path="/recepten" element={<PageTransition><Recepten /></PageTransition>} />
          <Route path="/kennismaking" element={<PageTransition><Kennismaking /></PageTransition>} />
          <Route path="/podcast" element={<PageTransition><Podcast /></PageTransition>} />
          <Route path="/e-book" element={<PageTransition><Ebook /></PageTransition>} />
          <Route path="/e-book-recepten-snacks" element={<PageTransition><EbookCravings /></PageTransition>} />
          <Route path="/nieuwsbrief" element={<PageTransition><Nieuwsbrief /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
          <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
          <Route path="/cookie-policy" element={<PageTransition><CookiePolicy /></PageTransition>} />
          <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
          <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
          <Route path="/blog/:slug" element={<PageTransition><BlogPost /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BookingModalProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToHash />
            <Routes>
              {/* Linktree page without Layout */}
              <Route
                path="/linktree"
                element={
                  <Suspense fallback={<RouteFallback />}>
                    <Linktree />
                  </Suspense>
                }
              />
              {/* All other pages with Layout */}
              <Route path="/*" element={
                <Layout>
                  <AnimatedRoutes />
                </Layout>
              } />
            </Routes>
          </BrowserRouter>
        </BookingModalProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
