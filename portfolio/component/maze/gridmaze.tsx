import React from 'react';

const gridItemStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#476343',
  height: '4em',
  width: '4em',
  border: '1px solid #fff',
};

const column: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(23, 1fr)',

  border: '1px solid #fff',
};

const row: React.CSSProperties = {
  display: 'grid',
  gridTemplateRows: 'repeat(12, 1fr)',
  border: '1px solid #fff',
};

interface GridState {
    grid: string[][];
  }
  

class Grid extends React.Component<{}, GridState> {

  constructor(props: {}) {
    super(props);

    // Initialize a 2D array to represent the grid
    this.state = {
      grid: Array.from({ length: 12 }, () => Array(23).fill('.'))
    };


 
  }

  fillgrid(row: number, col: number, startingpoint:{x:number, y:number}) {
    // Create a 2D array representing the entire grid
    const smallgrid = Array.from({ length: col }, (_, rowIndex) =>
        Array(row).fill(null).map((_, colIndex) => 
        ({ col: colIndex + startingpoint.x ,row: rowIndex + startingpoint.y  }))
    );
    // Flatten the 2D array to get a 1D array of coordinates
    const flatSmallGrid = smallgrid.flat();
    // Update the color for the specified coordinates
    return flatSmallGrid
  }
  

  // Function to update color at specified coordinates
  updateColorAtCoordinates = (coordinates: { row: number; col: number }[], color: string) => {
    this.setState((prevState) => {
      const newGrid = prevState.grid.map((row) => [...row]);

      coordinates.forEach((coord) => {
        const { row, col } = coord;
        if (newGrid[row] && newGrid[row][col]) {
          newGrid[row][col] = color;
        }
      });

      return { grid: newGrid };
    });
  };


  componentDidMount() {
    // Example: Change the color of cell at (2, 3) to 'red' after component mounts
    const component1 = this.fillgrid(8,4, {x: 0,y:0})
    this.updateColorAtCoordinates(component1,'red')
    const component2= this.fillgrid(7, 1, {x: 9,y:0})
    this.updateColorAtCoordinates(component2,'green')
    const component3= this.fillgrid(6, 1, {x: 17,y:0})
    this.updateColorAtCoordinates(component3,'green')
 
  }

  render() {
    return (
      <div style={row}>
        {this.state.grid.map((row, rowIndex) => (
          <div key={rowIndex} style={column}>
            {row.map((cell, colIndex) => (
              <div key={colIndex} style={{ ...gridItemStyle, backgroundColor: cell }}>
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
  
  
}

export default Grid;
