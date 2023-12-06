import React from 'react';
import Fractal from '@/component/fractal/fractal';

interface FractalPoint {
  type: 'line' | 'quadratic';
  x: number;
  y: number;
  controlX?: number;
  controlY?: number;
}

interface SierpinskiTriangleProps {
  level: number;
  x: number;
  y: number;
  size: number;
}

const SierpinskiTriangle: React.FC<SierpinskiTriangleProps> = ({ level, x, y, size }) => {
  const generateSierpinskiTriangle = (
    level: number,
    x: number,
    y: number,
    size: number
  ): FractalPoint[] => {
    if (level === 0) {
      return [{ type: 'line', x, y }];
    }

    const newSize = size / 2;

    const top: FractalPoint[] = generateSierpinskiTriangle(level - 1, x, y, newSize);
    const right: FractalPoint[] = generateSierpinskiTriangle(level - 1, x + newSize, y, newSize);
    const left: FractalPoint[] = generateSierpinskiTriangle(level - 1, x - newSize, y, newSize);

    const controlX = x;
    const controlY = y + newSize / 2;

    return [
      ...top,
      { type: 'quadratic', x: right[0].x, y: right[0].y, controlX, controlY },
      ...right,
      { type: 'quadratic', x: left[0].x, y: left[0].y, controlX, controlY },
      ...left,
    ];
  };

  const generateFractal = () => generateSierpinskiTriangle(level, x, y, size);

  return <Fractal degree={1} area={size} generateFractal={generateFractal} />;
};

export default SierpinskiTriangle;
