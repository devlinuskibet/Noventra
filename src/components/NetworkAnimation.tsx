"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  baseRadius: number;
  color: { r: number; g: number; b: number };
  nodeId: string;
  status: string;
  latency: number;
  pX: number;
  pY: number;
  drawScale: number;
  depth: number;
}

export default function NetworkAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const dimensionsRef = useRef({ width: 0, height: 0 });
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, active: false });
  const cameraRotRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isDestroyed = false;

    const initParticles = (w: number, h: number) => {
      const count = Math.min(Math.floor(w * h * 0.000045), 85);
      const newParticles: Particle[] = [];
      const colors = [
        { r: 59, g: 130, b: 246 },  // Premium Blue
        { r: 99, g: 102, b: 241 },  // Indigo
        { r: 6, g: 182, b: 212 },   // Cyber Cyan
      ];
      const statuses = ["SECURE", "ACTIVE", "ROUTING", "PEERING", "ENCRYPTED", "OPTIMIZED"];

      for (let i = 0; i < count; i++) {
        const color = colors[i % colors.length];
        const status = statuses[i % statuses.length];
        const latency = Math.floor(Math.random() * 25 + 5);
        const nodeId = `NV-${Math.floor(Math.random() * 900 + 100)}`;
        
        newParticles.push({
          x: (Math.random() - 0.5) * w * 1.1,
          y: (Math.random() - 0.5) * h * 1.1,
          z: (Math.random() - 0.5) * 600,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          vz: (Math.random() - 0.5) * 0.25,
          baseRadius: 1.2 + Math.random() * 1.5,
          color,
          nodeId,
          status,
          latency,
          pX: 0,
          pY: 0,
          drawScale: 1,
          depth: 0,
        });
      }
      particlesRef.current = newParticles;
    };

    const updateAndDraw = () => {
      if (isDestroyed) return;

      const dpr = window.devicePixelRatio || 1;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      const sizeChanged = Math.abs(dimensionsRef.current.width - width) > 50 || 
                          Math.abs(dimensionsRef.current.height - height) > 50;

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
        
        if (sizeChanged || particlesRef.current.length === 0) {
          dimensionsRef.current = { width, height };
          initParticles(width, height);
        }
      }

      const time = Date.now() * 0.0003;
      const centerX = width / 2;
      const centerY = height / 2;

      // Smoothly interpolate mouse coordinates
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      // 3D camera rotation targets based on mouse position (yaw & pitch)
      // When inactive, drift gently in a circular path
      const targetRotX = mouseRef.current.active 
        ? (mouseRef.current.y - centerY) * 0.0004
        : Math.sin(time * 0.5) * 0.04;
      const targetRotY = mouseRef.current.active 
        ? (mouseRef.current.x - centerX) * 0.0004
        : Math.cos(time * 0.4) * 0.04;

      cameraRotRef.current.x += (targetRotX - cameraRotRef.current.x) * 0.04;
      cameraRotRef.current.y += (targetRotY - cameraRotRef.current.y) * 0.04;

      const cosX = Math.cos(cameraRotRef.current.x);
      const sinX = Math.sin(cameraRotRef.current.x);
      const cosY = Math.cos(cameraRotRef.current.y);
      const sinY = Math.sin(cameraRotRef.current.y);

      // Adaptive focal length
      const focalLength = Math.max(width, height) * 0.75;

      // 1. Update particle coordinates, apply drift and rotation, project to 2D
      const list = particlesRef.current;
      const listLen = list.length;

      for (let i = 0; i < listLen; i++) {
        const p = list[i];

        // Natural slow drifting movement
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Wave-like flow fields (layered sinusoids for organic liquid motion)
        const waveX = Math.sin(time * 0.7 + p.z * 0.008 + p.y * 0.004) * 0.25;
        const waveY = Math.cos(time * 0.6 + p.x * 0.008 + p.z * 0.004) * 0.25;
        const waveZ = Math.sin(time * 0.5 + p.y * 0.008 + p.x * 0.004) * 0.20;
        p.x += waveX;
        p.y += waveY;
        p.z += waveZ;

        // Boundary wrap
        const limitW = width * 1.1;
        const limitH = height * 1.1;
        const limitD = 600;

        if (p.x > limitW / 2) p.x = -limitW / 2;
        else if (p.x < -limitW / 2) p.x = limitW / 2;

        if (p.y > limitH / 2) p.y = -limitH / 2;
        else if (p.y < -limitH / 2) p.y = limitH / 2;

        if (p.z > limitD / 2) p.z = -limitD / 2;
        else if (p.z < -limitD / 2) p.z = limitD / 2;

        // 3D rotation
        // Rotate around Y axis (yaw)
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.x * sinY + p.z * cosY;
        // Rotate around X axis (pitch)
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        // Perspective projection
        const scale = focalLength / Math.max(50, focalLength + z2);
        let projX = centerX + x1 * scale;
        let projY = centerY + y2 * scale;

        // Interactive gravity perturbation (grid warping)
        if (mouseRef.current.active) {
          const dx = projX - mouseRef.current.x;
          const dy = projY - mouseRef.current.y;
          const dist2D = Math.sqrt(dx * dx + dy * dy);
          const repelRadius = 180;

          if (dist2D < repelRadius && dist2D > 0) {
            const force = (1 - dist2D / repelRadius) * 35; // displacement strength
            projX += (dx / dist2D) * force;
            projY += (dy / dist2D) * force;
          }
        }

        p.pX = projX;
        p.pY = projY;
        p.drawScale = scale;
        p.depth = z2;
      }

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // 2. Draw connections (lines)
      const max3DDist = 200;
      for (let i = 0; i < listLen; i++) {
        const p1 = list[i];
        for (let j = i + 1; j < listLen; j++) {
          const p2 = list[j];

          // Compute distance in 3D space to avoid drawing connections through objects at different depths
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dz = p1.z - p2.z;
          const dist3D = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist3D < max3DDist) {
            const avgDepth = (p1.depth + p2.depth) / 2; // ranges from -300 to 300
            // Closer elements are brighter and background elements are transparent/faded
            const depthFactor = Math.max(0.05, 1 - (avgDepth + 300) / 600);
            const distFactor = 1 - dist3D / max3DDist;
            const alpha = distFactor * 0.16 * depthFactor;

            if (alpha > 0.01) {
              // Smooth averaged color stroke for fast drawing (avoiding linear gradient overhead inside loop)
              const avgR = Math.round((p1.color.r + p2.color.r) / 2);
              const avgG = Math.round((p1.color.g + p2.color.g) / 2);
              const avgB = Math.round((p1.color.b + p2.color.b) / 2);

              ctx.beginPath();
              ctx.moveTo(p1.pX, p1.pY);
              ctx.lineTo(p2.pX, p2.pY);
              ctx.strokeStyle = `rgba(${avgR}, ${avgG}, ${avgB}, ${alpha})`;
              ctx.lineWidth = 0.55 * ((p1.drawScale + p2.drawScale) / 2);
              ctx.stroke();
            }
          }
        }
      }

      // 3. Draw nodes (dots) - painter's algorithm sorting by depth descending
      const sortedList = [...list].sort((a, b) => b.depth - a.depth);
      for (let i = 0; i < sortedList.length; i++) {
        const p = sortedList[i];
        const r = p.baseRadius * p.drawScale;
        const depthFactor = Math.max(0.05, 1 - (p.depth + 300) / 600);
        const alpha = Math.max(0.06, 0.65 * p.drawScale) * depthFactor;

        ctx.beginPath();
        ctx.arc(p.pX, p.pY, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha})`;
        ctx.fill();

        // Beautiful cinematic soft outer glow for foreground/close-up nodes
        if (p.depth < 80) {
          ctx.beginPath();
          ctx.arc(p.pX, p.pY, r + 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha * 0.15})`;
          ctx.fill();
        }
      }

      // 4. Render Futuristic cyber-HUD Target Reticle for closest node on mouse hover
      let hoveredNode: Particle | null = null;
      let minHoverDist = 32; // px threshold

      if (mouseRef.current.active) {
        for (let i = 0; i < listLen; i++) {
          const p = list[i];
          const dx = p.pX - mouseRef.current.x;
          const dy = p.pY - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < minHoverDist) {
            minHoverDist = dist;
            hoveredNode = p;
          }
        }
      }

      if (hoveredNode) {
        const h = hoveredNode;
        const reticleR = h.baseRadius * h.drawScale + 12;
        const rotAngle = (Date.now() * 0.0018) % (Math.PI * 2);

        // Draw rotating dashed circular reticle
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.arc(h.pX, h.pY, reticleR, rotAngle, rotAngle + Math.PI * 2);
        ctx.strokeStyle = "rgba(6, 182, 212, 0.85)"; // High visibility cyan
        ctx.lineWidth = 1;
        ctx.stroke();

        // Reset dash for lines
        ctx.setLineDash([]);

        // Draw four small crosshair ticks
        ctx.strokeStyle = "rgba(6, 182, 212, 0.4)";
        ctx.lineWidth = 0.8;
        
        ctx.beginPath();
        ctx.moveTo(h.pX, h.pY - reticleR - 3);
        ctx.lineTo(h.pX, h.pY - reticleR + 1);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(h.pX, h.pY + reticleR + 3);
        ctx.lineTo(h.pX, h.pY + reticleR - 1);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(h.pX - reticleR - 3, h.pY);
        ctx.lineTo(h.pX - reticleR + 1, h.pY);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(h.pX + reticleR + 3, h.pY);
        ctx.lineTo(h.pX + reticleR - 1, h.pY);
        ctx.stroke();

        // Draw pointer leader line to text box
        const angle = -Math.PI / 4; // top right (45 degrees)
        const startX = h.pX + Math.cos(angle) * reticleR;
        const startY = h.pY + Math.sin(angle) * reticleR;
        const midX = startX + 16;
        const midY = startY - 16;
        const endX = midX + 45;

        ctx.strokeStyle = "rgba(6, 182, 212, 0.7)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(midX, midY);
        ctx.lineTo(endX, midY);
        ctx.stroke();

        // Draw glass card container for HUD text
        const cardX = endX + 2;
        const cardY = midY - 12;
        const cardW = 95;
        const cardH = 34;

        ctx.fillStyle = "rgba(10, 18, 32, 0.85)"; // Glass cyber-dark
        ctx.strokeStyle = "rgba(6, 182, 212, 0.25)";
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.rect(cardX, cardY, cardW, cardH);
        ctx.fill();
        ctx.stroke();

        // Left cyan highlight stripe
        ctx.fillStyle = "rgba(6, 182, 212, 0.85)";
        ctx.fillRect(cardX, cardY, 2.5, cardH);

        // Tech specs inside card
        ctx.font = "600 8px SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace";
        ctx.textAlign = "left";
        
        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx.fillText(`LOC: ${h.nodeId}`, cardX + 7, cardY + 9);
        
        ctx.fillStyle = "rgba(6, 182, 212, 0.9)";
        ctx.fillText(`SYS: ${h.status}`, cardX + 7, cardY + 19);
        
        ctx.fillStyle = "rgba(16, 185, 129, 0.9)";
        ctx.fillText(`PING: ${h.latency}ms`, cardX + 7, cardY + 29);
      }

      animationFrameId = requestAnimationFrame(updateAndDraw);
    };

    // Track mouse events relative to canvas bounding box (even with pointer-events: none on canvas)
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        mouseRef.current.targetX = x;
        mouseRef.current.targetY = y;
        mouseRef.current.active = true;
      } else {
        mouseRef.current.active = false;
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;

      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        mouseRef.current.targetX = x;
        mouseRef.current.targetY = y;
        mouseRef.current.active = true;
      } else {
        mouseRef.current.active = false;
      }
    };

    // Bind listeners to window to capture tracking even if cursor moves behind absolute text elements
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleMouseLeave);
    window.addEventListener("touchcancel", handleMouseLeave);

    // Initial load
    const initialWidth = canvas.clientWidth;
    const initialHeight = canvas.clientHeight;
    dimensionsRef.current = { width: initialWidth, height: initialHeight };
    initParticles(initialWidth, initialHeight);

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      // Draw a single static frame and do not start animation loop
      updateAndDraw();
      isDestroyed = true;
    } else {
      animationFrameId = requestAnimationFrame(updateAndDraw);
    }

    return () => {
      isDestroyed = true;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseLeave);
      window.removeEventListener("touchcancel", handleMouseLeave);
    };
  }, []);

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
