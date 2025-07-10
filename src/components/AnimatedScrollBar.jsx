import React, { useEffect, useRef } from 'react';

function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function AnimatedScrollBar() {
  const fillRef = useRef();
  const animVal = useRef(0); // animated value
  const targetVal = useRef(0); // target value
  const rafRef = useRef();

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const scrollHeight = doc.scrollHeight - window.innerHeight;
      const percent = scrollHeight > 0 ? clamp(scrollTop / scrollHeight, 0, 1) : 0;
      targetVal.current = percent;
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    function animate() {
      animVal.current = lerp(animVal.current, targetVal.current, 0.13);
      if (fillRef.current) {
        fillRef.current.style.height = `${animVal.current * 100}%`;
      }
      rafRef.current = requestAnimationFrame(animate);
    }
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Bar dimensions
  const barWidth = 6; // px
  const trackHeight = 140; // px

  return (
    <div style={{
      position: 'fixed',
      right: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      height: trackHeight,
      width: 32,
      zIndex: 50,
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    }}>
      {/* Track */}
      <div style={{
        width: barWidth,
        height: trackHeight,
        background: 'rgba(80,110,180,0.13)',
        borderRadius: barWidth,
        marginRight: 4,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
        {/* Fill */}
        <div
          ref={fillRef}
          style={{
            width: '100%',
            height: '0%', // will be animated
            background: '#3b82f6',
            borderRadius: barWidth,
            transition: 'none',
            willChange: 'height',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
      </div>
    </div>
  );
}

export default AnimatedScrollBar; 