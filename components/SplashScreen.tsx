
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Terminal } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fake loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 5;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const tl = gsap.timeline({
        onComplete: onComplete
      });

      tl.to(textRef.current, {
        opacity: 0,
        y: -50,
        duration: 0.5,
        ease: 'power2.in'
      })
      .to(containerRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: 'power4.inOut'
      });
    }
  }, [progress, onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-deepSpace text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neonPurple/20 via-transparent to-transparent opacity-50"></div>
      
      <div ref={textRef} className="relative z-10 flex flex-col items-center">
        <div className="mb-8 p-4 rounded-full border border-neonCyan/30 bg-neonCyan/5 shadow-[0_0_30px_rgba(0,243,255,0.2)] animate-pulse">
          <Terminal size={48} className="text-neonCyan" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
          PAVAN<span className="text-neonPurple">.DEV</span>
        </h1>
        
        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mt-4 relative">
          <div 
            className="h-full bg-gradient-to-r from-neonCyan to-neonPurple transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="mt-4 font-mono text-xs text-neonCyan tracking-widest">
          SYSTEM INITIALIZING... {Math.min(progress, 100)}%
        </div>
      </div>

      {/* Background Matrix-like effect placeholders */}
      <div className="absolute top-10 left-10 text-xs font-mono text-white/10 hidden md:block">
        &lt;boot_sequence&gt;<br/>
        &nbsp;&nbsp;loading_modules...<br/>
        &nbsp;&nbsp;initializing_ui...<br/>
        &lt;/boot_sequence&gt;
      </div>
    </div>
  );
};

export default SplashScreen;
