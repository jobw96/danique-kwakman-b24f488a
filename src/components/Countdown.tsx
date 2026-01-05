import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-secondary/50 border border-secondary flex items-center justify-center">
        <span className="text-lg md:text-xl font-medium text-foreground">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs text-muted-foreground mt-1.5">{label}</span>
    </div>
  );

  return (
    <div className="flex items-center justify-center gap-2 md:gap-3 mb-8">
      <TimeBlock value={timeLeft.days} label="dagen" />
      <span className="text-muted-foreground text-lg font-light mt-[-1rem]">:</span>
      <TimeBlock value={timeLeft.hours} label="uren" />
      <span className="text-muted-foreground text-lg font-light mt-[-1rem]">:</span>
      <TimeBlock value={timeLeft.minutes} label="min" />
      <span className="text-muted-foreground text-lg font-light mt-[-1rem]">:</span>
      <TimeBlock value={timeLeft.seconds} label="sec" />
    </div>
  );
};
