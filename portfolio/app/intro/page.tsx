'use client';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Eye from "@/component/front_page/eye";
import { useEffect } from "react";

export default function Home() {
  const side = 150;
  const center = 300;
  const gap = side + 30;
  const duration = 2;



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
            pathLength: { delay, type: "spring", duration: duration, bounce: 0 },
            opacity: { delay, duration: 0.01 }
          }
        };
      }
    };


  

  return (
   

             <div className="h-screen flex flex-wrap items-center justify-center">
             
              <motion.button
                className="bg-white w-80 h-80 border-4 border-white rounded-full"
                whileTap={{ scale: 0.9 }}
                whileInView={{ opacity: 1 }}
              >
               <motion.h1 className="text-[#2e4374] font-mono font-bold text-7xl">{rounded}</motion.h1> 
              </motion.button>

              

              <motion.svg
              width="600"
              height="600"
              viewBox="0 0 600 600"
              initial="hidden"
              animate="visible"
            >


        <Eye center_x={center} center_y={center} side={side} draw={draw} flipHorizontal={true}/>
        <Eye center_x={center-gap} center_y={center} side={side} draw={draw}/>
        


                    
          
              
              
       


              




              </motion.svg>

        
            
              </div>
              
            


        

  );
}
