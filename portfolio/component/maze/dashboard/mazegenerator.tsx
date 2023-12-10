import React from 'react';
import DepthFirstTraversal from './model';
import { useEffect,useState } from 'react';

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

const vertex = () =>{
    return(
        <div ></div>
    )
}




function moveNodes(fromNode: string, toNode: string, duration: number): void {
  const fromElement = document.querySelector(`.${fromNode}`) as HTMLElement | null;
  const toElement = document.querySelector(`.${toNode}`) as HTMLElement | null;

  if (!fromElement || !toElement) {
    console.error('Invalid node class name provided.');
    return;
  }

  const deltaX = toElement.offsetLeft - fromElement.offsetLeft;
  const deltaY = toElement.offsetTop - fromElement.offsetTop;

  const keyframes = `@keyframes move${fromNode}to${toNode} {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(${deltaX}px, ${deltaY}px);
    }
  }`;

  const styleSheet = document.styleSheets[0] as CSSStyleSheet;

  if (styleSheet) {
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  }

  fromElement.style.position = 'relative';
  fromElement.style.animation = `move${fromNode}to${toNode} ${duration}s ease-in-out`;
}



  interface MazeProps {
    startAnimation: boolean;
  }



  const Maze: React.FC<{ startAnimation: boolean }> = ({ startAnimation }) => {
    const [path, setPath] = useState<[number, number][]>([]);
    const [animationList, setAnimationList] = useState<{ from: string; to: string; distance: number }[]>([]);
  
    const handlePathChange = (newPath: [number, number][]) => {
      setPath(newPath);
  
      // When the path changes, build the animation list
      const newAnimationList = newPath.map(([from, to]) => ({
        from: `Node_${from}`,
        to: `Node_${to}`,
        distance: 3, // Adjust the distance as needed
      }));
      setAnimationList(newAnimationList);
    };
  
    useEffect(() => {
      if (startAnimation && animationList.length > 0) {
        // Iterate through the animationList and trigger animations with delays
        animationList.forEach(({ from, to, distance }, index) => {
          const duration = distance; // Use distance as duration
          const delay = index * duration; // Adjust the delay as needed
          setTimeout(() => {
            moveNodes(from, to, duration);
          }, delay * 1000); // Convert the delay to milliseconds
        });
      }
    }, [startAnimation, animationList]);
  
  
  
  return (


    <div style={gridContainerStyle}>

      <div style={grid1}>

          <div style={gridItemStyle}>
            </div>
                    <div style={{display:"grid", gridTemplateRows:"0.3fr 0.05fr 1fr"}}>
                    {vertex()}
                    <div className="Node_4" style={{backgroundColor:"black"}}></div>
                    {vertex()}
                    </div>
            <div style={{display:"grid", gridTemplateRows:"0.3fr 0.05fr 1fr"}}>
                        <div style={{display:"grid", gridTemplateColumns:"1fr 0.025fr 1fr" }}>
                            <div style={gridItemStyle}>
                            </div>
                            {vertex()}
                            <div style={gridItemStyle}>
                            <DepthFirstTraversal onPathChange={handlePathChange} />
                            </div>
                        </div>
                        <div style={{display:"grid",gridTemplateColumns:"1fr 0.025fr 1fr"}}>
                            {vertex()}
                            <div className="Node_5" style={{backgroundColor:"black"}}></div>
                            {vertex()}
                        </div>
                        <div style={gridItemStyle}>
                        </div>
            </div>
      </div>

        <div style={grid1}>
        {vertex()}
        <div className="Node_3" style={{backgroundColor:"black"}}></div>
            <div style={{display:'grid', gridTemplateColumns:"0.475fr 0.025fr 0.5fr"}}>
                {vertex()}
                <div className="Node_2" style={{backgroundColor:"black"}}></div>
                <div style={{display:'grid', gridTemplateColumns:"0.95fr 0.05fr"}}>
                {vertex()}
                <div className="Node_1" style={{backgroundColor:"black"}}></div>
                </div>
            </div>
        </div>
   

        <div style={grid2}>
  <div style={gridItemStyle}></div>
  {vertex()}
  <div style={gridItemStyle}>
    {path.map(([from, to]) => `${from}_${to} -> `)}
  </div>
</div>



      <div style={grid3}>
        {vertex()}
        <div className="Node_7" style={{backgroundColor:"black"}}></div>
        <div style={{display:'grid', gridTemplateColumns:"0.475fr 0.025fr 0.5fr"}}>
                {vertex()}
                <div className="Node_6" style={{backgroundColor:"black"}}></div>
                <div style={{display:'grid', gridTemplateColumns:"0.95fr 0.05fr"}}>
                {vertex()}
                <div className="Node_8" style={{backgroundColor:"black"}}></div>
                </div>
            </div>
        </div>



      <div style={grid3}>

          <div style={gridItemStyle}>
            </div>

            {vertex()}

        <div style={gridItemStyle}>
          </div>

      </div>



  


    </div>
  );
};

export default Maze;
