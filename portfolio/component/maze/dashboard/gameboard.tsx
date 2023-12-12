import React, { useEffect } from 'react';
import Grid from './grid';
import Tile from './tile';
import Example3 from '@/component/tabs/skill/graphs/exampledonut';
import Example from '@/component/tabs/skill/graphs/examplebar';
import Example4 from '@/component/tabs/skill/graphs/exampleline';
import Fish from './fish';
import { random } from 'animejs';
import { randInt } from 'three/src/math/MathUtils.js';

const Gameboard: React.FC = () => {
  useEffect(() => { // Cleanup logic
    function randEven(min:number, max:number) {
      const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
      return randomNum + (randomNum % 2 === 0 ? 0 : 1);
    }
    const gameboardElement = document.getElementById('gameboard');
  
    const grid = new Grid(gameboardElement);
   
    // const tile = new Tile(gameboardElement);
    // const tile2 = new Tile(gameboardElement);
    // grid.randomEmptyCell().setObject(tile);
    // grid.randomEmptyCell().setObject(tile2);
    for (let i = 0; i < 10; i++) {
      const fish = new Fish(gameboardElement);
      grid.randomEmptyCell().setObject(fish);
      fish.seek(randEven(0, 32), randEven(0, 32), grid);
    }
    

    return () => {
     
    

      // const fish = new Fish(gameboardElement);
      // grid.randomEmptyCell().setObject(fish);
      // const fish2 = new Fish(gameboardElement);
      // grid.randomEmptyCell().setObject(fish2);
      // const fish3 = new Fish(gameboardElement);
      // grid.randomEmptyCell().setObject(fish3);
      // const fish4 = new Fish(gameboardElement);
      // grid.randomEmptyCell().setObject(fish4);
      // const fish5 = new Fish(gameboardElement);
      // grid.randomEmptyCell().setObject(fish5);
      // const fish6 = new Fish(gameboardElement);
      // grid.randomEmptyCell().setObject(fish6);
      // const fish7 = new Fish(gameboardElement);
      // grid.randomEmptyCell().setObject(fish7);
      // const fish8 = new Fish(gameboardElement);
      // grid.randomEmptyCell().setObject(fish8);

      const moves = [
        ['0-0', '0-2'],  // Move from cell (0, 0) to cell (0, 1)
        ['0-2', '0-4'],  // Move from cell (0, 1) to cell (1, 1)
        ['0-4', '0-6'],
        ['0-6', '0-8'],  // Move from cell (1, 1) to cell (2, 2)
        // Add more moves as needed
      ];

      const moves2 = [
        ['2-2', '2-4'],    // Move from cell (2, 2) to cell (2, 3)
        ['2-4', '2-6'],    // Move from cell (2, 3) to cell (2, 4)
        ['2-6', '2-8'],    // Move from cell (2, 4) to cell (2, 5)
        ['2-8', '2-10'],   // Move from cell (2, 5) to cell (2, 6)
        // Add more moves as needed
      ];
      

      
 
      
      // tile.moveTilesSequentially(moves, grid);
      // tile2.moveTilesSequentially(moves2, grid);
      // fish.seek(randEven(0,32),randEven(0,32),grid)
      // fish2.seek(randEven(0,32),randEven(0,32),grid)
      // fish3.seek(randEven(0,32),randEven(0,32),grid)
      // fish4.seek(randEven(0,32),randEven(0,32),grid)
      // fish5.seek(randEven(0,32),randEven(0,32),grid)
      // fish6.seek(randEven(0,32),randEven(0,32),grid)
      // fish7.seek(randEven(0,32),randEven(0,32),grid)
      // fish8.seek(randEven(0,32),randEven(0,32),grid)

      // setTimeout(() => {
      //   console.log(grid.getAgents());
      // }, 7000);
    
 

      



    };
  }, []);












  return (
    <div id='gameboard'>

    </div>
  );
};

export default Gameboard;
