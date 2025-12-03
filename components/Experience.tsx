
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Award, ShieldAlert, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Title Animation
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      }
    );

    // Cards Animation
    gsap.utils.toArray('.exp-card').forEach((card: any, i) => {
      gsap.fromTo(card,
        { opacity: 0, x: i % 2 === 0 ? -100 : 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          }
        }
      );
    });
  }, []);

  return (
    <section id="experience" ref={containerRef} className="py-24 relative z-10 bg-gradient-to-b from-transparent to-black/30">
      <div className="container mx-auto px-6">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="text-neonCyan font-mono text-2xl">04.</span> Experience & Impact
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Work Experience */}
          <div className="exp-card glass-card p-8 rounded-3xl border border-white/5 hover:border-neonPurple/30 transition-all hover:shadow-[0_0_30px_rgba(176,38,255,0.1)]">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-neonPurple/20 rounded-xl text-neonPurple">
                <Briefcase size={28} />
              </div>
              <h3 className="text-2xl font-bold">Professional Journey</h3>
            </div>

            <div className="space-y-8 border-l-2 border-white/10 ml-3 pl-8 relative">
              <div className="relative group">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-deepSpace border-2 border-neonPurple group-hover:bg-neonPurple transition-colors shadow-[0_0_10px_rgba(176,38,255,0.5)]"></div>
                <h4 className="text-xl font-bold text-white group-hover:text-neonPurple transition-colors">Founder & Lead Dev</h4>
                <p className="text-neonCyan text-sm mb-2 font-mono">DreamToFly • 2025 - Present</p>
                <p className="text-gray-400 text-sm">Building a digital solutions agency from the ground up. Delivering websites, security audits, and tech workshops.</p>
              </div>
              <div className="relative group">
  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-deepSpace border-2 border-gray-600 group-hover:border-neonPurple transition-colors"></div>
  
  <h4 className="text-xl font-bold text-white group-hover:text-neonPurple transition-colors">
    Developer & Core Creator
  </h4>

  <p className="text-neonCyan text-sm mb-2 font-mono">
    Independent • 2023-2025 - Present
  </p>

  <p className="text-gray-400 text-sm">
    Built numerous personal projects driven by curiosity and passion for development, constantly experimenting with new ideas.
  </p>

  <p className="text-gray-400 text-sm mt-1">
    Explored a wide range of AI tools, modern frameworks, and emerging technologies to enhance skills and create innovative solutions.
  </p>
</div>

              <div className="relative group">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-deepSpace border-2 border-gray-600 group-hover:border-neonPurple transition-colors"></div>
                <h4 className="text-xl font-bold text-white group-hover:text-neonPurple transition-colors">Security Consultant</h4>
                <p className="text-neonCyan text-sm mb-2 font-mono">Freelance • 2023 - 2025 - Present</p>
                <p className="text-gray-400 text-sm">Helping colleges and local businesses secure their digital infrastructure against vulnerabilities.</p>
              </div>
              
              <div className="relative group">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-deepSpace border-2 border-gray-600 group-hover:border-neonPurple transition-colors"></div>
                <h4 className="text-xl font-bold text-white group-hover:text-neonPurple transition-colors">Technical Trainer</h4>
                <p className="text-neonCyan text-sm mb-2 font-mono">Workshops & Seminars</p>
                <p className="text-gray-400 text-sm">Conducted hands-on sessions on  Cyber Security and Poster Making for students.</p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="exp-card glass-card p-8 rounded-3xl border border-white/5 hover:border-neonCyan/30 transition-all hover:shadow-[0_0_30px_rgba(0,243,255,0.1)]">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-neonCyan/20 rounded-xl text-neonCyan">
                <Award size={28} />
              </div>
              <h3 className="text-2xl font-bold">Achievements</h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors transform hover:-translate-y-1 duration-300">
                <ShieldAlert className="text-red-400 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-white">Vulnerability Reports</h4>
                  <p className="text-gray-400 text-sm mt-1">Reported critical vulnerabilities including IDOR, authentication flaws, and security misconfigurations to my university, helping strengthen their systems.<br></br>ecured multiple company and government-related platforms by identifying threats and assisting in implementing protective measures.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors transform hover:-translate-y-1 duration-300">
                <Users className="text-blue-400 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-white">Community Leader</h4>
                  <p className="text-gray-400 text-sm mt-1">Mentored 50+ students in getting started with cybersecurity and coding through practical workshops.</p>
                </div>
              </div>
              

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors transform hover:-translate-y-1 duration-300">
                <Award className="text-yellow-400 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-white">DreamToFly Launch</h4>
                  <p className="text-gray-400 text-sm mt-1">Successfully launched my own tech service brand, completing 5+ projects in the first year.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
