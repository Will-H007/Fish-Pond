import React from 'react';
import Fractal from '@/component/fractal/fractal';

interface FractalPoint {
  type: 'line' | 'quadratic';
  x: number;
  y: number;
  controlX?: number;
  controlY?: number;
}

interface ArrowFractalProps {
  level: number;
  x: number;
  y: number;
  size?: number;
}

const ArrowFractal: React.FC<ArrowFractalProps> = ({ level, x, y, size=500 }) => {
  const generateArrowFractal = (
    level: number,
    x: number,
    y: number,
    size: number
  ): FractalPoint[] => {
    if (level === 0) {
      return [{ type: 'line', x, y }];
    }

    const newSize = size / 2;

    const top: FractalPoint[] = generateArrowFractal(level - 1, x, y, newSize);
    const right: FractalPoint[] = generateArrowFractal(level - 1, x + newSize, y, newSize);
    const bottom: FractalPoint[] = generateArrowFractal(level - 1, x + newSize, y + newSize, newSize);
    const left: FractalPoint[] = generateArrowFractal(level - 1, x, y + newSize, newSize);

    const controlX = x + newSize / 2;
    const controlY = y + newSize / 2;

    return [
      ...bottom,
      { type: 'quadratic', x: right[0].x, y: right[0].y, controlX, controlY },
      ...right,
      { type: 'quadratic', x: left[0].x, y: left[0].y, controlX, controlY },
      ...left,
      { type: 'quadratic', x: bottom[0].x, y: bottom[0].y, controlX, controlY },
      ...top,
    ];
  };

  return <Fractal degree={1} generateFractal={() => generateArrowFractal(level, x, y, size)} />;
};

export default ArrowFractal;
