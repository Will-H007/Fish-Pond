import React from 'react';

interface GlassmorphismBoxProps {
  item: string | null;
}

const GlassmorphismBox: React.FC<GlassmorphismBoxProps> = ({ item }) => {
  return (
    <div className="m-4 bg-opacity-25 backdrop-blur-lg bg-white p-4 rounded-lg shadow-lg w-full h-full">
      <h1 className="text-2xl font-bold mb-4 shrink">GlassMorphism box</h1>
      <div className="text-gray-600">
        {item}
      </div>
    </div>
  );
};

export default GlassmorphismBox;
