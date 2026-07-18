"use client";

import { useEffect, useRef } from "react";

interface VortexParticle {
  angle: number;
  radius: number;
  z: number;
  spinSpeed: number;
  zSpeed: number;
  baseRadius: number;
  color: { r: number; g: number; b: number };
}

interface PortalItem {
  text: string;
  iconType: string;
  angle: number;
  radius: number;
  z: number;
  spinSpeed: number;
  zSpeed: number;
  color: { r: number; g: number; b: number };
}

// Custom vector canvas path renderers for brand icons
function drawCloud(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
  ctx.beginPath();
  ctx.arc(x - size * 0.25, y + size * 0.08, size * 0.2, Math.PI * 0.5, Math.PI * 1.5);
  ctx.arc(x - size * 0.05, y - size * 0.12, size * 0.28, Math.PI, Math.PI * 1.85);
  ctx.arc(x + size * 0.22, y - size * 0.05, size * 0.22, Math.PI * 1.5, Math.PI * 2.2);
  ctx.arc(x + size * 0.25, y + size * 0.1, size * 0.18, Math.PI * 1.85, Math.PI * 0.5);
  ctx.lineTo(x - size * 0.25, y + size * 0.28);
  ctx.closePath();
  ctx.stroke();
}

function drawShield(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
  ctx.beginPath();
  ctx.moveTo(x, y - size * 0.38);
  ctx.lineTo(x + size * 0.28, y - size * 0.25);
  ctx.lineTo(x + size * 0.28, y + size * 0.08);
  ctx.quadraticCurveTo(x + size * 0.28, y + size * 0.35, x, y + size * 0.45);
  ctx.quadraticCurveTo(x - size * 0.28, y + size * 0.35, x - size * 0.28, y + size * 0.08);
  ctx.lineTo(x - size * 0.28, y - size * 0.25);
  ctx.closePath();
  ctx.stroke();
}

function drawCode(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
  ctx.beginPath();
  // Left angle brace <
  ctx.moveTo(x - size * 0.12, y - size * 0.22);
  ctx.lineTo(x - size * 0.32, y);
  ctx.lineTo(x - size * 0.12, y + size * 0.22);
  
  // Right angle brace >
  ctx.moveTo(x + size * 0.12, y - size * 0.22);
  ctx.lineTo(x + size * 0.32, y);
  ctx.lineTo(x + size * 0.12, y + size * 0.22);
  
  // Center slash /
  ctx.moveTo(x + size * 0.06, y - size * 0.28);
  ctx.lineTo(x - size * 0.06, y + size * 0.28);
  ctx.stroke();
}

function drawCpu(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
  const w = size * 0.45;
  ctx.strokeRect(x - w / 2, y - w / 2, w, w);
  ctx.fillRect(x - w / 4, y - w / 4, w / 2, w / 2);
  
  ctx.beginPath();
  for (let i = -1; i <= 1; i++) {
    // Top & Bottom pins
    ctx.moveTo(x + i * w / 3, y - w / 2);
    ctx.lineTo(x + i * w / 3, y - w / 2 - size * 0.08);
    ctx.moveTo(x + i * w / 3, y + w / 2);
    ctx.lineTo(x + i * w / 3, y + w / 2 + size * 0.08);
    
    // Left & Right pins
    ctx.moveTo(x - w / 2, y + i * w / 3);
    ctx.lineTo(x - w / 2 - size * 0.08, y + i * w / 3);
    ctx.moveTo(x + w / 2, y + i * w / 3);
    ctx.lineTo(x + w / 2 + size * 0.08, y + i * w / 3);
  }
  ctx.stroke();
}

function drawPalette(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
  ctx.beginPath();
  ctx.arc(x, y, size * 0.32, 0.15 * Math.PI, 1.8 * Math.PI);
  ctx.bezierCurveTo(x - size * 0.45, y + size * 0.35, x + size * 0.05, y + size * 0.45, x + size * 0.3, y + size * 0.2);
  ctx.closePath();
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(x - size * 0.14, y - size * 0.1, size * 0.05, 0, Math.PI * 2);
  ctx.arc(x, y - size * 0.18, size * 0.05, 0, Math.PI * 2);
  ctx.arc(x + size * 0.14, y - size * 0.1, size * 0.05, 0, Math.PI * 2);
  ctx.fillStyle = ctx.strokeStyle;
  ctx.fill();
}

function drawLayers(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
  const w = size * 0.35;
  const h = size * 0.15;
  const drawDiamond = (dx: number, dy: number) => {
    ctx.beginPath();
    ctx.moveTo(dx, dy - h);
    ctx.lineTo(dx + w, dy);
    ctx.lineTo(dx, dy + h);
    ctx.lineTo(dx - w, dy);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
    ctx.fill();
  };
  
  const gap = size * 0.18;
  drawDiamond(x, y + gap);
  drawDiamond(x, y);
  drawDiamond(x, y - gap);
}

function drawIcon(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, type: string) {
  switch (type) {
    case "cloud": drawCloud(ctx, x, y, size); break;
    case "shield": drawShield(ctx, x, y, size); break;
    case "code": drawCode(ctx, x, y, size); break;
    case "cpu": drawCpu(ctx, x, y, size); break;
    case "palette": drawPalette(ctx, x, y, size); break;
    case "layers": drawLayers(ctx, x, y, size); break;
  }
}

export default function NetworkAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<VortexParticle[]>([]);
  const portalItemsRef = useRef<PortalItem[]>([]);
  const dimensionsRef = useRef({ width: 0, height: 0 });
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, active: false });
  const cameraRotRef = useRef({ x: 0, y: 0 });
  
  // Wormhole animation intensities
  const portalIntensityRef = useRef(0);
  const portalAxisXRef = useRef(0);
  const portalAxisYRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isDestroyed = false;

    // Initialize 85 stars in cylindrical vortex paths
    const initVortexParticles = (w: number, h: number) => {
      const count = 85;
      const newParticles: VortexParticle[] = [];
      const colors = [
        { r: 59, g: 130, b: 246 },  // Blue
        { r: 99, g: 102, b: 241 },  // Indigo
        { r: 6, g: 182, b: 212 },   // Cyan
      ];

      for (let i = 0; i < count; i++) {
        newParticles.push({
          angle: Math.random() * Math.PI * 2,
          radius: 15 + Math.random() * 30,
          z: Math.random() * 600,
          spinSpeed: 0.003 + Math.random() * 0.006,
          zSpeed: 0.8 + Math.random() * 1.2,
          baseRadius: 1.0 + Math.random() * 1.5,
          color: colors[i % colors.length],
        });
      }
      particlesRef.current = newParticles;
    };

    // Initialize 5 portal branding items that emerge when portal opens
    const initPortalItems = () => {
      const keywords = [
        { text: "GRAPHIC DESIGN", iconType: "palette", color: { r: 236, g: 72, b: 153 } }, // Pink
        { text: "CLOUD SYSTEMS", iconType: "cloud", color: { r: 59, g: 130, b: 246 } },   // Blue
        { text: "CYBER SECURITY", iconType: "shield", color: { r: 16, g: 185, b: 129 } },  // Green
        { text: "SOFTWARE ENG", iconType: "code", color: { r: 139, g: 92, b: 246 } },    // Violet
        { text: "AI & LOGISTICS", iconType: "cpu", color: { r: 245, g: 158, b: 11 } },     // Amber
        { text: "INFRASTRUCTURE", iconType: "layers", color: { r: 99, g: 102, b: 241 } }  // Indigo
      ];

      const newItems: PortalItem[] = [];
      for (let i = 0; i < 5; i++) {
        const cat = keywords[i % keywords.length];
        newItems.push({
          text: cat.text,
          iconType: cat.iconType,
          angle: (i * (Math.PI * 2 / 5)) + Math.random() * 0.4,
          radius: 8 + Math.random() * 12,
          z: 150 + i * 90 + Math.random() * 30, // Spaced in depth
          spinSpeed: 0.005 + Math.random() * 0.005,
          zSpeed: 1.5 + Math.random() * 0.5,
          color: cat.color,
        });
      }
      portalItemsRef.current = newItems;
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
          initVortexParticles(width, height);
          initPortalItems();
          portalAxisXRef.current = width / 2;
          portalAxisYRef.current = height / 2;
        }
      }

      const time = Date.now() * 0.0003;
      const centerX = width / 2;
      const centerY = height / 2;

      // Interpolate mouse tracking coordinates
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      // Expand portal intensity when mouse hover triggers
      const targetPortalIntensity = mouseRef.current.active ? 1.0 : 0.0;
      portalIntensityRef.current += (targetPortalIntensity - portalIntensityRef.current) * 0.07;

      // Portal tunnel axis curves towards cursor location
      const targetAxisX = mouseRef.current.active ? mouseRef.current.x : centerX;
      const targetAxisY = mouseRef.current.active ? mouseRef.current.y : centerY;
      portalAxisXRef.current += (targetAxisX - portalAxisXRef.current) * 0.06;
      portalAxisYRef.current += (targetAxisY - portalAxisYRef.current) * 0.06;

      // 3D camera rotation tilt targets based on cursor displacement from center (parallax)
      const targetRotX = mouseRef.current.active 
        ? (mouseRef.current.y - centerY) * 0.0004
        : Math.sin(time * 0.4) * 0.04;
      const targetRotY = mouseRef.current.active 
        ? (mouseRef.current.x - centerX) * 0.0004
        : Math.cos(time * 0.3) * 0.04;

      cameraRotRef.current.x += (targetRotX - cameraRotRef.current.x) * 0.04;
      cameraRotRef.current.y += (targetRotY - cameraRotRef.current.y) * 0.04;

      const cosX = Math.cos(cameraRotRef.current.x);
      const sinX = Math.sin(cameraRotRef.current.x);
      const cosY = Math.cos(cameraRotRef.current.y);
      const sinY = Math.sin(cameraRotRef.current.y);

      // Perspective camera settings
      const focalLength = Math.max(width, height) * 0.8;

      // 1. Update Vortex particles
      const pList = particlesRef.current;
      const pLen = pList.length;
      for (let i = 0; i < pLen; i++) {
        const p = pList[i];
        p.z -= p.zSpeed;
        p.angle += p.spinSpeed;

        // Wrap around depth
        if (p.z <= 10) {
          p.z = 600;
          p.angle = Math.random() * Math.PI * 2;
          p.radius = 15 + Math.random() * 30;
        }
      }

      // 2. Update emerging Portal items
      const iList = portalItemsRef.current;
      const iLen = iList.length;
      const keywords = [
        { text: "GRAPHIC DESIGN", iconType: "palette", color: { r: 236, g: 72, b: 153 } },
        { text: "CLOUD SYSTEMS", iconType: "cloud", color: { r: 59, g: 130, b: 246 } },
        { text: "CYBER SECURITY", iconType: "shield", color: { r: 16, g: 185, b: 129 } },
        { text: "SOFTWARE ENG", iconType: "code", color: { r: 139, g: 92, b: 246 } },
        { text: "AI & LOGISTICS", iconType: "cpu", color: { r: 245, g: 158, b: 11 } },
        { text: "INFRASTRUCTURE", iconType: "layers", color: { r: 99, g: 102, b: 241 } }
      ];

      for (let i = 0; i < iLen; i++) {
        const item = iList[i];
        item.z -= item.zSpeed;
        item.angle += item.spinSpeed;

        // Emerge again from depth
        if (item.z <= 10) {
          item.z = 600;
          const nextCat = keywords[Math.floor(Math.random() * keywords.length)];
          item.text = nextCat.text;
          item.iconType = nextCat.iconType;
          item.color = nextCat.color;
          item.radius = 8 + Math.random() * 12;
        }
      }

      // Clear screen
      ctx.clearRect(0, 0, width, height);

      // Draw Wormhole portal background circle void
      const currentPortalRadius = 170 * portalIntensityRef.current;
      if (currentPortalRadius > 5) {
        const portalGrad = ctx.createRadialGradient(
          mouseRef.current.x, mouseRef.current.y, 0,
          mouseRef.current.x, mouseRef.current.y, currentPortalRadius
        );
        portalGrad.addColorStop(0, "rgba(10, 15, 28, 0.95)"); // Deep glass void
        portalGrad.addColorStop(0.4, "rgba(15, 23, 42, 0.88)");
        portalGrad.addColorStop(0.7, "rgba(59, 130, 246, 0.18)"); // Neon blue portal outline
        portalGrad.addColorStop(0.9, "rgba(139, 92, 246, 0.05)"); // Soft violet glow ring
        portalGrad.addColorStop(1, "rgba(139, 92, 246, 0)");

        ctx.fillStyle = portalGrad;
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, currentPortalRadius, 0, Math.PI * 2);
        ctx.fill();
        
        // Add a micro-glowing border stroke
        ctx.strokeStyle = `rgba(6, 182, 212, ${portalIntensityRef.current * 0.12})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, currentPortalRadius * 0.7, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Compile everything to sort by depth (Painter's algorithm)
      interface Renderable {
        depth: number;
        render: () => void;
      }
      const renderables: Renderable[] = [];

      // Add stars render steps
      for (let i = 0; i < pLen; i++) {
        const p = pList[i];
        
        // Transform cylindrical to Cartesian 3D coordinates
        const spiralRadius = p.radius + ((600 - p.z) / 600) * (width * 0.38);
        const x = Math.cos(p.angle) * spiralRadius;
        const y = Math.sin(p.angle) * spiralRadius;
        const z = p.z;

        // Yaw Y-rotation
        const x1 = x * cosY - z * sinY;
        const z1 = x * sinY + z * cosY;
        // Pitch X-rotation
        const y2 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;

        // Project to screen coordinate
        const scale = focalLength / Math.max(30, focalLength + z2);
        let projX = portalAxisXRef.current + x1 * scale;
        let projY = portalAxisYRef.current + y2 * scale;

        // Wormhole parting push: part particles away from cursor center void
        if (portalIntensityRef.current > 0.05) {
          const dx = projX - mouseRef.current.x;
          const dy = projY - mouseRef.current.y;
          const dist2D = Math.sqrt(dx * dx + dy * dy);
          const repelRadius = 180 * portalIntensityRef.current;
          if (dist2D < repelRadius && dist2D > 0) {
            const force = (1 - dist2D / repelRadius) * 45;
            projX += (dx / dist2D) * force;
            projY += (dy / dist2D) * force;
          }
        }

        renderables.push({
          depth: z2,
          render: () => {
            const r = p.baseRadius * scale;
            const depthAlpha = Math.max(0.04, 1 - (z2 + 200) / 800);
            const alpha = Math.max(0.06, 0.6 * scale) * depthAlpha * (1 + portalIntensityRef.current * 0.4);

            ctx.beginPath();
            ctx.arc(projX, projY, r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha})`;
            ctx.fill();

            // Tiny outer glow for closer stars
            if (z2 < 60) {
              ctx.beginPath();
              ctx.arc(projX, projY, r + 2, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha * 0.12})`;
              ctx.fill();
            }
          }
        });
      }

      // Add portal brand items render steps (emerge from wormhole)
      for (let i = 0; i < iLen; i++) {
        const item = iList[i];
        
        // Emerge close to center, swirl outward as they approach screen
        const swirlRadius = item.radius + ((600 - item.z) / 600) * (width * 0.16);
        const x = Math.cos(item.angle) * swirlRadius;
        const y = Math.sin(item.angle) * swirlRadius;
        const z = item.z;

        // Yaw Y-rotation
        const x1 = x * cosY - z * sinY;
        const z1 = x * sinY + z * cosY;
        // Pitch X-rotation
        const y2 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;

        // Project
        const scale = focalLength / Math.max(30, focalLength + z2);
        const projX = portalAxisXRef.current + x1 * scale;
        const projY = portalAxisYRef.current + y2 * scale;

        renderables.push({
          depth: z2,
          render: () => {
            const depthAlpha = Math.max(0, 1 - (z2 + 80) / 650);
            const alpha = portalIntensityRef.current * depthAlpha * 0.85;

            if (alpha > 0.02) {
              const itemSize = Math.max(8, 20 * scale);

              // 1. Draw glowing vector icon
              ctx.strokeStyle = `rgba(${item.color.r}, ${item.color.g}, ${item.color.b}, ${alpha})`;
              ctx.lineWidth = 1.5 * scale;
              ctx.shadowColor = `rgba(${item.color.r}, ${item.color.g}, ${item.color.b}, 0.4)`;
              ctx.shadowBlur = 8 * scale;
              
              drawIcon(ctx, projX, projY, itemSize, item.iconType);
              
              // Reset shadow blur
              ctx.shadowBlur = 0;

              // 2. Draw label text (with a dark background outline to prevent swallowing by text behind it)
              const fontSize = Math.max(7, Math.round(9 * scale));
              ctx.font = `800 ${fontSize}px "SFMono-Regular", Consolas, Menlo, monospace`;
              ctx.textAlign = "center";
              
              const textY = projY + itemSize * 0.7 + 10;
              
              // Dark text outline stroke for extreme contrast
              ctx.strokeStyle = `rgba(10, 15, 28, ${alpha * 0.95})`;
              ctx.lineWidth = 3;
              ctx.strokeText(item.text, projX, textY);
              
              // Core text fill
              ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.95})`;
              ctx.fillText(item.text, projX, textY);
              
              // Underline text decoration stripe
              ctx.fillStyle = `rgba(${item.color.r}, ${item.color.g}, ${item.color.b}, ${alpha * 0.85})`;
              ctx.fillRect(projX - (item.text.length * fontSize * 0.28), textY + 4, item.text.length * fontSize * 0.56, 1);
            }
          }
        });
      }

      // Sort depth descending (painter's algorithm)
      renderables.sort((a, b) => b.depth - a.depth);

      // Exec rendering
      const rLen = renderables.length;
      for (let i = 0; i < rLen; i++) {
        renderables[i].render();
      }

      animationFrameId = requestAnimationFrame(updateAndDraw);
    };

    // Track mouse events bounds relative to canvas client dimensions
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

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleMouseLeave);
    window.addEventListener("touchcancel", handleMouseLeave);

    const initialWidth = canvas.clientWidth;
    const initialHeight = canvas.clientHeight;
    dimensionsRef.current = { width: initialWidth, height: initialHeight };
    initVortexParticles(initialWidth, initialHeight);
    initPortalItems();

    portalAxisXRef.current = initialWidth / 2;
    portalAxisYRef.current = initialHeight / 2;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
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
