'use client';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Eye from "@/component/front_page/eye";
import { useEffect } from "react";

export default function Home() {
  const side = 150;
  const center= 150;
  const pad = 10;


  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 7 });

    return animation.stop;
  }, []);



    const draw = {
      hidden: { pathLength: 0, opacity: 0 },
      visible: (delay: number) => {
        return {
          pathLength: 1.01,
          opacity: 1,
          transition: {
            pathLength: { delay, type: "spring", duration: 3, bounce: 0 },
            opacity: { delay, duration: 0 }
          }
        };
      }
    };


  

  return (
   

             <div className="h-screen flex flex-wrap items-center justify-center gap-x-4">
             
              <motion.svg
              width="300"
              height="300"
              viewBox="0 0 300 300"
              initial="hidden"
              animate="visible"
            >
              <Eye center_x={center-pad} center_y={center-pad} attribute = {"stroke-[10px]"} side={side} draw={draw}/>
              <Eye center_x={center-pad} center_y={center/3-pad} attribute = {"stroke-[10px]"} side={side} draw={draw} flipVertical={true}/>
             </motion.svg>


              <motion.button
                className="bg-white w-80 h-80 border-4 border-white rounded-full"
                whileTap={{ scale: 0.9 }}
                whileInView={{ opacity: 1 }}
              >
               <motion.h1 className="text-[#2e4374] font-mono font-bold text-7xl">{rounded}</motion.h1> 
              </motion.button>




              <motion.svg
              width="300"
              height="300"
              viewBox="0 0 300 300"
              initial="hidden"
              animate="visible"
            >
         <Eye center_x={pad} center_y={center - pad} attribute = {"stroke-[10px]"}side={side} draw={draw} flipHorizontal={true}/>
         <Eye center_x={pad} center_y={center/3 - pad} attribute = {"stroke-[10px]"}side={side} draw={draw} flipHorizontal={true} flipVertical={true}/>
              </motion.svg>

        
            
              </div>
              
            


        

  );
}
