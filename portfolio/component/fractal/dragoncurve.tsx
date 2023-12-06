import React from 'react';
import Fractal from '@/component/fractal/fractal';

interface DragonCurveProps {
  level: number;
  x: number;
  y: number;
  size: number;
}
interface FractalPoint {
    type: 'line' | 'quadratic';
    x: number;
    y: number;
    controlX?: number;
    controlY?: number;
  }
  
const DragonCurve: React.FC<DragonCurveProps> = ({ level, x, y, size }) => {
  const generateDragonCurve = (
    level: number,
    x: number,
    y: number,
    size: number,
    direction: 'right' | 'left' = 'right'
  ): FractalPoint[] => {
    if (level === 0) {
      return [{ type: 'line', x, y }];
    }

    const newSize = size / Math.sqrt(2);

    const points: FractalPoint[] = [];

    if (direction === 'right') {
      points.push({ type: 'line', x, y });
      points.push(...generateDragonCurve(level - 1, x + newSize * Math.cos(Math.PI / 4), y + newSize * Math.sin(Math.PI / 4), newSize, 'right'));
      points.push({ type: 'line', x: x + size * Math.cos(Math.PI / 4), y: y + size * Math.sin(Math.PI / 4) });
      points.push(...generateDragonCurve(level - 1, x + size, y, newSize, 'left'));
    } else {
      points.push({ type: 'line', x, y });
      points.push(...generateDragonCurve(level - 1, x - newSize * Math.cos(Math.PI / 4), y - newSize * Math.sin(Math.PI / 4), newSize, 'right'));
      points.push({ type: 'line', x: x - size * Math.cos(Math.PI / 4), y: y - size * Math.sin(Math.PI / 4) });
      points.push(...generateDragonCurve(level - 1, x - size, y, newSize, 'left'));
    }

    return points;
  };

  const generateFractal = () => generateDragonCurve(level, x, y, size);

  return <Fractal degree={1} area={size} generateFractal={generateFractal} />;
};

export default DragonCurve;
