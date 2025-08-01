import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

export const CountdownTimer = ({ targetDate, className = "" }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={`flex gap-4 justify-center ${className}`}>
      <div className="text-center">
        <div className="bg-card border rounded-lg p-3 min-w-[60px] shadow-soft">
          <div className="text-2xl font-bold text-foreground">{timeLeft.days}</div>
          <div className="text-xs text-muted-foreground uppercase tracking-wide">Days</div>
        </div>
      </div>
      <div className="text-center">
        <div className="bg-card border rounded-lg p-3 min-w-[60px] shadow-soft">
          <div className="text-2xl font-bold text-foreground">{timeLeft.hours}</div>
          <div className="text-xs text-muted-foreground uppercase tracking-wide">Hours</div>
        </div>
      </div>
      <div className="text-center">
        <div className="bg-card border rounded-lg p-3 min-w-[60px] shadow-soft">
          <div className="text-2xl font-bold text-foreground">{timeLeft.minutes}</div>
          <div className="text-xs text-muted-foreground uppercase tracking-wide">Min</div>
        </div>
      </div>
      <div className="text-center">
        <div className="bg-card border rounded-lg p-3 min-w-[60px] shadow-soft">
          <div className="text-2xl font-bold text-foreground">{timeLeft.seconds}</div>
          <div className="text-xs text-muted-foreground uppercase tracking-wide">Sec</div>
        </div>
      </div>
    </div>
  );
};