// Import necessary dependencies
'use client'
import React, { ReactNode } from 'react';
import DoubleLinkedList from "@/component/two_pointers/Boxes";

// Initial items for the DoubleLinkedList
const initialItems = [
  "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", 
  "#00FFFF", "#800000", "#008000", "#000080", "#808000", 
  "#800080", "#008080", "#A52A2A", "#FFA500", "#ADD8E6", 
  "#20B2AA", "#8A2BE2", "#FA8072", "#2E8B57", "#696969"
];

// Define the Layout component
const Layout: React.FC<{ children?: ReactNode }> = ({ children }) => {
  // Callback function to handle visible items change
  const handleVisibleItemsChange = (visibleItems: string[]) => {
    console.log('Visible Items:', visibleItems);
  };

  return (
    <div className="h-screen grid grid-rows-6 justify-center items-center">
      {/* Top section */}
      <div className="flex row-span-5 col-span-5 m-2 text-white justify-center">
        {/* Render children content or default paragraph */}
        {children || <p>This is the default paragraph content.</p>}
      </div>

      {/* Bottom section */}
      <div className="row-start-6 col-span-5 justify-center mb-2">
        <div className="flex flex-row max-w-screen h-1/2 gap-x-8 p-2 bg-opacity-25 backdrop-blur-lg items-end justify-center">
          {/* DoubleLinkedList component */}
          <DoubleLinkedList items={initialItems} visibleItemCount={5} onVisibleItemsChange={handleVisibleItemsChange} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
