
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lock, Terminal, Aperture, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: 'Cybersecurity',
    icon: <Lock size={32} />,
    desc: 'Ethical Hacking, Network Security, Penetration Testing',
    skills: ['Burp Suite', 'Nmap', 'SQL Injection', 'XSS', 'IDOR', 'Kali Linux'],
    color: 'border-neonPurple shadow-[0_0_20px_rgba(176,38,255,0.2)]'
  },
  {
    title: 'Full-Stack Dev',
    icon: <Terminal size={32} />,
    desc: 'Building scalable, secure web applications',
    skills: ['React', 'Node.js', 'PHP', 'MySQL', 'MongoDB', 'Firebase'],
    color: 'border-neonCyan shadow-[0_0_20px_rgba(0,243,255,0.2)]'
  },
  {
    title: 'Creative Media',
    icon: <Aperture size={32} />,
    desc: 'Photography, Videography & Visual Storytelling',
    skills: ['Premiere Pro', 'CapCut', 'Lightroom', 'Cinematography', 'Photo Editing'],
    color: 'border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.2)]'
  },
  {
    title: 'Vibe Coding',
    icon: <Zap size={32} />,
    desc: 'Rapid AI-Assisted Development & UI/UX',
    skills: ['Generative AI', 'Prompt Engineering', 'Figma', 'UI Animation', 'Prototyping'],
    color: 'border-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.2)]'
  }
];

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Animate Title
    gsap.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      }
    );

    // Animate Cards Staggered
    const cards = document.querySelectorAll('.skill-card');
    gsap.fromTo(cards, 
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        }
      }
    );
  }, []);

  return (
    <section id="skills" ref={containerRef} className="py-24 relative z-20 bg-deepSpace">
      <div className="container mx-auto px-6">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="text-neonPurple font-mono text-2xl">03.</span> Core Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, index) => (
            <div 
              key={index}
              className={`skill-card p-8 rounded-3xl glass-card border ${cat.color} hover:bg-white/5 transition-all duration-300 group`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors transform group-hover:rotate-6 duration-300">
                  {cat.icon}
                </div>
                <div className="text-right">
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-neonCyan transition-colors">{cat.title}</h3>
                  <p className="text-sm text-gray-400">{cat.desc}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-mono border border-white/10 rounded-full bg-black/20 text-gray-300 hover:text-white hover:border-white/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
