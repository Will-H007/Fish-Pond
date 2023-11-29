import React from 'react';
import { motion } from 'framer-motion';
import { LoremIpsum } from '@/component/Second_page/test_text';

interface GlassmorphismBoxProps {
  isBoxInRange: boolean;
  boxGlow: number;
}

const GlassmorphismBox: React.FC<GlassmorphismBoxProps> = ({ isBoxInRange, boxGlow }) => {
  return (
    <div className="flex flex-col ">
      <motion.div
        animate={{
          boxShadow: isBoxInRange ? `0 0 30px 10px rgba(255, 255, 0, ${boxGlow})` : 'none',
        }}
        className="grow mr-8 ml-4 bg-opacity-25 bg-blur-lg backdrop-blur-lg bg-white bg-clip-padding backdrop-filter backdrop-saturate-150 p-4 rounded-lg shadow-lg"
      >
        <h1 className="text-2xl font-bold mb-4">Glassmorphism Box</h1>
        <div className="text-gray-600">
          <LoremIpsum />
        </div>
      </motion.div>
    </div>
  );
};

export default GlassmorphismBox;
