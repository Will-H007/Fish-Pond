import React from 'react';
import { motion, Reorder ,useMotionValue} from 'framer-motion';
import { LoremIpsum } from '@/component/Second_page/test_text';

interface GlassmorphismBoxProps {
  isBoxInRange: boolean;
  boxGlow: number;
  item: string;
}

const GlassmorphismBox: React.FC<GlassmorphismBoxProps> = ({ isBoxInRange, boxGlow, item }) => {

  return (

  
          <motion.div
          key={item} 
          initial={{ opacity: 0.5, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.25,
        ease: [0.5, 0.7, 0.2, 1.01]
      }}
          className='mx-2 max-w-xl bg-opacity-25 backdrop-blur-lg bg-white p-4 rounded-lg shadow-lg'
        >
          <h1 className="text-2xl font-bold mb-4">Glassmorphism Box</h1>
          <div className="text-gray-600">
            {item}
          </div>
          <div className="text-gray-600">
            {item}
           
          </div>
          </motion.div>


  );
};

export default GlassmorphismBox;
