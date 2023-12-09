import React from 'react';
import Example from '../../tabs/skill/graphs/examplebar';
import Example3 from '../../tabs/skill/graphs/exampledonut';
import Example4 from '../../tabs/skill/graphs/exampleline';


const gridContainerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateRows: '1.5fr 0.1fr 1fr 0.1fr 1.5fr',

    height: '100%',
    width: '100%',
  
    margin: '0 auto',   // Center the content horizontally
};


const grid1: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 0.05fr 2fr',

    height:"100%",
    width:"100%",

  };

  const grid2: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '2fr 0.05fr 1fr',

    height:"100%",
    width:"100%",

  };
  
  const grid3: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 0.05fr 2fr',

    height:"100%",
    width:"100%",

  };
 

const gridItemStyle: React.CSSProperties = {

  borderRadius:"1em",
  display:'flex',
  justifyContent:'center',
  alignItems:"center",
  color:"white",
  backgroundColor: "#476343",


};

const gap = () =>{
    return(
        <div style={{backgroundColor:"white"}}></div>
    )
}



const Maze: React.FC = () => {
  return (
    <div style={gridContainerStyle}>

      <div style={grid1}>

          <div style={gridItemStyle}>
            </div>
                    <div style={{display:"grid", gridTemplateRows:"0.3fr 0.05fr 1fr"}}>
                    {gap()}
                    <div style={{backgroundColor:"black"}}></div>
                    {gap()}
                    </div>
            <div style={{display:"grid", gridTemplateRows:"0.3fr 0.05fr 1fr"}}>
                        <div style={{display:"grid", gridTemplateColumns:"1fr 0.025fr 1fr" }}>
                            <div style={gridItemStyle}>
                            </div>
                            {gap()}
                            <div style={gridItemStyle}>
                            </div>
                        </div>
                        <div style={{display:"grid",gridTemplateColumns:"1fr 0.025fr 1fr"}}>
                            {gap()}
                            <div style={{backgroundColor:"black"}}></div>
                            {gap()}
                        </div>
                        <div style={gridItemStyle}>
                        </div>
            </div>
      </div>

        <div style={grid1}>
        {gap()}
        <div style={{backgroundColor:"black"}}></div>
            <div style={{display:'grid', gridTemplateColumns:"0.475fr 0.025fr 0.5fr"}}>
                {gap()}
                <div style={{backgroundColor:"black"}}></div>
                {gap()}
            </div>
        </div>
   

      <div style={grid2}>
          <div style={gridItemStyle}>
            </div>
            {gap()}
        <div style={gridItemStyle}>
           </div>
      </div>


      <div style={grid3}>
        {gap()}
        <div style={{backgroundColor:"black"}}></div>
        <div style={{display:'grid', gridTemplateColumns:"0.475fr 0.025fr 0.5fr"}}>
                {gap()}
                <div style={{backgroundColor:"black"}}></div>
                {gap()}
            </div>
        </div>



      <div style={grid3}>

          <div style={gridItemStyle}>
            </div>

            {gap()}

        <div style={gridItemStyle}>
          </div>

      </div>



  


    </div>
  );
};

export default Maze;
