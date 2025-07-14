import React, { useRef, useEffect } from 'react';

const DOTS = 8; // Reduced from 15
const DOT_SIZE = 1;
const SPEED = 0.1; // Reduced from 0.15
const TARGET_FPS = 30; // Target 30fps instead of 60fps
const FRAME_INTERVAL = 1000 / TARGET_FPS;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function AnimatedDotsBackground() {
  const canvasRef = useRef(null);
  const dots = useRef([]);
  const lastFrameTime = useRef(0);
  const isVisible = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationId;

    // Set up canvas for better performance
    ctx.imageSmoothingEnabled = false;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      // Reinitialize dots on resize
      initializeDots();
    }

    function initializeDots() {
      dots.current = Array.from({ length: DOTS }).map((_, i) => {
        // Half the dots near the bottom, half random
        if (i < Math.floor(DOTS / 2)) {
          return {
            x: random(0, width),
            y: random(height * 0.7, height),
            vx: random(-SPEED, SPEED),
            vy: random(-SPEED, SPEED),
            alpha: random(0.7, 0.9), // Reduced alpha for better performance
          };
        } else {
          return {
            x: random(0, width),
            y: random(0, height),
            vx: random(-SPEED, SPEED),
            vy: random(-SPEED, SPEED),
            alpha: random(0.7, 0.9),
          };
        }
      });
    }

    resize();
    window.addEventListener('resize', resize);

    // Pause animation when tab is not visible
    function handleVisibilityChange() {
      isVisible.current = !document.hidden;
      if (isVisible.current) {
        lastFrameTime.current = performance.now();
        animate();
      } else {
        cancelAnimationFrame(animationId);
      }
    }
    
    document.addEventListener('visibilitychange', handleVisibilityChange);

    function animate(currentTime = 0) {
      if (!isVisible.current) return;
      
      // Frame rate limiting
      if (currentTime - lastFrameTime.current < FRAME_INTERVAL) {
        animationId = requestAnimationFrame(animate);
        return;
      }
      
      lastFrameTime.current = currentTime;
      
      ctx.clearRect(0, 0, width, height);
      
      // Batch drawing for better performance
      ctx.fillStyle = '#ffffff';
      
      for (let dot of dots.current) {
        // Move
        dot.x += dot.vx;
        dot.y += dot.vy;
        // Bounce off edges
        if (dot.x < 0 || dot.x > width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > height) dot.vy *= -1;
        
        // Draw without shadows for better performance
        ctx.globalAlpha = dot.alpha;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, DOT_SIZE, 0, 2 * Math.PI);
        ctx.fill();
      }
      
      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    }
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
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