import React from 'react';

function Footer() {
  return (
    <footer className="w-full text-gray-700 dark:text-gray-300 py-4 flex flex-col items-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} Ethan Tsao. All rights reserved.</p>
    </footer>
  );
}

export default Footer; 