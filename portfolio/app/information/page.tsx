'use client';
import { useState, useEffect } from "react";
import { motion, useScroll, Reorder } from "framer-motion";
import GlassmorphismBox from "@/component/Second_page/glass_box";

interface BoxItem {
  id: number;
  isBoxInRange: boolean;
  boxGlow: number;
}

export default function App() {
  const { scrollYProgress } = useScroll();

  const [items, setItems] = useState<BoxItem[]>([
    { id: 1, isBoxInRange: true, boxGlow: 0.7 },
    { id: 2, isBoxInRange: true, boxGlow: 0.7 },
    { id: 3, isBoxInRange: true, boxGlow: 0.7 },
    
  ]);


  

  return (
    <div className="h-screen grid grid-rows-3 gap-5 ml-5 mt-5 justify-center">
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-[#39d87b] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    {/* <div className="flex flex-col">
        <GlassmorphismBox isBoxInRange={true} boxGlow={0.7}/>
        <GlassmorphismBox isBoxInRange={true} boxGlow={0.7}/>
        <GlassmorphismBox isBoxInRange={true} boxGlow={0.7}/>
    </div> */}



      <Reorder.Group className="flex flex-col max-w-lg my-5 gap-y-8" values={items} onReorder={setItems}>


      {items.map(
        item => (
        <Reorder.Item key={item.id} value={item}>
          <GlassmorphismBox
                key={item.id}
                isBoxInRange={true}
                boxGlow={0.7}
              />
        </Reorder.Item>
      )
      )
      }


     </Reorder.Group>

    </div>
   
  );
}

