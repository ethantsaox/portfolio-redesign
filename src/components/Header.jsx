import '../style.css';
import '../mediaqueries.css';

import React from 'react';
import profilePic from '../assets/profile-pic-6.png';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';
import downArrow from '../assets/downarrow.png';
import resumePDF from '../assets/Ethan_Tsao_Resume_Summer25.pdf';

function Header({ darkMode, setDarkMode }) {
  return (
    <header className="bg-gradient-to-b from-gray-900 to-gray-800 text-white dark:from-black dark:to-gray-900 py-8 min-h-screen">
      <nav className="flex justify-between items-center max-w-6xl mx-auto px-6 py-4">
        <div className="text-2xl font-semibold tracking-widest text-gray-100">Ethan Tsao</div>
        <div className="flex items-center gap-6">
          <ul className="flex gap-8 text-lg font-medium">
            <li><a href="#about" className="hover:text-gray-100 transition">About</a></li>
            <li><a href="#experience" className="hover:text-gray-100 transition">Experience</a></li>
            <li><a href="#projects" className="hover:text-gray-100 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-gray-100 transition">Contact</a></li>
          </ul>
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="ml-6 px-3 py-2 rounded-full border border-gray-100 text-gray-100 hover:bg-gray-100 hover:text-gray-900 transition font-semibold focus:outline-none focus:ring-2 focus:ring-gray-100"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <span role="img" aria-label="Light mode">🌞</span>
            ) : (
              <span role="img" aria-label="Dark mode">🌙</span>
            )}
          </button>
        </div>
      </nav>
      <section id="profile" className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto mt-20 px-4 relative">
        <div className="rounded-2xl overflow-hidden shadow-lg w-64 h-64 flex-shrink-0">
          <img src={profilePic} alt="Ethan Tsao profile" className="object-cover w-full h-full" />
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-md">
          <p className="text-gray-100 text-lg font-semibold mb-2">Hello <span role="img" aria-label="wave">👋</span>, I'm</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">Ethan Tsao</h1>
          <p className="text-xl md:text-2xl font-medium mb-4 text-gray-300">Stats & Data Science</p>
          <div className="flex gap-4 mb-4 flex-wrap justify-center md:justify-start">
            <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-full border border-gray-100 text-gray-100 hover:bg-gray-100 hover:text-gray-900 transition font-medium">Download CV</a>
            <a href="#contact" className="px-5 py-2 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-200 transition font-medium">Contact Info</a>
          </div>
          <div className="flex gap-4 mt-2 justify-center md:justify-start">
            <a href="https://www.linkedin.com/in/ethandtsao/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
              <img src={linkedinIcon} alt="My LinkedIn profile" className="w-8 h-8" />
            </a>
            <a href="https://github.com/ethantsaox" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
              <img src={githubIcon} alt="My Github profile" className="w-8 h-8" />
            </a>
          </div>
        </div>
        <a href="#about" className="hidden md:block absolute left-1/2 -bottom-12 transform -translate-x-1/2 animate-bounce">
          <img src={downArrow} alt="Arrow icon" className="w-8 h-8 opacity-70" />
        </a>
      </section>
    </header>
  );
}

export default Header; 