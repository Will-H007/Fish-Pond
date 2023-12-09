import React, { useState } from "react";

import Customization from "./customization";
import KochSnowflake from "@/component/fractal/snowflake";
import SierpinskiTriangle from "@/component/fractal/treefractal";
import DragonCurve from "@/component/fractal/dragoncurve";
import ImageBox from "./imagebox";

const Project: React.FC = () => {
  const [degree, setDegree] = useState(4);

  return (

      
      <div style={{ display:"flex",flexDirection:"column",alignItems: "center",justifyContent:"center",paddingRight: "1em",paddingLeft: "1em", width:"100%",height:"100%",borderRadius: '8px', gap:"3em",overflowX:"auto"}}>





<div style={{display:"flex",flexDirection:"row",width:"100%", height:"16em",justifyContent:"center" ,gap: "5em"}}>




            <div style={{ display: "flex", justifyContent: "center",alignItems: "center",flexDirection: "row", height:"100%em", gap: "3em", paddingTop:"1em" }}>
            
            <div style={{paddingTop:"1em"}}>
 
            <ImageBox image="images/image10.png" FlippedContent="Koi(AI)"/>
            </div>
        </div>

            <div style={{ display: "flex", justifyContent: "center",alignItems: "center",flexDirection: "row", height:"100%", gap: "3em", paddingTop:"1em" }}>
            
                <div style={{paddingTop:"1em"}}>
     
                <ImageBox image="images/image7.png" FlippedContent="Turtle(AI)"/>
                </div>
            </div>
            

            <div style={{ display: "flex", justifyContent: "center",alignItems: "center",flexDirection: "row", height:"100%", gap: "3em", paddingTop:"1em" }}>
            
                <div style={{paddingTop:"1em"}}>
     
                <ImageBox image="images/image8.png" FlippedContent="Frog(AI)"/>
                     </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center",alignItems: "center",flexDirection: "row", height:"100%", gap: "3em", paddingTop:"1em" }}>
            
            <div style={{paddingTop:"1em"}}>
 
            <ImageBox image="images/image9.png" FlippedContent="Duck(AI)"/>
          </div>
        </div>

            </div>








      <div style={{display:"flex",flexDirection:"row",width:"100%", justifyContent:"center" ,gap: "5em"}}>
       


            <div style={{ display: "flex", justifyContent: "center",alignItems: "center",flexDirection: "row", height:"100%", gap: "3em", paddingTop:"1em" }}>
            
            <div style={{paddingTop:"1em"}}>
 
            <Customization degree={degree} color="#54a6ec" setDegree={setDegree} id="1" FlippedContent="Custom" />   </div>
        </div>
        
            <div style={{ display: "flex", justifyContent: "center",alignItems: "center",flexDirection: "row", height:"100%", gap: "3em", paddingTop:"1em" }}>
            
                <div style={{paddingTop:"1em"}}>
     
                  <Customization degree={degree} color="green" setDegree={setDegree} id="2" Content={<SierpinskiTriangle level={degree} x={100} y={100} size={200}/>} FlippedContent={"Wave"}/>
              </div>
            </div>
            

            <div style={{ display: "flex", justifyContent: "center",alignItems: "center",flexDirection: "row", height:"100%", gap: "3em", paddingTop:"1em" }}>
            
                <div style={{paddingTop:"1em"}}>
     
                  <Customization degree={degree} color="#ae8b0c" setDegree={setDegree} id="3" Content={<KochSnowflake level={degree} x={-30} y={125} size={200}/>} FlippedContent="SnowFlake"/>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center",alignItems: "center",flexDirection: "row", height:"100%", gap: "3em", paddingTop:"1em" }}>
            
            <div style={{paddingTop:"1em"}}>
 
            <Customization degree={degree} color="#d15837" setDegree={setDegree} id="3" Content={<DragonCurve level={degree} x={20} y={100} size={200}/>} FlippedContent="Dragon's Curve"/>

          </div>
        </div>

            </div>


            









      </div>

  );
};

export default Project;
