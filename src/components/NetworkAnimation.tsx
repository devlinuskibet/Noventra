// Particle State: Initializing Node ID Generator
"use client";

import { useEffect, useRef, useCallback } from "react";

export default function NetworkAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    }

    const time = Date.now() * 0.0003;
    ctx.clearRect(0, 0, width, height);

    // Generate node positions
    const nodes: { x: number; y: number; r: number }[] = [];
    const nodeCount = Math.min(Math.floor(width * height * 0.00003), 60);
    
    for (let i = 0; i < nodeCount; i++) {
      const seed1 = Math.sin(i * 127.1 + 311.7) * 43758.5453;
      const seed2 = Math.sin(i * 269.5 + 183.3) * 43758.5453;
      const baseX = (seed1 - Math.floor(seed1)) * width;
      const baseY = (seed2 - Math.floor(seed2)) * height;
      const offsetX = Math.sin(time + i * 0.7) * 20;
      const offsetY = Math.cos(time + i * 0.5) * 15;
      nodes.push({
        x: baseX + offsetX,
        y: baseY + offsetY,
        r: 1.5 + (seed1 - Math.floor(seed1)) * 2,
      });
    }

    // Draw connections
    const maxDist = 180;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.15;
          ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    for (const node of nodes) {
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(59, 130, 246, 0.4)";
      ctx.fill();
      
      // Glow
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.r + 2, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(59, 130, 246, 0.08)";
      ctx.fill();
    }

    animationRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      // Draw once, static
      draw();
      cancelAnimationFrame(animationRef.current);
      return;
    }

    animationRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animationRef.current);
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
}
