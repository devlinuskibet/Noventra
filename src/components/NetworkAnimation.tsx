"use client";

import { useEffect, useRef } from "react";

interface VortexParticle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  baseRadius: number;
  color: { r: number; g: number; b: number };
  pX: number; // Computed projected X per frame
  pY: number; // Computed projected Y per frame
  drawScale: number;
  depth: number;
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

// Utility to draw rounded rectangles on canvas
function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) {
  if (width < 2 * radius) radius = width / 2;
  if (height < 2 * radius) radius = height / 2;
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
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

    // Initialize 75 larger nodes drifting in 3D box space
    const initVortexParticles = (w: number, h: number) => {
      const count = 75;
      const newParticles: VortexParticle[] = [];
      const colors = [
        { r: 59, g: 130, b: 246 },  // Blue
        { r: 99, g: 102, b: 241 },  // Indigo
        { r: 6, g: 182, b: 212 },   // Cyan
      ];

      for (let i = 0; i < count; i++) {
        newParticles.push({
          x: (Math.random() - 0.5) * w * 1.2,
          y: (Math.random() - 0.5) * h * 1.2,
          z: (Math.random() - 0.5) * 500,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          vz: (Math.random() - 0.5) * 0.20,
          baseRadius: 1.6 + Math.random() * 1.6, // Bigger, bolder dots
          color: colors[i % colors.length],
          pX: 0,
          pY: 0,
          drawScale: 1,
          depth: 0,
        });
      }
      particlesRef.current = newParticles;
    };

    // Initialize 5 portal items
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
          z: 150 + i * 90 + Math.random() * 30,
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

      // Interpolate mouse coordinates
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      // Expand portal intensity on hover
      const targetPortalIntensity = mouseRef.current.active ? 1.0 : 0.0;
      portalIntensityRef.current += (targetPortalIntensity - portalIntensityRef.current) * 0.07;

      // Portal axis curves towards cursor location
      const targetAxisX = mouseRef.current.active ? mouseRef.current.x : centerX;
      const targetAxisY = mouseRef.current.active ? mouseRef.current.y : centerY;
      portalAxisXRef.current += (targetAxisX - portalAxisXRef.current) * 0.06;
      portalAxisYRef.current += (targetAxisY - portalAxisYRef.current) * 0.06;

      // 3D camera rotation parallax targets
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

      const focalLength = Math.max(width, height) * 0.8;

      // 1. Update Neural Net particles (drift in 3D box, wrapping boundaries)
      const pList = particlesRef.current;
      const pLen = pList.length;
      
      const boxW = width * 1.25;
      const boxH = height * 1.25;
      const boxD = 500;

      for (let i = 0; i < pLen; i++) {
        const p = pList[i];
        
        // Organic drift + wave motion
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Wave turbulence
        p.x += Math.sin(time * 0.6 + p.z * 0.01) * 0.15;
        p.y += Math.cos(time * 0.5 + p.x * 0.01) * 0.15;
        p.z += Math.sin(time * 0.4 + p.y * 0.01) * 0.10;

        // Wrap around boundaries
        if (p.x > boxW / 2) p.x = -boxW / 2;
        else if (p.x < -boxW / 2) p.x = boxW / 2;

        if (p.y > boxH / 2) p.y = -boxH / 2;
        else if (p.y < -boxH / 2) p.y = boxH / 2;

        if (p.z > boxD / 2) p.z = -boxD / 2;
        else if (p.z < -boxD / 2) p.z = boxD / 2;

        // Rotate coordinates (tilt)
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.x * sinY + p.z * cosY;
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        // Perspective project
        const scale = focalLength / Math.max(30, focalLength + z2);
        let projX = centerX + x1 * scale;
        let projY = centerY + y2 * scale;

        // Portal warp: push neural network dots away from portal center
        if (portalIntensityRef.current > 0.05) {
          const dx = projX - mouseRef.current.x;
          const dy = projY - mouseRef.current.y;
          const dist2D = Math.sqrt(dx * dx + dy * dy);
          const repelRadius = 180 * portalIntensityRef.current;
          if (dist2D < repelRadius && dist2D > 0) {
            const force = (1 - dist2D / repelRadius) * 55;
            projX += (dx / dist2D) * force;
            projY += (dy / dist2D) * force;
          }
        }

        // Store computed values
        p.pX = projX;
        p.pY = projY;
        p.drawScale = scale;
        p.depth = z2;
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

      // Draw Wormhole Portal void circle behind cursor
      const currentPortalRadius = 170 * portalIntensityRef.current;
      if (currentPortalRadius > 5) {
        const portalGrad = ctx.createRadialGradient(
          mouseRef.current.x, mouseRef.current.y, 0,
          mouseRef.current.x, mouseRef.current.y, currentPortalRadius
        );
        portalGrad.addColorStop(0, "rgba(10, 15, 28, 0.95)"); // Dark glass void
        portalGrad.addColorStop(0.4, "rgba(15, 23, 42, 0.88)");
        portalGrad.addColorStop(0.7, "rgba(59, 130, 246, 0.18)"); // Indigo/blue border ring
        portalGrad.addColorStop(0.9, "rgba(139, 92, 246, 0.05)"); 
        portalGrad.addColorStop(1, "rgba(139, 92, 246, 0)");

        ctx.fillStyle = portalGrad;
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, currentPortalRadius, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.strokeStyle = `rgba(6, 182, 212, ${portalIntensityRef.current * 0.12})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, currentPortalRadius * 0.7, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw Neural Network connection lines
      // We draw them here so they lay under the nodes.
      // Opacity is properly visible and bold in the foreground.
      const max3DDist = 185;
      for (let i = 0; i < pLen; i++) {
        const p1 = pList[i];
        for (let j = i + 1; j < pLen; j++) {
          const p2 = pList[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dz = p1.z - p2.z;
          const dist3D = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist3D < max3DDist) {
            const avgDepth = (p1.depth + p2.depth) / 2;
            const depthFactor = Math.max(0.04, 1 - (avgDepth + 250) / 500); // 3D box depth factor
            const distFactor = 1 - dist3D / max3DDist;
            
            // Proper visible line opacity (raised multiplier to 0.38 for maximum clarity)
            const alpha = distFactor * 0.38 * depthFactor;

            if (alpha > 0.01) {
              const avgR = Math.round((p1.color.r + p2.color.r) / 2);
              const avgG = Math.round((p1.color.g + p2.color.g) / 2);
              const avgB = Math.round((p1.color.b + p2.color.b) / 2);

              ctx.beginPath();
              ctx.moveTo(p1.pX, p1.pY);
              ctx.lineTo(p2.pX, p2.pY);
              ctx.strokeStyle = `rgba(${avgR}, ${avgG}, ${avgB}, ${alpha})`;
              ctx.lineWidth = 0.6 * ((p1.drawScale + p2.drawScale) / 2);
              ctx.stroke();
            }
          }
        }
      }

      // Compile nodes and portal items to sort by depth (Painter's algorithm)
      interface Renderable {
        depth: number;
        render: () => void;
      }
      const renderables: Renderable[] = [];

      // Add stars/nodes render steps
      for (let i = 0; i < pLen; i++) {
        const p = pList[i];
        renderables.push({
          depth: p.depth,
          render: () => {
            const r = p.baseRadius * p.drawScale;
            const depthAlpha = Math.max(0.04, 1 - (p.depth + 250) / 500);
            const alpha = Math.max(0.08, 0.75 * p.drawScale) * depthAlpha;

            ctx.beginPath();
            ctx.arc(p.pX, p.pY, r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha})`;
            ctx.fill();

            // Bold glow circles around close-up neural nodes
            if (p.depth < 80) {
              ctx.beginPath();
              ctx.arc(p.pX, p.pY, r + 4, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha * 0.18})`;
              ctx.fill();
            }
          }
        });
      }

      // Add portal concept items render steps (emerge from center) wrapped in glass capsule badges
      for (let i = 0; i < iLen; i++) {
        const item = iList[i];
        
        // Emerge swirling from portal center
        const swirlRadius = item.radius + ((600 - item.z) / 600) * (width * 0.16);
        const x = Math.cos(item.angle) * swirlRadius;
        const y = Math.sin(item.angle) * swirlRadius;
        const z = item.z;

        // Parallax rotations
        const x1 = x * cosY - z * sinY;
        const z1 = x * sinY + z * cosY;
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
              // Scale size variables dynamically in 3D space
              const itemSize = Math.max(8, 14 * scale);
              const fontSize = Math.max(8, Math.round(11 * scale));

              // Use premium Inter / system sans-serif typography for maximum readability
              ctx.font = `bold ${fontSize}px Inter, system-ui, -apple-system, sans-serif`;
              ctx.textAlign = "left";
              ctx.textBaseline = "middle";

              const textWidth = ctx.measureText(item.text).width;

              // Capsule badge geometry and layout sizing
              const gap = 8 * scale;
              const padX = 14 * scale;
              const padY = 8 * scale;

              const cardW = itemSize + gap + textWidth + padX * 2;
              const cardH = Math.max(itemSize, fontSize) + padY * 2;

              const cardX = projX - cardW / 2;
              const cardY = projY - cardH / 2;

              // 1. Draw rounded capsule card container (solid dark void fills)
              ctx.fillStyle = `rgba(10, 15, 28, ${alpha * 0.96})`;
              roundRect(ctx, cardX, cardY, cardW, cardH, 6 * scale);
              ctx.fill();

              // Glowing thin borders based on the concept category colors
              ctx.strokeStyle = `rgba(${item.color.r}, ${item.color.g}, ${item.color.b}, ${alpha * 0.65})`;
              ctx.lineWidth = 1.2 * scale;
              ctx.stroke();

              // 2. Draw vector icon inside the card (on the left side)
              ctx.strokeStyle = `rgba(${item.color.r}, ${item.color.g}, ${item.color.b}, ${alpha})`;
              ctx.lineWidth = 1.5 * scale;
              ctx.shadowColor = `rgba(${item.color.r}, ${item.color.g}, ${item.color.b}, 0.45)`;
              ctx.shadowBlur = 8 * scale;
              
              const iconX = cardX + padX + itemSize / 2;
              drawIcon(ctx, iconX, projY, itemSize, item.iconType);
              
              ctx.shadowBlur = 0; // Reset canvas shadows

              // 3. Draw text label (on the right side)
              ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.98})`;
              ctx.fillText(item.text, cardX + padX + itemSize + gap, projY);
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
