
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(footerRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 95%',
        }
      }
    );
  }, []);

  return (
    <footer ref={footerRef} className="py-8 border-t border-white/5 bg-black/50 backdrop-blur-md relative z-20">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Pavan Kumar. All rights reserved.
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-400">
            Designed & Built with <Heart size={14} className="text-neonPurple animate-pulse" /> using React, Three.js & Tailwind.
          </div>

          <div className="flex gap-6 text-sm font-medium tracking-wider">
            <a href="#" className="hover:text-neonCyan transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-neonCyan transition-colors">TERMS</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
