import React from 'react';
import skullGif from '../assets/skull2.gif';

function SplashScreen() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'black',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      minHeight: '100vh',
      minWidth: '100vw',
    }}>
      <img
        src={skullGif}
        alt="Skull animation"
        style={{
          width: 150,
          height: 150,
          imageRendering: 'pixelated',
          marginBottom: 28,
        }}
      />
    </div>
  );
}

export default SplashScreen; 