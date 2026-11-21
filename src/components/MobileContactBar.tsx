import { ArrowUp } from 'lucide-react';
import { m } from 'framer-motion';
import { useBookingModal } from '@/components/BookingModal';
import { WhatsAppIcon } from '@/components/BrandIcons';

const WHATSAPP_URL = 'https://wa.me/31682018727';

export function MobileContactBar() {
  const { openModal } = useBookingModal();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside
      aria-label="Snel contact"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-secondary/40 bg-background/95 px-3 pt-3 backdrop-blur-xl lg:hidden"
      style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
    >
      <div className="mx-auto flex w-full max-w-lg items-center gap-3">
        <m.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open een WhatsApp-gesprek met Danique Kwakman"
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md border border-secondary/40 bg-secondary/20 text-primary-deep transition-colors hover:bg-secondary/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          whileTap={{ scale: 0.96 }}
        >
          <WhatsAppIcon width={25} height={25} />
        </m.a>

        <m.button
          type="button"
          onClick={openModal}
          className="flex h-14 min-w-0 flex-1 items-center justify-center rounded-md bg-primary px-3 text-center text-[13px] font-medium tracking-[0.06em] text-primary-foreground transition-colors hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          whileTap={{ scale: 0.98 }}
        >
          MAAK GRATIS KENNIS
        </m.button>

        <m.button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll soepel terug naar boven"
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md border border-secondary/40 bg-secondary/20 text-primary-deep transition-colors hover:bg-secondary/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          whileTap={{ scale: 0.96 }}
        >
          <ArrowUp size={25} strokeWidth={1.7} aria-hidden="true" />
        </m.button>
      </div>
    </aside>
  );
}
