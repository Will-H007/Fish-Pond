import React from "react";
import Input from "./controls";
import ArrowFractal from "@/component/fractal/arrowfractal";

interface CustomizationProps {
  degree: number;
  setDegree: (newValue: number) => void;
}

const Customization: React.FC<CustomizationProps> = ({ degree, setDegree }) => {

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", color: "white", alignItems: "center", height: "100%",width:"100%",gap: "0.5em" }}>
      <div style={{ position: "relative", padding: "2em", borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)'}}>
        <div style={{ height: `15em`, width: `100%`, overflow: 'hidden', borderRadius: '8px' }}>
        <ArrowFractal level={degree} x={5} y={5}  />
  
        </div>
      </div>

      <Input value={degree} set={(newValue) => setDegree(newValue)} min={2} max={8}>
        Degree
      </Input>
    </div>
  );
};

export default Customization;
