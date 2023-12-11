import React, { useEffect } from 'react';
import Grid from './grid';

const Normal: React.FC = () => {
  return (
    <>
      <div className='cell'></div>
      <div className='gap'></div>
      <div className='cell'></div>
      <div className='gap'></div>
      <div className='cell'></div>
      <div className='gap'></div>
      <div className='cell'></div>
    </>
  );
};

const Gap: React.FC = () => {
  return (
    <>
      <div className='gap'></div>
      <div className='gap'></div>
      <div className='gap'></div>
      <div className='gap'></div>
      <div className='gap'></div>
      <div className='gap'></div>
      <div className='gap'></div>
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


    grid.setTileStyles(0,5,     4.66,1)

    // Cleanup logic (optional)
    return () => {
        // Any cleanup logic, e.g., removing event listeners
    };
}, []);

 

  return (
    <div id='gameboard'>
      <Normal />
      <Gap />
      <Normal />
      <Gap />
      <Normal />
      <Gap />
      <Normal />
      <div className='tile'></div>

    </div>
  );
};

export default Gameboard;
