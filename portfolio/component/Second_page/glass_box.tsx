// GlassmorphismBox.tsx
import React, { useState, ReactNode } from 'react';
import DoubleLinkedList from '../two_pointers/Boxes';
import NavBar from './navbar';

interface GlassmorphismBoxProps {
  children?: ReactNode;
  showDoubleLinkedList?: boolean;
}

const GlassmorphismBox: React.FC<GlassmorphismBoxProps> = ({ children, showDoubleLinkedList }) => {
  const initialItems = [
    "#5f6497",
    "#ADA87C",
    "#7CAD90",
    "#7C9AAD",
  ];
  
  // State to store visible items
  const [visibleItems, setVisibleItems] = useState<string[]>([]);

  // State to store the selected tab
  const [selectedTab, setSelectedTab] = useState<string | null>('#5f6497');

  // Callback function to handle visible items change
  const handleVisibleItemsChange = (items: string[]) => {
    setVisibleItems(items);
  };

  return (
    <div
      className={`w-full h-full`}

      style={{
        margin: '4px',
        backdropFilter: 'blur(8px)',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        display:"flex",
        flexDirection: "column",
        justifyContent:"start"
      }}
    >
      <NavBar onTabClick={(tabId) => setSelectedTab(tabId)} />

      <div className='h-full' style={{
        backgroundColor: selectedTab!,
      }}>
        {/* Conditionally render children based on the selected tab */}
        {selectedTab === '#5f6497' && children}
        {selectedTab === '#ADA87C' && children}
        {selectedTab === '#7CAD90' && children}
        {selectedTab === '#7C9AAD' && children}
      </div>

      {showDoubleLinkedList && (
        <div className="flex flex-row gap-x-8 p-2 bg-opacity-25 backdrop-blur-lg justify-center items-center">
          <DoubleLinkedList items={initialItems} visibleItemCount={1} onVisibleItemsChange={handleVisibleItemsChange} />
        </div>
      )}
    </div>
  );
};


export default GlassmorphismBox;