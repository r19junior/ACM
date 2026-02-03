
import React, { useState, useEffect } from 'react';

interface Props {
  targetDate: string;
}

const CountdownPanel: React.FC<Props> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculate = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };
    const timer = setInterval(calculate, 1000);
    calculate();
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="relative bg-[#0d0d0e]/60 border border-white/10 p-12 overflow-hidden flex flex-col justify-center shadow-[0_0_50px_rgba(255,45,45,0.03)] group">
      {/* Decorative Red Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff2d2d]/40 to-transparent"></div>
      
      <div className="flex justify-between items-center mb-8">
        <div className="text-[10px] text-white/40 tracking-[0.5em] uppercase font-bold">
          <span className="text-[#ff2d2d]">T-MINUS</span>_INIT_SEQUENCE
        </div>
        <div className="text-[7px] font-mono text-white/20 animate-pulse">0x88_READY</div>
      </div>
      
      <div className="flex gap-10 items-baseline">
        <div className="flex flex-col">
          <span className="text-7xl font-light text-white tracking-tighter group-hover:text-[#ff2d2d] transition-colors duration-500">{timeLeft.days.toString().padStart(3, '0')}</span>
          <span className="text-[8px] text-white/30 uppercase mt-2 font-bold tracking-[0.4em]">Days</span>
        </div>
        <div className="text-4xl text-[#ff2d2d]/20 animate-pulse">:</div>
        <div className="flex flex-col">
          <span className="text-7xl font-light text-white tracking-tighter">{timeLeft.hours.toString().padStart(2, '0')}</span>
          <span className="text-[8px] text-white/30 uppercase mt-2 font-bold tracking-[0.4em]">Hours</span>
        </div>
        <div className="text-4xl text-[#ff2d2d]/20 animate-pulse">:</div>
        <div className="flex flex-col">
          <span className="text-7xl font-light text-white tracking-tighter">{timeLeft.minutes.toString().padStart(2, '0')}</span>
          <span className="text-[8px] text-white/30 uppercase mt-2 font-bold tracking-[0.4em]">Mins</span>
        </div>
      </div>

      <div className="mt-12 h-[2px] bg-white/5 relative overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full bg-[#ff2d2d] transition-all duration-1000 shadow-[0_0_10px_#ff2d2d]" 
          style={{ width: `${(timeLeft.seconds / 60) * 100}%` }}
        ></div>
      </div>
      <div className="mt-3 flex justify-between items-center">
        <span className="text-[8px] text-[#ff2d2d]/40 font-mono italic">REAL_TIME_PULSE_ESTABLISHED</span>
        <span className="text-[8px] text-white/10 font-mono tracking-widest uppercase">BUFF_SIZE_1024</span>
      </div>
    </div>
  );
};

export default CountdownPanel;
