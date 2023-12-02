// Import necessary dependencies
'use client'
import React from 'react';
import DoubleLinkedList from "@/component/two_pointers/Boxes";
import GlassmorphismBox from '@/component/Second_page/glass_box';

// Initial items for the DoubleLinkedList
const initialItems = [
  "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", 
  "#00FFFF", "#800000", "#008000", "#000080", "#808000", 
  "#800080", "#008080", "#A52A2A", "#FFA500", "#ADD8E6", 
  "#20B2AA", "#8A2BE2", "#FA8072", "#2E8B57", "#696969"
];

// Define the DoubleLinkedListLayout component
const DoubleLinkedListLayout: React.FC = () => {
  // Callback function to handle visible items change
  const handleVisibleItemsChange = (visibleItems: string[]) => {
    console.log('Visible Items:', visibleItems);
  };

  return (
    <div className="h-screen w-max-xl grid grid-rows-4 grid-cols-10 m-8 justify-center items-center">
      <div className="col-start-2 col-end-10 row-start-2 row-end-4 m-2 justify-center items-center h-full w-full">
          <GlassmorphismBox item={"asdasd"}/>
      </div>
    

      <div className="row-start-4 col-span-10 justify-center items-center mb-2">
        <div className="flex flex-row h-1/2 gap-x-8 p-2 bg-opacity-25 backdrop-blur-lg justify-center items-center">
          {/* DoubleLinkedList component */}
          <DoubleLinkedList items={initialItems} visibleItemCount={5} onVisibleItemsChange={handleVisibleItemsChange} />
        </div>
      </div>
    </div>
  );
};

export default DoubleLinkedListLayout;
