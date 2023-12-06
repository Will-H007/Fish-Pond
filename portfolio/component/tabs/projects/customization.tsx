import React from "react";
import Input from "./controls";
import Fractal from "@/component/fractal/fractal";

interface CustomizationProps {
  degree: number;
  setDegree: (newValue: number) => void;
}

const Customization: React.FC<CustomizationProps> = ({ degree, setDegree }) => {
  const containerSize = 300;
  const previewSize = containerSize - 40; // Adjust for padding

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", color: "white", alignItems: "center", height: "100%", gap: "25px" }}>
      <div style={{ position: "relative", padding: "20px", borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }}>
        <div style={{ height: `${containerSize}px`, width: `${containerSize}px`, overflow: 'hidden', borderRadius: '8px' }}>
        <Fractal degree={1} area={previewSize} startingPoint={{ x: 80, y: 80 }} />
        </div>
      </div>

      <Input value={degree} set={(newValue) => setDegree(newValue)} min={2} max={8}>
        Degree
      </Input>
    </div>
  );
};

export default Customization;
