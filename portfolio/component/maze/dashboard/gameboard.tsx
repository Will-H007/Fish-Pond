import React, { useEffect } from 'react';
import Grid from './grid';

interface NormalProps {
  row: number;
  col: number;
}

const Normal: React.FC<NormalProps> = ({ row, col }) => {
  const elementId = `normal-${row}-${col}`;
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
  const elementId = `gap-${row}-${col}`;
  return (
    <>

      <div id={elementId} className='gap'></div>

    </>
  );
};

const Gameboard: React.FC = () => {
  useEffect(() => {
    // Get the gameboard element
    const gameboardElement = document.getElementById('gameboard');
    console.log("gameboardElement:", gameboardElement);

    // Create an instance of the Grid class and pass the gameboard element
    const grid = new Grid(gameboardElement);
    console.log("Grid instance:", grid);

    // Cleanup logic (optional)
    return () => {
      // Any cleanup logic, e.g., removing event listeners
    };
  }, []);

  const renderGridElements = () => {
    const elements = [];
    const rows = 9;
    const cols = 9;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (col % 2 === 0 && row % 2 == 0) {
          elements.push(<Normal key={`normal-${row}-${col}`} row={row} col={col} />);
        } else {
          elements.push(<Gap key={`gap-${row}-${col}`} row={row} col={col} />);
        }
      }
    }

    return elements;
  };

  return (
    <div id='gameboard'>
      {renderGridElements()}
    </div>
  );
};

export default Gameboard;
