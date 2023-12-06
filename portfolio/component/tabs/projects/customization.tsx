import React, { useState } from "react";
import Input from "./controls";
import ArrowFractal from "@/component/fractal/arrowfractal";

interface CustomizationProps {
  degree: number;
  setDegree: (newValue: number) => void;
  Content?: React.ReactNode; 
  FlippedContent?:React.ReactNode;
}

const Customization: React.FC<CustomizationProps> = ({ degree, setDegree, Content, FlippedContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlipClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", color: "white", alignItems: "center", height: "100%", width: "100%", gap: "0.5em" }}>
      <div
        style={{
          position: "relative",
          padding: "2em",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
          cursor: "pointer", // Add cursor style
          transform: isFlipped ? "rotateY(360deg)" : "none", // Apply flip transformation
          transformStyle: "preserve-3d", // Preserve 3D transformation
          transition: "transform 0.5s", // Add transition for smooth flip
        }}
        onClick={handleFlipClick} // Flip on click
      >
        <div style={{ height: `15em`, width: `100%`, overflow: "hidden", borderRadius: "8px", backfaceVisibility: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", transform: isFlipped ? "rotateY(180deg)" : "none" }}>
            {isFlipped ? (
              /* Add text or content for the flipped side */
              FlippedContent || 
              <div style={{width: "100%", transform: "rotateY(180deg)" }}>
                <p style={{color:"white"}}>Hello World</p> 
            </div>
            ) : (
              // Render custom fractal content or default ArrowFractal
              Content || <ArrowFractal level={degree} x={5} y={5} />
            )}
          </div>
        </div>
      </div>
      {isFlipped ? (
        <div style={{ height: "2.6em" }}></div>
      ) : (
        <Input value={degree} set={(newValue) => setDegree(newValue)} min={2} max={8}>
          Degree
        </Input>
      )}
    </div>
  );
};

export default Customization;
