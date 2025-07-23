import React, { useRef, useEffect } from 'react';

const STARS = 10; // More stars for better visibility
const MIN_STAR_SIZE = 2;
const MAX_STAR_SIZE = 4;
const SPEED = 0.08; // Slower, more graceful movement
const TARGET_FPS = 60; // Back to 60fps for smooth twinkling
const FRAME_INTERVAL = 1000 / TARGET_FPS;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function drawStar(ctx, x, y, size) {
  const spikes = 5;
  const outerRadius = size;
  const innerRadius = size * 0.4;
  
  ctx.beginPath();
  
  for (let i = 0; i < spikes * 2; i++) {
    const angle = (i * Math.PI) / spikes;
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const xPos = x + Math.cos(angle) * radius;
    const yPos = y + Math.sin(angle) * radius;
    
    if (i === 0) {
      ctx.moveTo(xPos, yPos);
    } else {
      ctx.lineTo(xPos, yPos);
    }
  }
  
  ctx.closePath();
  ctx.fill();
}

function AnimatedDotsBackground() {
  const canvasRef = useRef(null);
  const stars = useRef([]);
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
      // Reinitialize stars on resize
      initializeStars();
    }

    function initializeStars() {
      stars.current = Array.from({ length: STARS }).map((_, i) => {
        // Half the stars near the bottom, half random
        if (i < Math.floor(STARS / 2)) {
          return {
            x: random(0, width),
            y: random(height * 0.7, height),
            vx: random(-SPEED, SPEED),
            vy: random(-SPEED, SPEED),
            alpha: random(0.7, 0.9),
            size: random(MIN_STAR_SIZE, MAX_STAR_SIZE),
            twinklePhase: random(0, Math.PI * 2),
            twinkleSpeed: random(0.02, 0.05),
          };
        } else {
          return {
            x: random(0, width),
            y: random(0, height),
            vx: random(-SPEED, SPEED),
            vy: random(-SPEED, SPEED),
            alpha: random(0.7, 0.9),
            size: random(MIN_STAR_SIZE, MAX_STAR_SIZE),
            twinklePhase: random(0, Math.PI * 2),
            twinkleSpeed: random(0.02, 0.05),
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
      
      for (let star of stars.current) {
        // Move
        star.x += star.vx;
        star.y += star.vy;
        // Bounce off edges
        if (star.x < 0 || star.x > width) star.vx *= -1;
        if (star.y < 0 || star.y > height) star.vy *= -1;
        
        // Update twinkling
        star.twinklePhase += star.twinkleSpeed;
        const twinkleAlpha = star.alpha * (0.3 + 0.7 * (Math.sin(star.twinklePhase) + 1) / 2);
        
        // Draw star with twinkling effect
        ctx.globalAlpha = twinkleAlpha;
        drawStar(ctx, star.x, star.y, star.size);
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