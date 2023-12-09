import React from 'react';
import { motion } from 'framer-motion';

interface FractalPoint {
  type: 'line' | 'quadratic';
  x: number;
  y: number;
  controlX?: number;
  controlY?: number;
}

interface FractalProps {
  degree: number;
  area?: number;
  startingPoint?: { x: number; y: number }; // Make startingPoint an optional parameter
  generateFractal?: (
    level: number,
    x: number,
    y: number,
    size: number
  ) => FractalPoint[];
}

const Fractal: React.FC<FractalProps> = ({ degree, area=500 , startingPoint = { x: 0, y: 0 }, generateFractal }) => {

  const defaultGenerateFractal = (
    level: number,
    x: number,
    y: number,
    size: number
  ): FractalPoint[] => {
    if (level === 0) {
      return [{ type: 'line', x, y }];
    }

    const newSize = size / 2;

    const top: FractalPoint[] = defaultGenerateFractal(
      level - 1,
      x,
      y,
      newSize
    );
    const right: FractalPoint[] = defaultGenerateFractal(
      level - 1,
      x + newSize,
      y,
      newSize
    );
    const bottom: FractalPoint[] = defaultGenerateFractal(
      level - 1,
      x + newSize,
      y + newSize,
      newSize
    );
    const left: FractalPoint[] = defaultGenerateFractal(
      level - 1,
      x,
      y + newSize,
      newSize
    );

    const controlX = x + newSize / 2;
    const controlY = y + newSize / 2;

    return [
      ...top,
      { type: 'quadratic', x: right[0].x, y: right[0].y, controlX, controlY },
      ...right,
      { type: 'quadratic', x: left[0].x, y: left[0].y, controlX, controlY },
      ...left,
      { type: 'quadratic', x: bottom[0].x, y: bottom[0].y, controlX, controlY },
      ...bottom,
    ];
  };

  const fractalPoints = generateFractal
    ? generateFractal(degree, startingPoint.x, startingPoint.y, area)
    : defaultGenerateFractal(degree, startingPoint.x, startingPoint.y, area);

  const getPathData = () => {
    if (fractalPoints.length < 2) {
      return ''; // Need at least 2 points to create a path
    }

    // Move to the first point
    let pathData = `M ${fractalPoints[0].x},${fractalPoints[0].y}`;

    for (let i = 1; i < fractalPoints.length; i++) {
      const { x, y, type, controlX, controlY } = fractalPoints[i];

      if (type === 'line') {
        // Draw a straight line to the current point
        pathData += ` L ${x},${y}`;
      } else if (type === 'quadratic') {
        // Use quadratic Bezier curve to the current point
        pathData += ` Q ${controlX},${controlY} ${x},${y}`;
      }
    }

    return pathData;
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
      }}
    >
      <svg width="100%" height="100%" viewBox={`0 0 ${area*1.2} ${area*1.2}`} preserveAspectRatio="xMidYMid meet">
        <motion.path
          style={{
            stroke: 'white',
            strokeLinecap: 'round',
            fill: 'transparent',
          }}
          d={getPathData()}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1.1 }}
          transition={{
            type: 'tween',
            ease: 'easeInOut',
            duration: Math.sqrt(fractalPoints.length/4),
          }}
        />
      </svg>
    </div>
  );
};

export default Fractal;
