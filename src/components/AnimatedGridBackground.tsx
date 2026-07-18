import { useEffect, useRef, useState } from 'react';

interface GridPoint {
  id: string;
  direction: 'horizontal' | 'vertical';
  speed: number;
  progress: number;
  gridLineIndex: number;
}

interface AnimatedGridBackgroundProps {
  className?: string;
}

const GRID_SIZE = 50;
const MIN_SPEED = 0.001;
const MAX_SPEED = 0.003;

// Compute a point's current position from its progress
function pointPosition(point: GridPoint, width: number, height: number) {
  if (point.direction === 'horizontal') {
    return { x: point.progress * width, y: point.gridLineIndex * GRID_SIZE };
  }
  return { x: point.gridLineIndex * GRID_SIZE, y: point.progress * height };
}

export function AnimatedGridBackground({ className = "" }: AnimatedGridBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [points, setPoints] = useState<GridPoint[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Mutable copies used by the animation loop (never trigger React renders)
  const pointsRef = useRef<GridPoint[]>([]);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);
  const dimensionsRef = useRef(dimensions);
  dimensionsRef.current = dimensions;

  // Initialize points - use full viewport dimensions
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    // Use Math.floor to prevent overflow and ensure proper grid bounds
    const horizontalLines = Math.floor(dimensions.height / GRID_SIZE);
    const verticalLines = Math.floor(dimensions.width / GRID_SIZE);

    // Calculate point count based on screen size (1 point per 4-5 grid lines)
    const horizontalCount = Math.max(2, Math.floor(horizontalLines / 4));
    const verticalCount = Math.max(2, Math.floor(verticalLines / 4));

    const newPoints: GridPoint[] = [];

    // Create horizontal points distributed across ALL horizontal lines
    for (let i = 0; i < horizontalCount; i++) {
      newPoints.push({
        id: `h-${i}`,
        direction: 'horizontal',
        speed: MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED),
        progress: Math.random(),
        gridLineIndex: Math.floor(Math.random() * horizontalLines)
      });
    }

    // Create vertical points distributed across ALL vertical lines
    for (let i = 0; i < verticalCount; i++) {
      newPoints.push({
        id: `v-${i}`,
        direction: 'vertical',
        speed: MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED),
        progress: Math.random(),
        gridLineIndex: Math.floor(Math.random() * verticalLines)
      });
    }

    pointsRef.current = newPoints;
    nodesRef.current = [];
    setPoints(newPoints);
  }, [dimensions]);

  // Animation loop: mutates the dot elements directly (transform/opacity only,
  // both compositor-friendly) instead of setState per frame. The previous
  // implementation re-rendered the whole component through React on every
  // animation frame — with three instances on the homepage that dominated
  // main-thread "Script Evaluation" and "Style & Layout" time. The loop is
  // also paused entirely while the container is outside the viewport.
  useEffect(() => {
    if (points.length === 0 || !containerRef.current) return;

    let rafId: number | null = null;

    const step = () => {
      const { width, height } = dimensionsRef.current;
      const pts = pointsRef.current;
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.progress += p.speed;
        if (p.progress >= 1) p.progress = 0;

        const node = nodesRef.current[i];
        if (node) {
          const { x, y } = pointPosition(p, width, height);
          node.style.transform = `translate(${x}px, ${y}px)`;
          node.style.opacity = String(Math.sin(p.progress * Math.PI) * 0.6 + 0.4);
        }
      }
      rafId = requestAnimationFrame(step);
    };

    const start = () => {
      if (rafId === null) rafId = requestAnimationFrame(step);
    };
    const stop = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    // Only animate while visible — offscreen instances cost nothing
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) start();
      else stop();
    });
    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      stop();
    };
  }, [points]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}
      style={{
        backgroundImage: `
          radial-gradient(at 20% 50%, hsl(var(--noreja-main) / 0.05) 0px, transparent 50%),
          radial-gradient(at 80% 20%, hsl(var(--noreja-secondary) / 0.05) 0px, transparent 50%),
          radial-gradient(at 40% 80%, hsl(var(--noreja-secondary) / 0.05) 0px, transparent 50%)
        `
      }}
    >
      {/* Grid Lines - Direct SVG approach */}
      <svg className="absolute inset-0 w-full h-full">
        {/* Draw grid lines directly */}
        {Array.from({ length: Math.ceil(dimensions.width / GRID_SIZE) }, (_, i) => (
          <line
            key={`v-${i}`}
            x1={i * GRID_SIZE}
            y1={0}
            x2={i * GRID_SIZE}
            y2="200vh"
            stroke="#452BE9"
            strokeWidth="0.3"
            strokeOpacity="0.8"
          />
        ))}
        {Array.from({ length: Math.ceil(2000 / GRID_SIZE) }, (_, i) => (
          <line
            key={`h-${i}`}
            x1={0}
            y1={i * GRID_SIZE}
            x2={dimensions.width}
            y2={i * GRID_SIZE}
            stroke="#452BE9"
            strokeWidth="0.3"
            strokeOpacity="0.8"
          />
        ))}
      </svg>

      {/* Animated Points (positions/opacity are driven imperatively per frame) */}
      <div className="absolute inset-0">
        {points.map((point, i) => {
          const { x, y } = pointPosition(point, dimensions.width, dimensions.height);
          return (
            <div
              key={point.id}
              ref={(el) => { nodesRef.current[i] = el; }}
              className="absolute left-0 top-0 w-1 h-1 rounded-full"
              style={{
                transform: `translate(${x}px, ${y}px)`,
                backgroundColor: 'hsl(var(--noreja-secondary))',
                boxShadow: '0 0 6px hsl(var(--noreja-secondary) / 0.6), 0 0 12px hsl(var(--noreja-secondary) / 0.4)',
                opacity: Math.sin(point.progress * Math.PI) * 0.6 + 0.4
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
