import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[100] bg-background/95 backdrop-blur-xl border-t border-secondary/60 shadow-2xl"
        >
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-foreground font-serif text-lg mb-2">
                  Cookie instellingen
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Wij gebruiken cookies om je ervaring te verbeteren en om te analyseren hoe onze website wordt gebruikt. 
                  Lees meer in ons{' '}
                  <a href="/cookie-policy" className="text-primary hover:underline">
                    cookiebeleid
                  </a>
                  .
                </p>
              </div>
              
              <div className="flex items-center gap-3 w-full md:w-auto">
                <button
                  onClick={handleDecline}
                  className="flex-1 md:flex-none px-6 py-2.5 text-sm font-medium text-muted-foreground border border-secondary hover:bg-secondary/20 rounded-md transition-all duration-300"
                >
                  Weigeren
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 md:flex-none px-6 py-2.5 text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 rounded-md transition-all duration-300 shadow-md"
                >
                  Accepteren
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
