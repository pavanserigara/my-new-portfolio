
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "National Fincorp Limited",
    category: " Finance Website With Backend",
    image: "https://raw.githubusercontent.com/pavanserigara/my-new-portfolio/main/nfcl.jpg",
    description: "A full-stack fintech platform built for NationalFinCorp Limited, featuring loan management, account and user administration, secure backend operations, and a modern responsive frontend.",
    tech: ["PHP", "Html", "Css", "PhpMyAdmin"],
  },
  {
    title: "Clean & Care",
    category: "multi-panel backend",
    image: "https://raw.githubusercontent.com/pavanserigara/my-new-portfolio/main/cnc.jpg",
    description: "Developed a complete multi-panel backend for Clean & Care with separate Admin, Dealer, and Salesman dashboards, enabling seamless inventory control, sales order processing, delivery management, invoice printing, and real-time analytics for business insights.",
    tech: ["PHP", "Html", "Css", "PhpMyAdmin"],
  },
  {
    title: "Picardo International Tours And Travells",
    category: "Frontend With Simple Backend",
    image: "https://raw.githubusercontent.com/pavanserigara/my-new-portfolio/main/picardo.jpg",
    description: "Developed a responsive frontend for Picardo, a travel agency, featuring destination listings and integrated Google Maps for interactive navigation.",
    tech: ["PHP", "Html", "Css", "PhpMyAdmin"],
  },
  {
    title: "Gokarna Samudra",
    category: "Resort Website Frontend",
    image: "https://raw.githubusercontent.com/pavanserigara/my-new-portfolio/main/gokarna.jpg",
    description: "Built a modern, responsive frontend for Gokarna Samudra beach resort, showcasing rooms, gallery, and amenities, with direct booking integration via WhatsApp for seamless guest reservations.",
    tech: ["Html", "Css"],
  }
];

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.project-card');
      gsap.fromTo(cards, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%', // Adjusted to trigger earlier
          }
        }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={containerRef} className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-3">
               <span className="text-neonPurple font-mono text-2xl">06.</span> Projects
            </h2>
            <p className="text-gray-400 max-w-xl">
              A curated selection of projects demonstrating full-stack capability and creative engineering.
            </p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-neonCyan hover:text-white transition-colors mt-4 md:mt-0 group">
            View All Archives <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 2x2 Grid - All cards same size */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card flex flex-col h-full rounded-2xl overflow-hidden glass-card border border-white/5 hover:border-neonCyan/30 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
            >
              {/* Image Section - Non-overlapping */}
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-neonPurple/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-grow bg-black/20 backdrop-blur-md">
                <div className="mb-auto">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-neonCyan text-xs font-bold tracking-widest uppercase">
                      {project.category}
                    </span>
                    <div className="flex gap-3 text-gray-400">
                      <a href="" className="hover:text-white transition-colors" title="View Code"><Github size={18} /></a>
                      <a href="" className="hover:text-white transition-colors" title="Live Demo"><ExternalLink size={18} /></a>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-neonPurple transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-4 pt-6 border-t border-white/5">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-mono text-gray-300 bg-white/5 rounded-full border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="https://dreamtoflyofficial.in/portfolio.html" className="inline-flex items-center gap-2 text-neonCyan hover:text-white transition-colors">
            View All Archives <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
