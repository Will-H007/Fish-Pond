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
  

    return () => {
     
    

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
      
     
      function randEven(min:number, max:number) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNum + (randomNum % 2 === 0 ? 0 : 1);
      }
      const gameboardElement = document.getElementById('gameboard');
    
      const grid = new Grid(gameboardElement);
     
      console.log(grid.setAllNeighbors())
      // for (let i = 0; i < 1; i++) {
      //   const fish = new Fish(gameboardElement);
      //   grid.randomEmptyCell().setObject(fish);
      //   fish.seek(2, 2, grid);
      // }
 


      



    };
  }, []);












  return (
    <div id='gameboard'>

    </div>
  );
};

export default Gameboard;
