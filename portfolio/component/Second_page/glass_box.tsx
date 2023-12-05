// GlassmorphismBox.tsx
import React, { useState, ReactNode } from 'react';
import DoubleLinkedList from '../two_pointers/Boxes';
import NavBar from './navbar';
import Card from './card';
interface GlassmorphismBoxProps {
  experience?: ReactNode;
  skill?: ReactNode;
  hobbies?: ReactNode;
  projects?: ReactNode;
  showDoubleLinkedList?: boolean;
}

const GlassmorphismBox: React.FC<GlassmorphismBoxProps> = ({ experience,skill,hobbies,projects, showDoubleLinkedList }) => {
  const initialItems = [
    "#5f6497",
    "#ADA87C",
    "#7075a7",
    "#9197c6",
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
      style={{
        width: "100%",
        height:"100%",
        margin: '4px',
        backdropFilter: 'blur(8px)',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
       display:"flex",
       flexDirection:"row"
      }}
    >


  

      <div style={{
        height:"100%",
        width:"100%"
      }}>
              <NavBar onTabClick={(tabId) => setSelectedTab(tabId)} />
              <div style={{
                display:"flex",
                flexDirection: "column",
                justifyContent:"center",
                height:"100%"
              }}>

          

              <div style={{
                backgroundColor: selectedTab!,
                borderBottomLeftRadius: '8px',
                borderBottomRightRadius: '8px' ,
                height:"100%",
         
              }}>
  
                {selectedTab ===  '#7075a7' && experience}
                {selectedTab === '#5f6497' && skill}
                {selectedTab === '#9197c6' && hobbies}
              </div>

              {showDoubleLinkedList && (
                <div className="flex flex-row gap-x-8 p-2 bg-opacity-25 backdrop-blur-lg justify-center items-center">
                  <DoubleLinkedList items={initialItems} visibleItemCount={1} onVisibleItemsChange={handleVisibleItemsChange} />
                </div>
              )}
            </div>
            </div>
    </div>
  );
};


export default GlassmorphismBox;