import { useEffect } from "react";
import Tile from "./tile";
import Fish from "./fish";
import { random } from "animejs";
import Barrier from "./barriers";
const COL_SIZE = 33;
const ROW_SIZE =33;
const CELL_SIZE = '90'; // Adjusted to be a string
const CELL_GAP = '0.5vmin'; // Adjusted to be a string
const GAP_BACKGROUNDCOLOR = "black"
// const TILE_SZIE = `3.5vmin`






class Cell {
    private cellElement: HTMLElement | null;
    private x: number;
    private y: number;
    private type: string;
    private object: Tile | null | Fish;
    private barrier: Barrier | null;
    private neighbors: (number[] | null)[];

    constructor(cellElement: HTMLElement | null, x: number, y: number, type: string) {
        this.cellElement = cellElement;
        this.x = x;
        this.y = y;
        this.type = type;
        this.object = null;
        this.barrier = null;
        this.neighbors = [];
    }

    public getType(){
        return this.type
    }


    public getObject(){
        return this.object
    }

    public setObject(tile:Tile | Fish ){
        this.object = tile;
        this.object.setX(this.x);
        this.object.setY(this.y);
        this.object.setLocation();
    }

    public setBarrier(barrier: Barrier){
        this.barrier = barrier
    }

    public getBarrier(){
        return this.barrier
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

    public setNeighbors(neighbors: (number[] | null)[]){
        this.neighbors = neighbors
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

    private cells: Cell[];
    private rows: number;
    private cols: number;
    constructor(gridElement: HTMLElement | null,rows:number = 33, cols:number = 33) {

        this.gridElement = gridElement;
        this.cells = [];
        this.rows = rows;
        this.cols = cols;

        if (this.gridElement) {

            const gridSides = this.setgridproportion(COL_SIZE,ROW_SIZE,0.25)
            this.setGridStyles(gridSides);
            this.cells = createCellElements(gridElement)
            this.setCellAndGapStyles('white',"transparent",'transparent','0.5vmin');
            this.setRandomBarriers()
        }
    }

    public getRows(){
        return this.rows
    }
    public getCols(){
        return this,this.cols
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


    public getEmptyBarriers(){
        const barriers = this.cells.filter(cell => cell.getObject() == null && cell.getBarrier() == null && cell.getType() == "gap")
        return barriers
    }

    public getExistingBarriers(){
        const barriers = this.cells.filter(cell => cell.getObject() == null && cell.getBarrier() != null && cell.getType() == "gap")
        return barriers
    }
    

    public setRandomBarriers(){
        const barriers = this.getEmptyBarriers()
        for(let i = 0; i < barriers.length; i++){
            if(Math.random() > 0.9 && !(barriers[i].getX() % 2 != 0 && barriers[i].getY() % 2 != 0)){
              
                const barrier = new Barrier()
                barriers[i].setBarrier(barrier)
                const cellElement = document.getElementById(`${barriers[i].getX()}-${barriers[i].getY()}`)
     
                if(cellElement){
                cellElement.style.backgroundColor = GAP_BACKGROUNDCOLOR;
       
                }
            }
        }
        return
    }


    private check_barriers(x1:number,y1:number,x2:number, y2:number) {
            let clear = 1; // Initialize clear to 1 (true) for each iteration
            clear = this.getExistingBarriers().some(element => {
                return element.getX() === ((Math.abs(x1) + Math.abs(x2)) / 2) &&
                       element.getY() === ((Math.abs(y1) + Math.abs(y2)) / 2);
            }) ? 0 : 1;
            return clear
    }


    private check_possible(x: number, y: number) {
        if (x >= 0 && x <= this.getRows() && y >= 0 && y <= this.getCols()) {
            return 1;
        }
        return 0;
    }
    


    private get_neighbor(x: number, y: number) {
   
        const left = this.check_possible(x, y - 2) && this.check_barriers(x, y, x, y - 2) ? [x, y - 2] :null;
        const down = this.check_possible(x + 2, y) && this.check_barriers(x, y, x + 2, y) ? [x + 2, y] : null;
        const right = this.check_possible(x, y + 2) && this.check_barriers(x, y, x, y + 2) ? [x, y + 2] :null;
        const up = this.check_possible(x - 2, y) && this.check_barriers(x, y, x - 2, y) ? [x - 2, y] : null;
    
        const neighbors: (number[] | null)[] = [up,right, down,left]; //clockwise
        return neighbors;
    }
    
    public setAllNeighbors() {
        const neighbors: { [key: string]: (number[] | null)[] } = {};
        this.cells.forEach((cellElement, index) => {
            const coordinates = [cellElement.getX(), cellElement.getY()];
            const neighbor = this.get_neighbor(coordinates[0], coordinates[1]);
    
            // Store neighbors in the dictionary using coordinates as keys
            neighbors[`${coordinates[0]},${coordinates[1]}`] = neighbor;
    
            cellElement.setNeighbors(neighbor);
        });
    
        return neighbors;
    }
    
    




    public UpdatePosition(object:Tile | null | Fish){
        if (object){
        const oldcell = this.cells.find(cell => cell.getObject() === object);

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

