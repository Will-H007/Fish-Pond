
'use client';
import React, { useState } from 'react';
import DoubleLinkedList from "@/component/two_pointers/Boxes";
import GlassmorphismBox from '@/component/Second_page/glass_box';
import Card from '@/component/Second_page/card';
import Example from '@/component/graphs/example';

const initialItems = [
  "#5f6497",
  "#ADA87C",
  "#7CAD90",

  "#7C9AAD",
];

const DoubleLinkedListLayout: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<string[]>([]);

  // Callback function to handle visible items change
  const handleVisibleItemsChange = (items: string[]) => {
    console.log('Visible Items:', items);
    // Update the state with the new visible items
    setVisibleItems(items);
  };
  return (
    <div className="h-screen flex flex-row gap-x-8 w-max-xl grid grid-rows-6 grid-cols-10 mx-10 mt-10 justify-center items-center">


<div className="col-start-1 col-end-3 row-start-1 row-end-6 m-2 justify-items-center items-end h-full w-full">

<Card/>

      </div>





      <div className="col-start-3 col-end-11 row-start-1 row-end-6 m-2 justify-items-center items-end h-full w-full">
      {/* <GlassmorphismBox showDoubleLinkedList={true} children={<Example/>}/> */}
      <GlassmorphismBox showDoubleLinkedList={false} children={<Example/>}/>
      </div>

      
 

      
       {/* <div className="flex row-start-6 h-1/4 col-span-full justify-center items-center mb-2">
        <div className="flex flex-row gap-x-8 p-2 bg-opacity-25 backdrop-blur-lg justify-center items-center">

          <DoubleLinkedList items={initialItems} visibleItemCount={1} onVisibleItemsChange={handleVisibleItemsChange} />
        </div>
      </div> */}
      
    </div>
  );
};

export default DoubleLinkedListLayout;
