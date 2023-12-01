import React from 'react';
import { motion, Reorder ,useMotionValue} from 'framer-motion';
import { LoremIpsum } from '@/component/Second_page/test_text';

interface GlassmorphismBoxProps {
  isBoxInRange: boolean;
  boxGlow: number;
  item: string;
}

const GlassmorphismBox: React.FC<GlassmorphismBoxProps> = ({ isBoxInRange, boxGlow, item }) => {
  const y = useMotionValue(0);
  return (

        <motion.div
          className="mx-2 max-w-xl bg-opacity-25 backdrop-blur-lg bg-white p-4 rounded-lg shadow-lg"
          animate={{
            boxShadow: isBoxInRange ? `0 0 30px 10px rgba(255, 255, 0, ${boxGlow})` : 'none',
          }}
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
