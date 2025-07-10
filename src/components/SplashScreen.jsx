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
      <div style={{
        color: 'white',
        fontFamily: 'sans-serif',
        fontWeight: 900,
        fontSize: 34,
        letterSpacing: '0.01em',
        textAlign: 'center',
        textShadow: '0 2px 0 #222, 0 0 8px #fff2',
        lineHeight: 1.1,
      }}>
        Nexus
      </div>
    </div>
  );
}

export default SplashScreen; 