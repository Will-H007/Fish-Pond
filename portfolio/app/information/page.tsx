'use client';
import { useState, useRef } from "react";
import { motion, useScroll} from "framer-motion";
import GlassmorphismBox from "@/component/Second_page/glass_box";
import DoubleLinkedList from "@/component/two_pointers/Boxes";
const initialItems = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];
export default function App() {



  const [items, setItems] = useState(initialItems);
  const handleReorder = (newItems:any) => {
    setItems(newItems);
  };

  

  

  return (
    <div className="h-screen grid grid-rows-3 m-2 justify-center items-center">

    
     

            <div>
          <p className="text-white text-center my-1">Title</p>
          <div className="flex flex-row max-w-3xl h-1/2 gap-x-8 p-4 bg-opacity-25 backdrop-blur-lg items-end">

          <DoubleLinkedList items={initialItems} visibleItemCount={3} />

          </div>
          </div>
          <div className="flex flex-row max-w-3xl h-1/2 gap-x-8 p-4 bg-opacity-25 backdrop-blur-lg items-end">

          <DoubleLinkedList items={initialItems} visibleItemCount={3} />

          </div>
          <div className="flex flex-row max-w-3xl h-1/2 gap-x-8 p-4 bg-opacity-25 backdrop-blur-lg items-end">

          <DoubleLinkedList items={initialItems} visibleItemCount={3} />

          </div>
          


    </div>
   
  );
}

