import React from 'react';

const gridItemStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#476343',
  height: '4em',
  width: '4em',
//   border: '1px solid #fff',
};

const column: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(23, 1fr)',

//   border: '1px solid #fff',
};

const row: React.CSSProperties = {
  display: 'grid',
  gridTemplateRows: 'repeat(12, 1fr)',
//   border: '1px solid #fff',
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
    this.updateColorAtCoordinates([{ row: 2, col: 3 }, {row: 0, col:0}], 'red');
  }
  render() {
    return (
      <div style={row}>
        {this.state.grid.map((row, rowIndex) => (
          <div key={rowIndex} style={column}>
            {row.map((cell, colIndex) => (
              <div key={colIndex} style={gridItemStyle}>
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
