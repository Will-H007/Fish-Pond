'use client';
import { motion } from "framer-motion";
export default function Home() {

  return (
   
          <div className="h-screen grid grid-rows-3 gap-5 ml-5 mt-5">
             <div className="row-start-2 row-end-2 col-start-2 col-end-2 flex flex-wrap items-end justify-center ">
             <motion.button
                className="bg-violet-300 w-40 h-40 border-4 rounded-lg border-white flex items-center justify-center"
             
                whileHover={{ scale: [null, 1.5, 1.4] }}
                transition={{ duration: 0.2 }}
                whileTap={{ scale: 0.9 }}
                whileInView={{ opacity: 1 }}

              >
              <h1 className="text-[#2e4374] font-mono font-bold text-3xl">Start</h1>
              </motion.button>
              
              
           

              </div>
            

     
              <div className='row-start-2 row-end-2 col-start-3 col-end-3 '>
                  <img className="h-auto max-w-sm p-1 rounded-full ring-2 ring-gray-400 dark:ring-gray-300 m-2" src="./photo.jpeg" alt="Bordered avatar " />
              </div>

            

          </div>

  );
}
