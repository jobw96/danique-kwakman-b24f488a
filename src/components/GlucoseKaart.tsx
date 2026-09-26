import React, { useEffect, useId, useRef } from 'react';

/**
 * Geanimeerde glucosegrafiek, overgezet uit het aangeleverde ontwerp.
 *
 * De animatie loopt in drie stappen: eerst verschijnt de blauwe streefband,
 * daarna tekent de meetlijn zich van links naar rechts, en tot slot springt de
 * eindstip op. De lijn wordt getekend met pathLength 1, zodat de
 * streepafstand onafhankelijk is van de echte padlengte en beide grafieken
 * even snel lopen ondanks hun verschillende lengte.
 *
 * Het deel van de lijn dat onder de ondergrens zakt is een tweede pad in de
 * donkere beigetint, afgesneden op die hoogte. Zo kleurt alleen dat stuk om,
 * zonder het pad te hoeven splitsen.
 *
 * De kleuren komen uit de tokens in styles.css, niet als vaste hex uit het
 * ontwerp: past de huisstijl zich aan, dan volgt de grafiek vanzelf.
 *
 * Het aangeleverde ontwerp liet je de animatie opnieuw afspelen door op de
 * kaart te klikken. Dat is hier weggelaten: om dat met het toetsenbord te
 * kunnen bedienen moet de kaart een knop zijn, en dan leest een schermlezer
 * alleen nog het knoplabel voor in plaats van de beschrijving van de grafiek.
 * De animatie speelt bij het in beeld komen, en dat is waar het om gaat.
 */

type Variant = 'boven' | 'onder';

const GRAFIEK: Record<
  Variant,
  {
    waarde: string;
    richting: 'stijgend' | 'dalend';
    kopKleur: string;
    stipKleur: string;
    stipY: number;
    pad: string;
    uren: string[];
    omschrijving: string;
  }
> = {
  boven: {
    waarde: '7,7',
    richting: 'stijgend',
    kopKleur: 'hsl(var(--primary-dark))',
    stipKleur: 'hsl(var(--primary-dark))',
    stipY: 155.5,
    pad: 'M12 230.3 C13.0 232.0 18.2 241.6 20.3 243.9 C22.4 246.2 26.4 249.5 28.5 248.4 C30.6 247.3 34.7 237.4 36.8 234.8 C38.9 232.3 42.9 228.3 45 228 C47.1 227.7 51.2 231.4 53.3 232.5 C55.4 233.6 59.4 236.0 61.5 237.1 C63.6 238.2 67.7 240.8 69.8 241.6 C71.9 242.4 76.0 244.8 78.1 243.9 C80.2 243.1 84.2 237.1 86.3 234.8 C88.4 232.5 92.5 226.3 94.6 225.7 C96.7 225.1 100.7 228.6 102.8 230.3 C104.9 232.0 109.0 237.0 111.1 239.3 C113.2 241.6 117.3 248.4 119.4 248.4 C121.5 248.4 125.5 243.3 127.6 239.3 C129.7 235.3 133.8 220.4 135.9 216.7 C138.0 213.0 142.0 209.9 144.1 209.9 C146.2 209.9 150.3 216.7 152.4 216.7 C154.5 216.7 158.5 210.5 160.6 209.9 C162.7 209.3 166.8 210.4 168.9 212.1 C171.0 213.8 175.1 220.7 177.2 223.5 C179.3 226.3 183.3 233.4 185.4 234.8 C187.5 236.2 191.6 236.5 193.7 234.8 C195.8 233.1 199.8 224.0 201.9 221.2 C204.0 218.4 208.1 212.1 210.2 212.1 C212.3 212.1 216.4 218.6 218.5 221.2 C220.6 223.8 224.6 230.2 226.7 232.5 C228.8 234.8 232.9 238.2 235 239.3 C237.1 240.4 241.1 243.3 243.2 241.6 C245.3 239.9 249.4 233.1 251.5 225.7 C253.6 218.3 257.6 191.5 259.7 182.7 C261.8 173.9 267.0 158.9 268 155.5',
    uren: ['16:00', '17:00', '18:00', '19:00'],
    omschrijving:
      'Voorbeeld van een glucosegrafiek met een waarde van 7,7 millimol per liter binnen het ingestelde bereik',
  },
  onder: {
    waarde: '3,7',
    richting: 'dalend',
    kopKleur: 'hsl(var(--secondary-dark))',
    stipKleur: 'hsl(var(--secondary-dark))',
    stipY: 246.1,
    pad: 'M12 221.2 C13.0 220.6 18.0 217.8 20 216.7 C22.0 215.6 26.0 212.7 28 212.1 C30.0 211.5 34.0 212.7 36 212.1 C38.0 211.5 42.0 207.9 44 207.6 C46.0 207.3 50.0 208.5 52 209.9 C54.0 211.3 58.0 216.9 60 218.9 C62.0 220.9 66.0 225.1 68 225.7 C70.0 226.3 74.0 223.8 76 223.5 C78.0 223.2 82.0 223.2 84 223.5 C86.0 223.8 90.0 225.4 92 225.7 C94.0 226.0 98.0 225.7 100 225.7 C102.0 225.7 106.0 225.4 108 225.7 C110.0 226.0 114.0 228.3 116 228 C118.0 227.7 122.0 224.3 124 223.5 C126.0 222.7 130.0 220.3 132 221.2 C134.0 222.0 138.0 229.7 140 230.3 C142.0 230.9 146.0 226.0 148 225.7 C150.0 225.4 154.0 227.4 156 228 C158.0 228.6 162.0 231.2 164 230.3 C166.0 229.5 170.0 222.6 172 221.2 C174.0 219.8 178.0 219.2 180 218.9 C182.0 218.6 186.0 218.6 188 218.9 C190.0 219.2 194.0 223.8 196 221.2 C198.0 218.6 202.0 206.7 204 198.5 C206.0 190.3 210.0 160.6 212 155.5 C214.0 150.4 218.0 154.3 220 157.7 C222.0 161.1 226.0 176.8 228 182.7 C230.0 188.6 234.0 202.8 236 205.3 C238.0 207.9 242.0 202.5 244 203.1 C246.0 203.7 250.0 207.1 252 209.9 C254.0 212.7 258.0 221.2 260 225.7 C262.0 230.2 267.0 243.5 268 246.1',
    uren: ['10:00', '11:00', '12:00', '13:00'],
    omschrijving:
      'Voorbeeld van een glucosegrafiek met een lage glucosewaarde van 3,7 millimol per liter',
  },
};

const BAND_MS = 450;
const LIJN_MS = 1600;
const STIP_MS = 380;

const klem = (t: number) => Math.max(0, Math.min(1, t));
const uitDemping = (t: number) => 1 - Math.pow(1 - t, 3);
/** Schiet iets door en veert terug, zodat de stip opvalt zonder te stuiteren. */
const doorschot = (t: number) => {
  const s = 1.8;
  const u = t - 1;
  return u * u * ((s + 1) * u + s) + 1;
};

export const GlucoseKaart = ({
  variant,
  vertraging = 0,
  children,
}: {
  variant: Variant;
  /** Milliseconden wachten na het in beeld komen, om twee grafieken te spreiden. */
  vertraging?: number;
  /** Het bijschrift naast de grafiek. */
  children: React.ReactNode;
}) => {
  const g = GRAFIEK[variant];
  const uniek = useId().replace(/:/g, '');
  const wortel = useRef<HTMLDivElement>(null);
  const band = useRef<SVGRectElement>(null);
  const lijnen = useRef<SVGPathElement[]>([]);
  const stip = useRef<SVGCircleElement>(null);
  const frame = useRef<number>();

  useEffect(() => {
    const zet = (b: number, l: number, d: number) => {
      if (band.current) band.current.style.opacity = String(b);
      lijnen.current.forEach((p) => p && (p.style.strokeDashoffset = String(1 - l)));
      if (stip.current) {
        stip.current.style.opacity = String(Math.min(1, d * 2));
        stip.current.style.transform = `scale(${d})`;
      }
    };

    const rustig = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (rustig) {
      zet(1, 1, 1);
      return;
    }

    const speel = () => {
      if (frame.current) cancelAnimationFrame(frame.current);
      zet(0, 0, 0);
      const start = performance.now() + vertraging;
      const tik = (nu: number) => {
        const t = nu - start;
        const na = klem((t - BAND_MS - LIJN_MS) / STIP_MS);
        zet(klem(t / BAND_MS), uitDemping(klem((t - BAND_MS) / LIJN_MS)), na === 0 ? 0 : doorschot(na));
        if (t < BAND_MS + LIJN_MS + STIP_MS) frame.current = requestAnimationFrame(tik);
      };
      frame.current = requestAnimationFrame(tik);
    };

    const el = wortel.current;
    if (!el) return;

    // Speelt zodra de grafiek voor 40% in beeld staat, en daarna niet opnieuw.
    const kijker = new IntersectionObserver(
      (items) => {
        items.forEach((i) => {
          if (!i.isIntersecting) return;
          kijker.unobserve(i.target);
          speel();
        });
      },
      { threshold: 0.4 },
    );
    kijker.observe(el);

    return () => {
      kijker.disconnect();
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [vertraging]);

  return (
    <figure className="overflow-hidden rounded-2xl border border-secondary/40 bg-card">
      {/* De gekleurde balk loopt over de volle kaartbreedte, dus staat hij
          boven het raster en niet in de grafiekkolom. */}
      <div
        className="flex items-center gap-3 px-5 py-4 text-primary-foreground"
        style={{ backgroundColor: g.kopKleur }}
      >
        <span className="flex items-baseline gap-1.5">
          <span className="text-[40px] font-medium leading-[44px] tracking-[-0.5px]">{g.waarde}</span>
          <span className="text-sm font-medium leading-[22px]">mmol/l</span>
        </span>
        {g.richting === 'stijgend' ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 17 17 7" />
            <path d="M8 7h9v9" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 7 17 17" />
            <path d="M17 8v9H8" />
          </svg>
        )}
      </div>

      <div className="grid sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div ref={wortel} className="px-2 pb-2 pt-3">
      <svg
        viewBox="-22 0 302 322"
        role="img"
        aria-label={g.omschrijving}
        className="block h-auto w-full"
      >
        <defs>
          <clipPath id={`onder-${uniek}`}>
            <rect x="-22" y="241.6" width="302" height="80.4" />
          </clipPath>
        </defs>

        <g fontSize="11" fill="hsl(var(--muted-foreground))" textAnchor="end">
          <text x="-20" y="12" textAnchor="start">mmol/l</text>
          <text x="4" y="266">3</text>
          <text x="4" y="198">6</text>
          <text x="4" y="130">9</text>
          <text x="4" y="62">12</text>
        </g>

        {/* Streefbereik. Verschijnt als eerste, zodat de lijn daarna iets is om
            tegen af te lezen in plaats van een losse curve. */}
        <rect
          ref={band}
          x="12"
          y="103.3"
          width="256"
          height="138.3"
          fill="hsl(var(--primary))"
          fillOpacity="0.22"
          rx="2"
          style={{ opacity: 0 }}
        />

        <g stroke="hsl(var(--secondary))" strokeWidth="1" strokeDasharray="2 4">
          <line x1="12" x2="268" y1="262" y2="262" />
          <line x1="12" x2="268" y1="194" y2="194" />
          <line x1="12" x2="268" y1="126" y2="126" />
          <line x1="12" x2="268" y1="58" y2="58" />
        </g>

        <g fontSize="11" fill="hsl(var(--muted-foreground))">
          <text x="12" y="314">{g.uren[0]}</text>
          <text x="98" y="314" textAnchor="middle">{g.uren[1]}</text>
          <text x="183" y="314" textAnchor="middle">{g.uren[2]}</text>
          <text x="268" y="314" textAnchor="end">{g.uren[3]}</text>
        </g>

        <line x1="12" x2="268" y1="296" y2="296" stroke="hsl(var(--secondary))" />

        <path
          ref={(el) => el && (lijnen.current[0] = el)}
          d={g.pad}
          pathLength={1}
          strokeDasharray="1"
          strokeDashoffset="1"
          fill="none"
          stroke="hsl(var(--foreground))"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          ref={(el) => el && (lijnen.current[1] = el)}
          d={g.pad}
          clipPath={`url(#onder-${uniek})`}
          pathLength={1}
          strokeDasharray="1"
          strokeDashoffset="1"
          fill="none"
          stroke="hsl(var(--secondary-dark))"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <circle
          ref={stip}
          cx="268"
          cy={g.stipY}
          r="6"
          fill={g.stipKleur}
          stroke="hsl(var(--card))"
          strokeWidth="2.5"
          style={{ opacity: 0, transformBox: 'fill-box', transformOrigin: 'center' }}
        />
      </svg>
        </div>
        {children}
      </div>
    </figure>
  );
};
