
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tools = [
  "VS Code", "Linux", "Burp Suite", "Nmap", "Python", 
  "JavaScript", "PHP", "Firebase", "ESP32", "CapCut", 
  "ChatGPT", "Gemini", "SQLi", "APIs"
];

const Tools: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reveal Animation
    gsap.fromTo(containerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%', // Trigger slightly earlier
        }
      }
    );

    // Infinite Horizontal Scroll
    const slider = sliderRef.current;
    if (!slider) return;

    const totalWidth = slider.scrollWidth;
    
    gsap.to(slider, {
      x: -totalWidth / 2,
      duration: 25,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <section id="tools" ref={containerRef} className="py-20 border-y border-white/5 bg-black/20 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-deepSpace via-transparent to-deepSpace z-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 mb-8 text-center">
         <p className="text-neonCyan tracking-[0.3em] uppercase text-sm font-bold opacity-80">My Arsenal</p>
      </div>

      <div className="flex overflow-hidden w-full">
        <div ref={sliderRef} className="flex gap-12 whitespace-nowrap px-6 items-center">
          {/* Double the list for infinite loop illusion */}
          {[...tools, ...tools, ...tools].map((tool, index) => (
            <div key={index} className="flex items-center gap-4 group cursor-default">
              <span className="text-2xl md:text-4xl font-bold text-gray-600 group-hover:text-white transition-colors duration-300 stroke-text">
                {tool}
              </span>
              <div className="w-2 h-2 rounded-full bg-neonPurple/50"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
