'use client';
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { LoremIpsum } from "@/component/Second_page/test_text";
export default function App() {
  const { scrollYProgress } = useScroll();
  const [isBoxInRange, setIsBoxInRange] = useState(false);

  useEffect(() => {
    // Update the state when scrollYProgress changes
    const handleScroll = () => {
      const newIsBoxInRange = scrollYProgress.get() >= 0.2 && scrollYProgress.get() <= 0.8;
      setIsBoxInRange(newIsBoxInRange);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollYProgress]);

 // Calculate boxGlow based on the absolute value of scrollYProgress
 const boxGlow = Math.min(Math.max(Math.abs(scrollYProgress.get() - 0.5), 0), 1);


  return (
    <div className="h-screen grid grid-rows-3 gap-5 ml-5 mt-5">

              {/* <div className='row-start-2 row-end-2 col-start-3 col-end-3 '>
                  <img className="h-auto object-cover p-1 rounded-full ring-2 ring-gray-400 dark:ring-gray-300 m-2" src="./photo.jpeg" alt="Bordered avatar " />
              </div> */}

            

      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-[#39d87b] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    <div className="flex flex-col">
      <div className="grow mr-8 ml-4 mb-4 bg-opacity-25 bg-blur-lg backdrop-blur-lg bg-white bg-clip-padding backdrop-filter backdrop-saturate-150 p-4 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Glassmorphism Box</h1>
        <div className="text-gray-600">
          <LoremIpsum />
        </div>
      </div>

      <div className="flex flex-col">
      <motion.div
        animate={{ boxShadow: isBoxInRange ? `0 0 30px 10px rgba(255, 255, 0, ${boxGlow})` : 'none' }}
        className="grow mr-8 ml-4 mb-4 bg-opacity-25 bg-blur-lg backdrop-blur-lg bg-white bg-clip-padding backdrop-filter backdrop-saturate-150 p-4 rounded-lg shadow-lg"
      >
        <h1 className="text-2xl font-bold mb-4">Glassmorphism Box</h1>
        <div className="text-gray-600">
          <LoremIpsum />
        </div>
      </motion.div>
    </div>

      <div className="grow mr-8 ml-4 mb-4 bg-opacity-25 bg-blur-lg backdrop-blur-lg bg-white bg-clip-padding backdrop-filter backdrop-saturate-150 p-4 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Glassmorphism Box</h1>
        <div className="text-gray-600">
          <LoremIpsum />
        </div>
      </div>
    </div>

   



      





    </div>
   
  );
}

