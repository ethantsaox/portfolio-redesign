import React, { useRef, useEffect } from 'react';

const DOTS = 15;
const DOT_SIZE = 1;
const SPEED = 0.15;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function AnimatedDotsBackground() {
  const canvasRef = useRef(null);
  const dots = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationId;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    resize();
    window.addEventListener('resize', resize);

    // Initialize dots
    dots.current = Array.from({ length: DOTS }).map((_, i) => {
      // Half the dots near the bottom, half random
      if (i < Math.floor(DOTS / 2)) {
        return {
          x: random(0, width),
          y: random(height * 0.7, height),
          vx: random(-SPEED, SPEED),
          vy: random(-SPEED, SPEED),
          alpha: random(0.85, 1),
        };
      } else {
        return {
          x: random(0, width),
          y: random(0, height),
          vx: random(-SPEED, SPEED),
          vy: random(-SPEED, SPEED),
          alpha: random(0.85, 1),
        };
      }
    });

    function animate() {
      ctx.clearRect(0, 0, width, height);
      // Draw dots only
      for (let dot of dots.current) {
        // Move
        dot.x += dot.vx;
        dot.y += dot.vy;
        // Bounce off edges
        if (dot.x < 0 || dot.x > width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > height) dot.vy *= -1;
        // Draw
        ctx.save();
        ctx.globalAlpha = dot.alpha;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, DOT_SIZE, 0, 2 * Math.PI);
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = '#ffffff';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      }
      animationId = requestAnimationFrame(animate);
    }
    animate();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        background: 'transparent',
      }}
      aria-hidden="true"
    />
  );
}

export default AnimatedDotsBackground; 