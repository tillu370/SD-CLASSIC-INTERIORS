import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface SplashScreenProps {
  onFinish: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [stage, setStage] = useState<'enter' | 'reveal' | 'exit' | 'done'>('enter');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Stage 1: Reveal logo & typography (starts immediately)
    const timer1 = setTimeout(() => {
      setStage('reveal');
    }, 200);

    // Progress counter animation from 0 to 100
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 35);

    // Stage 2: Curtain exit / Home screen reveal
    const timer2 = setTimeout(() => {
      setStage('exit');
    }, 2200);

    // Stage 3: Unmount splash screen
    const timer3 = setTimeout(() => {
      setStage('done');
      onFinish();
    }, 2850);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearInterval(progressInterval);
    };
  }, [onFinish]);

  const handleSkip = () => {
    setStage('exit');
    setTimeout(() => {
      setStage('done');
      onFinish();
    }, 400);
  };

  if (stage === 'done') {
    return null;
  }

  const isExiting = stage === 'exit';

  return (
    <div 
      className={`fixed inset-0 z-50 pointer-events-auto overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        isExiting ? 'opacity-0 pointer-events-none -translate-y-6 scale-[1.02]' : 'opacity-100'
      }`}
      aria-label="Welcome to SD Classic Interiors"
      role="dialog"
      aria-modal="true"
    >
      {/* Upper Architectural Shutter (Black & Charcoal) */}
      <div 
        className={`absolute inset-0 bg-[#000000] transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isExiting ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        {/* Subtle Architectural Grid */}
        <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

        {/* Ambient Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(48,48,48,0.35)_0%,rgba(0,0,0,0.95)_75%)]" />

        {/* Corner Architectural Registration Crosshairs */}
        <div className="absolute top-8 left-8 text-mid-grey/40 font-mono text-xs select-none pointer-events-none">
          + 17°43'N 83°17'E · VIZAG
        </div>
        <div className="absolute top-8 right-8 text-mid-grey/40 font-mono text-xs select-none pointer-events-none">
          DIVISIONS: 01 · 02 · 03 +
        </div>
        <div className="absolute bottom-8 left-8 text-mid-grey/40 font-mono text-xs select-none pointer-events-none">
          + SD CLASSIC ARCHITECTURAL STUDIO
        </div>
        <div className="absolute bottom-8 right-8 text-mid-grey/40 font-mono text-xs select-none pointer-events-none">
          IMAGINE EVERY INCH +
        </div>

        {/* Skip Button */}
        <button
          onClick={handleSkip}
          className="absolute top-8 right-8 z-30 px-4 py-1.5 rounded-full bg-white/5 hover:bg-white hover:text-pure-black text-light-grey border border-graphite text-[10px] font-mono tracking-widest uppercase transition-all duration-300 flex items-center space-x-1"
        >
          <span>ENTER SITE</span>
          <ArrowRight className="w-3 h-3" />
        </button>

        {/* Center Logo & Brand Reveal Sequence */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4">
          <div className="max-w-md w-full text-center space-y-6">
            
            {/* Logo Mark with Ambient Frame */}
            <div 
              className={`relative mx-auto transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                stage !== 'enter' ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
            >
              {/* Refined Circular Glow Aura */}
              <div className="absolute inset-0 rounded-full bg-white/5 filter blur-xl scale-125" />
              
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full bg-pure-black border border-graphite flex items-center justify-center p-3 shadow-[0_25px_50px_rgba(0,0,0,0.9)]">
                <img
                  src="/images/logo1_trimmed.png"
                  alt="SD Classic Interiors Official Logo"
                  className="w-full h-full object-contain filter brightness-110 drop-shadow-[0_5px_15px_rgba(255,255,255,0.15)]"
                />
              </div>
            </div>

            {/* Brand Title & Typography Reveal */}
            <div 
              className={`space-y-2 transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                stage !== 'enter' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif tracking-[0.22em] text-white uppercase font-light">
                SD CLASSIC INTERIORS
              </h1>
              
              <div className="flex items-center justify-center space-x-3 text-mid-grey">
                <div className="w-8 h-[1px] bg-graphite" />
                <p className="text-[10px] sm:text-xs font-mono tracking-[0.32em] uppercase text-light-grey/80">
                  IMAGINE EVERY INCH · EST. 2019
                </p>
                <div className="w-8 h-[1px] bg-graphite" />
              </div>
            </div>

            {/* Architectural Loading Hairline & Status Indicator */}
            <div 
              className={`pt-6 space-y-3 max-w-xs mx-auto transition-all duration-700 delay-300 ${
                stage !== 'enter' ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="w-full h-[1px] bg-graphite/50 relative overflow-hidden">
                <div 
                  className="absolute inset-y-0 left-0 bg-white transition-all duration-75 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-mid-grey">
                <span>VISAKHAPATNAM · STUDIO</span>
                <span className="text-white">{progress}%</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
