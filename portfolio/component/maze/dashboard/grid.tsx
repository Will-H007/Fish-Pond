import { useEffect } from "react";
import Tile from "./tile";
import Fish from "./fish";
const COL_SIZE = 33;
const ROW_SIZE =33;
const CELL_SIZE = '90'; // Adjusted to be a string
const CELL_GAP = '0.5vmin'; // Adjusted to be a string
// const TILE_SZIE = `3.5vmin`






class Cell {
    private cellElement: HTMLElement | null;
    private x: number;
    private y: number;
    private type: string;
    private object: Tile | null | Fish;

    constructor(cellElement: HTMLElement | null, x: number, y: number, type: string) {
        this.cellElement = cellElement;
        this.x = x;
        this.y = y;
        this.type = type;
        this.object = null;
    }

    public getType(){
        return this.type
    }


    public getObject(){
        return this.object
    }

    public setObject(tile:Tile | Fish){

        this.object = tile;
        this.object.setX(this.x);
        this.object.setY(this.y);
        this.object.setLocation();
    }

    public getX(){
        return this.x;
    }

    public getY(){
        return this.y;
    }
    public clearObject(){
        this.object = null;
    }
   
}



function createCellElements(gridElement: HTMLElement | null): Cell[] {
    const cells: Cell[] = [];

    // Check if the gridElement already contains cells
    const existingCells = gridElement?.querySelectorAll('.cell');

    // If the grid is empty, create cells
    if (!existingCells || existingCells.length === 0) {
        for (let i = 0; i < COL_SIZE; i++) {
            for (let j = 0; j < ROW_SIZE; j++) {
                const cell = document.createElement("div");
                const cellType = i % 2 === 0 && j % 2 === 0 ? "cell" : "gap";
                cell.classList.add('cell');
                cell.id = (`${i}-${j}`)
                const cellInstance = new Cell(cell, i, j, cellType);
                cells.push(cellInstance);

                gridElement?.append(cell);
            }
        }
    } else {
        // If the grid already has cells, use them
        existingCells.forEach((cellElement) => {
            const [i, j] = (cellElement as HTMLElement).id.split('-').map(Number);
            const cellType = i % 2 === 0 && j % 2 === 0 ? "cell" : "gap";
            const cellInstance = new Cell(cellElement as HTMLElement, i, j, cellType);
            cells.push(cellInstance);
        });
    }

    return cells;
}


export default class Grid {


    private gridElement: HTMLElement | null;

    private cells: Cell[]

    constructor(gridElement: HTMLElement | null) {

        this.gridElement = gridElement;
        this.cells = [];

        if (this.gridElement) {

            const gridSides = this.setgridproportion(COL_SIZE,ROW_SIZE,0.25)
            this.setGridStyles(gridSides);
            this.cells = createCellElements(gridElement)
            this.setCellAndGapStyles('white',"transparent",'#476343','0.5vmin');
     
        }
    }

    public getEmptyCells(){
        return this.cells.filter(cell => cell.getObject() == null && cell.getType() == "cell")
    }

    public randomEmptyCell(){
        const randIndex = Math.floor(Math.random()*this.getEmptyCells().length)

        return this.getEmptyCells()[randIndex]
    }

    public getAgents(){
        return this.cells.filter(cell => cell.getObject() != null && cell.getType() == "cell")
    }

    public UpdatePosition(object:Tile | null | Fish){
        if (object){
        const oldcell = this.cells.find(cell => cell.getObject() === object);

        if (oldcell) {
            const Obj = oldcell.getObject();
            // Rest of your code here
        } else {
            // Handle the case where the object was not found in any cell
            console.error('Object not found in any cell');
        }
        
        const Obj = oldcell?.getObject();
        oldcell?.clearObject()
        const newcell = this.cells.filter(cell => cell.getX() == object.getX() && cell.getY() == object.getY())[0];
        if (newcell) {
            const Obj = newcell.getObject();
            // Rest of your code here
        } else {
            // Handle the case where the object was not found in any cell
            console.error('Object not found in any cell');
        }
        newcell?.setObject(object)
        console.log("position",newcell?.getX(), newcell?.getY())
        }
        return
    }



    private setgridproportion(col:number, row:number, proportion:number) {
        const columnSides: string[] = [];
        const rowSides: string[] = [];
    
        for (let index = 0; index < col; index++) {
            if (index % 2 === 0) {
                columnSides.push('1fr');
            } else {
                columnSides.push(`${proportion}fr`);
            }
        }

        for (let index = 0; index < row; index++) {
            if (index % 2 === 0) {
                rowSides.push('1fr');
            } else {
                rowSides.push(`${proportion}fr`);
            }
        }
    
        return {
            columns: columnSides.join(' '),
            rows: rowSides.join(' ')
        };
    }
    
    private setGridStyles(gridSides: { columns: string; rows: string }) {
        this.gridElement!.style.display = 'grid';
        this.gridElement!.style.gridTemplateColumns = gridSides.columns;
        this.gridElement!.style.gridTemplateRows = gridSides.rows;
        this.gridElement!.style.backgroundColor = 'transparent';
        this.gridElement!.style.gap = CELL_GAP;
        this.gridElement!.style.padding = CELL_GAP;
        this.gridElement!.style.height = `${CELL_SIZE}vmin`;
        this.gridElement!.style.width = `${CELL_SIZE}vmin`;
        
    }
    

    // public move(startLocation: { y: number; x: number }, endLocation: { y: number; x: number }) {
    //     const distance_x = endLocation.x - startLocation.x;
    //     const distance_y = endLocation.y - startLocation.y 
      
    //     // Set initial tile styles
    //     this.setTileStyles(startLocation);
    //     console.log(startLocation)
      
    //     // Trigger a reflow to ensure styles are applied before starting the animation
    //     void this.gridElement?.offsetHeight;
      
    //     // Set animation
    //     const tileElement = this.gridElement?.querySelector('.tile') as HTMLElement | null;
    //     if (tileElement) {
    //         tileElement.style.setProperty('--translateX', `${distance_x}px`);
    //         tileElement.style.setProperty('--translateY', `${distance_y}px`);
    //         tileElement.style.animation = 'moveAnimation 1s ease-in-out';
      
    //       // Update tile styles after animation completes
    //       tileElement.addEventListener('animationend', () => {
    //         tileElement.style.animation = 'none'; // Reset animation
    //         this.setTileStyles(endLocation); // Set final tile styles
    //       });
    //     }
    //   }
    
      
    //   public  moveTilesSequentially = (moves: string[][]) => {
    //     const moveWithDelay = (index: number) => {
    //       if (index < moves.length) {
    //         const [startLocation, endLocation] = moves[index];
    //         const start = this.getlocation(startLocation)
    //         const end = this.getlocation(endLocation)
    //         this.move(start, end);
            
    //         // Add a delay before initiating the next move
    //         setTimeout(() => {
    //           moveWithDelay(index + 1);
    //         }, /* Set your desired delay in milliseconds, e.g., */ 1000);
    //       }
    //     };
      
    //     // Start the sequence
    //     moveWithDelay(0);
    //   };


  
    // public setTileStyles(location: { y: number, x: number } | undefined) {
    //     if (this.gridElement && location) {
    //         const tileElement = this.gridElement.querySelector('.tile') as HTMLElement | null;
    
    //         // Check if the tileElement is found before trying to set styles
    //         if (tileElement) {
    //             // Set styles for .tile element based on --x and --y
    //             tileElement.style.position = "absolute";
    //             tileElement.style.backgroundColor = "orange";
    //             tileElement.style.borderRadius = '0.5vmin';
    //             tileElement.style.width = TILE_SZIE;
    //             tileElement.style.height = TILE_SZIE;
    
    //             tileElement.style.top = `${location.y}px`;
    //             tileElement.style.left = `${location.x}px`;
    
    //             // Set animation
    //             tileElement.style.animation = 'show 200ms ease-in-out';
    
    //         } else {
    //             console.error('Tile element not found');
    //         }
    //     }
    // }
    
    
    


    public setCellAndGapStyles(cellBackgroundColor: string, gapBackgroundColor: string,nodeBackgroundColor:string,borderRadius: string) {

        const cellElements = this.gridElement!.querySelectorAll('.cell');

        cellElements.forEach((cellElement) => {
            const id = cellElement.id.split("-");
            const col = parseInt(id[0]) % 2;
            const row = parseInt(id[1]) % 2;
            if (col == 0 && row == 0){
            (cellElement as HTMLElement).style.backgroundColor = cellBackgroundColor;
            }
            else if(col == 1 && row == 1){
            (cellElement as HTMLElement).style.backgroundColor = gapBackgroundColor;
            }
            else{
                (cellElement as HTMLElement).style.backgroundColor = nodeBackgroundColor;
            }
            (cellElement as HTMLElement).style.borderRadius = borderRadius;
        });

  

    }



}

