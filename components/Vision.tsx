import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Vision: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        pin: true,
      }
    });

    tl.to(textRef.current, {
      scale: 1.5,
      opacity: 0,
      filter: 'blur(20px)',
      ease: 'power1.inOut'
    });
  }, []);

  return (
    <section ref={containerRef} className="h-screen flex items-center justify-center relative z-10 overflow-hidden bg-black/40 backdrop-blur-sm">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neonPurple/20 via-transparent to-transparent"></div>
      
      <div ref={textRef} className="text-center px-4">
        <h2 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter">
          DESIGN IS <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-neonPurple">INTELLIGENCE</span> <br/> MADE VISIBLE.
        </h2>
        <p className="text-xl md:text-2xl text-gray-400 font-light">
          Bridging the gap between imagination and reality.
        </p>
      </div>
    </section>
  );
};

export default Vision;