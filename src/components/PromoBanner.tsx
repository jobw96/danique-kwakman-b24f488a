import React, { useEffect, useState } from 'react';

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
  <span className="tabular-nums">
    {String(value).padStart(2, '0')}
    <span className="text-[9px] uppercase ml-0.5 opacity-70">{label}</span>
  </span>
);

export const PromoBanner: React.FC = () => {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  return (
    <div className="bg-secondary text-foreground">
      <div className="container mx-auto px-4 py-1.5 flex items-center justify-center gap-x-3 text-[11px] sm:text-xs tracking-wide">
        <span className="font-medium">Zomeractie t/m 1 juli — Hormoontraject &amp; Darmtraject</span>
        <span className="opacity-40">|</span>
        <div className="flex items-center gap-1.5">
          <Unit value={time.days} label="d" />
          <span className="opacity-50">:</span>
          <Unit value={time.hours} label="u" />
          <span className="opacity-50">:</span>
          <Unit value={time.minutes} label="m" />
          <span className="opacity-50">:</span>
          <Unit value={time.seconds} label="s" />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
