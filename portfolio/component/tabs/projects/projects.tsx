import React, { useState } from "react";

import Customization from "./customization";
import KochSnowflake from "@/component/fractal/snowflake";
import SierpinskiTriangle from "@/component/fractal/treefractal";

const Player: React.FC = () => {
  const [degree, setDegree] = useState(4);

  return (

      
      <div style={{ display:"flex",flexDirection:"column",alignItems: "center",paddingRight: "1em",paddingLeft: "1em", width:"100%",height:"100%",borderRadius: '8px', gap:"1em",overflowY:"auto"}}>





<div style={{display:"flex",flexDirection:"row",width:"100%", justifyContent:"center" ,gap: "2em"}}>
            <div style={{ display: "flex", justifyContent: "center",alignItems: "center",flexDirection: "row", height:"25em", gap: "1em", paddingTop:"1em" }}>
                    <div style={{color:"black", display:'flex', flexWrap:"wrap",flexDirection:"row", width:"10em", height:"25em", paddingTop:"2em",fontSize:"0.8em", marginRight:"2em" }}>
                      <p style={{fontSize:"1.2em", marginTop:"1em"}}>Fractal</p>
                    <p>
                      A fractal is a complex geometric shape that exhibits the following characteristics:
                    </p>
                    <ul >
                      <li >
                      &bull; Irregularity and Complexity
                      </li>
                      <li >
                      &bull; Infinitely Detailed
                      </li>
                      <li >
                      &bull; High Natural Occurrence
                      </li>
                    </ul>
                    </div>
                <div style={{paddingTop:"1em"}}>
     
                  <Customization degree={degree} setDegree={setDegree} id="1"/>
              </div>
            </div>


            <div style={{ display: "flex", justifyContent: "center",alignItems: "center",flexDirection: "row", height:"25em", gap: "3em", paddingTop:"1em" }}>
            
                <div style={{paddingTop:"1em"}}>
     
                  <Customization degree={degree} color="green" setDegree={setDegree} id="2" Content={<SierpinskiTriangle level={degree} x={100} y={100} size={200}/>} FlippedContent={"123"}/>
              </div>
            </div>
            

            <div style={{ display: "flex", justifyContent: "center",alignItems: "center",flexDirection: "row", height:"25em", gap: "3em", paddingTop:"1em" }}>
            
                <div style={{paddingTop:"1em"}}>
     
                  <Customization degree={degree} color="#ae8b0c" setDegree={setDegree} id="3" Content={<KochSnowflake level={degree} x={-30} y={125} size={200}/>}/>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center",alignItems: "center",flexDirection: "row", height:"25em", gap: "3em", paddingTop:"1em" }}>
            
            <div style={{paddingTop:"1em"}}>
 
              <Customization degree={degree} setDegree={setDegree} id="4"/>
          </div>
        </div>

            </div>








      {/* <div style={{display:"flex",flexDirection:"row",width:"100%", justifyContent:"center" ,gap: "2em"}}>
            <div style={{ display: "flex", justifyContent: "center",alignItems: "center",flexDirection: "row", height:"25em", gap: "1em", paddingTop:"1em" }}>
                    <div style={{color:"black", display:'flex', flexWrap:"wrap",flexDirection:"row", width:"10em", height:"25em", paddingBottom:"1.5em",fontSize:"0.8em", marginRight:"2em" }}>
                      <p style={{fontSize:"1.2em", marginTop:"1em"}}>Fractal</p>
                    <p>
                      A fractal is a complex geometric shape that exhibits the following characteristics:
                    </p>
                    <ul >
                      <li >
                      &bull; Irregularity and Complexity
                      </li>
                      <li >
                      &bull; Infinitely Detailed
                      </li>
                      <li >
                      &bull; High Natural Occurrence
                      </li>
                    </ul>
                    </div>
                <div style={{paddingTop:"1em"}}>
     
                  <Customization degree={degree} setDegree={setDegree} />
              </div>
            </div>


            <div style={{ display: "flex", justifyContent: "center",alignItems: "center",flexDirection: "row", height:"25em", gap: "3em", paddingTop:"1em" }}>
            
                <div style={{paddingTop:"1em"}}>
     
                  <Customization degree={degree} setDegree={setDegree} />
              </div>
            </div>
            

            <div style={{ display: "flex", justifyContent: "center",alignItems: "center",flexDirection: "row", height:"25em", gap: "3em", paddingTop:"1em" }}>
            
                <div style={{paddingTop:"1em"}}>
     
                  <Customization degree={degree} setDegree={setDegree} />
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center",alignItems: "center",flexDirection: "row", height:"25em", gap: "3em", paddingTop:"1em" }}>
            
            <div style={{paddingTop:"1em"}}>
 
              <Customization degree={degree} setDegree={setDegree} />
          </div>
        </div>

            </div> */}









      </div>

  );
};

export default Player;
