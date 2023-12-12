import React, { useEffect } from 'react';
import Grid from './grid';
import Tile from './tile';
import Example3 from '@/component/tabs/skill/graphs/exampledonut';
import Example from '@/component/tabs/skill/graphs/examplebar';
import Example4 from '@/component/tabs/skill/graphs/exampleline';


const Gameboard: React.FC = () => {
  useEffect(() => {
    const gameboardElement = document.getElementById('gameboard');

    const grid = new Grid(gameboardElement);
    const tile = new Tile(gameboardElement)
    grid.randomEmptyCell().setObject(tile)
    // console.log(grid.randomEmptyCell())
    // Example usage:
    // const startEndPairs: string[][] = [
    //   ['7-7', '7-9'],
    //   ['7-9', '7-11'],
    //   ['7-11', '9-11'],
    //   ['9-11', '11-11'],
    //   ['11-11', '11-9'],
    //   ['11-9', '11-7'],
    //   ['11-7', '9-7'],
    //   ['9-7', '9-9'],
    //   // Add more pairs as needed
    // ];
    
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

    const graph3_position = grid.getlocation('3-7')
    const graph3 = document.getElementById('graph3');
    if (graph3) {
      graph3.style.position = "absolute";
      graph3.style.background = "#476343";
      graph3.style.height = "27vmin";
      graph3.style.width = "42vmin";
      graph3.style.display = 'flex';
      graph3.style.justifyContent = 'center';
      graph3.style.alignItems = 'center';
      graph3.style.borderRadius = '1vmin'
      graph3.style.top = `${graph3_position.y}px`
      graph3.style.left = `${graph3_position.x}px`
    }


    const graph4_position = grid.getlocation('1-7')
    const graph4 = document.getElementById('graph4');
    if (graph4) {
      graph4.style.position = "absolute";
      graph4.style.background = "#476343";
      graph4.style.height = "12vmin";
      graph4.style.width = "42vmin";
      graph4.style.display = 'flex';
      graph4.style.justifyContent = 'center';
      graph4.style.alignItems = 'center';
      graph4.style.borderRadius = '1vmin'
      graph4.style.top = `${graph4_position.y}px`
      graph4.style.left = `${graph4_position.x}px`
      graph4.style.color = "white"
    }

    const graph5_position = grid.getlocation('7-1')
    const graph5 = document.getElementById('graph5');
    if (graph5) {
      graph5.style.position = "absolute";
      graph5.style.background = "#476343";
      graph5.style.height = "12vmin";
      graph5.style.width = "42vmin";
      graph5.style.display = 'flex';
      graph5.style.justifyContent = 'center';
      graph5.style.alignItems = 'center';
      graph5.style.borderRadius = '1vmin'
      graph5.style.top = `${graph5_position.y}px`
      graph5.style.left = `${graph5_position.x}px`
      graph5.style.color = "white"
    }








    return () => {
      // Cleanup logic
    };
  }, []);













  return (
    <div id='gameboard'>

      {/* <div className='tile'></div> */}
      {/* <div id='graph'><Example3/></div>
      <div id='graph2'><Example/></div>
      <div id='graph3'><Example4/></div>
      <div id='graph4'>1st Place in Accenture Hackathon</div>
      <div id='graph5'>Trading club competition winner group</div> */}
    </div>
  );
};

export default Gameboard;
