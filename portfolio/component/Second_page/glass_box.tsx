import React from 'react';

interface GlassmorphismBoxProps {
  item: string | null;
  color: string;
}

const GlassmorphismBox: React.FC<GlassmorphismBoxProps> = ({ item,color }) => {
  return (
    <div className={`m-4 bg-opacity-25 backdrop-blur-lg bg-[${color}] p-8 rounded-lg shadow-xl w-full h-full`}>
      <div className="text-gray-600">
        {item}
      </div>
      
    </div>
  );
};

export default GlassmorphismBox;
