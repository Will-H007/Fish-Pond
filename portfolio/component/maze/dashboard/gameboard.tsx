import React, { useEffect } from 'react';
import Grid from './grid';
import Example3 from '@/component/tabs/skill/graphs/exampledonut';
import Example from '@/component/tabs/skill/graphs/examplebar';

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
  
    // Example usage:
    const startEndPairs: string[][] = [
      ['1-5', '3-5'],
      ['3-5', '5-5'],
      // Add more pairs as needed
    ];
    
    // grid.moveTilesSequentially(startEndPairs);
    


    const graph = document.getElementById('graph');
    if (graph) {
      graph.style.position = "absolute";
      graph.style.background = "#476343";
      graph.style.height = "42vmin";
      graph.style.width = "42vmin";
      graph.style.display = 'flex';
      graph.style.justifyContent = 'center';
      graph.style.alignItems = 'center';
      graph.style.borderRadius = '1vmin'
    }

    const graph2_position = grid.getlocation('9-1')
    console.log(graph2_position)
    const graph2 = document.getElementById('graph2');
    if (graph2) {
      graph2.style.position = "absolute";
      graph2.style.background = "#476343";
      graph2.style.height = "27vmin";
      graph2.style.width = "42vmin";
      graph2.style.display = 'flex';
      graph2.style.justifyContent = 'center';
      graph2.style.alignItems = 'center';
      graph2.style.borderRadius = '1vmin'
      graph2.style.top = `${graph2_position.y}px`
      graph2.style.left = `${graph2_position.x}px`
    }







    return () => {
      // Cleanup logic
    };
  }, []);

  const renderGridElements = () => {
    const elements = [];
    const cols =11;
    const rows =11;


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
      <div id='graph'><Example3/></div>
      <div id='graph2'><Example/></div>
    </div>
  );
};

export default Gameboard;
