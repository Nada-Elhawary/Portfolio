import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen finishLoading={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div 
          className="app-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Dynamic Cursor Glow */}
          <motion.div
            className="cursor-glow"
            animate={{
              x: mousePosition.x - 200,
              y: mousePosition.y - 200,
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
          />
          
          <Navbar />
          <main>
            <Hero />
            <About />
            <Journey />
            <Skills />
            <Projects />
            <Experience />
            {/* <Testimonials /> */}
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}

export default App;
