import React from 'react';
import whitebag from '../assets/whitebag.png';

function Sidebar({ darkMode, setDarkMode }) {
  const navItems = [
    { href: '#about', label: 'About', icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user group-hover:stroke-[#3b82f6]"><path d="M20 21v-2a4 4 0 0 0-3-3.87"/><path d="M4 21v-2a4 4 0 0 1 3-3.87"/><circle cx="12" cy="7" r="4"/></svg>
    ) },
    { href: '#experience', label: 'Experience', icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-briefcase group-hover:stroke-[#3b82f6]"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 3v4M8 3v4M2 13h20"/></svg>
    ) },
    { href: '#projects', label: 'Projects', icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-layers group-hover:stroke-[#3b82f6]"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
    ) },
    { href: '#contact', label: 'Contact', icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail group-hover:stroke-[#3b82f6]"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><polyline points="2 7 12 13 22 7"/></svg>
    ) },
  ];

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside className="hidden lg:flex flex-col items-center justify-between bg-gray-950 dark:bg-black text-white w-20 min-h-screen py-8 fixed left-0 top-0 z-40">
      <div className="flex flex-col items-center gap-8">
        <a href="#" onClick={handleLogoClick} className="hover:scale-110 transition-transform duration-200">
          <img src={whitebag} alt="Logo" className="w-8 h-8 object-contain" />
        </a>
        <nav className="flex flex-col gap-6 mt-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group hover:text-[#3b82f6] transition"
              title={item.label}
            >
              {item.icon}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col gap-4 mt-4">
          <a href="https://www.linkedin.com/in/ethandtsao/" target="_blank" rel="noopener noreferrer" className="group hover:text-[#3b82f6] transition" title="LinkedIn">
            <svg width="24" height="24" fill="currentColor" className="inline"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
          </a>
          <a href="https://github.com/ethantsaox" target="_blank" rel="noopener noreferrer" className="group hover:text-[#3b82f6] transition" title="GitHub">
            <svg width="24" height="24" fill="currentColor" className="inline"><path d="M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.304-.535-1.527.117-3.18 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.876.12 3.18.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.625-5.475 5.92.43.37.823 1.096.823 2.21 0 1.595-.015 2.88-.015 3.27 0 .32.218.694.825.576 4.765-1.587 8.2-6.086 8.2-11.385 0-6.63-5.373-12-12-12z"/></svg>
          </a>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar; 