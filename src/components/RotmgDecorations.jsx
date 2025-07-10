import React from 'react';
import rotmgDec from '../assets/rotmgdec.png';

function RotmgDecorations() {
  // Define different decorative objects with their positions and animations
  const decorations = [
    {
      id: 1,
      top: '15%',
      left: '8%',
      size: 'w-10 h-10',
      animation: 'animate-bounce',
      delay: 'delay-0',
      rotation: 'rotate-12'
    },
    {
      id: 2,
      top: '30%',
      right: '12%',
      size: 'w-8 h-8',
      animation: 'animate-pulse',
      delay: 'delay-500',
      rotation: '-rotate-6'
    },
    {
      id: 3,
      top: '55%',
      left: '15%',
      size: 'w-12 h-12',
      animation: 'animate-spin',
      delay: 'delay-1000',
      rotation: 'rotate-45'
    },
    {
      id: 4,
      top: '75%',
      right: '8%',
      size: 'w-9 h-9',
      animation: 'animate-bounce',
      delay: 'delay-1500',
      rotation: '-rotate-12'
    },
    {
      id: 5,
      top: '20%',
      left: '80%',
      size: 'w-7 h-7',
      animation: 'animate-pulse',
      delay: 'delay-2000',
      rotation: 'rotate-30'
    },
    {
      id: 6,
      top: '65%',
      right: '20%',
      size: 'w-11 h-11',
      animation: 'animate-spin',
      delay: 'delay-2500',
      rotation: '-rotate-15'
    },
    {
      id: 7,
      top: '40%',
      left: '5%',
      size: 'w-6 h-6',
      animation: 'animate-bounce',
      delay: 'delay-3000',
      rotation: 'rotate-20'
    },
    {
      id: 8,
      top: '85%',
      left: '25%',
      size: 'w-8 h-8',
      animation: 'animate-pulse',
      delay: 'delay-3500',
      rotation: '-rotate-25'
    }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {decorations.map((decoration) => (
        <div
          key={decoration.id}
          className={`absolute ${decoration.size} ${decoration.animation} ${decoration.delay} ${decoration.rotation} opacity-20 hover:opacity-50 transition-all duration-500 hover:scale-110`}
          style={{
            top: decoration.top,
            left: decoration.left,
            right: decoration.right,
          }}
        >
          <img
            src={rotmgDec}
            alt="RotMG decoration"
            className="w-full h-full object-cover rounded-lg shadow-lg"
            style={{
              // Create a clipping mask to show different parts of the image
              objectPosition: `${(decoration.id * 15) % 100}% ${(decoration.id * 20) % 100}%`
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default RotmgDecorations; 