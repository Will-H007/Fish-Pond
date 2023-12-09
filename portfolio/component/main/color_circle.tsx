import React from 'react';

interface ColorCircleProps {
  color: string;
  size?: number;
  isCenter?: boolean; // Added a new prop to indicate if it's the center circle
}

const ColorCircle: React.FC<ColorCircleProps> = ({ color, size = 20, isCenter = false }) => {
  const circleStyle: React.CSSProperties = {
    width: size,
    height: size,
    borderRadius: '50%',
    backgroundColor: color,
    flexShrink: 0,
    border: isCenter ? '2px solid white' : 'none', // Add a white border for the center circle
  };

  return <div style={circleStyle}></div>;
};

export default ColorCircle;
