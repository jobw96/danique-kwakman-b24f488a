import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

const TARGET = new Date('2026-07-01T00:00:00+02:00').getTime();

function getTimeLeft() {
  const diff = TARGET - Date.now();
  if (diff <= 0) return null;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

const Unit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center leading-none">
    <span className="font-semibold tabular-nums text-[13px] sm:text-sm">
      {String(value).padStart(2, '0')}
    </span>
    <span className="text-[9px] sm:text-[10px] uppercase tracking-wider opacity-80">{label}</span>
  </div>
);

export const PromoBanner: React.FC = () => {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs sm:text-sm">
        <div className="flex items-center gap-2">
          <Zap className="w-3.5 h-3.5" />
          <span className="font-medium">Zomeractie t/m 1 juli</span>
          <span className="hidden sm:inline opacity-90">— Hormoontraject €249/mnd · Darmtraject €200/mnd</span>
        </div>
        <div className="flex items-center gap-2">
          <Unit value={time.days} label="dgn" />
          <span className="opacity-60">:</span>
          <Unit value={time.hours} label="uur" />
          <span className="opacity-60">:</span>
          <Unit value={time.minutes} label="min" />
          <span className="opacity-60">:</span>
          <Unit value={time.seconds} label="sec" />
        </div>
        <Link
          to="/behandelingen"
          className="underline underline-offset-2 hover:opacity-80 transition-opacity font-medium"
        >
          Bekijk trajecten
        </Link>
      </div>
    </div>
  );
};

export default PromoBanner;
