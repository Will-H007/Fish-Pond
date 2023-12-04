// Import necessary dependencies
'use client'
import React, { useState } from 'react';
import DoubleLinkedList from "@/component/two_pointers/Boxes";
import GlassmorphismBox from '@/component/Second_page/glass_box';

// Initial items for the DoubleLinkedList
const initialItems = [
  "#5f6497",
  "#ADA87C",
  "#7CAD90",
  "#907CAD",
  "#7C9AAD",
];




const DoubleLinkedListLayout: React.FC = () => {
  
  // State to store visible items
  const [visibleItems, setVisibleItems] = useState<string[]>([]);

  // Callback function to handle visible items change
  const handleVisibleItemsChange = (items: string[]) => {
    console.log('Visible Items:', items);
    // Update the state with the new visible items
    setVisibleItems(items);
  };

  return (
    <div className="h-screen flex flex-row gap-x-8 w-max-xl grid grid-rows-6 grid-cols-10 mx-10 mt-10 justify-center items-center">
      <div className="col-start-1 col-end-8 row-start-1 row-end-6 m-2 justify-items-center items-end h-full w-full">
      <GlassmorphismBox color={visibleItems[Math.floor(visibleItems.length / 2)]} item={"Glassmorphism"}/>
      </div>

      <div className="col-start-8 col-end-11 row-start-1 row-end-6 m-2 justify-items-center items-end h-full w-full">
      <GlassmorphismBox color={visibleItems[Math.floor(visibleItems.length / 2)]} item={"Glassmorphism"}/>

      </div>
 

      
      <div className="row-start-6 h-1/2 col-span-full justify-center items-center mb-2">
        <div className="flex flex-row gap-x-8 p-2 bg-opacity-25 backdrop-blur-lg justify-center items-center">
          {/* DoubleLinkedList component */}
          <DoubleLinkedList items={initialItems} visibleItemCount={1} onVisibleItemsChange={handleVisibleItemsChange} />
        </div>
      </div>
    </div>
  );
};

export default DoubleLinkedListLayout;
