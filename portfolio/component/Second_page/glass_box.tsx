import React from 'react';

interface GlassmorphismBoxProps {
  item: string | null;
  color: string;
}

const GlassmorphismBox: React.FC<GlassmorphismBoxProps> = ({ item, color }) => {
  return (
    <div
    className='flex justify-center'
      style={{
        margin: '4px',
        backdropFilter: 'blur(8px)',
        padding: '32px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '100%',
        height: '100%',
        backgroundColor: color,
      }}
    >
        <div className="max-w-sm rounded overflow-hidden shadow-lg justify-center">
        <img className="w-28 border rounded-full border-white border-2 object-contain h-20 w-20" src="/photo.jpeg"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">
            William Ho
            </div>
          <p className="text-gray-700 text-base">
            m nihil..
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
      </div>
    </div>
  );
};

export default GlassmorphismBox;
