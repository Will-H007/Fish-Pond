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

      <div className="col-start-1 col-end-4 row-start-1 row-end-3 m-2 justify-items-center items-end h-full w-full">
        {/* <GlassmorphismBox color={visibleItems[Math.floor(visibleItems.length / 2)]} item={"Glassmorphism"}/> */}
        <div
              style={{
                margin: '4px',
                backdropFilter: 'blur(8px)',
                padding: '32px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                backgroundColor: visibleItems[Math.floor(visibleItems.length / 2)],
              }}
            >
                <div className="max-w-sm rounded overflow-hidden shadow-lg justify-center">
                <img className="w-28 border border-transparent rounded-full" src="/photo.jpeg"/>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-center">
                    William Ho
                    </div>
                  <p className="text-gray-700 text-base text-left">
                    I am a Software engineering student
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
              </div>
            </div>
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
