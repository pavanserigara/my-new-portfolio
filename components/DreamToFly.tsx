
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from './MagneticButton';
import { Rocket, Globe, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const DreamToFly: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(contentRef.current,
      { scale: 0.8, opacity: 0, rotateX: 10 },
      {
        scale: 1,
        opacity: 1,
        rotateX: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div ref={contentRef} className="relative rounded-[3rem] overflow-hidden border border-white/10 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 p-8 md:p-16 text-center shadow-[0_0_50px_rgba(79,70,229,0.2)] backdrop-blur-sm group hover:border-neonPurple/50 transition-colors duration-500">
          {/* Background effects */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute top-[-50%] left-[-20%] w-[500px] h-[500px] bg-neonPurple rounded-full blur-[150px] opacity-30 pointer-events-none group-hover:opacity-40 transition-opacity"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 animate-[bounce_3s_infinite]">
              <Rocket size={40} className="text-white" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">DreamToFly</h2>
            <p className="text-xl md:text-2xl text-indigo-200 mb-8 max-w-3xl">
              My brainchild. A digital agency dedicated to elevating businesses through <span className="text-white font-bold">secure</span>, <span className="text-white font-bold">high-performance</span> web solutions and creative branding.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 w-full max-w-4xl text-left">
              <div className="p-6 bg-black/30 rounded-2xl border border-white/5 backdrop-blur-sm hover:-translate-y-2 transition-transform duration-300">
                <Globe className="text-neonCyan mb-3" />
                <h4 className="font-bold text-white mb-2">Web Development</h4>
                <p className="text-sm text-gray-400">Custom, high-speed websites tailored for growth.</p>
              </div>
              <div className="p-6 bg-black/30 rounded-2xl border border-white/5 backdrop-blur-sm hover:-translate-y-2 transition-transform duration-300 delay-100">
                <ShieldCheck className="text-neonPurple mb-3" />
                <h4 className="font-bold text-white mb-2">Security Audits</h4>
                <p className="text-sm text-gray-400">Vulnerability assessment and protection.</p>
              </div>
              <div className="p-6 bg-black/30 rounded-2xl border border-white/5 backdrop-blur-sm hover:-translate-y-2 transition-transform duration-300 delay-200">
                <Rocket className="text-pink-500 mb-3" />
                <h4 className="font-bold text-white mb-2">Digital Branding</h4>
                <p className="text-sm text-gray-400">Logo design, content creation, and strategy.</p>
              </div>
            </div>

           <a href="https://dreamtoflyofficial.in/" target="_blank" rel="noopener noreferrer">
  <MagneticButton className="bg-black text-black font-bold hover:bg-gray-200 border-none px-10">
    Visit Company Site
  </MagneticButton>
</a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamToFly;
