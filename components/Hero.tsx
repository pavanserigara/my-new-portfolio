
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import MagneticButton from './MagneticButton';
import { ArrowDown, Code, Box, Triangle, Cpu, Terminal, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Floating animation for decorative elements
    const floatElements = document.querySelectorAll('.floating-element');
    floatElements.forEach((el, i) => {
      gsap.to(el, {
        y: -20 - (i * 5),
        rotation: i % 2 === 0 ? 15 : -15,
        duration: 3 + i * 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.2
      });
    });

    // Text Animations
    tl.fromTo(titleRef.current, 
      { y: 50, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power4.out' }
    )
    .fromTo(subtitleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      '-=0.8'
    )
    .fromTo(buttonsRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    );

    // Mouse parallax
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xPos = (clientX / innerWidth - 0.5) * 30;
      const yPos = (clientY / innerHeight - 0.5) * 30;

      gsap.to('.parallax-layer', {
        x: xPos,
        y: yPos,
        duration: 1.5,
        ease: 'power2.out'
      });
      
      gsap.to('.parallax-layer-reverse', {
        x: -xPos * 1.5,
        y: -yPos * 1.5,
        duration: 1.5,
        ease: 'power2.out'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center px-4 z-10 overflow-hidden pt-20">
      
      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-[20%] left-[10%] text-neonPurple/20 floating-element parallax-layer">
          <Box size={80} strokeWidth={0.5} />
        </div>
        <div className="absolute bottom-[25%] right-[15%] text-neonCyan/20 floating-element parallax-layer-reverse">
          <Triangle size={60} strokeWidth={0.5} className="rotate-12" />
        </div>
        <div className="absolute top-[30%] right-[25%] text-white/5 floating-element parallax-layer">
          <Code size={40} strokeWidth={1} />
        </div>
        <div className="absolute bottom-[20%] left-[25%] text-neonPurple/10 floating-element parallax-layer-reverse">
          <Terminal size={50} strokeWidth={1} />
        </div>
        <div className="absolute top-[15%] left-[40%] text-neonCyan/10 floating-element parallax-layer">
          <Shield size={60} strokeWidth={0.5} />
        </div>
        <div className="absolute bottom-[40%] right-[10%] text-white/5 floating-element parallax-layer-reverse">
          <Cpu size={50} strokeWidth={0.5} />
        </div>
        
        {/* Glowing Ambient Orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neonPurple/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-neonCyan/10 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>

      <div className="container mx-auto text-center relative z-20 max-w-7xl">
        
        <div className="mb-6 inline-block opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]">
          <span className="py-2 px-6 rounded-full border border-neonCyan/30 bg-neonCyan/5 text-xs md:text-sm tracking-[0.2em] uppercase text-neonCyan backdrop-blur-md shadow-[0_0_15px_rgba(0,243,255,0.2)]">
            Full-Stack Creator & Hacker
          </span>
        </div>

        {/* Title strictly on one line via clamp and whitespace-nowrap */}
        <h1 ref={titleRef} className="text-[clamp(2.5rem,8vw,8rem)] font-bold mb-8 tracking-tighter leading-none select-none whitespace-nowrap">
          PAVAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPurple via-white to-neonCyan drop-shadow-[0_0_30px_rgba(176,38,255,0.4)]">KUMAR</span>
        </h1>

        <p ref={subtitleRef} className="text-base md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed px-4">
          Turning ideas into reality with tech. <br className="hidden md:block"/>
          I build <span className="text-neonCyan font-medium">secure systems</span>, craft <span className="text-neonPurple font-medium">digital experiences</span>, and engineer the future.
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <MagneticButton onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View Work
          </MagneticButton>
          <a href="#about" className="px-8 py-3 rounded-full border border-white/10 hover:border-neonPurple hover:bg-neonPurple/10 transition-all duration-300 text-sm uppercase tracking-widest flex items-center gap-2 group">
            About Me <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50 cursor-pointer hover:opacity-100 transition-opacity" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
        <ArrowDown size={24} className="text-white" />
      </div>
    </section>
  );
};

export default Hero;
