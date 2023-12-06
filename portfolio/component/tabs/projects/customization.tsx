import { useState } from "react";
import { motion } from "framer-motion";
import Input from "./controls";

export default function Customization() {
  const containerWidth = 300; // Set the width of your container
  const containerHeight = 300; // Set the height of your container

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleDrawClick = () => {
    // Add logic for drawing here if needed
    setIsSubmitted(false); // Switch back to the "Draw" state
  };

  const handleSubmitClick = () => {
    // Add logic for submitting here if needed
    // For example, you can send the drawn data to the server
    setIsSubmitted(true); // Switch to the "Submit" state
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%",gap: "50px" }}>


      <div style={{ height: `${containerHeight}px`, width: `${containerWidth}px`, position: "relative" }}>

        <img src="/images/image5.jpeg" alt="" style={{ height: "100%", width: "100%", backgroundColor: "transparent", position: "absolute", borderRadius: '8px',  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)'}}/>
      </div>


      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", color: "white", alignItems: "end", gap: "20px" }}>
        <Input value={x} set={(newValue) => setX(Math.min(containerWidth / 2, Math.max(-(containerWidth / 2), newValue)))}>
          Degree
        </Input>
        <Input value={y} set={(newValue) => setY(Math.min(containerHeight / 2, Math.max(-(containerHeight / 2), newValue)))}>
          y
        </Input>
        <Input value={rotate} set={setRotate} min={-180} max={180}>
          rotate
        </Input>
        {isSubmitted ? (
          <button style={{ backgroundColor: "grey", width: "70px", marginRight: "75px", borderRadius: "10px", padding: "5px" }} onClick={handleDrawClick}>
            Draw
          </button>
        ) : (
          <button style={{ backgroundColor: "grey", width: "70px", marginRight: "75px", borderRadius: "10px", padding: "5px" }} onClick={handleSubmitClick}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
