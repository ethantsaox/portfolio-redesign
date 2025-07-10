import React from 'react';
import summerObjects from '../assets/summernexusobjects.png';

function SummerDecorations() {
  // Define different decorative objects with their positions and animations
  const decorations = [
    {
      id: 1,
      top: '10%',
      left: '5%',
      size: 'w-8 h-8',
      animation: 'animate-bounce',
      delay: 'delay-0'
    },
    {
      id: 2,
      top: '25%',
      right: '8%',
      size: 'w-6 h-6',
      animation: 'animate-pulse',
      delay: 'delay-300'
    },
    {
      id: 3,
      top: '45%',
      left: '12%',
      size: 'w-10 h-10',
      animation: 'animate-spin',
      delay: 'delay-500'
    },
    {
      id: 4,
      top: '60%',
      right: '15%',
      size: 'w-7 h-7',
      animation: 'animate-bounce',
      delay: 'delay-700'
    },
    {
      id: 5,
      top: '80%',
      left: '8%',
      size: 'w-9 h-9',
      animation: 'animate-pulse',
      delay: 'delay-1000'
    },
    {
      id: 6,
      top: '15%',
      left: '85%',
      size: 'w-5 h-5',
      animation: 'animate-spin',
      delay: 'delay-1200'
    },
    {
      id: 7,
      top: '70%',
      right: '5%',
      size: 'w-8 h-8',
      animation: 'animate-bounce',
      delay: 'delay-1500'
    },
    {
      id: 8,
      top: '35%',
      left: '90%',
      size: 'w-6 h-6',
      animation: 'animate-pulse',
      delay: 'delay-1800'
    }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {decorations.map((decoration) => (
        <div
          key={decoration.id}
          className={`absolute ${decoration.size} ${decoration.animation} ${decoration.delay} opacity-30 hover:opacity-60 transition-opacity duration-300`}
          style={{
            top: decoration.top,
            left: decoration.left,
            right: decoration.right,
          }}
        >
          <img
            src={summerObjects}
            alt="Summer decoration"
            className="w-full h-full object-cover rounded-full shadow-lg"
            style={{
              // Create a clipping mask to show different parts of the image
              objectPosition: `${(decoration.id * 12.5) % 100}% ${(decoration.id * 15) % 100}%`
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default SummerDecorations; 