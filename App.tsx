
import React, { Suspense, useState, useEffect } from 'react';
import ThreeBackground from './components/ThreeBackground';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import TextRevealSection from './components/TextRevealSection';
import About from './components/About';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Education from './components/Education';
import Experience from './components/Experience';
import DreamToFly from './components/DreamToFly';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import SplashScreen from './components/SplashScreen';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadComplete = () => {
    setLoading(false);
    // Refresh ScrollTrigger calculations after loading and layout shifts
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
  };

  return (
    <>
      {loading && <SplashScreen onComplete={handleLoadComplete} />}
      
      <main className={`relative min-h-screen text-white bg-deepSpace selection:bg-neonCyan selection:text-black font-sans overflow-x-hidden transition-opacity duration-1000 ${loading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        {/* Background Layer */}
        <Suspense fallback={<div className="fixed inset-0 bg-deepSpace z-0" />}>
          <ThreeBackground />
        </Suspense>

        {/* UI Overlay - Changed from flex-col to block for better GSAP Pinning support */}
        <div className="relative z-10">
          <CustomCursor />
          <Navigation />
          
          <Hero />
          
          {/* About Section moved below Hero */}
          <About />
          
          {/* Full Screen Text Reveal - Block layout ensures pin-spacer works correctly */}
          <TextRevealSection />
          
          <Skills />
          <Tools />
          <Education />
          <Experience />
          <DreamToFly />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default App;
