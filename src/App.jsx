import React, { useState, useEffect } from 'react';
import './index.css';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedScrollBar from './components/AnimatedScrollBar';
import SplashScreen from './components/SplashScreen';
import AnimatedDotsBackground from './components/AnimatedDotsBackground';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for user preference
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  const [showSplash, setShowSplash] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);
  const [opacity, setOpacity] = useState(0.7);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Trigger fade-in after splash is hidden
  React.useEffect(() => {
    if (!showSplash) {
      setOpacity(0.7);
      const fadeTimer = setTimeout(() => setFadeIn(true), 10);
      return () => clearTimeout(fadeTimer);
    } else {
      setFadeIn(false);
    }
  }, [showSplash]);

  // Animate opacity from 0.7 to 1 over 2 seconds
  React.useEffect(() => {
    if (fadeIn) {
      const step = 0.02;
      let current = 0.7;
      function animate() {
        current += step;
        if (current < 1) {
          setOpacity(current);
          requestAnimationFrame(animate);
        } else {
          setOpacity(1);
        }
      }
      animate();
    }
  }, [fadeIn]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.add('bg-gray-950');
      document.body.classList.add('bg-gray-950');
      document.documentElement.classList.remove('bg-white');
      document.body.classList.remove('bg-white');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.remove('bg-gray-950');
      document.body.classList.remove('bg-gray-950');
      document.documentElement.classList.add('bg-white');
      document.body.classList.add('bg-white');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  if (showSplash) {
    return <SplashScreen />;
  }
  return (
    <div
      className={`flex min-h-screen w-full scroll-smooth overscroll-none relative transition-opacity duration-[2000ms] ${fadeIn ? 'opacity-100' : 'opacity-70'}`}
      style={{ opacity: opacity, transition: 'opacity 2000ms cubic-bezier(.4,1.2,.4,1)' }}
    >
      <AnimatedDotsBackground />
      <AnimatedScrollBar />
      <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex-1 bg-gradient-to-br from-[#050509] via-[#101014] to-[#181c2b] min-h-screen">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
