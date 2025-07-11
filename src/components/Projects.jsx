import React from 'react';
import { GlobeAltIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import youtubeApiImg from '../assets/youtubeapi.png';
import restaurantImg from '../assets/restaurant.png';
import downArrow from '../assets/downarrow.png';
import tt4dImg from '../assets/portfolioimg.png';
import dashboardImg from '../assets/Dashboard 1.png';
import worldhappyImg from '../assets/worldhappy.png';
import bankmanGif from '../assets/bankman.gif';
import cloneGif from '../assets/clone.gif';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

const projects = [
  {
    title: 'Bank Churn Analysis',
    image: bankmanGif,
    description:
      'Applied customer segmentation and deployed classification models to detect churn patterns.',
    tech: [
      'R', 'ggplot', 'tidymodels',
    ],
    buttons: [
      {
        label: 'Source',
        href: 'https://ethantsaox.github.io/Bank-Churn-Analysis/',
        icon: GlobeAltIcon,
      },
    ],
  },
  {
    title: 'Portfolio Redesign',
    image: cloneGif,
    description:
      'A complete redesign of my personal portfolio with new animations and a modern stack.',
    tech: [
      'React', 'Vite', 'TailwindCSS', 'Framer Motion',
    ],
    buttons: [
      {
        label: 'Source',
        href: '#',
        icon: CodeBracketIcon,
      },
    ],
  },
  {
    title: 'Airline Review Dashboard',
    image: dashboardImg,
    description:
      'Interactive Tableau dashboard analyzing airline reviews with dynamic filters, trend analysis, and heatmaps.',
    tech: [
      'Tableau',
    ],
    buttons: [
      {
        label: 'Source',
        href: 'https://public.tableau.com/app/profile/ethan.tsao/viz/AirlineDashboard_17439018224270/Dashboard1',
        icon: GlobeAltIcon,
      },
    ],
  },
  {
    title: 'World Happiness Analysis',
    image: worldhappyImg,
    description:
      'Statistical analysis and viz of global happiness scores, uncovering key factors and trends across countries.',
    tech: [
      'Python', 'Pandas', 'Matplotlib',
    ],
    buttons: [
      {
        label: 'Source',
        href: 'https://github.com/ethantsaox/World-Happiness-Analysis/blob/main/WorldHappiness.pdf',
        icon: GlobeAltIcon,
      },
    ],
  },
];

function Projects() {
  const [projectsRef, isProjectsVisible] = useFadeInOnScroll(0.1);
  return (
    <section 
      ref={projectsRef}
      id="projects" 
      className={`w-full min-h-[40vh] text-white py-8 transition-all duration-1000 ease-out ${
        isProjectsVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        <div className='w-full max-w-2xl mx-auto'>
          <h2 className="text-xs md:text-sm font-semibold mb-3 text-left border border-[#232329] rounded-lg bg-[#18181b] px-2 py-1 inline-block w-auto">Recent Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-2xl w-full">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl border border-[#232329] shadow-lg p-0 flex flex-col justify-between items-start h-72 transition hover:shadow-2xl relative"
            >
              <div className="w-full rounded-t-xl overflow-hidden h-36 bg-black/10 border-b border-white/10">
                <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
              </div>
              <div className="p-2 flex flex-col flex-1 w-full justify-between">
                <h2 className="text-sm font-semibold mb-1 text-white mt-1">{project.title}</h2>
                <p className="text-xs text-gray-300 mb-2 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-[#18181b] text-gray-100 text-[10px] px-2 py-0.5 rounded font-medium tracking-wide border border-[#232329]">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.buttons.map((btn) => (
                    <a
                      key={btn.label}
                      href={btn.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2 py-1 rounded-lg border border-[#232329] bg-white hover:bg-gray-100 text-gray-900 font-medium text-xs transition shadow-sm hover:ring-2 hover:ring-[#3b82f6] hover:-translate-y-0.5"
                    >
                      <btn.icon className="w-4 h-4" />
                      {btn.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects; 