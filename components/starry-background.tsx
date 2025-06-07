'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
}

export const StarryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Create stars
    const stars: Star[] = [];
    const numStars = 250; // Increased number of stars

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 0.5, // Larger size range
        speed: Math.random() * 0.3 + 0.1,
        opacity: Math.random() * 0.5 + 0.3,
        pulse: 0,
        pulseSpeed: Math.random() * 0.1 + 0.02
      });
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Update pulse
        star.pulse += star.pulseSpeed;
        const pulseFactor = Math.sin(star.pulse) * 0.3 + 0.7;
        
        // Create gradient for each star
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 2
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity * pulseFactor})`);
        gradient.addColorStop(0.4, `rgba(210, 210, 255, ${star.opacity * pulseFactor * 0.6})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Move star
        star.y += star.speed;
        star.x += Math.sin(star.pulse * 0.5) * 0.3; // Add subtle horizontal movement

        // Reset star position if it goes off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.25 }}
    />
  );
};
