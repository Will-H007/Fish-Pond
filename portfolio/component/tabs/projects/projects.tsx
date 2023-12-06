import React, { useState } from "react";
import Fractal from "@/component/fractal/fractal";
import Customization from "./customization";
import TreeFractal from "@/component/fractal/arrowfractal";

const Player: React.FC = () => {
  const [degree, setDegree] = useState(4);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%", gap: "50px" }}>
      <div style={{ display: "flex", alignItems: "center", flexDirection: "column", height: "600px", width: "600px", gap: "5px" }}>
        {/* Pass the tree fractal function to the Fractal component */}
        <TreeFractal level={4} x={0} y={0} size={600} />

      </div>
      <Customization degree={degree} setDegree={setDegree} />
    </div>
  );
};

export default Player;
