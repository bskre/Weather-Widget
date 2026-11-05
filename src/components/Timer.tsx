import { useState, useEffect } from 'react';

interface TimerProps {
  timezone: string;
}

export const Timer = ({ timezone }: TimerProps) => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {new Intl.DateTimeFormat('ru-RU', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }).format(time)}
    </div>
  );
};