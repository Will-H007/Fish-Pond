import React, { useState, useEffect } from "react";
import Input from "./controls";
import ArrowFractal from "@/component/fractal/arrowfractal";

import { Dispatch, SetStateAction } from 'react';

interface CustomizationProps {
  degree: number;
  setDegree: Dispatch<SetStateAction<number>>;
  Content?: React.ReactNode;
  FlippedContent?: React.ReactNode;
  id: string;
  color?:string;
}

const Customization: React.FC<CustomizationProps> = ({ setDegree, Content, FlippedContent, id,color }) => {
  const [degree, setLocalDegree] = useState(2); // Use local degree state
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlipClick = () => {
    setIsFlipped(!isFlipped);
    setDegree(degree); // Update the global state when flipped
  };

  useEffect(() => {
    // Update global state when local state changes
    setDegree(degree);
  }, [degree, setDegree]);

  return (
    <div key={id} style={{ display: "flex", flexDirection: "column", justifyContent: "center", color: "white", alignItems: "center", height: "100%", width: "100%", gap: "0.5em" }}>
      <div
        style={{
          position: "relative",
          padding: "0.7em",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
          cursor: "pointer", // Add cursor style
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)", // Apply flip transformation
          transformStyle: "preserve-3d", // Preserve 3D transformation
          transition: "transform 0.5s", // Add transition for smooth flip
          backgroundColor: color
        }}
        onClick={handleFlipClick} // Flip on click
      >
        <div style={{ height: `15em`, width: `100%`, overflow: "hidden", borderRadius: "8px", backfaceVisibility: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", transform: "rotateY(0deg)", backfaceVisibility: "hidden" }}>
            {degree > 1 ? (
              // Render custom fractal content or default ArrowFractal
              Content || <ArrowFractal level={degree} x={5} y={5} />
            ) : (
              /* Add text or content for the flipped side */
              FlippedContent ||
              <div style={{ width: "100%", backfaceVisibility: "hidden" }}>
                <p style={{ color: "white" }}>No Description</p>
              </div>
            )}
          </div>
        </div>
      </div>
      {degree > 1 && (
        <Input value={degree} set={(newValue) => setLocalDegree(newValue)} min={2} max={8}>
          Degree
        </Input>
      )}
    </div>
  );
};

export default Customization;
