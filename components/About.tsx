
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Camera, Shield, Code, PenTool, Globe, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Image Parallax & Reveal
    gsap.fromTo(imageRef.current,
      { x: -50, opacity: 0, rotateY: 15 },
      {
        x: 0,
        opacity: 1,
        rotateY: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      }
    );

    // Content Reveal
    gsap.fromTo(contentRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      }
    );

    // Staggered list items
    const items = gsap.utils.toArray('.highlight-item');
    gsap.fromTo(items,
      { y: 20, opacity: 0 },
      {
        y: 0, 
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 70%'
        }
      }
    );
  }, []);

  const highlights = [
    { icon: <Shield size={18} />, text: 'Ethical Hacking & Security', color: 'text-neonPurple' },
    { icon: <Code size={18} />, text: 'Full-Stack Development', color: 'text-neonCyan' },
    { icon: <PenTool size={18} />, text: 'UI/UX & Vibe Coding', color: 'text-pink-500' },
    { icon: <Camera size={18} />, text: 'Photography & Editing', color: 'text-yellow-400' },
    { icon: <Globe size={18} />, text: 'Web3 & Blockchain', color: 'text-blue-400' },
    { icon: <Cpu size={18} />, text: 'IoT & Hardware', color: 'text-green-400' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Profile Image Column */}
          <div ref={imageRef} className="w-full lg:w-5/12 relative perspective-1000 group">
             {/* Decorative Background Elements */}
             <div className="absolute -inset-4 bg-gradient-to-r from-neonCyan to-neonPurple opacity-20 blur-2xl rounded-full group-hover:opacity-30 transition-opacity duration-500"></div>
             <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-neonCyan/50 rounded-tr-3xl -translate-y-4 translate-x-4"></div>
             <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-neonPurple/50 rounded-bl-3xl translate-y-4 -translate-x-4"></div>
             
             {/* Image Container */}
             <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-deepSpace">
               <div className="absolute inset-0 bg-neonPurple/10 mix-blend-overlay z-10 hover:bg-transparent transition-colors duration-500"></div>
               <img 
                 src="https://github.com/pavanserigara/my-new-portfolio/blob/main/IMG_20240513_083347.jpg" 
                 alt="Pavan Kumar" 
                 className="w-full h-[500px] object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-105"
               />
             </div>
          </div>

          {/* Text Content Column */}
          <div ref={contentRef} className="w-full lg:w-7/12">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 flex items-center gap-3">
              <span className="text-neonCyan text-2xl font-mono">01.</span> About Me
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg font-light leading-relaxed">
              <p>
                Hello! I'm <span className="text-white font-semibold">Pavan Kumar</span>, a multidisciplinary technologist who thrives at the intersection of security and creativity.
              </p>
              <p>
                My journey isn't just about writing code; it's about <span className="text-neonPurple">breaking barriers</span>. From identifying critical vulnerabilities in enterprise systems as an <span className="text-white">Ethical Hacker</span> to architecting seamless digital ecosystems as a <span className="text-neonCyan">Full-Stack Developer</span>, I bring a holistic approach to every project.
              </p>
              <p>
                Beyond the terminal, I channel my creativity into <span className="text-pink-500">Visual Storytelling</span>—capturing cinematic moments and editing high-energy visuals that leave a lasting impact.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              {highlights.map((item, idx) => (
                <div key={idx} className="highlight-item flex items-center gap-3 p-4 glass-card rounded-lg border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all duration-300">
                  <span className={`${item.color}`}>{item.icon}</span>
                  <span className="text-sm font-medium tracking-wide">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 flex gap-6">
               <div className="text-center">
                  <h3 className="text-3xl font-bold text-white">5+</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Years Coding</p>
               </div>
               <div className="w-px h-12 bg-white/10"></div>
               <div className="text-center">
                  <h3 className="text-3xl font-bold text-neonCyan">20+</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Projects Done</p>
               </div>
               <div className="w-px h-12 bg-white/10"></div>
               <div className="text-center">
                  <h3 className="text-3xl font-bold text-neonPurple">10+</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Vulns Found</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
