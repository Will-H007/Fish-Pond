import { motion } from "framer-motion";

interface AnimatedLineProps {
  center_x: number;
  center_y: number;
  side: number;
  attribute: string;
  draw: {
    hidden: { pathLength: number; opacity: number };
    visible: (delay: number) => {
      pathLength: number;
      opacity: number;
      transition: {
        pathLength: { delay: number; type: string; duration: number; bounce: number };
        opacity: { delay: number; duration: number };
      };
    };
  };
  flipHorizontal?: boolean;
  flipVertical?: boolean;
}

const Eye: React.FC<AnimatedLineProps> = ({ center_x ,center_y , attribute, side, draw, flipHorizontal = false, flipVertical = false }) => {
  const flipScaleX = flipHorizontal ? -1 : 1;
  const flipScaleY = flipVertical ? -1 : 1;
  return (
    <>
      <motion.line
        className={attribute}
        style={{
          stroke: "white",
          strokeLinecap: "round",
          fill: "transparent",
          scaleX: flipScaleX,
          scaleY: flipScaleY,
        }}
        x1={center_x + side}
        y1={center_y + side}
        x2={center_x}
        y2={center_y}
        stroke="white"
        variants={{
          hidden: draw.hidden,
          visible: draw.visible(6), // You might need to adjust the delay here
        }}

      />

      <motion.path
        className={attribute}
        style={{
          stroke: "white",
          strokeLinecap: "round",
          fill: "transparent",
          scaleX: flipScaleX,
          scaleY: flipScaleY,
        }}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        d={`M ${center_x + side },${center_y + side } Q ${center_x},${center_y + side } ${center_x},${center_y}`}
        variants={{
          hidden: draw.hidden,
          visible: draw.visible(0), // You might need to adjust the delay here
        }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 2,
        }}
      />


      <motion.path
        className={attribute}
        style={{
          stroke: "white",
          strokeLinecap: "round",
          fill: "transparent",
          scaleX: flipScaleX,
          scaleY: flipScaleY,
        }}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        d={`M ${center_x + side },${center_y + side } Q ${center_x+side},${center_y} ${center_x},${center_y}`}
        variants={{
          hidden: draw.hidden,
          visible: draw.visible(0), // You might need to adjust the delay here
        }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 2,
        }}
      />
    </>
  );
};

export default Eye;
