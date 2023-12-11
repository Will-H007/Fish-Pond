import React, { useEffect } from 'react';
import Grid from './grid';



interface NormalProps {
  row: number;
  col: number;
}

const Normal: React.FC<NormalProps> = ({ row, col }) => {
  const elementId = `${row+1}-${col+1}`;
  return (
    <>
      <div id={elementId} className='cell'></div>
    </>
  );
};

interface GapProps {
  row: number;
  col: number;
}

const Gap: React.FC<GapProps> = ({ row, col }) => {
  const elementId = `${row+1}-${col+1}`;
  return (
    <>

      <div id={elementId} className='gap'></div>

    </>
  );
};

const Gameboard: React.FC = () => {
  useEffect(() => {
    const gameboardElement = document.getElementById('gameboard');
    const grid = new Grid(gameboardElement);
  
    // Get the starting and ending locations
    const startLocation = grid.getlocation('1-1');
    const endLocation = grid.getlocation('1-3');

    grid.move(startLocation, endLocation);

    // Add a delay before initiating the second animation
    setTimeout(() => {
      grid.move(endLocation, startLocation);
    }, /* Set your desired delay in milliseconds, e.g., */ 1500);
    
  
    return () => {
      // Cleanup logic
    };
  }, []);

  const renderGridElements = () => {
    const elements = [];
    const rows = 9;
    const cols = 9;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (col % 2 === 0 && row % 2 == 0) {
          elements.push(<Normal key={`${row}-${col}`} row={row} col={col} />);
        } else {
          elements.push(<Gap key={`${row}-${col}`} row={row} col={col} />);
        }
      }
    }

    return elements;
  };

  return (
    <div id='gameboard'>
      {renderGridElements()}
      <div className='tile'></div>
    </div>
  );
};

export default Gameboard;
