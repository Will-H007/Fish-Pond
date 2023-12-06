import React, { useState } from "react";
import Fractal from "@/component/fractal/fractal";
import Customization from "./customization";
import TreeFractal from "@/component/fractal/arrowfractal";

const Player: React.FC = () => {
  const [degree, setDegree] = useState(4);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%", gap: "50px" }}>
      <div style={{ display: "flex", alignItems: "center", flexDirection: "column", height: "600px", width: "600px", gap: "5px" }}>
        <Customization degree={degree} setDegree={setDegree} />
      </div>

    </div>
  );
};

export default Player;
