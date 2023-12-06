import React from "react";
import { motion } from "framer-motion";
import Fractal from "@/component/fractal/fractal";
import Customization from "./customization";
const Player: React.FC = () => {
     
  

  return (
    <div style={{ display: "flex",justifyContent: "center", alignItems: "center",height:"100%", width:"100%", gap:"50px"}}>
         
      <div style={{display: "flex", alignItems: "center",flexDirection:"column",height: "600px" ,width: "600px", marginRight:"20px",gap:"5px" }}>
        <Fractal degree={3}/>
      </div>
      
    <Customization/>
     
    </div>
  );
};

export default Player;
