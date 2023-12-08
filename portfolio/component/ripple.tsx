import { motion } from 'framer-motion';
import React from 'react';

// ... (other imports)

interface RippleProps {
    size: number;
    animationDuration?: number;
    animationEase?: string;
    initialDelay?: number;
    position?: { top: number; left: number };
  }
  
  const Ripple: React.FC<RippleProps> = ({
    size = 30,
    animationDuration = 3,
    animationEase = 'easeInOut',
    initialDelay = 0,
    position = { top: 0, left: 0 },
  }) => {
    return (
      <motion.div
        style={{
            height: `${size}em`,
        width: `${size}em`,
          position: 'absolute',
          top: `calc(${position.top}% - ${size / 2}em)`, // Adjusted for size
          left: `calc(${position.left}% - ${size / 2}em)`, // Adjusted for size
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.4)',
          zIndex: -1,
        }}
        initial={{ opacity: 1, scale: 0 }}
        animate={{
          opacity: 0,
          scale: 2,
          transition: { duration: animationDuration, ease: animationEase, delay: initialDelay },
        }}
      />
    );
  };
  
  // ... (other code)
export default Ripple  