import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <div style={{height:"20em", width:"10em", paddingTop:"6em"}}>
    <motion.ul variants={variants} style={{gap:"2em", height:"3em", position:"absolute"}} >
      {itemIds.map(i => (
        <MenuItem i={i} key={i} />
      ))}
    </motion.ul>
  </div>
);

const itemIds = [0, 1, 2, 3, 4];
