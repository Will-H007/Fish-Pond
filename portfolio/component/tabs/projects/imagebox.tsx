import React, { useState } from "react";
import { motion } from "framer-motion";
const ImageBox: React.FC<{ image: string; color?: string; FlippedContent?:string }> = ({ image, color = "transparent", FlippedContent="No Description" }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlipClick = () => {
    setIsFlipped((prevIsFlipped) => !prevIsFlipped);
  };

  return (
    <motion.div  
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      delay: 0.2,
      ease: [0, 0.71, 0.2, 1.01]
    }}
    style={{ display: "flex", flexDirection: "column", justifyContent: "center",  alignItems: "center", height: "16em", width: "16em", gap: "0.5em" }}>
    <div
      style={{
        position: "relative",
        padding: "0.7em",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
        cursor: "pointer", // Add cursor style
        transform: isFlipped ? "rotateY(360deg)" : "rotateY(0deg)", // Apply flip transformation
        transformStyle: "preserve-3d", // Preserve 3D transformation
        transition: "transform 0.5s", // Add transition for smooth flip
        backgroundColor: "transparent",
      }}
      onClick={handleFlipClick} // Flip on click
    >
      <div style={{ height: `16em`, width: `16em`, overflow: "hidden", borderRadius: "8px", backfaceVisibility: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "16em", transform: "rotateY(0deg)", backfaceVisibility: "hidden" }}>
          {!isFlipped ? (
            // Render custom fractal content or default ArrowFractal
      <img src={image} alt="" />
          ) : (
            /* Add text or content for the flipped side */
            <div style={{ width: "15em", backfaceVisibility: "hidden", display: "flex", justifyContent: "center"}}>
              <p style={{ color: "black", fontSize:"30px" }}>{ FlippedContent}</p>
            </div>
          )}
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default ImageBox;


