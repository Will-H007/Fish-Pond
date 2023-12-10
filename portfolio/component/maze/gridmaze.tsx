import React, { createRef } from 'react';

const gridItemStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#476343',
  height: '4em',
  width: '4em',
  color:"white",
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
    animatedCellPosition: { row: number; col: number } | null;
  }
  

class Grid extends React.Component<{}, GridState> {
    private cellRefs: React.RefObject<HTMLDivElement>[][] = [];
    constructor(props: {}) {
        super(props);
    
        // Initialize a 2D array to represent the grid
        this.state = {
          grid: Array.from({ length: 12 }, () => Array(23).fill('.')),
          animatedCellPosition: null,
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

      return { grid: newGrid, animatedCellPosition: null  };
    });
  };


  animateCell = async (start: { row: number; col: number }, end: { row: number; col: number }) => {
    // Calculate the path between start and end
    const path = this.calculatePath(start, end);
  
    // Animate the cell along the path
    for (const position of path) {
      this.setState({ animatedCellPosition: position });
  
      // Wait for a short delay between each step (adjust the delay as needed)
      await new Promise((resolve) => setTimeout(resolve, 200));
    }
  };
  
  calculatePath = (start: { row: number; col: number }, end: { row: number; col: number }) => {
    const path: { row: number; col: number }[] = [];
  
    // Calculate the linear path between start and end
    const deltaX = end.col - start.col;
    const deltaY = end.row - start.row;
    const steps = Math.max(Math.abs(deltaX), Math.abs(deltaY));
  
    for (let i = 0; i <= steps; i++) {
      const col = start.col + (i * deltaX) / steps;
      const row = start.row + (i * deltaY) / steps;
  
      path.push({ row: Math.round(row), col: Math.round(col) });
    }
  
    return path;
  };
  


  componentDidMount() {
    // Example: Change the color of cell at (2, 3) to 'red' after component mounts
    console.log(this.cellRefs)
    const component1 = this.fillgrid(8,4, {x: 0,y:0})
    this.updateColorAtCoordinates(component1,'red')
    const component2= this.fillgrid(7, 1, {x: 9,y:0})
    this.updateColorAtCoordinates(component2,'green')
    const component3= this.fillgrid(6, 1, {x: 17,y:0})
    this.updateColorAtCoordinates(component3,'green')
    const component4= this.fillgrid(14, 2, {x: 9,y:2})
    this.updateColorAtCoordinates(component4,'green')
    const component5= this.fillgrid(8, 7, {x: 0,y:5})
    this.updateColorAtCoordinates(component5,'purple')
    const component6= this.fillgrid(14, 7, {x: 9,y:5})
    this.updateColorAtCoordinates(component6,'orange')


    const black= this.fillgrid(10, 1, {x: 0,y:4})
    this.updateColorAtCoordinates(black,'black')


    const start = { row: 4, col: 0 };
    const end = { row: 4, col: 8 };
    // Example: Animate the movement of the cell from start to end
    this.animateCell(start, end);
  }

  render() {
    return (
        <div>
      <div style={row}>
        {this.state.grid.map((row, rowIndex) => (
          <div key={rowIndex} style={column}>
            {row.map((cell, colIndex) => (
              <div key={colIndex}   style={{
                ...gridItemStyle,
                backgroundColor: cell,
                transform:
                  this.state.animatedCellPosition &&
                  rowIndex === this.state.animatedCellPosition.row &&
                  colIndex === this.state.animatedCellPosition.col
                    ? 'translateX(4em)' // Adjust the translation based on your grid cell size
                    : 'none',
              }}  >
            {/* {`(${colIndex},${rowIndex})`} */}
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
      </div>
    );
  }
  
  
}

export default Grid;
