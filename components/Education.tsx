
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, BookOpen, School } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    level: 'Degree - BCA',
    year: '2018 - 2021',
    institution: 'Bangalore University',
    description: 'Specialized in Computer Applications, Web Development, and Database Management.',
    icon: <GraduationCap size={24} />,
    color: 'text-neonCyan'
  },
  {
    level: 'PUC (Pre-University)',
    year: '2016 - 2018',
    institution: 'City College of Science',
    description: 'Focus on Physics, Mathematics, and Computer Science foundation.',
    icon: <BookOpen size={24} />,
    color: 'text-neonPurple'
  },
  {
    level: 'SSLC',
    year: '2016',
    institution: 'St. Joseph High School',
    description: 'Completed secondary education with distinction in Mathematics and Science.',
    icon: <School size={24} />,
    color: 'text-pink-500'
  }
];

const Education: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate the center line drawing down
    gsap.fromTo(lineRef.current,
      { height: 0 },
      { 
        height: '100%', 
        duration: 2, 
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'bottom 80%',
          scrub: 1
        }
      }
    );

    // Animate individual items with a pop effect
    gsap.utils.toArray('.edu-card').forEach((card: any, i) => {
      gsap.fromTo(card,
        { opacity: 0, scale: 0.8, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          }
        }
      );
    });
  }, []);

  return (
    <section id="education" ref={sectionRef} className="py-24 relative z-10 overflow-hidden bg-deepSpace">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex justify-center items-center gap-4">
            <span className="text-neonPurple font-mono text-2xl">02.</span> Education
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">My academic journey that paved the way for my technical career.</p>
        </div>

        <div className="relative max-w-4xl mx-auto pb-10">
          {/* Center Line */}
          <div ref={lineRef} className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-neonCyan via-neonPurple to-transparent md:-translate-x-1/2 z-0"></div>

          <div className="space-y-16">
            {educationData.map((item, index) => (
              <div key={index} className={`flex flex-col md:flex-row gap-8 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-5 h-5 bg-deepSpace border-4 border-neonCyan rounded-full md:-translate-x-1/2 mt-6 z-10 shadow-[0_0_15px_rgba(0,243,255,0.5)]"></div>

                {/* Content Box */}
                <div className="ml-16 md:ml-0 md:w-1/2 px-4 edu-card">
                  <div className={`glass-card p-8 rounded-2xl border border-white/5 hover:border-neonCyan/30 transition-all duration-300 relative group`}>
                    <div className={`absolute top-6 right-6 ${item.color} opacity-80 group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 text-xs font-mono text-neonCyan mb-4 border border-white/10">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-neonPurple transition-colors">{item.level}</h3>
                    <h4 className="text-lg text-gray-300 mb-4 font-light">{item.institution}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Empty Space for Grid alignment */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
