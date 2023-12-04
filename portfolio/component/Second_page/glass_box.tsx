'use client'
import React, { ReactNode } from 'react';

interface GlassmorphismBoxProps {
  item?: string | null;
  color?: string;
  children?: ReactNode; // Add this line to include children
}

const GlassmorphismBox: React.FC<GlassmorphismBoxProps> = ({ item, color, children }) => {
  return (
    <div
      className='w-full h-full'
      style={{
        margin: '4px',
        backdropFilter: 'blur(8px)',
        padding: '32px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: "#5f6497",
      }}
    >
      
      {children}
    </div>
  );
};

export default GlassmorphismBox;
