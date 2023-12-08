import * as React from "react";
import { useRef, useState, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./useDimension";
import { MenuToggle } from "./MenuToggle";
import Navigation from "./Navigation";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const initialItems = [
  { id: 0, label: 'Home', path: '/home' },
  { id: 1, label: 'About me', path: '/aboutme' },
  { id: 2, label: 'Gallery', path: '/gallery' },

];

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export const AnimateNav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [isComponentVisible, setComponentVisible] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const handleButtonClick = () => {
    setComponentVisible(!isComponentVisible);
    toggleOpen();
  };

  



  return (
    <div>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width:"0em"
        }}
      >
        <motion.div
          variants={sidebar}
          style={{
            height: "100%",
            width: "20em",
            background: "white",
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            zIndex:99
          }}
        />

        <Navigation list={initialItems} />

        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </div>
  );
};
