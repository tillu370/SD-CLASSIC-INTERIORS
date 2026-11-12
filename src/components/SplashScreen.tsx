import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface SplashScreenProps {
  onFinish: () => void;
}

type Stage = 'enter' | 'reveal' | 'exit' | 'done';

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [stage, setStage] = useState<Stage>('enter');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Stage 1: Reveal the logo & typography
    const timer1 = setTimeout(() => setStage('reveal'), 200);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    // Stage 2: Curtain exit / Home screen reveal
    const timer2 = setTimeout(() => setStage('exit'), 2400);

    // Stage 3: Unmount splash screen
    const timer3 = setTimeout(() => {
      setStage('done');
      onFinish();
    }, 3100);

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
  const revealed = stage !== 'enter';

  return (
    <div
      className={`fixed inset-0 z-50 pointer-events-auto overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        isExiting ? 'opacity-0 pointer-events-none -translate-y-6 scale-[1.02]' : 'opacity-100'
      }`}
      aria-label="Welcome to SD Classic Interiors"
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`absolute inset-0 bg-pure-black transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isExiting ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        {/* Skip Button */}
        <button
          onClick={handleSkip}
          className="absolute top-8 right-8 z-30 text-[10px] font-mono tracking-widest uppercase text-light-grey/70 hover:text-white transition-colors duration-300 flex items-center space-x-1.5"
        >
          <span>ENTER SITE</span>
          <ArrowRight className="w-3 h-3" />
        </button>

        {/* Center Logo & Brand Reveal Sequence */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4">
          <div className="max-w-md w-full text-center space-y-6">

            {/* Original Logo Mark */}
            <div
              className={`relative mx-auto w-24 h-24 sm:w-28 sm:h-28 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                revealed ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
            >
              <img
                src="/images/20261111_220010.png"
                alt="SD Classic Interiors"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Brand Title & Typography Reveal */}
            <div
              className={`space-y-2 transition-all duration-1000 delay-150 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <h1>
                <img
                  src="/images/logo_text_white.png"
                  alt="SD Classic Interiors — Imagine Every Inch"
                  className="w-full max-w-[360px] sm:max-w-[440px] h-auto mx-auto"
                />
              </h1>
            </div>

            {/* Loading Hairline */}
            <div
              className={`pt-5 max-w-xs mx-auto transition-all duration-700 delay-300 ${
                revealed ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="w-full h-px bg-graphite/50 relative overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-white/80 transition-all duration-75 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
