import * as React from "react";
import { motion, Variants } from "framer-motion";

interface PathProps {
  d: string;
  variants?: Variants;
  opacity?: number;
  transition?: { duration: number };
}

const Path: React.FC<PathProps> = ({ variants, transition, ...props }) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    variants={variants}
    transition={transition}
    {...props}
  />
);

interface MenuToggleProps {
  toggle: () => void;
}

export const MenuToggle: React.FC<MenuToggleProps> = ({ toggle }) => (
  <button
    onClick={toggle}
    style={{
      outline: 'none',
      border: 'none',
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      position:"absolute",
      cursor: 'pointer',
      background: 'transparent',
      top: "27px",
      left: "27px",
    zIndex:101,
      borderRadius: "50%",
    }}
  >
    <svg
      width="1.75em"
      height="1.75em"
      viewBox="0 0 23 23"
      style={{
        color: 'black', // You can customize the color here
      }}
    >
      <Path
        d="M 2 2.5 L 20 2.5"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 1 }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        transition={{ duration: 0.1 }} // Apply transition directly
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 1 }
        }}
      />
      <Path
        d="M 2 16.346 L 20 16.346"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 1 }
        }}
      />
    </svg>
  </button>
);
