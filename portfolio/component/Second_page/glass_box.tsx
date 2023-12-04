'use client'
import React, { useState, ReactNode } from 'react';
import DoubleLinkedList from '../two_pointers/Boxes';
interface GlassmorphismBoxProps {
  children?: ReactNode; // Add this line to include children
}

const GlassmorphismBox: React.FC<GlassmorphismBoxProps> = ({children }) => {
  const initialItems = [
    "#ADA87C",
    "#7CAD90",
    "#907CAD",
    "#7C9AAD",
  ];
    // State to store visible items
    const [visibleItems, setVisibleItems] = useState<string[]>([]);

    // Callback function to handle visible items change
    const handleVisibleItemsChange = (items: string[]) => {
      console.log('Visible Items:', items);
      // Update the state with the new visible items
      setVisibleItems(items);
    };
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
      {<div className="flex flex-row gap-x-8 p-2 bg-opacity-25 backdrop-blur-lg justify-center items-center">
          <DoubleLinkedList items={initialItems} visibleItemCount={1} onVisibleItemsChange={handleVisibleItemsChange} />
        </div>}
    </div>
  );
};

export default GlassmorphismBox;
