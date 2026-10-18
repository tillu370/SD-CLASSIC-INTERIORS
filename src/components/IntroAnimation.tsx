import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'black' | 'drawing' | 'wordmark' | 'doors' | 'done'>('black');
  const [canSkip, setCanSkip] = useState(false);

  const finishIntro = useCallback(() => {
    try {
      sessionStorage.setItem('sd_classic_intro_seen', 'true');
    } catch {
      // Ignore
    }
    setPhase('done');
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    // Check if already viewed in this browser session
    try {
      const seen = sessionStorage.getItem('sd_classic_intro_seen');
      if (seen) {
        onComplete();
        return;
      }
    } catch {
      // In case sessionStorage is blocked
    }

    // Allow user to skip anytime via Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        finishIntro();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // Sequence timing
    // 0. Scene A: Short silent black screen pause (300ms)
    const t1 = setTimeout(() => {
      setPhase('drawing');
      setCanSkip(true);
    }, 400);

    // 1. Scene B: Wordmark & tagline reveal (after monogram lines draw)
    const t2 = setTimeout(() => {
      setPhase('wordmark');
    }, 2000);

    // 2. Hold completed logo, then Scene C: Architectural doors open
    const t3 = setTimeout(() => {
      setPhase('doors');
    }, 3400);

    // 3. Scene D: Enter website & mark as complete
    const t4 = setTimeout(() => {
      finishIntro();
    }, 4600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete, finishIntro]);

  if (phase === 'done') return null;

  const showWordmark = phase === 'wordmark' || phase === 'doors';

  return (
    <div 
      className="fixed inset-0 z-50 overflow-hidden select-none pointer-events-auto bg-black"
      role="dialog"
      aria-modal="true"
      aria-label="Brand introduction sequence"
    >
      {/* Skip button for keyboard & accessibility */}
      {canSkip && phase !== 'doors' && (
        <button
          onClick={finishIntro}
          className="absolute top-6 right-8 z-50 text-xs tracking-[0.25em] text-mid-grey hover:text-white uppercase transition-colors duration-300 flex items-center space-x-2 py-2 px-3 border border-graphite/40 hover:border-white/40 bg-pure-black/60 backdrop-blur-sm focus:outline-none focus:ring-1 focus:ring-white"
          aria-label="Skip introduction animation"
        >
          <span>SKIP INTRO</span>
          <span className="text-[10px] text-graphite ml-1 hidden sm:inline">[ESC]</span>
        </button>
      )}

      {/* Perspective Container for 3D Architectural Double Doors */}
      <div className="relative w-full h-full perspective-container flex">
        {/* LEFT DOOR PANEL: Pure Black Architectural Surface */}
        <motion.div
          initial={{ rotateY: 0, x: 0 }}
          animate={
            phase === 'doors' 
              ? { 
                  rotateY: -75, 
                  x: '-105%', 
                  opacity: [1, 1, 0] 
                } 
              : { rotateY: 0, x: 0 }
          }
          transition={{ 
            duration: 1.3, 
            ease: [0.77, 0, 0.175, 1] 
          }}
          style={{ transformOrigin: 'left center' }}
          className="w-1/2 h-full bg-[#080808] border-r border-[#1a1a1a] relative flex items-center justify-end overflow-hidden shadow-[25px_0_50px_rgba(0,0,0,0.8)]"
        >
          {/* Subtle architectural vertical texture lines */}
          <div className="absolute inset-0 architectural-grid opacity-30 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          
          {/* Left half of centered logo container */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[340px] sm:w-[460px] pointer-events-none pr-3">
            {/* The SVG drawing animation */}
            <LogoConstruction phase={phase} />
          </div>
        </motion.div>

        {/* RIGHT DOOR PANEL: Off-White / Architectural Light Grey Surface */}
        <motion.div
          initial={{ rotateY: 0, x: 0 }}
          animate={
            phase === 'doors' 
              ? { 
                  rotateY: 75, 
                  x: '105%', 
                  opacity: [1, 1, 0] 
                } 
              : { rotateY: 0, x: 0 }
          }
          transition={{ 
            duration: 1.3, 
            ease: [0.77, 0, 0.175, 1] 
          }}
          style={{ transformOrigin: 'right center' }}
          className="w-1/2 h-full bg-[#111111] border-l border-[#1a1a1a] relative flex items-center justify-start overflow-hidden shadow-[-25px_0_50px_rgba(0,0,0,0.8)]"
        >
          {/* Architectural grid overlay */}
          <div className="absolute inset-0 architectural-grid opacity-30 pointer-events-none" />
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />

          {/* Right half of centered logo container */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[340px] sm:w-[460px] pointer-events-none pl-3">
            <LogoConstruction phase={phase} />
          </div>
        </motion.div>

        {/* Center Vertical Architectural Joint Line */}
        {phase !== 'doors' && (
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none z-20" />
        )}

        {/* Wordmark Lockup — rendered once, centered above both doors, so the fine
            serif letterforms never suffer a seam-registration mismatch like a
            split-and-clipped duplicate would. */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[88px] sm:translate-y-[108px] flex flex-col items-center pointer-events-none z-30">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={showWordmark ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.5 }}
            className="w-10 sm:w-14 h-[1px] bg-gradient-to-r from-transparent via-mid-grey to-transparent mb-5 sm:mb-6"
          />
          <div className="overflow-hidden w-full max-w-[230px] sm:max-w-[300px]">
            <motion.img
              src="/images/logo2_trimmed.png"
              alt="SD Classic Interiors - Imagine Every Inch"
              initial={{ y: 16, opacity: 0 }}
              animate={showWordmark ? { y: 0, opacity: 1 } : { y: 16, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Sub-component: Official SD Monogram reveal (split cleanly across both doors)
const LogoConstruction: React.FC<{ phase: 'black' | 'drawing' | 'wordmark' | 'doors' | 'done' }> = ({ phase }) => {
  const isDrawingOrLater = phase !== 'black';
  const showWordmark = phase === 'wordmark' || phase === 'doors';

  return (
    <div className="flex flex-col items-center justify-center text-center w-full">
      {/* Official SD Monogram Emblem */}
      <div className="relative w-28 h-28 sm:w-36 sm:h-36 mb-8 sm:mb-9">
        <svg
          viewBox="0 0 320 320"
          className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Architectural Drafting Grid & Guide Lines */}
          <motion.line
            x1="40"
            y1="160"
            x2="280"
            y2="160"
            stroke="#303030"
            strokeWidth="0.8"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isDrawingOrLater ? { pathLength: 1, opacity: 0.4 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          />
          <motion.line
            x1="160"
            y1="30"
            x2="160"
            y2="290"
            stroke="#303030"
            strokeWidth="0.8"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isDrawingOrLater ? { pathLength: 1, opacity: 0.4 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          />

          {/* Drafting Circle Guide */}
          <motion.circle
            cx="160"
            cy="160"
            r="110"
            stroke="#303030"
            strokeWidth="0.6"
            strokeDasharray="6 6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isDrawingOrLater ? { pathLength: 1, opacity: 0.35 } : {}}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
        </svg>

        {/* Official brand monogram image, scaling in over the drafting guides */}
        <motion.img
          src="/images/logo1_trimmed.png"
          alt="SD Classic Interiors Monogram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isDrawingOrLater ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full object-contain p-2"
        />

        {/* Ambient subtle glow when completed */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={showWordmark ? { opacity: 0.25 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-white/20 blur-xl rounded-full pointer-events-none"
        />
      </div>
    </div>
  );
};
