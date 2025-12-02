import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Layout } from "@/components/Layout";
import { PageTransition } from "@/components/Animations";
import Index from "./pages/Index";
import About from "./pages/About";
import Method from "./pages/Method";
import GlowUp from "./pages/GlowUp";
import Darmtraject from "./pages/Darmtraject";
import ResetRecharge from "./pages/ResetRecharge";
import Recepten from "./pages/Recepten";
import Kennismaking from "./pages/Kennismaking";
import Podcast from "./pages/Podcast";
import Ebook from "./pages/Ebook";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import CookiePolicy from "./pages/CookiePolicy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import Linktree from "./pages/Linktree";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

const queryClient = new QueryClient();

// Scroll to hash element after page load
const ScrollToHash = () => {
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash) {
      // Small delay to allow page to render
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
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/method" element={<PageTransition><Method /></PageTransition>} />
        <Route path="/glowup" element={<PageTransition><GlowUp /></PageTransition>} />
        <Route path="/darmtraject" element={<PageTransition><Darmtraject /></PageTransition>} />
        <Route path="/reset-recharge" element={<PageTransition><ResetRecharge /></PageTransition>} />
        <Route path="/recepten" element={<PageTransition><Recepten /></PageTransition>} />
        <Route path="/kennismaking" element={<PageTransition><Kennismaking /></PageTransition>} />
        <Route path="/podcast" element={<PageTransition><Podcast /></PageTransition>} />
        <Route path="/ebook" element={<PageTransition><Ebook /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
        <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
        <Route path="/cookie-policy" element={<PageTransition><CookiePolicy /></PageTransition>} />
        <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
        <Route path="/blog/:slug" element={<PageTransition><BlogPost /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToHash />
        <Routes>
          {/* Linktree page without Layout */}
          <Route path="/linktree" element={<Linktree />} />
          {/* All other pages with Layout */}
          <Route path="/*" element={
            <Layout>
              <AnimatedRoutes />
            </Layout>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
