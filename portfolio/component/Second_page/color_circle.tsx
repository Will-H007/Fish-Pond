import React from 'react';

interface ColorCircleProps {
  color: string;
  size?: number;
}

const ColorCircle: React.FC<ColorCircleProps> = ({ color, size = 20 }) => {
  const circleStyle: React.CSSProperties = {
    width: size,
    height: size,
    borderRadius: '50%',
    backgroundColor: color,
    flexShrink:0
  };

  return <div style={circleStyle}></div>;
};

export default ColorCircle;
