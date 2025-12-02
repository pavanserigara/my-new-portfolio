
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TextRevealSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=100%', // Reduced pinned distance to prevent it from sticking too long
        pin: true,
        pinSpacing: true, // Explicitly ensure spacing is added
        scrub: 1,
      }
    });

    tl.fromTo(textRef.current, 
      { 
        opacity: 0, 
        scale: 0.5, 
        filter: 'blur(20px)',
        y: 100
      },
      { 
        opacity: 1, 
        scale: 1, 
        filter: 'blur(0px)', 
        y: 0,
        ease: 'power2.out',
      }
    ).to({}, { duration: 0.2 }); // Short pause
    
  }, []);

  return (
    <section ref={containerRef} className="h-screen flex flex-col items-center justify-center bg-deepSpace relative overflow-hidden z-20 border-t border-b border-white/5">
      {/* Background Ambience - Solid bg-deepSpace ensures no transparency issues */}
      <div className="absolute inset-0 bg-deepSpace z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neonPurple/10 via-deepSpace to-deepSpace pointer-events-none z-1"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-pulse z-1"></div>
      
      <div className="text-center px-6 max-w-7xl relative z-10">
        <h2 
          ref={textRef} 
          className="text-5xl md:text-7xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neonCyan via-white to-neonPurple tracking-tighter leading-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
        >
          Turning ideas into reality.
        </h2>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30 text-white z-10">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default TextRevealSection;
