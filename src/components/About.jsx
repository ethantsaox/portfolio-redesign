import React, { useState } from 'react';
import aquilaIcon from '../assets/aquilacloudsicon.png';
import ucsbIcon from '../assets/ucsbicon.png';
import dvhsIcon from '../assets/dvhs.png';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

function About() {
  const [tab, setTab] = useState('work');
  const [aboutRef, isAboutVisible] = useFadeInOnScroll(0.1);
  return (
    <section 
      ref={aboutRef}
      id="about" 
      className={`scroll-mt-20 w-full min-h-[40vh] text-white pt-4 pb-8 flex justify-center items-start transition-all duration-1000 ease-out ${
        isAboutVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="w-full max-w-2xl mx-auto">
        <div className="flex bg-[#18181b] mb-3 border border-[#232329] justify-between items-center rounded-lg">
          <button
            className={`flex-1 px-3 py-2 font-medium transition text-sm z-10 rounded-lg ${tab === 'work' ? 'bg-white text-black shadow' : 'bg-transparent text-gray-300'}`}
            onClick={() => setTab('work')}
            style={{ position: 'relative' }}
          >
            Work
          </button>
          <button
            className={`flex-1 px-3 py-2 font-medium transition text-sm z-10 rounded-lg ${tab === 'studies' ? 'bg-white text-black shadow' : 'bg-transparent text-gray-300'}`}
            onClick={() => setTab('studies')}
            style={{ position: 'relative' }}
          >
            Education
          </button>
        </div>
        <div className="rounded-2xl border border-[#232329] p-2 md:p-3 text-sm">
          {tab === 'work' ? (
            <div className="flex flex-col gap-3 relative">
              <div className="absolute top-0 bottom-0 left-0 flex flex-col items-center w-10" style={{zIndex: 0}}>
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-[#232329] -mt-3 -mb-3" />
              </div>
              {/* Aquila Clouds */}
              <div className="flex gap-3 items-center relative z-10 group">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden transition-transform duration-200 group-hover:scale-110 -translate-y-5 z-10">
                  <img src={aquilaIcon} alt="Aquila Clouds" className="w-10 h-10 object-cover" loading="lazy" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Jun 2025 - Present</div>
                  <div className="text-white text-base font-semibold">Aquila Clouds</div>
                  <div className="text-gray-400 mb-1 text-sm">Software Engineer Intern</div>
                  <ul className="list-disc list-outside text-gray-300 text-sm space-y-1 ml-4">
                    <li>FinOps User Interface</li>
                  </ul>
                </div>
              </div>
              {/* Mosher Alumni Hall */}
              <div className="flex gap-3 items-center relative z-10 group">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden transition-transform duration-200 group-hover:scale-110 -translate-y-5 z-10">
                  <span className="text-white text-base font-semibold">M</span>
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Oct 2024 - Jun 2025</div>
                  <div className="text-white text-base font-semibold">Mosher Alumni Hall</div>
                  <div className="text-gray-400 mb-1 text-sm">Alumni Affairs Intern</div>
                  <ul className="list-disc list-outside text-gray-300 text-sm space-y-1 ml-4">
                    <li>Event Planning</li>
                  </ul>
                </div>
              </div>
              {/* Quickly Corporation */}
              <div className="flex gap-3 items-center relative z-10 group">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden transition-transform duration-200 group-hover:scale-110 -translate-y-5 z-10">
                  <span className="text-white text-base font-semibold">Q</span>
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Jul 2021 - May 2022</div>
                  <div className="text-white text-base font-semibold">Quickly Corporation</div>
                  <div className="text-gray-400 mb-1 text-sm">Crew Member</div>
                  <ul className="list-disc list-outside text-gray-300 text-sm space-y-1 ml-4">
                    <li>Food Service</li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-3 relative">
              <div className="absolute top-0 bottom-0 left-0 flex flex-col items-center w-10" style={{zIndex: 0}}>
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-[#232329] -mt-3 -mb-3" />
              </div>
              {/* UCSB */}
              <div className="flex gap-3 items-center relative z-10 group">
                <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden transition-transform duration-200 group-hover:scale-110 -translate-y-5 z-10">
                  <img src={ucsbIcon} alt="UCSB" className="w-10 h-10 object-cover" loading="lazy" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Sep 2022 - Jun 2026</div>
                  <div className="text-white text-base font-bold">University of California Santa Barbara</div>
                  <div className="text-gray-400 mb-1 text-sm">B.S. in Statistics and Data Science</div>
                  <ul className="list-disc list-outside text-gray-300 text-sm space-y-1 ml-4">
                    <li>TMP Certificate, Delta Sigma Pi, Gaucho Sports Analytics</li>
                  </ul>
                </div>
              </div>
              {/* Dougherty Valley High School */}
              <div className="flex gap-3 items-center relative z-10 group">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden transition-transform duration-200 group-hover:scale-110 -translate-y-5 z-10">
                  <img src={dvhsIcon} alt="Dougherty Valley High School" className="w-10 h-10 object-cover" loading="lazy" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Aug 2018 - Jun 2022</div>
                  <div className="text-white text-base font-bold">Dougherty Valley High School</div>
                  <div className="text-gray-400 mb-1 text-sm">High School Diploma</div>
                  <ul className="list-disc list-outside text-gray-300 text-sm space-y-1 ml-4">
                    <li>San Ramon, CA</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default About;