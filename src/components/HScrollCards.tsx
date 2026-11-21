import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Kaartenrij die op telefoon horizontaal swipebaar is met pijltjes eronder, en
 * op computer en tablet terugvalt op het gewone raster. De breedte van losse
 * kaarten zet de aanroeper zelf op elk kind, zodat elk blok zijn eigen maat
 * kan houden.
 */
export const HScrollCards: React.FC<{
  children: React.ReactNode;
  /** breedte van de scrollbak, bv. max-w-6xl */
  containerClassName?: string;
  /** raster op computer/tablet, bv. md:grid md:grid-cols-3 md:gap-8 */
  trackClassName?: string;
  prevLabel?: string;
  nextLabel?: string;
}> = ({
  children,
  containerClassName = 'max-w-5xl',
  trackClassName = 'md:grid md:grid-cols-2 md:gap-8',
  prevLabel = 'Vorige kaart',
  nextLabel = 'Volgende kaart',
}) => {
  const scrollerRef = React.useRef<HTMLDivElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const frame = React.useRef(0);
  const [atStart, setAtStart] = React.useState(true);
  const [atEnd, setAtEnd] = React.useState(false);

  const measure = () => {
    const el = scrollerRef.current;
    if (!el) return;
    // Snapuitlijning laat de eerste kaart tegen het begin van de scrollbak
    // rusten, en dat beginsel ligt één paddingbreedte in. Zonder die correctie
    // lijkt de pijl naar links actief terwijl er niets te zien is.
    const start = parseFloat(getComputedStyle(el).paddingLeft) || 0;
    const max = el.scrollWidth - el.clientWidth;
    const s = el.scrollLeft <= start + 2;
    const e = el.scrollLeft >= max - 2;
    setAtStart((p) => (p === s ? p : s));
    setAtEnd((p) => (p === e ? p : e));
  };

  React.useEffect(() => {
    measure();
    requestAnimationFrame(measure);
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const step = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    const card = trackRef.current?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    el.scrollBy({ left: dir * (card.offsetWidth + 20), behavior: 'smooth' });
  };

  const arrow = 'h-10 w-10 rounded-md border border-secondary/40 bg-card text-secondary-dark flex items-center justify-center disabled:opacity-30';

  return <>
    <div
      ref={scrollerRef}
      onScroll={() => { if (!frame.current) frame.current = requestAnimationFrame(() => { frame.current = 0; measure(); }); }}
      className={`-mx-6 px-6 md:mx-auto md:px-0 overflow-x-auto md:overflow-visible snap-x snap-proximity overscroll-x-contain [touch-action:pan-x_pan-y] [-webkit-overflow-scrolling:touch] pb-6 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [contain:paint] md:[contain:none] ${containerClassName}`}
    >
      <div ref={trackRef} className={`flex gap-5 w-max md:w-auto ${trackClassName}`}>
        {children}
      </div>
    </div>
    <div className="flex items-center justify-center gap-3 md:hidden">
      <button type="button" onClick={() => step(-1)} disabled={atStart} aria-label={prevLabel} className={arrow}>
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button type="button" onClick={() => step(1)} disabled={atEnd} aria-label={nextLabel} className={arrow}>
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  </>;
};
