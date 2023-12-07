import * as React from "react";
import { motion, Variants } from "framer-motion";

const variants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

interface MenuItemProps {
  i: number; // Assuming i is an index, change the type accordingly
}

export const MenuItem: React.FC<MenuItemProps> = ({ i }) => {
  const style = { border: `4px solid ${colors[i]}` };

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{
        height: "4em",
        width: "12em",
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:"4em",
       
      }}
    >
      <div

        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          flex: '40px 0',
          marginRight: '20px',
          ...style, // Include the dynamic border style
        }}
      />
      <div

        style={{
          borderRadius: '5px',
          width: '200px',
          height: '20px',
          flex: 1,
          ...style, // Include the dynamic border style
        }}
      />
    </motion.li>
  );
};
