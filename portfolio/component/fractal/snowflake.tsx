import React from 'react';
import Fractal from '@/component/fractal/fractal';

interface KochSnowflakeProps {
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
  
const KochSnowflake: React.FC<KochSnowflakeProps> = ({ level, x, y, size }) => {
  const generateKochSnowflake = (
    level: number,
    x: number,
    y: number,
    size: number
  ): FractalPoint[] => {
    if (level === 0) {
      return [{ type: 'line', x, y }];
    }

    const newSize = size / 3;

    const p1: FractalPoint = { type: 'line', x, y };
    const p2: FractalPoint = { type: 'line', x: x + newSize, y };
    const p3: FractalPoint = { type: 'line', x: x + newSize * 1.5, y: y - newSize * Math.sqrt(3) / 2 };
    const p4: FractalPoint = { type: 'line', x: x + newSize * 2, y };
    const p5: FractalPoint = { type: 'line', x: x + size, y };
    
    const points: FractalPoint[] = [p1, p2, p3, p4, p5];

    return [
      ...generateKochSnowflake(level - 1, p1.x, p1.y, newSize),
      ...generateKochSnowflake(level - 1, p2.x, p2.y, newSize),
      ...generateKochSnowflake(level - 1, p3.x, p3.y, newSize),
      ...generateKochSnowflake(level - 1, p4.x, p4.y, newSize),
      ...generateKochSnowflake(level - 1, p5.x, p5.y, newSize),
    ];
  };

  const generateFractal = () => generateKochSnowflake(level, x, y, size);

  return <Fractal degree={1} area={size} generateFractal={generateFractal} />;
};

export default KochSnowflake;
