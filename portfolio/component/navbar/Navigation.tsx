import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

interface ListItem {
  id: number;
  label: string;
}

interface NavigationProps {
  list: ListItem[];
}

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const Navigation: React.FC<NavigationProps> = ({ list }) => (
  <div style={{ height: "20em", width: "10em", paddingTop: "6em", paddingLeft:"5em" }}>
    <motion.ul variants={variants} style={{ height: "4em", position: "absolute" }}>
      {list.map(({ id, label }) => (
        <MenuItem i={id} key={id} label={label} />
      ))}
    </motion.ul>
  </div>
);

export default Navigation;
