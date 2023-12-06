import React, { useState } from "react";
import Fractal from "@/component/fractal/fractal";
import Customization from "./customization";
import TreeFractal from "@/component/fractal/arrowfractal";

const Player: React.FC = () => {
  const [degree, setDegree] = useState(4);

  return (
    <div style={{ display: "flex",flexDirection:"row",justifyContent: "center", alignItems: "center", height: "100%", width: "100%", gap: "20px" }}>
      <div style={{ padding: "10px", width:"40em",borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)'}}>
            <div style={{ display: "flex", justifyContent: "center",alignItems: "center",flexDirection: "row", height:"100%", gap: "3em" }}>
                    <div style={{color:"black", display:'flex', flexWrap:"wrap",flexDirection:"row", width:"10em", height:"100%", marginBottom:"1.5em" }}>
                      <p style={{fontSize:"20px"}}>Fractal</p>
                    <p style={{marginTop:"1em"}}>
                      A fractal is a complex geometric shape that exhibits the following characteristics:
                    </p>
                    <ul style={{marginTop:"1em"}}>
                      <li style={{marginTop:"0.5em"}}>
                      &bull; Irregularity and Complexity
                      </li>
                      <li style={{marginTop:"0.5em"}}>
                      &bull; Infinitely Detailed
                      </li>
                      <li style={{marginTop:"0.5em"}}>
                      &bull; High Natural Occurrence
                      </li>
                    </ul>
                    </div>
                <div style={{marginTop:"1em"}}>
                  <Customization degree={degree} setDegree={setDegree} />
              </div>
            </div>
      </div>

      <div style={{ padding: "10px", width:"40em",borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)'}}>
            <div style={{ display: "flex", justifyContent: "center",alignItems: "center",flexDirection: "row", height:"100%", gap: "3em" }}>
                    <div style={{color:"black", display:'flex', flexWrap:"wrap",flexDirection:"row", width:"10em", height:"100%", marginBottom:"1.5em" }}>
                      <p style={{fontSize:"20px"}}>Fractal</p>
                    <p style={{marginTop:"1em"}}>
                      A fractal is a complex geometric shape that exhibits the following characteristics:
                    </p>
                    <ul style={{marginTop:"1em"}}>
                      <li style={{marginTop:"0.5em"}}>
                      &bull; Irregularity and Complexity
                      </li>
                      <li style={{marginTop:"0.5em"}}>
                      &bull; Infinitely Detailed
                      </li>
                      <li style={{marginTop:"0.5em"}}>
                      &bull; High Natural Occurrence
                      </li>
                    </ul>
                    </div>
                <div style={{marginTop:"1em"}}>
                  <Customization degree={degree} setDegree={setDegree} />
              </div>
            </div>
      </div>
    </div>
  );
};

export default Player;
