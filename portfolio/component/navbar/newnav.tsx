import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./useDimension";
import { MenuToggle } from "./MenuToggle";
import Navigation from "./Navigation";

const initialItems = [
  { id: 0,  label: 'Gallery' },
  { id: 1,  label: 'Skill' },
  { id: 2, label: 'Experience' },

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
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      style={{
        position: isOpen ? "absolute" : "static",
        top: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <motion.div
        variants={sidebar}
        style={{
          height: "100vh",
          width: "20em",
          background: "white",
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
        }}
      />

        <Navigation list={initialItems} />

      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
