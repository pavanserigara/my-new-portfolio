
import React, { useEffect, useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import gsap from 'gsap';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Tools', id: 'tools' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-deepSpace/80 backdrop-blur-lg border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div 
          className="text-2xl font-bold tracking-tighter cursor-pointer flex items-center gap-2 group" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <div className="p-1 rounded bg-white/5 border border-white/10 group-hover:border-neonCyan transition-colors">
            <Terminal size={20} className="text-neonCyan" />
          </div>
          <span>PAVAN<span className="text-neonPurple">.DEV</span></span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((item) => (
            <button 
              key={item.name}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-medium hover:text-neonCyan transition-colors uppercase tracking-widest relative group text-gray-300"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neonCyan transition-all duration-300 group-hover:w-full box-shadow-glow"></span>
            </button>
          ))}
          <button 
             onClick={() => scrollTo('contact')}
             className="px-5 py-2 rounded-full border border-neonPurple/50 text-neonPurple hover:bg-neonPurple hover:text-white transition-all duration-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_10px_rgba(176,38,255,0.2)] hover:shadow-[0_0_20px_rgba(176,38,255,0.5)]"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white hover:text-neonCyan transition-colors p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-deepSpace/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
         <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((item) => (
              <button 
                key={item.name}
                onClick={() => scrollTo(item.id)}
                className="text-left text-lg font-bold text-white hover:text-neonCyan transition-colors uppercase tracking-widest py-2 border-b border-white/5"
              >
                {item.name}
              </button>
            ))}
         </div>
      </div>
    </nav>
  );
};

export default Navigation;
