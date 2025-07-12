import React from 'react';

function Sidebar() {
  const navItems = [
    { href: '#about', label: 'about' },
    { href: '#experience', label: 'stack' },
    { href: '#projects', label: 'projects' },
    { href: '#contact', label: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]] backdrop-blur-md py-4 px-0">
      <div className="max-w-3xl mx-auto flex flex-row items-center justify-between px-4 font-sans font-normal text-base text-gray-400">
        <button
          onClick={() => window.location.reload()}
          className="hidden md:block font-bold text-white text-xl select-none tracking-tight ml-[34px] bg-transparent border-none cursor-pointer focus:outline-none"
          style={{ appearance: 'none' }}
          aria-label="Refresh page"
        >
          ET
        </button>
        <div className="flex flex-row items-center gap-x-8 mr-[38px]">
          {navItems.map((item) => (
            item.label === 'about' ? (
              <a
                key={item.href}
                href="#"
                onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="hover:text-white transition-colors duration-200 lowercase"
                style={{ textDecoration: 'none' }}
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-white transition-colors duration-200 lowercase"
                style={{ textDecoration: 'none' }}
              >
                {item.label}
              </a>
            )
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Sidebar; 