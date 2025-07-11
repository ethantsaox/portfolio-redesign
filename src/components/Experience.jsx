import React from 'react';
import pythonLogo from '../assets/python2.png';
import rLogo from '../assets/rlogo.png';
import sqlLogo from '../assets/sql.svg';
import sasLogo from '../assets/saslogo.png';
import jsLogo from '../assets/jslogo.png';
import reactLogo from '../assets/reactlogo.png';
import gitLogo from '../assets/gitlogo.png';
import tableauLogo from '../assets/tableaulogo.png';
import pandasLogo from '../assets/pandaslogo.png';
import htmlLogo from '../assets/htmllogo.png';
import pytorchLogo from '../assets/pytorchlogo.png';
import jupyterLogo from '../assets/jupyterlogo.png';
import scikitLogo from '../assets/scikitlogo.png';
import tensorLogo from '../assets/tensorlogo.png';

const skills = [
  { name: 'Python', icon: pythonLogo },
  { name: 'R', icon: rLogo },
  { name: 'SQL', icon: sqlLogo },
  { name: 'SAS', icon: sasLogo },
  { name: 'JavaScript', icon: jsLogo },
  { name: 'React', icon: reactLogo },
  { name: 'Git', icon: gitLogo },
  { name: 'Tableau', icon: tableauLogo },
  { name: 'Pandas', icon: pandasLogo },
  { name: 'HTML', icon: htmlLogo },
  { name: 'SKLearn', icon: scikitLogo },
  { name: 'TensorFlow', icon: tensorLogo },
];

function Experience() {
  return (
    <section id="experience" className="w-full min-h-[40vh] text-white py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
        <div className="w-full max-w-2xl mx-auto">
          <h2 className="text-xs md:text-sm font-medium mb-3 text-center border border-[#232329] rounded-lg bg-[#18181b] px-2 py-1 inline-block w-auto">Tech Stack</h2>
        </div>
        <div 
          className="grid grid-cols-4 gap-3 w-full max-w-2xl mx-auto"
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="border border-[#232329] rounded-xl shadow flex flex-col items-center justify-center py-3 transition hover:border-[#3b82f6] group"
            >
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-7 h-7 mb-2 transition-transform duration-200 group-hover:-translate-y-1" 
              />
              <span className="text-gray-100 text-xs font-medium text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience; 