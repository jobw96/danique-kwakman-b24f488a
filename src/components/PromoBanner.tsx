import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/lib/router-compat';
import { getPromotionTimeLeft } from '@/lib/promo-countdown';

const Unit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <span className="tabular-nums">
    {String(value).padStart(2, '0')}
    <span className="text-[10px] ml-0.5 opacity-80">{label}</span>
  </span>
);

export const PromoBanner: React.FC = () => {
  const [time, setTime] = useState<ReturnType<typeof getPromotionTimeLeft>>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTime(getPromotionTimeLeft(Date.now()));
    setReady(true);
    const id = setInterval(() => setTime(getPromotionTimeLeft(Date.now())), 1000);
    return () => clearInterval(id);
  }, []);

  if (ready && !time) return null;

  return (
    <aside aria-label="Tijdelijke trajectkorting" className="bg-primary-deep text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-2 flex flex-col sm:flex-row items-center justify-center gap-x-5 gap-y-1 text-xs leading-5">
        <Link to="/behandelingen" className="inline-flex items-center gap-1 text-center underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2">
          <span>{'Tijdelijk tot 28% korting op mijn 1:1 trajecten – '}<span className="block sm:inline">t/m 31 december!</span></span>
          <ArrowUpRight size={14} className="shrink-0" aria-hidden="true" />
        </Link>
        <div role="timer" aria-live="off" aria-label="Resterende tijd tot de actie eindigt" className="flex items-center gap-1.5 whitespace-nowrap min-w-40 justify-center">
          <Unit value={time?.days ?? 0} label="dagen" />
          <span className="opacity-60">:</span>
          <Unit value={time?.hours ?? 0} label="u" />
          <span className="opacity-60">:</span>
          <Unit value={time?.minutes ?? 0} label="m" />
          <span className="opacity-60">:</span>
          <Unit value={time?.seconds ?? 0} label="s" />
        </div>
      </div>
    </aside>
  );
};

export default PromoBanner;
