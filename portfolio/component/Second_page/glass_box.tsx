'use client'
import React, { useState, ReactNode } from 'react';
import DoubleLinkedList from '../two_pointers/Boxes';
import NavBar from '../navbar';

interface GlassmorphismBoxProps {
  children?: ReactNode;
  showDoubleLinkedList?: boolean;
  nav?: ReactNode;
}

const GlassmorphismBox: React.FC<GlassmorphismBoxProps> = ({ nav, children, showDoubleLinkedList }) => {
  const initialItems = [
    "#907CAD",
    "#ADA87C",
    "#7CAD90",

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
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: "#5f6497",
        display:"flex",
        flexDirection: "column",
        justifyContent:"start"
        
      }}
    >

      <nav className='h-14'>
        <ul className='flex flex-row h-full'>
          <li className='flex w-full justify-center items-center bg-[#5f6497] rounded-tl-lg'>
          #5f6497
          </li>
          <li className='flex w-full justify-center items-center bg-[#ADA87C]'>
          #ADA87C
          </li>
          <li className='flex w-full justify-center items-center bg-[#7CAD90]'>
          #7CAD90
          </li>
          <li className='flex w-full justify-center items-center bg-[#7C9AAD] rounded-tr-lg'>
          "7C9AAD"
          </li>
        </ul>
      </nav>


      {/* <div className='h-full'>
      {children}
      </div> */}
      {showDoubleLinkedList && (
        <div className="flex flex-row gap-x-8 p-2 bg-opacity-25 backdrop-blur-lg justify-center items-center">
          <DoubleLinkedList items={initialItems} visibleItemCount={1} onVisibleItemsChange={handleVisibleItemsChange} />
        </div>
      )}
    </div>
  );
};

export default GlassmorphismBox;
