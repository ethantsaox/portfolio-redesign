import React, { useState } from 'react';
import profilePic from '../assets/profile-pic8-optimized.jpg';
import resumeIcon from '../assets/resume.png';
import whiteArrowGif from '../assets/whitearrowgif.gif';
import gswLogo from '../assets/gsw.png';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';
import WavingHand from './WavingHand';

function Hero() {
  const [heroRef, isHeroVisible] = useFadeInOnScroll(0.1);

  return (
    <section
      ref={heroRef}
      id="hero"
      className={`w-full min-h-[40vh] flex items-center justify-center px-4 pt-4 pb-8 relative transition-all duration-1000 ease-out ${
        isHeroVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="w-full max-w-3xl flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3">
        {/* Text Content */}
        <div className="flex flex-col justify-center items-center md:items-start gap-2 text-center md:text-left order-2 md:order-1 md:max-w-[28rem] w-full">
          <h1 className="text-2xl md:text-3xl font-bold mb-0.5 tracking-tight leading-tight text-white">
            Hey! Ethan here. <WavingHand />
          </h1>
          <div className="text-base md:text-lg mb-0.5 text-gray-200 flex items-center justify-center md:justify-start gap-2 relative">
            21yo student from the Bay Area
            <img src={gswLogo} alt="Golden State Warriors" className="w-9 h-10 absolute top-1/2 -translate-y-1/2 left-full ml-2" loading="lazy" />
          </div>
          <div className="text-base md:text-lg text-gray-200 mb-0.5">
            Data science, full-stack, and analytics.<br />
            I build, analyze, and automate.
          </div>
          <div className="text-base font-semibold text-white mb-0.5 relative">
            Questions? <span className="text-gray-100">email me directly below</span>
            <img src={whiteArrowGif} alt="Arrow" className="w-12 h-12 absolute -right-12 top-1/2 -translate-y-1/2" loading="lazy" />
          </div>
          <div className="text-sm text-gray-400 mb-1">
            For more info, please visit my <span className="font-medium text-gray-300">LinkedIn</span> instead.
          </div>
          <div className="flex flex-wrap gap-3 items-center justify-center md:justify-start mt-0.5">
            <a href="/Ethan_Tsao_Resume_Summer25.pdf" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm font-medium border border-[#232329] rounded-lg bg-[#18181b] px-2 py-1 inline-block w-auto text-white hover:bg-[#232329] transition flex items-center gap-1">
              Resume
              <img src={resumeIcon} alt="Resume" className="w-5 h-5" loading="lazy" />
            </a>
            <a href="https://www.linkedin.com/in/ethandtsao/" target="_blank" rel="noopener noreferrer" className="group hover:text-[#3b82f6] transition hover:scale-110 transition-transform duration-200" title="LinkedIn">
              <svg width="24" height="24" className="inline transition-colors duration-200 fill-white group-hover:fill-[#3b82f6]"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
            </a>
            <a href="https://github.com/ethantsaox" target="_blank" rel="noopener noreferrer" className="group hover:text-[#3b82f6] transition hover:scale-110 transition-transform duration-200 flex items-center" title="GitHub">
              <svg width="24" height="24" className="inline transition-colors duration-200 fill-white group-hover:fill-[#3b82f6]"><path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387 0.6 0.113 0.82-0.258 0.82-0.577 0-0.285-0.01-1.04-0.015-2.04-3.338 0.724-4.042-1.61-4.042-1.61-0.546-1.387-1.333-1.756-1.333-1.756-1.089-0.745 0.084-0.729 0.084-0.729 1.205 0.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495 0.997 0.108-0.775 0.418-1.305 0.762-1.605-2.665-0.305-5.466-1.334-5.466-5.931 0-1.31 0.469-2.381 1.236-3.221-0.124-0.303-0.535-1.523 0.117-3.176 0 0 1.008-0.322 3.301 1.23 0.957-0.266 1.984-0.399 3.003-0.404 1.019 0.005 2.047 0.138 3.006 0.404 2.291-1.553 3.297-1.23 3.297-1.23 0.653 1.653 0.242 2.873 0.119 3.176 0.77 0.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921 0.43 0.372 0.823 1.102 0.823 2.222 0 1.606-0.014 2.898-0.014 3.293 0 0.322 0.216 0.694 0.825 0.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </div>
        {/* Profile Image */}
        <div className="flex justify-center items-center order-1 md:order-2 md:max-w-[40%]">
          <img src={profilePic} alt="Ethan Tsao" className="w-40 h-48 md:w-52 md:h-64 object-cover rounded-2xl shadow-xl border-4 border-[#232329]" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export default Hero; 