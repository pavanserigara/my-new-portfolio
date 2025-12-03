
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from './MagneticButton';
import { Mail, Linkedin, Github, MessageCircle, Instagram, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      }
    });

    tl.fromTo(leftColRef.current, 
      { opacity: 0, x: -50 }, 
      { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }
    ).fromTo(rightColRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power3.out' },
      '-=0.8'
    );
  }, []);

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.message) return alert('Please fill in your name and message.');
    
    // Construct WhatsApp URL
    const phoneNumber = "917676446647"; // Placeholder number
    const text = `Hi Pavan, I am ${formState.name}. ${formState.message} (Email: ${formState.email})`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    
    window.open(url, '_blank');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" ref={containerRef} className="py-24 relative z-10 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div ref={leftColRef}>
            <span className="text-neonCyan text-sm font-bold tracking-widest uppercase mb-4 block">Get In Touch</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-neonPurple">Secure</span> <br/> Your Future?
            </h2>
            <p className="text-xl text-gray-400 mb-12 font-light">
              Whether you need a security audit, a full-stack web application, or a creative partner for your next big idea—I'm just a message away.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#" className="p-4 glass-card rounded-full hover:text-neonPurple hover:border-neonPurple transition-all group hover:-translate-y-2">
                <Github size={24} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="p-4 glass-card rounded-full hover:text-blue-400 hover:border-blue-400 transition-all group hover:-translate-y-2">
                <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.instagram.com/_pavan_serigara_/" className="p-4 glass-card rounded-full hover:text-pink-500 hover:border-pink-500 transition-all group hover:-translate-y-2">
                <Instagram size={24} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="mailto:pavankserigara@gmail.com" className="p-4 glass-card rounded-full hover:text-yellow-400 hover:border-yellow-400 transition-all group hover:-translate-y-2">
                <Mail size={24} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>

            <div className="flex items-center gap-4 text-gray-400">
               <div className="p-2 rounded-full bg-white/5 border border-white/10">
                 <Phone size={20} className="text-neonCyan" />
               </div>
               <span className="font-mono text-lg">+91 76764 46647</span>
            </div>
          </div>

          <form ref={rightColRef} onSubmit={handleWhatsApp} className="glass-card p-8 md:p-10 rounded-3xl space-y-6 border border-white/10 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-neonPurple/10 rounded-full blur-[80px] pointer-events-none"></div>
            
            <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
            <p className="text-gray-400 text-sm mb-6">Redirects to WhatsApp for instant connection.</p>

            <div className="group">
              <input 
                type="text" 
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
                className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-neonCyan transition-all"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="group">
              <input 
                type="email" 
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
                className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-neonCyan transition-all"
                placeholder="Your Email (Optional)"
              />
            </div>
            <div className="group">
              <textarea 
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
                className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-neonCyan transition-all"
                placeholder="Project details or just a hello..."
                required
              />
            </div>
            
            <MagneticButton className="w-full mt-2 group bg-neonCyan/10 hover:bg-neonCyan/20 border-neonCyan/30">
              <span className="flex items-center gap-2">
                Launch via WhatsApp <MessageCircle size={18} />
              </span>
            </MagneticButton>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
