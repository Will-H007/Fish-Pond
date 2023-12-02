// Import necessary dependencies
'use client'
import React, { useState } from 'react';
import DoubleLinkedList from "@/component/two_pointers/Boxes";
import GlassmorphismBox from '@/component/Second_page/glass_box';

// Initial items for the DoubleLinkedList
const initialItems = [
  "#7C81AD",

  "#AD7C9A",
  
  "#ADA87C",
  
  "#7CAD90"
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
    <div className="h-screen flex gap-x-8 w-max-xl grid grid-rows-7 grid-cols-11 m-10 justify-center items-center">

      <div className="flex flex-wrap col-start-7 col-end-12 row-start-1 row-end-7 m-2 justify-center items-end h-full w-full">
      <div className={`m-4 bg-opacity-25 backdrop-blur-lg p-8 rounded-lg shadow-xl w-full h-full`} style={{ backgroundColor: visibleItems[Math.floor(visibleItems.length / 2)] }}>
      <div className="text-gray-600">
        Glassmorphism
      </div>
    </div>

      </div>






      <div className="row-start-7 h-1/2 col-span-full justify-center items-center mb-2">
        <div className="flex flex-row gap-x-8 p-2 bg-opacity-25 backdrop-blur-lg justify-center items-center">
          {/* DoubleLinkedList component */}
          <DoubleLinkedList items={initialItems} visibleItemCount={1} onVisibleItemsChange={handleVisibleItemsChange} />
        </div>
      </div>
    </div>
  );
};

export default DoubleLinkedListLayout;
