import React, { useEffect } from 'react';
import Grid from './grid';
import Tile from './tile';
import Example3 from '@/component/tabs/skill/graphs/exampledonut';
import Example from '@/component/tabs/skill/graphs/examplebar';
import Example4 from '@/component/tabs/skill/graphs/exampleline';


const Gameboard: React.FC = () => {
  useEffect(() => { // Cleanup logic


    return () => {
     
      const gameboardElement = document.getElementById('gameboard');
  
      const grid = new Grid(gameboardElement);
     
      const tile = new Tile(gameboardElement)
  
    grid.randomEmptyCell().setObject(tile)
    const tile2 = new Tile(gameboardElement)
  
    grid.randomEmptyCell().setObject(tile2)
    };
  }, []);












  return (
    <div id='gameboard'>

    </div>
  );
};

export default Gameboard;
