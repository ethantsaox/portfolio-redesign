import React, { useEffect, useRef } from 'react';

const BLOBS = Array.from({ length: 6 }).map((_, i) => {
  const colors = [
    'rgba(255,255,255,0.13)',
    'rgba(0,0,0,0.13)',
    'rgba(200,200,200,0.12)',
    'rgba(30,30,30,0.12)',
  ];
  const side = i % 2 === 0 ? 'left' : 'right';
  const left = side === 'left' ? Math.random() * 8 + 1 : undefined;
  const right = side === 'right' ? Math.random() * 8 + 1 : undefined;
  return {
    color: colors[i % colors.length],
    size: Math.random() * 13 + 10, // vw (slightly larger)
    left,
    right,
    top: Math.random() * 80 + 5, // vh
    blur: Math.random() * 32 + 22, // px (more blur)
    duration: Math.random() * 18 + 18, // seconds
    delay: Math.random() * 10,
    direction: Math.random() > 0.5 ? 1 : -1,
    borderRadius: Math.random() * 30 + 50, // %
    opacity: Math.random() * 0.18 + 0.13, // more visible
  };
});

function BackgroundBlobs() {
  const refs = useRef([]);

  useEffect(() => {
    let frame;
    function animate() {
      const now = Date.now() / 1000;
      BLOBS.forEach((blob, i) => {
        const el = refs.current[i];
        if (el) {
          const y = blob.top + Math.sin(now / blob.duration + blob.delay) * 4 * blob.direction;
          const x = blob.left !== undefined
            ? blob.left + Math.cos(now / blob.duration + blob.delay) * 2 * blob.direction
            : undefined;
          const r = blob.right !== undefined
            ? blob.right + Math.cos(now / blob.duration + blob.delay) * 2 * blob.direction
            : undefined;
          const borderR = blob.borderRadius + Math.sin(now / (blob.duration * 0.7) + i) * 10;
          el.style.transform = `translateY(${y}vh)`;
          el.style.borderRadius = `${borderR}%`;
          if (x !== undefined) {
            el.style.left = `${x}vw`;
            el.style.right = '';
          } else if (r !== undefined) {
            el.style.right = `${r}vw`;
            el.style.left = '';
          }
        }
      });
      frame = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      {BLOBS.map((blob, i) => (
        <div
          key={i}
          ref={el => refs.current[i] = el}
          style={{
            position: 'fixed',
            zIndex: 0,
            pointerEvents: 'none',
            userSelect: 'none',
            width: `${blob.size}vw`,
            height: `${blob.size}vw`,
            background: blob.color,
            filter: `blur(${blob.blur}px)`,
            left: blob.left !== undefined ? `${blob.left}vw` : undefined,
            right: blob.right !== undefined ? `${blob.right}vw` : undefined,
            top: 0,
            opacity: blob.opacity,
            transition: 'background 0.5s',
            willChange: 'transform, border-radius',
          }}
        />
      ))}
    </>
  );
}

export default BackgroundBlobs; 