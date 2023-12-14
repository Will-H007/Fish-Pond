import React, { useEffect } from 'react';
import Grid from './grid';

import Fish from './fish';
import { setTimeout } from 'timers/promises';

const counts:(Promise<number | undefined>)[] = []
const Gameboard: React.FC = () => {
  
  useEffect(() => { // Cleanup logic
  
    return () => {
      const gameboardElement = document.getElementById('gameboard');

      const grid = new Grid(gameboardElement);
  
      for (let i = 0; i < 200; i++) {
        const fish = new Fish(gameboardElement);
        grid.randomEmptyCell().setObject(fish);
        const count = fish.explore(grid)
        console.log(count)
        counts.push(count);
      }
     

    };
  }, []);




  return (
    <div id='gameboard'>
    </div>
  );
};
export {counts}
export default Gameboard;
